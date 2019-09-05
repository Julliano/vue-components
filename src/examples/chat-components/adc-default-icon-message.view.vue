<style lang="scss" scoped>
div {
  width: 200px;
}
</style>

<template>
    <div>
        <adc-default-icon-message :name="name" :icon-class="iconClass" :size="size" :time="time" />
    </div>
</template>

<script>
    import adcDefaultIconMessage from '../../chat-components/adc-default-icon-message.vue';

    export default {
        name: 'AdcContactView',
        components: {
            adcDefaultIconMessage
        },
        data() {
            return {
                iconClass: 'file',
                size: '55kb',
                time: '13:15',
                name: 'Sergeta da Silva.pdf'
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de texto foi clicado no id: ${id}`);
            }
        }
    };
</script>
