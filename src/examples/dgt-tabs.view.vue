<style lang="scss">
:root {
  --dgt-bar-animated-background-color: blue;
  --dgt-tab-border-bottom: 4px solid blue;
  --dgt-tabs-text-margin: 10px 5px 6px;
}
</style>

<template>
    <dgt-tabs :data="dataTabs" @swap-tabs="swapTabs">
        <template :slot="key" slot-scope="slotProps" v-for="(tab, key) in dataTabs.tabs">
            <span class="exceptional-content" :class="key" :key="key">{{tab.quantityContents}}</span>
        </template>
        <template slot="tabContent" slot-scope="slotProps">
            <div v-if="tabSelected === 'Filtros lorem'">
                A
            </div>
            <div v-else-if="tabSelected === 'Filtros Específicos'">
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá.<br/> 
                A ordem dos tratores não altera o pão duris. Tá deprimidis, eu conheço uma cachacis que pode <br/>
                alegrar sua vidis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
            </div>
            <div v-else-if="tabSelected === 'Filtros Gerais'">
                Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. <br/>
                Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. <br/>
                Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. <br/>
                Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
            </div>
            <div v-else>
                Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. <br/>
                Aenean aliquam molestie leo, vitae iaculis nisl. Cevadis im ampola pa arma uma pindureta. <br/>
                Interagi no mé, cursus quis, vehicula ac nisi. Nec orci ornare consequat. <br/>
                Praesent lacinia ultrices consectetur. Sed non ipsum felis.
            </div>
        </template>
    </dgt-tabs>
</template>

<script>
import dgtTabs from '../components/dgt-tabs.vue';

let dataTabs = {
    vertical: false,
    position: '',
    barAnimatedHidden: true,
    barAnimatedSize: '2',
    tabs: {
        'Filtros lorem': {
            block: true,
            quantityContents: 10
        },
        'Filtros impsum': {
            block: false,
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
            tabSelected: ''
        };
    },
    methods: {
        swapTabs(response) {
            [this.tabSelected] = [response[1]];
        }
    }
};
</script>
