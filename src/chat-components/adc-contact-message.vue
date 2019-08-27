<style lang="scss" scoped>
  .adc-contact-message {
    background-color: white;
    display: flex;
    flex-wrap: nowrap;
    word-break: break-all;
    padding-top: var(--adc-contact-message-padding-top, 0);
    width: var(--adc-contact-message-width, 200px);
    .flex-container {
      display: flex;
      .avatar {
        width: var(--adc-avatar-width, 50%);
      }
      div {
        display: grid;
        align-items: center;
        .name {
          align-self: flex-end;
          font-weight: 600;
        }
        .number {
          align-self: flex-start;
        }
      }
    }
    div {
      padding: var(--adc-text-message-span-padding, 0);
      font-size: var(--adc-text-font-size, 1em);
      font-weight: var(--adc-text-font-weight, 400);
      width: 87%;
    }
    .time {
      align-self: flex-end;
      font-size: 0.7rem;
      width: 13%;
      text-align: right;
      color: #757575;
    }

  }
</style>

<template>
    <div class="adc-contact-message" :id="_id" @click="clicked">
        <div class="flex-container">
            <adc-avatar :src="imageUrl" class="avatar"></adc-avatar>
            <div>
                <span class="name"> {{ name }} </span>
                <span class="number"> {{ number }} </span>
            </div>
        </div>
        <span class="time"> {{ time }} </span>
    </div>
</template>

<script>
    import adcAvatar from './adc-avatar';

    export default {
        name: 'AdcContactMessage',
        components: {
            adcAvatar
        },
        props: {
            _id: {
                type: String,
                default: null
            },
            time: String,
            name: String,
            number: String,
            imageUrl: String
        },
        methods: {
            clicked() {
                return this.$emit('contact-clicked', this['_id']);
            }
        }
    };
</script>
