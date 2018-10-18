<template>
    <div class="dgt-autocomplete">
        <div class="autocomplete">
            <input v-if="showInput" type="text" @input="onChange" v-model="search" @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="onEnter" />
            <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
                <li v-for="(result, i) in results" :key="i" @click="setTags(result)" class="autocomplete-result" :class="{ 'is-active': i === arrowCounter }">
                    {{ result }}
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
        items: Array,
        searchTag: String,
        showInput: Boolean,
        existingTags: Array
    },
    data() {
        return {
            isOpen: false,
            results: [],
            isLoading: false,
            search: '',
            arrowCounter: 0
        };
    },
    watch: {
        items: function(val, oldValue) {
            // actually compare them
            if (val.length !== oldValue.length) {
                this.results = val;
                this.isLoading = false;
            }
        },
        searchTag: function() {
            if (this.searchTag !== null) {
                this.search = this.searchTag;
                this.isOpen = false;
                if (this.search !== '') {
                    this.onChange();
                }
            }
        }
    },
    created: function() {
        this.$bus.$on('onArrowDown', () => {
            this.onArrowDown();
            return;
        });
        this.$bus.$on('onArrowUp', () => {
            this.onArrowUp();
            return;
        });
        this.$bus.$on('onEnter', () => {
            this.onEnter();
            return;
        });
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    destroyed() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        onChange() {
            // Mostrar possíveis resultados para o autocomplete
            this.filterResults();
            this.isOpen = true;
        },
        filterResults() {
            // retorna os possíveis resultados (comparando todos em lowercase);
            const resultados = this.items.filter(item => {
                return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            });
            // garante que a tag que está sendo procurada já não está setada no component pai;
            this.results = resultados.filter(function(e) {
                return this.indexOf(e) < 0;
            }, this.existingTags);
        },
        setTags(result) {
            // Avisa o componente pai que a tag foi selecionada;
            this.$emit('tag-selected', result);
            this.search = '';
            this.isOpen = false;
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
        onEnter() {
            this.search = this.results[this.arrowCounter];
            this.$emit('tag-selected', this.search);
            this.isOpen = false;
            this.arrowCounter = -1;
        },
        handleClickOutside(evt) {
            if (!this.$el.contains(evt.target)) {
                this.isOpen = false;
                this.arrowCounter = -1;
            }
        }
    }
};
</Script>
