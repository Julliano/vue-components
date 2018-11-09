<style lang="scss" scoped>
.dgt-grid-component {
  left: var(--dgt-grid-component-left, 372px);
  max-width: var(--dgt-grid-component-max-width, 100%);
  .dgt-grid {
    display: grid;
    overflow-x: auto;
    width: var(--dgt-grid-width, 100%);
    .col {
      min-width: var(--dgt-grid-col-min-width, 30px);
      overflow: hidden;
      .row {
        border-bottom: var(--dgt-grid-row-border-bottom, 1px solid gray);
        white-space: var(--dgt-grid-row-white-space, nowrap);
        height: var(--rowHeight, 25px);
        position: relative;
        display: flex;
        align-items: center;
        &.row-header {
          background-color: var(--dgt-grid-row-header-background-color, gray);
        }
        &.row-header:hover .span-resize {
          background-color: var(
            --dgt-grid-row-header-span-background-color,
            #ccc
          );
        }
        &[selected="selected"] {
          background-color: var(
            --dgt-grid-row-selected-background-color,
            rgb(223, 236, 245)
          ) !important;
        }
        .cel {
          display: inline;
        }
        .header {
          width: 100%;
          align-items: center;
          position: relative;
          color: var(--dgt-grid-header-color, #fff);
          i {
            vertical-align: text-top;
          }
          &:hover {
            cursor: var(--dgt-grid-header-hover, default);
          }
          .name-column {
            width: 100%;
            height: 100%;
            vertical-align: sub;
            display: inline-block;
          }
        }
        .span-resize {
          position: absolute;
          right: var(--dgt-grid-header-span-size, 0px);
          height: 100%;
          width: var(--dgt-grid-header-span-width, 4px);
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
  .horizontal-center {
    justify-content: center;
    text-align: center;
  }
}
</style>

<template>
  <section class="dgt-grid-component component">
    <slot name="top-bar" :dataProps="dataProps"></slot>
    <div class="dgt-grid" v-bind:style="{gridTemplateColumns: gridTemplateColumns}">
      <div class="col" v-for="(header, headerKey, headerIndex) in dataProps.headers" :key=headerKey
           :class="`col-${headerIndex}`" :column-type="headerKey" :id="`col-${headerIndex}`"  @drop.prevent="drop($event)" @dragover="dragover($event)">
        <div class="row row-header" :draggable="header.draggable" :sortable="header.sortable" @dragstart="drag($event)">
          <div class="header" :class="['header-'+headerIndex,{'horizontal-center': header.isCustomColumn}]" @click="sortBy($event)">
            <span class="name-column" v-if="header.isCustomColumn">
              <slot :name="`${headerKey}-header`" :dataProps="dataProps"></slot>
            </span>
            <span class="name-column" v-else>
              <span>{{header.name}}</span>
              <slot name="icon-order" :dataProps="dataProps" :sortState="sortState" :columnSort="sortedColumn"
                    :currentColumn="header.name"></slot>
            </span>
          </div>
          <span v-if="header.resizable" @mousedown.prevent="resizeColumn($event)" class="span-resize"></span>
        </div>
        <div class="row"  v-for="(item, index, key) in filteredData" :key=key
             :class="['row-'+index,  {'horizontal-center':  header['isCustomColumn']}]"
             :selected="selectedLine === item" @mousedown.stop="clickLine($event, item, index)"
             :style="`background-color: ${item.lineColor}`">
          <template :class="`${headerKey} cel cel-${index}`" v-if="header['isCustomColumn']">
            <slot :name="`${headerKey}-cel${index}`" :index="`${headerKey} ${key}`" :itemKey="item[headerKey]"
                  :dataProps="dataProps" :obj="item"></slot>
          </template>
          <span :class="`${headerKey} cel cel-${index}`" v-else>
                        {{item[headerKey]}}
                    </span>
        </div>
      </div>
    </div>
    <footer class="pagination" v-if="pagination">
      <slot v-if="$scopedSlots['custom-pagination']" name="custom-pagination" :page="pagination.page"
            :total="pagination.total" :dataProps="dataProps"></slot>
      <div v-else>
        <button class="prev" :disabled="isPagination('prev')" v-on:click.stop="paginate(--pagination.page)">prev
        </button>
        <span class="prev">{{pagination.page}} de {{pagination.total}}</span>
        <button class="next" :disabled="isPagination('next')" v-on:click.stop="paginate(++pagination.page)">next
        </button>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
    name: 'dgtGrid',
    props: {
        dataProps: {
            disableOrderColumns: false,
            pagination: {
                page: 1,
                total: 1
            },
            headers: {
                Col1: {
                    name: 'Col1',
                    draggable: true,
                    resizable: true,
                    sortable: true,
                    width: '1fr',
                    isCustomColumn: false
                },
                Col2: {
                    name: 'Col1'
                },
                Col3: {
                    name: 'Col1'
                }
            },
            minWidthColumn: 80,
            lines: [
                {
                    Col1: 'row 1 colum 1',
                    Col2: 'row 1 colum 2',
                    Col3: 'row 1 colum 3',
                    selected: true
                },
                {
                    Col1: 'row 2 colum 1',
                    Col2: 'row 2 colum 2',
                    Col3: 'row 2 colum 3',
                    lineColor: 'red'
                }
            ]
        }
    },
    model: {
        prop: 'grid',
        event: ['selected-line', 'pagination']
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
        if (!this.dataProps.headers || !this.dataProps.lines) return;
        this.init();
        this.gridTemplateColumns = this.joinColumnsWidth(this.templateColumns());
        this.gridRow = `1 / ${Object.keys(this.dataProps.headers).length}`;
        [this.selectedLine] = this.dataProps.lines.filter((line) => {
            if (line.selected) {
                return line;
            }
            return false;
        });
    },
    mounted() {
        let dgtGrid = document.querySelector('.dgt-grid');

        if (!dgtGrid) return;

        let dgtGridColumnsWidth = dgtGrid.style.gridTemplateColumns.split(' ');
        let indexColumn1fr = 0;
        for (let columnWidth of dgtGridColumnsWidth) {
            indexColumn1fr++;
            if (columnWidth === '1fr') break;
        }
        let widthColumn = dgtGrid.querySelector(`.col:nth-child(${indexColumn1fr})`);
        widthColumn = widthColumn && widthColumn.offsetWidth;
        let gridTemplateColumns = this.templateColumns(`${widthColumn}px `);
        let widthGrid = dgtGrid.offsetWidth;
        gridTemplateColumns = this.trimWidthColumns(widthColumn, gridTemplateColumns,
            widthGrid);
        this.gridTemplateColumns = this.joinColumnsWidth(gridTemplateColumns);

    },
    methods: {
        init() {
            this.pagination = this.dataProps.pagination;
            this.originalState = this.dataProps.lines;
            this.filteredData = this.originalState;
            this.filteredData = this.filter();
        },
        sumWidthColumns(widthColumns) {
            return widthColumns.reduce((sum, current) => {
                let currentNum = parseInt(current.replace('px', ''));
                return currentNum ? currentNum + sum : sum;
            }, 0);
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
            const columnDrop = event.target.closest('.col');
            let rowHeader = columnDrop.querySelector('.row-header');
            if (!rowHeader.draggable) return;

            const grid = columnDrop.closest('.dgt-grid');
            const indexDrop = this.indexElement(grid, columnDrop);
            const indexDrag = this.indexElement(grid, this.columnDrag);

            let gridTemplateColumns = grid.style.gridTemplateColumns && grid.style.gridTemplateColumns.split(' ');

            [gridTemplateColumns[indexDrag], gridTemplateColumns[indexDrop]] =
                [gridTemplateColumns[indexDrop], gridTemplateColumns[indexDrag]];

            grid.style.gridTemplateColumns = gridTemplateColumns.join(' ');

            indexDrop > indexDrag ?
                grid.insertBefore(this.columnDrag, grid.childNodes[indexDrop + 1]) :
                grid.insertBefore(this.columnDrag, grid.childNodes[indexDrop]);

            this.emitNewDispositionColumns();
        },
        drag(event) {
            this.columnDrag = event.target.closest('.col');
            event.dataTransfer.setData('text', event.target.closest('.col').id);
        },
        dragover(event) {
            event.preventDefault();
        },
        emitNewDispositionColumns() {
            let columns = [...document.querySelectorAll('.dgt-grid .col')].map(el => {
                return el.getAttribute('column-type');
            });
            this.emitGeneral('dragable-columns', columns);
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
            const nameColumn = event.target.closest('.header').querySelector('.name-column span');
            nameColumn && this.emitGeneral('sort-column', nameColumn.textContent);

            if (this.dataProps.disableOrderColumns) return;

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
            let order = this.sortState || 1;
            let data = this.filteredData;
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
            const { body } = document;
            this.colWidthPos2 = event.clientX;
            let newWidth = 0;
            let columnResizible = null;
            let mouseMove = e => {
                e.preventDefault();
                columnResizible = event.target.closest('[class^="col"]');
                if (!columnResizible) return;
                let dgtGrid = document.querySelector('.dgt-grid');
                let elem = dgtGrid.querySelector(
                    `.${columnResizible.className.replace(/ /g, '.')}`
                );
                this.colWidthPos1 = this.colWidthPos2 - e.clientX;
                this.colWidthPos2 = e.clientX;
                let indexToDrop = this.indexElement(dgtGrid, elem);
                let splitWidthColumns = dgtGrid.style.gridTemplateColumns.split(' ');
                newWidth = elem.offsetWidth - this.colWidthPos1;
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
            let i = 0;
            body.addEventListener(
                'mouseup',
                () => {
                    if (i === 0) {
                        if (!columnResizible) return;

                        body.removeEventListener('mousemove', mouseMove, false);
                        this.emitGeneral('resize', newWidth, columnResizible.getAttribute('column-type'));
                    }
                    i++;
                },
                false
            );
        },
        templateColumns(widthColumn = '1fr ') {
            let cols = this.dataProps.headers;
            let templateColumns = [];

            for (let col in cols) templateColumns.push(
                cols[col].width && `${cols[col].width}px ` || widthColumn
            );

            return templateColumns;
        },
        trimWidthColumns(defaultWidthColumn, columnsWidth, widthGrid) {
            let sumWidthColumns = this.sumWidthColumns(columnsWidth);
            for (let key of columnsWidth.keys()) {
                let col = columnsWidth[key];
                if (col.indexOf(`${defaultWidthColumn}`) > -1) {
                    columnsWidth[key] =  `${parseInt(columnsWidth[key].replace('px', '')) -
                        (sumWidthColumns > widthGrid ? sumWidthColumns - widthGrid : 0)}px `;
                    break;
                }
            };
            return columnsWidth;
        },
        joinColumnsWidth(templateColumns) {
            return templateColumns.join(' ');
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
        clickLine(event, item, rowIndex) {
            switch (event.button) {
                case 0:
                    this.toogleSelectedLine(item, rowIndex);
                    break;
                case 2:
                    this.emitGeneral('right-click', event, item);
                    break;
            }
        },
        toogleSelectedLine(item) {
            this.selectedLine = item;
            this.emitGeneral('selected-line', this.selectedLine);
        },
        emitGeneral(emitFunc, ...args) {
            this.$emit(emitFunc, ...args);
        }
    },
    watch: {
        'dataProps.lines'() {
            this.init();
        }
    }
};
</script>
