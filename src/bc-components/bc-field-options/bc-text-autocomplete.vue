<style scoped lang="scss">
    @import "../styles/variables";
    @import "../styles/buttons";

    .bc-text-autocomplete-field {
        display: inline;
        flex-direction: column;
        .options-container {
            align-items: center;
            position: relative;
            ul {
                padding: 0;
                position: absolute;
                margin: 0;
                border: 1px solid #eeeeee;
                max-height: 120px;
                min-width: 100%;
                color: #000;
                overflow: auto;
                display: block;
                z-index: 2;
                background:  #fff;
                .autocomplete-result {
                    list-style: none;
                    text-align: left;
                    padding: 4px 2px;
                    cursor: pointer;
                }
                .autocomplete-result.is-active,
                .autocomplete-result:hover {
                    background-color: #333;
                    color: #fff;
                }
            }
        }
    }
</style>

<template>
    <div>
        <div class="bc-text-autocomplete-field">
            <div class="options-container">
                <input class="inp" type="text" v-model="field" @blur.prevent="onCloseOptions" :maxlength="attribSize"
                @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="selected()">
                <ul v-if="data.length && show">
                    <li v-for="(opt, idx) in data" :key="idx"
                    :class="{ 'is-active': idx === arrowCounter }" @mouseover="arrow(idx)"
                    class="autocomplete-result" @click.stop="selected(idx)"> {{ opt }} </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import bcService from '../services/bc-services.js';
    import {debounceTime} from '../utils/utils.js';

    export default {
        name: 'bc-text-autocomplete-field',
        props: {
            val: Array,
            attribName: String,
            uiName: String,
            attribSize: Number
        },
        data() {
            return {
                field: this.val[0] || '',
                data: [],
                arrowCounter: -1,
                selectedItem: null,
                show: true,
                search: false,
                updateOptions: debounceTime(500, this.debounceOptions)
            };
        },
        methods: {
            selected(idx) {
                if (!idx) {
                    idx = this.arrowCounter;
                }
                this.selectedItem = this.data[idx];
                this.field = this.selectedItem;
                this.search = true;
                this.data = [];
                this.arrowCounter = -1;
            },
            onCloseOptions() {
                setTimeout(() => {
                    this.show = false;
                }, 200);
            },
            onArrowDown() {
                if (this.data.length && !this.show) {
                    this.show = true;
                }
                if (this.arrowCounter < this.data.length - 1) {
                    this.arrowCounter = this.arrowCounter + 1;
                }
            },
            onArrowUp() {
                if (this.arrowCounter > 0) {
                    this.arrowCounter = this.arrowCounter - 1;
                }
            },
            arrow(idx) {
                this.arrowCounter = idx;
            },
            async handleValue() {
                if (!this.search) {
                    await this.updateOptions();
                } else {
                    this.search = false;
                }
                if (this.field === '') {
                    return this.$emit('change', null);
                }
                return this.$emit('change', [this.field]);
            },
            async debounceOptions() {
                if (this.field.length >= 3) {
                    this.data = await bcService.getAutocompleteFieldoptions(this.uiName,
                        this.attribName, this.field);
                    this.show = true;
                } else {
                    this.data = [];
                    this.show = false;
                }
            }
        },
        watch: {
            field() {
                this.handleValue();
            }
        }

    };
</script>
