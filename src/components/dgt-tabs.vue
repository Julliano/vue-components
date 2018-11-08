<style lang="scss" scoped>
.dgt-tabs-component {
  .tabs-container {
    padding: 0;
    position: relative;
    margin: var(--dgt-tabs-container-margin, 5px);
    li {
      text-decoration: none;
      list-style: none;
      .tabs-list {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-size: 10px;
        width: 100%;
        .tab {
          &:hover {
            cursor: var(--dgt-tab-cursor, default);
          }
          &::before {
            content: "";
            opacity: var(--dgt-tab-before-opacity, 1);
            position: absolute;
            top: -1px;
            left: 0;
            border-top: 10px solid #fff;
            border-right: 10px solid transparent;
            width: 0;
          }
          &.blocked {
            opacity: var(--dgt-tab-blocked-opacity, 0.4);
            color: var(--dgt-tab-blocked-color, #0f0f0f);
          }
          &[selected] {
            background-color: var(--dgt-tab-selected-background-color, #cbcbcb);
            color: var(--dgt-tab-selected-color, #000);
            &.not-animated{
              border-bottom: var(--dgt-tab-border-bottom, 0);
            }
          }
          display: inline-block;
          position: relative;
          background-color: var(--dgt-tabs-background-color, #f9f9fa);
          margin-right: var(--dgt-tabs-margin-right, 3px);
          width: var(--dgt-tabs-each-width, auto);
          .tab-text {
            white-space: nowrap;
            margin: var(--dgt-tabs-text-margin, 10px 5px);
            padding: var(--dgt-tabs-text-padding, 3px);
          }
        }
      }
      &.bar-animated {
        background-color: var(--dgt-bar-animated-background-color, #000);
        border-color: var(--dgt-bar-animated-background-color, #000);
        height: 0;
        left: 0;
        transition-timing-function: var(
          --dgt-bar-animated-transition-timing-function,
          ease
        );
        transition: width 0.5s, left 0.5s;
        position: absolute;
        float: left;
        bottom: 0px;
      }
    }
  }

  &.vertical {
    .tabs-container,
    .tabs-content {
      display: inline-block;
    }
    .tabs-container > li {
      &.tabs {
        .tabs-list {
          .tab {
            writing-mode: vertical-rl;
            display: block;
          }
        }
      }
    }
    &.vertical-left {
      .tabs-container {
        float: left;
      }
      .tab {
        transform: rotate(180deg);
        ::before {
          border-left: 10px solid transparent;
          border-right: 0;
          right: 0;
        }
      }
      .bar-animated {
        bottom: 15px;
        right: 0;
        left: auto;
      }
    }
    &.vertical-right {
      .tab::before {
        width: 0;
        left: initial;
      }
      .tabs-content {
        float: left;
      }
    }
    .bar-animated {
      width: 1px;
      top: 0;
      transition: height 1s, top 1s;
    }
  }
}
</style>

<template>
    <div class="dgt-tabs-component component" :class="`${data.vertical ? 'vertical' : ''} ${data.position}`">
        <ul class="tabs-container">
            <li class="tabs">
                <ul class="tabs-list">
                    <li class="tab" :selected="getSelected(key)" :class="`tab-${index} ${kebabCase(key)} ${data.barAnimatedHidden ? 'not-animated' : ''} ${tab.block ? 'blocked' : ''}`"
                        :index="`${index}`"
                        v-for="(tab, key, index) in data.tabs" :key="key"
                        @click.prevent="swapTab($event, key)"
                        v-if="!tab.block"
                        >
                        <p class="tab-text">
                            {{key}}
                            <slot :name="key" :data=data></slot>
                        </p>
                    </li>
                    <li v-else :class="`tab tab-${index} blocked ${data.barAnimatedHidden ? 'not-animated' : ''}`">
                        <p class="tab-text">
                            {{key}}
                            <slot :name="key" :data=data></slot>
                        </p>
                    </li>
                </ul>
            </li>
            <li class="bar-animated"
                :hidden="data.barAnimatedHidden"
                :style="{
                    borderWidth: `${data.barAnimatedSize}px`,
                    borderStyle: 'solid',
                    borderColor: `${data.barAnimatedColor}`
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
    mounted() {
        let tabSelected = this.$el.querySelector('.tabs-container .tabs-list .tab[selected]');

        this.setAnimatedBar(tabSelected);

        this.$nextTick(() => {
            let config = {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                attributeOldValue: true,
                characterDataOldValue: true
            };

            let observer = new MutationObserver(mutations => {
                if (!mutations.length) return;

                let executeMutation = setTimeout(() => {
                    this.setAnimatedBar(
                        this.$el.querySelector('.tabs-container .tabs-list .tab[selected]')
                    );
                    clearTimeout(executeMutation);
                    observer.observe(this.$el, config);
                });
                observer.disconnect();
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
        kebabCase(word) {
            return word.toLowerCase().replace(/ /g, '-');
        },
        getSelected(tabName) {
            if (this.data.tabs[tabName] && this.data.tabs[tabName].selected) {
                this.selectedTab = tabName;
                this.emitGeneral('swap-tabs', this.data.tabs[tabName], tabName);
                return true;
            }
            return false;
        },
        moveAnimatedBar(elem) {
            if (elem && elem.offsetWidth) {
                let widthElem = elem.offsetWidth;
                let positionAnimatedBar = elem.offsetLeft;
                let animatedBar = this.$el.querySelector('.tabs-container .bar-animated');
                let animatedBarBorderWidth = parseInt(animatedBar.style.borderWidth.replace('px', ''));

                animatedBar.style.left = `${positionAnimatedBar}px`;
                animatedBarBorderWidth += animatedBarBorderWidth;
                animatedBar.style.width = `${widthElem - animatedBarBorderWidth}px`;
            }

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
                    .widthTab.offsetWidth;
                this.$el.querySelector('.tabs-container').style.width = `${widthTab}px`;
                this.verticalMoveAnimatedBar(elem);
                return;
            }
            this.moveAnimatedBar(elem);
        },
        swapTab(event, tabName) {
            let elem = event.target.className.indexOf('tab ') > -1 ?
                event.target :
                event.target.parentNode;

            this.data.tabs[this.selectedTab].selected = false;
            this.selectedTab = tabName;
            this.data.tabs[tabName].selected = true;

            this.emitGeneral('swap-tabs', this.data.tabs[tabName], tabName);
            this.setAnimatedBar(elem);
        },
        emitGeneral(emitFunc, ...args) {
            this.$emit(emitFunc, args);
        }
    }
};
</script>
