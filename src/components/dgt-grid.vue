<template>
    <div class="dgt-grid-component component">
        <slot name="top-bar" :data="data"></slot>
        <div class="dgt-grid" v-bind:style="{gridTemplateColumns: gridTemplateColumns}">
            <div class="col"  :draggable="header.draggable" @dragstart="drag($event)" @drop.prevent="drop($event)" @dragover="dragover($event)" v-for="(header, headerKey, headerIndex) in headers" :key=headerKey :class="'col-'+headerIndex" :id="`col-${headerIndex}`">
                <div class="row row-header">
                    <div class="header header-1" @click="sortBy($event)">
                        <div class="name-column" v-if="headerKey === 'customColumn'">
                            <slot name="custom-column-header" :data="data"></slot>
                        </div>
                        <div class="name-column" v-else>
                            <span>{{header.name}}</span>
                            <slot name="icon-order" :data="data" :sortState="sortState" :columnSort="sortedColumn" :currentColumn="header.name"></slot> 
                        </div>
                    </div>
                    <span v-if="header.resizable" @mousedown.prevent="resizeColumn($event)" class="span-resize"></span>
                </div>
                <div class="row" v-for="(item, index, key) in filteredData" :key=key :class="`row-${index} ${selectedLine === item ? 'selected': ''}`" @click="selectedLineFunc(item)">
                    <div :class="`${headerKey} cel cel-${index}`" v-if="headerKey === 'customColumn'">
                        <slot name="custom-column" :index="`${headerKey} ${key}`" :itemKey="item[headerKey]" :data="data" :obj="item"></slot>
                    </div>
                    <div :class="`${headerKey} cel cel-${index}`" v-else>
                        {{item[headerKey]}}
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination" v-if="pagination">
            Mostrar
            <select @change="quantity" v-model="itensQuantity">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            <slot v-if="$scopedSlots['custom-pagination']" name="custom-pagination" :page="pagination.page" :total="pagination.total" :data="data"></slot>
            <div v-else>
                <button class="prev" :disabled="isPagination('prev')" v-on:click.stop="emitGeneral('pagination', --pagination.page)">prev</button>
                <span class="prev">{{pagination.page}} de {{pagination.total}}</span>
                <button class="next" :disabled="isPagination('next')" v-on:click.stop="emitGeneral('pagination', ++pagination.page)">next</button>
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
    data() {
        return {
            itensQuantity: 10,
            minWidthColumn: 10,
            gridTemplateColumns: '',
            gridRow: '',
            sortedColumn: '',
            sortState: 0,
            pagination: Object,
            filteredData: Array,
            headers: Object,
            originalState: Array,
            colWidthPos1: 0,
            colWidthPos2: 0,
            selectedLine: null
        };
    },
    mounted: async function() {
        if (this.data) {
            this.init(this.data);
            this.gridTemplateColumns = this.templateColumns(this.headers);
            this.gridRow = `1 / ${Object.keys(this.headers).length}`;
        }
    },
    updated: function() {
        var widthColumn = document.querySelector('.dgt-grid .col:nth-child(1)').offsetWidth;

        if (!widthColumn) return;

        if (this.setMinWidthColumn(widthColumn)) {
            this.gridTemplateColumns = this.templateColumns(this.headers, `${widthColumn}px `);
        }
        this.pagination = this.data.pagination;
    },
    watch: {
        'data.data': function() {
            this.init(this.data);
        }
    },
    methods: {
        init: function(data) {
            this.headers = data.headers;
            this.originalState = data.data;
            this.filteredData = this.originalState;
            this.pagination = data.pagination;
        },
        setMinWidthColumn: function(width) {
            if (this.minWidthColumn !== 10) return false;
            this.minWidthColumn = width;
            return true;
        },
        indexElement(container, child) {
            let nodes = Array.prototype.slice.call(container.children);
            return nodes.indexOf(child);
        },
        quantity() {
            // mandar requisição para a api pedindo a lista de itens com limit() = this.itensQuantity;
            console.log(this.itensQuantity);
        },
        invertValues(a, b) {
            return [b, a];
        },
        drop(event) {
            const columnDrop = event.target.closest('[class^="col"]');
            if (columnDrop.draggable === false) {
                return;
            }
            const grid = columnDrop.parentElement;
            const indexDrop = this.indexElement(grid, columnDrop);
            const indexDrag = this.indexElement(grid, this.columnDrag);

            let gridTemplateColumns = grid.style.gridTemplateColumns;
            gridTemplateColumns = gridTemplateColumns.split(' ');

            const aux = gridTemplateColumns[indexDrag];
            gridTemplateColumns[indexDrag] = gridTemplateColumns[indexDrop];
            gridTemplateColumns[indexDrop] = aux;

            grid.style.gridTemplateColumns = gridTemplateColumns.join(' ');

            if (indexDrop > indexDrag) {
                grid.insertBefore(this.columnDrag, grid.childNodes[indexDrop + 1]);
            } else {
                grid.insertBefore(this.columnDrag, grid.childNodes[indexDrop]);
            }
        },
        drag(event) {
            this.columnDrag = event.target;
            event.dataTransfer.setData('text', event.target.id);
        },
        dragover(event) {
            event.preventDefault();
        },
        sortBy(event) {
            this.sortedColumn = event.target.closest('.name-column');

            this.sortedColumn =
                this.sortedColumn &&
                this.sortedColumn.querySelector('span') &&
                this.sortedColumn.querySelector('span').textContent;

            if (!this.sortedColumn) return;

            if (this.sortState === 0) {
                this.sortState = 1;
            } else if (this.sortState === 1) {
                this.sortState = -1;
            } else {
                this.sortState = 0;
            }
            this.filteredData = this.filter();
        },
        filter() {
            if (this.sortState === 0) {
                return this.originalState;
            }
            var order = this.sortState || 1;
            var data = this.filteredData;
            if (this.sortedColumn) {
                data = data.slice().sort(
                    function(a, b) {
                        a = a[this.sortedColumn] || '';
                        b = b[this.sortedColumn] || '';
                        return (a === b ? 0 : a > b ? 1 : -1) * order;
                    }.bind(this)
                );
            }
            return data;
        },
        resizeColumn(event) {
            event.preventDefault();
            const body = document.body;
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
        templateColumns(num, widthColumn = '1fr ') {
            let templateColumns = '';
            for (let i = 0; i < Object.keys(num).length; i++) {
                templateColumns += widthColumn;
            }
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
        selectedLineFunc(item) {
            this.selectedLine = this.selectedLine === item ? null : item;
            this.emitGeneral('selectedLine', this.selectedLine);
        },
        emitGeneral(emitFunc, ...args) {
            this.$bus && this.$bus.$emit(emitFunc, args);
        }
    }
};
</script>
