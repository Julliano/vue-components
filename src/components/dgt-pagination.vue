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

  .arrow,
  .arrow-2 {
    cursor: pointer;
  }
}
</style>

<template>
    <div class="dgt-pagination-component">
        <div class="grid-item">
            <span>{{dictionary.showing}}</span>
            <select :title="dictionary.itemsPerPage" @change="itemsPerPage($event)">
                <option
                    :value="value"
                    v-for="(value, index) in dataProps.qtdPerPage"
                    :key="index"
                >{{value}}</option>
            </select>
        </div>
        <div class="grid-item">
            <div class="arrow-2 prev" :title="dictionary.first" @click="paginate(1)"></div>
            <div
                class="arrow prev"
                :title="dictionary.prev"
                @click="paginate(dataProps.currentPage-1)"
            ></div>
            <span>{{dictionary.page}}</span>
            <input
                class="page-number-input"
                type="text"
                :value="dataProps.currentPage"
                :title="dictionary.currentPage"
                @keydown="pressKey($event)"
            >
            {{dictionary.of}}
            <span>{{dataProps.totalPages}}</span>
            <div
                class="arrow next"
                :title="dictionary.next"
                @click="paginate(dataProps.currentPage+1)"
            ></div>
            <div
                class="arrow-2 next"
                :title="dictionary.last"
                @click="paginate(dataProps.totalPages)"
            ></div>
        </div>
        <div class="grid-item">
            <span>{{showing[0]}} - {{showing[1]}} {{dictionary.of}} {{dataProps.totalRegisters}} {{dictionary.registers}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dgtPagination',
    props: {
        dataProps: {
            type: Object,
            default: () => {
                return {
                    totalRegisters: 0,
                    totalPages: 0,
                    currentPage: 1,
                    numberFormat: 0,
                    qtdPerPage: [0]
                };
            }
        },
        dictionary: {
            type: Object,
            default: () => {
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
            showing: [0, 0]
        };
    },
    mounted() {
        this.elementsVisible();
    },
    updated() {
        this.elementsVisible();
    },
    methods: {
        elementsVisible() {
            let range = this.dataProps.currentPage * this.dataProps.itemsPerPage;
            this.showing = [range - (this.dataProps.itemsPerPage - 1), range];
        },
        pressKey(event) {
            let page = this.validateValue(event);
            if (event.keyCode === 13 && page) {
                this.emitGeneral('paginate', page);
            }
        },
        validateValue(event) {
            if (!((event.keyCode > 95 && event.keyCode < 106) ||
                (event.keyCode > 47 && event.keyCode < 58) ||
                event.keyCode === 8 || event.keyCode === 9)) {
                setTimeout(() => {
                    event.target.value = event.target.value.match(/[0-9]*/);
                }, 10);
            }
            return parseInt(event.target.value);
        },
        paginate(page) {
            this.emitGeneral('paginate', page);
        },
        itemsPerPage(event) {
            this.emitGeneral('items-per-page', event.target.value);
        },
        emitGeneral(emitFunc, ...args) {
            this.$emit(emitFunc, args);
        }
    }
};
</script>
