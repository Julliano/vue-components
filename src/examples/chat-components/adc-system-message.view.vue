<style lang="scss" scoped>
.custom {
    // --adc-system-font-size: 14px;
    // --adc-system-font-weight: 600;
}
</style>

<template>
    <div>
        <adc-system-message @msg-clicked="emitir" :message="message" class="custom"></adc-system-message>
    </div>
</template>

<script>
    import adcSystemMessage from '../../chat-components/adc-system-message.vue';

    export default {
        name: 'AdcSystemMessageView',
        components: {
            adcSystemMessage
        },
        data() {
            return {
                message: 'Fulano da Silva criou este grupo, Fulano da Silva criou este grupo,Fulano da Silva criou este grupo, Fulano da Silva criou este grupo'
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de msg do sistema foi clicado no id: ${id}`);
            }
        }
    };
</script>
