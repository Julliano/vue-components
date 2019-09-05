<style lang="scss" scoped>
  .adc-default-icon-message {
    cursor: pointer;
    flex-wrap: nowrap;
    word-break: break-all;
    background-color: #fff;
    width: var(--adc-contact-message-width, 200px);
    padding: var(--adc-contact-message-padding-top, 0);
    .flex-container {
      display: flex;
      border-radius: 4px;
      background-color: #e2e2e2;
      i {
        color: #757575;
        padding-left: 5px;
        font-size: var(--adc-icon-message-size, 3rem);
      }
      div {
        width: 70%;
        display: flex;
        .name {
          width: 100%;
          overflow: hidden;
          font-weight: 500;
          font-size: 1.1rem;
          align-self: center;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .footer {
      padding-top: 3px;
      color: #757575;
      font-size: 0.7rem;
      .size {
        padding: 0;
      }
      .time {
        float: right;
      }
    }

  }
</style>

<template>
    <div class="adc-default-icon-message" :id="_id" @click="clicked" tabindex="1">
        <div class="flex-container">
            <i :class="`mdi mdi-${iconClass}`" ></i>
            <div>
                <span class="name" :title="name"> {{ name }} </span>
            </div>
        </div>
        <div class="footer">
            <span class="size"> {{ size }} </span>
            <span class="time"> {{ time }} </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdcDefaultIconMessage',
        props: {
            _id: {
                type: String,
                default: null
            },
            iconClass: {
                type: String,
                default: 'file'
            },
            size: String,
            time: String,
            name: String
        },
        methods: {
            clicked() {
                return this.$emit('default-clicked', this['_id']);
            }
        }
    };
</script>
