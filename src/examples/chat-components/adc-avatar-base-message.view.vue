<style lang="scss">
.adc-base-chat-layout {
  height: 550px;
  display: flex;
  .left-side {
    flex-basis: 40%;
    min-width: 300px;
    background: white;
  }
  .right-side {
    flex-grow: 1;
    min-width: 400px;
    border-left: 3px solid grey;
    border-right: 3px solid grey;
    padding: 10px;
    background: #d1d1d1;
    overflow-y: auto;
    .message-container {
      .item-message {
        display: flex;
        &.inverted {
          flex-direction: row-reverse;
          .flex-image {
            text-align: right;
          }
          .flex-itens {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
        }
        .flex-image {
          flex-basis: 60px;
        }
        .custom-image {
          --adc-avatar-width: 45px;
          --adc-avatar-height: 45px;
        }
        .custom-message {
          --adc-base-width: 250px;
        }
        .custom-base-image {
          --adc-base-max-width: 350px;
          --adc-base-padding: 3px;
        }
        .custom-contact {
          --adc-avatar-width: 55px;
          --adc-avatar-height: 55px;
          --adc-avatar-border: 1px solid grey;
          --adc-contact-message-width: 100%;
          --adc-contact-message-padding-top: 0.29em;
        }
      }
      .custom-system {
        --adc-system-max-width: 220px;
      }
    }
  }
}
</style>

<template>
    <section class="adc-base-chat-layout">
        <dgt-layout class="left-side">
            Grupos de conversa
        </dgt-layout>
        <dgt-layout class="right-side">
            <div class="message-container">
                <div class="item-message">
                    <div class="flex-image">
                        <adc-avatar @avatar-clicked="avatarClicked" _id="avatar_1" :src="src" class="custom-image"></adc-avatar>
                    </div>
                    <div class="flex-itens">
                        <adc-base-message @base-clicked="messageClicked" :first="true" class="custom-message"
                                          sender="Fulano da Silva" color="blue" _id="mensagem_1">
                            <adc-text-message :text="texto1" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" :forward="true" class="custom"
                                        forward-message="Encaminhada" sender="Fulano da Silva" color="blue" _id="mensagem_2">
                            <adc-text-message :text="texto1" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" class="custom-base-image"
                                        sender="Fulano da Silva" color="blue" _id="mensagem_3">
                            <adc-media-message @media-clicked="mediaClicked" _id="media_1" tipo="video" duration="1:18" time="15:17" :src="srcVideo" />
                        </adc-base-message>
                    </div>
                </div>

                <adc-system-message @msg-clicked="systemClicked" :message="message" class="custom-system" _id="sistema_1"/>

                <div class="item-message inverted">
                    <div class="flex-image">
                        <adc-avatar @avatar-clicked="avatarClicked" _id="avatar_2" :src="src" class="custom-image"></adc-avatar>
                    </div>
                    <div class="flex-itens">
                        <adc-base-message @base-clicked="messageClicked" :first="true" class="custom-message" :myMessage="true"
                                        forward-message="Encaminhada" sender="Beltrano de Oliveira" color="red" _id="mensagem_4">
                            <adc-text-message text="Opa, fala Fulano, valeu por me adicionar no grupo :)" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" class="custom-message" :myMessage="true"
                                        forward-message="Encaminhada" sender="Beltrano de Oliveira" color="red" _id="mensagem_5">
                            <adc-text-message :text="texto1" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" class="custom-base-image" :forward="true" :myMessage="true"
                                        forward-message="Encaminhada" sender="Beltrano de Oliveira" color="red" _id="mensagem_5">
                            <adc-media-message @media-clicked="mediaClicked" _id="media_2" tipo="image" time="18:13" :src="srcImage"></adc-media-message>
                        </adc-base-message>
                    </div>
                </div>

                <adc-system-message @msg-clicked="systemClicked" :message="changeDateMessage" class="custom-system" _id="sistema_1"/>

                <div class="item-message">
                    <div class="flex-image">
                        <adc-avatar @avatar-clicked="avatarClicked" _id="avatar_1" :src="src" class="custom-image"></adc-avatar>
                    </div>
                    <div class="flex-itens">
                        <adc-base-message @base-clicked="messageClicked" :first="true" class="custom-message"
                                        sender="Fulano da Silva" color="blue" _id="mensagem_1">
                            <adc-text-message :text="texto1" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" :forward="true" class="custom-message"
                                        forward-message="Encaminhada" sender="Fulano da Silva" color="blue" _id="mensagem_2">
                            <adc-text-message :text="texto1" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" class="custom-base-image"
                                        sender="Fulano da Silva" color="blue" _id="mensagem_3">
                            <adc-media-message @media-clicked="mediaClicked" _id="media_1" tipo="video" duration="1:18" time="15:17" :src="srcVideo" />
                        </adc-base-message>
                    </div>
                </div>

                <div class="item-message inverted">
                    <div class="flex-image">
                        <adc-avatar @avatar-clicked="avatarClicked" _id="avatar_2" :src="src" class="custom-image"></adc-avatar>
                    </div>
                    <div class="flex-itens">
                        <adc-base-message @base-clicked="messageClicked" :first="true" class="custom-message" :myMessage="true"
                                        forward-message="Encaminhada" sender="Beltrano de Oliveira" color="red" _id="mensagem_4">
                            <adc-text-message :text="texto1" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" class="custom" :myMessage="true"
                                        forward-message="Encaminhada" sender="Beltrano de Oliveira" color="red" _id="mensagem_5">
                            <adc-contact-message :name="name" :number="number" :imageUrl="imageUrl" :time="time" class="custom-contact" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" class="custom" :myMessage="true"
                                        forward-message="Encaminhada" sender="Beltrano de Oliveira" color="red" _id="mensagem_6">
                            <adc-text-message :text="texto1" time="13:15" />
                        </adc-base-message>
                        <adc-base-message @base-clicked="messageClicked" :first="false" class="custom-base-image" :forward="true" :myMessage="true"
                                        forward-message="Encaminhada" sender="Beltrano de Oliveira" color="red" _id="mensagem_5">
                            <adc-media-message @media-clicked="mediaClicked" _id="media_2" tipo="image" class="custom-base-imageee" time="18:13" :src="srcImage"></adc-media-message>
                        </adc-base-message>
                    </div>
                </div>
            </div>
        </dgt-layout>
    </section>
</template>

<script>
    import dgtLayout from '../../components/dgt-layout.vue';
    import adcAvatar from '../../components/chat-components/adc-avatar.vue';
    import adcBaseMessage from '../../components/chat-components/adc-base-message';
    import adcTextMessage from '../../components/chat-components/adc-text-message.vue';
    import adcMediaMessage from '../../components/chat-components/adc-media-message';
    import adcSystemMessage from '../../components/chat-components/adc-system-message';
    import adcContactMessage from '../../components/chat-components/adc-contact-message.vue';

    export default {
        name: 'AdcBaseMessageView',
        components: {
            dgtLayout,
            adcAvatar,
            adcTextMessage,
            adcBaseMessage,
            adcMediaMessage,
            adcSystemMessage,
            adcContactMessage
        },
        mounted() {
            setTimeout(() => {
                this.scrollMessages();
            }, 300);
        },
        data() {
            return {
                texto1: 'Lorem ipsum dolor s it amet, consectetur adipiscing, Lorem ipsum dolor s it amet, consectetur adipiscing',
                time: '13:15',
                src: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                srcVideo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAaxFKf67vm3dj06FvQ_2w-fxuzK8oNqXGKup2sSJD4mg-oUJ',
                time: '13:15',
                name: 'Sergeta da Silva',
                number: '48 987654321',
                imageUrl: 'data:image/jpeg;base64,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',
                srcImage: 'data:image/jpeg;base64,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',
                message: 'Beltrano de Oliveira foi adicionado por Fulano da Silva',
                changeDateMessage: '18/09/2019'
            };
        },
        methods: {
            messageClicked(id) {
                console.log(`Clique no componente de mensagem id: ${id}`);
            },
            avatarClicked(id) {
                console.log(`Clique no componente de avatar id: ${id}`);
            },
            systemClicked(id) {
                console.log(`Clique no componente de sistema id: ${id}`);
            },
            mediaClicked(id) {
                console.log(`Componente de media foi clicado no id: ${id}`);
            },
            scrollMessages() {
                var rightSide = document.querySelector('.adc-base-chat-layout .right-side');
                if (rightSide) {
                    rightSide.scroll(0, rightSide.scrollHeight);
                }
            }
        }
    };
</script>
