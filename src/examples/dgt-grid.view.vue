<template>
    <dgt-grid :data="dataDgtGrid" @selectedLine="selectedLine" @pagination="pagination">
        <template slot="top-bar" slot-scope="slotProps">
            <button class="btn-save" @click.stop="saveCheckedItems">save item</button>
        </template>
        <template slot="checkBox-header" slot-scope="slotProps">
            <input type="checkbox" class="custom-col" v-model="slotProps.data.isChecked" @click="toggleChecked($event, true)"/>
        </template>
        <template slot="iconStorage-header" slot-scope="slotProps">
            <div class="header"></div>
            <span class="span-resize" @mousedown.prevent="resizeColumn($event)"></span>
        </template>
        <template slot="iconAttach-header" slot-scope="slotProps">
            <div class="header"></div>
            <span class="span-resize" @mousedown.prevent="resizeColumn($event)"></span>
        </template>
        <template slot="iconMessage-header" slot-scope="slotProps">
            <div class="header"></div>
            <span class="span-resize" @mousedown.prevent="resizeColumn($event)"></span>
        </template>
        <template slot="icon-order" slot-scope="slotProps">
            <i v-if="slotProps.currentColumn === slotProps.columnSort"
                :class="`material-icons arrow-sort-${slotProps.sortState === -1 ? 2 : slotProps.sortState}`">
                {{slotProps.data.arrowsSort[slotProps.sortState === -1 ? 2 : slotProps.sortState]}}
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
        <!-- <template slot="custom-pagination" slot-scope="slotProps">
            <button class="material-icons prev-all" :disabled="isPagination(slotProps.page, slotProps.total, 'prev')" @click="pagination($event, 1)" style="background: none; border: none;">first_page</button>
            <button class="material-icons prev" :disabled="isPagination(slotProps.page, slotProps.total, 'prev')" @click="pagination($event, `${parseInt(slotProps.page) - 1}`)" style="background: none; border: none;">chevron_left</button>
            Pág. {{slotProps.page}} de {{slotProps.total}}
            <button class="material-icons next" :disabled="isPagination(slotProps.page, slotProps.total, 'next')" @click="pagination($event, `${parseInt(slotProps.page) + 1}`)" style="background: none; border: none;">chevron_right</button>
            <button class="material-icons next-all" :disabled="isPagination(slotProps.page, slotProps.total, 'next')" @click="pagination($event, `${slotProps.total}`)" style="background: none; border: none;">last_page</button>
        </template> -->
    </dgt-grid>
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
            width: 30,
            isCustomColumn: true
        },
        iconStorage: {
            draggable: true,
            resizable: true,
            width: 30,
            isCustomColumn: true
        },
        iconAttach: {
            draggable: true,
            resizable: true,
            width: 30,
            isCustomColumn: true
        },
        iconMessage: {
            draggable: true,
            resizable: true,
            width: 30,
            isCustomColumn: true
        },
        horario: {
            name: 'horario',
            draggable: true,
            resizable: true
        },
        conta: {
            name: 'conta',
            draggable: true,
            resizable: true
        },
        url: {
            name: 'url',
            draggable: true,
            resizable: true
        },
        localidade: {
            name: 'localidade',
            draggable: true,
            resizable: true
        },
        data: {
            name: 'data',
            draggable: true,
            resizable: true
        }
    },
    minWidthColumn: 30,
    data: page1,
    icons: ['storage', 'attach_file', 'message'],
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
            dataDgtGrid
        };
    },
    methods: {
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
                //rest para salvaar multiplos objs
            }
        },
        resizeColumn(event) {
            this.$children[0].resizeColumn(event);
        }
    }
};
</script>
