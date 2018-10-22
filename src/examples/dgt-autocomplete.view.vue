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
        input{
            border: 1px solid #9e9e9e;
            padding: 6px 0px 6px 6px;
            border-radius: 0.25rem;
            width: 99%;
        }
    }
</style>

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
        searchTag: String,
        existingTags: Array
    },
    data() {
        return {
            showInput: true,
            items: [
                'Batman',
                'Super-Man',
                'Lex Luthor',
                'Lana Lang',
                'Arqueiro-Verde',
                'Aquaman',
                'Flash',
                'Mulher Maravilha'
            ],
            isOpen: false,
            results: [],
            isLoading: false,
            search: '',
            arrowCounter: 0
        };
    },
    watch: {
        items(val, oldValue) {
            // actually compare them
            if (val.length !== oldValue.length) {
                this.results = [
                    'Batman',
                    'Super-Man',
                    'Lex Luthor',
                    'Lana Lang',
                    'Arqueiro-Verde',
                    'Aquaman',
                    'Flash',
                    'Mulher Maravilha'
                ];
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
            // retorna os possíveis resultados (comparando todos em lowercase);
            const resultados = this.items.filter(item => {
                return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            });
            // garante que a tag que está sendo procurada já não está setada no component pai;
            this.results = resultados.filter(item => {
                return item.indexOf() < 0;
            }, this.existingTags);
        },
        setTags(result) {
            // Avisa o componente pai que a tag foi selecionada;
            this.$emit('tag-selected', result);
            this.search = result;
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
