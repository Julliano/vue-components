<style lang="scss" scoped>
.dgt-tag-input-component {
  position: relative;
  background-color: #fff;
  margin-top: 5px;
  .tag-input {
    min-width: 100px;
    border: none;
    margin: 0;
  }
  .new-tag-input {
    flex: 1 0 auto;
    display: flex;
    font-size: 0.85em;
    padding: 5px 5px;
    margin: 0px;
  }
  .input {
    border: 1px solid #9e9e9e;
    padding: 4px;
    border-radius: 0.25rem;
    flex-wrap: wrap;
    display: flex;
  }
  input {
    outline: none;
    min-width: 100px;
    flex: 1 0 auto;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }
  .tag {
    align-items: center;
    border-radius: 290486px;
    display: flex;
    min-height: 2em;
    max-width: 315px;
    line-height: 1.5;
    padding: 0 0.875em 0.1em 0.875em;
    margin: 2px 1px;
    vertical-align: top;
    word-break: break-all;
    &.is-info {
      background-color: var(--dgt-background-tag, #3273dc);
      color: #fff;
    }
    .delete {
      margin-left: 0.25em;
      margin-right: -0.5em;
      margin-top: 2px;
      cursor: pointer;
      background-color: var(--dgt-background-delete-tag, rgba(10, 10, 10, 0.2));
      border: none;
      border-radius: 290486px;
      transform: rotate(45deg);
      outline: none;
      &.is-small {
        height: 16px;
        width: 16px;
      }
      &:after,
      &:before {
        background-color: var(--dgt-delete-tag, #fff);
        display: block;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
      &:after {
        height: 50%;
        width: 2px;
        content: "";
      }
      &:before {
        height: 2px;
        width: 50%;
        content: "";
      }
    }
  }
}
</style>

<template>
    <div class="dgt-tag-input-component">
        <div class="input">
            <ul>
                <li v-for="(tag, index) in tags" :key="tag" :class="'tag-'+index" class="tag is-info">
                    {{tag}}
                    <button class="delete is-small" @click="remove(index)"></button>
                </li>
                <li class="new-tag-input">
                    <input id="inputTag" class="tag-input" type="text" placeholder="Add Tag" 
                    @keyup.down="arrowDown" @keyup.up="arrowUp"
                    v-on:keyup.enter="setTags()" v-model="newTag">
                </li>
            </ul>
        </div>
        <!-- chamada do component de autocomplete -->
        <dgt-autocomplete v-if="autocomplete" @tag-selected="setTagsAutocomplete" 
        :existing-tags="objTag" :searchTag="newTag" :items="validsTags" ref="childAutocomplete"></dgt-autocomplete>
    </div>
</template>

<script>
    import dgtAutocomplete from './dgt-autocomplete.vue';
    
    export default {
        name: 'dgtTagInput',
        model: {
            event: 'tag-insert'
        },
        props: {
            objTag: {},
            autocomplete: false,
            validsTags: null
        },
        components: {
            dgtAutocomplete
        },
        data() {
            return {
                tags: [],
                newTag: null
            };
        },
        computed: {
            editableTags: {
                get() {
                    return this.tags.join(' ');
                },
                set(val) {
                    this.tags = val.split(' ');
                }
            }
        },
        created() {
            this.tags = this.objTag;
        },
        methods: {
            remove(index) {
                this.tags.splice(index, 1);
                document.getElementById('inputTag').focus();
            },
            setTagsAutocomplete(param) {
                document.getElementById('inputTag').focus();
                if (!param) {
                    if (this.checkDuplicate(this.newTag)) {
                        this.tags.push(this.newTag);
                        this.newTag = null;
                        return;
                    }
                    this.newTag = null;
                    return;
                }
                this.tags.push(param);
                this.newTag = null;
            },
            checkDuplicate(tag) {
                if (tag) {
                    const lowerTags = this.tags.map(item => {
                        return item.toLowerCase();
                    });
                    return lowerTags.indexOf(tag.toLowerCase()) < 0;
                }
                return false;
            },
            setTags() {
                if (this.autocomplete) {
                    this.$refs.childAutocomplete.onEnter();
                    this.newTag = null;
                } else {
                    if (this.checkDuplicate(this.newTag)) {
                        this.tags.push(this.newTag);
                        this.newTag = null;
                        return;
                    }
                    this.newTag = null;
                    return;
                }
            },
            arrowDown() {
                if (this.$refs.childAutocomplete) {
                    this.$refs.childAutocomplete.onArrowDown();
                }
                return;
            },
            arrowUp() {
                if (this.$refs.childAutocomplete) {
                    this.$refs.childAutocomplete.onArrowUp();
                }
                return;
            }
        },
        watch: {
            objTag() {
                this.tags = this.objTag;
                this.newTag = null;
            }
        }
    };
</Script>