<style lang="scss" scoped>
.dgt-pagination-component {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .grid-item {
    margin: auto 0;
  }
  .grid-item:nth-child(1) {
    padding-left: 5px;
  }
  .grid-item:nth-child(2) {
    margin: auto;
  }
  .grid-item:nth-child(3) {
    text-align: right;
    padding-right: 5px;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>

<template>
    <div
        class="dgt-pagination-component"
        style="height:50px; width:100%; border:1px solid red; background-color:#ccc;"
    >
        <div class="grid-item">
            <span>mostrar:</span>
            <select title="Number of items per page">
                <option value="50">50</option>
                <option value="70">70</option>
                <option value="100">100</option>
            </select>
        </div>
        <div class="grid-item">
            <button value="first" title="go to first">first</button>
            <button value="prev" title="prev">prev</button>
            <span>Pág.</span>
            <input
                type="text"
                value="1"
                title="prev"
                @keydown="pressKey($event)"
                style="width:35px"
            >
            <span>de 12</span>
            <button value="next" title="next">next</button>
            <button value="latter" title="go to last">last</button>
        </div>
        <div class="grid-item">
            <span>1-50 de 1.145 registros</span>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'dgtPagination',
    props: {
        dataProps: {
            qtdPerPage: {
                default: Number,
                options: [Number]
            },
            totalRegisters: Number,
            totalPages: Number,
            numberFormat: RegExp
        }
    },
    data() {
        return {};
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
