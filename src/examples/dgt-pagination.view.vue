<style lang="scss">
.dgt-pagination-component {
  --dgt-pagination-arrow-size: 12px;
  --dgt-pagination-space-arrow-2: 5px;
  --dgt-pagination-arrow-2-border: 2px solid #525252;
  --dgt-pagination-arrow-border-width: 1px 1px 0 0;
}
</style>

<template>
    <dgt-pagination
        :data-props="dataPagination"
        :dictionary="dictionary"
        @paginate="paginate"
        @items-per-page="itemsPerPage"
    ></dgt-pagination>
</template>

<script>
import dgtPagination from '../components/dgt-pagination.vue';

let dataPagination = {
    totalPages: 12,
    totalRegisters: 1145,
    currentPage: 1,
    numberFormat: '',
    qtdPerPage: [50, 70, 100]
};

let dataPagination2 = {
    totalPages: 12,
    totalRegisters: 1145,
    currentPage: 2,
    numberFormat: '',
    qtdPerPage: [50, 70, 100]
};

let dictionary = {
    showing: 'Mostrando',
    first: 'Ir para primeira página',
    prev: 'Página anterior',
    page: 'Pág.',
    of: 'de',
    next: 'Próxima página',
    last: 'Ir para última página',
    registers: 'registros',
    currentPage: 'Insira o número de uma página',
    itemsPerPage: 'Número de itens por página'
};

export default {
    name: 'dgtPaginationView',
    components: { dgtPagination },
    data() {
        return {
            dataPagination,
            dictionary
        };
    },
    methods: {
        itemsPerPage(quantity) {
            return quantity;
        },
        paginate(pageNumber) {
            this.dataPagination = dataPagination2;
            return pageNumber;
        }
    }
};
</script>
