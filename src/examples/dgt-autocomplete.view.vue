<style lang="scss">
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
  <div class="field  width-full">
      <dgt-autocomplete id="my-auto-complete" :show-input="showInput" :items="items">
          <template slot="label">My custom label</template>
      </dgt-autocomplete>
  </div>
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
</script>
