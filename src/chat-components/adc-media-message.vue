<style lang="scss" scoped>
  .adc-media-message {
    position: relative;
    width: 100%;
    max-width: var(--adc-media-max-width, 300px);
    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--adc-media-background-color, rgba(255,255,255, 0.5));
      i {
        font-size: var(--adc-media-play-icon-size, 6em);
        opacity: var(--adc-media-play-icon-opacity, 0.6);
        color: var(--adc-media-play-icon-color, #383232);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
      }
    }
    footer {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      position: absolute;
      color: #fff;
      font-weight: 900;
      bottom: 0;
      left: 0;
      right: 0;
      height: 24px;
      padding: .29em;
      box-sizing: border-box;
      background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0, 0, 0, 0.45) 100%);
      font-size: var(--adc-media-font-size, 0.8em);
      color: var(--adc-media-font-color, white);
      font-weight: var(--adc-media-font-weight, 400);
      i {
        position: absolute;
        bottom: 5px;
        left: 10px;
        span {
          padding: 0;
        }
      }
      .time {
        position: absolute;
        bottom: 5px;
        right: 10px;
      }
    }
  }
</style>

<template>
    <div :id="_id" class="adc-media-message" @click.stop="clicked" tabindex="1">
        <img :onerror="`this.src='${urlDefault}';`" :alt="altValue" :src="src" />
        <div class="video-overlay" v-if="tipo === 'video'">
            <i class="mdi mdi-play-circle" />
        </div>
        <footer v-if="time || duration">
            <i class="mdi mdi-video" v-if="tipo === 'video'">
                <span> {{ duration }} </span>
            </i>
            <span class="time"> {{ time }} </span>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'AdcMediaMessage',
        props: {
            _id: {
                type: String,
                default: null
            },
            src: {
                type: String,
                default: ''
            },
            tipo: {
                type: String,
                default: 'image'
            },
            altDefault: {
                type: String,
                default: ''
            },
            duration: String,
            time: String
        },
        data() {
            return {
                imgDefault: 'data:image/gif;base64,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',
                videoDefault: 'data:image/png;base64,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'
            };
        },
        computed: {
            urlDefault() {
                return this.tipo === 'image' ? this.imgDefault : this.videoDefault;
            },
            altValue() {
                return this.altDefault ? this.altDefault : 'Imagem enviada';
            }
        },
        methods: {
            clicked() {
                return this.$emit('media-clicked', this['_id']);
            }
        }
    };
</script>
