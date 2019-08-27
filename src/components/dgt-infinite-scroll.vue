<style lang="scss" scoped>
  .dgt-infinite-scroll {
    display: flex;
    flex-direction: column;
    height: var(--dgt-infinite-scroll-height, 100%);
    overflow-y: auto;
    &.inverted {
      flex-direction: column-reverse;
    }
  }
</style>

<template>
    <section class="dgt-infinite-scroll" :class="{'inverted': !directionDown}" @scroll="scroll">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'dgtInfiniteScroll',
        props: {
            directionDown: {
                type: Boolean,
                default: true
            },
            scrollLimit: {
                type: Number,
                default: 50
            }
        },
        data() {
            return {
                scrollElement: null,
                lastScrollHeight: null
            };
        },
        mounted() {
            this.scrollElement = this.$el.closest('.dgt-infinite-scroll');
            if (!this.directionDown) {
                setTimeout(() => {
                    this.scrollBottom();
                }, 300);
            }
        },
        methods: {
            scrollBottom() {
                if (this.scrollElement) {
                    this.scrollElement.scroll(0, this.scrollElement.scrollHeight);
                }
            },
            scroll() {
                let limitOfWindow = this.directionDown ?
                    this.calcScrollDown() : this.calcScrollUp();

                if (limitOfWindow) {
                    this.$emit('scroll-ending', this.directionDown ? 'down' : 'up');
                }
            },
            calcScrollDown() {
                if ((this.scrollElement.scrollHeight -
                        (this.scrollElement.scrollTop + this.scrollElement.clientHeight)) <
                            this.scrollLimit) {
                    return true;
                }
                return false;
            },
            calcScrollUp() {
                if (this.scrollElement.scrollTop < this.scrollLimit) return true;
                return false;
            }
        }
    };
</script>
