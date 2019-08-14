<style lang="scss" scoped>
  .adc-system-message {
    display: flex;
    justify-content: center;
    margin-bottom: var(--adc-system-margin-bottom, 18px);
    label {
      text-align: center;
      background-color: var(--adc-system-back-color,  #fff8b9);
      padding: var(--adc-system-padding, 5px 10px);
      border-radius: var(--adc-system-border-radius, 5px);
      color: var(--adc-system-color, black);
      font-size: var(--adc-system-font-size, 12px);
      box-shadow: 4px 5px 5px -3px rgba(0, 0, 0, 0.4);
      max-width: var(--adc-system-max-width, 300px);
      font-weight: var(--adc-system-font-weight, 400);
      cursor: var(--adc-system-cursor, default);
    }
  }
</style>

<template>
    <div :id="_id" class="adc-system-message" tabindex="1">
        <label class="message" @click.stop="clicked"> {{ message }} </label>
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
            message: {
                type: String,
                default: 'Remetente'
            }
        },
        methods: {
            clicked() {
                return this.$emit('msg-clicked', this['_id']);
            }
        }
    };
</script>
