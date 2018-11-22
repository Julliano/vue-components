<style lang="scss" scoped>
.dgt-pagination-component {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: var(--dgt-pagination-component-height, 50px);
  width: var(--dgt-pagination-component-width, 100%);
  font-size: var(--dgt-pagination-component-font-size, 16px);
  background-color: var(--dgt-pagination-component-bg-color, #ccc);
  .grid-item {
    margin: var(--dgt-pagination-grid-item-margin, auto 0);
  }
  .grid-item:nth-child(1) {
    padding-left: var(--dgt-pagination-grid-item-nth-1-padding-left, 5px);
  }
  .grid-item:nth-child(2) {
    margin: var(--dgt-pagination-grid-item-nth-2-margin, auto);
    > * {
      margin: var(--dgt-pagination-grid-item-nth-2-direct-childs-margin, 0 5px);
    }
    .page-number-input {
      width: var(--dgt-pagination-page-number-input-width, 35px);
    }
  }
  .grid-item:nth-child(3) {
    text-align: var(--dgt-pagination-grid-item-nth-1-text-align, right);
    padding-right: var(--dgt-pagination-grid-item-nth-1-padding-right, 5px);
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .paginate-button {
    background-color: transparent;
    border: none;
    &[disable] {
      opacity: 0.5;
      pointer-events: none;
    }
    &:focus {
      outline-color: transparent;
    }
  }

  .arrow {
    display: inline-block;
    height: var(--dgt-pagination-arrow-size, 10px);
    width: var(--dgt-pagination-arrow-size, 10px);
    border: var(--dgt-pagination-arrow-border, 1px solid rgb(82, 82, 82));
    border-width: var(--dgt-pagination-arrow-border-width, 1px 1px 0 0);

    &.prev {
      transform: rotate(-135deg);
    }

    &.next {
      transform: rotate(45deg);
    }

    &:hover {
      border-color: #525252;
      border-width: 3px 3px 0px 0;
    }
  }
  .arrow-2 {
    display: inline-block;
    height: var(--dgt-pagination-arrow-size, 10px);
    &:after {
      content: "";
      display: block;
      height: var(--dgt-pagination-arrow-size, 10px);
      width: var(--dgt-pagination-arrow-size, 10px);
      border: var(--dgt-pagination-arrow-border, 1px solid #525252);
      border-width: var(--dgt-pagination-arrow-border-width, 1px 1px 0 0);
    }

    &.prev {
      padding-left: var(--dgt-pagination-space-arrow-2, 4px);
      border-left: var(--dgt-pagination-arrow-2-border, 2px solid #525252);
      &::after {
        transform: rotate(-135deg);
      }
    }

    &.next {
      padding-right: var(--dgt-pagination-space-arrow-2, 4px);
      border-right: var(--dgt-pagination-arrow-2-border, 2px solid #525252);
      &::after {
        transform: rotate(45deg);
      }
    }

    &:hover {
      &:after {
        border: var(
          --dgt-pagination-arrow-2-hover-after-border,
          3px solid #525252
        );
        border-width: var(
          --dgt-pagination-arrow-2-hover-border-with,
          3px 3px 0 0
        );
      }

      &.prev {
        border-left: var(
          --dgt-pagination-arrow-2-hover-border,
          3px solid #525252
        );
      }

      &.next {
        border-right: var(
          --dgt-pagination-arrow-2-hover-border,
          3px solid #525252
        );
      }
    }
  }
}
</style>

<template>
    <div class="dgt-pagination-component">
        <div class="grid-item">
            <span>{{dictionary.showing}}</span>
            <select
                class="select-page-size"
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
                :disable="disablePaginationPrev"
            >
                <div class="arrow-2 prev" :title="dictionary.first"></div>
            </button>
            <button
                class="paginate-button prev"
                @click="paginate(currentPage-1)"
                :disable="disablePaginationPrev"
            >
                <div class="arrow prev" :title="dictionary.prev"></div>
            </button>
            <span>{{dictionary.page}}</span>
            <input
                class="page-number-input"
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
                :disable="disablePaginationNext"
            >
                <div class="arrow next" :title="dictionary.next"></div>
            </button>
            <button
                class="paginate-button last"
                @click="paginate(totalPages)"
                :disable="disablePaginationNext"
            >
                <div class="arrow-2 next" :title="dictionary.last"></div>
            </button>
        </div>
        <div class="grid-item">
            <span>{{rangeBegin}} - {{rangeEnd}} {{dictionary.of}} {{totalRegisters}} {{dictionary.registers}}</span>
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
        dictionary: {
            type: Object,
            default() {
                return {
                    showing: 'showing',
                    first: 'Go to fisrt page',
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
            disablePaginationPrev: true,
            disablePaginationNext: false,
            pageSizeCurrent: this.pageSizeDefault
        };
    },
    beforeMount() {
        this.totalPages = this.countPages();
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
            if (!this.totalPagesDefault);
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
        /* eslint-disable-next-line complexity */
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
                this.disablePaginationNext = true;
                this.disablePaginationPrev = false;
            } else if (page === 1) {
                this.disablePaginationPrev = true;
                this.disablePaginationNext = false;
            } else if (page > 1 && page < this.totalPages) {
                this.disablePaginationPrev = false;
                this.disablePaginationNext = false;
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
