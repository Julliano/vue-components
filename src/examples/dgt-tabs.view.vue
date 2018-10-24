<style lang="scss">
:root {
  --barAnimatedBackgroundColor: blue;
}
</style>

<template>
    <dgt-tabs :data="dataTabs" @swapTabs="swapTabs">
        <template :slot="key" slot-scope="slotProps" v-for="(tab, key) in dataTabs.tabs">
            <span class="exceptional-content" :class="key" :key="key">{{tab.quantityContents}}</span>
        </template>
        <template slot="tabContent" slot-scope="slotProps">
            <div v-if="tabSelected === 'Filtros lorem'">
                A
            </div>
            <div v-else-if="tabSelected === 'Filtros Específicos'">
                B
            </div>
            <div v-else-if="tabSelected === 'Filtros Gerais'">
                C
            </div>
            <div v-else>
                D
            </div>
        </template>
    </dgt-tabs>
</template>

<script>
import dgtTabs from '../components/dgt-tabs.vue';

let dataTabs = {
    vertical: false,
    position: '',
    barAnimatedHidden: false,
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
