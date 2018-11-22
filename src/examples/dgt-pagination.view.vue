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
        :total-registers="totalRegisters"
        :current-page="currentPage"
        :dictionary="dictionary"
        @paginate="paginate"
        @change-page-size="changePageSize"
    ></dgt-pagination>
</template>

<script>
import dgtPagination from '../components/dgt-pagination.vue';

const dataPagination = {
    totalPagesDefault: 2,
    totalRegisters: 201,
    currentPage: 1,
    pageSizes: [50, 70, 100],
    pageSizeDefault: 50
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
            ...dataPagination,
            dictionary
        };
    },
    methods: {
        /* eslint-disable-next-line no-unused-vars*/
        changePageSize([pageSize, currentPage]) {
            if (!pageSize) return;
            this.$set(this.$data, 'pageSizeDefault', parseInt(pageSize));
            this.$set(this.$data, 'currentPage', parseInt(currentPage));
        },
        /* eslint-disable-next-line no-unused-vars*/
        paginate([pageNumber, pageSize]) {
            if (!pageNumber) return;
            this.$set(this.$data, 'currentPage', parseInt(pageNumber));
        }
    }
};
</script>
