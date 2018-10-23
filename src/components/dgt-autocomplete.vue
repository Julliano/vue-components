<style lang="scss" scoped>
    .dgt-autocomplete {
        .autocomplete {
            position: relative;
        }
        .autocomplete-results {
            padding: 0;
            position: absolute;
            margin: 0;
            border: 1px solid #eeeeee;
            max-height: 100px;
            overflow: auto;
            width: 100%;
            display: block;
            z-index: 2;
            background: white;
        }
        .autocomplete-result {
            list-style: none;
            text-align: left;
            padding: 4px 2px;
            cursor: pointer;
        }
        .autocomplete-result.is-active,
        .autocomplete-result:hover {
            background-color: #4aae9b;
            color: white;
        }
    }
</style>

<template>
    <div class="dgt-autocomplete">
        <div class="autocomplete">
            <input v-if="showInput" type="text" :style="customizacao" @input="onChange" v-model="search" @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="onEnter" />
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
        existingTags: Array,
        customizacao: String
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
        items(val, oldValue) {
            if (val.length !== oldValue.length) {
                this.results = val;
                this.isLoading = false;
            }
        },
        searchTag() {
            if (this.searchTag !== null) {
                this.search = this.searchTag;
                this.isOpen = false;
                if (this.search !== '') {
                    this.onChange();
                }
            }
        }
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
            // retorna os possíveis resultados;
            if (this.items) {
                const resultados = this.items.filter(item => {
                    return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                });
                if (this.existingTags) {
                    return this.results = resultados.filter(function(e) {
                        return this.indexOf(e) < 0;
                    }, this.existingTags);
                }
                this.results = resultados;
            }
            return this.results;
            // garante que a tag que está sendo procurada já não está setada no component pai;
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
