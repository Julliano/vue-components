<style lang="scss" scoped>
  @import '../../styles/_variables.scss';
  .adc-text-message {
    background-color: white;
    display: flex;
    flex-wrap: nowrap;
    word-break: break-all;
    padding: var(--adc-text-message-padding, 0.29em);
    span {
      padding: var(--adc-text-message-span-padding, 0);
      font-size: var(--adc-text-font-size, 1em);
      font-weight: var(--adc-text-font-weight, 400);
      width: 88%;
      &.time {
        align-self: flex-end;
        font-size: 0.7rem;
        width: 12%;
        text-align: right;
        margin-bottom: -3px;
        color: #757575;
      }
    }
  }
</style>

<template>
    <div class="adc-text-message" :id="_id" @click="clicked">
        <span> {{ text }} </span>
        <span class="time"> {{ time }} </span>
    </div>
</template>

<script>
    export default {
        name: 'AdcTextMessage',
        props: {
            _id: {
                type: String,
                default: null
            },
            text: String,
            time: String
        },
        methods: {
            clicked() {
                return this.$emit('text-clicked', this['_id']);
            }
        }
    };
</script>
