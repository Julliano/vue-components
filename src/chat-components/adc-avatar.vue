<style lang="scss" scoped>
  .adc-avatar {
    img {
      background-color:  #757575;
      width: var(--adc-avatar-width, 64px);
      height: var(--adc-avatar-height, 64px);
      border: var(--adc-avatar-border, none);
      border-radius: var(--adc-avatar-border-radius, 50%);
      &.default {
        padding: 10px;
      }
    }
  }
</style>

<template>
    <div class="adc-avatar" :id="_id">
        <img :class="{'default': !src}" @click.stop="clicked" :src="src" :onerror="`this.src='${imgDefault}';`" :alt="altImage" />
    </div>
</template>

<script>
    export default {
        name: 'AdcAvatar',
        props: {
            _id: {
                type: String,
                default: null
            },
            src: {
                type: String,
                default: ''
            },
            altImage: {
                type: String,
                default: 'Thumbnail usuário'
            }
        },
        data() {
            return {
                imgDefault: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAhJJREFUaN7tmT1rFFEUht9jLDRRQdFtUqSR2IpBRUgj2vgRRdFCf4L+AP0x2uhP0NLERiQifnRLCkm2iKCFiwaXxAiPxc42krh3ds/snZXzwDTD5cz7XO7MmbkjBUEQBEHw32JVXwDYJ+mCpHOSpovT65JeS1o0s63ckzCo2H7gIdBmd74BD4pJGB+AaeAt6XwEZnLnTpVrAGsl5HqsAsdy508RXBpArseL3Pn7yd0YQq7H9dwe/xJ86SC45JnJrU0ARyR9kbR3yFK/JTXMrO2Ra4+XoKRZBzkVNWa9QnkKNupYy1Pwh2Ot73UUbNWxlpugma1KWnEo1TSz+gkWPHGo8dQ5kx/AFPB5iB64Dkzl9ugnOQ9sDSD3CzifO3+q5G2gU0KuA9zKnbus5BzwJkFuGTiVO++gkgZcBh4DTWCjOJrAI+ASUPmuQhAE+aj0BgcmJc1ImpR0WFKvif+U1JbUkdQys07tBelu/c1LuijppKQThVy/a6Duy/WKpA+SFiW9MrPNqqTLSE0A14DnJRt7SuN/BiwAE7nE7gMtR6ndWAPujUwUOA28H4HY37wD5qqWu4rvUizLJnCzKrkFYDujXI9t4Epq7qSnKHBI0idJRytdIul8lXTczDb6DUz9or9bIzmpu+t2J2VgquCZ3EY7cNZT8EBumx046Ck4toTguJP6s2Q5d9AxyRQEQRAEwSj5A/kgEp4Sr2XZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA5LTAzVDE0OjUwOjQ2KzAwOjAw6OIoQgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wOS0wM1QxNDo1MDo0NiswMDowMJm/kP4AAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stekZWTlpKbFECk2VPAAAAAElFTkSuQmCC'
            };
        },
        methods: {
            clicked() {
                return this.$emit('avatar-clicked', this['_id']);
            }
        }
    };
</script>
