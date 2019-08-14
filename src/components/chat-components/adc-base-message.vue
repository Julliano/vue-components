<style lang="scss" scoped>
  .adc-base-message {
    display: grid;
    font-size: 11px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 3px 8px -3px rgba(0,0,0,0.69);
    background-color: var(--adc-base-bckg-color, white);
    width: var(--adc-base-width, fit-content);
    max-width: var(--adc-base-max-width, 250px);
    padding: var(--adc-base-padding, 5px);
    margin-bottom: var(--adc-base-margin, 18px);
    &.not-first {
      margin-top: var(--adc-base-concat-message-margin, -15px);
      border-top-left-radius: 5px;
    }
    cursor: var(--adc-system-cursor, default);
    &.first {
      &:not(.my-message) {
        &:after {
          content: '';
          position: absolute;
          left: 0;
          margin-left: -14px;
          box-sizing: border-box;
          border: 11px solid;
          border-color: var(--adc-base-border-color, transparent transparent white white);
          border-right: var(--adc-base-border-color, white);
          transform-origin: 0 0;
          transform: rotate(-45deg);
          box-shadow: -5px 1px 4px -4px rgba(0, 0, 0, 0.4);
        }
      }
      &.my-message {
        &:after {
          content: '';
          position: absolute;
          right: 0;
          top: -7px;
          margin-right: -6px;
          box-sizing: border-box;
          border: 11px solid;
          border-color: var(--adc-base-border-color, white white transparent white);
          border-right: var(--adc-base-border-color, white);
          transform: rotate(-135deg);
          box-shadow: -5px 1px 4px -4px rgba(0, 0, 0, 0.4);
        }
      }
    }
    label {
      margin-left: 3px;
      z-index: 10;
      &.forward {
        font-size: 0.8em;
        color: grey;
        opacity: 0.7;
      }
      &.sender {
        font-weight: var(--adc-base-font-weight, 500);
      }
    }
  }
</style>

<template>
    <div :id="_id" class="adc-base-message" :class="{first, 'my-message': myMessage, 'not-first': !first}" @click.stop="clicked">
        <label class="forward" v-if="forward">
            <i class="mdi mdi-share"></i>
            {{ forwardMessage }}
        </label>
        <label v-if="showSender" class="sender" :style="`color: ${color}`"> {{ sender }} </label>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AdcBaseMessage',
        props: {
            _id: {
                type: String,
                default: null
            },
            first: {
                type: Boolean,
                default: true
            },
            myMessage: {
                type: Boolean,
                default: false
            },
            forward: {
                type: Boolean,
                default: false
            },
            forwardMessage: {
                type: String,
                default: 'Encaminhado'
            },
            sender: {
                type: String,
                default: 'Remetente'
            },
            showSender: {
                type: Boolean,
                default: true
            },
            color: {
                type: String,
                default: 'black'
            }
        },
        methods: {
            clicked() {
                return this.$emit('base-clicked', this['_id']);
            }
        }
    };
</script>
