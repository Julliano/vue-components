<style lang="scss" scoped>
.adc-conversation {
  width: var(--adc-conversation-width, 200px);
  height: var(--adc-conversation-height, 55px);
  background: var(--adc-conversation-background, #fff);
  padding: var(--adc-conversation-padding, 10px);
  cursor: pointer;
  display: flex;
  position: relative;
  color: #757575;
  .avatar {
    width: var(--adc-conversation-avatar-width, 17%);
  }
  .adc-conversation__mid-section {
    display: flex;
    max-width: var(--adc-conversation-middle-max-width, 70%);
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    span {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.9rem;
      &.title {
        font-weight: 500;
        color: #000;
        font-size: var(--adc-conversation-font-size, 1.2rem);
     }
    }
  }
  .adc-conversation__time {
    min-width: 15%;
    align-self: flex-start;
    font-size: 0.9rem;
    width: 100%;
    text-align: end;
  }
}
</style>

<template>
    <div class="adc-conversation" :id="_id" @click="clicked">
        <div class="avatar">
            <adc-avatar :src="imageUrl" />
        </div>
        <div class="adc-conversation__mid-section">
            <span class="title" :title="name"> {{ name }} </span>
            <span class="subtitle" :title="subtitle"> {{ subtitle }} </span>
            <span class="account" :title="account"> {{ account }} </span>
        </div>
        <span class="adc-conversation__time"> {{ time }} </span>
    </div>
</template>

<script>
    import adcAvatar from './adc-avatar';

    export default {
        name: 'adcConversation',
        components: {
            adcAvatar
        },
        props: {
            _id: String,
            imageUrl: String,
            name: String,
            subtitle: String,
            account: String,
            time: String
        },
        methods: {
            clicked() {
                return this.$emit('media-clicked', this['_id']);
            }
        }
    };
</script>
