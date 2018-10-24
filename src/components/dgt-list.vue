<style lang="scss" scoped>
.dgt-list-component {
  padding: 10px;
  width: var(--dgt-list-width, fit-content);
  h4,
  small {
    margin: 0;
    padding: 1px;
  }
  hr {
    margin-bottom: 1px;
    box-shadow: 0px 1px 0px 0px #c7c7c7;
    border-bottom: 0;
  }
  .list {
    display: grid;
    overflow-y: scroll;
    max-height: var(--dgt-list-max-height, 400px);
    padding: var(--dgt-list-padding, 2px 0 2px 10px);
  }
}
</style>

<template>
    <div class="dgt-list-component">
        <h4 v-if="header">{{ header }}</h4>
        <small v-if="subHeader">{{ subHeader }}</small>
        <hr>
        <slot name="main-slot" :list="list"></slot>
    </div>
</template>

<script>
    export default {
        name: 'dgtList',
        props: {
            list: {},
            header: '',
            subHeader: ''
        }
    };
</script>
