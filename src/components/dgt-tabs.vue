<style lang="scss" scoped>
.dgt-tabs-component {
  .tabs-container {
    padding: 0;
    position: relative;
    margin: var(--dgt-tabs-container-margin, 0);
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
            cursor: var(--dgt-tabs-cursor, default);
          }
          &::before {
            content: "";
            opacity: var(--dgt-tabs-before-opacity, 1);
            position: absolute;
            top: -1px;
            left: 0;
            border-top: 10px solid var(--dgt-tabs-before-color, #fff);
            border-right: 10px solid transparent;
            width: 0;
          }
          &.blocked {
            opacity: var(--dgt-tabs-blocked-opacity, 0.4);
            color: var(--dgt-tabs-blocked-color, #0f0f0f);
          }
          &[selected] {
            background-color: var(
              --dgt-tabs-selected-background-color,
              #898989
            );
            color: var(--dgt-tabs-selected-color, #000);
            &.not-animated {
              border-bottom: var(--dgt-tabs-border-bottom, 0);
            }
          }
          display: inline-block;
          position: relative;
          background-color: var(--dgt-tabs-background-color, #f9f9fa);
          margin-right: var(--dgt-tabs-margin-right, 3px);
          width: var(--dgt-tabs-each-width, auto);
          .tab-text {
            white-space: nowrap;
            font-size: var(--dgt-tabs-text-font-size, 14px);
            margin: var(--dgt-tabs-text-margin, 10px 5px);
            padding: var(--dgt-tabs-text-padding, 3px);
          }
        }
      }
      &.bar-animated {
        background-color: var(--dgt-tabs-bar-animated-background-color, #000);
        border-color: var(--dgt-tabs-bar-animated-background-color, #000);
        height: 0;
        left: 0;
        transition-timing-function: var(
          --dgt-tabs-bar-animated-transition-timing-function,
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
            &::before {
              left: initial;
              border-top: 10px solid var(--dgt-tabs-before-color, #fff);
              border-left: 10px solid transparent;
              border-right: none;
            }
            &[selected] {
              &.not-animated {
                border-left: var(--dgt-tabs-border-bottom, 0);
                border-bottom: none;
              }
            }
          }
        }
      }
      &.bar-animated {
        width: 1px;
        top: 0;
        transition: height 1s, top 1s;
      }
    }
    &.vertical-left {
      .tabs-container {
        float: left;
      }
      li {
        .tabs-list {
          .tab {
            transform: rotate(180deg);
          }
        }
        &.bar-animated {
          bottom: 15px;
          right: 0;
          left: auto;
        }
      }
    }
    &.vertical-right {
      .tabs-content {
        float: left;
      }
    }
  }
}
</style>

<template>
    <div class="dgt-tabs-component component" :class="`${dataProps.vertical ? 'vertical' : ''} ${dataProps.position}`">
        <ul class="tabs-container">
            <li class="tabs">
                <ul class="tabs-list">
                    <li class="tab" :selected="getSelected(key)" :class="`tab-${index} ${kebabCase(key)} ${dataProps.barAnimatedHidden ? 'not-animated' : ''} ${tab.block ? 'blocked' : ''}`"
                        :index="`${index}`"
                        v-for="(tab, key, index) in dataProps.tabs" :key="key"
                        @click.prevent="swapTab($event, key)"
                        v-if="!tab.block"
                        >
                        <p class="tab-text">
                            {{key}}
                            <slot :name="key" :dataProps=dataProps></slot>
                        </p>
                    </li>
                    <li v-else :class="`tab tab-${index} blocked ${dataProps.barAnimatedHidden ? 'not-animated' : ''}`">
                        <p class="tab-text">
                            {{key}}
                            <slot :name="key" :dataProps=dataProps></slot>
                        </p>
                    </li>
                </ul>
            </li>
            <li class="bar-animated"
                :hidden="dataProps.barAnimatedHidden"
                :style="{
                    borderWidth: `${dataProps.barAnimatedSize}px`,
                    borderStyle: 'solid',
                    borderColor: `${dataProps.barAnimatedColor}`
                }">
            </li>
        </ul>
        <div class="tabs-content">
            <slot name="tabContent" :dataProps=dataProps :selectedTab=selectedTab></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dgtTabs',
    props: {
        dataProps: {
            vertical: Boolean,
            position: String,
            barAnimatedHidden: Boolean,
            barAnimatedSize: Number,
            tabs: {
                'Filtros lorem': {
                    block: Boolean,
                    quantityContents: Number
                },
                'Filtros impsum': {
                    block: Boolean,
                    quantityContents: Number
                },
                'Filtros Gerais': {
                    selected: Boolean,
                    quantityContents: Number
                },
                'Filtros Específicos': {}
            }
        }
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
                }, 200);
                observer.disconnect();
            });
            observer.observe(this.$el.closest('body'), config);
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
            if (this.dataProps.tabs[tabName] && this.dataProps.tabs[tabName].selected) {
                this.selectedTab = tabName;
                this.emitGeneral('swap-tabs', this.dataProps.tabs[tabName], tabName);
                return true;
            }
            return false;
        },
        moveAnimatedBar(elem) {
            if (!(elem && elem.offsetWidth)) return;
            let widthElem = elem.offsetWidth;
            let positionAnimatedBar = elem.offsetLeft;
            let animatedBar = this.$el.querySelector('.tabs-container .bar-animated');
            animatedBar.style.left = `${positionAnimatedBar}px`;
            animatedBar.style.width = `${widthElem}px`;
        },
        verticalMoveAnimatedBar(elem) {
            if (!(elem && elem.offsetWidth)) return;
            let widthElem = elem.offsetHeight;
            let positionAnimatedBar = elem.offsetTop;
            let tabsContainer = this.$el.querySelector('.tabs-container');
            let animatedBar = tabsContainer.querySelector('.bar-animated');
            animatedBar.style.top = `${positionAnimatedBar}px`;
            animatedBar.style.height = `${widthElem}px`;
        },
        setAnimatedBar(elem) {
            if (this.dataProps.vertical) {
                let widthTab = this.$el.querySelector('.tabs-container .tabs-list .tab');

                if (!widthTab) return;

                widthTab = widthTab.offsetWidth;
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

            this.dataProps.tabs[this.selectedTab].selected = false;
            this.selectedTab = tabName;
            this.dataProps.tabs[tabName].selected = true;

            this.emitGeneral('swap-tabs', this.dataProps.tabs[tabName], tabName);
            this.setAnimatedBar(elem);
        },
        emitGeneral(emitFunc, ...args) {
            this.$emit(emitFunc, args);
        }
    }
};
</script>
