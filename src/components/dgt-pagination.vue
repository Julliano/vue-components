<style lang="scss" scoped>
.dgt-pagination-component {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: var(--dgt-pagination-component-height, 50px);
  width: var(--dgt-pagination-component-width, 100%);
  font-size: var(--dgt-pagination-component-font-size, 16px);
  border: 1px solid red;
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

    &.arrow-2:after {
      content: "";
      display: block;
      height: var(--dgt-pagination-arrow-size, 10px);
      width: var(--dgt-pagination-arrow-size, 10px);
      border: var(--dgt-pagination-arrow-border, 1px solid rgb(82, 82, 82));
      border-width: var(--dgt-pagination-arrow-border-width, 1px 1px 0 0);

      /* Parent's rotation also
        rotates transform axis */
      /* Add width of border to Y */
      transform: translate(5px, -6px);

      /* rotate handled by parent */
    }

    &.arrow-3:after {
      content: "";
      display: block;
      height: 0px;
      border-left: 2px solid rgb(82, 82, 82);
      transform: rotate(-45deg);
      margin-left: 10px;
      margin-top: -10px;
      padding-bottom: 16px;
      /* margin-left: 9px;
      margin-top: -9px;
      padding-bottom: 15px; */
    }
  }
}
</style>

<template>
    <div class="dgt-pagination-component">
        <div class="grid-item">
            <span>{{names.showing}}</span>
            <select title="Number of items per page">
                <option
                    :value="value"
                    v-for="(value, index) in dataProps.qtdPerPage"
                    :key="index"
                >{{value}}</option>
            </select>
        </div>
        <div class="grid-item">
            <!-- <button value="first" title="go to first">{{names.first}}</button> -->
            <div class="arrow arrow-3 prev" value="first" title="go to first"></div>
            <!-- <button value="prev" title="prev">{{names.prev}}</button> -->
            <div class="arrow prev" value="prev" title="prev"></div>
            <span>{{names.page}}</span>
            <input
                class="page-number-input"
                type="text"
                value="1"
                title="prev"
                @keydown="pressKey($event)"
            >
            {{names.of}}
            <span>{{dataProps.totalPages}}</span>
            <!-- <button value="next" title="next">{{names.next}}</button> -->
            <div class="arrow next" value="next" title="next"></div>
            <!-- <button value="latter" title="go to last">{{names.last}}</button> -->
            <div class="arrow arrow-3 next" value="latter" title="go to last"></div>
        </div>
        <div class="grid-item">
            <span>{{showing[0]}} - {{showing[1]}} {{names.of}} {{dataProps.totalRegisters}} {{names.registers}}</span>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'dgtPagination',
    props: {
        dataProps: {
            type: Object,
            default: () => {
                return {
                    totalRegisters: 0,
                    totalPages: 0,
                    numberFormat: 0,
                    qtdPerPage: [0],
                    
                }
            }
        },
        names: {
            type: Object,
            default: () => {
                return {
                    showing: 'showing',
                    first: 'first',
                    prev: 'prev',
                    page: 'page',
                    of: 'of',
                    next: 'next',
                    last: 'last',
                    registers: 'registers'
                }
            }
        }
    },
    data() {
        return {
            showing: [0, 0]
        };
    },
    methods: {
        pressKey(event) {
            if (event.keyCode === 13) {
                let page = parseInt(this.isValidValue(value));
                emitGeneral('paginated', page);
            } else {
                this.validateValue(event);
            }
        },
        validateValue(event) {
            if (!((event.keyCode > 95 && event.keyCode < 106)
                || (event.keyCode > 47 && event.keyCode < 58) 
                || event.keyCode == 8
                || event.keyCode == 9)) {
                setTimeout(() => {
                    event.target.value = event.target.value.match(/[0-9]*/)
                }, 10);
            }
        },
        getTotalRegisters() {
            let totalRegisters = this.dataProps.totalRegisters;
            if (totalRegisters) return totalRegisters;
            
            calcTotal
        },
        isValidValue(value) {
            if(value.match(/[A-z]*/g)) return false;

            return true;
        },
        paginate(event){
            let eventType = event.target.getAttribute('value');
            this.emitGeneral(eventType)
        },
        emitGeneral(emitFunc, ...args) {
            this.$emit(emitFunc, args);
        }
    }
};
</script>
