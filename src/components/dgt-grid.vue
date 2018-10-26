<style lang="scss" scoped>
.dgt-grid-component {
  left: var(--gridComponentLeft, 372px);
  max-width: var(--dgt-grid-max-width, 944px);
  .dgt-grid {
    display: grid;
    overflow-x: auto;
    width: var(--dgt-grid-width, 944px);
    .col {
      min-width: var(--dgt-grid-col-min-width, 30px);
      overflow: hidden;
      .row {
        border-bottom: var(--dgt-grid-row-border-bottom, 1px solid gray);
        white-space: var(--rowWhiteSpace, nowrap);
        height: var(--rowHeight, 25px);
        position: relative;
        &.row-header:hover .span-resize {
          background-color: var(--dgt-grid-row-header-background-color, black);
        }
        &.selected {
          background-color: var(
            --dgt-grid-row-selected-background-color,
            rgb(223, 236, 245)
          );
        }
        .cel {
          width: 100%;
          height: 100%;
        }
        .header {
          background-color: var(--dgt-grid-header-background-color, gray);
          width: 100%;
          height: 100%;
          display: inline-block;
          color: var(--dgt-grid-header-color, #fff);
          &:hover {
            cursor: var(--dgt-grid-header-hover, default);
          }
        }
        .span-resize {
          position: absolute;
          right: var(--dgt-grid-header-span-size, 0px);
          height: 100%;
          width: var(--dgt-grid-header-span-width, 4px);
          background-color: var(
            --dgt-grid-header-span-background-color,
            transparent
          );
          &:hover {
            cursor: var(--dgt-grid-header-span-resize-hover, w-resize);
          }
        }
        &:not(.header) {
          user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
        }
      }
    }
  }
}
</style>

<template>
    <div class="dgt-grid-component component">
        <slot name="top-bar" :dataProps="dataProps"></slot>
        <div class="dgt-grid" v-bind:style="{gridTemplateColumns: gridTemplateColumns}">
            <div class="col" :draggable="header.draggable" @dragstart="drag($event)" @drop.prevent="drop($event)" @dragover="dragover($event)" v-for="(header, headerKey, headerIndex) in dataProps.headers" :key=headerKey :class="'col-'+headerIndex" :id="`col-${headerIndex}`">
                <div class="row row-header">
                    <div class="header header-1" @click="sortBy($event)">
                        <div class="name-column" v-if="header.isCustomColumn">
                            <slot :name="`${headerKey}-header`" :dataProps="dataProps"></slot>
                        </div>
                        <div class="name-column" v-else>
                            <span>{{header.name}}</span>
                            <slot name="icon-order" :dataProps="dataProps" :sortState="sortState" :columnSort="sortedColumn" :currentColumn="header.name"></slot> 
                        </div>
                    </div>
                    <span v-if="header.resizable" @mousedown.prevent="resizeColumn($event)" class="span-resize"></span>
                </div>
                <div class="row" v-for="(item, index, key) in filteredData" :key=key :class="`row-${index} ${selectedLine === item ? 'selected': ''}`" @click="selectedLineFunc(item)">
                    <div :class="`${headerKey} cel cel-${index}`" v-if="header['isCustomColumn']">
                        <slot :name="`${headerKey}-cel${index}`" :index="`${headerKey} ${key}`" :itemKey="item[headerKey]" :dataProps="dataProps" :obj="item"></slot>
                    </div>
                    <div :class="`${headerKey} cel cel-${index}`" v-else>
                        {{item[headerKey]}}
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination" v-if="pagination">
            <slot v-if="$scopedSlots['custom-pagination']" name="custom-pagination" :page="pagination.page" :total="pagination.total" :dataProps="dataProps"></slot>
            <div v-else>
                <button class="prev" :disabled="isPagination('prev')" v-on:click.stop="paginate(--pagination.page)">prev</button>
                <span class="prev">{{pagination.page}} de {{pagination.total}}</span>
                <button class="next" :disabled="isPagination('next')" v-on:click.stop="paginate(++pagination.page)">next</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dgtGrid',
    props: {
        dataProps: {
            pagination: {
                page: 1,
                total: 1
            },
            headers: {
                Col1: {
                    name: 'Col1'
                },
                Col2: {
                    name: 'Col1'
                },
                Col3: {
                    name: 'Col1'
                },
                Col4: {
                    name: 'Col1'
                },
                Col5: {
                    name: 'Col1'
                }
            },
            minWidthColumn: 80,
            data: [
                {
                    Col1: 'row 1 colum 1',
                    Col2: 'row 1 colum 2',
                    Col3: 'row 1 colum 3',
                    Col4: 'row 1 colum 4',
                    Col5: 'row 1 colum 5'
                },
                {
                    Col1: 'row 2 colum 1',
                    Col2: 'row 2 colum 2',
                    Col3: 'row 2 colum 3',
                    Col4: 'row 2 colum 4',
                    Col5: 'row 2 colum 5'
                }
            ]
        }
    },
    model: {
        prop: 'grid',
        event: ['selectedLine', 'pagination']
    },
    data() {
        return {
            minWidthColumn: 10,
            gridTemplateColumns: '',
            gridRow: '',
            sortedColumn: '',
            sortState: 0,
            filteredData: [],
            originalState: [],
            colWidthPos1: 0,
            colWidthPos2: 0,
            selectedLine: {},
            headers: {}
        };
    },
    beforeMount() {
        if (!this.dataProps) return;

        this.pagination = this.dataProps.pagination;
        this.dataProps.headers = this.dataProps.headers;
    },
    mounted() {
        if (this.dataProps && this.dataProps.headers) {
            this.init();
            this.gridTemplateColumns = this.templateColumns();
            this.gridRow = `1 / ${Object.keys(this.dataProps.headers).length}`;
        }

    },
    updated() {
        let widthColumn = document.querySelector('.dgt-grid .col:nth-child(1)');
        widthColumn = widthColumn && widthColumn.offsetWidth;

        if (!widthColumn) return;

        if (this.setMinWidthColumn(widthColumn)) {
            this.gridTemplateColumns = this.templateColumns(`${widthColumn}px `);
        }
    },
    methods: {
        init() {
            this.originalState = this.dataProps.data;
            this.filteredData = this.originalState;
            this.filteredData = this.filter();
        },
        setMinWidthColumn(width) {
            if (this.minWidthColumn !== 10) return false;
            this.minWidthColumn = this.dataProps.minWidthColumn || width;
            return true;
        },
        indexElement(container, child) {
            let nodes = Array.prototype.slice.call(container.children);
            return nodes.indexOf(child);
        },
        drop(event) {
            const columnDrop = event.target.closest('[class^="col"]');
            if (!columnDrop.draggable) return;

            const grid = columnDrop.parentElement;
            const indexDrop = this.indexElement(grid, columnDrop);
            const indexDrag = this.indexElement(grid, this.columnDrag);

            let gridTemplateColumns = grid.style.gridTemplateColumns && grid.style.gridTemplateColumns.split(' ');

            [gridTemplateColumns[indexDrag], gridTemplateColumns[indexDrop]] =
                [gridTemplateColumns[indexDrop], gridTemplateColumns[indexDrag]];

            grid.style.gridTemplateColumns = gridTemplateColumns.join(' ');

            indexDrop > indexDrag ?
                grid.insertBefore(this.columnDrag, grid.childNodes[indexDrop + 1]) :
                grid.insertBefore(this.columnDrag, grid.childNodes[indexDrop]);
        },
        drag(event) {
            this.columnDrag = event.target;
            event.dataTransfer.setData('text', event.target.id);
        },
        dragover(event) {
            event.preventDefault();
        },
        setSortState() {
            switch (this.sortState) {
                case 0:
                    this.sortState = 1;
                    break;
                case 1:
                    this.sortState = -1;
                    break;
                default:
                    this.sortState = 0;
                    break;
            }
        },
        sortBy(event) {
            this.sortedColumn = event.target.closest('.name-column');

            this.sortedColumn =
                this.sortedColumn &&
                this.sortedColumn.querySelector('span') &&
                this.sortedColumn.querySelector('span').textContent;

            if (!this.sortedColumn) return;

            this.setSortState();
            this.filteredData = this.filter();
        },
        filter() {
            if (this.sortState === 0) {
                return this.originalState;
            }
            var order = this.sortState || 1;
            var data = this.filteredData;
            if (this.sortedColumn) {
                data = data.slice().sort((a, b) => {
                    a = a[this.sortedColumn] || '';
                    b = b[this.sortedColumn] || '';
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
        },
        resizeColumn(event) {
            event.preventDefault();
            const { body } = document;
            this.colWidthPos2 = event.clientX;
            let mouseMove = e => {
                e.preventDefault();
                let columnResizible = event.target.closest('[class^="col"]');
                if (!columnResizible) return;
                let dgtGrid = document.querySelector('.dgt-grid');
                let elem = dgtGrid.querySelector(
                    `.${columnResizible.className.replace(/ /g, '.')}`
                );
                this.colWidthPos1 = this.colWidthPos2 - e.clientX;
                this.colWidthPos2 = e.clientX;
                let indexToDrop = this.indexElement(dgtGrid, elem);
                let splitWidthColumns = dgtGrid.style.gridTemplateColumns.split(' ');
                let newWidth = elem.offsetWidth - this.colWidthPos1;
                if (elem.offsetWidth >= this.minWidthColumn) {
                    splitWidthColumns[indexToDrop] = `${newWidth}px`;
                    if (newWidth < this.minWidthColumn) {
                        splitWidthColumns[indexToDrop] = `${this.minWidthColumn}px`;
                    }
                    dgtGrid.style.gridTemplateColumns = splitWidthColumns.join(' ');
                } else {
                    splitWidthColumns[indexToDrop] = this.minWidthColumn;
                }
            };
            body.addEventListener('mousemove', mouseMove, false);
            body.addEventListener(
                'mouseup',
                () => {
                    body.removeEventListener('mousemove', mouseMove, false);
                },
                false
            );
        },
        templateColumns(widthColumn = '1fr ') {
            let cols = this.dataProps.headers;
            let templateColumns = '';

            for (let col in cols) templateColumns +=
                (widthColumn !== '1fr ' && cols[col].width && `${cols[col].width}px `) ||
                widthColumn;

            return templateColumns;
        },
        isPagination(direction) {
            switch (direction) {
                case 'prev':
                    if (this.pagination.page === 1) return true;
                    break;
                case 'next':
                    if (this.pagination.page === this.pagination.total) return true;
                    break;
            }
            return false;
        },
        paginate(page) {
            this.emitGeneral('pagination', page);
        },
        selectedLineFunc(item) {
            this.selectedLine = this.selectedLine === item ? null : item;
            this.emitGeneral('selectedLine', this.selectedLine);
        },
        emitGeneral(emitFunc, ...args) {
            this.$emit(emitFunc, ...args);
        }
    },
    watch: {
        'dataProps.data'() {
            this.init();
        }
    }
};
</script>
