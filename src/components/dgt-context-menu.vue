<style lang="scss">
    .dgt-context-menu {
        position: relative;
        display: inline-block;
    }
    .popover {
        position: fixed;
        width: max-content;
        max-width: 350px;
        overflow: auto;
        max-height: 400px;
        z-index: 10;
    }
    .popover-item{
        display: block !important;
    }

    .popover-screen-blocker {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 9;
    }
</style>
<template>
    <nav class="dgt-context-menu" :opened="isOpened">
        <header class="dgt-context-menu-header" @click.stop="onClickHeader">
            <slot name="button" :isOpen="isOpened"></slot>
        </header>
        <transition name="fade">
            <div class="popover dgt-context-menu-items" @click.stop="handleCloseOnClick" v-show="isOpened">
                <slot name="content"></slot>
            </div>
        </transition>
    </nav>
</template>

<script>
    export default {
        name: 'dgt-context-menu',
        props: {
            opened: {
                type: Boolean,
                default: false
            },
            closeOnClick: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isOpened: this.opened
            };
        },
        mounted() {
            this.component = this.$el.querySelector('.dgt-context-menu-items');
            this.currentListener = this.closeAnotherMenus.bind(this);
            ['click', 'mouseup'].forEach(evt => {
                document.removeEventListener(evt, this.currentListener);
                document.addEventListener(evt, this.currentListener);
            });
        },
        methods: {
            onClickHeader() {
                this.isOpened = !this.isOpened;
            },
            setContextMenuPosition() {
                const topParent = this.$el.getBoundingClientRect().top + this.$el.clientHeight;
                this.$el.querySelector('.popover').style.top = `${topParent}px`;
            },
            closeAnotherMenus() {
                const menu = event.target.closest('.dgt-context-menu');
                if (menu !== this.$el) {
                    this.isOpened = false;
                }
            },
            handleCloseOnClick() {
                if (this.closeOnClick) this.isOpened = false;
            }
        },
        watch: {
            isOpened: {
                handler: () => {
                    if (isOpened) setContextMenuPosition();
                }
            }
        }
    };
</script>
