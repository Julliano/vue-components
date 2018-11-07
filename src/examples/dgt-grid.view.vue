<style lang="scss">
.dgt-grid-view {
  .dgt-grid-component {
    .material-icons {
      font-size: 16px;
      &.inactive {
        color: gray;
      }
    }
    .arrow-sort-1 {
      transition: all 0.4s ease;
      transform: rotateZ(90deg);
    }
    .arrow-sort-2 {
      transition: all 0.4s ease;
      transform: rotateZ(-90deg);
    }
    input[type="checkbox"] {
      vertical-align: sub;
    }
    .arrow-drop-down {
      font-size: 23px;
      top: 0px;
      position: absolute;
      right: -5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .select-columns {
    ul {
      border: 1px solid #000;
      width: 140px;
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 5px;
      box-shadow: 0px 0px 7px #888888;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.5s;
      overflow: hidden;
      &.open {
        max-height: 200px;
        opacity: 1;
      }
    }
  }
}
</style>

<template>
    <div class="dgt-grid-view">
        <div class="select-columns">
            <input type="button" value="select columns" @click="showMenuColumns($event)">
            <ul class="list-columns">
                <li>
                    <input type="checkbox" checked value="checkBox" @click="toggleColumn($event)">
                    checkBox
                </li>
                <li>
                    <input type="checkbox" checked value="iconStorage" @click="toggleColumn($event)">
                    iconStorage
                </li>
                <li>
                    <input type="checkbox" checked value="iconAttach" @click="toggleColumn($event)">
                    iconAttach
                </li>
                <li>
                    <input type="checkbox" checked value="iconMessage" @click="toggleColumn($event)">
                    iconMessage
                </li>
                <li>
                    <input type="checkbox" checked value="horario" @click="toggleColumn($event)">
                    horario
                </li>
                <li>
                    <input type="checkbox" checked value="conta" @click="toggleColumn($event)">
                    conta
                </li>
                <li>
                    <input type="checkbox" checked value="url" @click="toggleColumn($event)">
                    url
                </li>
                <li>
                    <input type="checkbox" checked value="localidade" @click="toggleColumn($event)">
                    localidade
                </li>
                <li>
                    <input type="checkbox" checked value="data" @click="toggleColumn($event)">
                    data
                </li>
            </ul>
        </div>
        <dgt-grid class="dgt-grid-custom" v-if="drawComponent" :data-props="dataDgtGrid" @selected-line="selectedLine" @pagination="pagination" @sort-column="sortColumn">
            <template slot="top-bar" slot-scope="slotProps">
                <button class="btn-save" @click.stop="saveCheckedItems">save item</button>
            </template>
            <template slot="checkBox-header" slot-scope="slotProps">
                <input type="checkbox" class="custom-col" v-model="slotProps.dataProps.isChecked" @click="toggleChecked($event, true)"/>
                <i class="material-icons arrow-drop-down">arrow_drop_down</i>
            </template>
            <template slot="iconStorage-header" slot-scope="slotProps">
                <div class="header"></div>
            </template>
            <template slot="iconAttach-header" slot-scope="slotProps">
                <div class="header"></div>
            </template>
            <template slot="iconMessage-header" slot-scope="slotProps">
                <div class="header"></div>
            </template>
            <template slot="icon-order" slot-scope="slotProps">
                <i v-if="slotProps.currentColumn === slotProps.columnSort"
                    :class="`material-icons arrow-sort-${slotProps.sortState === -1 ? 2 : slotProps.sortState}`">
                    {{slotProps.dataProps.arrowsSort[slotProps.sortState === -1 ? 2 : slotProps.sortState]}}
                </i>
                <i v-else class="material-icons arrow-sort ">compare_arrows</i>
            </template>
            <template :slot="`checkBox-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <input type="checkbox"
                    ref="checkbox"
                    for="checkbox"
                    v-model="slotProps.obj.checked"
                    @change="toggleChecked($event)"
                    @click="preventPropagation($event)"
                    :key="index"
                >
            </template>
            <template :slot="`iconStorage-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <i class="material-icons" :key="index">storage</i>
            </template>
            <template :slot="`iconAttach-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <i class="material-icons" :key="index">attach_file</i>
            </template>
                <template :slot="`iconMessage-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <i class="material-icons" :key="index">message</i>
            </template>
        </dgt-grid>
    </div>
</template>

<script>
import dgtGrid from '../components/dgt-grid.vue';

const page2 = [
    {
        horario: 'horario3 page2',
        conta: 'conta3 page2',
        url: 'url3 page2',
        localidade: 'localidade3 page2',
        data: 'data3 page2',
        checked: false,
        storage: false,
        attach_file: false,
        message: true
    },
    {
        horario: 'horario1  page2',
        conta: 'conta1 page2',
        url: 'url1 page2',
        data: 'data1 page2',
        checked: false,
        storage: false,
        attach_file: false,
        message: true
    },
    {
        horario: 'horario2 page2',
        conta: 'conta2 page2',
        url: 'url2 page2',
        localidade: 'localidade2 page2',
        data: 'data2 page2',
        checked: false,
        storage: false,
        attach_file: false,
        message: true
    }
];
const page1 = [
    {
        horario: 'horario3',
        conta: 'conta3',
        url: 'url3',
        localidade: 'localidade3',
        data: 'data3',
        checked: false,
        storage: false,
        attach_file: false,
        message: true,
        tipo: 'pesquisa'
    },
    {
        horario: 'horario1',
        conta: 'conta1',
        url: 'url1',
        data: 'data1',
        checked: false,
        storage: false,
        attach_file: true,
        message: true,
        comments: '',
        tipo: 'email'
    },
    {
        rating: 3,
        horario: 'horario2',
        conta: 'conta2',
        url: 'url2',
        localidade: 'localidade2',
        data: 'data2',
        checked: false,
        storage: false,
        attach_file: false,
        message: true,
        tipo: 'midia'
    }
];
const dataDgtGrid = {
    lineSelected: {},
    pagination: {
        page: 1,
        total: 2
    },
    headers: {
        checkBox: {
            draggable: false,
            resizable: false,
            sortable: false,
            width: 40,
            isCustomColumn: true,
            closed: true
        },
        iconStorage: {
            draggable: false,
            resizable: false,
            sortable: false,
            width: 30,
            isCustomColumn: true,
            closed: true
        },
        iconAttach: {
            draggable: false,
            resizable: false,
            sortable: false,
            width: 30,
            isCustomColumn: true,
            closed: true
        },
        iconMessage: {
            draggable: false,
            resizable: false,
            sortable: false,
            width: 30,
            isCustomColumn: true,
            closed: true
        },
        horario: {
            name: 'horario',
            draggable: true,
            resizable: true,
            sortable: true,
            closed: true
        },
        conta: {
            name: 'conta',
            draggable: true,
            resizable: true,
            sortable: true
        },
        url: {
            name: 'url',
            draggable: true,
            resizable: true,
            sortable: true
        },
        localidade: {
            name: 'localidade',
            draggable: true,
            resizable: true,
            sortable: true
        },
        data: {
            name: 'data',
            draggable: true,
            resizable: true,
            sortable: true
        }
    },
    disableOrderColumns: false,
    minWidthColumn: 30,
    data: page1,
    checkedAll: false,
    checkeds: 0,
    arrowsSort: ['compare_arrows', 'arrow_right_alt', 'arrow_right_alt']
};

export default {
    name: 'dgtGridView',
    components: {
        dgtGrid
    },
    data() {
        return {
            dataDgtGrid,
            closedColumns: {},
            drawComponent: true
        };
    },
    methods: {
        reset() {
            this.drawComponent = false;
            this.$nextTick(() => {
                this.drawComponent = true;
            });
        },
        next(page, total) {
            if (parseInt(page) === parseInt(total)) return true;
            return false;
        },
        prev(page) {
            if (parseInt(page) === 1) return true;
            return false;
        },
        isPagination(page, total, direction) {
            switch (direction) {
                case 'prev':
                    return this.prev(page);
                case 'next':
                    return this.next(page);
            }
            return false;
        },
        selectedLine(objLine) {
            this.dataDgtGrid.lineSelected = objLine;
        },
        pagination(page) {
            this.dataDgtGrid.lineSelected = null;
            this.dataDgtGrid.pagination.page = page;
            this.toggleChecked('reset');
            this.dataDgtGrid.data = page === 2 ? page2 : page1;
        },
        sortColumn(columnName) {
            return columnName;
        },
        checkeAll() {
            this.dataDgtGrid.data.forEach(obj => {
                obj.checked = !this.dataDgtGrid.isChecked;
                this.dataDgtGrid.checkeds = obj.checked ? this.dataDgtGrid.data.length : 0;
            });
        },
        toggleChecked(event, toggleCheckedAll) {
            if (event === 'reset') {
                this.dataDgtGrid.isChecked = false;
                this.dataDgtGrid.checkeds = 0;
                return;
            }
            if (toggleCheckedAll) {
                this.checkeAll();
                return;
            }
            if (!event.target.checked) {
                this.dataDgtGrid.isChecked = false;
                --this.dataDgtGrid.checkeds;
            } else {
                ++this.dataDgtGrid.checkeds;
                if (this.dataDgtGrid.checkeds === this.dataDgtGrid.data.length) {
                    this.dataDgtGrid.isChecked = true;
                }
            }
        },
        preventPropagation(event) {
            event.stopPropagation();
        },
        iconActive(icon, obj) {
            return obj[icon];
        },
        saveCheckedItems() {
            let checkedItems = this.dataDgtGrid.data.filter(item => {
                return item.checked;
            });
            if (checkedItems.length) {
                //rest para salvar multiplos objs
            }
        },
        resizeColumn(event) {
            this.$children[0].resizeColumn(event);
        },
        showMenuColumns(event) {
            let listColumns = event.target.parentElement.querySelector('.list-columns');

            if (listColumns.className.indexOf('open') === -1) {
                listColumns.className += ' open';
            } else {
                listColumns.className = listColumns.className.replace(/open/g, '');
            }
        },
        removeColumn(columnName) {
            this.closedColumns[columnName] = this.dataDgtGrid.headers[columnName];
            this.dataDgtGrid.headers = Object.keys(this.dataDgtGrid.headers).reduce((obj, key) => {
                if (key !== columnName) {
                    obj[key] = this.dataDgtGrid.headers[key];
                }
                return obj;
            }, {});
            this.reset();
        },
        includeColumn(columnName) {
            this.dataDgtGrid.headers[columnName] = this.closedColumns[columnName];
            delete this.closedColumns[columnName];
            this.reset();
        },
        toggleColumn(event) {
            if (!event.target.checked) {
                this.removeColumn(event.target.value);
            } else {
                this.includeColumn(event.target.value);
            }
        }
    }
};
</script>
