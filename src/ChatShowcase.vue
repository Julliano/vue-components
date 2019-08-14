<style lang="scss" scoped>
.main {
  background-color: #E0E0E0;
  height: 100%;
  .dgt-container {
    padding-bottom: 50px;
  }
  hr {
    margin: 2em 0;
  }
}
</style>

<template>
    <div class="main light padding">
        <div class="dgt-container">
            <h1 class="text-center"> Components </h1>
            <h3>Adc-Base-Message</h3>
            <adc-base-message/>
            <hr style="clear: both;">
            <h3>Adc-System-Message</h3>
            <adc-system-message />
            <hr style="clear: both;">
            <h3>Adc-Avatar</h3>
            <adc-avatar />
            <hr style="clear: both;">
            <h3>Adc-Text-Message</h3>
            <adc-text-message />
            <hr style="clear: both;">
            <h3>Adc-Contact-Message</h3>
            <adc-contact-message />
            <hr style="clear: both;">
            <h3>Adc-Media-Message</h3>
            <adc-media-message />
            <hr style="clear: both;">
            <h3>Adc-Base-Chat-Layout</h3>
            <adc-base-chat-layout />
            <hr style="clear: both;">
            <h1 class="text-center"> Exemplo de estrutura de chat </h1>
            <adc-avatar-base-message />
        </div>
    </div>
</template>

<script>

import adcAvatar from './examples/chat-components/adc-avatar.view';
import adcBaseMessage from './examples/chat-components/adc-base-message.view';
import adcTextMessage from './examples/chat-components/adc-text-message.view';
import adcMediaMessage from './examples/chat-components/adc-media-message.view';
import adcSystemMessage from './examples/chat-components/adc-system-message.view';
import adcBaseChatLayout from './examples/chat-components/adc-layout-base.view.vue';
import adcContactMessage from './examples/chat-components/adc-contact-message.view';
import adcAvatarBaseMessage from './examples/chat-components/adc-avatar-base-message.view';

export default {
    name: 'app',
    components: {
        adcAvatar,
        adcBaseMessage,
        adcTextMessage,
        adcMediaMessage,
        adcSystemMessage,
        adcBaseChatLayout,
        adcContactMessage,
        adcAvatarBaseMessage
    }
};
</script>
