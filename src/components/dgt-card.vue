<style lang="scss" scoped>
.dgt-card-component {
  width: var(--dgt-card-width, 200px);
  max-width: var(--dgt-card-width, 200px);
  min-height: var(--dgt-card-height, 55px);
  box-shadow: var(--dgt-card-shadow, 0px 1px 4px 2px #c7c7c7);
  background: var(--dgt-card-background, white);
  border-radius: var(--dgt-card-border-radius, 4px);
  padding: var(--dgt-card-padding, 10px);
  margin: var(--dgt-card-margin, 10px 12px 10px 0);
  cursor: pointer;
  display: inline-flex;
  i {
    font-size: var(--dgt-card-icon-font-size, 50px);
    width: var(--dgt-card-icon-width, 33%);
    margin: var(--dgt-card-icon-margin, auto 0);
    opacity: var(--dgt-card-icon-opacity, 0.5);
  }
  img {
      max-height: var(--dgt-card-icon-font-size, 50px);
      width: var(--dgt-card-icon-width, 33%);
      margin: var(--dgt-card-icon-margin, auto 0);
      opacity: var(--dgt-card-icon-opacity, 0.5);
  }
  .text-container {
    margin: auto;
    width: 67%;
    .card-name {
      margin: 0;
      font-weight: normal;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .opacity-5 {
      opacity: 0.5;
    }
  }
}
</style>

<template>
    <div class="dgt-card-component component" @click="emit(dataProps.emit)">
        <i v-if="dataProps.class || dataProps.icon" :class="`${dataProps.class}`">{{ dataProps.icon }}</i>
        <img v-if="dataProps.img" :src="dataProps.img"/>
        <div class="text-container">
            <h4 class="card-name" :title="dataProps.name">
                {{ dataProps.name }}
                <span class="opacity-5" v-if="dataProps.count">
                    ({{ dataProps.count }})
                </span>
            </h4>
            <small name="card-subheader" class="opacity-5" v-if="dataProps.subHeader">
                {{ dataProps.subHeader }}
            </small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dgtCard',
        props: {
            dataProps: {
                icon: String,
                emit: String,
                name: String,
                class: String,
                subHeader: String,
                count: Number
            }
        },
        methods: {
            emit(param) {
                // do something
                this.$emit('card-cliked', param);
            }
        }
    };
</script>
