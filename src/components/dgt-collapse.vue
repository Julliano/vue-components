<style lang="scss" scoped>
    .collapse-header span,
    .collapse-footer{
        cursor: pointer;
    }
</style>
<template>
    <div class="dgt-collapse collapse" :class="[{'opened': isOpened},{'expanded': isExpanded && isOpened}]">
        <header class="collapse-header">
            <span @click="open" @keyup.enter="open" tabindex="0">
                <i class="mdi mdi-chevron-down" :class="{'mdi-chevron-up':  isOpened}"></i>
                <slot name="header"></slot>
            </span>
        </header>
        <section class="collapse-content">
            <slot></slot>
        </section>
        <footer class="collapse-footer" v-show="showFooter" @click="expand" @keyup.enter="expand" tabindex="0">
            <span v-show="isExpanded">
                <slot name="less-items"></slot>
            </span>
            <span v-show="!isExpanded">
                <slot name="more-items"></slot>
            </span>
            <i class="mdi mdi-menu-down" :class="{'mdi-menu-up': isExpanded}"></i>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'dgtCollapse',
        props: {
            opened: {
                type: Boolean,
                default: false
            },
            expanded: {
                type: Boolean,
                default: false
            },
            showFooter: {
                type: Boolean,
                default: true
            },
            index: {
                type: Number
            }
        },
        data() {
            return {
                isOpened: false,
                isExpanded: false
            } ;
        },
        created() {
            this.isOpened = this.opened;
            this.isExpanded = this.expanded;
        },
        methods: {
            open() {
                this.isOpened = !this.isOpened;
                if (!this.isOpened) this.isExpanded = false;
                this.$emit('opened', {
                    isOpened: this.isOpened,
                    index: this.index
                });
            },
            expand() {
                this.isExpanded = !this.isExpanded;
                this.$emit('expanded', this.isExpanded);
            }
        },
        watch: {
            opened() {
                this.isOpened = this.opened;
                if (!this.isOpened) this.isExpanded = false;
            },
            expanded() {
                this.isExpanded = this.expanded;
            }
        }
    };
</script>
