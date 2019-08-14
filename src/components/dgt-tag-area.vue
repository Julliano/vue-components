<style lang="scss" scoped>
.dgt-tag-input-component {
  position: relative;
  background-color: #fff;
  margin-top: 5px;
  width: var(--dgt-area-width, 200px);
  #input-filter-tag {
    outline: none;
    flex: 1 0 auto;
    width: 100%;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }
  .tag-area {
    border: 1px solid #bdbdbd;
    flex-wrap: wrap;
    padding: 10px;
    overflow-y: auto;
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
    border-radius: var(--dgt-area-border-radius, 0px);
    width: var(--dgt-area-width, 200px);
    height: var(--dgt-area-height, 100px);
    &.without-border{
      border-top: none;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      .tag {
        align-items: center;
        border-radius: 290486px;
        display: var(--dgt-tag-display, flex);
        max-width: var(--dgt-tag-max-width, 315px);
        white-space: var(--dgt-tag-white-space, normal);
        min-height: var(--dgt-tag-min-height, 1.6em);
        line-height: var(--dgt-tag-line-height, 1.4em);
        padding: var(--dgt-tag-padding, 0 0.875em 0.1em 0.875em);
        margin: var(--dgt-tag-margin, 2px 1px);
        vertical-align: top;
        word-break: break-all;
        &.is-info {
          background-color: var(--dgt-background-tag, #0a61ec);
          font-size: var(--dgt-font-size, 14px);
          color: #fff;
        }
        label {
          max-width: 94%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .delete {
          margin-left: 0.25em;
          margin-right: -0.5em;
          margin-top: 0px;
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
  }
}
</style>

<template>
    <div class="dgt-tag-input-component">
        <slot name="input-icon"></slot>
        <input id="input-filter-tag" v-if="searchInput" type="text" class="inp"
            :placeholder="placeholder" v-model="filterTag">
        <div class="tag-area" :class="{'without-border': searchInput}">
            <ul>
                <li v-for="(tag, index) in tagArray" :key="index"
                    :class="'tag-'+index" class="tag is-info" :title="tag">
                    <label>
                        {{ tag }}
                    </label>
                    <button v-if="deleteButton" class="delete is-small" @click="remove(index)"></button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dgtTagArea',
        props: {
            tags: Array,
            placeholder: {
                type: String,
                default: 'Filtrar por nome...'
            },
            searchInput: {
                type: Boolean,
                default: true
            },
            deleteButton: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                filterTag: null
            };
        },
        computed: {
            tagArray() {
                if (this.filterTag) {
                    return this.tags.filter(
                        e => e.toLowerCase().indexOf(this.filterTag.toLowerCase()) > -1
                    );
                }
                return this.tags;
            }
        },
        methods: {
            remove(index) {
                this.$emit('removed', index);
            }
        }
    };
</script>
