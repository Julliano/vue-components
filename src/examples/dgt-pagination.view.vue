<style lang="scss">
.dgt-pagination-component {
  --dgt-pagination-arrow-size: 10px;
  --dgt-pagination-space-arrow-2: 5px;
  --dgt-pagination-arrow-2-border: 2px solid #525252;
  --dgt-pagination-arrow-border: 2px solid #525252;
  --dgt-pagination-arrow-2-border-width: 2px 2px 0 0;
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
            let obj1 = { um: 1 };
            let obj2 = { dois: 2 };
            let obj3 = { ...obj1, ...obj2 };
            console.log(obj3);
            return quantity;
        },
        paginate(pageNumber) {
            return pageNumber;
        }
    }
};
</script>
