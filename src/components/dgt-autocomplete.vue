<style lang="scss" scoped>
.dgt-autocomplete {
  .autocomplete {
    position: relative;
    input {
      width: var(--dgt-input-width, 98%);
      padding: var(--dgt-input-padding, 6px);
      border-radius: var(--dgt-input-border-radius, 0.25rem);
      border: var(--dgt-input-border, 1px solid #9e9e9e);
    }
    .autocomplete-results {
      padding: 0;
      position: absolute;
      margin: 0;
      border: 1px solid #eeeeee;
      max-height: var(--dgt-ul-max-height, 100px);
      color: var(--dgt-results-color, black);
      overflow: auto;
      width: var(--dgt-ul-width, 100%);
      display: block;
      z-index: 2;
      background: var(--dgt-ul-background, white);
      .autocomplete-result {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;
      }
      .autocomplete-result.is-active,
      .autocomplete-result:hover {
        background-color: var(--dgt-result-background, #4aae9b);
        color: var(--dgt-result-color, white);
      }
    }
  }
}
</style>

<template>
    <div class="dgt-autocomplete">
        <slot name="slot"></slot>
        <div class="autocomplete">
            <input v-if="showInput" type="text" class="input" @input="onChange" v-model="search"
                @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="onEnter" />
            <ul v-show="isOpen" class="autocomplete-results">
                <li v-for="(result, i) in results" :key="i" @click="onEnter(result)" class="autocomplete-result" :class="{ 'is-active': i === arrowCounter }">
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
        items: {},
        searchTag: '',
        showInput: false,
        existingTags: {},
        minSearch: {
            type: Number,
            default: 1
        }
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
            if (!this.search) {
                this.isOpen = false;
                return;
            }
            if (this.search.length >= this.minSearch) {
                this.filterResults();
                this.isOpen = true;
            }
        },
        filterResults() {
            if (this.items) {
                const resultados = this.items.filter(item => {
                    return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                });
                this.results = resultados;
                if (this.existingTags) {
                    this.results = resultados.filter(function(e) {
                        return this.indexOf(e) < 0;
                    }, this.existingTags);
                }
            }
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
        onEnter(param) {
            if (this.arrowCounter >= 0) {
                this.$emit('tag-selected', this.results[this.arrowCounter]);
            } else if (param) {
                this.$emit('tag-selected', param);
            } else {
                this.$emit('tag-selected', this.search);
            }
            this.search = '';
            this.isOpen = false;
            this.arrowCounter = -1;
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
        },
        searchTag() {
            if (!this.searchTag) this.isOpen = false;
            if (this.searchTag) {
                this.search = this.searchTag;
                this.isOpen = false;
                if (this.search) {
                    this.onChange();
                }
            }
        }
    }
};
</script>
