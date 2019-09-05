<style lang="scss">
  @import "../sass/variables";
  .popover{
    z-index: 100;
    padding: 0;
  }
  .dgt-grid-component{
    --dgt-grid-max-width: 100%;
    --dgt-grid-width:  auto;
    --dgt-grid-col-min-width: 30px;
    --dgt-grid-row-border-bottom: 1px solid #{$gray300};
    --rowHeight:  26px;
    --dgt-grid-row-header-span-background-color: #{lighten($primary-color, 35%)};
    --dgt-grid-row-header-background-color: #{$gray100};
    --dgt-grid-row-selected-background-color:  #{lighten($primary-color, 55%)};
    --dgt-grid-header-background-color: #{$gray100};
    --dgt-grid-header-hover:  #{$primary-color};
    --dgt-grid-header-color: #{$gray900};
    --dgt-grid-header-span-width:  5px;
    --dgt-grid-header-span-background-color: #{lighten($primary-color, 55%)};

    .row:not(.row-header) .mdi{
      font-size: 1.2em;
    }
    .icon-inactive {
      opacity: 0.5;
    }
    .row-header{
      text-transform: uppercase;
      position: sticky !important;
      top: 0 !important;
      z-index: 7;
      padding: 0 $normal-space;
      &[sortable]{
        transition: background-color .3s ease-in-out;
        &:hover,
        &:focus{
          background-color: $gray300 !important;
          color: $primary-color;
          cursor: pointer;
        }
        &:active{
          background-color: $gray400 !important;
        }
      }
      .header i{
        opacity: .65;
        vertical-align:  baseline !important;
      }
    }
    .row{
      padding: 0 $normal-space;
    }
  }
</style>
<template>
    <div class="dgt-grid-view">
          <button class="btn btn-primary" @click="showMenuColumns()">
            <i class="mdi mdi-chevron-down"></i> Hide Columns
          </button>
          <ul class="popover" v-show="showPopoverColumns">
              <li class="popover-item checkbox">
                  <input type="checkbox" id="checkbox" checked value="checkBox" @click="toggleColumn($event)">
                  <label for="checkbox">checkBox</label>
              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="iconStorage" checked value="iconStorage" @click="toggleColumn($event)">
                   <label for="iconStorage">IconStorage</label>

              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="iconAttach" checked value="iconAttach" @click="toggleColumn($event)">
                  <label for="iconAttach">IconAttach</label>
              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="iconMessage" checked value="iconMessage" @click="toggleColumn($event)">
                  <label for="iconMessage">IconMessage</label>
              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="horario" checked value="horario" @click="toggleColumn($event)">
                  <label for="horario">Horário</label>
              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="conta" checked value="conta" @click="toggleColumn($event)">
                  <label for="conta">Conta</label>
              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="url" checked value="url" @click="toggleColumn($event)">
                  <label for="url">URL</label>
              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="localidade" checked value="localidade" @click="toggleColumn($event)">
                  <label for="localidade">Localidade</label>
              </li>
            <li class="popover-item checkbox">
                  <input type="checkbox" id="data" checked value="data" @click="toggleColumn($event)">
                  <label for="data">Data</label>
              </li>
          </ul>
        <button class="btn btn-primary right" @click.stop="saveCheckedItems"><i class="mdi mdi-content-save"></i> save item</button>
        <dgt-grid class="dgt-grid-custom" :data-props="dataDgtGrid" @selected-line="selectedLine"
            @pagination="pagination" @sort-column="sortColumn" @dragable-columns="dragableColumns" @resize="resizeColumn" @right-click="rightClick">
            <template slot="checkBox-header" slot-scope="slotProps">
                <div class="checkbox">
                  <input type="checkbox" id="toggle-checkbox" class="custom-col" v-model="slotProps.dataProps.isChecked" @click="toggleChecked($event, true)"/>
                  <label for="toggle-checkbox"></label>
                </div>
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
                   class="mdi"
                   :class="`mdi-${sortIcon(slotProps.sortState)}`">
                </i>
                <i v-else class="mdi mdi-unfold-more-horizontal"></i>
            </template>
          <template :slot="`checkBox-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <div class="checkbox" :key="index">
                      <input type="checkbox"
                            ref="checkbox"
                            for="checkbox"
                            v-model="slotProps.obj.checked"
                            @change="toggleChecked($event)"
                            @mousedown="preventPropagation($event)"
                            :key="index"
                            :id="`checkbox-${index}`"
                        >
                        <label :for="`checkbox-${index}`"></label>
                </div>
          </template>
            <template :slot="`iconStorage-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <i class="mdi mdi-database" :key="index"></i>
            </template>
            <template :slot="`iconAttach-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <i class="mdi mdi-attachment" :key="index"></i>
            </template>
                <template :slot="`iconMessage-cel${index-1}`" v-for="index in 3" slot-scope="slotProps">
                <i class="mdi mdi-message-text" :key="index"></i>
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
        conta: 123456,
        url: 'url3',
        localidade: 'localidade3',
        data: 'data3',
        checked: false,
        storage: false,
        attach_file: false,
        message: true,
        tipo: 'pesquisa',
        selected: true
    },
    {
        horario: 'horario1',
        conta: 123456,
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
        conta: 123456,
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
    editMode: true,
    selectedLineIndex: 0,
    lineSelected: {},
    paginations: {
        page: 1,
        total: 1
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
    lines: page1,
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
            drawComponent: true,
            showPopoverColumns: false,
            selectedLineIndex: 1
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
        selectedLine(event, rowIndex) {
            this.dataDgtGrid.selectedLineIndex = rowIndex;
        },
        pagination(page) {
            this.dataDgtGrid.lineSelected = null;
            this.dataDgtGrid.paginations.page = page;
            this.toggleChecked('reset');
            this.dataDgtGrid.lines = page === 2 ? page2 : page1;
        },
        sortColumn(columnName) {
            return columnName;
        },
        checkeAll() {
            this.dataDgtGrid.lines.forEach(obj => {
                obj.checked = !this.dataDgtGrid.isChecked;
                this.dataDgtGrid.checkeds = obj.checked ? this.dataDgtGrid.lines.length : 0;
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
                if (this.dataDgtGrid.checkeds === this.dataDgtGrid.lines.length) {
                    this.dataDgtGrid.isChecked = true;
                }
            }
        },
        sortIcon(sortState) {
            switch (sortState) {
                case -1:
                    return 'chevron-up';
                case 0:
                    return 'unfold-more-horizontal';
                case 1:
                    return 'chevron-down';
            }
            return 'unfold-more-horizontal';
        },
        preventPropagation(event) {
            event.stopPropagation();
        },
        iconActive(icon, obj) {
            return obj[icon];
        },
        saveCheckedItems() {
            let checkedItems = this.dataDgtGrid.lines.filter(item => {
                return item.checked;
            });
            if (checkedItems.length) {
                //rest para salvar multiplos objs
            }
        },
        dragableColumns(columns) {
            return columns;
        },
        resizeColumn(newWidth, columnType) {
            dataDgtGrid.headers[columnType].width = newWidth;
        },
        rightClick(event, item) {
            return [event, item];
        },
        showMenuColumns() {
            this.showPopoverColumns = !this.showPopoverColumns;
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
