
<template>
    <div>
        <adc-media-message @media-clicked="emitir" _id="media_1" tipo="video" duration="1:18" time="15:17" :src="src" ></adc-media-message>
        <br />
        <adc-media-message @media-clicked="emitir" _id="media_2" tipo="image" time="18:13"></adc-media-message>
    </div>
</template>

<script>
    import adcMediaMessage from '../../chat-components/adc-media-message.vue';

    export default {
        name: 'AdcMediaMessageView',
        components: {
            adcMediaMessage
        },
        data() {
            return {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAaxFKf67vm3dj06FvQ_2w-fxuzK8oNqXGKup2sSJD4mg-oUJ'
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de media foi clicado no id: ${id}`);
            }
        }
    };
</script>
