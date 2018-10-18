<template>
    <div class="dgt-tabs-component component" :class="`${data.vertical ? 'vertical' : ''} ${data.position}`">
        <ul class="tabs-container" :style="data.tabsContainerStyle">
            <li class="tabs">
                <ul class="tabs-list" :style="{ fontSize: data.fontSize }">
                    <li class="tab" :selected="getSelected(key)" :class="`tab-${index} ${key}`" 
                        :index="`${index}`"
                        v-for="(tab, key, index) in data.tabs" :key="key"
                        @click.prevent="swapTab($event, key)"
                        :style="[data.tabsStyle, tab.style, tab.selected ? data.tabSelectedStyle : '']">
                        <p :style="data.tabsTextStyle">
                            {{key}}
                            <slot :name="key" :data=data></slot>
                        </p>
                    </li>
                </ul>
            </li>
            <li class="bar-animated"
                :hidden="data.barAnimatedHidden"
                :style="{ 
                    backgroundColor: data.barAnimatedColor, 
                    border: `${data.barAnimatedSize}px solid ${data.barAnimatedColor}`
                }">
            </li>
        </ul>
        <div class="tabs-content">
            <slot name="tabContent" :data=data :selectedTab=selectedTab></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dgtTabs',
    props: {
        data: {}
    },
    data() {
        return {
            selectedTab: ''
        };
    },
    mounted: function() {
        let tabSelected = this.$el.querySelector('.tabs-container .tabs-list .tab[selected]');

        this.setAnimatedBar(tabSelected);

        this.$nextTick(function() {
            let config = {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                attributeOldValue: true,
                characterDataOldValue: true
            };

            let executeMutation = () => {
                setTimeout(() => {
                    this.setAnimatedBar(
                        this.$el.querySelector('.tabs-container .tabs-list .tab[selected]')
                    );
                    clearTimeout(executeMutation);
                    observer.observe(this.$el, config);
                }, 100);
            };

            let observer = new MutationObserver(mutations => {
                if (mutations.length) {
                    executeMutation();
                    observer.disconnect();
                }
            });

            observer.observe(this.$el, config);
            window.addEventListener('resize', () => {
                this.setAnimatedBar(
                    this.$el.querySelector('.tabs-container .tabs-list .tab[selected]')
                );
            });
        });
    },
    methods: {
        getSelected(tabName) {
            if (this.data.tabs[tabName] && this.data.tabs[tabName].selected) {
                this.selectedTab = tabName;
                return true;
            }
            return false;
        },
        moveAnimatedBar(elem) {
            let widthElem = elem.offsetWidth;
            let positionAnimatedBar = elem.offsetLeft;
            let animatedBar = this.$el.querySelector('.tabs-container .bar-animated');
            let animatedBarBorderWidth = parseInt(animatedBar.style.borderWidth.replace('px', ''));

            animatedBar.style.left = `${positionAnimatedBar}px`;
            animatedBarBorderWidth += animatedBarBorderWidth;
            animatedBar.style.width = `${widthElem - animatedBarBorderWidth}px`;
        },
        verticalMoveAnimatedBar(elem) {
            let widthElem = elem.offsetHeight;
            let positionAnimatedBar = elem.offsetTop;
            let tabsContainer = this.$el.querySelector('.tabs-container');
            let animatedBar = tabsContainer.querySelector('.bar-animated');
            let animatedBarBorderHeight = parseInt(animatedBar.style.borderWidth.replace('px', ''));

            animatedBar.style.top = `${positionAnimatedBar}px`;
            animatedBarBorderHeight += animatedBarBorderHeight;
            animatedBar.style.height = `${widthElem - animatedBarBorderHeight}px`;
        },
        setAnimatedBar(elem) {
            if (this.data.vertical) {
                let widthTab = this.$el.querySelector('.tabs-container .tabs-list .tab')
                    .offsetWidth;
                this.$el.querySelector('.tabs-container').style.width = `${widthTab}px`;
                this.verticalMoveAnimatedBar(elem);
                return;
            }
            this.moveAnimatedBar(elem);
        },
        swapTab(event, tabName) {
            let elem =
                event.target.className.indexOf('tab') > -1 ? event.target : event.target.parentNode;

            this.data.tabs[this.selectedTab].selected = false;
            this.selectedTab = tabName;
            this.data.tabs[tabName].selected = true;

            this.emitGeneral('swapTabs', this.data.tabs[tabName], tabName);
            this.setAnimatedBar(elem);
        },
        emitGeneral(emitFunc, ...args) {
            this.$bus && this.$bus.$emit(emitFunc, args);
        }
    }
};
</script>
