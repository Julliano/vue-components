<style lang="scss" scoped>
    @import '../styles/variables';
    .dgt-tabs{
        &.vertical-left,
        &.vertical-right {
            display: flex;
            .tabs-content {
                flex-basis: 100%;
            }
        }
        &.vertical-right {
            .dgt-tab {
                flex-basis: 40px;
                order: 2;
                display: inline-block;
                .dgt-tab-item {
                    border-bottom: none;
                    border-left: 2px solid transparent;
                    writing-mode: vertical-rl;
                    display: block;
                    &[active]{
                        border-left-color: $primary-color;
                    }
                }
            }
        }
        &.vertical-left {
            .dgt-tab {
                display: inline-block;
                flex-basis: 40px;
                .dgt-tab-item {
                    border-bottom: none;
                    border-left: 2px solid transparent;
                    writing-mode: vertical-rl;
                    display: block;
                    transform: rotate(180deg);
                    &[active]{
                        border-left-color: $primary-color;
                    }
                }
            }
        }
    }
</style>

<template>
    <section class="dgt-tabs" :class="position">
        <nav  class="dgt-tab">
            <span
                tabindex="0"
                v-for="tab in tabs"
                @click="changeTab(tab)"
                @keypress.enter="changeTab(tab)"
                class="dgt-tab-item"
                title="tab.title"
                :active="isActive(tab)"
                :disabled="tab.disabled">
                    {{tab.label}}
            </span>
        </nav>
        <div class="tabs-content">
                <slot></slot>
        </div>
    </section>

</template>

<script>
    export default {
        name: 'dgtTabs',
        props: {
            tabs: Array,
            position: String
        },
        data() {
            let currentTab = null;
            let currentTabIndex = 0;
            let oldTabIndex = 0;
            for (let i = 0; i < this.tabs.length; i++) {
                const tab = this.tabs[i];
                if (tab.active) {
                    currentTab = tab;
                    currentTabIndex = i;
                    break;
                }
            }
            return {
                currentTab,
                currentTabIndex,
                oldTabIndex
            };
        },
        mounted() {
            this.selectedSlot();
        },
        methods: {
            isActive(tab) {
                return this.currentTab === tab;
            },
            changeTab(tab) {
                this.oldTabIndex = this.currentTabIndex ;
                this.currentTabIndex = this.tabs.indexOf(tab) ;
                this.currentTab = tab;
                if (this.oldTabIndex === this.currentTabIndex) return;
                this.selectedSlot();
                this.$emit('changed', tab);
            },
            selectedSlot() {
                const filteredSlots = this.$slots.default.filter((item) => {
                    return item.tag !== undefined  || false;
                });
                filteredSlots[this.currentTabIndex].elm.setAttribute('active', '');
                filteredSlots[this.oldTabIndex].elm.removeAttribute('active');
            }
        }
    };
</script>
