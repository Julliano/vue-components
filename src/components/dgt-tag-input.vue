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
    margin: 0px;
  }
  .fake-input {
    border: 1px solid #9e9e9e;
    flex-wrap: wrap;
    display: flex;
  }
  input {
    outline: none;
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
    min-height: var(--dgt-tag-min-height, 2em);
    max-width: 315px;
    line-height: var(--dgt-tag-line-height, 1.5);
    padding: var(--dgt-tag-padding, 0 0.875em 0.1em 0.875em);
    margin: var(--dgt-tag-margin, 2px 1px);
    vertical-align: top;
    word-break: break-all;
    &.is-info {
      background-color: var(--dgt-background-tag, #3273dc);
      font-size: var(--dgt-tag-font-size, 16px);
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
        <div class="fake-input" @click="focusInputTag">
            <ul>
                <li
                    v-for="(tag, index) in tags"
                    :key="index"
                    :class="'tag-'+index"
                    class="tag is-info"
                >
                    {{tag.label}}
                    <button class="delete is-small" @click="remove(index)"></button>
                </li>
                <li class="new-tag-input">
                    <input
                        id="input-tag"
                        @blur="$emit('blur')"
                        class="tag-input"
                        type="text"
                        :placeholder="placeholder"
                        autocomplete="false"
                        @keyup.down="onArrowDown"
                        @keyup.up="onArrowUp"
                        @keyup.enter="onEnter"
                        @keyup="onComma($event)"
                        @keydown.delete="onDeleteTag"
                        v-model="newTag"
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dgtTagInput',
        props: {
            tagArr: Array,
            placeholder: String,
            id: {
                type: String,
                default: null
            }
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
            },
            tag() {
                if (this.newTag === null || this.newTag.indexOf(',') === 0) {
                    return null;
                }
                return {
                    label: this.newTag.replace(',', '').trim()
                };
            }
        },
        created() {
            this.tags = this.tagArr;
        },
        updated() {
            this.$emit('new-tag', this.tag);
        },
        methods: {
            remove(index) {
                this.tags.splice(index, 1);
                this.$emit('removed', index, this.id);
                this.$el.querySelector('#input-tag').focus();
            },
            focusInputTag() {
                this.$el.querySelector('#input-tag').focus();
            },
            checkDuplicate(tag) {
                if (!tag) return false;
                const lowerTags = this.tags.map(item => {
                    return item.label.toLowerCase();
                });
                return lowerTags.indexOf(tag.label.toLowerCase()) < 0;
            },
            onArrowUp() {
                this.$emit('keyup');
            },
            onArrowDown() {
                this.$emit('keydown');
            },
            onEnter() {
                if (this.checkDuplicate(this.tag)) {
                    this.$emit('enter', this.tag);
                }
                this.newTag = null;
            },
            onComma(event) {
                if (event.key !== ',') {
                    return;
                }
                this.onEnter();
            },
            onDeleteTag() {
                if (this.newTag !== null && this.newTag !== '') return;
                this.$emit('removed', null, this.id);
                this.tags.pop();
            }
        },
        watch: {
            tagArr() {
                this.tags = this.tagArr;
                this.newTag = null;
            }
        }
    };
</script>
