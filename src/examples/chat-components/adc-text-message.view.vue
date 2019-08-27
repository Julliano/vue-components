<style lang="scss" scoped>
div {
  width: 200px;
}
</style>

<template>
    <div>
        <adc-text-message :text="texto1" :time="time" />
    </div>
</template>

<script>
    import adcTextMessage from '../../chat-components/adc-text-message.vue';

    export default {
        name: 'AdcAvatarView',
        components: {
            adcTextMessage
        },
        data() {
            return {
                texto1: 'Lorem ipsum dolor s it amet, consectetur adipiscing',
                time: '13:15'
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de texto foi clicado no id: ${id}`);
            }
        }
    };
</script>
