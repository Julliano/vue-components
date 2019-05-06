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
                <input class="inp" type="text" v-model="field" @blur="onCloseOptions"
                @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="selected()">
                <ul v-if="data.length && show">
                    <li v-for="(opt, idx) in data" :key="idx"
                    :class="{ 'is-active': idx === arrowCounter }" @mouseover="arrow(idx)"
                    class="autocomplete-result" @click="selected(idx)"> {{ opt }} </li>
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
            uiName: String
        },
        data() {
            return {
                field: this.val[0] || '',
                data: [],
                options: [],
                arrowCounter: -1,
                selectedItem: null,
                show: true,
                updateOptions: debounceTime(500, this.debounceOptions)
            };
        },
        methods: {
            selected(idx) {
                if (!idx) {
                    idx = this.arrowCounter;
                }
                this.selectedItem = this.options[idx];
                this.field = this.selectedItem;
                this.options = [];
                this.arrowCounter = -1;
            },
            onCloseOptions() {
                this.show = false;
            },
            onArrowDown() {
                if (this.arrowCounter < this.options.length - 1) {
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
                await this.updateOptions();
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
