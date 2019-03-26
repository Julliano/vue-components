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
                max-height: 100px;
                color: #000;
                overflow: auto;
                width: 100%;
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
                <input class="inp" type="text" v-model="field" @keyup="filterOptions"
                @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="selected()">
                <ul v-if="options.length">
                    <li v-for="(opt, idx) in options" :key="idx"
                    :class="{ 'is-active': idx === arrowCounter }" @mouseover="arrow(idx)"
                    class="autocomplete-result" @click="selected(idx)"> {{ opt.name }} </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import bcService from '../services/bc-services.js';

    export default {
        name: 'bc-text-autocomplete-field',
        data() {
            return {
                field: '',
                data: [],
                options: [],
                arrowCounter: -1,
                selectedItem: null
            };
        },
        created() {
            // ajustar request (está retornando dados mocados)
            this.data = bcService.getAutocompleteFieldoptions();
        },
        methods: {
            fireFieldSelected() {
                this.$emit('text-selected', this.field);
            },
            filterOptions() {
                if (this.field.trim().length === 0) {
                    this.options = [];
                    return null;
                }
                return this.options = this.data.filter((obj) => {
                    return obj.name.toLowerCase().includes(this.field.toLowerCase());
                });
            },
            selected(idx) {
                if (!idx) {
                    idx = this.arrowCounter;
                }
                this.selectedItem = this.options[idx];
                this.field = this.selectedItem.name;
                console.log(this.options[idx]);
                this.options = [];
                this.arrowCounter = -1;
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
            }
        }
    };
</script>
