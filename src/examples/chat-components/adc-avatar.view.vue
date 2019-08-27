<style lang="scss" scoped>
div {
  display: flex;
  padding-right: 5px;
  align-self: center;
}
.custom-1 {
  --adc-avatar-width: 75px;
  --adc-avatar-height: 75px;
  --adc-avatar-border-radius: 80%;
}
.custom-2 {
  --adc-avatar-width: 45px;
  --adc-avatar-height: 45px;
  --adc-avatar-border-radius: 50%;
  --adc-avatar-border: 1px solid red;
}
</style>

<template>
    <div>
        <adc-avatar @avatar-clicked="emitir" :src="srcBom" class="custom-1"></adc-avatar>
        <adc-avatar @avatar-clicked="emitir" :src="srcBom" class="custom-2"></adc-avatar>
        <adc-avatar @avatar-clicked="emitir" :src="src"></adc-avatar>
    </div>
</template>

<script>
    import adcAvatar from '../../chat-components/adc-avatar.vue';

    export default {
        name: 'AdcAvatarView',
        components: {
            adcAvatar
        },
        data() {
            return {
                srcBom: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                src: ''
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de avatar foi clicado no id: ${id}`);
            }
        }
    };
</script>
