<style lang="scss">
.custom {
  --adc-base-width: 220px;
}
span {
  padding-left: 5px;
}
.right {
  float: right;
}
</style>

<template>
    <div>
        <div>
            <adc-base-message @base-clicked="emitir" :first="true" :forward="true" class="custom"
                            forward-message="Encaminhada" sender="Fulano da Silva" color="blue">
            </adc-base-message>
        </div>
        <div class="right">
            <adc-base-message @base-clicked="emitir" class="custom" :myMessage="true"
                            forward-message="Encaminhada" sender="Fulano da Silva" color="blue">
            </adc-base-message>
            <adc-base-message @base-clicked="emitir" :first="false" class="custom" :myMessage="true"
                            forward-message="Encaminhada" sender="Fulano da Silva" color="blue">
            </adc-base-message>
        </div>
    </div>
</template>

<script>
    import adcBaseMessage from '../../components/chat-components/adc-base-message';

    export default {
        name: 'AdcBaseMessageView',
        components: {
            adcBaseMessage
        },
        methods: {
            emitir(id) {
                console.log(`Componente base foi clicado no id: ${id}`);
            }
        }
    };
</script>
