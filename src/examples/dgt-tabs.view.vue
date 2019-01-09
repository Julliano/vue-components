<template>
    <div>
        <div class="inline">
            <div class="grid">
                <label>disable tab</label>
                <select style="width:100px" v-model="disableTab">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="grid">
                <label>Disposition</label>
                <select v-model="disposition">
                    <option>horizontal</option>
                    <option>vertical-left</option>
                    <option>vertical-right</option>
                </select>
            </div>
        </div>
        <dgt-tabs
            :tabs="dataTabs.tabs"
            :position="dataTabs.position"
            @changed="swapTabs">
            <dgt-tab>Conteúdo tab 1</dgt-tab>
            <dgt-tab>Conteúdo tab 2</dgt-tab>
            <dgt-tab>Conteúdo tab 3</dgt-tab>
            <dgt-tab>Conteúdo tab 4</dgt-tab>
        </dgt-tabs>
    </div>
</template>

<script>
import dgtTabs from '../components/dgt-tabs.vue';
import dgtTab from '../components/dgt-tab.vue';

let dataTabs = {
    position: '',
    tabs: [
        {
            label: 'Filtros lorem',
            disabled: true
        },
        {
            label: 'Filtros impsum',
            active: true
        },
        {
            label: 'Filtros Gerais'
        },
        {
            label: 'Filtros Específicos'
        }
    ]
};

export default {
    components: { dgtTabs, dgtTab },
    data() {
        return {
            dataTabs,
            disableTab: 0,
            disposition: 'horizontal',
            drawComponent: true
        };
    },
    methods: {
        swapTabs(tab) {
            console.log(tab);
        },
        setConfig(position) {
            dataTabs.position = position;
            this.drawComponent = false;
            this.$nextTick(() => {
                this.drawComponent = true;
            });
        }
    },
    watch: {
        disableTab(tabIndex) {
            for (let tab in dataTabs.tabs) {
                dataTabs.tabs[tab].disabled = false;
            }
            dataTabs.tabs[tabIndex].disabled = true;
        },
        disposition(disposition) {
            switch (disposition) {
                case 'vertical-left':
                    this.setConfig('vertical-left');
                    break;
                case 'vertical-right':
                    this.setConfig('vertical-right');
                    break;
                default:
                    this.setConfig('horizontal');
                    break;
            }
        }
    }
};
</script>
