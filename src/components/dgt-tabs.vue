<style lang="scss" scoped>
    @import '../sass/variables';
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

        .dgt-tab-changed {
            font-weight: 800;
            &::before {
                content: '*';
            }
        }

    }
</style>

<template>
    <section class="dgt-tabs" :class="position">
        <nav  class="dgt-tab" :class="{'spread-items' : spreadItems}">
            <span
                tabindex="0"
                v-for="(tab, index) in tabs"
                :key="index"
                @click="changeTab(tab)"
                @keypress.enter="changeTab(tab)"
                class="dgt-tab-item"
                :class="{'dgt-tab-changed': tab.changed}"
                :title="tab.label"
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
            spreadItems: Boolean,
            position: String
        },
        data() {
            return {
                currentTab: null,
                currentTabIndex: 0,
                oldTabIndex: null,
                currentTab: null,
                currentTabIndex: 0
            };
        },
        mounted() {
            this.init();
            this.selectedSlot();
        },
        methods: {
            init() {
                for (let i = 0; i < this.tabs.length; i++) {
                    const tab = this.tabs[i];
                    if (tab.active) {
                        this.currentTab = tab;
                        this.currentTabIndex = i;
                        break;
                    }
                }
            },
            isActive(tab) {
                return this.currentTab === tab;
            },
            changeTab(tab) {
                this.oldTabIndex = this.currentTabIndex ;
                this.currentTabIndex = this.tabs.indexOf(tab) ;
                this.currentTab = tab;
                if (this.oldTabIndex === this.currentTabIndex) return this.$emit('clicked', tab);
                this.selectedSlot();
                return this.$emit('changed', tab);
            },
            selectedSlot() {
                const filteredSlots = this.$slots.default.filter((item) => {
                    return item.tag !== undefined  || false;
                });
                filteredSlots[this.currentTabIndex].elm.setAttribute('active', '');
                if (this.oldTabIndex !== null) {
                    filteredSlots[this.oldTabIndex].elm.removeAttribute('active');
                }
            }
        }
    };
</script>
