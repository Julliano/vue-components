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
    <dgt-autocomplete :show-input="showInput" :items="items" :customizacao="'width: 98%; padding: 6px; border-radius: 0.25rem; border: 1px solid #9e9e9e;'"></dgt-autocomplete>
</template>

<script>
    import dgtAutocomplete from '../components/dgt-autocomplete.vue';
    export default {
        name: 'dgtAutocompleteView',
        components: {
            dgtAutocomplete
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
        }
    };
</Script>
