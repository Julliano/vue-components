<style lang="scss">
.dgt-tabs-component {
  --dgt-tabs-bar-animated-background-color: blue;
  --dgt-tabs-border-bottom: 4px solid blue;
  --dgt-tabs-text-margin: 10px 5px 6px;
  --dgt-tabs-text-font-size: 16px;
  --dgt-tabs-text-padding: 10px;
  --dgt-tabs-margin-right: 8px;
  --dgt-tabs-before-color: #f5f5f5;
  --dgt-tabs-background-color: #ccc;
}
</style>

<template>
    <div>
        <div class="inline">
            <div class="grid">
                <label>animated-bar Hidden</label>
                <select v-model="dataTabs.barAnimatedHidden">
                    <option :value="true">true</option>
                    <option :value="false">false</option>
                </select>
            </div>
            <div class="grid">
                <label>Tabs color</label>
                <input type="text" style="width:100px" v-model="tabsColor">
            </div>
            <div class="grid">
                <label>Tab selected color</label>
                <input type="text" style="width:100px" v-model="tabSelectedColor">
            </div>
            <div class="grid">
                <label>disable tab</label>
                <select style="width:100px" v-model="disableTab">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
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
            <div class="grid">
                <label>size bar-animated</label>
                <input type="number" style="width:50px" v-model="dataTabs.barAnimatedSize">
            </div>
        </div>
        <dgt-tabs :dataProps="dataTabs" @swap-tabs="swapTabs" v-if="drawComponent">
            <template :slot="key" slot-scope="slotProps" v-for="(tab, key) in dataTabs.tabs"  :style="`background-color:${tabsColor}`">
                <span class="exceptional-content" :class="key" :key="key">{{tab.quantityContents}}</span>
            </template>
            <template slot="tabContent" slot-scope="slotProps">
                <div v-if="tabSelected === 'Filtros lorem'" style="width:500px">
                    A
                </div>
                <div v-else-if="tabSelected === 'Filtros Específicos'" style="width:500px">
                    Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.<br/> 
                    A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cachacis que pode <br/>
                    alegrar sua vidis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
                </div>
                <div v-else-if="tabSelected === 'Filtros Gerais'" style="width:500px">
                    Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. <br/>
                    Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. <br/>
                    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. <br/>
                    Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
                </div>
                <div v-else style="width:500px">
                    Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. <br/>
                    Aenean aliquam molestie leo, vitae iaculis nisl. Cevadis im ampola pa arma uma pindureta. <br/>
                    Interagi no mé, cursus quis, vehicula ac nisi. Nec orci ornare consequat. <br/>
                    Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                </div>
            </template>
        </dgt-tabs>
    </div>
</template>

<script>
/* eslint-disable */
import dgtTabs from '../components/dgt-tabs.vue';

let dataTabs = {
    vertical: false,
    position: '',
    barAnimatedHidden: false,
    barAnimatedSize: '2',
    tabs: {
        'Filtros lorem': {
            quantityContents: 10
        },
        'Filtros impsum': {
            quantityContents: 5
        },
        'Filtros Gerais': {
            selected: true,
            quantityContents: 3
        },
        'Filtros Específicos': {}
    }
};

export default {
    components: { dgtTabs },
    data() {
        return {
            dataTabs,
            tabSelected: '',
            tabsColor: '#ccc',
            disableTab: 0,
            disposition: 'horizontal',
            drawComponent: true,
            tabSelectedColor: '#898989'
        };
    },
    methods: {
        swapTabs(response) {
            [this.tabSelected] = [response[1]];
        }
    },
    watch: {
        disableTab(tabIndex) {
            for (let tab in dataTabs.tabs) {
                dataTabs.tabs[tab].block = false;
            }
            dataTabs.tabs[Object.keys(dataTabs.tabs)[tabIndex - 1]].block = true;
        },
        disposition(disposition) {
            switch (disposition) {
                case 'vertical-left':
                    dataTabs.vertical = true;
                    dataTabs.position = 'vertical-left';
                    this.drawComponent = false;
                    this.$nextTick(() => {
                        this.drawComponent = true;
                    });
                    break;
                case 'vertical-right':
                    dataTabs.vertical = true;
                    dataTabs.position = 'vertical-right';
                    this.drawComponent = false;
                    this.$nextTick(() => {
                        this.drawComponent = true;
                    });
                    break;
                default:
                    dataTabs.vertical = false;
                    dataTabs.position = '';
                    this.drawComponent = false;
                    this.$nextTick(() => {
                        this.drawComponent = true;
                    });
                    break;
            }
        },
        tabsColor(color) {
            document.querySelector('.dgt-tabs-component').style.setProperty('--dgt-tabs-background-color', color);
        },
        tabSelectedColor(color) {
            document.querySelector('.dgt-tabs-component').style.setProperty('--dgt-tabs-selected-background-color', color);
        }
    }
};
</script>
