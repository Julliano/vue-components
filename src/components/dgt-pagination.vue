<style lang="scss" scoped>
.dgt-pagination-component {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .page-number-input{
    min-width: 60px;
    width: 60px;
  }
  .select-page-size{
    min-width: 70px;
    width: 70px;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .paginate-button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
</style>

<template>
    <div class="dgt-pagination-component">
        <div class="grid-item">
            <span>{{dictionary.showing}}</span>
            <select
                class="select-page-size inp"
                :title="dictionary.itemsPerPage"
                v-model="pageSizeCurrent"
                @change="changePageSize($event)"
            >
                <option
                    v-for="(value, index) in pageSizes"
                    :key="index"
                    :selected="pageSizeCurrent === value"
                >{{value}}</option>
            </select>
        </div>
        <div class="grid-item">
            <button
                class="paginate-button first"
                @click="paginate(1)"
                :disabled="disabledPaginationPrev"
                :title="dictionary.first"
            >
                <i :class="paginationIconClasses[0]" ></i>
            </button>
            <button
                class="paginate-button prev"
                @click="paginate(currentPage-1)"
                :disabled="disabledPaginationPrev"
                :title="dictionary.prev"
            >
                <i :class="paginationIconClasses[1]"></i>
            </button>
            <span>{{dictionary.page}}</span>
            <input
                class="page-number-input inp"
                type="text"
                :value="currentPage"
                :title="dictionary.currentPage"
                @keydown="pressKey($event)"
            >
            {{dictionary.of}}
            <span>{{totalPages}}</span>
            <button
                class="paginate-button next"
                @click="paginate(currentPage+1)"
                :disabled="disabledPaginationNext"
                :title="dictionary.next"
            >
                <i :class="paginationIconClasses[2]" ></i>
            </button>
            <button
                class="paginate-button last"
                @click="paginate(totalPages)"
                :disabled="disabledPaginationNext"
                :title="dictionary.last"
            >
                <i :class="paginationIconClasses[3]"></i>
            </button>
        </div>
        <div class="grid-item">
            {{rangeBegin}} - {{rangeEnd}} {{dictionary.of}} {{totalRegisters}} {{dictionary.registers}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'dgtPagination',
    props: {
        totalPagesDefault: Number,
        numberFormat: String,
        totalRegisters: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 30, 40, 50, 100];
            }
        },
        pageSizeDefault: {
            type: Number,
            default: 10
        },
        paginationIconClasses: {
            type: Array,
            default(){
                return  ['mdi mdi-chevron-double-left', 'mdi mdi-chevron-left', 'mdi mdi-chevron-right', 'mdi mdi-chevron-double-right']
            }
        },
        dictionary: {
            type: Object,
            default() {
                return {
                    showing: 'showing',
                    first: 'Go to first page',
                    prev: 'prev',
                    page: 'page',
                    of: 'of',
                    next: 'next',
                    last: 'Got to last page',
                    registers: 'registers',
                    currentPage: 'insert a page number',
                    itemsPerPage: 'Number of items per page'
                };
            }
        }
    },
    data() {
        return {
            showing: [0, 0],
            rangeBegin: 1,
            rangeEnd: 1,
            totalPages: this.totalPagesDefault | 10,
            disabledPaginationPrev: true,
            disabledPaginationNext: false,
            pageSizeCurrent: this.pageSizeDefault
        };
    },
    beforeMount() {
        this.totalPages = this.totalPagesDefault ? this.totalPagesDefault : this.countPages();
        this.elementsVisible();

    },
    mounted() {
        this.checkLockPagination();
    },
    updated() {
        this.totalPages = this.countPages();
        this.elementsVisible();
        this.checkLockPagination();
    },
    methods: {
        elementsVisible() {
            let range = this.currentPage * this.pageSizeCurrent;
            let rangeBegin = range - (this.pageSizeCurrent - 1);
            this.rangeBegin = rangeBegin > this.totalRegisters ? this.totalRegisters : rangeBegin;
            this.rangeEnd = range > this.totalRegisters ? this.totalRegisters : range;
        },
        countPages() {
            return Math.ceil(this.totalRegisters / this.pageSizeCurrent);
        },
        pressKey(event) {
            let page = parseInt(event.target.value);
            if (event.keyCode === 13 && page) {
                page = this.valideRequiredPage(page);
                this.emitGeneral('paginate', page, this.pageSizeCurrent);
            } else {
                this.validateValue(event);
            }
        },
        valideRequiredPage(requiredPage) {
            if (requiredPage > this.totalPages) requiredPage = this.totalPages;
            return requiredPage;
        },
        /* eslint-disabled-next-line complexity */
        validateValue(event) {
            if (event.keyCode !== 13) {
                setTimeout(() => {
                    event.target.value = event.target.value.match(/[0-9]*/);
                }, 10);
            } else if (event.target.value === '') {
                event.target.value = this.currentPage;
            }
        },
        checkLockPagination(page = this.currentPage) {
            if (this.totalPages === page) {
                this.disabledPaginationNext = true;
                this.disabledPaginationPrev = false;
            } else if (page === 1) {
                this.disabledPaginationPrev = true;
                this.disabledPaginationNext = false;
            } else if (page > 1 && page < this.totalPages) {
                this.disabledPaginationPrev = false;
                this.disabledPaginationNext = false;
            }
        },
        paginate(page) {
            this.checkLockPagination(page);
            this.emitGeneral('paginate', page, this.pageSizeCurrent);
        },
        changePageSize(event) {
            let currentPage = this.countPages();
            currentPage = currentPage < this.currentPage ? currentPage : this.currentPage;
            this.emitGeneral('change-page-size', event.target.value, currentPage);
        },
        emitGeneral(emitFunc, ...args) {
            this.$emit(emitFunc, args);
        }
    }
};
</script>
