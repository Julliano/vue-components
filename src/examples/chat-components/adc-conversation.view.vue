<style lang="scss" scoped>
  div {
    width: 300px;
    .custom-conversation {
      --adc-conversation-width: 100%;
      --adc-conversation-height: 66px;
      --adc-avatar-width: 45px;
      --adc-avatar-height: 45px;
      --adc-conversation-middle-max-width: 65%;
    }
  }
</style>

<template>
    <div>
        <adc-conversation @media-clicked="emitir" :imageUrl="imageUrl" :name="name"
                          :subtitle="subtitle" :account="account" :time="time" class="custom-conversation" />
    </div>
</template>

<script>
    import adcConversation from '../../chat-components/adc-conversation.vue';

    export default {
        name: 'AdcConversationView',
        components: {
            adcConversation
        },
        data() {
            return {
                imageUrl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                name: 'Grupo DTEEEEEEEEEE EEE EE  EEs',
                subtitle: '63 participantes',
                account: 'ciclano@gmail.com',
                time: '17/08/2019'
            };
        },
        methods: {
            emitir(id) {
                console.log(`Componente de conversa foi clicado no id: ${id}`);
            }
        }
    };
</script>
