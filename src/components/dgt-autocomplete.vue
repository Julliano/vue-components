<style lang="scss" scoped>
    .dgt-autocomplete {
        .autocomplete {
            position: relative;
            input {
                box-sizing: border-box;
                width: var(--dgt-input-width, auto);
                padding: var(--dgt-input-padding, 0);
                border-radius: var(--dgt-input-border-radius, 0);
                border: var(--dgt-input-border, 1px solid #9e9e9e);
            }
            .autocomplete-results {
                padding: 0;
                position: absolute;
                margin: 0;
                border: 1px solid #eeeeee;
                max-height: var(--dgt-ul-max-height, 100px);
                color: var(--dgt-results-color, #000);
                overflow: auto;
                width: var(--dgt-ul-width, auto);
                display: block;
                z-index: 2;
                background: var(--dgt-ul-background, #fff);
                .autocomplete-result {
                    list-style: none;
                    text-align: left;
                    padding: 4px 2px;
                    cursor: pointer;
                }
                .autocomplete-result.is-active,
                .autocomplete-result:hover {
                    background-color: var(--dgt-result-background, #333);
                    color: var(--dgt-result-color, #fff);
                }
            }
        }
    }
</style>

<template>
    <div class="dgt-autocomplete">
        <label :for="id">
            <slot name="label"></slot>
        </label>
        <slot></slot>
        <div class="autocomplete">
            <input
                v-if="showInput"
                :id="id"
                :name="id"
                @blur="$emit('blur')"
                type="text"
                class="inp"
                @input="onChange"
                v-model="search"
                @keyup.down="onArrowDown"
                @keyup.up="onArrowUp"
                @keyup.enter="onEnter"
            >
            <ul v-show="isOpen" class="autocomplete-results">
                <li
                    v-for="(result, i) in results"
                    :key="i"
                    @click="onEnter(result)"
                    @keyup.enter="onEnter(result)"
                    class="autocomplete-result"
                    :class="{ 'is-active': i === arrowCounter }"
                >{{ result.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dgtAutocomplete',
        model: {
            event: 'tag-selected'
        },
        props: {
            id: String,
            items: Array,
            searchTag: {},
            showInput: Boolean,
            existingTags: {},
            autoCompleteOnly: Boolean,
            minSearch: {
                type: Number,
                default: Number
            },
            debounce: 0
        },
        data() {
            return {
                isOpen: false,
                results: [],
                search: '',
                arrowCounter: -1
            };
        },
        mounted() {
            document.addEventListener('click', this.handleClickOutside);
        },
        destroyed() {
            document.removeEventListener('click', this.handleClickOutside);
        },
        methods: {
            onChange() {
                this.$emit('changed');
                if (!this.search) {
                    this.isOpen = false;
                    return;
                }
                if (this.search.length >= this.minSearch) {
                    this.$emit('verified-change');
                    this.filterResults();
                }
            },
            filterResults() {
                setTimeout(() => {
                    if (this.items) {
                        const resultados = this.items.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(this.search.toLowerCase()) > -1;
                        });
                        this.results = resultados;
                        if (this.existingTags) {
                            this.results = resultados.filter(function(e) {
                                return this.indexOf(e.id) < 0;
                            }, this.existingTags.map(e2 => e2.id));
                        }
                        this.isOpen = !!this.results.length;
                    }
                }, this.debounce);
            },
            onArrowDown() {
                if (this.arrowCounter < this.results.length) {
                    this.arrowCounter = this.arrowCounter + 1;
                }
            },
            onArrowUp() {
                if (this.arrowCounter > 0) {
                    this.arrowCounter = this.arrowCounter - 1;
                }
            },
            onEnter(obj) {
                let selectedItem = null;
                if (obj && obj.label) selectedItem = obj;
                if (this.arrowCounter >= 0) {
                    selectedItem = this.results[this.arrowCounter];
                } else if (this.autoCompleteOnly) {
                    if (selectedItem) {
                        for (let i = 0; i < this.results.length; i++) {
                            let item = this.results[i];
                            if (selectedItem.label === item.label) {
                                selectedItem = item;
                                break;
                            }
                        }
                    } else {
                        this.isOpen = false;
                        this.search = '';
                        return;
                    }
                } else {
                    selectedItem = {
                        label: this.search
                    };
                }
                if (selectedItem) {
                    this.search = selectedItem.label;
                }
                this.$emit('tag-selected', selectedItem);
                this.isOpen = false;
                this.arrowCounter = -1;
                return;
            },
            handleClickOutside(evt) {
                if (!this.$el.contains(evt.target)) {
                    this.isOpen = false;
                    this.arrowCounter = -1;
                }
            }
        },
        watch: {
            items(val, oldValue) {
                if (val.length !== oldValue.length) {
                    this.results = val;
                }
                this.onChange();
            },
            searchTag() {
                this.isOpen = false;
                if (this.searchTag) {
                    this.search = this.searchTag.label;
                    if (this.search) {
                        this.onChange();
                    }
                }
            }
        }
    };
</script>
