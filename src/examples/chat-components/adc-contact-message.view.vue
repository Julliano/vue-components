<style lang="scss" scoped>
div {
  width: 200px;
}
.custom-2 {
    --adc-avatar-width: 55px;
    --adc-avatar-height: 55px;
    --adc-avatar-border-radius: 50%;
    --adc-avatar-border: 1px solid grey;
}
</style>

<template>
    <div>
        <adc-contact-message :name="name" :number="number" :imageUrl="imageUrl" :time="time" class="custom-2" />
    </div>
</template>

<script>
    import adcContactMessage from '../../chat-components/adc-contact-message.vue';

    export default {
        name: 'AdcContactView',
        components: {
            adcContactMessage
        },
        data() {
            return {
                time: '13:15',
                name: 'Sergeta da Silva',
                number: '48 987654321',
                imageUrl: 'data:image/jpeg;base64,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'
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de texto foi clicado no id: ${id}`);
            }
        }
    };
</script>
