<style lang="scss" scoped>
  .adc-avatar {
    img {
      width: var(--adc-avatar-width, 64px);
      height: var(--adc-avatar-height, 64px);
      border-radius: var(--adc-avatar-border-radius, 50%);
      border: var(--adc-avatar-border, none)
    }
  }
</style>

<template>
    <div class="adc-avatar" :id="_id">
        <img @click.stop="clicked" :src="src" :onerror="`this.src='${imgDefault}';`" :alt="altImage" />
    </div>
</template>

<script>
    export default {
        name: 'AdcAvatar',
        props: {
            _id: {
                type: String,
                default: null
            },
            src: {
                type: String,
                default: ''
            },
            altImage: {
                type: String,
                default: 'Thumbnail usuário'
            }
        },
        data() {
            return {
                imgDefault: 'data:image/png;base64,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'
            };
        },
        methods: {
            clicked() {
                return this.$emit('avatar-clicked', this['_id']);
            }
        }
    };
</script>
