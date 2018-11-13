<style lang="scss">
.dgt-tabs-component {
  --dgt-tabs-bar-animated-background-color: blue;
  --dgt-tabs-border-bottom: 4px solid transparent;
  --dgt-tabs-border-bottom-selected: 4px solid blue;
  --dgt-tabs-text-margin: 10px 5px 6px;
  --dgt-tabs-text-font-size: 16px;
  --dgt-tabs-text-padding: 10px;
  --dgt-tabs-margin-right: 8px;
  --dgt-tabs-before-color: #f5f5f5;
  --dgt-tabs-background-color: #ccc;
}
</style>

<template>
    <dgt-pagination :data-props="dataPagination" :names="names"></dgt-pagination>
</template>

<script>
/* eslint-disable */
import dgtPagination from '../components/dgt-pagination.vue';

let dataPagination = {
    totalPages: 12,
    totalRegisters: 1145,
    numberFormat: '',
    qtdPerPage: {
        default: 50,
        options: [70, 100]
    }
};

let names = {
    showing: 'Mostrando',
    first: 'início',
    prev: 'anterior',
    page: 'Pág.',
    of: 'de',
    next: 'próxima',
    last: 'última',
    registers: 'registros'
}

export default {
    name: 'dgtPaginationView',
    components: { dgtPagination },
    data() {
        return {
            dataPagination,
            names
        };
    },
    methods: {
    }
};
</script>
