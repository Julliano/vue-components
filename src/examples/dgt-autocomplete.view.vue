<style lang="scss" scoped>
.custom {
  --dgt-input-width: 50%;
  --dgt-input-padding: 10px;
  --dgt-input-border-radius: 0.25rem;
  --dgt-input-border: 5px solid #9e9e9e;
  --dgt-ul-background: #000;
  --dgt-ul-width: 50%;
  --dgt-ul-max-height: 200px;
  --dgt-result-background: yellow;
  --dgt-result-color: black;
  --dgt-results-color: white;
}
</style>

<template>
    <dgt-autocomplete :show-input="showInput" :items="items"></dgt-autocomplete>
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
