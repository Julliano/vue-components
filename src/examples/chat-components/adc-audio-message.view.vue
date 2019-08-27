<style lang="scss" scoped>
</style>

<template>
    <div>
        <adc-audio-message :_id="id" :duration="duration" :time="time" :audioUrl="require('../../assets/audio/sample.mp3')" />
    </div>
</template>

<script>
    import adcAudioMessage from '../../chat-components/adc-audio-message.vue';

    export default {
        name: 'AdcAudioView',
        components: {
            adcAudioMessage
        },
        data() {
            return {
                id: 'audio_1',
                duration: '1:43',
                time: '13:15'
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de audio foi clicado no id: ${id}`);
            }
        }
    };
</script>
