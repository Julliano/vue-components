<style lang="scss" scoped>
.dgt-outside-viewport-component {
  margin: var(--dgt-outside-margin, 0);
  display: var(--dgt-outside-display, inline);
}
</style>

<template>
    <div class="dgt-outside-viewport-component">
        <slot v-if="visible"></slot>
    </div>
</template>

<script>
    import scrollMonitor from 'scrollmonitor';
    export default {
        name: 'dgtOutsideViewport',
        data() {
            return {
                visible: true
            };
        },
        mounted() {
            const element = this.$el;
            const containerMonitor = scrollMonitor.createContainer(element.parentElement);
            const elementWatcher = containerMonitor.create(element);

            elementWatcher.enterViewport(() => {
                if (this.$el) {
                    this.$el.style.removeProperty('min-height');
                }
                this.visible = true;
            });
            elementWatcher.exitViewport(() => {
                if (this.$el) {
                    this.$el.style.minHeight = `${this.$el.offsetHeight}px`;
                }
                this.visible = false;
            });
        }
    };
</script>
