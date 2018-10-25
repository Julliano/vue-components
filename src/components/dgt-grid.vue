<style lang="scss" scoped>
.dgt-grid-component {
  left: 372px;
  max-width: 944px;
  .dgt-grid {
    display: grid;
    overflow-x: auto;
    width: 944px;
    .col {
      min-width: 30px;
      overflow: hidden;
      .row {
        border-bottom: 1px solid gray;
        white-space: nowrap;
        height: 18px;
        position: relative;
        &.row-header:hover .span-resize {
          background-color: black;
        }
        &.selected {
          background-color: rgb(223, 236, 245);
        }
        .cel {
          width: 100%;
          height: 100%;
        }
        .material-icons {
          font-size: 16px;
          &.inactive {
            color: gray;
          }
        }
        .header {
          background-color: gray;
          width: 100%;
          display: inline-block;
          color: #fff;
          .arrow-sort-1 {
            transition: all 0.4s ease;
            transform: rotateZ(90deg);
          }
          .arrow-sort-2 {
            transition: all 0.4s ease;
            transform: rotateZ(-90deg);
          }
        }
        .span-resize {
          position: absolute;
          right: 0px;
          height: 100%;
          width: 4px;
          background-color: transparent;
          &:hover {
            cursor: w-resize;
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
        <slot name="top-bar" :data="data"></slot>
        <div class="dgt-grid" v-bind:style="{gridTemplateColumns: gridTemplateColumns}">
            <div class="col" :draggable="header.draggable" @dragstart="drag($event)" @drop.prevent="drop($event)" @dragover="dragover($event)" v-for="(header, headerKey, headerIndex) in headers" :key=headerKey :class="'col-'+headerIndex" :id="`col-${headerIndex}`">
                <div class="row row-header">
                    <div class="header header-1" @click="sortBy($event)">
                        <div class="name-column" v-if="header.isCustomColumn">
                            <slot :name="`${headerKey}-header`" :data="data"></slot>
                        </div>
                        <div class="name-column" v-else>
                            <span>{{header.name}}</span>
                            <slot name="icon-order" :data="data" :sortState="sortState" :columnSort="sortedColumn" :currentColumn="header.name"></slot> 
                        </div>
                    </div>
                    <span v-if="header.resizable" @mousedown.prevent="resizeColumn($event)" class="span-resize"></span>
                </div>
                <div class="row" v-for="(item, index, key) in filteredData" :key=key :class="`row-${index} ${selectedLine === item ? 'selected': ''}`" @click="selectedLineFunc(item)">
                    <div :class="`${headerKey} cel cel-${index}`" v-if="header['isCustomColumn']">
                        <slot :name="`${headerKey}-cel${index}`" :index="`${headerKey} ${key}`" :itemKey="item[headerKey]" :data="data" :obj="item"></slot>
                    </div>
                    <div :class="`${headerKey} cel cel-${index}`" v-else>
                        {{item[headerKey]}}
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination" v-if="pagination">
            <slot v-if="$scopedSlots['custom-pagination']" name="custom-pagination" :page="pagination.page" :total="pagination.total" :data="data"></slot>
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
        data: {}
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
            selectedLine: {}
        };
    },
    beforeMount() {
        if (!this.data) return;

        this.pagination = this.data.pagination;
        this.headers = this.data.headers;
    },
    mounted() {
        if (this.data && this.headers) {
            this.init();
            this.gridTemplateColumns = this.templateColumns();
            this.gridRow = `1 / ${Object.keys(this.headers).length}`;
        }

    },
    updated() {
        let widthColumn = document.querySelector('.dgt-grid .col:nth-child(1)').offsetWidth;

        if (!widthColumn) return;

        if (this.setMinWidthColumn(widthColumn)) {
            this.gridTemplateColumns = this.templateColumns(`${widthColumn}px `);
        }
    },
    methods: {
        init() {
            this.originalState = this.data.data;
            this.filteredData = this.originalState;
            this.filteredData = this.filter();
        },
        setMinWidthColumn(width) {
            if (this.minWidthColumn !== 10) return false;
            this.minWidthColumn = this.data.minWidthColumn || width;
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
            let cols = this.headers;
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
        'data.data'() {
            this.init();
        }
    }
};
</script>
