/*!
 * dgt-vue-components1.0.94
 * (c) 2018-2019 Digitro
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global['bc-filter'] = factory());
}(this, (function () { 'use strict';

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script = {
        name: 'dgt-switch',
        props: {
            value: [Object, String, Number, Boolean],
            disabled: Boolean,
            checkedLabel: {
                type: String,
                default: ''
            },
            uncheckedLabel: {
                type: String,
                default: ''
            },
            checkedValue: {
                type: [Object, String, Number, Boolean],
                default: true
            },
            uncheckedValue: {
                type: [Object, String, Number, Boolean],
                default: false
            }
        },
        methods: {
            changeValue() {
                const checked = this.value === this.checkedValue;
                this.$emit('input', !checked ? this.checkedValue : this.uncheckedValue);
            }
        }
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
    /* server only */
    , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
      } // Vue.extend constructor export interop.


      var options = typeof script === 'function' ? script.options : script; // render functions

      if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true; // functional template

        if (isFunctionalTemplate) {
          options.functional = true;
        }
      } // scopedId


      if (scopeId) {
        options._scopeId = scopeId;
      }

      var hook;

      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true

          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          } // inject component styles


          if (style) {
            style.call(this, createInjectorSSR(context));
          } // register component module identifier for async chunk inference


          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        }; // used by ssr in case component is cached and beforeCreate
        // never gets called


        options._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function () {
          style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
        } : function (context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook) {
        if (options.functional) {
          // register for functional component in vue file
          var originalRender = options.render;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return script;
    }

    var normalizeComponent_1 = normalizeComponent;

    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
      return function (id, style) {
        return addStyle(id, style);
      };
    }
    var HEAD = document.head || document.getElementsByTagName('head')[0];
    var styles = {};

    function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = {
        ids: new Set(),
        styles: []
      });

      if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

          code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
        }

        if (!style.element) {
          style.element = document.createElement('style');
          style.element.type = 'text/css';
          if (css.media) style.element.setAttribute('media', css.media);
          HEAD.appendChild(style.element);
        }

        if ('styleSheet' in style.element) {
          style.styles.push(code);
          style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
        } else {
          var index = style.ids.size - 1;
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    }

    var browser = createInjector;

    /* script */
    const __vue_script__ = script;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "switch", class: { disabled: _vm.disabled } },
        [
          _c("input", {
            staticClass: "switch-checkbox",
            attrs: { type: "checkbox", id: _vm._uid, disabled: _vm.disabled },
            domProps: { checked: _vm.value === _vm.checkedValue },
            on: { change: _vm.changeValue }
          }),
          _vm._v(" "),
          _c("label", { staticClass: "switch-label", attrs: { for: _vm._uid } }, [
            _c("span", {
              staticClass: "switch-inner",
              attrs: {
                "checked-label": _vm.checkedLabel,
                "unchecked-label": _vm.uncheckedLabel
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "switch-button" })
          ])
        ]
      )
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-14500a64_0", { source: ".switch[data-v-14500a64] {\n  position: relative;\n  width: 3.2em;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.switch .switch-checkbox[data-v-14500a64] {\n    display: none;\n}\n.switch .switch-label[data-v-14500a64] {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border-radius: 2px;\n}\n.switch .switch-inner[data-v-14500a64] {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.switch .switch-inner[data-v-14500a64]:before, .switch .switch-inner[data-v-14500a64]:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 1.6em;\n    padding: 0;\n    line-height: 1.6em;\n    font-size: 0.8em;\n    color: white;\n    font-weight: bold;\n    box-sizing: border-box;\n}\n.switch .switch-inner[data-v-14500a64]:before {\n    content: attr(checked-label);\n    background-color: var(--dgt-switch-checked-color, #0D47A1);\n    color: #FFFFFF;\n    text-align: center;\n    padding-right: 20%;\n}\n.switch .switch-inner[data-v-14500a64]:after {\n    content: attr(unchecked-label);\n    background-color: var(--dgt-switch-unchecked-color, #FFFFFF);\n    color: #FFFFFF;\n    text-align: center;\n    padding-left: 20%;\n}\n.switch.disabled .switch-inner[data-v-14500a64]:after,\n  .switch.disabled .switch-inner[data-v-14500a64]:before {\n    background-color: #E0E0E0;\n}\n.switch.disabled .switch-label[data-v-14500a64] {\n    cursor: default;\n}\n.switch .switch-button[data-v-14500a64] {\n    display: block;\n    width: 1.2em;\n    margin: 0;\n    background: #FFFFFF;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 2em;\n    border-radius: 2px;\n    transition: all 0.3s ease-in 0s;\n    box-shadow: 0 0.4px 2px 0.2px #A1A1A1;\n}\n.switch .switch-checkbox:checked + .switch-label .switch-inner[data-v-14500a64] {\n    margin-left: 0;\n}\n.switch .switch-checkbox:checked + .switch-label .switch-button[data-v-14500a64] {\n    right: 0;\n}\n\n/*# sourceMappingURL=dgt-switch.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/components/dgt-switch.vue","dgt-switch.vue"],"names":[],"mappings":"AAaA;EACA,kBAAA;EACA,YAPA;EAQA,yBAAA;EACA,sBAAA;EACA,qBAAA;AAAA;AALA;IAQA,aAAA;AAAA;AARA;IAYA,cAAA;IACA,gBAAA;IACA,eAAA;IACA,kBAnBA;AAAA;AAIA;IAmBA,cAAA;IACA,WAAA;IACA,kBAAA;IACA,kCAAA;AAAA;AAtBA;IA0BA,cAAA;IACA,WAAA;IACA,UAAA;IACA,aArBA;IAsBA,UAAA;IACA,kBAvBA;IAwBA,gBAtCA;IAuCA,YAAA;IACA,iBAAA;IACA,sBAAA;AAAA;AAnCA;IAuCA,4BAAA;IACA,0DAjDA;IAkDA,cAAA;IACA,kBAAA;IACA,kBAAA;AAAA;AA3CA;IA+CA,8BAAA;IACA,4DA1DA;IA2DA,cAAA;IACA,kBAAA;IACA,iBAAA;AAAA;AAnDA;;IAyDA,yBA/DA;AAAA;AAMA;IA4DA,eAAA;AAAA;AA5DA;IAiEA,cAAA;IACA,YArEA;IAsEA,SAAA;IACA,mBAAA;IACA,kBAAA;IACA,MAAA;IACA,SAAA;IACA,UAAA;IACA,kBA7EA;IA8EA,+BAAA;IACA,qCAAA;AAAA;AA3EA;IA+EA,cAAA;AAAA;AA/EA;IAmFA,QAAA;AAAA;;ACjCA,yCAAyC","file":"dgt-switch.vue","sourcesContent":["<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n\n    $unchecked-color: var(--dgt-switch-unchecked-color, $white);\n    $checked-color: var(--dgt-switch-checked-color, $primary-color);\n    $disabled-color: $gray300;\n    $switch-height: $input-height;\n    $switch-font-size: $switch-height/2;\n    $switch-width: $switch-height*2;\n    $switch-border: 2px;\n    $switch-button-width: $switch-height*0.75;\n    $group-line: 2px;\n\n    .switch {\n        position: relative;\n        width: $switch-width;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n\n        .switch-checkbox {\n            display: none;\n        }\n\n        .switch-label {\n            display: block;\n            overflow: hidden;\n            cursor: pointer;\n            border-radius: $switch-border;\n        }\n\n        .switch-inner {\n            display: block;\n            width: 200%;\n            margin-left: -100%;\n            transition: margin 0.3s ease-in 0s;\n        }\n\n        .switch-inner:before, .switch-inner:after {\n            display: block;\n            float: left;\n            width: 50%;\n            height: $switch-height;\n            padding: 0;\n            line-height: $switch-height;\n            font-size: $switch-font-size;\n            color: white;\n            font-weight: bold;\n            box-sizing: border-box;\n        }\n\n        .switch-inner:before {\n            content: attr(checked-label);\n            background-color: $checked-color;\n            color: #FFFFFF;\n            text-align: center;\n            padding-right: 20%;\n        }\n\n        .switch-inner:after {\n            content: attr(unchecked-label);\n            background-color: $unchecked-color;\n            color: #FFFFFF;\n            text-align: center;\n            padding-left: 20%;\n        }\n\n        &.disabled {\n            .switch-inner:after,\n            .switch-inner:before {\n                background-color: $disabled-color;\n            }\n            .switch-label {\n                cursor: default;\n            }\n        }\n\n        .switch-button {\n            display: block;\n            width: $switch-button-width;\n            margin: 0;\n            background: #FFFFFF;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: $switch-width - $switch-button-width;\n            border-radius: $switch-border;\n            transition: all 0.3s ease-in 0s;\n            box-shadow: 0 $switch-border/5 $switch-border $switch-border/10 #A1A1A1;\n        }\n\n        .switch-checkbox:checked + .switch-label .switch-inner {\n            margin-left: 0;\n        }\n\n        .switch-checkbox:checked + .switch-label .switch-button {\n            right: 0;\n        }\n    }\n</style>\n<template>\n    <div class=\"switch\" :class=\"{'disabled': disabled}\">\n        <input type=\"checkbox\"\n               class=\"switch-checkbox\"\n               :checked=\"value === checkedValue\"\n               @change=\"changeValue\"\n               :id=\"_uid\"\n               :disabled=\"disabled\"\n               >\n        <label class=\"switch-label\" :for=\"_uid\">\n            <span class=\"switch-inner\" :checked-label=\"checkedLabel\" :unchecked-label=\"uncheckedLabel\"></span>\n            <span class=\"switch-button\"></span>\n        </label>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: 'dgt-switch',\n        props: {\n            value: [Object, String, Number, Boolean],\n            disabled: Boolean,\n            checkedLabel: {\n                type: String,\n                default: ''\n            },\n            uncheckedLabel: {\n                type: String,\n                default: ''\n            },\n            checkedValue: {\n                type: [Object, String, Number, Boolean],\n                default: true\n            },\n            uncheckedValue: {\n                type: [Object, String, Number, Boolean],\n                default: false\n            }\n        },\n        methods: {\n            changeValue() {\n                const checked = this.value === this.checkedValue;\n                this.$emit('input', !checked ? this.checkedValue : this.uncheckedValue);\n            }\n        }\n    };\n</script>\n",".switch {\n  position: relative;\n  width: 3.2em;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n  .switch .switch-checkbox {\n    display: none; }\n  .switch .switch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border-radius: 2px; }\n  .switch .switch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s; }\n  .switch .switch-inner:before, .switch .switch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 1.6em;\n    padding: 0;\n    line-height: 1.6em;\n    font-size: 0.8em;\n    color: white;\n    font-weight: bold;\n    box-sizing: border-box; }\n  .switch .switch-inner:before {\n    content: attr(checked-label);\n    background-color: var(--dgt-switch-checked-color, #0D47A1);\n    color: #FFFFFF;\n    text-align: center;\n    padding-right: 20%; }\n  .switch .switch-inner:after {\n    content: attr(unchecked-label);\n    background-color: var(--dgt-switch-unchecked-color, #FFFFFF);\n    color: #FFFFFF;\n    text-align: center;\n    padding-left: 20%; }\n  .switch.disabled .switch-inner:after,\n  .switch.disabled .switch-inner:before {\n    background-color: #E0E0E0; }\n  .switch.disabled .switch-label {\n    cursor: default; }\n  .switch .switch-button {\n    display: block;\n    width: 1.2em;\n    margin: 0;\n    background: #FFFFFF;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 2em;\n    border-radius: 2px;\n    transition: all 0.3s ease-in 0s;\n    box-shadow: 0 0.4px 2px 0.2px #A1A1A1; }\n  .switch .switch-checkbox:checked + .switch-label .switch-inner {\n    margin-left: 0; }\n  .switch .switch-checkbox:checked + .switch-label .switch-button {\n    right: 0; }\n\n/*# sourceMappingURL=dgt-switch.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = "data-v-14500a64";
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      

      
      var DgtSwitch = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        browser,
        undefined
      );

    //
    var script$1 = {
        name: 'bc-switch',
        components: {DgtSwitch},
        props: {
            value: [Object, String, Number, Boolean],
            disabled: Boolean
        }
    };

    /* script */
    const __vue_script__$1 = script$1;

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("dgt-switch", {
        staticClass: "bc-switch",
        attrs: {
          "checked-label": "OU",
          "unchecked-label": "E",
          "checked-value": "OR",
          "unchecked-value": "AND",
          disabled: _vm.disabled,
          value: _vm.value
        },
        on: {
          input: function($event) {
            return _vm.$emit("input", $event)
          }
        }
      })
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      const __vue_inject_styles__$1 = function (inject) {
        if (!inject) return
        inject("data-v-cbe8bf6a_0", { source: ".bc-switch[data-v-cbe8bf6a] {\n  --dgt-switch-checked-color: #641C90;\n  --dgt-switch-unchecked-color: #2E7D32;\n}\n\n/*# sourceMappingURL=bc-switch.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/bc-components/bc-switch.vue","bc-switch.vue"],"names":[],"mappings":"AAGA;EACA,mCAAA;EACA,qCAAA;AAAA;;ACDA,wCAAwC","file":"bc-switch.vue","sourcesContent":["<style scoped lang=\"scss\">\n    @import \"styles/variables\";\n\n    .bc-switch {\n        --dgt-switch-checked-color: #{$or-color};\n        --dgt-switch-unchecked-color: #{$and-color};\n    }\n</style>\n\n\n<template>\n    <dgt-switch class=\"bc-switch\"\n                checked-label=\"OU\"\n                unchecked-label=\"E\"\n                checked-value=\"OR\"\n                unchecked-value=\"AND\"\n                :disabled=\"disabled\"\n                :value=\"value\"\n                @input=\"$emit('input', $event)\"\n    ></dgt-switch>\n</template>\n\n<script>\n    import DgtSwitch from '../components/dgt-switch.vue';\n    export default {\n        name: 'bc-switch',\n        components: {DgtSwitch},\n        props: {\n            value: [Object, String, Number, Boolean],\n            disabled: Boolean\n        }\n    };\n</script>\n",".bc-switch {\n  --dgt-switch-checked-color: #641C90;\n  --dgt-switch-unchecked-color: #2E7D32; }\n\n/*# sourceMappingURL=bc-switch.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$1 = "data-v-cbe8bf6a";
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = false;
      /* style inject SSR */
      

      
      var BcSwitch = normalizeComponent_1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        browser,
        undefined
      );

    //

    var script$2 = {
        name: 'bc-filter-group',
        components: {
            BcSwitch
        },
        props: {
            profileSelected: Object
        },
        data() {
            return {
                type: 'AND',
                itemCount: 0
            };
        },
        mounted() {
            this.updateGroups();
        },
        methods: {
            updateGroups() {
                this.itemCount = this.$slots.default.length;
            },
            onOperatorChanged(type) {
                this.type = type;
                this.$emit('type-changed', this.type);
            }
        }
    };

    /* script */
    const __vue_script__$2 = script$2;

    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _c("bc-switch", {
            attrs: { disabled: _vm.itemCount < 3 },
            on: { input: _vm.onOperatorChanged },
            model: {
              value: _vm.type,
              callback: function($$v) {
                _vm.type = $$v;
              },
              expression: "type"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "container",
              class: {
                and: _vm.type === "AND",
                or: _vm.type === "OR",
                "disabled-switch": _vm.itemCount < 3
              }
            },
            [_vm._t("default")],
            2
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$2 = [];
    __vue_render__$2._withStripped = true;

      /* style */
      const __vue_inject_styles__$2 = function (inject) {
        if (!inject) return
        inject("data-v-0b3dd7ba_0", { source: ".container[data-v-0b3dd7ba] {\n  margin-left: 0.645em;\n  margin-top: 0.645em;\n}\n.container.and[data-v-0b3dd7ba] {\n    border-color: #2E7D32;\n}\n.container.and[data-v-0b3dd7ba] > :last-child {\n      border-image-source: linear-gradient(to bottom, #2E7D32 0, #2E7D32 calc(1.8em + 1px), rgba(0, 0, 0, 0) calc(1.8em + 1px));\n      border-image-slice: 1;\n      border-image-width: 0 0 0 2px;\n}\n.container.or[data-v-0b3dd7ba] {\n    border-color: #641C90;\n}\n.container.or[data-v-0b3dd7ba] > :last-child {\n      border-image-source: linear-gradient(to bottom, #641C90 0, #641C90 calc(1.8em + 1px), rgba(0, 0, 0, 0) calc(1.8em + 1px));\n      border-image-slice: 1;\n      border-image-width: 0 0 0 2px;\n}\n.container.disabled-switch[data-v-0b3dd7ba] {\n    border-color: lightgray;\n}\n.container.disabled-switch[data-v-0b3dd7ba] > :last-child {\n      border-image-source: linear-gradient(to bottom, lightgray 0, lightgray calc(1.8em + 1px), rgba(0, 0, 0, 0) calc(1.8em + 1px));\n      border-image-slice: 1;\n      border-image-width: 0 0 0 2px;\n}\n.container > *[data-v-0b3dd7ba] {\n    border-left: 2px solid;\n    border-color: inherit;\n    padding-top: 1em;\n}\n.container[data-v-0b3dd7ba] > :before {\n    content: '';\n    position: relative;\n    bottom: 0.8em;\n    border-bottom: 2px solid;\n    padding-left: 15px;\n    margin-right: 5px;\n    margin-left: -2px;\n    border-color: inherit;\n    height: 50%;\n}\n\n/*# sourceMappingURL=bc-filter-group.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/bc-components/bc-filter-group.vue","bc-filter-group.vue"],"names":[],"mappings":"AAmBA;EACA,oBAAA;EACA,mBAAA;AAAA;AAFA;IAKA,qBAAA;AAAA;AALA;MAXA,yHAKA;MACA,qBAAA;MACA,6BAVA;AAAA;AAcA;IAYA,qBA9BA;AAAA;AAkBA;MAXA,yHAKA;MACA,qBAAA;MACA,6BAVA;AAAA;AAcA;IAmBA,uBAlCA;AAAA;AAeA;MAXA,6HAKA;MACA,qBAAA;MACA,6BAVA;AAAA;AAcA;IA0BA,sBAAA;IACA,qBAAA;IACA,gBA9BA;AAAA;AAEA;IAiCA,WAAA;IACA,kBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,iBAAA;IACA,iBArDA;IAsDA,qBAAA;IACA,WAAA;AAAA;;ACxBA,8CAA8C","file":"bc-filter-group.vue","sourcesContent":["<style scoped lang=\"scss\">\n    @import \"styles/variables\";\n    @import \"../styles/variables\";\n\n    $disabled-color: lightgray;\n    $group-line: 2px;\n\n    @mixin halfBorderLeft($color) {\n        border-image-source: linear-gradient(\n                to bottom,\n                $color 0,\n                $color calc(#{$big-space+$input-height/2} + #{$group-line/2}),\n                rgba(0,0,0,0) calc(#{$big-space+$input-height/2} + #{$group-line/2})\n        );\n        border-image-slice: 1;\n        border-image-width: 0 0 0 $group-line;\n\n    }\n\n    .container {\n        margin-left: $normal-space;\n        margin-top: $normal-space;\n\n        &.and {\n            border-color: $and-color;\n            > :last-child {\n                @include halfBorderLeft($and-color)\n            }\n        }\n\n        &.or {\n            border-color: $or-color;\n            > :last-child {\n                @include halfBorderLeft($or-color)\n            }\n        }\n\n        &.disabled-switch {\n            border-color: $disabled-color;\n            > :last-child {\n                @include halfBorderLeft($disabled-color)\n            }\n        }\n\n        > * {\n            border-left: $group-line solid;\n            border-color: inherit;\n            padding-top: $big-space;\n\n        }\n\n        > :before {\n            content: '';\n            position: relative;\n            bottom: $input-height/2;\n            border-bottom: $group-line solid;\n            padding-left: 15px;\n            margin-right: 5px;\n            margin-left: -$group-line;\n            border-color: inherit;\n            height: 50%;\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <bc-switch v-model=\"type\" :disabled=\"itemCount < 3\" @input=\"onOperatorChanged\"></bc-switch>\n        <div class=\"container\"\n            :class=\"{\n                'and': type === 'AND',\n                'or': type === 'OR',\n                'disabled-switch': itemCount < 3\n            }\">\n            <slot></slot>\n        </div>\n    </div>\n</template>\n\n<script>\n    import BcSwitch from './bc-switch.vue';\n\n    export default {\n        name: 'bc-filter-group',\n        components: {\n            BcSwitch\n        },\n        props: {\n            profileSelected: Object\n        },\n        data() {\n            return {\n                type: 'AND',\n                itemCount: 0\n            };\n        },\n        mounted() {\n            this.updateGroups();\n        },\n        methods: {\n            updateGroups() {\n                this.itemCount = this.$slots.default.length;\n            },\n            onOperatorChanged(type) {\n                this.type = type;\n                this.$emit('type-changed', this.type);\n            }\n        }\n    };\n</script>\n",".container {\n  margin-left: 0.645em;\n  margin-top: 0.645em; }\n  .container.and {\n    border-color: #2E7D32; }\n    .container.and > :last-child {\n      border-image-source: linear-gradient(to bottom, #2E7D32 0, #2E7D32 calc(1.8em + 1px), rgba(0, 0, 0, 0) calc(1.8em + 1px));\n      border-image-slice: 1;\n      border-image-width: 0 0 0 2px; }\n  .container.or {\n    border-color: #641C90; }\n    .container.or > :last-child {\n      border-image-source: linear-gradient(to bottom, #641C90 0, #641C90 calc(1.8em + 1px), rgba(0, 0, 0, 0) calc(1.8em + 1px));\n      border-image-slice: 1;\n      border-image-width: 0 0 0 2px; }\n  .container.disabled-switch {\n    border-color: lightgray; }\n    .container.disabled-switch > :last-child {\n      border-image-source: linear-gradient(to bottom, lightgray 0, lightgray calc(1.8em + 1px), rgba(0, 0, 0, 0) calc(1.8em + 1px));\n      border-image-slice: 1;\n      border-image-width: 0 0 0 2px; }\n  .container > * {\n    border-left: 2px solid;\n    border-color: inherit;\n    padding-top: 1em; }\n  .container > :before {\n    content: '';\n    position: relative;\n    bottom: 0.8em;\n    border-bottom: 2px solid;\n    padding-left: 15px;\n    margin-right: 5px;\n    margin-left: -2px;\n    border-color: inherit;\n    height: 50%; }\n\n/*# sourceMappingURL=bc-filter-group.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$2 = "data-v-0b3dd7ba";
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = false;
      /* style inject SSR */
      

      
      var BcFilterGroup = normalizeComponent_1(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        browser,
        undefined
      );

    var pt = {
        select: 'Selecione',
        sources: 'Fontes',
        createSearch: 'Pesquisar',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
        save: 'Salvar',
        newGroup: 'Novo grupo',
        profileOptions: {
            save: 'Salvar',
            saveAs: 'Salvar como',
            rename: 'Renomear',
            default: 'Definir como padrão',
            exclude: 'Excluir',
            actions: 'Ações'
        },
        search: {
            saveAs: 'Salvar pesquisa como',
            rename: 'Renomear pesquisa',
            name: 'Nome da pesquisa:'
        }
    };

    var es = {
        select: 'Selecione', // Todo tradução
        sources: 'Fontes', // Todo tradução
        createSearch: 'Consultar',
        cancel: 'Cancelar', // Todo tradução
        confirm: 'Confirmar', // Todo tradução
        save: 'Salvar', // Todo tradução
        newGroup: 'Novo grupo', // Todo tradução
        profileOptions: { // Todo tradução
            save: 'Salvar',
            saveAs: 'Salvar como',
            rename: 'Renomear',
            default: 'Definir como padrão',
            exclude: 'Excluir',
            actions: 'Ações'
        },
        search: {    // Todo tradução
            saveAs: 'Salvar pesquisa como',
            rename: 'Renomear pesquisa',
            name: 'Nome da pesquisa:'
        }
    };

    const data = {
        current: navigator.language.slice(0, 2),
        fallback: 'pt',
        available: {
            pt,
            es
        }
    };

    const get = (p, o) =>
        p.reduce((xs, x) =>
            (xs && xs[x]) ? xs[x] : null, o);

    const getString = (key) => {
        const path = key.split('.');
        let usingDefault = data.current === data.fallback;
        let msgs = data.available[data.current];
        if (!msgs) {
            usingDefault = true;
            msgs = data.available[data.fallback];
        }

        let str = get(path, msgs);
        if (str === null && !usingDefault) {
            str = get(path, data.available[data.fallback]);
        }
        return str ? str : key;

    };

    const registerFilter = (component) => {

        const {filters} = component.$options;
        const key = 'i18n';
        if (key in filters) {
            return;
        }
        filters[key] = getString;
    };

    const i18n = {
        $localize(current, fallback = 'pt') {
            data.current = current;
            data.fallback = fallback;
        },
        mixin: {
            created() {
                registerFilter(this);
            },
            methods: {
                $t(key) {
                    return getString(key);
                }
            }
        }
    };

    //

    var script$3 = {
        name: 'bc-filter-attrib',
        mixins: [i18n.mixin],
        props: {
            attrib: {
                id: ''
            },
            metaAttribs: Array,
            showSourceOption: Boolean,
            chield: false
        },
        data() {
            return {
                atributo: {},
                render: true
            };
        },
        methods: {
            fireAttribSelected(e) {
                const metaAttrib = this.metaAttribs[e.target.value];
                this.atributo = metaAttrib;
                this.$emit('meta-attrib-selected', metaAttrib);
                this.$forceUpdate();
            },
            fireOperatorRemoved() {
                this.$emit('meta-attrib-removed');
            },
            repassFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            }
        }
    };

    /* script */
    const __vue_script__$3 = script$3;

    /* template */
    var __vue_render__$3 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-filter-attrib" }, [
          _c(
            "div",
            { staticClass: "options-container" },
            [
              _c(
                "select",
                { staticClass: "inp", on: { change: _vm.fireAttribSelected } },
                [
                  _c(
                    "option",
                    {
                      attrs: { value: "", disabled: "" },
                      domProps: { selected: _vm.attrib.id === null }
                    },
                    [_vm._v(_vm._s(_vm._f("i18n")("select")))]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.metaAttribs, function(opt, idx) {
                    return _c(
                      "option",
                      {
                        key: idx,
                        domProps: {
                          value: idx,
                          selected: _vm.attrib.name === opt.name
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(opt.label) +
                            "\n                "
                        )
                      ]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              !_vm.attrib.id
                ? _c("button", { staticClass: "btn btn-small btn-filter" }, [
                    _vm._v(_vm._s(_vm._f("i18n")("newGroup")))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._t("operator")
            ],
            2
          )
        ])
      ])
    };
    var __vue_staticRenderFns__$3 = [];
    __vue_render__$3._withStripped = true;

      /* style */
      const __vue_inject_styles__$3 = function (inject) {
        if (!inject) return
        inject("data-v-73b184f8_0", { source: ".btn-filter-icon[data-v-73b184f8] {\n  padding: .1em;\n}\n.btn-filter[data-v-73b184f8] {\n  padding: .5em;\n}\n.bc-filter-attrib[data-v-73b184f8] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.options-container[data-v-73b184f8] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-filter-attrib.vue.map */", map: {"version":3,"sources":["bc-filter-attrib.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-filter-attrib.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAEA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADIA,+CAA+C","file":"bc-filter-attrib.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-filter-attrib {\n  display: inline-flex;\n  flex-direction: column; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-filter-attrib.vue.map */","<style scoped lang=\"scss\">\n    @import \"styles/variables\";\n    @import \"styles/buttons\";\n\n    .bc-filter-attrib {\n        display: inline-flex;\n        flex-direction: column;\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-filter-attrib\">\n            <div class=\"options-container\">\n                <select class=\"inp\" @change=\"fireAttribSelected\">\n                    <option value=\"\" disabled :selected=\"attrib.id === null\">{{'select' | i18n}}</option>\n                    <option v-for=\"(opt, idx) in metaAttribs\" :key=\"idx\"\n                            :value=\"idx\" :selected=\"attrib.name === opt.name\"\n                    >\n                        {{opt.label}}\n                    </option>\n                </select>\n                <button class=\"btn btn-small btn-filter\" v-if=\"!attrib.id\">{{'newGroup' | i18n}}</button>\n                <slot name=\"operator\"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    import i18n from './utils/i18n.js';\n\n    export default {\n        name: 'bc-filter-attrib',\n        mixins: [i18n.mixin],\n        props: {\n            attrib: {\n                id: ''\n            },\n            metaAttribs: Array,\n            showSourceOption: Boolean,\n            chield: false\n        },\n        data() {\n            return {\n                atributo: {},\n                render: true\n            };\n        },\n        methods: {\n            fireAttribSelected(e) {\n                const metaAttrib = this.metaAttribs[e.target.value];\n                this.atributo = metaAttrib;\n                this.$emit('meta-attrib-selected', metaAttrib);\n                this.$forceUpdate();\n            },\n            fireOperatorRemoved() {\n                this.$emit('meta-attrib-removed');\n            },\n            repassFieldSelected(param) {\n                this.$emit('meta-field-selected', param);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$3 = "data-v-73b184f8";
      /* module identifier */
      const __vue_module_identifier__$3 = undefined;
      /* functional template */
      const __vue_is_functional_template__$3 = false;
      /* style inject SSR */
      

      
      var BcFilterAttrib = normalizeComponent_1(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        browser,
        undefined
      );

    var uis = [
    	{
    		id: "dc_arquivo",
    		name: "Arquivo"
    	},
    	{
    		id: "dc_view_arquivo",
    		name: "Midia"
    	},
    	{
    		id: "dc_agenda",
    		name: "Agenda"
    	},
    	{
    		id: "dgt_bc_padrao",
    		name: "BC Padrão"
    	},
    	{
    		id: "dgt_bc_unica",
    		name: "BC Única"
    	}
    ];
    var operators = {
    	_texto_delimitado: [
    		{
    			id: 1,
    			name: "Qualquer conteúdo",
    			type: "ANY_CONTENT",
    			autoComplete: true
    		},
    		{
    			id: 2,
    			name: "Sem conteúdo",
    			type: "NO_CONTENT",
    			autoComplete: false
    		},
    		{
    			id: 3,
    			name: "Igual",
    			type: "EQUAL",
    			autoComplete: true
    		},
    		{
    			id: 4,
    			name: "Contém",
    			type: "CONTAINS",
    			autoComplete: false
    		},
    		{
    			id: 5,
    			name: "Contém fonetizádo",
    			type: "CONTAINS_FONETIZADO",
    			autoComplete: false
    		}
    	],
    	_inteiro_32: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		}
    	],
    	_inteiro_64: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		}
    	],
    	_decimal_32: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		}
    	],
    	_decimal_64: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		}
    	],
    	_tipo_selecao: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 4,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 5,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 6,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		}
    	],
    	meta_selecao_nao_valorado: [
    		{
    			id: 1,
    			name: "Igual",
    			type: "EQUAL"
    		}
    	],
    	_data: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		},
    		{
    			id: 9,
    			name: "Periodo",
    			type: "PERIODO"
    		}
    	],
    	ano: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		}
    	],
    	horario: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		}
    	],
    	_data_hora: [
    		{
    			id: 1,
    			name: "Diferente",
    			type: "NOT_EQUAL"
    		},
    		{
    			id: 2,
    			name: "Igual",
    			type: "EQUAL"
    		},
    		{
    			id: 3,
    			name: "Intervalo",
    			type: "INTERVAL"
    		},
    		{
    			id: 4,
    			name: "Fora do intervalo",
    			type: "OUT_OF_INTERVAL"
    		},
    		{
    			id: 5,
    			name: "Menor que",
    			type: "LESS_THAN"
    		},
    		{
    			id: 6,
    			name: "Menor ou igual",
    			type: "LESS_THAN_OR_EQUAL"
    		},
    		{
    			id: 7,
    			name: "Maior que",
    			type: "GREATHER_THAN"
    		},
    		{
    			id: 8,
    			name: "Maior ou igual",
    			type: "GREATHER_THAN_OR_EQUAL"
    		},
    		{
    			id: 9,
    			name: "Período",
    			type: "PERIODO"
    		}
    	],
    	outros: [
    		{
    			id: 1,
    			name: "Igual",
    			type: "EQUAL"
    		}
    	]
    };
    var fields = {
    	texto: [
    		{
    			id: 1,
    			name: "Sem campo"
    		},
    		{
    			id: 2,
    			name: "TextCombo"
    		},
    		{
    			id: 3,
    			name: "TextField"
    		}
    	],
    	inteiro: [
    		{
    			id: 1,
    			name: "inteiro",
    			qtd: 1
    		},
    		{
    			id: 2,
    			name: "inteiro",
    			qtd: 2
    		}
    	],
    	decimal: [
    		{
    			id: 1,
    			name: "inteiro",
    			qtd: 1
    		},
    		{
    			id: 2,
    			name: "inteiro",
    			qtd: 2
    		}
    	],
    	meta_selecao: [
    		{
    			id: 1,
    			name: "inteiro",
    			qtd: 1
    		},
    		{
    			id: 2,
    			name: "inteiro",
    			qtd: 2
    		}
    	]
    };
    var metadata = {
    	uis: uis,
    	operators: operators,
    	fields: fields
    };

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script$4 = {
        name: 'bc-date-options',
        data() {
            return {
                option: {
                    id: null
                },
                options: [
                    {
                        id: 1,
                        label: 'Data'
                    },
                    {
                        id: 2,
                        label: 'Ano'
                    }
                ]
            };
        },
        methods: {
            change(e) {
                this.option = this.options[e.target.value];
                this.$emit('change', [this.option]);
            },
            fireRemoved() {
                this.$emit('remove-fired');
            }
        }
    };

    /* script */
    const __vue_script__$4 = script$4;

    /* template */
    var __vue_render__$4 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-date-options" }, [
          _c("div", { staticClass: "options-container" }, [
            _c(
              "select",
              { staticClass: "inp", on: { change: _vm.change } },
              [
                _c(
                  "option",
                  {
                    attrs: { value: "", disabled: "" },
                    domProps: { selected: _vm.option.id === null }
                  },
                  [_vm._v("Selecione")]
                ),
                _vm._v(" "),
                _vm._l(_vm.options, function(opt, idx) {
                  return _c(
                    "option",
                    {
                      key: idx,
                      domProps: { value: idx, selected: _vm.option.id === opt.id }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(opt.label) +
                          "\n                "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$4 = [];
    __vue_render__$4._withStripped = true;

      /* style */
      const __vue_inject_styles__$4 = function (inject) {
        if (!inject) return
        inject("data-v-e7edb0bc_0", { source: ".btn-filter-icon[data-v-e7edb0bc] {\n  padding: .1em;\n}\n.btn-filter[data-v-e7edb0bc] {\n  padding: .5em;\n}\n.bc-date-options[data-v-e7edb0bc] {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n.options-container[data-v-e7edb0bc] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-date-options.vue.map */", map: {"version":3,"sources":["bc-date-options.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-date-options.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;EACA,gBAAA;AAAA;AAEA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADIA,8CAA8C","file":"bc-date-options.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-date-options {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-date-options.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-date-options {\n        display: inline-flex;\n        flex-direction: column;\n        margin-left: 5px;\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-date-options\">\n            <div class=\"options-container\">\n                <select class=\"inp\" @change=\"change\">\n                    <option value=\"\" disabled  :selected=\"option.id === null\">Selecione</option>\n                    <option v-for=\"(opt, idx) in options\" :key=\"idx\" :value=\"idx\"\n                        :selected=\"option.id === opt.id\">\n                        {{opt.label}}\n                    </option>\n                </select>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'bc-date-options',\n        data() {\n            return {\n                option: {\n                    id: null\n                },\n                options: [\n                    {\n                        id: 1,\n                        label: 'Data'\n                    },\n                    {\n                        id: 2,\n                        label: 'Ano'\n                    }\n                ]\n            };\n        },\n        methods: {\n            change(e) {\n                this.option = this.options[e.target.value];\n                this.$emit('change', [this.option]);\n            },\n            fireRemoved() {\n                this.$emit('remove-fired');\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$4 = "data-v-e7edb0bc";
      /* module identifier */
      const __vue_module_identifier__$4 = undefined;
      /* functional template */
      const __vue_is_functional_template__$4 = false;
      /* style inject SSR */
      

      
      var dateOptions = normalizeComponent_1(
        { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
        __vue_inject_styles__$4,
        __vue_script__$4,
        __vue_scope_id__$4,
        __vue_is_functional_template__$4,
        __vue_module_identifier__$4,
        browser,
        undefined
      );

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
      // eslint-disable-next-line no-new-func
      : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    });

    var hasOwnProperty = {}.hasOwnProperty;
    var _has = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

    var _fails = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

    // Thank's IE8 for his funny defineProperty
    var _descriptors = !_fails(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });

    var _core = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.6.5' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    });
    var _core_1 = _core.version;

    var _isObject = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    var _anObject = function (it) {
      if (!_isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

    var document$1 = _global.document;
    // typeof document.createElement is 'object' in old IE
    var is = _isObject(document$1) && _isObject(document$1.createElement);
    var _domCreate = function (it) {
      return is ? document$1.createElement(it) : {};
    };

    var _ie8DomDefine = !_descriptors && !_fails(function () {
      return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
    });

    // 7.1.1 ToPrimitive(input [, PreferredType])

    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var _toPrimitive = function (it, S) {
      if (!_isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    var dP = Object.defineProperty;

    var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      _anObject(O);
      P = _toPrimitive(P, true);
      _anObject(Attributes);
      if (_ie8DomDefine) try {
        return dP(O, P, Attributes);
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var _objectDp = {
    	f: f
    };

    var _propertyDesc = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var _hide = _descriptors ? function (object, key, value) {
      return _objectDp.f(object, key, _propertyDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var id = 0;
    var px = Math.random();
    var _uid = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

    var _library = false;

    var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode: _library ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
    });

    var _functionToString = _shared('native-function-to-string', Function.toString);

    var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');

    var TO_STRING = 'toString';
    var TPL = ('' + _functionToString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return _functionToString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || _functionToString.call(this);
    });
    });

    var _aFunction = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

    // optional / simple context binding

    var _ctx = function (fn, that, length) {
      _aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

    var PROTOTYPE = 'prototype';

    var $export = function (type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
        // extend global
        if (target) _redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out) _hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };
    _global.core = _core;
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    var _export = $export;

    var _meta = createCommonjsModule(function (module) {
    var META = _uid('meta');


    var setDesc = _objectDp.f;
    var id = 0;
    var isExtensible = Object.isExtensible || function () {
      return true;
    };
    var FREEZE = !_fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function (it) {
      setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {}          // weak collections IDs
      } });
    };
    var fastKey = function (it, create) {
      // return primitive with prefix
      if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMeta(it);
      // return object ID
      } return it[META].i;
    };
    var getWeak = function (it, create) {
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
      // return hash weak collections IDs
      } return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
    });
    var _meta_1 = _meta.KEY;
    var _meta_2 = _meta.NEED;
    var _meta_3 = _meta.fastKey;
    var _meta_4 = _meta.getWeak;
    var _meta_5 = _meta.onFreeze;

    var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');

    var Symbol = _global.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
    });

    var def = _objectDp.f;

    var TAG = _wks('toStringTag');

    var _setToStringTag = function (it, tag, stat) {
      if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };

    var f$1 = _wks;

    var _wksExt = {
    	f: f$1
    };

    var defineProperty = _objectDp.f;
    var _wksDefine = function (name) {
      var $Symbol = _core.Symbol || (_core.Symbol = _global.Symbol || {});
      if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
    };

    var toString = {}.toString;

    var _cof = function (it) {
      return toString.call(it).slice(8, -1);
    };

    // fallback for non-array-like ES3 and non-enumerable old V8 strings

    // eslint-disable-next-line no-prototype-builtins
    var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return _cof(it) == 'String' ? it.split('') : Object(it);
    };

    // 7.2.1 RequireObjectCoercible(argument)
    var _defined = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };

    // to indexed object, toObject with fallback for non-array-like ES3 strings


    var _toIobject = function (it) {
      return _iobject(_defined(it));
    };

    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    var _toInteger = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

    // 7.1.15 ToLength

    var min = Math.min;
    var _toLength = function (it) {
      return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };

    var max = Math.max;
    var min$1 = Math.min;
    var _toAbsoluteIndex = function (index, length) {
      index = _toInteger(index);
      return index < 0 ? max(index + length, 0) : min$1(index, length);
    };

    // false -> Array#indexOf
    // true  -> Array#includes



    var _arrayIncludes = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = _toIobject($this);
        var length = _toLength(O.length);
        var index = _toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };

    var shared = _shared('keys');

    var _sharedKey = function (key) {
      return shared[key] || (shared[key] = _uid(key));
    };

    var arrayIndexOf = _arrayIncludes(false);
    var IE_PROTO = _sharedKey('IE_PROTO');

    var _objectKeysInternal = function (object, names) {
      var O = _toIobject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };

    // IE 8- don't enum bug keys
    var _enumBugKeys = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');

    // 19.1.2.14 / 15.2.3.14 Object.keys(O)



    var _objectKeys = Object.keys || function keys(O) {
      return _objectKeysInternal(O, _enumBugKeys);
    };

    var f$2 = Object.getOwnPropertySymbols;

    var _objectGops = {
    	f: f$2
    };

    var f$3 = {}.propertyIsEnumerable;

    var _objectPie = {
    	f: f$3
    };

    // all enumerable object keys, includes symbols



    var _enumKeys = function (it) {
      var result = _objectKeys(it);
      var getSymbols = _objectGops.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = _objectPie.f;
        var i = 0;
        var key;
        while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
      } return result;
    };

    // 7.2.2 IsArray(argument)

    var _isArray = Array.isArray || function isArray(arg) {
      return _cof(arg) == 'Array';
    };

    var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      _anObject(O);
      var keys = _objectKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
      return O;
    };

    var document$2 = _global.document;
    var _html = document$2 && document$2.documentElement;

    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



    var IE_PROTO$1 = _sharedKey('IE_PROTO');
    var Empty = function () { /* empty */ };
    var PROTOTYPE$1 = 'prototype';

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = _domCreate('iframe');
      var i = _enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';
      _html.appendChild(iframe);
      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
      return createDict();
    };

    var _objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE$1] = _anObject(O);
        result = new Empty();
        Empty[PROTOTYPE$1] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO$1] = O;
      } else result = createDict();
      return Properties === undefined ? result : _objectDps(result, Properties);
    };

    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

    var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

    var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return _objectKeysInternal(O, hiddenKeys);
    };

    var _objectGopn = {
    	f: f$4
    };

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

    var gOPN = _objectGopn.f;
    var toString$1 = {}.toString;

    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function (it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };

    var f$5 = function getOwnPropertyNames(it) {
      return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
    };

    var _objectGopnExt = {
    	f: f$5
    };

    var gOPD = Object.getOwnPropertyDescriptor;

    var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = _toIobject(O);
      P = _toPrimitive(P, true);
      if (_ie8DomDefine) try {
        return gOPD(O, P);
      } catch (e) { /* empty */ }
      if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    };

    var _objectGopd = {
    	f: f$6
    };

    // ECMAScript 6 symbols shim





    var META = _meta.KEY;



















    var gOPD$1 = _objectGopd.f;
    var dP$1 = _objectDp.f;
    var gOPN$1 = _objectGopnExt.f;
    var $Symbol = _global.Symbol;
    var $JSON = _global.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE$2 = 'prototype';
    var HIDDEN = _wks('_hidden');
    var TO_PRIMITIVE = _wks('toPrimitive');
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = _shared('symbol-registry');
    var AllSymbols = _shared('symbols');
    var OPSymbols = _shared('op-symbols');
    var ObjectProto = Object[PROTOTYPE$2];
    var USE_NATIVE = typeof $Symbol == 'function';
    var QObject = _global.QObject;
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDesc = _descriptors && _fails(function () {
      return _objectCreate(dP$1({}, 'a', {
        get: function () { return dP$1(this, 'a', { value: 7 }).a; }
      })).a != 7;
    }) ? function (it, key, D) {
      var protoDesc = gOPD$1(ObjectProto, key);
      if (protoDesc) delete ObjectProto[key];
      dP$1(it, key, D);
      if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
    } : dP$1;

    var wrap = function (tag) {
      var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
      sym._k = tag;
      return sym;
    };

    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      return it instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
      _anObject(it);
      key = _toPrimitive(key, true);
      _anObject(D);
      if (_has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
        } return setSymbolDesc(it, key, D);
      } return dP$1(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      _anObject(it);
      var keys = _enumKeys(P = _toIobject(P));
      var i = 0;
      var l = keys.length;
      var key;
      while (l > i) $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create(it, P) {
      return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = _toPrimitive(key, true));
      if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
      return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = _toIobject(it);
      key = _toPrimitive(key, true);
      if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
      var D = gOPD$1(it, key);
      if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN$1(_toIobject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
      } return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
      } return result;
    };

    // 19.4.1.1 Symbol([description])
    if (!USE_NATIVE) {
      $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function (value) {
          if (this === ObjectProto) $set.call(OPSymbols, value);
          if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, _propertyDesc(1, value));
        };
        if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
        return wrap(tag);
      };
      _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
        return this._k;
      });

      _objectGopd.f = $getOwnPropertyDescriptor;
      _objectDp.f = $defineProperty;
      _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
      _objectPie.f = $propertyIsEnumerable;
      _objectGops.f = $getOwnPropertySymbols;

      if (_descriptors && !_library) {
        _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }

      _wksExt.f = function (name) {
        return wrap(_wks(name));
      };
    }

    _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

    for (var es6Symbols = (
      // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

    for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

    _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
      // 19.4.2.1 Symbol.for(key)
      'for': function (key) {
        return _has(SymbolRegistry, key += '')
          ? SymbolRegistry[key]
          : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
        for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
      },
      useSetter: function () { setter = true; },
      useSimple: function () { setter = false; }
    });

    _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
      var S = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols
      return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!_isArray(replacer)) replacer = function (key, value) {
          if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });

    // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    _setToStringTag($Symbol, 'Symbol');
    // 20.2.1.9 Math[@@toStringTag]
    _setToStringTag(Math, 'Math', true);
    // 24.3.3 JSON[@@toStringTag]
    _setToStringTag(_global.JSON, 'JSON', true);

    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    _export(_export.S, 'Object', { create: _objectCreate });

    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    _export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    _export(_export.S + _export.F * !_descriptors, 'Object', { defineProperties: _objectDps });

    // most Object methods by ES6 should accept primitives



    var _objectSap = function (KEY, exec) {
      var fn = (_core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
    };

    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

    var $getOwnPropertyDescriptor$1 = _objectGopd.f;

    _objectSap('getOwnPropertyDescriptor', function () {
      return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor$1(_toIobject(it), key);
      };
    });

    // 7.1.13 ToObject(argument)

    var _toObject = function (it) {
      return Object(_defined(it));
    };

    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


    var IE_PROTO$2 = _sharedKey('IE_PROTO');
    var ObjectProto$1 = Object.prototype;

    var _objectGpo = Object.getPrototypeOf || function (O) {
      O = _toObject(O);
      if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto$1 : null;
    };

    // 19.1.2.9 Object.getPrototypeOf(O)



    _objectSap('getPrototypeOf', function () {
      return function getPrototypeOf(it) {
        return _objectGpo(_toObject(it));
      };
    });

    // 19.1.2.14 Object.keys(O)



    _objectSap('keys', function () {
      return function keys(it) {
        return _objectKeys(_toObject(it));
      };
    });

    // 19.1.2.7 Object.getOwnPropertyNames(O)
    _objectSap('getOwnPropertyNames', function () {
      return _objectGopnExt.f;
    });

    // 19.1.2.5 Object.freeze(O)

    var meta = _meta.onFreeze;

    _objectSap('freeze', function ($freeze) {
      return function freeze(it) {
        return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
      };
    });

    // 19.1.2.17 Object.seal(O)

    var meta$1 = _meta.onFreeze;

    _objectSap('seal', function ($seal) {
      return function seal(it) {
        return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
      };
    });

    // 19.1.2.15 Object.preventExtensions(O)

    var meta$2 = _meta.onFreeze;

    _objectSap('preventExtensions', function ($preventExtensions) {
      return function preventExtensions(it) {
        return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
      };
    });

    // 19.1.2.12 Object.isFrozen(O)


    _objectSap('isFrozen', function ($isFrozen) {
      return function isFrozen(it) {
        return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
      };
    });

    // 19.1.2.13 Object.isSealed(O)


    _objectSap('isSealed', function ($isSealed) {
      return function isSealed(it) {
        return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
      };
    });

    // 19.1.2.11 Object.isExtensible(O)


    _objectSap('isExtensible', function ($isExtensible) {
      return function isExtensible(it) {
        return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
      };
    });

    // 19.1.2.1 Object.assign(target, source, ...)





    var $assign = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    var _objectAssign = !$assign || _fails(function () {
      var A = {};
      var B = {};
      // eslint-disable-next-line no-undef
      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) { B[k] = k; });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
      var T = _toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = _objectGops.f;
      var isEnum = _objectPie.f;
      while (aLen > index) {
        var S = _iobject(arguments[index++]);
        var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
      } return T;
    } : $assign;

    // 19.1.3.1 Object.assign(target, source)


    _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

    // 7.2.9 SameValue(x, y)
    var _sameValue = Object.is || function is(x, y) {
      // eslint-disable-next-line no-self-compare
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };

    // 19.1.3.10 Object.is(value1, value2)

    _export(_export.S, 'Object', { is: _sameValue });

    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */


    var check = function (O, proto) {
      _anObject(O);
      if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };
    var _setProto = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
        function (test, buggy, set) {
          try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) { buggy = true; }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
      check: check
    };

    // 19.1.3.19 Object.setPrototypeOf(O, proto)

    _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

    // getting tag from 19.1.3.6 Object.prototype.toString()

    var TAG$1 = _wks('toStringTag');
    // ES3 wrong here
    var ARG = _cof(function () { return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (e) { /* empty */ }
    };

    var _classof = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
        // builtinTag case
        : ARG ? _cof(O)
        // ES3 arguments fallback
        : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };

    // 19.1.3.6 Object.prototype.toString()

    var test = {};
    test[_wks('toStringTag')] = 'z';
    if (test + '' != '[object z]') {
      _redefine(Object.prototype, 'toString', function toString() {
        return '[object ' + _classof(this) + ']';
      }, true);
    }

    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    var _invoke = function (fn, args, that) {
      var un = that === undefined;
      switch (args.length) {
        case 0: return un ? fn()
                          : fn.call(that);
        case 1: return un ? fn(args[0])
                          : fn.call(that, args[0]);
        case 2: return un ? fn(args[0], args[1])
                          : fn.call(that, args[0], args[1]);
        case 3: return un ? fn(args[0], args[1], args[2])
                          : fn.call(that, args[0], args[1], args[2]);
        case 4: return un ? fn(args[0], args[1], args[2], args[3])
                          : fn.call(that, args[0], args[1], args[2], args[3]);
      } return fn.apply(that, args);
    };

    var arraySlice = [].slice;
    var factories = {};

    var construct = function (F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
        // eslint-disable-next-line no-new-func
        factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
      } return factories[len](F, args);
    };

    var _bind = Function.bind || function bind(that /* , ...args */) {
      var fn = _aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);
      var bound = function (/* args... */) {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
      };
      if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };

    // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


    _export(_export.P, 'Function', { bind: _bind });

    var dP$2 = _objectDp.f;
    var FProto = Function.prototype;
    var nameRE = /^\s*function ([^ (]*)/;
    var NAME = 'name';

    // 19.2.4.2 name
    NAME in FProto || _descriptors && dP$2(FProto, NAME, {
      configurable: true,
      get: function () {
        try {
          return ('' + this).match(nameRE)[1];
        } catch (e) {
          return '';
        }
      }
    });

    var HAS_INSTANCE = _wks('hasInstance');
    var FunctionProto = Function.prototype;
    // 19.2.3.6 Function.prototype[@@hasInstance](V)
    if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, { value: function (O) {
      if (typeof this != 'function' || !_isObject(O)) return false;
      if (!_isObject(this.prototype)) return O instanceof this;
      // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
      while (O = _objectGpo(O)) if (this.prototype === O) return true;
      return false;
    } });

    var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

    var space = '[' + _stringWs + ']';
    var non = '\u200b\u0085';
    var ltrim = RegExp('^' + space + space + '*');
    var rtrim = RegExp(space + space + '*$');

    var exporter = function (KEY, exec, ALIAS) {
      var exp = {};
      var FORCE = _fails(function () {
        return !!_stringWs[KEY]() || non[KEY]() != non;
      });
      var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
      if (ALIAS) exp[ALIAS] = fn;
      _export(_export.P + _export.F * FORCE, 'String', exp);
    };

    // 1 -> String#trimLeft
    // 2 -> String#trimRight
    // 3 -> String#trim
    var trim = exporter.trim = function (string, TYPE) {
      string = String(_defined(string));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };

    var _stringTrim = exporter;

    var $parseInt = _global.parseInt;
    var $trim = _stringTrim.trim;

    var hex = /^[-+]?0[xX]/;

    var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
      var string = $trim(String(str), 3);
      return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
    } : $parseInt;

    // 18.2.5 parseInt(string, radix)
    _export(_export.G + _export.F * (parseInt != _parseInt), { parseInt: _parseInt });

    var $parseFloat = _global.parseFloat;
    var $trim$1 = _stringTrim.trim;

    var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
      var string = $trim$1(String(str), 3);
      var result = $parseFloat(string);
      return result === 0 && string.charAt(0) == '-' ? -0 : result;
    } : $parseFloat;

    // 18.2.4 parseFloat(string)
    _export(_export.G + _export.F * (parseFloat != _parseFloat), { parseFloat: _parseFloat });

    var setPrototypeOf = _setProto.set;
    var _inheritIfRequired = function (that, target, C) {
      var S = target.constructor;
      var P;
      if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
      } return that;
    };

    var gOPN$2 = _objectGopn.f;
    var gOPD$2 = _objectGopd.f;
    var dP$3 = _objectDp.f;
    var $trim$2 = _stringTrim.trim;
    var NUMBER = 'Number';
    var $Number = _global[NUMBER];
    var Base = $Number;
    var proto = $Number.prototype;
    // Opera ~12 has broken Object#toString
    var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
    var TRIM = 'trim' in String.prototype;

    // 7.1.3 ToNumber(argument)
    var toNumber = function (argument) {
      var it = _toPrimitive(argument, false);
      if (typeof it == 'string' && it.length > 2) {
        it = TRIM ? it.trim() : $trim$2(it, 3);
        var first = it.charCodeAt(0);
        var third, radix, maxCode;
        if (first === 43 || first === 45) {
          third = it.charCodeAt(2);
          if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (it.charCodeAt(1)) {
            case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
            case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
            default: return +it;
          }
          for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
            code = digits.charCodeAt(i);
            // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols
            if (code < 48 || code > maxCode) return NaN;
          } return parseInt(digits, radix);
        }
      } return +it;
    };

    if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
      $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var that = this;
        return that instanceof $Number
          // check on 1..constructor(foo) case
          && (BROKEN_COF ? _fails(function () { proto.valueOf.call(that); }) : _cof(that) != NUMBER)
            ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
      };
      for (var keys = _descriptors ? gOPN$2(Base) : (
        // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
        // ES6 (in case, if modules with ES6 Number statics required before):
        'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
        'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
      ).split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
        if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
          dP$3($Number, key, gOPD$2(Base, key));
        }
      }
      $Number.prototype = proto;
      proto.constructor = $Number;
      _redefine(_global, NUMBER, $Number);
    }

    var _aNumberValue = function (it, msg) {
      if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
      return +it;
    };

    var _stringRepeat = function repeat(count) {
      var str = String(_defined(this));
      var res = '';
      var n = _toInteger(count);
      if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
      for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
      return res;
    };

    var $toFixed = 1.0.toFixed;
    var floor$1 = Math.floor;
    var data$1 = [0, 0, 0, 0, 0, 0];
    var ERROR = 'Number.toFixed: incorrect invocation!';
    var ZERO = '0';

    var multiply = function (n, c) {
      var i = -1;
      var c2 = c;
      while (++i < 6) {
        c2 += n * data$1[i];
        data$1[i] = c2 % 1e7;
        c2 = floor$1(c2 / 1e7);
      }
    };
    var divide = function (n) {
      var i = 6;
      var c = 0;
      while (--i >= 0) {
        c += data$1[i];
        data$1[i] = floor$1(c / n);
        c = (c % n) * 1e7;
      }
    };
    var numToString = function () {
      var i = 6;
      var s = '';
      while (--i >= 0) {
        if (s !== '' || i === 0 || data$1[i] !== 0) {
          var t = String(data$1[i]);
          s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
        }
      } return s;
    };
    var pow = function (x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };
    var log = function (x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
      }
      while (x2 >= 2) {
        n += 1;
        x2 /= 2;
      } return n;
    };

    _export(_export.P + _export.F * (!!$toFixed && (
      0.00008.toFixed(3) !== '0.000' ||
      0.9.toFixed(0) !== '1' ||
      1.255.toFixed(2) !== '1.25' ||
      1000000000000000128.0.toFixed(0) !== '1000000000000000128'
    ) || !_fails(function () {
      // V8 ~ Android 4.3-
      $toFixed.call({});
    })), 'Number', {
      toFixed: function toFixed(fractionDigits) {
        var x = _aNumberValue(this, ERROR);
        var f = _toInteger(fractionDigits);
        var s = '';
        var m = ZERO;
        var e, z, j, k;
        if (f < 0 || f > 20) throw RangeError(ERROR);
        // eslint-disable-next-line no-self-compare
        if (x != x) return 'NaN';
        if (x <= -1e21 || x >= 1e21) return String(x);
        if (x < 0) {
          s = '-';
          x = -x;
        }
        if (x > 1e-21) {
          e = log(x * pow(2, 69, 1)) - 69;
          z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
          z *= 0x10000000000000;
          e = 52 - e;
          if (e > 0) {
            multiply(0, z);
            j = f;
            while (j >= 7) {
              multiply(1e7, 0);
              j -= 7;
            }
            multiply(pow(10, j, 1), 0);
            j = e - 1;
            while (j >= 23) {
              divide(1 << 23);
              j -= 23;
            }
            divide(1 << j);
            multiply(1, 1);
            divide(2);
            m = numToString();
          } else {
            multiply(0, z);
            multiply(1 << -e, 0);
            m = numToString() + _stringRepeat.call(ZERO, f);
          }
        }
        if (f > 0) {
          k = m.length;
          m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
        } else {
          m = s + m;
        } return m;
      }
    });

    var $toPrecision = 1.0.toPrecision;

    _export(_export.P + _export.F * (_fails(function () {
      // IE7-
      return $toPrecision.call(1, undefined) !== '1';
    }) || !_fails(function () {
      // V8 ~ Android 4.3-
      $toPrecision.call({});
    })), 'Number', {
      toPrecision: function toPrecision(precision) {
        var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
      }
    });

    // 20.1.2.1 Number.EPSILON


    _export(_export.S, 'Number', { EPSILON: Math.pow(2, -52) });

    // 20.1.2.2 Number.isFinite(number)

    var _isFinite = _global.isFinite;

    _export(_export.S, 'Number', {
      isFinite: function isFinite(it) {
        return typeof it == 'number' && _isFinite(it);
      }
    });

    // 20.1.2.3 Number.isInteger(number)

    var floor$2 = Math.floor;
    var _isInteger = function isInteger(it) {
      return !_isObject(it) && isFinite(it) && floor$2(it) === it;
    };

    // 20.1.2.3 Number.isInteger(number)


    _export(_export.S, 'Number', { isInteger: _isInteger });

    // 20.1.2.4 Number.isNaN(number)


    _export(_export.S, 'Number', {
      isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare
        return number != number;
      }
    });

    // 20.1.2.5 Number.isSafeInteger(number)


    var abs = Math.abs;

    _export(_export.S, 'Number', {
      isSafeInteger: function isSafeInteger(number) {
        return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
      }
    });

    // 20.1.2.6 Number.MAX_SAFE_INTEGER


    _export(_export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

    // 20.1.2.10 Number.MIN_SAFE_INTEGER


    _export(_export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

    // 20.1.2.12 Number.parseFloat(string)
    _export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', { parseFloat: _parseFloat });

    // 20.1.2.13 Number.parseInt(string, radix)
    _export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', { parseInt: _parseInt });

    // 20.2.2.20 Math.log1p(x)
    var _mathLog1p = Math.log1p || function log1p(x) {
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
    };

    // 20.2.2.3 Math.acosh(x)


    var sqrt = Math.sqrt;
    var $acosh = Math.acosh;

    _export(_export.S + _export.F * !($acosh
      // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
      && Math.floor($acosh(Number.MAX_VALUE)) == 710
      // Tor Browser bug: Math.acosh(Infinity) -> NaN
      && $acosh(Infinity) == Infinity
    ), 'Math', {
      acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156
          ? Math.log(x) + Math.LN2
          : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
      }
    });

    // 20.2.2.5 Math.asinh(x)

    var $asinh = Math.asinh;

    function asinh(x) {
      return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
    }

    // Tor Browser bug: Math.asinh(0) -> -0
    _export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

    // 20.2.2.7 Math.atanh(x)

    var $atanh = Math.atanh;

    // Tor Browser bug: Math.atanh(-0) -> 0
    _export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
      atanh: function atanh(x) {
        return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
      }
    });

    // 20.2.2.28 Math.sign(x)
    var _mathSign = Math.sign || function sign(x) {
      // eslint-disable-next-line no-self-compare
      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
    };

    // 20.2.2.9 Math.cbrt(x)



    _export(_export.S, 'Math', {
      cbrt: function cbrt(x) {
        return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
      }
    });

    // 20.2.2.11 Math.clz32(x)


    _export(_export.S, 'Math', {
      clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
      }
    });

    // 20.2.2.12 Math.cosh(x)

    var exp = Math.exp;

    _export(_export.S, 'Math', {
      cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
      }
    });

    // 20.2.2.14 Math.expm1(x)
    var $expm1 = Math.expm1;
    var _mathExpm1 = (!$expm1
      // Old FF bug
      || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
      // Tor Browser bug
      || $expm1(-2e-17) != -2e-17
    ) ? function expm1(x) {
      return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
    } : $expm1;

    // 20.2.2.14 Math.expm1(x)



    _export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', { expm1: _mathExpm1 });

    // 20.2.2.16 Math.fround(x)

    var pow$1 = Math.pow;
    var EPSILON = pow$1(2, -52);
    var EPSILON32 = pow$1(2, -23);
    var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
    var MIN32 = pow$1(2, -126);

    var roundTiesToEven = function (n) {
      return n + 1 / EPSILON - 1 / EPSILON;
    };

    var _mathFround = Math.fround || function fround(x) {
      var $abs = Math.abs(x);
      var $sign = _mathSign(x);
      var a, result;
      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      // eslint-disable-next-line no-self-compare
      if (result > MAX32 || result != result) return $sign * Infinity;
      return $sign * result;
    };

    // 20.2.2.16 Math.fround(x)


    _export(_export.S, 'Math', { fround: _mathFround });

    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])

    var abs$1 = Math.abs;

    _export(_export.S, 'Math', {
      hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while (i < aLen) {
          arg = abs$1(arguments[i++]);
          if (larg < arg) {
            div = larg / arg;
            sum = sum * div * div + 1;
            larg = arg;
          } else if (arg > 0) {
            div = arg / larg;
            sum += div * div;
          } else sum += arg;
        }
        return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
      }
    });

    // 20.2.2.18 Math.imul(x, y)

    var $imul = Math.imul;

    // some WebKit versions fails with big numbers, some has wrong arity
    _export(_export.S + _export.F * _fails(function () {
      return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
    }), 'Math', {
      imul: function imul(x, y) {
        var UINT16 = 0xffff;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
      }
    });

    // 20.2.2.21 Math.log10(x)


    _export(_export.S, 'Math', {
      log10: function log10(x) {
        return Math.log(x) * Math.LOG10E;
      }
    });

    // 20.2.2.20 Math.log1p(x)


    _export(_export.S, 'Math', { log1p: _mathLog1p });

    // 20.2.2.22 Math.log2(x)


    _export(_export.S, 'Math', {
      log2: function log2(x) {
        return Math.log(x) / Math.LN2;
      }
    });

    // 20.2.2.28 Math.sign(x)


    _export(_export.S, 'Math', { sign: _mathSign });

    // 20.2.2.30 Math.sinh(x)


    var exp$1 = Math.exp;

    // V8 near Chromium 38 has a problem with very small numbers
    _export(_export.S + _export.F * _fails(function () {
      return !Math.sinh(-2e-17) != -2e-17;
    }), 'Math', {
      sinh: function sinh(x) {
        return Math.abs(x = +x) < 1
          ? (_mathExpm1(x) - _mathExpm1(-x)) / 2
          : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
      }
    });

    // 20.2.2.33 Math.tanh(x)


    var exp$2 = Math.exp;

    _export(_export.S, 'Math', {
      tanh: function tanh(x) {
        var a = _mathExpm1(x = +x);
        var b = _mathExpm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
      }
    });

    // 20.2.2.34 Math.trunc(x)


    _export(_export.S, 'Math', {
      trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
      }
    });

    var fromCharCode = String.fromCharCode;
    var $fromCodePoint = String.fromCodePoint;

    // length should be 1, old FF problem
    _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
      // 21.1.2.2 String.fromCodePoint(...codePoints)
      fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
        var res = [];
        var aLen = arguments.length;
        var i = 0;
        var code;
        while (aLen > i) {
          code = +arguments[i++];
          if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
          res.push(code < 0x10000
            ? fromCharCode(code)
            : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
          );
        } return res.join('');
      }
    });

    _export(_export.S, 'String', {
      // 21.1.2.4 String.raw(callSite, ...substitutions)
      raw: function raw(callSite) {
        var tpl = _toIobject(callSite.raw);
        var len = _toLength(tpl.length);
        var aLen = arguments.length;
        var res = [];
        var i = 0;
        while (len > i) {
          res.push(String(tpl[i++]));
          if (i < aLen) res.push(String(arguments[i]));
        } return res.join('');
      }
    });

    // 21.1.3.25 String.prototype.trim()
    _stringTrim('trim', function ($trim) {
      return function trim() {
        return $trim(this, 3);
      };
    });

    // true  -> String#at
    // false -> String#codePointAt
    var _stringAt = function (TO_STRING) {
      return function (that, pos) {
        var s = String(_defined(that));
        var i = _toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };

    var _iterators = {};

    var IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

    var _iterCreate = function (Constructor, NAME, next) {
      Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
      _setToStringTag(Constructor, NAME + ' Iterator');
    };

    var ITERATOR = _wks('iterator');
    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var returnThis = function () { return this; };

    var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      _iterCreate(Constructor, NAME, next);
      var getMethod = function (kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS: return function keys() { return new Constructor(this, kind); };
          case VALUES: return function values() { return new Constructor(this, kind); };
        } return function entries() { return new Constructor(this, kind); };
      };
      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      // Fix native
      if ($anyNative) {
        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          _setToStringTag(IteratorPrototype, TAG, true);
          // fix for some old engines
          if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() { return $native.call(this); };
      }
      // Define iterator
      if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
        _hide(proto, ITERATOR, $default);
      }
      // Plug for library
      _iterators[NAME] = $default;
      _iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) _redefine(proto, key, methods[key]);
        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };

    var $at = _stringAt(true);

    // 21.1.3.27 String.prototype[@@iterator]()
    _iterDefine(String, 'String', function (iterated) {
      this._t = String(iterated); // target
      this._i = 0;                // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return { value: undefined, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });

    var $at$1 = _stringAt(false);
    _export(_export.P, 'String', {
      // 21.1.3.3 String.prototype.codePointAt(pos)
      codePointAt: function codePointAt(pos) {
        return $at$1(this, pos);
      }
    });

    // 7.2.8 IsRegExp(argument)


    var MATCH = _wks('match');
    var _isRegexp = function (it) {
      var isRegExp;
      return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
    };

    // helper for String#{startsWith, endsWith, includes}



    var _stringContext = function (that, searchString, NAME) {
      if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
      return String(_defined(that));
    };

    var MATCH$1 = _wks('match');
    var _failsIsRegexp = function (KEY) {
      var re = /./;
      try {
        '/./'[KEY](re);
      } catch (e) {
        try {
          re[MATCH$1] = false;
          return !'/./'[KEY](re);
        } catch (f) { /* empty */ }
      } return true;
    };

    var ENDS_WITH = 'endsWith';
    var $endsWith = ''[ENDS_WITH];

    _export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
      endsWith: function endsWith(searchString /* , endPosition = @length */) {
        var that = _stringContext(this, searchString, ENDS_WITH);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = _toLength(that.length);
        var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith
          ? $endsWith.call(that, search, end)
          : that.slice(end - search.length, end) === search;
      }
    });

    var INCLUDES = 'includes';

    _export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
      includes: function includes(searchString /* , position = 0 */) {
        return !!~_stringContext(this, searchString, INCLUDES)
          .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    _export(_export.P, 'String', {
      // 21.1.3.13 String.prototype.repeat(count)
      repeat: _stringRepeat
    });

    var STARTS_WITH = 'startsWith';
    var $startsWith = ''[STARTS_WITH];

    _export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
      startsWith: function startsWith(searchString /* , position = 0 */) {
        var that = _stringContext(this, searchString, STARTS_WITH);
        var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith
          ? $startsWith.call(that, search, index)
          : that.slice(index, index + search.length) === search;
      }
    });

    var quot = /"/g;
    // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
    var createHTML = function (string, tag, attribute, value) {
      var S = String(_defined(string));
      var p1 = '<' + tag;
      if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
      return p1 + '>' + S + '</' + tag + '>';
    };
    var _stringHtml = function (NAME, exec) {
      var O = {};
      O[NAME] = exec(createHTML);
      _export(_export.P + _export.F * _fails(function () {
        var test = ''[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
      }), 'String', O);
    };

    // B.2.3.2 String.prototype.anchor(name)
    _stringHtml('anchor', function (createHTML) {
      return function anchor(name) {
        return createHTML(this, 'a', 'name', name);
      };
    });

    // B.2.3.3 String.prototype.big()
    _stringHtml('big', function (createHTML) {
      return function big() {
        return createHTML(this, 'big', '', '');
      };
    });

    // B.2.3.4 String.prototype.blink()
    _stringHtml('blink', function (createHTML) {
      return function blink() {
        return createHTML(this, 'blink', '', '');
      };
    });

    // B.2.3.5 String.prototype.bold()
    _stringHtml('bold', function (createHTML) {
      return function bold() {
        return createHTML(this, 'b', '', '');
      };
    });

    // B.2.3.6 String.prototype.fixed()
    _stringHtml('fixed', function (createHTML) {
      return function fixed() {
        return createHTML(this, 'tt', '', '');
      };
    });

    // B.2.3.7 String.prototype.fontcolor(color)
    _stringHtml('fontcolor', function (createHTML) {
      return function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
      };
    });

    // B.2.3.8 String.prototype.fontsize(size)
    _stringHtml('fontsize', function (createHTML) {
      return function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
      };
    });

    // B.2.3.9 String.prototype.italics()
    _stringHtml('italics', function (createHTML) {
      return function italics() {
        return createHTML(this, 'i', '', '');
      };
    });

    // B.2.3.10 String.prototype.link(url)
    _stringHtml('link', function (createHTML) {
      return function link(url) {
        return createHTML(this, 'a', 'href', url);
      };
    });

    // B.2.3.11 String.prototype.small()
    _stringHtml('small', function (createHTML) {
      return function small() {
        return createHTML(this, 'small', '', '');
      };
    });

    // B.2.3.12 String.prototype.strike()
    _stringHtml('strike', function (createHTML) {
      return function strike() {
        return createHTML(this, 'strike', '', '');
      };
    });

    // B.2.3.13 String.prototype.sub()
    _stringHtml('sub', function (createHTML) {
      return function sub() {
        return createHTML(this, 'sub', '', '');
      };
    });

    // B.2.3.14 String.prototype.sup()
    _stringHtml('sup', function (createHTML) {
      return function sup() {
        return createHTML(this, 'sup', '', '');
      };
    });

    // 20.3.3.1 / 15.9.4.4 Date.now()


    _export(_export.S, 'Date', { now: function () { return new Date().getTime(); } });

    _export(_export.P + _export.F * _fails(function () {
      return new Date(NaN).toJSON() !== null
        || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
    }), 'Date', {
      // eslint-disable-next-line no-unused-vars
      toJSON: function toJSON(key) {
        var O = _toObject(this);
        var pv = _toPrimitive(O);
        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
      }
    });

    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

    var getTime = Date.prototype.getTime;
    var $toISOString = Date.prototype.toISOString;

    var lz = function (num) {
      return num > 9 ? num : '0' + num;
    };

    // PhantomJS / old WebKit has a broken implementations
    var _dateToIsoString = (_fails(function () {
      return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
    }) || !_fails(function () {
      $toISOString.call(new Date(NaN));
    })) ? function toISOString() {
      if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
      var d = this;
      var y = d.getUTCFullYear();
      var m = d.getUTCMilliseconds();
      var s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
        '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
        'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
        ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    } : $toISOString;

    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()



    // PhantomJS / old WebKit has a broken implementations
    _export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
      toISOString: _dateToIsoString
    });

    var DateProto = Date.prototype;
    var INVALID_DATE = 'Invalid Date';
    var TO_STRING = 'toString';
    var $toString = DateProto[TO_STRING];
    var getTime$1 = DateProto.getTime;
    if (new Date(NaN) + '' != INVALID_DATE) {
      _redefine(DateProto, TO_STRING, function toString() {
        var value = getTime$1.call(this);
        // eslint-disable-next-line no-self-compare
        return value === value ? $toString.call(this) : INVALID_DATE;
      });
    }

    var NUMBER$1 = 'number';

    var _dateToPrimitive = function (hint) {
      if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
      return _toPrimitive(_anObject(this), hint != NUMBER$1);
    };

    var TO_PRIMITIVE$1 = _wks('toPrimitive');
    var proto$1 = Date.prototype;

    if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


    _export(_export.S, 'Array', { isArray: _isArray });

    // call something on iterator step with safe closing on error

    var _iterCall = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) _anObject(ret.call(iterator));
        throw e;
      }
    };

    // check on default Array iterator

    var ITERATOR$1 = _wks('iterator');
    var ArrayProto = Array.prototype;

    var _isArrayIter = function (it) {
      return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
    };

    var _createProperty = function (object, index, value) {
      if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
      else object[index] = value;
    };

    var ITERATOR$2 = _wks('iterator');

    var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR$2]
        || it['@@iterator']
        || _iterators[_classof(it)];
    };

    var ITERATOR$3 = _wks('iterator');
    var SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR$3]();
      riter['return'] = function () { SAFE_CLOSING = true; };
    } catch (e) { /* empty */ }

    var _iterDetect = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;
      try {
        var arr = [7];
        var iter = arr[ITERATOR$3]();
        iter.next = function () { return { done: safe = true }; };
        arr[ITERATOR$3] = function () { return iter; };
        exec(arr);
      } catch (e) { /* empty */ }
      return safe;
    };

    _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
      from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        var O = _toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = core_getIteratorMethod(O);
        var length, result, step, iterator;
        if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = _toLength(O.length);
          for (result = new C(length); length > index; index++) {
            _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }
        result.length = index;
        return result;
      }
    });

    // WebKit Array.of isn't generic
    _export(_export.S + _export.F * _fails(function () {
      function F() { /* empty */ }
      return !(Array.of.call(F) instanceof F);
    }), 'Array', {
      // 22.1.2.3 Array.of( ...items)
      of: function of(/* ...args */) {
        var index = 0;
        var aLen = arguments.length;
        var result = new (typeof this == 'function' ? this : Array)(aLen);
        while (aLen > index) _createProperty(result, index, arguments[index++]);
        result.length = aLen;
        return result;
      }
    });

    var _strictMethod = function (method, arg) {
      return !!method && _fails(function () {
        // eslint-disable-next-line no-useless-call
        arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
      });
    };

    // 22.1.3.13 Array.prototype.join(separator)


    var arrayJoin = [].join;

    // fallback for not array-like strings
    _export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
      join: function join(separator) {
        return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
      }
    });

    var arraySlice$1 = [].slice;

    // fallback for not array-like ES3 strings and DOM objects
    _export(_export.P + _export.F * _fails(function () {
      if (_html) arraySlice$1.call(_html);
    }), 'Array', {
      slice: function slice(begin, end) {
        var len = _toLength(this.length);
        var klass = _cof(this);
        end = end === undefined ? len : end;
        if (klass == 'Array') return arraySlice$1.call(this, begin, end);
        var start = _toAbsoluteIndex(begin, len);
        var upTo = _toAbsoluteIndex(end, len);
        var size = _toLength(upTo - start);
        var cloned = new Array(size);
        var i = 0;
        for (; i < size; i++) cloned[i] = klass == 'String'
          ? this.charAt(start + i)
          : this[start + i];
        return cloned;
      }
    });

    var $sort = [].sort;
    var test$1 = [1, 2, 3];

    _export(_export.P + _export.F * (_fails(function () {
      // IE8-
      test$1.sort(undefined);
    }) || !_fails(function () {
      // V8 bug
      test$1.sort(null);
      // Old WebKit
    }) || !_strictMethod($sort)), 'Array', {
      // 22.1.3.25 Array.prototype.sort(comparefn)
      sort: function sort(comparefn) {
        return comparefn === undefined
          ? $sort.call(_toObject(this))
          : $sort.call(_toObject(this), _aFunction(comparefn));
      }
    });

    var SPECIES = _wks('species');

    var _arraySpeciesConstructor = function (original) {
      var C;
      if (_isArray(original)) {
        C = original.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
        if (_isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      } return C === undefined ? Array : C;
    };

    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


    var _arraySpeciesCreate = function (original, length) {
      return new (_arraySpeciesConstructor(original))(length);
    };

    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex





    var _arrayMethods = function (TYPE, $create) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      var create = $create || _arraySpeciesCreate;
      return function ($this, callbackfn, that) {
        var O = _toObject($this);
        var self = _iobject(O);
        var f = _ctx(callbackfn, that, 3);
        var length = _toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;
        for (;length > index; index++) if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP) result[index] = res;   // map
            else if (res) switch (TYPE) {
              case 3: return true;             // some
              case 5: return val;              // find
              case 6: return index;            // findIndex
              case 2: result.push(val);        // filter
            } else if (IS_EVERY) return false; // every
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };

    var $forEach = _arrayMethods(0);
    var STRICT = _strictMethod([].forEach, true);

    _export(_export.P + _export.F * !STRICT, 'Array', {
      // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
      forEach: function forEach(callbackfn /* , thisArg */) {
        return $forEach(this, callbackfn, arguments[1]);
      }
    });

    var $map = _arrayMethods(1);

    _export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
      // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
      map: function map(callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments[1]);
      }
    });

    var $filter = _arrayMethods(2);

    _export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
      // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
      filter: function filter(callbackfn /* , thisArg */) {
        return $filter(this, callbackfn, arguments[1]);
      }
    });

    var $some = _arrayMethods(3);

    _export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
      // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
      some: function some(callbackfn /* , thisArg */) {
        return $some(this, callbackfn, arguments[1]);
      }
    });

    var $every = _arrayMethods(4);

    _export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
      // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
      every: function every(callbackfn /* , thisArg */) {
        return $every(this, callbackfn, arguments[1]);
      }
    });

    var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
      _aFunction(callbackfn);
      var O = _toObject(that);
      var self = _iobject(O);
      var length = _toLength(O.length);
      var index = isRight ? length - 1 : 0;
      var i = isRight ? -1 : 1;
      if (aLen < 2) for (;;) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (isRight ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };

    _export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
      // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
      reduce: function reduce(callbackfn /* , initialValue */) {
        return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
      }
    });

    _export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
      // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
      reduceRight: function reduceRight(callbackfn /* , initialValue */) {
        return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
      }
    });

    var $indexOf = _arrayIncludes(false);
    var $native = [].indexOf;
    var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

    _export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
      // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
      indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
        return NEGATIVE_ZERO
          // convert -0 to +0
          ? $native.apply(this, arguments) || 0
          : $indexOf(this, searchElement, arguments[1]);
      }
    });

    var $native$1 = [].lastIndexOf;
    var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

    _export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
      // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
      lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
        // convert -0 to +0
        if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
        var O = _toIobject(this);
        var length = _toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
        if (index < 0) index = length + index;
        for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
        return -1;
      }
    });

    var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
      var O = _toObject(this);
      var len = _toLength(O.length);
      var to = _toAbsoluteIndex(target, len);
      var from = _toAbsoluteIndex(start, len);
      var end = arguments.length > 2 ? arguments[2] : undefined;
      var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
      var inc = 1;
      if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count-- > 0) {
        if (from in O) O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
      } return O;
    };

    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = _wks('unscopables');
    var ArrayProto$1 = Array.prototype;
    if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
    var _addToUnscopables = function (key) {
      ArrayProto$1[UNSCOPABLES][key] = true;
    };

    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


    _export(_export.P, 'Array', { copyWithin: _arrayCopyWithin });

    _addToUnscopables('copyWithin');

    var _arrayFill = function fill(value /* , start = 0, end = @length */) {
      var O = _toObject(this);
      var length = _toLength(O.length);
      var aLen = arguments.length;
      var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
      var end = aLen > 2 ? arguments[2] : undefined;
      var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
      while (endPos > index) O[index++] = value;
      return O;
    };

    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


    _export(_export.P, 'Array', { fill: _arrayFill });

    _addToUnscopables('fill');

    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

    var $find = _arrayMethods(5);
    var KEY = 'find';
    var forced = true;
    // Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](function () { forced = false; });
    _export(_export.P + _export.F * forced, 'Array', {
      find: function find(callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    _addToUnscopables(KEY);

    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

    var $find$1 = _arrayMethods(6);
    var KEY$1 = 'findIndex';
    var forced$1 = true;
    // Shouldn't skip holes
    if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
    _export(_export.P + _export.F * forced$1, 'Array', {
      findIndex: function findIndex(callbackfn /* , that = undefined */) {
        return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    _addToUnscopables(KEY$1);

    var SPECIES$1 = _wks('species');

    var _setSpecies = function (KEY) {
      var C = _global[KEY];
      if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
        configurable: true,
        get: function () { return this; }
      });
    };

    _setSpecies('Array');

    var _iterStep = function (done, value) {
      return { value: value, done: !!done };
    };

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
      this._t = _toIobject(iterated); // target
      this._i = 0;                   // next index
      this._k = kind;                // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = undefined;
        return _iterStep(1);
      }
      if (kind == 'keys') return _iterStep(0, index);
      if (kind == 'values') return _iterStep(0, O[index]);
      return _iterStep(0, [index, O[index]]);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    _iterators.Arguments = _iterators.Array;

    _addToUnscopables('keys');
    _addToUnscopables('values');
    _addToUnscopables('entries');

    // 21.2.5.3 get RegExp.prototype.flags

    var _flags = function () {
      var that = _anObject(this);
      var result = '';
      if (that.global) result += 'g';
      if (that.ignoreCase) result += 'i';
      if (that.multiline) result += 'm';
      if (that.unicode) result += 'u';
      if (that.sticky) result += 'y';
      return result;
    };

    var dP$4 = _objectDp.f;
    var gOPN$3 = _objectGopn.f;


    var $RegExp = _global.RegExp;
    var Base$1 = $RegExp;
    var proto$2 = $RegExp.prototype;
    var re1 = /a/g;
    var re2 = /a/g;
    // "new" creates a new object, old webkit buggy here
    var CORRECT_NEW = new $RegExp(re1) !== re1;

    if (_descriptors && (!CORRECT_NEW || _fails(function () {
      re2[_wks('match')] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
    }))) {
      $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp;
        var piRE = _isRegexp(p);
        var fiU = f === undefined;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
          : _inheritIfRequired(CORRECT_NEW
            ? new Base$1(piRE && !fiU ? p.source : p, f)
            : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f)
          , tiRE ? this : proto$2, $RegExp);
      };
      var proxy = function (key) {
        key in $RegExp || dP$4($RegExp, key, {
          configurable: true,
          get: function () { return Base$1[key]; },
          set: function (it) { Base$1[key] = it; }
        });
      };
      for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i;) proxy(keys$1[i++]);
      proto$2.constructor = $RegExp;
      $RegExp.prototype = proto$2;
      _redefine(_global, 'RegExp', $RegExp);
    }

    _setSpecies('RegExp');

    var nativeExec = RegExp.prototype.exec;
    // This always refers to the native implementation, because the
    // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
    // which loads this file before patching the method.
    var nativeReplace = String.prototype.replace;

    var patchedExec = nativeExec;

    var LAST_INDEX = 'lastIndex';

    var UPDATES_LAST_INDEX_WRONG = (function () {
      var re1 = /a/,
          re2 = /b*/g;
      nativeExec.call(re1, 'a');
      nativeExec.call(re2, 'a');
      return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
    })();

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

    if (PATCH) {
      patchedExec = function exec(str) {
        var re = this;
        var lastIndex, reCopy, match, i;

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

        match = nativeExec.call(re, str);

        if (UPDATES_LAST_INDEX_WRONG && match) {
          re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
          // eslint-disable-next-line no-loop-func
          nativeReplace.call(match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
        }

        return match;
      };
    }

    var _regexpExec = patchedExec;

    _export({
      target: 'RegExp',
      proto: true,
      forced: _regexpExec !== /./.exec
    }, {
      exec: _regexpExec
    });

    // 21.2.5.3 get RegExp.prototype.flags()
    if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
      configurable: true,
      get: _flags
    });

    var TO_STRING$1 = 'toString';
    var $toString$1 = /./[TO_STRING$1];

    var define = function (fn) {
      _redefine(RegExp.prototype, TO_STRING$1, fn, true);
    };

    // 21.2.5.14 RegExp.prototype.toString()
    if (_fails(function () { return $toString$1.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
      define(function toString() {
        var R = _anObject(this);
        return '/'.concat(R.source, '/',
          'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
      });
    // FF44- RegExp#toString has a wrong name
    } else if ($toString$1.name != TO_STRING$1) {
      define(function toString() {
        return $toString$1.call(this);
      });
    }

    var at = _stringAt(true);

     // `AdvanceStringIndex` abstract operation
    // https://tc39.github.io/ecma262/#sec-advancestringindex
    var _advanceStringIndex = function (S, index, unicode) {
      return index + (unicode ? at(S, index).length : 1);
    };

    var builtinExec = RegExp.prototype.exec;

     // `RegExpExec` abstract operation
    // https://tc39.github.io/ecma262/#sec-regexpexec
    var _regexpExecAbstract = function (R, S) {
      var exec = R.exec;
      if (typeof exec === 'function') {
        var result = exec.call(R, S);
        if (typeof result !== 'object') {
          throw new TypeError('RegExp exec method returned something other than an Object or null');
        }
        return result;
      }
      if (_classof(R) !== 'RegExp') {
        throw new TypeError('RegExp#exec called on incompatible receiver');
      }
      return builtinExec.call(R, S);
    };

    var SPECIES$2 = _wks('species');

    var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
      // #replace needs built-in support for named groups.
      // #match works fine because it just return the exec results, even if it has
      // a "grops" property.
      var re = /./;
      re.exec = function () {
        var result = [];
        result.groups = { a: '7' };
        return result;
      };
      return ''.replace(re, '$<a>') !== '7';
    });

    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
      // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      var re = /(?:)/;
      var originalExec = re.exec;
      re.exec = function () { return originalExec.apply(this, arguments); };
      var result = 'ab'.split(re);
      return result.length === 2 && result[0] === 'a' && result[1] === 'b';
    })();

    var _fixReWks = function (KEY, length, exec) {
      var SYMBOL = _wks(KEY);

      var DELEGATES_TO_SYMBOL = !_fails(function () {
        // String methods call symbol-named RegEp methods
        var O = {};
        O[SYMBOL] = function () { return 7; };
        return ''[KEY](O) != 7;
      });

      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        re.exec = function () { execCalled = true; return null; };
        if (KEY === 'split') {
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {};
          re.constructor[SPECIES$2] = function () { return re; };
        }
        re[SYMBOL]('');
        return !execCalled;
      }) : undefined;

      if (
        !DELEGATES_TO_SYMBOL ||
        !DELEGATES_TO_EXEC ||
        (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
        (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
      ) {
        var nativeRegExpMethod = /./[SYMBOL];
        var fns = exec(
          _defined,
          SYMBOL,
          ''[KEY],
          function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === _regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
              }
              return { done: true, value: nativeMethod.call(str, regexp, arg2) };
            }
            return { done: false };
          }
        );
        var strfn = fns[0];
        var rxfn = fns[1];

        _redefine(String.prototype, KEY, strfn);
        _hide(RegExp.prototype, SYMBOL, length == 2
          // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
          ? function (string, arg) { return rxfn.call(string, this, arg); }
          // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
          : function (string) { return rxfn.call(string, this); }
        );
      }
    };

    // @@match logic
    _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
      return [
        // `String.prototype.match` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.match
        function match(regexp) {
          var O = defined(this);
          var fn = regexp == undefined ? undefined : regexp[MATCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
        function (regexp) {
          var res = maybeCallNative($match, regexp, this);
          if (res.done) return res.value;
          var rx = _anObject(regexp);
          var S = String(this);
          if (!rx.global) return _regexpExecAbstract(rx, S);
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          var A = [];
          var n = 0;
          var result;
          while ((result = _regexpExecAbstract(rx, S)) !== null) {
            var matchStr = String(result[0]);
            A[n] = matchStr;
            if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
            n++;
          }
          return n === 0 ? null : A;
        }
      ];
    });

    var max$1 = Math.max;
    var min$2 = Math.min;
    var floor$3 = Math.floor;
    var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

    var maybeToString = function (it) {
      return it === undefined ? it : String(it);
    };

    // @@replace logic
    _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
      return [
        // `String.prototype.replace` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
          var O = defined(this);
          var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
          return fn !== undefined
            ? fn.call(searchValue, O, replaceValue)
            : $replace.call(String(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
        function (regexp, replaceValue) {
          var res = maybeCallNative($replace, regexp, this, replaceValue);
          if (res.done) return res.value;

          var rx = _anObject(regexp);
          var S = String(this);
          var functionalReplace = typeof replaceValue === 'function';
          if (!functionalReplace) replaceValue = String(replaceValue);
          var global = rx.global;
          if (global) {
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
          }
          var results = [];
          while (true) {
            var result = _regexpExecAbstract(rx, S);
            if (result === null) break;
            results.push(result);
            if (!global) break;
            var matchStr = String(result[0]);
            if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
          }
          var accumulatedResult = '';
          var nextSourcePosition = 0;
          for (var i = 0; i < results.length; i++) {
            result = results[i];
            var matched = String(result[0]);
            var position = max$1(min$2(_toInteger(result.index), S.length), 0);
            var captures = [];
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
            var namedCaptures = result.groups;
            if (functionalReplace) {
              var replacerArgs = [matched].concat(captures, position, S);
              if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
              var replacement = String(replaceValue.apply(undefined, replacerArgs));
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
            }
            if (position >= nextSourcePosition) {
              accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
              nextSourcePosition = position + matched.length;
            }
          }
          return accumulatedResult + S.slice(nextSourcePosition);
        }
      ];

        // https://tc39.github.io/ecma262/#sec-getsubstitution
      function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
          namedCaptures = _toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }
        return $replace.call(replacement, symbols, function (match, ch) {
          var capture;
          switch (ch.charAt(0)) {
            case '$': return '$';
            case '&': return matched;
            case '`': return str.slice(0, position);
            case "'": return str.slice(tailPos);
            case '<':
              capture = namedCaptures[ch.slice(1, -1)];
              break;
            default: // \d\d?
              var n = +ch;
              if (n === 0) return match;
              if (n > m) {
                var f = floor$3(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                return match;
              }
              capture = captures[n - 1];
          }
          return capture === undefined ? '' : capture;
        });
      }
    });

    // @@search logic
    _fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
      return [
        // `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function search(regexp) {
          var O = defined(this);
          var fn = regexp == undefined ? undefined : regexp[SEARCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function (regexp) {
          var res = maybeCallNative($search, regexp, this);
          if (res.done) return res.value;
          var rx = _anObject(regexp);
          var S = String(this);
          var previousLastIndex = rx.lastIndex;
          if (!_sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
          var result = _regexpExecAbstract(rx, S);
          if (!_sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
          return result === null ? -1 : result.index;
        }
      ];
    });

    // 7.3.20 SpeciesConstructor(O, defaultConstructor)


    var SPECIES$3 = _wks('species');
    var _speciesConstructor = function (O, D) {
      var C = _anObject(O).constructor;
      var S;
      return C === undefined || (S = _anObject(C)[SPECIES$3]) == undefined ? D : _aFunction(S);
    };

    var $min = Math.min;
    var $push = [].push;
    var $SPLIT = 'split';
    var LENGTH = 'length';
    var LAST_INDEX$1 = 'lastIndex';
    var MAX_UINT32 = 0xffffffff;

    // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
    var SUPPORTS_Y = !_fails(function () { });

    // @@split logic
    _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
      var internalSplit;
      if (
        'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
        'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
        'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
        '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
        '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
        ''[$SPLIT](/.?/)[LENGTH]
      ) {
        // based on es5-shim implementation, need to rework it
        internalSplit = function (separator, limit) {
          var string = String(this);
          if (separator === undefined && limit === 0) return [];
          // If `separator` is not a regex, use native split
          if (!_isRegexp(separator)) return $split.call(string, separator, limit);
          var output = [];
          var flags = (separator.ignoreCase ? 'i' : '') +
                      (separator.multiline ? 'm' : '') +
                      (separator.unicode ? 'u' : '') +
                      (separator.sticky ? 'y' : '');
          var lastLastIndex = 0;
          var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
          // Make `global` and avoid `lastIndex` issues by working with a copy
          var separatorCopy = new RegExp(separator.source, flags + 'g');
          var match, lastIndex, lastLength;
          while (match = _regexpExec.call(separatorCopy, string)) {
            lastIndex = separatorCopy[LAST_INDEX$1];
            if (lastIndex > lastLastIndex) {
              output.push(string.slice(lastLastIndex, match.index));
              if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
              lastLength = match[0][LENGTH];
              lastLastIndex = lastIndex;
              if (output[LENGTH] >= splitLimit) break;
            }
            if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
          }
          if (lastLastIndex === string[LENGTH]) {
            if (lastLength || !separatorCopy.test('')) output.push('');
          } else output.push(string.slice(lastLastIndex));
          return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
        };
      // Chakra, V8
      } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
        internalSplit = function (separator, limit) {
          return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
        };
      } else {
        internalSplit = $split;
      }

      return [
        // `String.prototype.split` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = defined(this);
          var splitter = separator == undefined ? undefined : separator[SPLIT];
          return splitter !== undefined
            ? splitter.call(separator, O, limit)
            : internalSplit.call(String(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (regexp, limit) {
          var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
          if (res.done) return res.value;

          var rx = _anObject(regexp);
          var S = String(this);
          var C = _speciesConstructor(rx, RegExp);

          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? 'i' : '') +
                      (rx.multiline ? 'm' : '') +
                      (rx.unicode ? 'u' : '') +
                      (SUPPORTS_Y ? 'y' : 'g');

          // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.
          var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
          if (lim === 0) return [];
          if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];
          while (q < S.length) {
            splitter.lastIndex = SUPPORTS_Y ? q : 0;
            var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
            var e;
            if (
              z === null ||
              (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
            ) {
              q = _advanceStringIndex(S, q, unicodeMatching);
            } else {
              A.push(S.slice(p, q));
              if (A.length === lim) return A;
              for (var i = 1; i <= z.length - 1; i++) {
                A.push(z[i]);
                if (A.length === lim) return A;
              }
              q = p = e;
            }
          }
          A.push(S.slice(p));
          return A;
        }
      ];
    });

    var _anInstance = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
        throw TypeError(name + ': incorrect invocation!');
      } return it;
    };

    var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
      // fast case for arrays with default iterator
      if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
        result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
    });

    var process$1 = _global.process;
    var setTask = _global.setImmediate;
    var clearTask = _global.clearImmediate;
    var MessageChannel = _global.MessageChannel;
    var Dispatch = _global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var defer, channel, port;
    var run = function () {
      var id = +this;
      // eslint-disable-next-line no-prototype-builtins
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function (event) {
      run.call(event.data);
    };
    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func
          _invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      // Node.js 0.8-
      if (_cof(process$1) == 'process') {
        defer = function (id) {
          process$1.nextTick(_ctx(run, id, 1));
        };
      // Sphere (JS game engine) Dispatch API
      } else if (Dispatch && Dispatch.now) {
        defer = function (id) {
          Dispatch.now(_ctx(run, id, 1));
        };
      // Browsers with MessageChannel, includes WebWorkers
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = _ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
        defer = function (id) {
          _global.postMessage(id + '', '*');
        };
        _global.addEventListener('message', listener, false);
      // IE8-
      } else if (ONREADYSTATECHANGE in _domCreate('script')) {
        defer = function (id) {
          _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
            _html.removeChild(this);
            run.call(id);
          };
        };
      // Rest old browsers
      } else {
        defer = function (id) {
          setTimeout(_ctx(run, id, 1), 0);
        };
      }
    }
    var _task = {
      set: setTask,
      clear: clearTask
    };

    var macrotask = _task.set;
    var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
    var process$2 = _global.process;
    var Promise$1 = _global.Promise;
    var isNode = _cof(process$2) == 'process';

    var _microtask = function () {
      var head, last, notify;

      var flush = function () {
        var parent, fn;
        if (isNode && (parent = process$2.domain)) parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (e) {
            if (head) notify();
            else last = undefined;
            throw e;
          }
        } last = undefined;
        if (parent) parent.enter();
      };

      // Node.js
      if (isNode) {
        notify = function () {
          process$2.nextTick(flush);
        };
      // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
      } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
        var toggle = true;
        var node = document.createTextNode('');
        new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
        notify = function () {
          node.data = toggle = !toggle;
        };
      // environments with maybe non-completely correct, but existent Promise
      } else if (Promise$1 && Promise$1.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise$1.resolve(undefined);
        notify = function () {
          promise.then(flush);
        };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
      } else {
        notify = function () {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(_global, flush);
        };
      }

      return function (fn) {
        var task = { fn: fn, next: undefined };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        } last = task;
      };
    };

    // 25.4.1.5 NewPromiseCapability(C)


    function PromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = _aFunction(resolve);
      this.reject = _aFunction(reject);
    }

    var f$7 = function (C) {
      return new PromiseCapability(C);
    };

    var _newPromiseCapability = {
    	f: f$7
    };

    var _perform = function (exec) {
      try {
        return { e: false, v: exec() };
      } catch (e) {
        return { e: true, v: e };
      }
    };

    var navigator$1 = _global.navigator;

    var _userAgent = navigator$1 && navigator$1.userAgent || '';

    var _promiseResolve = function (C, x) {
      _anObject(C);
      if (_isObject(x) && x.constructor === C) return x;
      var promiseCapability = _newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };

    var _redefineAll = function (target, src, safe) {
      for (var key in src) _redefine(target, key, src[key], safe);
      return target;
    };

    var task = _task.set;
    var microtask = _microtask();




    var PROMISE = 'Promise';
    var TypeError$1 = _global.TypeError;
    var process$3 = _global.process;
    var versions = process$3 && process$3.versions;
    var v8 = versions && versions.v8 || '';
    var $Promise = _global[PROMISE];
    var isNode$1 = _classof(process$3) == 'process';
    var empty = function () { /* empty */ };
    var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
    var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

    var USE_NATIVE$1 = !!function () {
      try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
          exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode$1 || typeof PromiseRejectionEvent == 'function')
          && promise.then(empty) instanceof FakePromise
          // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // we can't detect it synchronously, so just check versions
          && v8.indexOf('6.6') !== 0
          && _userAgent.indexOf('Chrome/66') === -1;
      } catch (e) { /* empty */ }
    }();

    // helpers
    var isThenable = function (it) {
      var then;
      return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var notify = function (promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function () {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;
          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise);
                promise._h = 1;
              }
              if (handler === true) result = value;
              else {
                if (domain) domain.enter();
                result = handler(value); // may throw
                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }
              if (result === reaction.promise) {
                reject(TypeError$1('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            if (domain && !exited) domain.exit();
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
      });
    };
    var onUnhandled = function (promise) {
      task.call(_global, function () {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
          result = _perform(function () {
            if (isNode$1) {
              process$3.emit('unhandledRejection', value, promise);
            } else if (handler = _global.onunhandledrejection) {
              handler({ promise: promise, reason: value });
            } else if ((console = _global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          });
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
        } promise._a = undefined;
        if (unhandled && result.e) throw result.v;
      });
    };
    var isUnhandled = function (promise) {
      return promise._h !== 1 && (promise._a || promise._c).length === 0;
    };
    var onHandleUnhandled = function (promise) {
      task.call(_global, function () {
        var handler;
        if (isNode$1) {
          process$3.emit('rejectionHandled', promise);
        } else if (handler = _global.onrejectionhandled) {
          handler({ promise: promise, reason: promise._v });
        }
      });
    };
    var $reject = function (value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      promise._v = value;
      promise._s = 2;
      if (!promise._a) promise._a = promise._c.slice();
      notify(promise, true);
    };
    var $resolve = function (value) {
      var promise = this;
      var then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      try {
        if (promise === value) throw TypeError$1("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = { _w: promise, _d: false }; // wrap
            try {
              then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({ _w: promise, _d: false }, e); // wrap
      }
    };

    // constructor polyfill
    if (!USE_NATIVE$1) {
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise(executor) {
        _anInstance(this, $Promise, PROMISE, '_h');
        _aFunction(executor);
        Internal.call(this);
        try {
          executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      };
      // eslint-disable-next-line no-unused-vars
      Internal = function Promise(executor) {
        this._c = [];             // <- awaiting reactions
        this._a = undefined;      // <- checked in isUnhandled reactions
        this._s = 0;              // <- state
        this._d = false;          // <- done
        this._v = undefined;      // <- value
        this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false;          // <- notify
      };
      Internal.prototype = _redefineAll($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode$1 ? process$3.domain : undefined;
          this._c.push(reaction);
          if (this._a) this._a.push(reaction);
          if (this._s) notify(this, false);
          return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
      OwnPromiseCapability = function () {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = _ctx($resolve, promise, 1);
        this.reject = _ctx($reject, promise, 1);
      };
      _newPromiseCapability.f = newPromiseCapability = function (C) {
        return C === $Promise || C === Wrapper
          ? new OwnPromiseCapability(C)
          : newGenericPromiseCapability(C);
      };
    }

    _export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
    _setToStringTag($Promise, PROMISE);
    _setSpecies(PROMISE);
    Wrapper = _core[PROMISE];

    // statics
    _export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    _export(_export.S + _export.F * (!USE_NATIVE$1), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve(x) {
        return _promiseResolve(this, x);
      }
    });
    _export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = _perform(function () {
          var values = [];
          var index = 0;
          var remaining = 1;
          _forOf(iterable, false, function (promise) {
            var $index = index++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = _perform(function () {
          _forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (result.e) reject(result.v);
        return capability.promise;
      }
    });

    var _validateCollection = function (it, TYPE) {
      if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
      return it;
    };

    var dP$5 = _objectDp.f;









    var fastKey = _meta.fastKey;

    var SIZE = _descriptors ? '_s' : 'size';

    var getEntry = function (that, key) {
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return that._i[index];
      // frozen object case
      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key) return entry;
      }
    };

    var _collectionStrong = {
      getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          _anInstance(that, C, NAME, '_i');
          that._t = NAME;         // collection type
          that._i = _objectCreate(null); // index
          that._f = undefined;    // first entry
          that._l = undefined;    // last entry
          that[SIZE] = 0;         // size
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
        });
        _redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p) entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }
            that._f = that._l = undefined;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function (key) {
            var that = _validateCollection(this, NAME);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev) prev.n = next;
              if (next) next.p = prev;
              if (that._f == entry) that._f = next;
              if (that._l == entry) that._l = prev;
              that[SIZE]--;
            } return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn /* , that = undefined */) {
            _validateCollection(this, NAME);
            var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;
            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this);
              // revert to the last existing entry
              while (entry && entry.r) entry = entry.p;
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(_validateCollection(this, NAME), key);
          }
        });
        if (_descriptors) dP$5(C.prototype, 'size', {
          get: function () {
            return _validateCollection(this, NAME)[SIZE];
          }
        });
        return C;
      },
      def: function (that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        // change existing entry
        if (entry) {
          entry.v = value;
        // create new entry
        } else {
          that._l = entry = {
            i: index = fastKey(key, true), // <- index
            k: key,                        // <- key
            v: value,                      // <- value
            p: prev = that._l,             // <- previous entry
            n: undefined,                  // <- next entry
            r: false                       // <- removed
          };
          if (!that._f) that._f = entry;
          if (prev) prev.n = entry;
          that[SIZE]++;
          // add to index
          if (index !== 'F') that._i[index] = entry;
        } return that;
      },
      getEntry: getEntry,
      setStrong: function (C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        _iterDefine(C, NAME, function (iterated, kind) {
          this._t = _validateCollection(iterated, NAME); // target
          this._k = kind;                     // kind
          this._l = undefined;                // previous
        }, function () {
          var that = this;
          var kind = that._k;
          var entry = that._l;
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
          // get next entry
          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            // or finish the iteration
            that._t = undefined;
            return _iterStep(1);
          }
          // return step by kind
          if (kind == 'keys') return _iterStep(0, entry.k);
          if (kind == 'values') return _iterStep(0, entry.v);
          return _iterStep(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

        // add [@@species], 23.1.2.2, 23.2.2.2
        _setSpecies(NAME);
      }
    };

    var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = _global[NAME];
      var C = Base;
      var ADDER = IS_MAP ? 'set' : 'add';
      var proto = C && C.prototype;
      var O = {};
      var fixMethod = function (KEY) {
        var fn = proto[KEY];
        _redefine(proto, KEY,
          KEY == 'delete' ? function (a) {
            return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'has' ? function has(a) {
            return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'get' ? function get(a) {
            return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
          } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
            : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
        );
      };
      if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
        new C().entries().next();
      }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        _redefineAll(C.prototype, methods);
        _meta.NEED = true;
      } else {
        var instance = new C();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = _fails(function () { instance.has(1); });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        var ACCEPT_ITERABLES = _iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && _fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          C = wrapper(function (target, iterable) {
            _anInstance(target, C, NAME);
            var that = _inheritIfRequired(new Base(), target, C);
            if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && proto.clear) delete proto.clear;
      }

      _setToStringTag(C, NAME);

      O[NAME] = C;
      _export(_export.G + _export.W + _export.F * (C != Base), O);

      if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

      return C;
    };

    var MAP = 'Map';

    // 23.1 Map Objects
    var es6_map = _collection(MAP, function (get) {
      return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
      }
    }, _collectionStrong, true);

    var SET = 'Set';

    // 23.2 Set Objects
    var es6_set = _collection(SET, function (get) {
      return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
      }
    }, _collectionStrong);

    var getWeak = _meta.getWeak;







    var arrayFind = _arrayMethods(5);
    var arrayFindIndex = _arrayMethods(6);
    var id$1 = 0;

    // fallback for uncaught frozen keys
    var uncaughtFrozenStore = function (that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };
    var UncaughtFrozenStore = function () {
      this.a = [];
    };
    var findUncaughtFrozen = function (store, key) {
      return arrayFind(store.a, function (it) {
        return it[0] === key;
      });
    };
    UncaughtFrozenStore.prototype = {
      get: function (key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function (key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function (key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;
        else this.a.push([key, value]);
      },
      'delete': function (key) {
        var index = arrayFindIndex(this.a, function (it) {
          return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
      }
    };

    var _collectionWeak = {
      getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          _anInstance(that, C, NAME, '_i');
          that._t = NAME;      // collection type
          that._i = id$1++;      // collection id
          that._l = undefined; // leak store for uncaught frozen objects
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
        });
        _redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          'delete': function (key) {
            if (!_isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
            return data && _has(data, this._i) && delete data[this._i];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            if (!_isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
            return data && _has(data, this._i);
          }
        });
        return C;
      },
      def: function (that, key, value) {
        var data = getWeak(_anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);
        else data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };

    var es6_weakMap = createCommonjsModule(function (module) {

    var each = _arrayMethods(0);






    var NATIVE_WEAK_MAP = _validateCollection;
    var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = _meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = _collectionWeak.ufstore;
    var InternalMap;

    var wrapper = function (get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (_isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
      }
    };

    // 23.3 WeakMap Objects
    var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

    // IE11 WeakMap frozen keys fix
    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
      _objectAssign(InternalMap.prototype, methods);
      _meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        _redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (_isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();
            var result = this._f[key](a, b);
            return key == 'set' ? this : result;
          // store all the rest on native weakmap
          } return method.call(this, a, b);
        });
      });
    }
    });

    var WEAK_SET = 'WeakSet';

    // 23.4 WeakSet Objects
    _collection(WEAK_SET, function (get) {
      return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
    }, {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return _collectionWeak.def(_validateCollection(this, WEAK_SET), value, true);
      }
    }, _collectionWeak, false, true);

    var TYPED = _uid('typed_array');
    var VIEW = _uid('view');
    var ABV = !!(_global.ArrayBuffer && _global.DataView);
    var CONSTR = ABV;
    var i$1 = 0;
    var l = 9;
    var Typed;

    var TypedArrayConstructors = (
      'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
    ).split(',');

    while (i$1 < l) {
      if (Typed = _global[TypedArrayConstructors[i$1++]]) {
        _hide(Typed.prototype, TYPED, true);
        _hide(Typed.prototype, VIEW, true);
      } else CONSTR = false;
    }

    var _typed = {
      ABV: ABV,
      CONSTR: CONSTR,
      TYPED: TYPED,
      VIEW: VIEW
    };

    // https://tc39.github.io/ecma262/#sec-toindex


    var _toIndex = function (it) {
      if (it === undefined) return 0;
      var number = _toInteger(it);
      var length = _toLength(number);
      if (number !== length) throw RangeError('Wrong length!');
      return length;
    };

    var _typedBuffer = createCommonjsModule(function (module, exports) {











    var gOPN = _objectGopn.f;
    var dP = _objectDp.f;


    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = _global[ARRAY_BUFFER];
    var $DataView = _global[DATA_VIEW];
    var Math = _global.Math;
    var RangeError = _global.RangeError;
    // eslint-disable-next-line no-shadow-restricted-names
    var Infinity = _global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = _descriptors ? '_b' : BUFFER;
    var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
    var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET;

    // IEEE754 conversions based on https://github.com/feross/ieee754
    function packIEEE754(value, mLen, nBytes) {
      var buffer = new Array(nBytes);
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value);
      // eslint-disable-next-line no-self-compare
      if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);
        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
      buffer[--i] |= s * 128;
      return buffer;
    }
    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = s & 127;
      var m;
      s >>= 7;
      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      } return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }
    function packI8(it) {
      return [it & 0xff];
    }
    function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    }
    function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }
    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }
    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
    }

    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }
    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);
      for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }

    if (!_typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = _toIndex(length);
        this._b = _arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        _anInstance(this, $DataView, DATA_VIEW);
        _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = _toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (_descriptors) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      _redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset /* , littleEndian */) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset /* , littleEndian */) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset /* , littleEndian */) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset /* , littleEndian */) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!_fails(function () {
        $ArrayBuffer(1);
      }) || !_fails(function () {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
      }) || _fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new
        new $ArrayBuffer(1.5); // eslint-disable-line no-new
        new $ArrayBuffer(NaN); // eslint-disable-line no-new
        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          _anInstance(this, $ArrayBuffer);
          return new BaseBuffer(_toIndex(length));
        };
        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
        }
        ArrayBufferProto.constructor = $ArrayBuffer;
      }
      // iOS Safari 7.x bug
      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) _redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }
    _setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    _setToStringTag($DataView, DATA_VIEW);
    _hide($DataView[PROTOTYPE], _typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
    });

    var ArrayBuffer = _global.ArrayBuffer;

    var $ArrayBuffer = _typedBuffer.ArrayBuffer;
    var $DataView = _typedBuffer.DataView;
    var $isView = _typed.ABV && ArrayBuffer.isView;
    var $slice = $ArrayBuffer.prototype.slice;
    var VIEW$1 = _typed.VIEW;
    var ARRAY_BUFFER = 'ArrayBuffer';

    _export(_export.G + _export.W + _export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

    _export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
      // 24.1.3.1 ArrayBuffer.isView(arg)
      isView: function isView(it) {
        return $isView && $isView(it) || _isObject(it) && VIEW$1 in it;
      }
    });

    _export(_export.P + _export.U + _export.F * _fails(function () {
      return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
    }), ARRAY_BUFFER, {
      // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
      slice: function slice(start, end) {
        if ($slice !== undefined && end === undefined) return $slice.call(_anObject(this), start); // FF fix
        var len = _anObject(this).byteLength;
        var first = _toAbsoluteIndex(start, len);
        var fin = _toAbsoluteIndex(end === undefined ? len : end, len);
        var result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(fin - first));
        var viewS = new $DataView(this);
        var viewT = new $DataView(result);
        var index = 0;
        while (first < fin) {
          viewT.setUint8(index++, viewS.getUint8(first++));
        } return result;
      }
    });

    _setSpecies(ARRAY_BUFFER);

    _export(_export.G + _export.W + _export.F * !_typed.ABV, {
      DataView: _typedBuffer.DataView
    });

    var _typedArray = createCommonjsModule(function (module) {
    if (_descriptors) {
      var global = _global;
      var fails = _fails;
      var $export = _export;
      var $typed = _typed;
      var $buffer = _typedBuffer;
      var ctx = _ctx;
      var anInstance = _anInstance;
      var propertyDesc = _propertyDesc;
      var hide = _hide;
      var redefineAll = _redefineAll;
      var toInteger = _toInteger;
      var toLength = _toLength;
      var toIndex = _toIndex;
      var toAbsoluteIndex = _toAbsoluteIndex;
      var toPrimitive = _toPrimitive;
      var has = _has;
      var classof = _classof;
      var isObject = _isObject;
      var toObject = _toObject;
      var isArrayIter = _isArrayIter;
      var create = _objectCreate;
      var getPrototypeOf = _objectGpo;
      var gOPN = _objectGopn.f;
      var getIterFn = core_getIteratorMethod;
      var uid = _uid;
      var wks = _wks;
      var createArrayMethod = _arrayMethods;
      var createArrayIncludes = _arrayIncludes;
      var speciesConstructor = _speciesConstructor;
      var ArrayIterators = es6_array_iterator;
      var Iterators = _iterators;
      var $iterDetect = _iterDetect;
      var setSpecies = _setSpecies;
      var arrayFill = _arrayFill;
      var arrayCopyWithin = _arrayCopyWithin;
      var $DP = _objectDp;
      var $GOPD = _objectGopd;
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var PROTOTYPE = 'prototype';
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks('iterator');
      var TAG = wks('toStringTag');
      var TYPED_CONSTRUCTOR = uid('typed_constructor');
      var DEF_CONSTRUCTOR = uid('def_constructor');
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = 'Wrong length!';

      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });

      var LITTLE_ENDIAN = fails(function () {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });

      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
        new Uint8Array(1).set({});
      });

      var toOffset = function (it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function (it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function (C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        } return new C(length);
      };

      var speciesFromList = function (O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function (C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);
        while (length > index) result[index] = list[index++];
        return result;
      };

      var addGetter = function (it, key, internal) {
        dP(it, key, { get: function () { return this._d[internal]; } });
      };

      var $from = function from(source /* , mapfn, thisArg */) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;
        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          } O = values;
        }
        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }
        return result;
      };

      var $of = function of(/* ...items */) {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);
        while (length > index) result[index] = arguments[index++];
        return result;
      };

      // iOS Safari 6.x fails here
      var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start /* , end */) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn /* , thisArg */) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn /* , thisArg */) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn,
            arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate /* , thisArg */) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate /* , thisArg */) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn /* , thisArg */) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement /* , fromIndex */) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement /* , fromIndex */) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) { // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn /* , thisArg */) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;
          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          } return that;
        },
        some: function some(callbackfn /* , thisArg */) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
            O.buffer,
            O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
            toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
          );
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike /* , offset */) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);
        while (index < len) this[offset + index] = src[index++];
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function (target, key) {
        return isObject(target)
          && target[TYPED_ARRAY]
          && typeof key != 'symbol'
          && key in target
          && String(+key) == String(key);
      };
      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true))
          ? propertyDesc(2, target[key])
          : gOPD(target, key);
      };
      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true))
          && isObject(desc)
          && has(desc, 'value')
          && !has(desc, 'get')
          && !has(desc, 'set')
          // TODO: add validation descriptor w/o calling accessors
          && !desc.configurable
          && (!has(desc, 'writable') || desc.writable)
          && (!has(desc, 'enumerable') || desc.enumerable)
        ) {
          target[key] = desc.value;
          return target;
        } return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails(function () { arrayToString.call({}); })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function () { /* noop */ },
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function () { return this[TYPED_ARRAY]; }
      });

      // eslint-disable-next-line max-statements
      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + KEY;
        var SETTER = 'set' + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
        var getter = function (that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };
        var setter = function (that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };
        var addElement = function (that, index) {
          dP(that, index, {
            get: function () {
              return getter(this, index);
            },
            set: function (value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };
        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, '_d');
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;
            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;
              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }
              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }
            hide(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });
            while (index < length) addElement(that, index++);
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!fails(function () {
          TypedArray(1);
        }) || !fails(function () {
          new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function (iter) {
          new TypedArray(); // eslint-disable-line no-new
          new TypedArray(null); // eslint-disable-line no-new
          new TypedArray(1.5); // eslint-disable-line no-new
          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass;
            // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645
            if (!isObject(data)) return new Base(toIndex(data));
            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined
                ? new Base(data, toOffset($offset, BYTES), $length)
                : $offset !== undefined
                  ? new Base(data, toOffset($offset, BYTES))
                  : new Base(data);
            }
            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          TypedArrayPrototype.constructor = TypedArray;
        }
        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator
          && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function () { return NAME; }
          });
        }

        O[NAME] = TypedArray;

        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });

        $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
          from: $from,
          of: $of
        });

        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

        $export($export.P, NAME, proto);

        setSpecies(NAME);

        $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

        if (TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

        $export($export.P + $export.F * fails(function () {
          new TypedArray(1).slice();
        }), NAME, { slice: $slice });

        $export($export.P + $export.F * (fails(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, { toLocaleString: $toLocaleString });

        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () { /* empty */ };
    });

    _typedArray('Int8', 1, function (init) {
      return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    _typedArray('Uint8', 1, function (init) {
      return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    _typedArray('Uint8', 1, function (init) {
      return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    }, true);

    _typedArray('Int16', 2, function (init) {
      return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    _typedArray('Uint16', 2, function (init) {
      return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    _typedArray('Int32', 4, function (init) {
      return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    _typedArray('Uint32', 4, function (init) {
      return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    _typedArray('Float32', 4, function (init) {
      return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    _typedArray('Float64', 8, function (init) {
      return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });

    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)



    var rApply = (_global.Reflect || {}).apply;
    var fApply = Function.apply;
    // MS Edge argumentsList argument is optional
    _export(_export.S + _export.F * !_fails(function () {
      rApply(function () { /* empty */ });
    }), 'Reflect', {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = _aFunction(target);
        var L = _anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });

    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])







    var rConstruct = (_global.Reflect || {}).construct;

    // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it
    var NEW_TARGET_BUG = _fails(function () {
      function F() { /* empty */ }
      return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
    });
    var ARGS_BUG = !_fails(function () {
      rConstruct(function () { /* empty */ });
    });

    _export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
      construct: function construct(Target, args /* , newTarget */) {
        _aFunction(Target);
        _anObject(args);
        var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0: return new Target();
            case 1: return new Target(args[0]);
            case 2: return new Target(args[0], args[1]);
            case 3: return new Target(args[0], args[1], args[2]);
            case 4: return new Target(args[0], args[1], args[2], args[3]);
          }
          // w/o altered newTarget, lot of arguments case
          var $args = [null];
          $args.push.apply($args, args);
          return new (_bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return _isObject(result) ? result : instance;
      }
    });

    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)





    // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
    _export(_export.S + _export.F * _fails(function () {
      // eslint-disable-next-line no-undef
      Reflect.defineProperty(_objectDp.f({}, 1, { value: 1 }), 1, { value: 2 });
    }), 'Reflect', {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        _anObject(target);
        propertyKey = _toPrimitive(propertyKey, true);
        _anObject(attributes);
        try {
          _objectDp.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });

    // 26.1.4 Reflect.deleteProperty(target, propertyKey)

    var gOPD$3 = _objectGopd.f;


    _export(_export.S, 'Reflect', {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD$3(_anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
      }
    });

    // 26.1.5 Reflect.enumerate(target)


    var Enumerate = function (iterated) {
      this._t = _anObject(iterated); // target
      this._i = 0;                  // next index
      var keys = this._k = [];      // keys
      var key;
      for (key in iterated) keys.push(key);
    };
    _iterCreate(Enumerate, 'Object', function () {
      var that = this;
      var keys = that._k;
      var key;
      do {
        if (that._i >= keys.length) return { value: undefined, done: true };
      } while (!((key = keys[that._i++]) in that._t));
      return { value: key, done: false };
    });

    _export(_export.S, 'Reflect', {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });

    // 26.1.6 Reflect.get(target, propertyKey [, receiver])







    function get$1(target, propertyKey /* , receiver */) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var desc, proto;
      if (_anObject(target) === receiver) return target[propertyKey];
      if (desc = _objectGopd.f(target, propertyKey)) return _has(desc, 'value')
        ? desc.value
        : desc.get !== undefined
          ? desc.get.call(receiver)
          : undefined;
      if (_isObject(proto = _objectGpo(target))) return get$1(proto, propertyKey, receiver);
    }

    _export(_export.S, 'Reflect', { get: get$1 });

    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)




    _export(_export.S, 'Reflect', {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return _objectGopd.f(_anObject(target), propertyKey);
      }
    });

    // 26.1.8 Reflect.getPrototypeOf(target)




    _export(_export.S, 'Reflect', {
      getPrototypeOf: function getPrototypeOf(target) {
        return _objectGpo(_anObject(target));
      }
    });

    // 26.1.9 Reflect.has(target, propertyKey)


    _export(_export.S, 'Reflect', {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });

    // 26.1.10 Reflect.isExtensible(target)


    var $isExtensible = Object.isExtensible;

    _export(_export.S, 'Reflect', {
      isExtensible: function isExtensible(target) {
        _anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
      }
    });

    // all object keys, includes non-enumerable and symbols



    var Reflect$1 = _global.Reflect;
    var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
      var keys = _objectGopn.f(_anObject(it));
      var getSymbols = _objectGops.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };

    // 26.1.11 Reflect.ownKeys(target)


    _export(_export.S, 'Reflect', { ownKeys: _ownKeys });

    // 26.1.12 Reflect.preventExtensions(target)


    var $preventExtensions = Object.preventExtensions;

    _export(_export.S, 'Reflect', {
      preventExtensions: function preventExtensions(target) {
        _anObject(target);
        try {
          if ($preventExtensions) $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });

    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])









    function set(target, propertyKey, V /* , receiver */) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDesc = _objectGopd.f(_anObject(target), propertyKey);
      var existingDescriptor, proto;
      if (!ownDesc) {
        if (_isObject(proto = _objectGpo(target))) {
          return set(proto, propertyKey, V, receiver);
        }
        ownDesc = _propertyDesc(0);
      }
      if (_has(ownDesc, 'value')) {
        if (ownDesc.writable === false || !_isObject(receiver)) return false;
        if (existingDescriptor = _objectGopd.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
          existingDescriptor.value = V;
          _objectDp.f(receiver, propertyKey, existingDescriptor);
        } else _objectDp.f(receiver, propertyKey, _propertyDesc(0, V));
        return true;
      }
      return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }

    _export(_export.S, 'Reflect', { set: set });

    // 26.1.14 Reflect.setPrototypeOf(target, proto)



    if (_setProto) _export(_export.S, 'Reflect', {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        _setProto.check(target, proto);
        try {
          _setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });

    // https://github.com/tc39/Array.prototype.includes

    var $includes = _arrayIncludes(true);

    _export(_export.P, 'Array', {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    _addToUnscopables('includes');

    var includes = _core.Array.includes;

    // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray




    var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

    function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      var targetIndex = start;
      var sourceIndex = 0;
      var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
      var element, spreadable;

      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

          spreadable = false;
          if (_isObject(element)) {
            spreadable = element[IS_CONCAT_SPREADABLE];
            spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
          }

          if (spreadable && depth > 0) {
            targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
          } else {
            if (targetIndex >= 0x1fffffffffffff) throw TypeError();
            target[targetIndex] = element;
          }

          targetIndex++;
        }
        sourceIndex++;
      }
      return targetIndex;
    }

    var _flattenIntoArray = flattenIntoArray;

    // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap







    _export(_export.P, 'Array', {
      flatMap: function flatMap(callbackfn /* , thisArg */) {
        var O = _toObject(this);
        var sourceLen, A;
        _aFunction(callbackfn);
        sourceLen = _toLength(O.length);
        A = _arraySpeciesCreate(O, 0);
        _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
        return A;
      }
    });

    _addToUnscopables('flatMap');

    var flatMap = _core.Array.flatMap;

    // https://github.com/tc39/proposal-string-pad-start-end




    var _stringPad = function (that, maxLength, fillString, left) {
      var S = String(_defined(that));
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : String(fillString);
      var intMaxLength = _toLength(maxLength);
      if (intMaxLength <= stringLength || fillStr == '') return S;
      var fillLen = intMaxLength - stringLength;
      var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return left ? stringFiller + S : S + stringFiller;
    };

    // https://github.com/tc39/proposal-string-pad-start-end




    // https://github.com/zloirock/core-js/issues/280
    var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

    _export(_export.P + _export.F * WEBKIT_BUG, 'String', {
      padStart: function padStart(maxLength /* , fillString = ' ' */) {
        return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
      }
    });

    var padStart = _core.String.padStart;

    // https://github.com/tc39/proposal-string-pad-start-end




    // https://github.com/zloirock/core-js/issues/280
    var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

    _export(_export.P + _export.F * WEBKIT_BUG$1, 'String', {
      padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
        return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
      }
    });

    var padEnd = _core.String.padEnd;

    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
    _stringTrim('trimLeft', function ($trim) {
      return function trimLeft() {
        return $trim(this, 1);
      };
    }, 'trimStart');

    var trimStart = _core.String.trimLeft;

    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
    _stringTrim('trimRight', function ($trim) {
      return function trimRight() {
        return $trim(this, 2);
      };
    }, 'trimEnd');

    var trimEnd = _core.String.trimRight;

    _wksDefine('asyncIterator');

    var asyncIterator = _wksExt.f('asyncIterator');

    // https://github.com/tc39/proposal-object-getownpropertydescriptors






    _export(_export.S, 'Object', {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = _toIobject(object);
        var getDesc = _objectGopd.f;
        var keys = _ownKeys(O);
        var result = {};
        var i = 0;
        var key, desc;
        while (keys.length > i) {
          desc = getDesc(O, key = keys[i++]);
          if (desc !== undefined) _createProperty(result, key, desc);
        }
        return result;
      }
    });

    var getOwnPropertyDescriptors = _core.Object.getOwnPropertyDescriptors;

    var isEnum$1 = _objectPie.f;
    var _objectToArray = function (isEntries) {
      return function (it) {
        var O = _toIobject(it);
        var keys = _objectKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) if (isEnum$1.call(O, key = keys[i++])) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        } return result;
      };
    };

    // https://github.com/tc39/proposal-object-values-entries

    var $values = _objectToArray(false);

    _export(_export.S, 'Object', {
      values: function values(it) {
        return $values(it);
      }
    });

    var values = _core.Object.values;

    // https://github.com/tc39/proposal-object-values-entries

    var $entries = _objectToArray(true);

    _export(_export.S, 'Object', {
      entries: function entries(it) {
        return $entries(it);
      }
    });

    var entries = _core.Object.entries;

    _export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
      var C = _speciesConstructor(this, _core.Promise || _global.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(
        isFunction ? function (x) {
          return _promiseResolve(C, onFinally()).then(function () { return x; });
        } : onFinally,
        isFunction ? function (e) {
          return _promiseResolve(C, onFinally()).then(function () { throw e; });
        } : onFinally
      );
    } });

    var _finally = _core.Promise['finally'];

    // ie9- setTimeout & setInterval additional parameters fix



    var slice = [].slice;
    var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check
    var wrap$1 = function (set) {
      return function (fn, time /* , ...args */) {
        var boundArgs = arguments.length > 2;
        var args = boundArgs ? slice.call(arguments, 2) : false;
        return set(boundArgs ? function () {
          // eslint-disable-next-line no-new-func
          (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
        } : fn, time);
      };
    };
    _export(_export.G + _export.B + _export.F * MSIE, {
      setTimeout: wrap$1(_global.setTimeout),
      setInterval: wrap$1(_global.setInterval)
    });

    _export(_export.G + _export.B, {
      setImmediate: _task.set,
      clearImmediate: _task.clear
    });

    var ITERATOR$4 = _wks('iterator');
    var TO_STRING_TAG = _wks('toStringTag');
    var ArrayValues = _iterators.Array;

    var DOMIterables = {
      CSSRuleList: true, // TODO: Not spec compliant, should be false.
      CSSStyleDeclaration: false,
      CSSValueList: false,
      ClientRectList: false,
      DOMRectList: false,
      DOMStringList: false,
      DOMTokenList: true,
      DataTransferItemList: false,
      FileList: false,
      HTMLAllCollection: false,
      HTMLCollection: false,
      HTMLFormElement: false,
      HTMLSelectElement: false,
      MediaList: true, // TODO: Not spec compliant, should be false.
      MimeTypeArray: false,
      NamedNodeMap: false,
      NodeList: true,
      PaintRequestList: false,
      Plugin: false,
      PluginArray: false,
      SVGLengthList: false,
      SVGNumberList: false,
      SVGPathSegList: false,
      SVGPointList: false,
      SVGStringList: false,
      SVGTransformList: false,
      SourceBufferList: false,
      StyleSheetList: true, // TODO: Not spec compliant, should be false.
      TextTrackCueList: false,
      TextTrackList: false,
      TouchList: false
    };

    for (var collections = _objectKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
      var NAME$1 = collections[i$2];
      var explicit = DOMIterables[NAME$1];
      var Collection = _global[NAME$1];
      var proto$3 = Collection && Collection.prototype;
      var key$1;
      if (proto$3) {
        if (!proto$3[ITERATOR$4]) _hide(proto$3, ITERATOR$4, ArrayValues);
        if (!proto$3[TO_STRING_TAG]) _hide(proto$3, TO_STRING_TAG, NAME$1);
        _iterators[NAME$1] = ArrayValues;
        if (explicit) for (key$1 in es6_array_iterator) if (!proto$3[key$1]) _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
      }
    }

    var runtime_1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var runtime = (function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);

        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);

        return generator;
      }
      exports.wrap = wrap;

      // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";

      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {};

      // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}

      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {};
      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype =
        Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] =
        GeneratorFunction.displayName = "GeneratorFunction";

      // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          prototype[method] = function(arg) {
            return this._invoke(method, arg);
          };
        });
      }

      exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor
          ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction"
          : false;
      };

      exports.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };

      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      exports.awrap = function(arg) {
        return { __await: arg };
      };

      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value &&
                typeof value === "object" &&
                hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function(value) {
                invoke("next", value, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return Promise.resolve(value).then(function(unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise =
            // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
        }

        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };
      exports.AsyncIterator = AsyncIterator;

      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      exports.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList)
        );

        return exports.isGeneratorFunction(outerFn)
          ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;

        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }

            // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;

            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);

            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;

            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done
                ? GenStateCompleted
                : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };

            } else if (record.type === "throw") {
              state = GenStateCompleted;
              // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }

      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (! info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value;

          // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc;

          // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }

        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        }

        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
      }

      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp);

      Gp[toStringTagSymbol] = "Generator";

      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      Gp[iteratorSymbol] = function() {
        return this;
      };

      Gp.toString = function() {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();

        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }

          // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1, next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined;
              next.done = true;

              return next;
            };

            return next.next = next;
          }
        }

        // Return an iterator with no values.
        return { next: doneResult };
      }
      exports.values = values;

      function doneResult() {
        return { value: undefined, done: true };
      }

      Context.prototype = {
        constructor: Context,

        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;

          this.method = "next";
          this.arg = undefined;

          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },

        stop: function() {
          this.done = true;

          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },

        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }

            return !! caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }

              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }

              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }

              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },

        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev &&
                hasOwn.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry &&
              (type === "break" ||
               type === "continue") &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },

        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" ||
              record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },

        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },

        "catch": function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }

          // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error("illegal catch attempt");
        },

        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }

          return ContinueSentinel;
        }
      };

      // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.
      return exports;

    }(
      // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      module.exports
    ));

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
    });

    var _global$1 = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
      ? window : typeof self != 'undefined' && self.Math == Math ? self
      // eslint-disable-next-line no-new-func
      : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    });

    var _core$1 = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.6.5' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    });
    var _core_1$1 = _core$1.version;

    var _aFunction$1 = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

    // optional / simple context binding

    var _ctx$1 = function (fn, that, length) {
      _aFunction$1(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

    var _isObject$1 = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    var _anObject$1 = function (it) {
      if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

    var _fails$1 = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

    // Thank's IE8 for his funny defineProperty
    var _descriptors$1 = !_fails$1(function () {
      return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });

    var document$3 = _global$1.document;
    // typeof document.createElement is 'object' in old IE
    var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);
    var _domCreate$1 = function (it) {
      return is$1 ? document$3.createElement(it) : {};
    };

    var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
      return Object.defineProperty(_domCreate$1('div'), 'a', { get: function () { return 7; } }).a != 7;
    });

    // 7.1.1 ToPrimitive(input [, PreferredType])

    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var _toPrimitive$1 = function (it, S) {
      if (!_isObject$1(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    var dP$6 = Object.defineProperty;

    var f$8 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      _anObject$1(O);
      P = _toPrimitive$1(P, true);
      _anObject$1(Attributes);
      if (_ie8DomDefine$1) try {
        return dP$6(O, P, Attributes);
      } catch (e) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var _objectDp$1 = {
    	f: f$8
    };

    var _propertyDesc$1 = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var _hide$1 = _descriptors$1 ? function (object, key, value) {
      return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var hasOwnProperty$1 = {}.hasOwnProperty;
    var _has$1 = function (it, key) {
      return hasOwnProperty$1.call(it, key);
    };

    var PROTOTYPE$3 = 'prototype';

    var $export$1 = function (type, name, source) {
      var IS_FORCED = type & $export$1.F;
      var IS_GLOBAL = type & $export$1.G;
      var IS_STATIC = type & $export$1.S;
      var IS_PROTO = type & $export$1.P;
      var IS_BIND = type & $export$1.B;
      var IS_WRAP = type & $export$1.W;
      var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
      var expProto = exports[PROTOTYPE$3];
      var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$3];
      var key, own, out;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && _has$1(exports, key)) continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
        // bind timers to global for call from export context
        : IS_BIND && own ? _ctx$1(out, _global$1)
        // wrap global constructors for prevent change them in library
        : IS_WRAP && target[key] == out ? (function (C) {
          var F = function (a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0: return new C();
                case 1: return new C(a);
                case 2: return new C(a, b);
              } return new C(a, b, c);
            } return C.apply(this, arguments);
          };
          F[PROTOTYPE$3] = C[PROTOTYPE$3];
          return F;
        // make static versions for prototype methods
        })(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
          (exports.virtual || (exports.virtual = {}))[key] = out;
          // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
          if (type & $export$1.R && expProto && !expProto[key]) _hide$1(expProto, key, out);
        }
      }
    };
    // type bitmap
    $export$1.F = 1;   // forced
    $export$1.G = 2;   // global
    $export$1.S = 4;   // static
    $export$1.P = 8;   // proto
    $export$1.B = 16;  // bind
    $export$1.W = 32;  // wrap
    $export$1.U = 64;  // safe
    $export$1.R = 128; // real proto method for `library`
    var _export$1 = $export$1;

    // https://github.com/tc39/proposal-global


    _export$1(_export$1.G, { global: _global$1 });

    var global$1 = _core$1.global;

    var lib = createCommonjsModule(function (module) {



    function _global() {
      const data = _interopRequireDefault(global$1);

      _global = function () {
        return data;
      };

      return data;
    }

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    if (_global().default._babelPolyfill && typeof console !== "undefined" && console.warn) {
      console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
    }

    _global().default._babelPolyfill = true;
    });

    unwrapExports(lib);

    let config;

    class Dispatcher {

        static config(cfg) {
            if (!cfg) return;
            if (config) {
                throw new Error('Já está configurado');
            }
            config = cfg;
        }

        // eslint-disable-next-line class-methods-use-this
        doRequest(xhr, url, type, param = undefined) {
            return new Promise((resolve, reject) => {
                xhr.open(type, config.baseURL + url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('SessionID', config.sessionID);
                xhr.onload = function() {
                    if (this.status >= 200 && this.status < 300) {
                        resolve(JSON.parse(this.response));
                    } else {
                        // eslint-disable-next-line prefer-promise-reject-errors
                        reject({
                            status: this.status,
                            statusText: this.statusText
                        });
                    }
                };
                xhr.send(param);
            });
        }

        async doGet(url) {
            let xhr = new XMLHttpRequest();
            return await this.doRequest(xhr, url, 'GET');
        }
        async doPost(url, param) {
            let xhr = new XMLHttpRequest();
            return await this.doRequest(xhr, url, 'POST', JSON.stringify(param));
        }
        doPut(url, param) {
            let xhr = new XMLHttpRequest();
            return this.doRequest(xhr, url, 'PUT', JSON.stringify(param));
        }
        doDelete(url) {
            let xhr = new XMLHttpRequest();
            return this.doRequest(xhr, url, 'DELETE');
        }
    }

    /**
     * Criação das instâncias do Axios.
     */
    let userId = process.env.USER_ID !== undefined ? `usuario|bc|${process.env.USER_ID}` :
        `usuario|bc|${parent.loginClientDTO.loginId}`;
    let sessionId = process.env.SESSION_ID ? process.env.SESSION_ID : parent.loginClientDTO.sessionId;
    let idAplicacao = 'aplicacao|bc|140';
    let pathId = 10;

    Dispatcher.config({
        baseURL: '/bc/services/',
        sessionID: sessionId
    });

    const dispatcher = new Dispatcher();

    let getProfileParams = {
        ui: 'cnfg_usua_app_pes',
        filter: {
            AND: [
                {
                    AND: [
                        {
                            oper: 'EQUAL',
                            attr: 'cnfg_usua_app_pes.aplicacao_id_aplicacao.id_aplicacao',
                            val: [idAplicacao]
                        },
                        {
                            oper: 'EQUAL',
                            attr: 'cnfg_usua_app_pes.usuario_id_pessoa._id',
                            val: [userId]
                        }
                    ]
                }
            ]
        },
        sort: {
            descricao: 'ASC'
        },
        attribs: [
            'id_cnfg_usua_app_pes',
            'descricao',
            'flg_default',
            'id_tipo_pesquisa',
            'aplicacao_id_aplicacao.id_aplicacao',
            'xml_config',
            'data_ultima_alteracao'
        ],
        offset: 0,
        limit: 1000
    };

    let include = {
        oper: 'EQUAL',
        attr: 'cnfg_usua_app_pes.flg_default',
        val: ['S']
    };

    var bcService = {
        getLocale() {
            return navigator.language.slice(0, 2);
        },
        async getLabelUIs(uis) {
            const locale = this.getLocale();
            const url = `metadata?loc=${locale}`;
            const allMetaUis = await dispatcher.doGet(url);
            return !uis ? [] : allMetaUis.filter(metaUi => uis.indexOf(metaUi.name) !== -1);
        },

        async getAttribsFromUI(logicName) {
            const locale = this.getLocale();
            // eslint-disable-next-line
            const url = `metadata/${logicName}/attributes?fields=label,type&flags=filterable,visible&loc=${locale}`;
            return await dispatcher.doGet(url);
        },

        getOperators(uiName, attribName) {
            return dispatcher.doGet(`metadata/${uiName}/${attribName}/operators?loc=pt`);
        },

        async getSourcesForUI(logicName) {
            return await dispatcher
                .doGet(`metadata/${logicName}/sources?loc=${this.getLocale()}`);
        },

        getAutocompleteFieldoptions() {
            return [{name: 'teste'}, {name: 'abc'}, {name: 'def'}, {name: 'aab'}, {name: 'bbe'}];
            // return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
        },

        getTipoSelecaoOptions() {
            return [{id: 1, name: 'Sem campo'}, {id: 2, name: 'TextCombo'}, {id: 3, name: 'TextField'}];
            // return dispatcher.doGet(`${uiName}/${attribName}/operators?loc=pt`);
        },

        async getSearchProfiles() {
            return await dispatcher.doPost('objectQuery', getProfileParams);
        },

        async saveSearchProfiles(obj, param = null) {
            if (param) {
                obj.descricao = param.descricao;
                delete obj.flg_default;
                delete obj.id_cnfg_usua_app_pes;
                obj['_diretorios'] = {
                    add: [pathId]
                };
                obj.id_tipo_pesquisa = 'Perfil de pesquisa avançado de dados coletados';
            }
            obj.usuario_id_pessoa = {
                id_usuario: userId
            };
            let json = {
                cnfg_usua_app_pes: [
                    obj
                ]
            };
            return await dispatcher.doPost('persistence', json);
        },

        async renameSearchProfiles(param, name) {
            let obj = {
                cnfg_usua_app_pes: [
                    {
                        id_cnfg_usua_app_pes: param.id_cnfg_usua_app_pes,
                        descricao: name,
                        data_ultima_alteracao: param.data_ultima_alteracao,
                        _diretorios: {
                            add: [pathId]
                        }
                    }
                ]
            };
            return await dispatcher.doPut('persistence', obj);
        },

        async editProfile(obj) {
            let json = {
                cnfg_usua_app_pes: [
                    {
                        id_cnfg_usua_app_pes: obj.id_cnfg_usua_app_pes,
                        descricao: obj.descricao,
                        data_ultima_alteracao: obj.data_ultima_alteracao,
                        xml_config: obj.xml_config,
                        _diretorios: {
                            add: [pathId]
                        }
                    }
                ]
            };
            return await dispatcher.doPut('persistence', json);
        },

        async deleteSearchProfiles(param) {
            await dispatcher.doDelete(`delete/cnfg_usua_app_pes/${param.id_cnfg_usua_app_pes}`);
        },

        async setDefaultProfile(param) {
            await this.getDefaultsAndSetAsNotDefault();
            let obj = {
                cnfg_usua_app_pes: [
                    {
                        id_cnfg_usua_app_pes: param.id_cnfg_usua_app_pes,
                        descricao: param.descricao,
                        data_ultima_alteracao: param.data_ultima_alteracao,
                        flg_default: 'S',
                        _diretorios: {
                            add: [pathId]
                        }
                    }
                ]
            };
            await dispatcher.doPut('persistence', obj);
        },

        async getDefaultsAndSetAsNotDefault() {
            let count = 0;
            let params = JSON.parse(JSON.stringify(getProfileParams));
            params.filter.AND[0].AND.push(include);
            let response = await dispatcher.doPost('objectQuery', params);
            let obj = {
                cnfg_usua_app_pes: [
                ]
            };
            if (response.uis.length) {
                response.uis.forEach(ui => {
                    if (ui.flg_default.valor === 'Sim') {
                        obj = this.resetDefaultValue(obj, ui);
                        count += 1;
                    }
                });
            }
            if (count) {
                await dispatcher.doPut('persistence', obj);
            }
            return;
        },

        resetDefaultValue(obj, ui) {
            obj.cnfg_usua_app_pes.push(
                {
                    id_cnfg_usua_app_pes: ui.id_cnfg_usua_app_pes,
                    descricao: ui.descricao,
                    data_ultima_alteracao: ui.data_ultima_alteracao,
                    flg_default: 'N',
                    _diretorios: {
                        add: [pathId]
                    }
                }
            );
            return obj;
        }

    };

    //

    var script$5 = {
        name: 'bc-filter-operator',
        mixins: [i18n.mixin],
        props: {
            tipoAttrib: {
                type: String
            },
            operador: {
                id: null
            },
            uiName: String,
            attribName: String
        },
        components: {
            bcService
        },
        data() {
            return {
                operator: {
                    name: null
                },
                metaOperators: [],
                dateOption: {},
                show: true
            };
        },
        computed: {
            dynamicComponentDate() {
                switch (this.tipoAttrib) {
                    case '_data':
                        this.show = false;
                        return dateOptions;
                    default:
                        this.show = true;
                        return null;
                }
            }
        },
        created() {
            this.getOperators();
        },
        methods: {
            fireOperatorSelected(e) {
                this.operator = this.metaOperators[e.target.value];
                this.$emit('meta-operator-selected', this.operator);
                this.$forceUpdate();
            },
            async getOperators() {
                this.metaOperators = await bcService.getOperators(this.uiName, this.attribName);
                this.metaOperators.forEach(op => {
                    op.name = op.name.toUpperCase();
                });
            },
            fireOperatorRemoved() {
                this.$emit('meta-operator-removed');
            },
            dateOptionSelected(option) {
                this.show = true;
                this.dateOption = option;
                if (option.id === 2) {
                    this.metaOperators = metadata.operators['ano'];
                } else {
                    this.getOperators();
                }
                this.operator = { name: null };
                this.$emit('data-option-selected', option);
                this.$forceUpdate();
            },
            repassMetaFieldSelected(param) {
                this.$emit('meta-field-selected', param);
            },
            attribChanged() {
                this.getOperators();
                this.operator = { name: null };
                this.$forceUpdate();
            }
        },
        watch: {
            operador() {
                if (this.operador) {
                    this.operator = this.operador;
                }
            }
        }
    };

    /* script */
    const __vue_script__$5 = script$5;

    /* template */
    var __vue_render__$5 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-filter-operator" }, [
          _c(
            "div",
            { staticClass: "options-container" },
            [
              _c(_vm.dynamicComponentDate, {
                tag: "component",
                staticClass: "date-type",
                on: { "data-option-selected": _vm.dateOptionSelected }
              }),
              _vm._v(" "),
              _vm.show
                ? _c(
                    "select",
                    {
                      staticClass: "inp",
                      on: { change: _vm.fireOperatorSelected }
                    },
                    [
                      _c(
                        "option",
                        {
                          attrs: { value: "", disabled: "" },
                          domProps: { selected: _vm.operator.name === null }
                        },
                        [_vm._v(_vm._s(_vm._f("i18n")("select")))]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.metaOperators, function(opt, idx) {
                        return _c(
                          "option",
                          {
                            key: idx,
                            domProps: {
                              value: idx,
                              selected: _vm.operator.name === opt.name
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(opt.name) +
                                "\n                "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.operator && !_vm.operator.name
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-filter",
                      on: { click: _vm.fireOperatorRemoved }
                    },
                    [_c("i", { staticClass: "mdi mdi-close" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._t("field")
            ],
            2
          )
        ])
      ])
    };
    var __vue_staticRenderFns__$5 = [];
    __vue_render__$5._withStripped = true;

      /* style */
      const __vue_inject_styles__$5 = function (inject) {
        if (!inject) return
        inject("data-v-d0b28f3a_0", { source: ".btn-filter-icon[data-v-d0b28f3a] {\n  padding: .1em;\n}\n.btn-filter[data-v-d0b28f3a] {\n  padding: .5em;\n}\n.bc-filter-operator[data-v-d0b28f3a] {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n.bc-filter-operator .options-container[data-v-d0b28f3a] {\n    display: inline-flex;\n    align-items: center;\n}\n.bc-filter-operator .options-container .date-type[data-v-d0b28f3a] {\n      margin-right: 5px;\n      margin-left: -5px;\n}\n\n/*# sourceMappingURL=bc-filter-operators.vue.map */", map: {"version":3,"sources":["bc-filter-operators.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-filter-operators.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;EACA,gBAAA;AAAA;AAHA;IAKA,oBAAA;IACA,mBAAA;AAAA;AANA;MAQA,iBAAA;MACA,iBAAA;AAAA;;ADIA,kDAAkD","file":"bc-filter-operators.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-filter-operator {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px; }\n  .bc-filter-operator .options-container {\n    display: inline-flex;\n    align-items: center; }\n    .bc-filter-operator .options-container .date-type {\n      margin-right: 5px;\n      margin-left: -5px; }\n\n/*# sourceMappingURL=bc-filter-operators.vue.map */","<style scoped lang=\"scss\">\n    @import \"styles/variables\";\n    @import \"styles/buttons\";\n\n    .bc-filter-operator {\n        display: inline-flex;\n        flex-direction: column;\n        margin-left: 5px;\n        .options-container {\n            display: inline-flex;\n            align-items: center;\n            .date-type {\n                margin-right: 5px;\n                margin-left: -5px;\n            }\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-filter-operator\">\n            <div class=\"options-container\">\n                <component class=\"date-type\" :is=\"dynamicComponentDate\" @data-option-selected=\"dateOptionSelected\"></component>\n                <select class=\"inp\" @change=\"fireOperatorSelected\" v-if=\"show\">\n                    <option value=\"\" disabled :selected=\"operator.name === null\">{{'select' | i18n}}</option>\n                    <option v-for=\"(opt, idx) in metaOperators\" :key=\"idx\" :value=\"idx\"\n                        :selected=\"operator.name === opt.name\">\n                        {{opt.name}}\n                    </option>\n                </select>\n                <button class=\"btn btn-filter\" @click=\"fireOperatorRemoved\"\n                    v-if=\"operator && !operator.name\">\n                    <i class=\"mdi mdi-close\"></i>\n                </button>\n                <slot name=\"field\"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    import metadata from './metadata.json';\n    import i18n from './utils/i18n.js';\n    import dateOptions from './bc-field-options/bc-date-options.vue';\n    import bcService from './services/bc-services.js';\n\n    export default {\n        name: 'bc-filter-operator',\n        mixins: [i18n.mixin],\n        props: {\n            tipoAttrib: {\n                type: String\n            },\n            operador: {\n                id: null\n            },\n            uiName: String,\n            attribName: String\n        },\n        components: {\n            bcService\n        },\n        data() {\n            return {\n                operator: {\n                    name: null\n                },\n                metaOperators: [],\n                dateOption: {},\n                show: true\n            };\n        },\n        computed: {\n            dynamicComponentDate() {\n                switch (this.tipoAttrib) {\n                    case '_data':\n                        this.show = false;\n                        return dateOptions;\n                    default:\n                        this.show = true;\n                        return null;\n                }\n            }\n        },\n        created() {\n            this.getOperators();\n        },\n        methods: {\n            fireOperatorSelected(e) {\n                this.operator = this.metaOperators[e.target.value];\n                this.$emit('meta-operator-selected', this.operator);\n                this.$forceUpdate();\n            },\n            async getOperators() {\n                this.metaOperators = await bcService.getOperators(this.uiName, this.attribName);\n                this.metaOperators.forEach(op => {\n                    op.name = op.name.toUpperCase();\n                });\n            },\n            fireOperatorRemoved() {\n                this.$emit('meta-operator-removed');\n            },\n            dateOptionSelected(option) {\n                this.show = true;\n                this.dateOption = option;\n                if (option.id === 2) {\n                    this.metaOperators = metadata.operators['ano'];\n                } else {\n                    this.getOperators();\n                }\n                this.operator = { name: null };\n                this.$emit('data-option-selected', option);\n                this.$forceUpdate();\n            },\n            repassMetaFieldSelected(param) {\n                this.$emit('meta-field-selected', param);\n            },\n            attribChanged() {\n                this.getOperators();\n                this.operator = { name: null };\n                this.$forceUpdate();\n            }\n        },\n        watch: {\n            operador() {\n                if (this.operador) {\n                    this.operator = this.operador;\n                }\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$5 = "data-v-d0b28f3a";
      /* module identifier */
      const __vue_module_identifier__$5 = undefined;
      /* functional template */
      const __vue_is_functional_template__$5 = false;
      /* style inject SSR */
      

      
      var BcFilterOperators = normalizeComponent_1(
        { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
        __vue_inject_styles__$5,
        __vue_script__$5,
        __vue_scope_id__$5,
        __vue_is_functional_template__$5,
        __vue_module_identifier__$5,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script$6 = {
        name: 'bc-text-field',
        data() {
            return {
                field: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.field]);
            }
        }
    };

    /* script */
    const __vue_script__$6 = script$6;

    /* template */
    var __vue_render__$6 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-text-field" }, [
          _c("div", { staticClass: "options-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field,
                  expression: "field"
                }
              ],
              staticClass: "inp",
              attrs: { type: "text" },
              domProps: { value: _vm.field },
              on: {
                change: _vm.change,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.field = $event.target.value;
                }
              }
            })
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$6 = [];
    __vue_render__$6._withStripped = true;

      /* style */
      const __vue_inject_styles__$6 = function (inject) {
        if (!inject) return
        inject("data-v-0c7491e9_0", { source: ".btn-filter-icon[data-v-0c7491e9] {\n  padding: .1em;\n}\n.btn-filter[data-v-0c7491e9] {\n  padding: .5em;\n}\n.bc-text-field[data-v-0c7491e9] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.options-container[data-v-0c7491e9] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-text-field.vue.map */", map: {"version":3,"sources":["bc-text-field.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-text-field.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAEA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADIA,4CAA4C","file":"bc-text-field.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-text-field {\n  display: inline-flex;\n  flex-direction: column; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-text-field.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-text-field {\n        display: inline-flex;\n        flex-direction: column;\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-text-field\">\n            <div class=\"options-container\">\n                <input class=\"inp\" type=\"text\" v-model=\"field\" @change=\"change\">\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'bc-text-field',\n        data() {\n            return {\n                field: ''\n            };\n        },\n        methods: {\n            change() {\n                this.$emit('change', [this.field]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$6 = "data-v-0c7491e9";
      /* module identifier */
      const __vue_module_identifier__$6 = undefined;
      /* functional template */
      const __vue_is_functional_template__$6 = false;
      /* style inject SSR */
      

      
      var textField = normalizeComponent_1(
        { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
        __vue_inject_styles__$6,
        __vue_script__$6,
        __vue_scope_id__$6,
        __vue_is_functional_template__$6,
        __vue_module_identifier__$6,
        browser,
        undefined
      );

    //

    var script$7 = {
        name: 'bc-text-autocomplete-field',
        data() {
            return {
                field: '',
                data: [],
                options: [],
                arrowCounter: -1,
                selectedItem: null
            };
        },
        created() {
            // ajustar request (está retornando dados mocados)
            this.data = bcService.getAutocompleteFieldoptions();
        },
        methods: {
            filterOptions() {
                if (this.field.trim().length === 0) {
                    this.options = [];
                    return null;
                }
                return this.options = this.data.filter((obj) => {
                    return obj.name.toLowerCase().includes(this.field.toLowerCase());
                });
            },
            selected(idx) {
                if (!idx) {
                    idx = this.arrowCounter;
                }
                this.selectedItem = this.options[idx];
                this.field = this.selectedItem.name;
                this.options = [];
                this.arrowCounter = -1;
            },
            onArrowDown() {
                if (this.arrowCounter < this.options.length - 1) {
                    this.arrowCounter = this.arrowCounter + 1;
                }
            },
            onArrowUp() {
                if (this.arrowCounter > 0) {
                    this.arrowCounter = this.arrowCounter - 1;
                }
            },
            arrow(idx) {
                this.arrowCounter = idx;
            }
        },
        watch: {
            field() {
                this.$emit('change', [this.field]);
            }
        }

    };

    /* script */
    const __vue_script__$7 = script$7;

    /* template */
    var __vue_render__$7 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-text-autocomplete-field" }, [
          _c("div", { staticClass: "options-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field,
                  expression: "field"
                }
              ],
              staticClass: "inp",
              attrs: { type: "text" },
              domProps: { value: _vm.field },
              on: {
                keyup: [
                  _vm.filterOptions,
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "down", 40, $event.key, [
                        "Down",
                        "ArrowDown"
                      ])
                    ) {
                      return null
                    }
                    return _vm.onArrowDown($event)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "up", 38, $event.key, [
                        "Up",
                        "ArrowUp"
                      ])
                    ) {
                      return null
                    }
                    return _vm.onArrowUp($event)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.selected()
                  }
                ],
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.field = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _vm.options.length
              ? _c(
                  "ul",
                  _vm._l(_vm.options, function(opt, idx) {
                    return _c(
                      "li",
                      {
                        key: idx,
                        staticClass: "autocomplete-result",
                        class: { "is-active": idx === _vm.arrowCounter },
                        on: {
                          mouseover: function($event) {
                            return _vm.arrow(idx)
                          },
                          click: function($event) {
                            return _vm.selected(idx)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(opt.name) + " ")]
                    )
                  }),
                  0
                )
              : _vm._e()
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$7 = [];
    __vue_render__$7._withStripped = true;

      /* style */
      const __vue_inject_styles__$7 = function (inject) {
        if (!inject) return
        inject("data-v-1cf8cb45_0", { source: ".btn-filter-icon[data-v-1cf8cb45] {\n  padding: .1em;\n}\n.btn-filter[data-v-1cf8cb45] {\n  padding: .5em;\n}\n.bc-text-autocomplete-field[data-v-1cf8cb45] {\n  display: inline;\n  flex-direction: column;\n}\n.bc-text-autocomplete-field .options-container[data-v-1cf8cb45] {\n    align-items: center;\n    position: relative;\n}\n.bc-text-autocomplete-field .options-container ul[data-v-1cf8cb45] {\n      padding: 0;\n      position: absolute;\n      margin: 0;\n      border: 1px solid #eeeeee;\n      max-height: 100px;\n      color: #000;\n      overflow: auto;\n      width: 100%;\n      display: block;\n      z-index: 2;\n      background: #fff;\n}\n.bc-text-autocomplete-field .options-container ul .autocomplete-result[data-v-1cf8cb45] {\n        list-style: none;\n        text-align: left;\n        padding: 4px 2px;\n        cursor: pointer;\n}\n.bc-text-autocomplete-field .options-container ul .autocomplete-result.is-active[data-v-1cf8cb45],\n      .bc-text-autocomplete-field .options-container ul .autocomplete-result[data-v-1cf8cb45]:hover {\n        background-color: #333;\n        color: #fff;\n}\n\n/*# sourceMappingURL=bc-text-autocomplete.vue.map */", map: {"version":3,"sources":["bc-text-autocomplete.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-text-autocomplete.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,eAAA;EACA,sBAAA;AAAA;AAFA;IAIA,mBAAA;IACA,kBAAA;AAAA;AALA;MAOA,UAAA;MACA,kBAAA;MACA,SAAA;MACA,yBAAA;MACA,iBAAA;MACA,WAAA;MACA,cAAA;MACA,WAAA;MACA,cAAA;MACA,UAAA;MACA,gBAAA;AAAA;AAjBA;QAmBA,gBAAA;QACA,gBAAA;QACA,gBAAA;QACA,eAAA;AAAA;AAtBA;;QA0BA,sBAAA;QACA,WAAA;AAAA;;ADGA,mDAAmD","file":"bc-text-autocomplete.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-text-autocomplete-field {\n  display: inline;\n  flex-direction: column; }\n  .bc-text-autocomplete-field .options-container {\n    align-items: center;\n    position: relative; }\n    .bc-text-autocomplete-field .options-container ul {\n      padding: 0;\n      position: absolute;\n      margin: 0;\n      border: 1px solid #eeeeee;\n      max-height: 100px;\n      color: #000;\n      overflow: auto;\n      width: 100%;\n      display: block;\n      z-index: 2;\n      background: #fff; }\n      .bc-text-autocomplete-field .options-container ul .autocomplete-result {\n        list-style: none;\n        text-align: left;\n        padding: 4px 2px;\n        cursor: pointer; }\n      .bc-text-autocomplete-field .options-container ul .autocomplete-result.is-active,\n      .bc-text-autocomplete-field .options-container ul .autocomplete-result:hover {\n        background-color: #333;\n        color: #fff; }\n\n/*# sourceMappingURL=bc-text-autocomplete.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-text-autocomplete-field {\n        display: inline;\n        flex-direction: column;\n        .options-container {\n            align-items: center;\n            position: relative;\n            ul {\n                padding: 0;\n                position: absolute;\n                margin: 0;\n                border: 1px solid #eeeeee;\n                max-height: 100px;\n                color: #000;\n                overflow: auto;\n                width: 100%;\n                display: block;\n                z-index: 2;\n                background:  #fff;\n                .autocomplete-result {\n                    list-style: none;\n                    text-align: left;\n                    padding: 4px 2px;\n                    cursor: pointer;\n                }\n                .autocomplete-result.is-active,\n                .autocomplete-result:hover {\n                    background-color: #333;\n                    color: #fff;\n                }\n            }\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-text-autocomplete-field\">\n            <div class=\"options-container\">\n                <input class=\"inp\" type=\"text\" v-model=\"field\" @keyup=\"filterOptions\"\n                @keyup.down=\"onArrowDown\" @keyup.up=\"onArrowUp\" @keyup.enter=\"selected()\">\n                <ul v-if=\"options.length\">\n                    <li v-for=\"(opt, idx) in options\" :key=\"idx\"\n                    :class=\"{ 'is-active': idx === arrowCounter }\" @mouseover=\"arrow(idx)\"\n                    class=\"autocomplete-result\" @click=\"selected(idx)\"> {{ opt.name }} </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    import bcService from '../services/bc-services.js';\n\n    export default {\n        name: 'bc-text-autocomplete-field',\n        data() {\n            return {\n                field: '',\n                data: [],\n                options: [],\n                arrowCounter: -1,\n                selectedItem: null\n            };\n        },\n        created() {\n            // ajustar request (está retornando dados mocados)\n            this.data = bcService.getAutocompleteFieldoptions();\n        },\n        methods: {\n            filterOptions() {\n                if (this.field.trim().length === 0) {\n                    this.options = [];\n                    return null;\n                }\n                return this.options = this.data.filter((obj) => {\n                    return obj.name.toLowerCase().includes(this.field.toLowerCase());\n                });\n            },\n            selected(idx) {\n                if (!idx) {\n                    idx = this.arrowCounter;\n                }\n                this.selectedItem = this.options[idx];\n                this.field = this.selectedItem.name;\n                this.options = [];\n                this.arrowCounter = -1;\n            },\n            onArrowDown() {\n                if (this.arrowCounter < this.options.length - 1) {\n                    this.arrowCounter = this.arrowCounter + 1;\n                }\n            },\n            onArrowUp() {\n                if (this.arrowCounter > 0) {\n                    this.arrowCounter = this.arrowCounter - 1;\n                }\n            },\n            arrow(idx) {\n                this.arrowCounter = idx;\n            }\n        },\n        watch: {\n            field() {\n                this.$emit('change', [this.field]);\n            }\n        }\n\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$7 = "data-v-1cf8cb45";
      /* module identifier */
      const __vue_module_identifier__$7 = undefined;
      /* functional template */
      const __vue_is_functional_template__$7 = false;
      /* style inject SSR */
      

      
      var textAutocompleteField = normalizeComponent_1(
        { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
        __vue_inject_styles__$7,
        __vue_script__$7,
        __vue_scope_id__$7,
        __vue_is_functional_template__$7,
        __vue_module_identifier__$7,
        browser,
        undefined
      );

    //

    var script$8 = {
        name: 'bc-text-combo',
        data() {
            return {
                selectedOption: {
                    id: null
                },
                options: []
            };
        },
        created() {
            // ajustar request (está retornando dados mocados)
            this.options = bcService.getTipoSelecaoOptions();
        },
        methods: {
            change(e) {
                this.selectedOption = this.options[e.target.value];
                this.$emit('change', [this.selectedOption]);
            }
        }
    };

    /* script */
    const __vue_script__$8 = script$8;

    /* template */
    var __vue_render__$8 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-text-field" }, [
          _c("div", { staticClass: "options-container" }, [
            _c(
              "select",
              { staticClass: "inp", on: { change: _vm.change } },
              [
                _c(
                  "option",
                  {
                    attrs: { value: "", disabled: "" },
                    domProps: { selected: _vm.selectedOption.id === null }
                  },
                  [_vm._v("Selecione")]
                ),
                _vm._v(" "),
                _vm._l(_vm.options, function(date, idx) {
                  return _c(
                    "option",
                    {
                      key: idx,
                      domProps: {
                        value: idx,
                        selected: _vm.selectedOption.id === date.id
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(date.name) +
                          "\n                "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$8 = [];
    __vue_render__$8._withStripped = true;

      /* style */
      const __vue_inject_styles__$8 = function (inject) {
        if (!inject) return
        inject("data-v-1caf61d8_0", { source: ".btn-filter-icon[data-v-1caf61d8] {\n  padding: .1em;\n}\n.btn-filter[data-v-1caf61d8] {\n  padding: .5em;\n}\n.bc-text-field[data-v-1caf61d8] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.options-container[data-v-1caf61d8] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-text-combo.vue.map */", map: {"version":3,"sources":["bc-text-combo.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-text-combo.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAEA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADIA,4CAA4C","file":"bc-text-combo.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-text-field {\n  display: inline-flex;\n  flex-direction: column; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-text-combo.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-text-field {\n        display: inline-flex;\n        flex-direction: column;\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-text-field\">\n            <div class=\"options-container\">\n                <select class=\"inp\" @change=\"change\">\n                    <option value=\"\" disabled :selected=\"selectedOption.id === null\">Selecione</option>\n                    <option v-for=\"(date, idx) in options\" :key=\"idx\" :value=\"idx\"\n                        :selected=\"selectedOption.id === date.id\">\n                            {{date.name}}\n                    </option>\n                </select>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    import bcService from '../services/bc-services.js';\n\n    export default {\n        name: 'bc-text-combo',\n        data() {\n            return {\n                selectedOption: {\n                    id: null\n                },\n                options: []\n            };\n        },\n        created() {\n            // ajustar request (está retornando dados mocados)\n            this.options = bcService.getTipoSelecaoOptions();\n        },\n        methods: {\n            change(e) {\n                this.selectedOption = this.options[e.target.value];\n                this.$emit('change', [this.selectedOption]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$8 = "data-v-1caf61d8";
      /* module identifier */
      const __vue_module_identifier__$8 = undefined;
      /* functional template */
      const __vue_is_functional_template__$8 = false;
      /* style inject SSR */
      

      
      var textCombo = normalizeComponent_1(
        { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
        __vue_inject_styles__$8,
        __vue_script__$8,
        __vue_scope_id__$8,
        __vue_is_functional_template__$8,
        __vue_module_identifier__$8,
        browser,
        undefined
      );

    var vueTheMask = createCommonjsModule(function (module, exports) {
    (function(e,t){module.exports=t();})(commonjsGlobal,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r});},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}};},function(e,t,n){function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var a=n(2),o=n(0),i=n.n(o);t.a=function(e,t){var o=t.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);e=u[0];}e.oninput=function(t){if(t.isTrusted){var i=e.selectionEnd,u=e.value[i-1];for(e.value=n.i(a.a)(e.value,o.mask,!0,o.tokens);i<e.value.length&&e.value.charAt(i-1)!==u;)i++;e===document.activeElement&&(e.setSelectionRange(i,i),setTimeout(function(){e.setSelectionRange(i,i);},0)),e.dispatchEvent(r("input"));}};var s=n.i(a.a)(e.value,o.mask,!0,o.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(r("input")));};},function(e,t,n){var r=n(6),a=n(5);t.a=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(t)?n.i(a.a)(r.a,t,i)(e,t,o,i):n.i(r.a)(e,t,o,i)};},function(e,t,n){function r(e){e.component(s.a.name,s.a),e.directive("mask",i.a);}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(t,"TheMask",function(){return s.a}),n.d(t,"mask",function(){return i.a}),n.d(t,"tokens",function(){return o.a}),n.d(t,"version",function(){return c});var c="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r);},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return {lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e);},masked:function(){this.refresh(this.display);}},computed:{config:function(){return {mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value);},refresh:function(e){this.display=e;var e=n.i(i.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e));}}};},function(e,t,n){function r(e,t,n){return t=t.sort(function(e,t){return e.length-t.length}),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<t.length;){var u=t[i];i++;var s=t[i];if(!(s&&e(r,s,!0,n).length>u.length))return e(r,u,o,n)}return ""}}t.a=r;},function(e,t,n){function r(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var a=0,o=0,i="";a<t.length&&o<e.length;){var u=t[a],s=r[u],c=e[o];s&&!s.escape?(s.pattern.test(c)&&(i+=s.transform?s.transform(c):c,a++),o++):(s&&s.escape&&(a++,u=t[a]),n&&(i+=u),c===u&&o++,a++);}for(var f="";a<t.length&&n;){var u=t[a];if(r[u]){f="";break}f+=u,a++;}return i+f}t.a=r;},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports;},function(e,t){e.exports=function(e,t,n,r){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t};});}return {esModule:a,exports:o,options:u}};},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return (e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]};},function(e,t,n){e.exports=n(3);}])});
    });

    var VueTheMask = unwrapExports(vueTheMask);
    var vueTheMask_1 = vueTheMask.VueTheMask;

    /*!
     * Vue.js v2.6.10
     * (c) 2014-2019 Evan You
     * Released under the MIT License.
     */
    /*  */

    var emptyObject = Object.freeze({});

    // These helpers produce better VM code in JS engines due to their
    // explicitness and function inlining.
    function isUndef (v) {
      return v === undefined || v === null
    }

    function isDef (v) {
      return v !== undefined && v !== null
    }

    function isTrue (v) {
      return v === true
    }

    function isFalse (v) {
      return v === false
    }

    /**
     * Check if value is primitive.
     */
    function isPrimitive (value) {
      return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
      )
    }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject (obj) {
      return obj !== null && typeof obj === 'object'
    }

    /**
     * Get the raw type string of a value, e.g., [object Object].
     */
    var _toString = Object.prototype.toString;

    function toRawType (value) {
      return _toString.call(value).slice(8, -1)
    }

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject (obj) {
      return _toString.call(obj) === '[object Object]'
    }

    function isRegExp (v) {
      return _toString.call(v) === '[object RegExp]'
    }

    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex (val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val)
    }

    function isPromise (val) {
      return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
      )
    }

    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString$2 (val) {
      return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
          ? JSON.stringify(val, null, 2)
          : String(val)
    }

    /**
     * Convert an input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber$1 (val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n
    }

    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap (
      str,
      expectsLowerCase
    ) {
      var map = Object.create(null);
      var list = str.split(',');
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase
        ? function (val) { return map[val.toLowerCase()]; }
        : function (val) { return map[val]; }
    }

    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = makeMap('slot,component', true);

    /**
     * Check if an attribute is a reserved attribute.
     */
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

    /**
     * Remove an item from an array.
     */
    function remove (arr, item) {
      if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
          return arr.splice(index, 1)
        }
      }
    }

    /**
     * Check whether an object has the property.
     */
    var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
    function hasOwn (obj, key) {
      return hasOwnProperty$2.call(obj, key)
    }

    /**
     * Create a cached version of a pure function.
     */
    function cached (fn) {
      var cache = Object.create(null);
      return (function cachedFn (str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
      })
    }

    /**
     * Camelize a hyphen-delimited string.
     */
    var camelizeRE = /-(\w)/g;
    var camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
    });

    /**
     * Capitalize a string.
     */
    var capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    });

    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase()
    });

    /**
     * Simple bind polyfill for environments that do not support it,
     * e.g., PhantomJS 1.x. Technically, we don't need this anymore
     * since native bind is now performant enough in most browsers.
     * But removing it would mean breaking code that was able to run in
     * PhantomJS 1.x, so this must be kept for backward compatibility.
     */

    /* istanbul ignore next */
    function polyfillBind (fn, ctx) {
      function boundFn (a) {
        var l = arguments.length;
        return l
          ? l > 1
            ? fn.apply(ctx, arguments)
            : fn.call(ctx, a)
          : fn.call(ctx)
      }

      boundFn._length = fn.length;
      return boundFn
    }

    function nativeBind (fn, ctx) {
      return fn.bind(ctx)
    }

    var bind = Function.prototype.bind
      ? nativeBind
      : polyfillBind;

    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray (list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret
    }

    /**
     * Mix properties into target object.
     */
    function extend (to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }
      return to
    }

    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject (arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res
    }

    /* eslint-disable no-unused-vars */

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
     */
    function noop (a, b, c) {}

    /**
     * Always return false.
     */
    var no = function (a, b, c) { return false; };

    /* eslint-enable no-unused-vars */

    /**
     * Return the same value.
     */
    var identity = function (_) { return _; };

    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual (a, b) {
      if (a === b) { return true }
      var isObjectA = isObject(a);
      var isObjectB = isObject(b);
      if (isObjectA && isObjectB) {
        try {
          var isArrayA = Array.isArray(a);
          var isArrayB = Array.isArray(b);
          if (isArrayA && isArrayB) {
            return a.length === b.length && a.every(function (e, i) {
              return looseEqual(e, b[i])
            })
          } else if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime()
          } else if (!isArrayA && !isArrayB) {
            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(function (key) {
              return looseEqual(a[key], b[key])
            })
          } else {
            /* istanbul ignore next */
            return false
          }
        } catch (e) {
          /* istanbul ignore next */
          return false
        }
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
      } else {
        return false
      }
    }

    /**
     * Return the first index at which a loosely equal value can be
     * found in the array (if value is a plain object, the array must
     * contain an object of the same shape), or -1 if it is not present.
     */
    function looseIndexOf (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) { return i }
      }
      return -1
    }

    /**
     * Ensure a function is called only once.
     */
    function once (fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      }
    }

    var SSR_ATTR = 'data-server-rendered';

    var ASSET_TYPES = [
      'component',
      'directive',
      'filter'
    ];

    var LIFECYCLE_HOOKS = [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeUpdate',
      'updated',
      'beforeDestroy',
      'destroyed',
      'activated',
      'deactivated',
      'errorCaptured',
      'serverPrefetch'
    ];

    /*  */



    var config$1 = ({
      /**
       * Option merge strategies (used in core/util/options)
       */
      // $flow-disable-line
      optionMergeStrategies: Object.create(null),

      /**
       * Whether to suppress warnings.
       */
      silent: false,

      /**
       * Show production mode tip message on boot?
       */
      productionTip: process.env.NODE_ENV !== 'production',

      /**
       * Whether to enable devtools
       */
      devtools: process.env.NODE_ENV !== 'production',

      /**
       * Whether to record perf
       */
      performance: false,

      /**
       * Error handler for watcher errors
       */
      errorHandler: null,

      /**
       * Warn handler for watcher warns
       */
      warnHandler: null,

      /**
       * Ignore certain custom elements
       */
      ignoredElements: [],

      /**
       * Custom user key aliases for v-on
       */
      // $flow-disable-line
      keyCodes: Object.create(null),

      /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
      isReservedTag: no,

      /**
       * Check if an attribute is reserved so that it cannot be used as a component
       * prop. This is platform-dependent and may be overwritten.
       */
      isReservedAttr: no,

      /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
      isUnknownElement: no,

      /**
       * Get the namespace of an element
       */
      getTagNamespace: noop,

      /**
       * Parse the real tag name for the specific platform.
       */
      parsePlatformTagName: identity,

      /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
      mustUseProp: no,

      /**
       * Perform updates asynchronously. Intended to be used by Vue Test Utils
       * This will significantly reduce performance if set to false.
       */
      async: true,

      /**
       * Exposed for legacy reasons
       */
      _lifecycleHooks: LIFECYCLE_HOOKS
    });

    /*  */

    /**
     * unicode letters used for parsing html tags, component names and property paths.
     * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
     * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
     */
    var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    /**
     * Check if a string starts with $ or _
     */
    function isReserved (str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5F
    }

    /**
     * Define a property.
     */
    function def$1 (obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }

    /**
     * Parse simple path.
     */
    var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
    function parsePath (path) {
      if (bailRE.test(path)) {
        return
      }
      var segments = path.split('.');
      return function (obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) { return }
          obj = obj[segments[i]];
        }
        return obj
      }
    }

    /*  */

    // can we use __proto__?
    var hasProto = '__proto__' in {};

    // Browser environment sniffing
    var inBrowser = typeof window !== 'undefined';
    var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    var isEdge = UA && UA.indexOf('edge/') > 0;
    var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
    var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    var isPhantomJS = UA && /phantomjs/.test(UA);
    var isFF = UA && UA.match(/firefox\/(\d+)/);

    // Firefox has a "watch" function on Object.prototype...
    var nativeWatch = ({}).watch;

    var supportsPassive = false;
    if (inBrowser) {
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
          get: function get () {
            /* istanbul ignore next */
            supportsPassive = true;
          }
        })); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
      } catch (e) {}
    }

    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    var _isServer;
    var isServerRendering = function () {
      if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && !inWeex && typeof global !== 'undefined') {
          // detect presence of vue-server-renderer and avoid
          // Webpack shimming the process
          _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
        } else {
          _isServer = false;
        }
      }
      return _isServer
    };

    // detect devtools
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    /* istanbul ignore next */
    function isNative (Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
    }

    var hasSymbol =
      typeof Symbol !== 'undefined' && isNative(Symbol) &&
      typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

    var _Set;
    /* istanbul ignore if */ // $flow-disable-line
    if (typeof Set !== 'undefined' && isNative(Set)) {
      // use native Set when available.
      _Set = Set;
    } else {
      // a non-standard Set polyfill that only works with primitive keys.
      _Set = /*@__PURE__*/(function () {
        function Set () {
          this.set = Object.create(null);
        }
        Set.prototype.has = function has (key) {
          return this.set[key] === true
        };
        Set.prototype.add = function add (key) {
          this.set[key] = true;
        };
        Set.prototype.clear = function clear () {
          this.set = Object.create(null);
        };

        return Set;
      }());
    }

    /*  */

    var warn = noop;
    var tip = noop;
    var generateComponentTrace = (noop); // work around flow check
    var formatComponentName = (noop);

    if (process.env.NODE_ENV !== 'production') {
      var hasConsole = typeof console !== 'undefined';
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = function (str) { return str
        .replace(classifyRE, function (c) { return c.toUpperCase(); })
        .replace(/[-_]/g, ''); };

      warn = function (msg, vm) {
        var trace = vm ? generateComponentTrace(vm) : '';

        if (config$1.warnHandler) {
          config$1.warnHandler.call(null, msg, vm, trace);
        } else if (hasConsole && (!config$1.silent)) {
          console.error(("[Vue warn]: " + msg + trace));
        }
      };

      tip = function (msg, vm) {
        if (hasConsole && (!config$1.silent)) {
          console.warn("[Vue tip]: " + msg + (
            vm ? generateComponentTrace(vm) : ''
          ));
        }
      };

      formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
          return '<Root>'
        }
        var options = typeof vm === 'function' && vm.cid != null
          ? vm.options
          : vm._isVue
            ? vm.$options || vm.constructor.options
            : vm;
        var name = options.name || options._componentTag;
        var file = options.__file;
        if (!name && file) {
          var match = file.match(/([^/\\]+)\.vue$/);
          name = match && match[1];
        }

        return (
          (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
          (file && includeFile !== false ? (" at " + file) : '')
        )
      };

      var repeat = function (str, n) {
        var res = '';
        while (n) {
          if (n % 2 === 1) { res += str; }
          if (n > 1) { str += str; }
          n >>= 1;
        }
        return res
      };

      generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
          var tree = [];
          var currentRecursiveSequence = 0;
          while (vm) {
            if (tree.length > 0) {
              var last = tree[tree.length - 1];
              if (last.constructor === vm.constructor) {
                currentRecursiveSequence++;
                vm = vm.$parent;
                continue
              } else if (currentRecursiveSequence > 0) {
                tree[tree.length - 1] = [last, currentRecursiveSequence];
                currentRecursiveSequence = 0;
              }
            }
            tree.push(vm);
            vm = vm.$parent;
          }
          return '\n\nfound in\n\n' + tree
            .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
                ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
                : formatComponentName(vm))); })
            .join('\n')
        } else {
          return ("\n\n(found in " + (formatComponentName(vm)) + ")")
        }
      };
    }

    /*  */

    var uid = 0;

    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    var Dep = function Dep () {
      this.id = uid++;
      this.subs = [];
    };

    Dep.prototype.addSub = function addSub (sub) {
      this.subs.push(sub);
    };

    Dep.prototype.removeSub = function removeSub (sub) {
      remove(this.subs, sub);
    };

    Dep.prototype.depend = function depend () {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    };

    Dep.prototype.notify = function notify () {
      // stabilize the subscriber list first
      var subs = this.subs.slice();
      if (process.env.NODE_ENV !== 'production' && !config$1.async) {
        // subs aren't sorted in scheduler if not running async
        // we need to sort them now to make sure they fire in correct
        // order
        subs.sort(function (a, b) { return a.id - b.id; });
      }
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    };

    // The current target watcher being evaluated.
    // This is globally unique because only one watcher
    // can be evaluated at a time.
    Dep.target = null;
    var targetStack = [];

    function pushTarget (target) {
      targetStack.push(target);
      Dep.target = target;
    }

    function popTarget () {
      targetStack.pop();
      Dep.target = targetStack[targetStack.length - 1];
    }

    /*  */

    var VNode = function VNode (
      tag,
      data,
      children,
      text,
      elm,
      context,
      componentOptions,
      asyncFactory
    ) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = undefined;
      this.context = context;
      this.fnContext = undefined;
      this.fnOptions = undefined;
      this.fnScopeId = undefined;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = undefined;
      this.isAsyncPlaceholder = false;
    };

    var prototypeAccessors = { child: { configurable: true } };

    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    prototypeAccessors.child.get = function () {
      return this.componentInstance
    };

    Object.defineProperties( VNode.prototype, prototypeAccessors );

    var createEmptyVNode = function (text) {
      if ( text === void 0 ) text = '';

      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node
    };

    function createTextVNode (val) {
      return new VNode(undefined, undefined, undefined, String(val))
    }

    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode (vnode) {
      var cloned = new VNode(
        vnode.tag,
        vnode.data,
        // #7975
        // clone children array to avoid mutating original in case of cloning
        // a child.
        vnode.children && vnode.children.slice(),
        vnode.text,
        vnode.elm,
        vnode.context,
        vnode.componentOptions,
        vnode.asyncFactory
      );
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.asyncMeta = vnode.asyncMeta;
      cloned.isCloned = true;
      return cloned
    }

    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */

    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);

    var methodsToPatch = [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ];

    /**
     * Intercept mutating methods and emit events
     */
    methodsToPatch.forEach(function (method) {
      // cache original method
      var original = arrayProto[method];
      def$1(arrayMethods, method, function mutator () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break
          case 'splice':
            inserted = args.slice(2);
            break
        }
        if (inserted) { ob.observeArray(inserted); }
        // notify change
        ob.dep.notify();
        return result
      });
    });

    /*  */

    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

    /**
     * In some cases we may want to disable observation inside a component's
     * update computation.
     */
    var shouldObserve = true;

    function toggleObserving (value) {
      shouldObserve = value;
    }

    /**
     * Observer class that is attached to each observed
     * object. Once attached, the observer converts the target
     * object's property keys into getter/setters that
     * collect dependencies and dispatch updates.
     */
    var Observer$1 = function Observer (value) {
      this.value = value;
      this.dep = new Dep();
      this.vmCount = 0;
      def$1(value, '__ob__', this);
      if (Array.isArray(value)) {
        if (hasProto) {
          protoAugment(value, arrayMethods);
        } else {
          copyAugment(value, arrayMethods, arrayKeys);
        }
        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };

    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer$1.prototype.walk = function walk (obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive$$1(obj, keys[i]);
      }
    };

    /**
     * Observe a list of Array items.
     */
    Observer$1.prototype.observeArray = function observeArray (items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    };

    // helpers

    /**
     * Augment a target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    function protoAugment (target, src) {
      /* eslint-disable no-proto */
      target.__proto__ = src;
      /* eslint-enable no-proto */
    }

    /**
     * Augment a target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
    function copyAugment (target, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def$1(target, key, src[key]);
      }
    }

    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe (value, asRootData) {
      if (!isObject(value) || value instanceof VNode) {
        return
      }
      var ob;
      if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer$1) {
        ob = value.__ob__;
      } else if (
        shouldObserve &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
      ) {
        ob = new Observer$1(value);
      }
      if (asRootData && ob) {
        ob.vmCount++;
      }
      return ob
    }

    /**
     * Define a reactive property on an Object.
     */
    function defineReactive$$1 (
      obj,
      key,
      val,
      customSetter,
      shallow
    ) {
      var dep = new Dep();

      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return
      }

      // cater for pre-defined getter/setters
      var getter = property && property.get;
      var setter = property && property.set;
      if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
      }

      var childOb = !shallow && observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
          var value = getter ? getter.call(obj) : val;
          if (Dep.target) {
            dep.depend();
            if (childOb) {
              childOb.dep.depend();
              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
          }
          return value
        },
        set: function reactiveSetter (newVal) {
          var value = getter ? getter.call(obj) : val;
          /* eslint-disable no-self-compare */
          if (newVal === value || (newVal !== newVal && value !== value)) {
            return
          }
          /* eslint-enable no-self-compare */
          if (process.env.NODE_ENV !== 'production' && customSetter) {
            customSetter();
          }
          // #7981: for accessor properties without setter
          if (getter && !setter) { return }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = !shallow && observe(newVal);
          dep.notify();
        }
      });
    }

    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set$1 (target, key, val) {
      if (process.env.NODE_ENV !== 'production' &&
        (isUndef(target) || isPrimitive(target))
      ) {
        warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' && warn(
          'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
        );
        return val
      }
      if (!ob) {
        target[key] = val;
        return val
      }
      defineReactive$$1(ob.value, key, val);
      ob.dep.notify();
      return val
    }

    /**
     * Delete a property and trigger change if necessary.
     */
    function del (target, key) {
      if (process.env.NODE_ENV !== 'production' &&
        (isUndef(target) || isPrimitive(target))
      ) {
        warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' && warn(
          'Avoid deleting properties on a Vue instance or its root $data ' +
          '- just set it to null.'
        );
        return
      }
      if (!hasOwn(target, key)) {
        return
      }
      delete target[key];
      if (!ob) {
        return
      }
      ob.dep.notify();
    }

    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray (value) {
      for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
          dependArray(e);
        }
      }
    }

    /*  */

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = config$1.optionMergeStrategies;

    /**
     * Options with restrictions
     */
    if (process.env.NODE_ENV !== 'production') {
      strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
          warn(
            "option \"" + key + "\" can only be used during instance " +
            'creation with the `new` keyword.'
          );
        }
        return defaultStrat(parent, child)
      };
    }

    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData (to, from) {
      if (!from) { return to }
      var key, toVal, fromVal;

      var keys = hasSymbol
        ? Reflect.ownKeys(from)
        : Object.keys(from);

      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__') { continue }
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          set$1(to, key, fromVal);
        } else if (
          toVal !== fromVal &&
          isPlainObject(toVal) &&
          isPlainObject(fromVal)
        ) {
          mergeData(toVal, fromVal);
        }
      }
      return to
    }

    /**
     * Data
     */
    function mergeDataOrFn (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
          return parentVal
        }
        if (!parentVal) {
          return childVal
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn () {
          return mergeData(
            typeof childVal === 'function' ? childVal.call(this, this) : childVal,
            typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
          )
        }
      } else {
        return function mergedInstanceDataFn () {
          // instance merge
          var instanceData = typeof childVal === 'function'
            ? childVal.call(vm, vm)
            : childVal;
          var defaultData = typeof parentVal === 'function'
            ? parentVal.call(vm, vm)
            : parentVal;
          if (instanceData) {
            return mergeData(instanceData, defaultData)
          } else {
            return defaultData
          }
        }
      }
    }

    strats.data = function (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        if (childVal && typeof childVal !== 'function') {
          process.env.NODE_ENV !== 'production' && warn(
            'The "data" option should be a function ' +
            'that returns a per-instance value in component ' +
            'definitions.',
            vm
          );

          return parentVal
        }
        return mergeDataOrFn(parentVal, childVal)
      }

      return mergeDataOrFn(parentVal, childVal, vm)
    };

    /**
     * Hooks and props are merged as arrays.
     */
    function mergeHook (
      parentVal,
      childVal
    ) {
      var res = childVal
        ? parentVal
          ? parentVal.concat(childVal)
          : Array.isArray(childVal)
            ? childVal
            : [childVal]
        : parentVal;
      return res
        ? dedupeHooks(res)
        : res
    }

    function dedupeHooks (hooks) {
      var res = [];
      for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
          res.push(hooks[i]);
        }
      }
      return res
    }

    LIFECYCLE_HOOKS.forEach(function (hook) {
      strats[hook] = mergeHook;
    });

    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets (
      parentVal,
      childVal,
      vm,
      key
    ) {
      var res = Object.create(parentVal || null);
      if (childVal) {
        process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
        return extend(res, childVal)
      } else {
        return res
      }
    }

    ASSET_TYPES.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
    });

    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      // work around Firefox's Object.prototype.watch...
      if (parentVal === nativeWatch) { parentVal = undefined; }
      if (childVal === nativeWatch) { childVal = undefined; }
      /* istanbul ignore if */
      if (!childVal) { return Object.create(parentVal || null) }
      if (process.env.NODE_ENV !== 'production') {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = {};
      extend(ret, parentVal);
      for (var key$1 in childVal) {
        var parent = ret[key$1];
        var child = childVal[key$1];
        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }
        ret[key$1] = parent
          ? parent.concat(child)
          : Array.isArray(child) ? child : [child];
      }
      return ret
    };

    /**
     * Other object hashes.
     */
    strats.props =
    strats.methods =
    strats.inject =
    strats.computed = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      if (childVal && process.env.NODE_ENV !== 'production') {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = Object.create(null);
      extend(ret, parentVal);
      if (childVal) { extend(ret, childVal); }
      return ret
    };
    strats.provide = mergeDataOrFn;

    /**
     * Default strategy.
     */
    var defaultStrat = function (parentVal, childVal) {
      return childVal === undefined
        ? parentVal
        : childVal
    };

    /**
     * Validate component names
     */
    function checkComponents (options) {
      for (var key in options.components) {
        validateComponentName(key);
      }
    }

    function validateComponentName (name) {
      if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'should conform to valid custom element name in html5 specification.'
        );
      }
      if (isBuiltInTag(name) || config$1.isReservedTag(name)) {
        warn(
          'Do not use built-in or reserved HTML elements as component ' +
          'id: ' + name
        );
      }
    }

    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps (options, vm) {
      var props = options.props;
      if (!props) { return }
      var res = {};
      var i, val, name;
      if (Array.isArray(props)) {
        i = props.length;
        while (i--) {
          val = props[i];
          if (typeof val === 'string') {
            name = camelize(val);
            res[name] = { type: null };
          } else if (process.env.NODE_ENV !== 'production') {
            warn('props must be strings when using array syntax.');
          }
        }
      } else if (isPlainObject(props)) {
        for (var key in props) {
          val = props[key];
          name = camelize(key);
          res[name] = isPlainObject(val)
            ? val
            : { type: val };
        }
      } else if (process.env.NODE_ENV !== 'production') {
        warn(
          "Invalid value for option \"props\": expected an Array or an Object, " +
          "but got " + (toRawType(props)) + ".",
          vm
        );
      }
      options.props = res;
    }

    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject (options, vm) {
      var inject = options.inject;
      if (!inject) { return }
      var normalized = options.inject = {};
      if (Array.isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
          normalized[inject[i]] = { from: inject[i] };
        }
      } else if (isPlainObject(inject)) {
        for (var key in inject) {
          var val = inject[key];
          normalized[key] = isPlainObject(val)
            ? extend({ from: key }, val)
            : { from: val };
        }
      } else if (process.env.NODE_ENV !== 'production') {
        warn(
          "Invalid value for option \"inject\": expected an Array or an Object, " +
          "but got " + (toRawType(inject)) + ".",
          vm
        );
      }
    }

    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives (options) {
      var dirs = options.directives;
      if (dirs) {
        for (var key in dirs) {
          var def$$1 = dirs[key];
          if (typeof def$$1 === 'function') {
            dirs[key] = { bind: def$$1, update: def$$1 };
          }
        }
      }
    }

    function assertObjectType (name, value, vm) {
      if (!isPlainObject(value)) {
        warn(
          "Invalid value for option \"" + name + "\": expected an Object, " +
          "but got " + (toRawType(value)) + ".",
          vm
        );
      }
    }

    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions (
      parent,
      child,
      vm
    ) {
      if (process.env.NODE_ENV !== 'production') {
        checkComponents(child);
      }

      if (typeof child === 'function') {
        child = child.options;
      }

      normalizeProps(child, vm);
      normalizeInject(child, vm);
      normalizeDirectives(child);

      // Apply extends and mixins on the child options,
      // but only if it is a raw options object that isn't
      // the result of another mergeOptions call.
      // Only merged options has the _base property.
      if (!child._base) {
        if (child.extends) {
          parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
          for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i], vm);
          }
        }
      }

      var options = {};
      var key;
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }
      function mergeField (key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }
      return options
    }

    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset (
      options,
      type,
      id,
      warnMissing
    ) {
      /* istanbul ignore if */
      if (typeof id !== 'string') {
        return
      }
      var assets = options[type];
      // check local registration variations first
      if (hasOwn(assets, id)) { return assets[id] }
      var camelizedId = camelize(id);
      if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
      var PascalCaseId = capitalize(camelizedId);
      if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
      // fallback to prototype chain
      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
      if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
        warn(
          'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
          options
        );
      }
      return res
    }

    /*  */



    function validateProp (
      key,
      propOptions,
      propsData,
      vm
    ) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key];
      // boolean casting
      var booleanIndex = getTypeIndex(Boolean, prop.type);
      if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
          value = false;
        } else if (value === '' || value === hyphenate(key)) {
          // only cast empty string / same name to boolean if
          // boolean has higher priority
          var stringIndex = getTypeIndex(String, prop.type);
          if (stringIndex < 0 || booleanIndex < stringIndex) {
            value = true;
          }
        }
      }
      // check default value
      if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
      }
      if (
        process.env.NODE_ENV !== 'production' &&
        // skip validation for weex recycle-list child component props
        !(false)
      ) {
        assertProp(prop, key, value, vm, absent);
      }
      return value
    }

    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue (vm, prop, key) {
      // no default, return undefined
      if (!hasOwn(prop, 'default')) {
        return undefined
      }
      var def = prop.default;
      // warn against non-factory defaults for Object & Array
      if (process.env.NODE_ENV !== 'production' && isObject(def)) {
        warn(
          'Invalid default value for prop "' + key + '": ' +
          'Props with type Object/Array must use a factory function ' +
          'to return the default value.',
          vm
        );
      }
      // the raw prop value was also undefined from previous render,
      // return previous default value to avoid unnecessary watcher trigger
      if (vm && vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined
      ) {
        return vm._props[key]
      }
      // call factory function for non-Function types
      // a value is Function if its prototype is function even across different execution context
      return typeof def === 'function' && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def
    }

    /**
     * Assert whether a prop is valid.
     */
    function assertProp (
      prop,
      name,
      value,
      vm,
      absent
    ) {
      if (prop.required && absent) {
        warn(
          'Missing required prop: "' + name + '"',
          vm
        );
        return
      }
      if (value == null && !prop.required) {
        return
      }
      var type = prop.type;
      var valid = !type || type === true;
      var expectedTypes = [];
      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
          var assertedType = assertType(value, type[i]);
          expectedTypes.push(assertedType.expectedType || '');
          valid = assertedType.valid;
        }
      }

      if (!valid) {
        warn(
          getInvalidTypeMessage(name, value, expectedTypes),
          vm
        );
        return
      }
      var validator = prop.validator;
      if (validator) {
        if (!validator(value)) {
          warn(
            'Invalid prop: custom validator check failed for prop "' + name + '".',
            vm
          );
        }
      }
    }

    var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

    function assertType (value, type) {
      var valid;
      var expectedType = getType(type);
      if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
          valid = value instanceof type;
        }
      } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
      } else {
        valid = value instanceof type;
      }
      return {
        valid: valid,
        expectedType: expectedType
      }
    }

    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType (fn) {
      var match = fn && fn.toString().match(/^\s*function (\w+)/);
      return match ? match[1] : ''
    }

    function isSameType (a, b) {
      return getType(a) === getType(b)
    }

    function getTypeIndex (type, expectedTypes) {
      if (!Array.isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1
      }
      for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
          return i
        }
      }
      return -1
    }

    function getInvalidTypeMessage (name, value, expectedTypes) {
      var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
        " Expected " + (expectedTypes.map(capitalize).join(', '));
      var expectedType = expectedTypes[0];
      var receivedType = toRawType(value);
      var expectedValue = styleValue(value, expectedType);
      var receivedValue = styleValue(value, receivedType);
      // check if we need to specify expected value
      if (expectedTypes.length === 1 &&
          isExplicable(expectedType) &&
          !isBoolean(expectedType, receivedType)) {
        message += " with value " + expectedValue;
      }
      message += ", got " + receivedType + " ";
      // check if we need to specify received value
      if (isExplicable(receivedType)) {
        message += "with value " + receivedValue + ".";
      }
      return message
    }

    function styleValue (value, type) {
      if (type === 'String') {
        return ("\"" + value + "\"")
      } else if (type === 'Number') {
        return ("" + (Number(value)))
      } else {
        return ("" + value)
      }
    }

    function isExplicable (value) {
      var explicitTypes = ['string', 'number', 'boolean'];
      return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
    }

    function isBoolean () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
    }

    /*  */

    function handleError (err, vm, info) {
      // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
      // See: https://github.com/vuejs/vuex/issues/1505
      pushTarget();
      try {
        if (vm) {
          var cur = vm;
          while ((cur = cur.$parent)) {
            var hooks = cur.$options.errorCaptured;
            if (hooks) {
              for (var i = 0; i < hooks.length; i++) {
                try {
                  var capture = hooks[i].call(cur, err, vm, info) === false;
                  if (capture) { return }
                } catch (e) {
                  globalHandleError(e, cur, 'errorCaptured hook');
                }
              }
            }
          }
        }
        globalHandleError(err, vm, info);
      } finally {
        popTarget();
      }
    }

    function invokeWithErrorHandling (
      handler,
      context,
      args,
      vm,
      info
    ) {
      var res;
      try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
          res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
          // issue #9511
          // avoid catch triggering multiple times when nested calls
          res._handled = true;
        }
      } catch (e) {
        handleError(e, vm, info);
      }
      return res
    }

    function globalHandleError (err, vm, info) {
      if (config$1.errorHandler) {
        try {
          return config$1.errorHandler.call(null, err, vm, info)
        } catch (e) {
          // if the user intentionally throws the original error in the handler,
          // do not log it twice
          if (e !== err) {
            logError(e, null, 'config.errorHandler');
          }
        }
      }
      logError(err, vm, info);
    }

    function logError (err, vm, info) {
      if (process.env.NODE_ENV !== 'production') {
        warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
      }
      /* istanbul ignore else */
      if ((inBrowser || inWeex) && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err
      }
    }

    /*  */

    var isUsingMicroTask = false;

    var callbacks = [];
    var pending = false;

    function flushCallbacks () {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }

    // Here we have async deferring wrappers using microtasks.
    // In 2.5 we used (macro) tasks (in combination with microtasks).
    // However, it has subtle problems when state is changed right before repaint
    // (e.g. #6813, out-in transitions).
    // Also, using (macro) tasks in event handler would cause some weird behaviors
    // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
    // So we now use microtasks everywhere, again.
    // A major drawback of this tradeoff is that there are some scenarios
    // where microtasks have too high a priority and fire in between supposedly
    // sequential events (e.g. #4521, #6690, which have workarounds)
    // or even between bubbling of the same event (#6566).
    var timerFunc;

    // The nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore next, $flow-disable-line */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      timerFunc = function () {
        p.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) { setTimeout(noop); }
      };
      isUsingMicroTask = true;
    } else if (!isIE && typeof MutationObserver !== 'undefined' && (
      isNative(MutationObserver) ||
      // PhantomJS and iOS 7.x
      MutationObserver.toString() === '[object MutationObserverConstructor]'
    )) {
      // Use MutationObserver where native Promise is not available,
      // e.g. PhantomJS, iOS7, Android 4.4
      // (#6466 MutationObserver is unreliable in IE11)
      var counter$1 = 1;
      var observer = new MutationObserver(flushCallbacks);
      var textNode = document.createTextNode(String(counter$1));
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function () {
        counter$1 = (counter$1 + 1) % 2;
        textNode.data = String(counter$1);
      };
      isUsingMicroTask = true;
    } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
      // Fallback to setImmediate.
      // Techinically it leverages the (macro) task queue,
      // but it is still a better choice than setTimeout.
      timerFunc = function () {
        setImmediate(flushCallbacks);
      };
    } else {
      // Fallback to setTimeout.
      timerFunc = function () {
        setTimeout(flushCallbacks, 0);
      };
    }

    function nextTick (cb, ctx) {
      var _resolve;
      callbacks.push(function () {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      // $flow-disable-line
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        })
      }
    }

    /*  */

    /* not type checking this file because flow doesn't play well with Proxy */

    var initProxy;

    if (process.env.NODE_ENV !== 'production') {
      var allowedGlobals = makeMap(
        'Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
        'require' // for Webpack/Browserify
      );

      var warnNonPresent = function (target, key) {
        warn(
          "Property or method \"" + key + "\" is not defined on the instance but " +
          'referenced during render. Make sure that this property is reactive, ' +
          'either in the data option, or for class-based components, by ' +
          'initializing the property. ' +
          'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
          target
        );
      };

      var warnReservedPrefix = function (target, key) {
        warn(
          "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
          'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
          'prevent conflicts with Vue internals' +
          'See: https://vuejs.org/v2/api/#data',
          target
        );
      };

      var hasProxy =
        typeof Proxy !== 'undefined' && isNative(Proxy);

      if (hasProxy) {
        var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config$1.keyCodes = new Proxy(config$1.keyCodes, {
          set: function set (target, key, value) {
            if (isBuiltInModifier(key)) {
              warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
              return false
            } else {
              target[key] = value;
              return true
            }
          }
        });
      }

      var hasHandler = {
        has: function has (target, key) {
          var has = key in target;
          var isAllowed = allowedGlobals(key) ||
            (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
          if (!has && !isAllowed) {
            if (key in target.$data) { warnReservedPrefix(target, key); }
            else { warnNonPresent(target, key); }
          }
          return has || !isAllowed
        }
      };

      var getHandler = {
        get: function get (target, key) {
          if (typeof key === 'string' && !(key in target)) {
            if (key in target.$data) { warnReservedPrefix(target, key); }
            else { warnNonPresent(target, key); }
          }
          return target[key]
        }
      };

      initProxy = function initProxy (vm) {
        if (hasProxy) {
          // determine which proxy handler to use
          var options = vm.$options;
          var handlers = options.render && options.render._withStripped
            ? getHandler
            : hasHandler;
          vm._renderProxy = new Proxy(vm, handlers);
        } else {
          vm._renderProxy = vm;
        }
      };
    }

    /*  */

    var seenObjects = new _Set();

    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    function traverse (val) {
      _traverse(val, seenObjects);
      seenObjects.clear();
    }

    function _traverse (val, seen) {
      var i, keys;
      var isA = Array.isArray(val);
      if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
        return
      }
      if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
          return
        }
        seen.add(depId);
      }
      if (isA) {
        i = val.length;
        while (i--) { _traverse(val[i], seen); }
      } else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) { _traverse(val[keys[i]], seen); }
      }
    }

    var mark;
    var measure;

    if (process.env.NODE_ENV !== 'production') {
      var perf = inBrowser && window.performance;
      /* istanbul ignore if */
      if (
        perf &&
        perf.mark &&
        perf.measure &&
        perf.clearMarks &&
        perf.clearMeasures
      ) {
        mark = function (tag) { return perf.mark(tag); };
        measure = function (name, startTag, endTag) {
          perf.measure(name, startTag, endTag);
          perf.clearMarks(startTag);
          perf.clearMarks(endTag);
          // perf.clearMeasures(name)
        };
      }
    }

    /*  */

    var normalizeEvent = cached(function (name) {
      var passive = name.charAt(0) === '&';
      name = passive ? name.slice(1) : name;
      var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
      name = once$$1 ? name.slice(1) : name;
      var capture = name.charAt(0) === '!';
      name = capture ? name.slice(1) : name;
      return {
        name: name,
        once: once$$1,
        capture: capture,
        passive: passive
      }
    });

    function createFnInvoker (fns, vm) {
      function invoker () {
        var arguments$1 = arguments;

        var fns = invoker.fns;
        if (Array.isArray(fns)) {
          var cloned = fns.slice();
          for (var i = 0; i < cloned.length; i++) {
            invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
          }
        } else {
          // return handler return value for single handlers
          return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
        }
      }
      invoker.fns = fns;
      return invoker
    }

    function updateListeners (
      on,
      oldOn,
      add,
      remove$$1,
      createOnceHandler,
      vm
    ) {
      var name, def$$1, cur, old, event;
      for (name in on) {
        def$$1 = cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
          process.env.NODE_ENV !== 'production' && warn(
            "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
            vm
          );
        } else if (isUndef(old)) {
          if (isUndef(cur.fns)) {
            cur = on[name] = createFnInvoker(cur, vm);
          }
          if (isTrue(event.once)) {
            cur = on[name] = createOnceHandler(event.name, cur, event.capture);
          }
          add(event.name, cur, event.capture, event.passive, event.params);
        } else if (cur !== old) {
          old.fns = cur;
          on[name] = old;
        }
      }
      for (name in oldOn) {
        if (isUndef(on[name])) {
          event = normalizeEvent(name);
          remove$$1(event.name, oldOn[name], event.capture);
        }
      }
    }

    /*  */

    function mergeVNodeHook (def, hookKey, hook) {
      if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
      }
      var invoker;
      var oldHook = def[hookKey];

      function wrappedHook () {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove(invoker.fns, wrappedHook);
      }

      if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
      } else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
          // already a merged invoker
          invoker = oldHook;
          invoker.fns.push(wrappedHook);
        } else {
          // existing plain hook
          invoker = createFnInvoker([oldHook, wrappedHook]);
        }
      }

      invoker.merged = true;
      def[hookKey] = invoker;
    }

    /*  */

    function extractPropsFromVNodeData (
      data,
      Ctor,
      tag
    ) {
      // we are only extracting raw values here.
      // validation and default values are handled in the child
      // component itself.
      var propOptions = Ctor.options.props;
      if (isUndef(propOptions)) {
        return
      }
      var res = {};
      var attrs = data.attrs;
      var props = data.props;
      if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);
          if (process.env.NODE_ENV !== 'production') {
            var keyInLowerCase = key.toLowerCase();
            if (
              key !== keyInLowerCase &&
              attrs && hasOwn(attrs, keyInLowerCase)
            ) {
              tip(
                "Prop \"" + keyInLowerCase + "\" is passed to component " +
                (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
                " \"" + key + "\". " +
                "Note that HTML attributes are case-insensitive and camelCased " +
                "props need to use their kebab-case equivalents when using in-DOM " +
                "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
              );
            }
          }
          checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
        }
      }
      return res
    }

    function checkProp (
      res,
      hash,
      key,
      altKey,
      preserve
    ) {
      if (isDef(hash)) {
        if (hasOwn(hash, key)) {
          res[key] = hash[key];
          if (!preserve) {
            delete hash[key];
          }
          return true
        } else if (hasOwn(hash, altKey)) {
          res[key] = hash[altKey];
          if (!preserve) {
            delete hash[altKey];
          }
          return true
        }
      }
      return false
    }

    /*  */

    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:

    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren (children) {
      for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
          return Array.prototype.concat.apply([], children)
        }
      }
      return children
    }

    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren (children) {
      return isPrimitive(children)
        ? [createTextVNode(children)]
        : Array.isArray(children)
          ? normalizeArrayChildren(children)
          : undefined
    }

    function isTextNode (node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment)
    }

    function normalizeArrayChildren (children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;
      for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean') { continue }
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (Array.isArray(c)) {
          if (c.length > 0) {
            c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
            // merge adjacent text nodes
            if (isTextNode(c[0]) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + (c[0]).text);
              c.shift();
            }
            res.push.apply(res, c);
          }
        } else if (isPrimitive(c)) {
          if (isTextNode(last)) {
            // merge adjacent text nodes
            // this is necessary for SSR hydration because text nodes are
            // essentially merged when rendered to HTML strings
            res[lastIndex] = createTextVNode(last.text + c);
          } else if (c !== '') {
            // convert primitive to vnode
            res.push(createTextVNode(c));
          }
        } else {
          if (isTextNode(c) && isTextNode(last)) {
            // merge adjacent text nodes
            res[lastIndex] = createTextVNode(last.text + c.text);
          } else {
            // default key for nested array children (likely generated by v-for)
            if (isTrue(children._isVList) &&
              isDef(c.tag) &&
              isUndef(c.key) &&
              isDef(nestedIndex)) {
              c.key = "__vlist" + nestedIndex + "_" + i + "__";
            }
            res.push(c);
          }
        }
      }
      return res
    }

    /*  */

    function initProvide (vm) {
      var provide = vm.$options.provide;
      if (provide) {
        vm._provided = typeof provide === 'function'
          ? provide.call(vm)
          : provide;
      }
    }

    function initInjections (vm) {
      var result = resolveInject(vm.$options.inject, vm);
      if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
          /* istanbul ignore else */
          if (process.env.NODE_ENV !== 'production') {
            defineReactive$$1(vm, key, result[key], function () {
              warn(
                "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                "injection being mutated: \"" + key + "\"",
                vm
              );
            });
          } else {
            defineReactive$$1(vm, key, result[key]);
          }
        });
        toggleObserving(true);
      }
    }

    function resolveInject (inject, vm) {
      if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol
          ? Reflect.ownKeys(inject)
          : Object.keys(inject);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          // #6574 in case the inject object is observed...
          if (key === '__ob__') { continue }
          var provideKey = inject[key].from;
          var source = vm;
          while (source) {
            if (source._provided && hasOwn(source._provided, provideKey)) {
              result[key] = source._provided[provideKey];
              break
            }
            source = source.$parent;
          }
          if (!source) {
            if ('default' in inject[key]) {
              var provideDefault = inject[key].default;
              result[key] = typeof provideDefault === 'function'
                ? provideDefault.call(vm)
                : provideDefault;
            } else if (process.env.NODE_ENV !== 'production') {
              warn(("Injection \"" + key + "\" not found"), vm);
            }
          }
        }
        return result
      }
    }

    /*  */



    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots (
      children,
      context
    ) {
      if (!children || !children.length) {
        return {}
      }
      var slots = {};
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
          delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
          data && data.slot != null
        ) {
          var name = data.slot;
          var slot = (slots[name] || (slots[name] = []));
          if (child.tag === 'template') {
            slot.push.apply(slot, child.children || []);
          } else {
            slot.push(child);
          }
        } else {
          (slots.default || (slots.default = [])).push(child);
        }
      }
      // ignore slots that contains only whitespace
      for (var name$1 in slots) {
        if (slots[name$1].every(isWhitespace)) {
          delete slots[name$1];
        }
      }
      return slots
    }

    function isWhitespace (node) {
      return (node.isComment && !node.asyncFactory) || node.text === ' '
    }

    /*  */

    function normalizeScopedSlots (
      slots,
      normalSlots,
      prevSlots
    ) {
      var res;
      var hasNormalSlots = Object.keys(normalSlots).length > 0;
      var isStable = slots ? !!slots.$stable : !hasNormalSlots;
      var key = slots && slots.$key;
      if (!slots) {
        res = {};
      } else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized
      } else if (
        isStable &&
        prevSlots &&
        prevSlots !== emptyObject &&
        key === prevSlots.$key &&
        !hasNormalSlots &&
        !prevSlots.$hasNormal
      ) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevSlots
      } else {
        res = {};
        for (var key$1 in slots) {
          if (slots[key$1] && key$1[0] !== '$') {
            res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
          }
        }
      }
      // expose normal slots on scopedSlots
      for (var key$2 in normalSlots) {
        if (!(key$2 in res)) {
          res[key$2] = proxyNormalSlot(normalSlots, key$2);
        }
      }
      // avoriaz seems to mock a non-extensible $scopedSlots object
      // and when that is passed down this would cause an error
      if (slots && Object.isExtensible(slots)) {
        (slots)._normalized = res;
      }
      def$1(res, '$stable', isStable);
      def$1(res, '$key', key);
      def$1(res, '$hasNormal', hasNormalSlots);
      return res
    }

    function normalizeScopedSlot(normalSlots, key, fn) {
      var normalized = function () {
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res = res && typeof res === 'object' && !Array.isArray(res)
          ? [res] // single vnode
          : normalizeChildren(res);
        return res && (
          res.length === 0 ||
          (res.length === 1 && res[0].isComment) // #9658
        ) ? undefined
          : res
      };
      // this is a slot using the new v-slot syntax without scope. although it is
      // compiled as a scoped slot, render fn users would expect it to be present
      // on this.$slots because the usage is semantically a normal slot.
      if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
          get: normalized,
          enumerable: true,
          configurable: true
        });
      }
      return normalized
    }

    function proxyNormalSlot(slots, key) {
      return function () { return slots[key]; }
    }

    /*  */

    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList (
      val,
      render
    ) {
      var ret, i, l, keys, key;
      if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i);
        }
      } else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i);
        }
      } else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
          ret = [];
          var iterator = val[Symbol.iterator]();
          var result = iterator.next();
          while (!result.done) {
            ret.push(render(result.value, ret.length));
            result = iterator.next();
          }
        } else {
          keys = Object.keys(val);
          ret = new Array(keys.length);
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            ret[i] = render(val[key], key, i);
          }
        }
      }
      if (!isDef(ret)) {
        ret = [];
      }
      (ret)._isVList = true;
      return ret
    }

    /*  */

    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot (
      name,
      fallback,
      props,
      bindObject
    ) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;
      if (scopedSlotFn) { // scoped slot
        props = props || {};
        if (bindObject) {
          if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
            warn(
              'slot v-bind without argument expects an Object',
              this
            );
          }
          props = extend(extend({}, bindObject), props);
        }
        nodes = scopedSlotFn(props) || fallback;
      } else {
        nodes = this.$slots[name] || fallback;
      }

      var target = props && props.slot;
      if (target) {
        return this.$createElement('template', { slot: target }, nodes)
      } else {
        return nodes
      }
    }

    /*  */

    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter (id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity
    }

    /*  */

    function isKeyNotMatch (expect, actual) {
      if (Array.isArray(expect)) {
        return expect.indexOf(actual) === -1
      } else {
        return expect !== actual
      }
    }

    /**
     * Runtime helper for checking keyCodes from config.
     * exposed as Vue.prototype._k
     * passing in eventKeyName as last argument separately for backwards compat
     */
    function checkKeyCodes (
      eventKeyCode,
      key,
      builtInKeyCode,
      eventKeyName,
      builtInKeyName
    ) {
      var mappedKeyCode = config$1.keyCodes[key] || builtInKeyCode;
      if (builtInKeyName && eventKeyName && !config$1.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName)
      } else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode)
      } else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key
      }
    }

    /*  */

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps (
      data,
      tag,
      value,
      asProp,
      isSync
    ) {
      if (value) {
        if (!isObject(value)) {
          process.env.NODE_ENV !== 'production' && warn(
            'v-bind without argument expects an Object or Array value',
            this
          );
        } else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }
          var hash;
          var loop = function ( key ) {
            if (
              key === 'class' ||
              key === 'style' ||
              isReservedAttribute(key)
            ) {
              hash = data;
            } else {
              var type = data.attrs && data.attrs.type;
              hash = asProp || config$1.mustUseProp(tag, type, key)
                ? data.domProps || (data.domProps = {})
                : data.attrs || (data.attrs = {});
            }
            var camelizedKey = camelize(key);
            var hyphenatedKey = hyphenate(key);
            if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
              hash[key] = value[key];

              if (isSync) {
                var on = data.on || (data.on = {});
                on[("update:" + key)] = function ($event) {
                  value[key] = $event;
                };
              }
            }
          };

          for (var key in value) loop( key );
        }
      }
      return data
    }

    /*  */

    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic (
      index,
      isInFor
    ) {
      var cached = this._staticTrees || (this._staticTrees = []);
      var tree = cached[index];
      // if has already-rendered static tree and not inside v-for,
      // we can reuse the same tree.
      if (tree && !isInFor) {
        return tree
      }
      // otherwise, render a fresh tree.
      tree = cached[index] = this.$options.staticRenderFns[index].call(
        this._renderProxy,
        null,
        this // for render fns generated for functional component templates
      );
      markStatic(tree, ("__static__" + index), false);
      return tree
    }

    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce (
      tree,
      index,
      key
    ) {
      markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
      return tree
    }

    function markStatic (
      tree,
      key,
      isOnce
    ) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== 'string') {
            markStaticNode(tree[i], (key + "_" + i), isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }

    function markStaticNode (node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }

    /*  */

    function bindObjectListeners (data, value) {
      if (value) {
        if (!isPlainObject(value)) {
          process.env.NODE_ENV !== 'production' && warn(
            'v-on without argument expects an Object value',
            this
          );
        } else {
          var on = data.on = data.on ? extend({}, data.on) : {};
          for (var key in value) {
            var existing = on[key];
            var ours = value[key];
            on[key] = existing ? [].concat(existing, ours) : ours;
          }
        }
      }
      return data
    }

    /*  */

    function resolveScopedSlots (
      fns, // see flow/vnode
      res,
      // the following are added in 2.6
      hasDynamicKeys,
      contentHashKey
    ) {
      res = res || { $stable: !hasDynamicKeys };
      for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (Array.isArray(slot)) {
          resolveScopedSlots(slot, res, hasDynamicKeys);
        } else if (slot) {
          // marker for reverse proxying v-slot without scope on this.$slots
          if (slot.proxy) {
            slot.fn.proxy = true;
          }
          res[slot.key] = slot.fn;
        }
      }
      if (contentHashKey) {
        (res).$key = contentHashKey;
      }
      return res
    }

    /*  */

    function bindDynamicKeys (baseObj, values) {
      for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === 'string' && key) {
          baseObj[values[i]] = values[i + 1];
        } else if (process.env.NODE_ENV !== 'production' && key !== '' && key !== null) {
          // null is a speical value for explicitly removing a binding
          warn(
            ("Invalid value for dynamic directive argument (expected string or null): " + key),
            this
          );
        }
      }
      return baseObj
    }

    // helper to dynamically append modifier runtime markers to event names.
    // ensure only append when value is already string, otherwise it will be cast
    // to string and cause the type check to miss.
    function prependModifier (value, symbol) {
      return typeof value === 'string' ? symbol + value : value
    }

    /*  */

    function installRenderHelpers (target) {
      target._o = markOnce;
      target._n = toNumber$1;
      target._s = toString$2;
      target._l = renderList;
      target._t = renderSlot;
      target._q = looseEqual;
      target._i = looseIndexOf;
      target._m = renderStatic;
      target._f = resolveFilter;
      target._k = checkKeyCodes;
      target._b = bindObjectProps;
      target._v = createTextVNode;
      target._e = createEmptyVNode;
      target._u = resolveScopedSlots;
      target._g = bindObjectListeners;
      target._d = bindDynamicKeys;
      target._p = prependModifier;
    }

    /*  */

    function FunctionalRenderContext (
      data,
      props,
      children,
      parent,
      Ctor
    ) {
      var this$1 = this;

      var options = Ctor.options;
      // ensure the createElement function in functional components
      // gets a unique context - this is necessary for correct named slot check
      var contextVm;
      if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent);
        // $flow-disable-line
        contextVm._original = parent;
      } else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // $flow-disable-line
        parent = parent._original;
      }
      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;

      this.data = data;
      this.props = props;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);
      this.slots = function () {
        if (!this$1.$slots) {
          normalizeScopedSlots(
            data.scopedSlots,
            this$1.$slots = resolveSlots(children, parent)
          );
        }
        return this$1.$slots
      };

      Object.defineProperty(this, 'scopedSlots', ({
        enumerable: true,
        get: function get () {
          return normalizeScopedSlots(data.scopedSlots, this.slots())
        }
      }));

      // support for compiled functional template
      if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
      }

      if (options._scopeId) {
        this._c = function (a, b, c, d) {
          var vnode = createElement(contextVm, a, b, c, d, needNormalization);
          if (vnode && !Array.isArray(vnode)) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
          }
          return vnode
        };
      } else {
        this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
      }
    }

    installRenderHelpers(FunctionalRenderContext.prototype);

    function createFunctionalComponent (
      Ctor,
      propsData,
      data,
      contextVm,
      children
    ) {
      var options = Ctor.options;
      var props = {};
      var propOptions = options.props;
      if (isDef(propOptions)) {
        for (var key in propOptions) {
          props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
      } else {
        if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
        if (isDef(data.props)) { mergeProps(props, data.props); }
      }

      var renderContext = new FunctionalRenderContext(
        data,
        props,
        children,
        contextVm,
        Ctor
      );

      var vnode = options.render.call(null, renderContext._c, renderContext);

      if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
      } else if (Array.isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
          res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }
        return res
      }
    }

    function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
      // #7817 clone node before setting fnContext, otherwise if the node is reused
      // (e.g. it was from a cached normal slot) the fnContext causes named slots
      // that should not be matched to match.
      var clone = cloneVNode(vnode);
      clone.fnContext = contextVm;
      clone.fnOptions = options;
      if (process.env.NODE_ENV !== 'production') {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
      }
      if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
      }
      return clone
    }

    function mergeProps (to, from) {
      for (var key in from) {
        to[camelize(key)] = from[key];
      }
    }

    /*  */

    /*  */

    /*  */

    /*  */

    // inline hooks to be invoked on component VNodes during patch
    var componentVNodeHooks = {
      init: function init (vnode, hydrating) {
        if (
          vnode.componentInstance &&
          !vnode.componentInstance._isDestroyed &&
          vnode.data.keepAlive
        ) {
          // kept-alive components, treat as a patch
          var mountedNode = vnode; // work around flow
          componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
          var child = vnode.componentInstance = createComponentInstanceForVnode(
            vnode,
            activeInstance
          );
          child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
      },

      prepatch: function prepatch (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(
          child,
          options.propsData, // updated props
          options.listeners, // updated listeners
          vnode, // new parent vnode
          options.children // new children
        );
      },

      insert: function insert (vnode) {
        var context = vnode.context;
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
          componentInstance._isMounted = true;
          callHook(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
          if (context._isMounted) {
            // vue-router#1212
            // During updates, a kept-alive component's child components may
            // change, so directly walking the tree here may call activated hooks
            // on incorrect children. Instead we push them into a queue which will
            // be processed after the whole patch process ended.
            queueActivatedComponent(componentInstance);
          } else {
            activateChildComponent(componentInstance, true /* direct */);
          }
        }
      },

      destroy: function destroy (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
          if (!vnode.data.keepAlive) {
            componentInstance.$destroy();
          } else {
            deactivateChildComponent(componentInstance, true /* direct */);
          }
        }
      }
    };

    var hooksToMerge = Object.keys(componentVNodeHooks);

    function createComponent (
      Ctor,
      data,
      context,
      children,
      tag
    ) {
      if (isUndef(Ctor)) {
        return
      }

      var baseCtor = context.$options._base;

      // plain options object: turn it into a constructor
      if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
      }

      // if at this stage it's not a constructor or an async component factory,
      // reject.
      if (typeof Ctor !== 'function') {
        if (process.env.NODE_ENV !== 'production') {
          warn(("Invalid Component definition: " + (String(Ctor))), context);
        }
        return
      }

      // async component
      var asyncFactory;
      if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) {
          // return a placeholder node for async component, which is rendered
          // as a comment node but preserves all the raw information for the node.
          // the information will be used for async server-rendering and hydration.
          return createAsyncPlaceholder(
            asyncFactory,
            data,
            context,
            children,
            tag
          )
        }
      }

      data = data || {};

      // resolve constructor options in case global mixins are applied after
      // component constructor creation
      resolveConstructorOptions(Ctor);

      // transform component v-model data into props & events
      if (isDef(data.model)) {
        transformModel(Ctor.options, data);
      }

      // extract props
      var propsData = extractPropsFromVNodeData(data, Ctor, tag);

      // functional component
      if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children)
      }

      // extract listeners, since these needs to be treated as
      // child component listeners instead of DOM listeners
      var listeners = data.on;
      // replace with listeners with .native modifier
      // so it gets processed during parent component patch.
      data.on = data.nativeOn;

      if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot

        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
          data.slot = slot;
        }
      }

      // install component management hooks onto the placeholder node
      installComponentHooks(data);

      // return a placeholder vnode
      var name = Ctor.options.name || tag;
      var vnode = new VNode(
        ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
        data, undefined, undefined, undefined, context,
        { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
        asyncFactory
      );

      return vnode
    }

    function createComponentInstanceForVnode (
      vnode, // we know it's MountedComponentVNode but flow doesn't
      parent // activeInstance in lifecycle state
    ) {
      var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
      };
      // check inline-template render functions
      var inlineTemplate = vnode.data.inlineTemplate;
      if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnode.componentOptions.Ctor(options)
    }

    function installComponentHooks (data) {
      var hooks = data.hook || (data.hook = {});
      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];
        if (existing !== toMerge && !(existing && existing._merged)) {
          hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
        }
      }
    }

    function mergeHook$1 (f1, f2) {
      var merged = function (a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
      };
      merged._merged = true;
      return merged
    }

    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel (options, data) {
      var prop = (options.model && options.model.prop) || 'value';
      var event = (options.model && options.model.event) || 'input'
      ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      var existing = on[event];
      var callback = data.model.callback;
      if (isDef(existing)) {
        if (
          Array.isArray(existing)
            ? existing.indexOf(callback) === -1
            : existing !== callback
        ) {
          on[event] = [callback].concat(existing);
        }
      } else {
        on[event] = callback;
      }
    }

    /*  */

    var SIMPLE_NORMALIZE = 1;
    var ALWAYS_NORMALIZE = 2;

    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement (
      context,
      tag,
      data,
      children,
      normalizationType,
      alwaysNormalize
    ) {
      if (Array.isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
      }
      if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
      }
      return _createElement(context, tag, data, children, normalizationType)
    }

    function _createElement (
      context,
      tag,
      data,
      children,
      normalizationType
    ) {
      if (isDef(data) && isDef((data).__ob__)) {
        process.env.NODE_ENV !== 'production' && warn(
          "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
          'Always create fresh vnode data objects in each render!',
          context
        );
        return createEmptyVNode()
      }
      // object syntax in v-bind
      if (isDef(data) && isDef(data.is)) {
        tag = data.is;
      }
      if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode()
      }
      // warn against non-primitive key
      if (process.env.NODE_ENV !== 'production' &&
        isDef(data) && isDef(data.key) && !isPrimitive(data.key)
      ) {
        {
          warn(
            'Avoid using non-primitive value as key, ' +
            'use string/number value instead.',
            context
          );
        }
      }
      // support single function children as default scoped slot
      if (Array.isArray(children) &&
        typeof children[0] === 'function'
      ) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
      }
      if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
      } else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
      }
      var vnode, ns;
      if (typeof tag === 'string') {
        var Ctor;
        ns = (context.$vnode && context.$vnode.ns) || config$1.getTagNamespace(tag);
        if (config$1.isReservedTag(tag)) {
          // platform built-in elements
          vnode = new VNode(
            config$1.parsePlatformTagName(tag), data, children,
            undefined, undefined, context
          );
        } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
          // component
          vnode = createComponent(Ctor, data, context, children, tag);
        } else {
          // unknown or unlisted namespaced elements
          // check at runtime because it may get assigned a namespace when its
          // parent normalizes children
          vnode = new VNode(
            tag, data, children,
            undefined, undefined, context
          );
        }
      } else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
      }
      if (Array.isArray(vnode)) {
        return vnode
      } else if (isDef(vnode)) {
        if (isDef(ns)) { applyNS(vnode, ns); }
        if (isDef(data)) { registerDeepBindings(data); }
        return vnode
      } else {
        return createEmptyVNode()
      }
    }

    function applyNS (vnode, ns, force) {
      vnode.ns = ns;
      if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
      }
      if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
          var child = vnode.children[i];
          if (isDef(child.tag) && (
            isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
            applyNS(child, ns, force);
          }
        }
      }
    }

    // ref #5318
    // necessary to ensure parent re-render when deep bindings like :style and
    // :class are used on slot nodes
    function registerDeepBindings (data) {
      if (isObject(data.style)) {
        traverse(data.style);
      }
      if (isObject(data.class)) {
        traverse(data.class);
      }
    }

    /*  */

    function initRender (vm) {
      vm._vnode = null; // the root of the child tree
      vm._staticTrees = null; // v-once cached trees
      var options = vm.$options;
      var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = emptyObject;
      // bind the createElement fn to this instance
      // so that we get proper render context inside it.
      // args order: tag, data, children, normalizationType, alwaysNormalize
      // internal version is used by render functions compiled from templates
      vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
      // normalization is always applied for the public version, used in
      // user-written render functions.
      vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

      // $attrs & $listeners are exposed for easier HOC creation.
      // they need to be reactive so that HOCs using them are always updated
      var parentData = parentVnode && parentVnode.data;

      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
          !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        }, true);
        defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
          !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        }, true);
      } else {
        defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
        defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
      }
    }

    var currentRenderingInstance = null;

    function renderMixin (Vue) {
      // install runtime convenience helpers
      installRenderHelpers(Vue.prototype);

      Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this)
      };

      Vue.prototype._render = function () {
        var vm = this;
        var ref = vm.$options;
        var render = ref.render;
        var _parentVnode = ref._parentVnode;

        if (_parentVnode) {
          vm.$scopedSlots = normalizeScopedSlots(
            _parentVnode.data.scopedSlots,
            vm.$slots,
            vm.$scopedSlots
          );
        }

        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var vnode;
        try {
          // There's no need to maintain a stack becaues all render fns are called
          // separately from one another. Nested component's render fns are called
          // when parent component is patched.
          currentRenderingInstance = vm;
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          handleError(e, vm, "render");
          // return error render result,
          // or previous vnode to prevent render error causing blank component
          /* istanbul ignore else */
          if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        } finally {
          currentRenderingInstance = null;
        }
        // if the returned array contains only a single node, allow it
        if (Array.isArray(vnode) && vnode.length === 1) {
          vnode = vnode[0];
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
          if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
            warn(
              'Multiple root nodes returned from render function. Render function ' +
              'should return a single root node.',
              vm
            );
          }
          vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode
      };
    }

    /*  */

    function ensureCtor (comp, base) {
      if (
        comp.__esModule ||
        (hasSymbol && comp[Symbol.toStringTag] === 'Module')
      ) {
        comp = comp.default;
      }
      return isObject(comp)
        ? base.extend(comp)
        : comp
    }

    function createAsyncPlaceholder (
      factory,
      data,
      context,
      children,
      tag
    ) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = { data: data, context: context, children: children, tag: tag };
      return node
    }

    function resolveAsyncComponent (
      factory,
      baseCtor
    ) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp
      }

      if (isDef(factory.resolved)) {
        return factory.resolved
      }

      var owner = currentRenderingInstance;
      if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
      }

      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp
      }

      if (owner && !isDef(factory.owners)) {
        var owners = factory.owners = [owner];
        var sync = true;
        var timerLoading = null;
        var timerTimeout = null

        ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

        var forceRender = function (renderCompleted) {
          for (var i = 0, l = owners.length; i < l; i++) {
            (owners[i]).$forceUpdate();
          }

          if (renderCompleted) {
            owners.length = 0;
            if (timerLoading !== null) {
              clearTimeout(timerLoading);
              timerLoading = null;
            }
            if (timerTimeout !== null) {
              clearTimeout(timerTimeout);
              timerTimeout = null;
            }
          }
        };

        var resolve = once(function (res) {
          // cache resolved
          factory.resolved = ensureCtor(res, baseCtor);
          // invoke callbacks only if this is not a synchronous resolve
          // (async resolves are shimmed as synchronous during SSR)
          if (!sync) {
            forceRender(true);
          } else {
            owners.length = 0;
          }
        });

        var reject = once(function (reason) {
          process.env.NODE_ENV !== 'production' && warn(
            "Failed to resolve async component: " + (String(factory)) +
            (reason ? ("\nReason: " + reason) : '')
          );
          if (isDef(factory.errorComp)) {
            factory.error = true;
            forceRender(true);
          }
        });

        var res = factory(resolve, reject);

        if (isObject(res)) {
          if (isPromise(res)) {
            // () => Promise
            if (isUndef(factory.resolved)) {
              res.then(resolve, reject);
            }
          } else if (isPromise(res.component)) {
            res.component.then(resolve, reject);

            if (isDef(res.error)) {
              factory.errorComp = ensureCtor(res.error, baseCtor);
            }

            if (isDef(res.loading)) {
              factory.loadingComp = ensureCtor(res.loading, baseCtor);
              if (res.delay === 0) {
                factory.loading = true;
              } else {
                timerLoading = setTimeout(function () {
                  timerLoading = null;
                  if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender(false);
                  }
                }, res.delay || 200);
              }
            }

            if (isDef(res.timeout)) {
              timerTimeout = setTimeout(function () {
                timerTimeout = null;
                if (isUndef(factory.resolved)) {
                  reject(
                    process.env.NODE_ENV !== 'production'
                      ? ("timeout (" + (res.timeout) + "ms)")
                      : null
                  );
                }
              }, res.timeout);
            }
          }
        }

        sync = false;
        // return in case resolved synchronously
        return factory.loading
          ? factory.loadingComp
          : factory.resolved
      }
    }

    /*  */

    function isAsyncPlaceholder (node) {
      return node.isComment && node.asyncFactory
    }

    /*  */

    function getFirstComponentChild (children) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var c = children[i];
          if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
            return c
          }
        }
      }
    }

    /*  */

    /*  */

    function initEvents (vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false;
      // init parent attached events
      var listeners = vm.$options._parentListeners;
      if (listeners) {
        updateComponentListeners(vm, listeners);
      }
    }

    var target;

    function add (event, fn) {
      target.$on(event, fn);
    }

    function remove$1 (event, fn) {
      target.$off(event, fn);
    }

    function createOnceHandler (event, fn) {
      var _target = target;
      return function onceHandler () {
        var res = fn.apply(null, arguments);
        if (res !== null) {
          _target.$off(event, onceHandler);
        }
      }
    }

    function updateComponentListeners (
      vm,
      listeners,
      oldListeners
    ) {
      target = vm;
      updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
      target = undefined;
    }

    function eventsMixin (Vue) {
      var hookRE = /^hook:/;
      Vue.prototype.$on = function (event, fn) {
        var vm = this;
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            vm.$on(event[i], fn);
          }
        } else {
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          // optimize hook:event cost by using a boolean flag marked at registration
          // instead of a hash lookup
          if (hookRE.test(event)) {
            vm._hasHookEvent = true;
          }
        }
        return vm
      };

      Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on () {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm
      };

      Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm
        }
        // array of events
        if (Array.isArray(event)) {
          for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
            vm.$off(event[i$1], fn);
          }
          return vm
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
          return vm
        }
        if (!fn) {
          vm._events[event] = null;
          return vm
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
          cb = cbs[i];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break
          }
        }
        return vm
      };

      Vue.prototype.$emit = function (event) {
        var vm = this;
        if (process.env.NODE_ENV !== 'production') {
          var lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            tip(
              "Event \"" + lowerCaseEvent + "\" is emitted in component " +
              (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
              "Note that HTML attributes are case-insensitive and you cannot use " +
              "v-on to listen to camelCase events when using in-DOM templates. " +
              "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
            );
          }
        }
        var cbs = vm._events[event];
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          var info = "event handler for \"" + event + "\"";
          for (var i = 0, l = cbs.length; i < l; i++) {
            invokeWithErrorHandling(cbs[i], vm, args, vm, info);
          }
        }
        return vm
      };
    }

    /*  */

    var activeInstance = null;
    var isUpdatingChildComponent = false;

    function setActiveInstance(vm) {
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      return function () {
        activeInstance = prevActiveInstance;
      }
    }

    function initLifecycle (vm) {
      var options = vm.$options;

      // locate first non-abstract parent
      var parent = options.parent;
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }

      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;

      vm.$children = [];
      vm.$refs = {};

      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }

    function lifecycleMixin (Vue) {
      Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
          // initial render
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        } else {
          // updates
          vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
      };

      Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
          vm._watcher.update();
        }
      };

      Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
          return
        }
        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
          remove(parent.$children, vm);
        }
        // teardown watchers
        if (vm._watcher) {
          vm._watcher.teardown();
        }
        var i = vm._watchers.length;
        while (i--) {
          vm._watchers[i].teardown();
        }
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
          vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
          vm.$vnode.parent = null;
        }
      };
    }

    function mountComponent (
      vm,
      el,
      hydrating
    ) {
      vm.$el = el;
      if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
        if (process.env.NODE_ENV !== 'production') {
          /* istanbul ignore if */
          if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
            vm.$options.el || el) {
            warn(
              'You are using the runtime-only build of Vue where the template ' +
              'compiler is not available. Either pre-compile the templates into ' +
              'render functions, or use the compiler-included build.',
              vm
            );
          } else {
            warn(
              'Failed to mount component: template or render function not defined.',
              vm
            );
          }
        }
      }
      callHook(vm, 'beforeMount');

      var updateComponent;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config$1.performance && mark) {
        updateComponent = function () {
          var name = vm._name;
          var id = vm._uid;
          var startTag = "vue-perf-start:" + id;
          var endTag = "vue-perf-end:" + id;

          mark(startTag);
          var vnode = vm._render();
          mark(endTag);
          measure(("vue " + name + " render"), startTag, endTag);

          mark(startTag);
          vm._update(vnode, hydrating);
          mark(endTag);
          measure(("vue " + name + " patch"), startTag, endTag);
        };
      } else {
        updateComponent = function () {
          vm._update(vm._render(), hydrating);
        };
      }

      // we set this to vm._watcher inside the watcher's constructor
      // since the watcher's initial patch may call $forceUpdate (e.g. inside child
      // component's mounted hook), which relies on vm._watcher being already defined
      new Watcher(vm, updateComponent, noop, {
        before: function before () {
          if (vm._isMounted && !vm._isDestroyed) {
            callHook(vm, 'beforeUpdate');
          }
        }
      }, true /* isRenderWatcher */);
      hydrating = false;

      // manually mounted instance, call mounted on self
      // mounted is called for render-created child components in its inserted hook
      if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, 'mounted');
      }
      return vm
    }

    function updateChildComponent (
      vm,
      propsData,
      listeners,
      parentVnode,
      renderChildren
    ) {
      if (process.env.NODE_ENV !== 'production') {
        isUpdatingChildComponent = true;
      }

      // determine whether component has slot children
      // we need to do this before overwriting $options._renderChildren.

      // check if there are dynamic scopedSlots (hand-written or compiled but with
      // dynamic slot names). Static scoped slots compiled from template has the
      // "$stable" marker.
      var newScopedSlots = parentVnode.data.scopedSlots;
      var oldScopedSlots = vm.$scopedSlots;
      var hasDynamicScopedSlot = !!(
        (newScopedSlots && !newScopedSlots.$stable) ||
        (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
        (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
      );

      // Any static slot children from the parent may have changed during parent's
      // update. Dynamic scoped slots may also have changed. In such cases, a forced
      // update is necessary to ensure correctness.
      var needsForceUpdate = !!(
        renderChildren ||               // has new static slots
        vm.$options._renderChildren ||  // has old static slots
        hasDynamicScopedSlot
      );

      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode; // update vm's placeholder node without re-render

      if (vm._vnode) { // update child tree's parent
        vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;

      // update $attrs and $listeners hash
      // these are also reactive so they may trigger child update if the child
      // used them during render
      vm.$attrs = parentVnode.data.attrs || emptyObject;
      vm.$listeners = listeners || emptyObject;

      // update props
      if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          var propOptions = vm.$options.props; // wtf flow?
          props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
      }

      // update listeners
      listeners = listeners || emptyObject;
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);

      // resolve slots + force update if has children
      if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }

      if (process.env.NODE_ENV !== 'production') {
        isUpdatingChildComponent = false;
      }
    }

    function isInInactiveTree (vm) {
      while (vm && (vm = vm.$parent)) {
        if (vm._inactive) { return true }
      }
      return false
    }

    function activateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
          return
        }
      } else if (vm._directInactive) {
        return
      }
      if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
          activateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'activated');
      }
    }

    function deactivateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
          return
        }
      }
      if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
          deactivateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'deactivated');
      }
    }

    function callHook (vm, hook) {
      // #7573 disable dep collection when invoking lifecycle hooks
      pushTarget();
      var handlers = vm.$options[hook];
      var info = hook + " hook";
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          invokeWithErrorHandling(handlers[i], vm, null, vm, info);
        }
      }
      if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
      }
      popTarget();
    }

    /*  */

    var MAX_UPDATE_COUNT = 100;

    var queue$1 = [];
    var activatedChildren = [];
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index$1 = 0;

    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState () {
      index$1 = queue$1.length = activatedChildren.length = 0;
      has = {};
      if (process.env.NODE_ENV !== 'production') {
        circular = {};
      }
      waiting = flushing = false;
    }

    // Async edge case #6566 requires saving the timestamp when event listeners are
    // attached. However, calling performance.now() has a perf overhead especially
    // if the page has thousands of event listeners. Instead, we take a timestamp
    // every time the scheduler flushes and use that for all event listeners
    // attached during that flush.
    var currentFlushTimestamp = 0;

    // Async edge case fix requires storing an event listener's attach timestamp.
    var getNow = Date.now;

    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    // All IE versions use low-res event timestamps, and have problematic clock
    // implementations (#9632)
    if (inBrowser && !isIE) {
      var performance = window.performance;
      if (
        performance &&
        typeof performance.now === 'function' &&
        getNow() > document.createEvent('Event').timeStamp
      ) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function () { return performance.now(); };
      }
    }

    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue () {
      currentFlushTimestamp = getNow();
      flushing = true;
      var watcher, id;

      // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child)
      // 2. A component's user watchers are run before its render watcher (because
      //    user watchers are created before the render watcher)
      // 3. If a component is destroyed during a parent component's watcher run,
      //    its watchers can be skipped.
      queue$1.sort(function (a, b) { return a.id - b.id; });

      // do not cache length because more watchers might be pushed
      // as we run existing watchers
      for (index$1 = 0; index$1 < queue$1.length; index$1++) {
        watcher = queue$1[index$1];
        if (watcher.before) {
          watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if (process.env.NODE_ENV !== 'production' && has[id] != null) {
          circular[id] = (circular[id] || 0) + 1;
          if (circular[id] > MAX_UPDATE_COUNT) {
            warn(
              'You may have an infinite update loop ' + (
                watcher.user
                  ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                  : "in a component render function."
              ),
              watcher.vm
            );
            break
          }
        }
      }

      // keep copies of post queues before resetting state
      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue$1.slice();

      resetSchedulerState();

      // call component updated and activated hooks
      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue);

      // devtool hook
      /* istanbul ignore if */
      if (devtools && config$1.devtools) {
        devtools.emit('flush');
      }
    }

    function callUpdatedHooks (queue) {
      var i = queue.length;
      while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'updated');
        }
      }
    }

    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent (vm) {
      // setting _inactive to false here so that a render function can
      // rely on checking whether it's in an inactive tree (e.g. router-view)
      vm._inactive = false;
      activatedChildren.push(vm);
    }

    function callActivatedHooks (queue) {
      for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
      }
    }

    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher (watcher) {
      var id = watcher.id;
      if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
          queue$1.push(watcher);
        } else {
          // if already flushing, splice the watcher based on its id
          // if already past its id, it will be run next immediately.
          var i = queue$1.length - 1;
          while (i > index$1 && queue$1[i].id > watcher.id) {
            i--;
          }
          queue$1.splice(i + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
          waiting = true;

          if (process.env.NODE_ENV !== 'production' && !config$1.async) {
            flushSchedulerQueue();
            return
          }
          nextTick(flushSchedulerQueue);
        }
      }
    }

    /*  */



    var uid$2 = 0;

    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    var Watcher = function Watcher (
      vm,
      expOrFn,
      cb,
      options,
      isRenderWatcher
    ) {
      this.vm = vm;
      if (isRenderWatcher) {
        vm._watcher = this;
      }
      vm._watchers.push(this);
      // options
      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.before = options.before;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = cb;
      this.id = ++uid$2; // uid for batching
      this.active = true;
      this.dirty = this.lazy; // for lazy watchers
      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression = process.env.NODE_ENV !== 'production'
        ? expOrFn.toString()
        : '';
      // parse expression for getter
      if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          this.getter = noop;
          process.env.NODE_ENV !== 'production' && warn(
            "Failed watching path: \"" + expOrFn + "\" " +
            'Watcher only accepts simple dot-delimited paths. ' +
            'For full control, use a function instead.',
            vm
          );
        }
      }
      this.value = this.lazy
        ? undefined
        : this.get();
    };

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function get () {
      pushTarget(this);
      var value;
      var vm = this.vm;
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
        } else {
          throw e
        }
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
      }
      return value
    };

    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function addDep (dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };

    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function cleanupDeps () {
      var i = this.deps.length;
      while (i--) {
        var dep = this.deps[i];
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function update () {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function run () {
      if (this.active) {
        var value = this.get();
        if (
          value !== this.value ||
          // Deep watchers and watchers on Object/Arrays should fire even
          // when the value is the same, because the value may
          // have mutated.
          isObject(value) ||
          this.deep
        ) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          if (this.user) {
            try {
              this.cb.call(this.vm, value, oldValue);
            } catch (e) {
              handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
            }
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function evaluate () {
      this.value = this.get();
      this.dirty = false;
    };

    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function depend () {
      var i = this.deps.length;
      while (i--) {
        this.deps[i].depend();
      }
    };

    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function teardown () {
      if (this.active) {
        // remove self from vm's watcher list
        // this is a somewhat expensive operation so we skip it
        // if the vm is being destroyed.
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }
        var i = this.deps.length;
        while (i--) {
          this.deps[i].removeSub(this);
        }
        this.active = false;
      }
    };

    /*  */

    var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
    };

    function proxy$1 (target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key]
      };
      sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val;
      };
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }

    function initState (vm) {
      vm._watchers = [];
      var opts = vm.$options;
      if (opts.props) { initProps(vm, opts.props); }
      if (opts.methods) { initMethods(vm, opts.methods); }
      if (opts.data) {
        initData(vm);
      } else {
        observe(vm._data = {}, true /* asRootData */);
      }
      if (opts.computed) { initComputed(vm, opts.computed); }
      if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
      }
    }

    function initProps (vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props = vm._props = {};
      // cache prop keys so that future props updates can iterate using Array
      // instead of dynamic object key enumeration.
      var keys = vm.$options._propKeys = [];
      var isRoot = !vm.$parent;
      // root instance props should be converted
      if (!isRoot) {
        toggleObserving(false);
      }
      var loop = function ( key ) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production') {
          var hyphenatedKey = hyphenate(key);
          if (isReservedAttribute(hyphenatedKey) ||
              config$1.isReservedAttr(hyphenatedKey)) {
            warn(
              ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
              vm
            );
          }
          defineReactive$$1(props, key, value, function () {
            if (!isRoot && !isUpdatingChildComponent) {
              warn(
                "Avoid mutating a prop directly since the value will be " +
                "overwritten whenever the parent component re-renders. " +
                "Instead, use a data or computed property based on the prop's " +
                "value. Prop being mutated: \"" + key + "\"",
                vm
              );
            }
          });
        } else {
          defineReactive$$1(props, key, value);
        }
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
          proxy$1(vm, "_props", key);
        }
      };

      for (var key in propsOptions) loop( key );
      toggleObserving(true);
    }

    function initData (vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {};
      if (!isPlainObject(data)) {
        data = {};
        process.env.NODE_ENV !== 'production' && warn(
          'data functions should return an object:\n' +
          'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
          vm
        );
      }
      // proxy data on instance
      var keys = Object.keys(data);
      var props = vm.$options.props;
      var methods = vm.$options.methods;
      var i = keys.length;
      while (i--) {
        var key = keys[i];
        if (process.env.NODE_ENV !== 'production') {
          if (methods && hasOwn(methods, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a data property."),
              vm
            );
          }
        }
        if (props && hasOwn(props, key)) {
          process.env.NODE_ENV !== 'production' && warn(
            "The data property \"" + key + "\" is already declared as a prop. " +
            "Use prop default value instead.",
            vm
          );
        } else if (!isReserved(key)) {
          proxy$1(vm, "_data", key);
        }
      }
      // observe data
      observe(data, true /* asRootData */);
    }

    function getData (data, vm) {
      // #7573 disable dep collection when invoking data getters
      pushTarget();
      try {
        return data.call(vm, vm)
      } catch (e) {
        handleError(e, vm, "data()");
        return {}
      } finally {
        popTarget();
      }
    }

    var computedWatcherOptions = { lazy: true };

    function initComputed (vm, computed) {
      // $flow-disable-line
      var watchers = vm._computedWatchers = Object.create(null);
      // computed properties are just getters during SSR
      var isSSR = isServerRendering();

      for (var key in computed) {
        var userDef = computed[key];
        var getter = typeof userDef === 'function' ? userDef : userDef.get;
        if (process.env.NODE_ENV !== 'production' && getter == null) {
          warn(
            ("Getter is missing for computed property \"" + key + "\"."),
            vm
          );
        }

        if (!isSSR) {
          // create internal watcher for the computed property.
          watchers[key] = new Watcher(
            vm,
            getter || noop,
            noop,
            computedWatcherOptions
          );
        }

        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
          defineComputed(vm, key, userDef);
        } else if (process.env.NODE_ENV !== 'production') {
          if (key in vm.$data) {
            warn(("The computed property \"" + key + "\" is already defined in data."), vm);
          } else if (vm.$options.props && key in vm.$options.props) {
            warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
          }
        }
      }
    }

    function defineComputed (
      target,
      key,
      userDef
    ) {
      var shouldCache = !isServerRendering();
      if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache
          ? createComputedGetter(key)
          : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
      } else {
        sharedPropertyDefinition.get = userDef.get
          ? shouldCache && userDef.cache !== false
            ? createComputedGetter(key)
            : createGetterInvoker(userDef.get)
          : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
      }
      if (process.env.NODE_ENV !== 'production' &&
          sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
          warn(
            ("Computed property \"" + key + "\" was assigned to but it has no setter."),
            this
          );
        };
      }
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }

    function createComputedGetter (key) {
      return function computedGetter () {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value
        }
      }
    }

    function createGetterInvoker(fn) {
      return function computedGetter () {
        return fn.call(this, this)
      }
    }

    function initMethods (vm, methods) {
      var props = vm.$options.props;
      for (var key in methods) {
        if (process.env.NODE_ENV !== 'production') {
          if (typeof methods[key] !== 'function') {
            warn(
              "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
              "Did you reference the function correctly?",
              vm
            );
          }
          if (props && hasOwn(props, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a prop."),
              vm
            );
          }
          if ((key in vm) && isReserved(key)) {
            warn(
              "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
              "Avoid defining component methods that start with _ or $."
            );
          }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
      }
    }

    function initWatch (vm, watch) {
      for (var key in watch) {
        var handler = watch[key];
        if (Array.isArray(handler)) {
          for (var i = 0; i < handler.length; i++) {
            createWatcher(vm, key, handler[i]);
          }
        } else {
          createWatcher(vm, key, handler);
        }
      }
    }

    function createWatcher (
      vm,
      expOrFn,
      handler,
      options
    ) {
      if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
      }
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      return vm.$watch(expOrFn, handler, options)
    }

    function stateMixin (Vue) {
      // flow somehow has problems with directly declared definition object
      // when using Object.defineProperty, so we have to procedurally build up
      // the object here.
      var dataDef = {};
      dataDef.get = function () { return this._data };
      var propsDef = {};
      propsDef.get = function () { return this._props };
      if (process.env.NODE_ENV !== 'production') {
        dataDef.set = function () {
          warn(
            'Avoid replacing instance root $data. ' +
            'Use nested data properties instead.',
            this
          );
        };
        propsDef.set = function () {
          warn("$props is readonly.", this);
        };
      }
      Object.defineProperty(Vue.prototype, '$data', dataDef);
      Object.defineProperty(Vue.prototype, '$props', propsDef);

      Vue.prototype.$set = set$1;
      Vue.prototype.$delete = del;

      Vue.prototype.$watch = function (
        expOrFn,
        cb,
        options
      ) {
        var vm = this;
        if (isPlainObject(cb)) {
          return createWatcher(vm, expOrFn, cb, options)
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
          try {
            cb.call(vm, watcher.value);
          } catch (error) {
            handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
          }
        }
        return function unwatchFn () {
          watcher.teardown();
        }
      };
    }

    /*  */

    var uid$3 = 0;

    function initMixin (Vue) {
      Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid$3++;

        var startTag, endTag;
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && config$1.performance && mark) {
          startTag = "vue-perf-start:" + (vm._uid);
          endTag = "vue-perf-end:" + (vm._uid);
          mark(startTag);
        }

        // a flag to avoid this being observed
        vm._isVue = true;
        // merge options
        if (options && options._isComponent) {
          // optimize internal component instantiation
          // since dynamic options merging is pretty slow, and none of the
          // internal component options needs special treatment.
          initInternalComponent(vm, options);
        } else {
          vm.$options = mergeOptions(
            resolveConstructorOptions(vm.constructor),
            options || {},
            vm
          );
        }
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production') {
          initProxy(vm);
        } else {
          vm._renderProxy = vm;
        }
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook(vm, 'beforeCreate');
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook(vm, 'created');

        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && config$1.performance && mark) {
          vm._name = formatComponentName(vm, false);
          mark(endTag);
          measure(("vue " + (vm._name) + " init"), startTag, endTag);
        }

        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }

    function initInternalComponent (vm, options) {
      var opts = vm.$options = Object.create(vm.constructor.options);
      // doing this because it's faster than dynamic enumeration.
      var parentVnode = options._parentVnode;
      opts.parent = options.parent;
      opts._parentVnode = parentVnode;

      var vnodeComponentOptions = parentVnode.componentOptions;
      opts.propsData = vnodeComponentOptions.propsData;
      opts._parentListeners = vnodeComponentOptions.listeners;
      opts._renderChildren = vnodeComponentOptions.children;
      opts._componentTag = vnodeComponentOptions.tag;

      if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
      }
    }

    function resolveConstructorOptions (Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
          // super option changed,
          // need to resolve new options.
          Ctor.superOptions = superOptions;
          // check if there are any late-modified/attached options (#4976)
          var modifiedOptions = resolveModifiedOptions(Ctor);
          // update base extend options
          if (modifiedOptions) {
            extend(Ctor.extendOptions, modifiedOptions);
          }
          options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
          if (options.name) {
            options.components[options.name] = Ctor;
          }
        }
      }
      return options
    }

    function resolveModifiedOptions (Ctor) {
      var modified;
      var latest = Ctor.options;
      var sealed = Ctor.sealedOptions;
      for (var key in latest) {
        if (latest[key] !== sealed[key]) {
          if (!modified) { modified = {}; }
          modified[key] = latest[key];
        }
      }
      return modified
    }

    function Vue (options) {
      if (process.env.NODE_ENV !== 'production' &&
        !(this instanceof Vue)
      ) {
        warn('Vue is a constructor and should be called with the `new` keyword');
      }
      this._init(options);
    }

    initMixin(Vue);
    stateMixin(Vue);
    eventsMixin(Vue);
    lifecycleMixin(Vue);
    renderMixin(Vue);

    /*  */

    function initUse (Vue) {
      Vue.use = function (plugin) {
        var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
        if (installedPlugins.indexOf(plugin) > -1) {
          return this
        }

        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else if (typeof plugin === 'function') {
          plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this
      };
    }

    /*  */

    function initMixin$1 (Vue) {
      Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this
      };
    }

    /*  */

    function initExtend (Vue) {
      /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
      Vue.cid = 0;
      var cid = 1;

      /**
       * Class inheritance
       */
      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
          return cachedCtors[SuperId]
        }

        var name = extendOptions.name || Super.options.name;
        if (process.env.NODE_ENV !== 'production' && name) {
          validateComponentName(name);
        }

        var Sub = function VueComponent (options) {
          this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(
          Super.options,
          extendOptions
        );
        Sub['super'] = Super;

        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
          initProps$1(Sub);
        }
        if (Sub.options.computed) {
          initComputed$1(Sub);
        }

        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;

        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
          Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
          Sub.options.components[name] = Sub;
        }

        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);

        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub
      };
    }

    function initProps$1 (Comp) {
      var props = Comp.options.props;
      for (var key in props) {
        proxy$1(Comp.prototype, "_props", key);
      }
    }

    function initComputed$1 (Comp) {
      var computed = Comp.options.computed;
      for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
      }
    }

    /*  */

    function initAssetRegisters (Vue) {
      /**
       * Create asset registration methods.
       */
      ASSET_TYPES.forEach(function (type) {
        Vue[type] = function (
          id,
          definition
        ) {
          if (!definition) {
            return this.options[type + 's'][id]
          } else {
            /* istanbul ignore if */
            if (process.env.NODE_ENV !== 'production' && type === 'component') {
              validateComponentName(id);
            }
            if (type === 'component' && isPlainObject(definition)) {
              definition.name = definition.name || id;
              definition = this.options._base.extend(definition);
            }
            if (type === 'directive' && typeof definition === 'function') {
              definition = { bind: definition, update: definition };
            }
            this.options[type + 's'][id] = definition;
            return definition
          }
        };
      });
    }

    /*  */



    function getComponentName (opts) {
      return opts && (opts.Ctor.options.name || opts.tag)
    }

    function matches (pattern, name) {
      if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1
      } else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1
      } else if (isRegExp(pattern)) {
        return pattern.test(name)
      }
      /* istanbul ignore next */
      return false
    }

    function pruneCache (keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache;
      var keys = keepAliveInstance.keys;
      var _vnode = keepAliveInstance._vnode;
      for (var key in cache) {
        var cachedNode = cache[key];
        if (cachedNode) {
          var name = getComponentName(cachedNode.componentOptions);
          if (name && !filter(name)) {
            pruneCacheEntry(cache, key, keys, _vnode);
          }
        }
      }
    }

    function pruneCacheEntry (
      cache,
      key,
      keys,
      current
    ) {
      var cached$$1 = cache[key];
      if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
        cached$$1.componentInstance.$destroy();
      }
      cache[key] = null;
      remove(keys, key);
    }

    var patternTypes = [String, RegExp, Array];

    var KeepAlive = {
      name: 'keep-alive',
      abstract: true,

      props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
      },

      created: function created () {
        this.cache = Object.create(null);
        this.keys = [];
      },

      destroyed: function destroyed () {
        for (var key in this.cache) {
          pruneCacheEntry(this.cache, key, this.keys);
        }
      },

      mounted: function mounted () {
        var this$1 = this;

        this.$watch('include', function (val) {
          pruneCache(this$1, function (name) { return matches(val, name); });
        });
        this.$watch('exclude', function (val) {
          pruneCache(this$1, function (name) { return !matches(val, name); });
        });
      },

      render: function render () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
          // check pattern
          var name = getComponentName(componentOptions);
          var ref = this;
          var include = ref.include;
          var exclude = ref.exclude;
          if (
            // not included
            (include && (!name || !matches(include, name))) ||
            // excluded
            (exclude && name && matches(exclude, name))
          ) {
            return vnode
          }

          var ref$1 = this;
          var cache = ref$1.cache;
          var keys = ref$1.keys;
          var key = vnode.key == null
            // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
            : vnode.key;
          if (cache[key]) {
            vnode.componentInstance = cache[key].componentInstance;
            // make current key freshest
            remove(keys, key);
            keys.push(key);
          } else {
            cache[key] = vnode;
            keys.push(key);
            // prune oldest entry
            if (this.max && keys.length > parseInt(this.max)) {
              pruneCacheEntry(cache, keys[0], keys, this._vnode);
            }
          }

          vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0])
      }
    };

    var builtInComponents = {
      KeepAlive: KeepAlive
    };

    /*  */

    function initGlobalAPI (Vue) {
      // config
      var configDef = {};
      configDef.get = function () { return config$1; };
      if (process.env.NODE_ENV !== 'production') {
        configDef.set = function () {
          warn(
            'Do not replace the Vue.config object, set individual fields instead.'
          );
        };
      }
      Object.defineProperty(Vue, 'config', configDef);

      // exposed util methods.
      // NOTE: these are not considered part of the public API - avoid relying on
      // them unless you are aware of the risk.
      Vue.util = {
        warn: warn,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive$$1
      };

      Vue.set = set$1;
      Vue.delete = del;
      Vue.nextTick = nextTick;

      // 2.6 explicit observable API
      Vue.observable = function (obj) {
        observe(obj);
        return obj
      };

      Vue.options = Object.create(null);
      ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
      });

      // this is used to identify the "base" constructor to extend all plain-object
      // components with in Weex's multi-instance scenarios.
      Vue.options._base = Vue;

      extend(Vue.options.components, builtInComponents);

      initUse(Vue);
      initMixin$1(Vue);
      initExtend(Vue);
      initAssetRegisters(Vue);
    }

    initGlobalAPI(Vue);

    Object.defineProperty(Vue.prototype, '$isServer', {
      get: isServerRendering
    });

    Object.defineProperty(Vue.prototype, '$ssrContext', {
      get: function get () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext
      }
    });

    // expose FunctionalRenderContext for ssr runtime helper installation
    Object.defineProperty(Vue, 'FunctionalRenderContext', {
      value: FunctionalRenderContext
    });

    Vue.version = '2.6.10';

    /*  */

    // these are reserved for web because they are directly compiled away
    // during template compilation
    var isReservedAttr = makeMap('style,class');

    // attributes that should be using props for binding
    var acceptValue = makeMap('input,textarea,option,select,progress');
    var mustUseProp = function (tag, type, attr) {
      return (
        (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video')
      )
    };

    var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

    var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

    var convertEnumeratedValue = function (key, value) {
      return isFalsyAttrValue(value) || value === 'false'
        ? 'false'
        // allow arbitrary string value for contenteditable
        : key === 'contenteditable' && isValidContentEditableValue(value)
          ? value
          : 'true'
    };

    var isBooleanAttr = makeMap(
      'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
      'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
      'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
      'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
      'required,reversed,scoped,seamless,selected,sortable,translate,' +
      'truespeed,typemustmatch,visible'
    );

    var xlinkNS = 'http://www.w3.org/1999/xlink';

    var isXlink = function (name) {
      return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
    };

    var getXlinkProp = function (name) {
      return isXlink(name) ? name.slice(6, name.length) : ''
    };

    var isFalsyAttrValue = function (val) {
      return val == null || val === false
    };

    /*  */

    function genClassForVnode (vnode) {
      var data = vnode.data;
      var parentNode = vnode;
      var childNode = vnode;
      while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
          data = mergeClassData(childNode.data, data);
        }
      }
      while (isDef(parentNode = parentNode.parent)) {
        if (parentNode && parentNode.data) {
          data = mergeClassData(data, parentNode.data);
        }
      }
      return renderClass(data.staticClass, data.class)
    }

    function mergeClassData (child, parent) {
      return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class)
          ? [child.class, parent.class]
          : parent.class
      }
    }

    function renderClass (
      staticClass,
      dynamicClass
    ) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass))
      }
      /* istanbul ignore next */
      return ''
    }

    function concat (a, b) {
      return a ? b ? (a + ' ' + b) : a : (b || '')
    }

    function stringifyClass (value) {
      if (Array.isArray(value)) {
        return stringifyArray(value)
      }
      if (isObject(value)) {
        return stringifyObject(value)
      }
      if (typeof value === 'string') {
        return value
      }
      /* istanbul ignore next */
      return ''
    }

    function stringifyArray (value) {
      var res = '';
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          if (res) { res += ' '; }
          res += stringified;
        }
      }
      return res
    }

    function stringifyObject (value) {
      var res = '';
      for (var key in value) {
        if (value[key]) {
          if (res) { res += ' '; }
          res += key;
        }
      }
      return res
    }

    /*  */

    var namespaceMap = {
      svg: 'http://www.w3.org/2000/svg',
      math: 'http://www.w3.org/1998/Math/MathML'
    };

    var isHTMLTag = makeMap(
      'html,body,base,head,link,meta,style,title,' +
      'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
      'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
      'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
      's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
      'embed,object,param,source,canvas,script,noscript,del,ins,' +
      'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
      'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
      'output,progress,select,textarea,' +
      'details,dialog,menu,menuitem,summary,' +
      'content,element,shadow,template,blockquote,iframe,tfoot'
    );

    // this map is intentionally selective, only covering SVG elements that may
    // contain child elements.
    var isSVG = makeMap(
      'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
      'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
      'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
      true
    );

    var isReservedTag = function (tag) {
      return isHTMLTag(tag) || isSVG(tag)
    };

    function getTagNamespace (tag) {
      if (isSVG(tag)) {
        return 'svg'
      }
      // basic support for MathML
      // note it doesn't support other MathML elements being component roots
      if (tag === 'math') {
        return 'math'
      }
    }

    var unknownElementCache = Object.create(null);
    function isUnknownElement (tag) {
      /* istanbul ignore if */
      if (!inBrowser) {
        return true
      }
      if (isReservedTag(tag)) {
        return false
      }
      tag = tag.toLowerCase();
      /* istanbul ignore if */
      if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag]
      }
      var el = document.createElement(tag);
      if (tag.indexOf('-') > -1) {
        // http://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] = (
          el.constructor === window.HTMLUnknownElement ||
          el.constructor === window.HTMLElement
        ))
      } else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
      }
    }

    var isTextInputType = makeMap('text,number,password,search,email,tel,url');

    /*  */

    /**
     * Query an element selector if it's not an element already.
     */
    function query (el) {
      if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
          process.env.NODE_ENV !== 'production' && warn(
            'Cannot find element: ' + el
          );
          return document.createElement('div')
        }
        return selected
      } else {
        return el
      }
    }

    /*  */

    function createElement$1 (tagName, vnode) {
      var elm = document.createElement(tagName);
      if (tagName !== 'select') {
        return elm
      }
      // false or null will remove the attribute but undefined will not
      if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
      }
      return elm
    }

    function createElementNS (namespace, tagName) {
      return document.createElementNS(namespaceMap[namespace], tagName)
    }

    function createTextNode (text) {
      return document.createTextNode(text)
    }

    function createComment (text) {
      return document.createComment(text)
    }

    function insertBefore (parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
    }

    function removeChild (node, child) {
      node.removeChild(child);
    }

    function appendChild (node, child) {
      node.appendChild(child);
    }

    function parentNode (node) {
      return node.parentNode
    }

    function nextSibling (node) {
      return node.nextSibling
    }

    function tagName (node) {
      return node.tagName
    }

    function setTextContent (node, text) {
      node.textContent = text;
    }

    function setStyleScope (node, scopeId) {
      node.setAttribute(scopeId, '');
    }

    var nodeOps = /*#__PURE__*/Object.freeze({
      createElement: createElement$1,
      createElementNS: createElementNS,
      createTextNode: createTextNode,
      createComment: createComment,
      insertBefore: insertBefore,
      removeChild: removeChild,
      appendChild: appendChild,
      parentNode: parentNode,
      nextSibling: nextSibling,
      tagName: tagName,
      setTextContent: setTextContent,
      setStyleScope: setStyleScope
    });

    /*  */

    var ref = {
      create: function create (_, vnode) {
        registerRef(vnode);
      },
      update: function update (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
          registerRef(oldVnode, true);
          registerRef(vnode);
        }
      },
      destroy: function destroy (vnode) {
        registerRef(vnode, true);
      }
    };

    function registerRef (vnode, isRemoval) {
      var key = vnode.data.ref;
      if (!isDef(key)) { return }

      var vm = vnode.context;
      var ref = vnode.componentInstance || vnode.elm;
      var refs = vm.$refs;
      if (isRemoval) {
        if (Array.isArray(refs[key])) {
          remove(refs[key], ref);
        } else if (refs[key] === ref) {
          refs[key] = undefined;
        }
      } else {
        if (vnode.data.refInFor) {
          if (!Array.isArray(refs[key])) {
            refs[key] = [ref];
          } else if (refs[key].indexOf(ref) < 0) {
            // $flow-disable-line
            refs[key].push(ref);
          }
        } else {
          refs[key] = ref;
        }
      }
    }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */

    var emptyNode = new VNode('', {}, []);

    var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

    function sameVnode (a, b) {
      return (
        a.key === b.key && (
          (
            a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)
          ) || (
            isTrue(a.isAsyncPlaceholder) &&
            a.asyncFactory === b.asyncFactory &&
            isUndef(b.asyncFactory.error)
          )
        )
      )
    }

    function sameInputType (a, b) {
      if (a.tag !== 'input') { return true }
      var i;
      var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
      var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
      return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
    }

    function createKeyToOldIdx (children, beginIdx, endIdx) {
      var i, key;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) { map[key] = i; }
      }
      return map
    }

    function createPatchFunction (backend) {
      var i, j;
      var cbs = {};

      var modules = backend.modules;
      var nodeOps = backend.nodeOps;

      for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
          if (isDef(modules[j][hooks[i]])) {
            cbs[hooks[i]].push(modules[j][hooks[i]]);
          }
        }
      }

      function emptyNodeAt (elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
      }

      function createRmCb (childElm, listeners) {
        function remove$$1 () {
          if (--remove$$1.listeners === 0) {
            removeNode(childElm);
          }
        }
        remove$$1.listeners = listeners;
        return remove$$1
      }

      function removeNode (el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
          nodeOps.removeChild(parent, el);
        }
      }

      function isUnknownElement$$1 (vnode, inVPre) {
        return (
          !inVPre &&
          !vnode.ns &&
          !(
            config$1.ignoredElements.length &&
            config$1.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(vnode.tag)
                : ignore === vnode.tag
            })
          ) &&
          config$1.isUnknownElement(vnode.tag)
        )
      }

      var creatingElmInVPre = 0;

      function createElm (
        vnode,
        insertedVnodeQueue,
        parentElm,
        refElm,
        nested,
        ownerArray,
        index
      ) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
          // This vnode was used in a previous render!
          // now it's used as a new node, overwriting its elm would cause
          // potential patch errors down the road when it's used as an insertion
          // reference node. Instead, we clone the node on-demand before creating
          // associated DOM element for it.
          vnode = ownerArray[index] = cloneVNode(vnode);
        }

        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
          return
        }

        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
          if (process.env.NODE_ENV !== 'production') {
            if (data && data.pre) {
              creatingElmInVPre++;
            }
            if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
              warn(
                'Unknown custom element: <' + tag + '> - did you ' +
                'register the component correctly? For recursive components, ' +
                'make sure to provide the "name" option.',
                vnode.context
              );
            }
          }

          vnode.elm = vnode.ns
            ? nodeOps.createElementNS(vnode.ns, tag)
            : nodeOps.createElement(tag, vnode);
          setScope(vnode);

          /* istanbul ignore if */
          {
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
          }

          if (process.env.NODE_ENV !== 'production' && data && data.pre) {
            creatingElmInVPre--;
          }
        } else if (isTrue(vnode.isComment)) {
          vnode.elm = nodeOps.createComment(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        } else {
          vnode.elm = nodeOps.createTextNode(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        }
      }

      function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
          var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
          if (isDef(i = i.hook) && isDef(i = i.init)) {
            i(vnode, false /* hydrating */);
          }
          // after calling the init hook, if the vnode is a child component
          // it should've created a child instance and mounted it. the child
          // component also has set the placeholder vnode's elm.
          // in that case we can just return the element and be done.
          if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            insert(parentElm, vnode.elm, refElm);
            if (isTrue(isReactivated)) {
              reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
            }
            return true
          }
        }
      }

      function initComponent (vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
          vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          // empty component root.
          // skip all element-related modules except for ref (#3455)
          registerRef(vnode);
          // make sure to invoke the insert hook
          insertedVnodeQueue.push(vnode);
        }
      }

      function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
          innerNode = innerNode.componentInstance._vnode;
          if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
            for (i = 0; i < cbs.activate.length; ++i) {
              cbs.activate[i](emptyNode, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break
          }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
      }

      function insert (parent, elm, ref$$1) {
        if (isDef(parent)) {
          if (isDef(ref$$1)) {
            if (nodeOps.parentNode(ref$$1) === parent) {
              nodeOps.insertBefore(parent, elm, ref$$1);
            }
          } else {
            nodeOps.appendChild(parent, elm);
          }
        }
      }

      function createChildren (vnode, children, insertedVnodeQueue) {
        if (Array.isArray(children)) {
          if (process.env.NODE_ENV !== 'production') {
            checkDuplicateKeys(children);
          }
          for (var i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
          }
        } else if (isPrimitive(vnode.text)) {
          nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
      }

      function isPatchable (vnode) {
        while (vnode.componentInstance) {
          vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag)
      }

      function invokeCreateHooks (vnode, insertedVnodeQueue) {
        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
          cbs.create[i$1](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
          if (isDef(i.create)) { i.create(emptyNode, vnode); }
          if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
        }
      }

      // set scope id attribute for scoped CSS.
      // this is implemented as a special case to avoid the overhead
      // of going through the normal attribute patching process.
      function setScope (vnode) {
        var i;
        if (isDef(i = vnode.fnScopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        } else {
          var ancestor = vnode;
          while (ancestor) {
            if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
              nodeOps.setStyleScope(vnode.elm, i);
            }
            ancestor = ancestor.parent;
          }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef(i = activeInstance) &&
          i !== vnode.context &&
          i !== vnode.fnContext &&
          isDef(i = i.$options._scopeId)
        ) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
      }

      function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
      }

      function invokeDestroyHook (vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
          for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
        }
        if (isDef(i = vnode.children)) {
          for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
          }
        }
      }

      function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else { // Text node
              removeNode(ch.elm);
            }
          }
        }
      }

      function removeAndInvokeRemoveHook (vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
          var i;
          var listeners = cbs.remove.length + 1;
          if (isDef(rm)) {
            // we have a recursively passed down rm callback
            // increase the listeners count
            rm.listeners += listeners;
          } else {
            // directly removing
            rm = createRmCb(vnode.elm, listeners);
          }
          // recursively invoke hooks on child component root node
          if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
            removeAndInvokeRemoveHook(i, rm);
          }
          for (i = 0; i < cbs.remove.length; ++i) {
            cbs.remove[i](vnode, rm);
          }
          if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
            i(vnode, rm);
          } else {
            rm();
          }
        } else {
          removeNode(vnode.elm);
        }
      }

      function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;

        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(newCh);
        }

        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
          } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
          } else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
          } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
            idxInOld = isDef(newStartVnode.key)
              ? oldKeyToIdx[newStartVnode.key]
              : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
            if (isUndef(idxInOld)) { // New element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            } else {
              vnodeToMove = oldCh[idxInOld];
              if (sameVnode(vnodeToMove, newStartVnode)) {
                patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldCh[idxInOld] = undefined;
                canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
              } else {
                // same key but different element. treat as new element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
              }
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
        if (oldStartIdx > oldEndIdx) {
          refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) {
          removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
      }

      function checkDuplicateKeys (children) {
        var seenKeys = {};
        for (var i = 0; i < children.length; i++) {
          var vnode = children[i];
          var key = vnode.key;
          if (isDef(key)) {
            if (seenKeys[key]) {
              warn(
                ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
                vnode.context
              );
            } else {
              seenKeys[key] = true;
            }
          }
        }
      }

      function findIdxInOld (node, oldCh, start, end) {
        for (var i = start; i < end; i++) {
          var c = oldCh[i];
          if (isDef(c) && sameVnode(node, c)) { return i }
        }
      }

      function patchVnode (
        oldVnode,
        vnode,
        insertedVnodeQueue,
        ownerArray,
        index,
        removeOnly
      ) {
        if (oldVnode === vnode) {
          return
        }

        if (isDef(vnode.elm) && isDef(ownerArray)) {
          // clone reused vnode
          vnode = ownerArray[index] = cloneVNode(vnode);
        }

        var elm = vnode.elm = oldVnode.elm;

        if (isTrue(oldVnode.isAsyncPlaceholder)) {
          if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
          } else {
            vnode.isAsyncPlaceholder = true;
          }
          return
        }

        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
          isTrue(oldVnode.isStatic) &&
          vnode.key === oldVnode.key &&
          (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
        ) {
          vnode.componentInstance = oldVnode.componentInstance;
          return
        }

        var i;
        var data = vnode.data;
        if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
          i(oldVnode, vnode);
        }

        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
          for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
          if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
        }
        if (isUndef(vnode.text)) {
          if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
          } else if (isDef(ch)) {
            if (process.env.NODE_ENV !== 'production') {
              checkDuplicateKeys(ch);
            }
            if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
          } else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
          } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
        } else if (oldVnode.text !== vnode.text) {
          nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
        }
      }

      function invokeInsertHook (vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
          vnode.parent.data.pendingInsert = queue;
        } else {
          for (var i = 0; i < queue.length; ++i) {
            queue[i].data.hook.insert(queue[i]);
          }
        }
      }

      var hydrationBailed = false;
      // list of modules that can skip create hook during hydration because they
      // are already rendered on the client or has no need for initialization
      // Note: style is excluded because it relies on initial clone for future
      // deep updates (#7063).
      var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

      // Note: this is a browser-only function so we can assume elms are DOM nodes.
      function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag;
        var data = vnode.data;
        var children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;

        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
          vnode.isAsyncPlaceholder = true;
          return true
        }
        // assert node match
        if (process.env.NODE_ENV !== 'production') {
          if (!assertNodeMatch(elm, vnode, inVPre)) {
            return false
          }
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
          if (isDef(i = vnode.componentInstance)) {
            // child component. it should have hydrated its own tree.
            initComponent(vnode, insertedVnodeQueue);
            return true
          }
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            // empty element, allow client to pick up and populate children
            if (!elm.hasChildNodes()) {
              createChildren(vnode, children, insertedVnodeQueue);
            } else {
              // v-html and domProps: innerHTML
              if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                if (i !== elm.innerHTML) {
                  /* istanbul ignore if */
                  if (process.env.NODE_ENV !== 'production' &&
                    typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('server innerHTML: ', i);
                    console.warn('client innerHTML: ', elm.innerHTML);
                  }
                  return false
                }
              } else {
                // iterate and compare children lists
                var childrenMatch = true;
                var childNode = elm.firstChild;
                for (var i$1 = 0; i$1 < children.length; i$1++) {
                  if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                    childrenMatch = false;
                    break
                  }
                  childNode = childNode.nextSibling;
                }
                // if childNode is not null, it means the actual childNodes list is
                // longer than the virtual children list.
                if (!childrenMatch || childNode) {
                  /* istanbul ignore if */
                  if (process.env.NODE_ENV !== 'production' &&
                    typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                  }
                  return false
                }
              }
            }
          }
          if (isDef(data)) {
            var fullInvoke = false;
            for (var key in data) {
              if (!isRenderedModule(key)) {
                fullInvoke = true;
                invokeCreateHooks(vnode, insertedVnodeQueue);
                break
              }
            }
            if (!fullInvoke && data['class']) {
              // ensure collecting deps for deep class bindings for future updates
              traverse(data['class']);
            }
          }
        } else if (elm.data !== vnode.text) {
          elm.data = vnode.text;
        }
        return true
      }

      function assertNodeMatch (node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
          return vnode.tag.indexOf('vue-component') === 0 || (
            !isUnknownElement$$1(vnode, inVPre) &&
            vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
          )
        } else {
          return node.nodeType === (vnode.isComment ? 8 : 3)
        }
      }

      return function patch (oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
          if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
          return
        }

        var isInitialPatch = false;
        var insertedVnodeQueue = [];

        if (isUndef(oldVnode)) {
          // empty mount (likely as component), create new root element
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue);
        } else {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            // patch existing root node
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
          } else {
            if (isRealElement) {
              // mounting to a real element
              // check if this is server-rendered content and if we can perform
              // a successful hydration.
              if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                oldVnode.removeAttribute(SSR_ATTR);
                hydrating = true;
              }
              if (isTrue(hydrating)) {
                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                  invokeInsertHook(vnode, insertedVnodeQueue, true);
                  return oldVnode
                } else if (process.env.NODE_ENV !== 'production') {
                  warn(
                    'The client-side rendered virtual DOM tree is not matching ' +
                    'server-rendered content. This is likely caused by incorrect ' +
                    'HTML markup, for example nesting block-level elements inside ' +
                    '<p>, or missing <tbody>. Bailing hydration and performing ' +
                    'full client-side render.'
                  );
                }
              }
              // either not server-rendered, or hydration failed.
              // create an empty node and replace it
              oldVnode = emptyNodeAt(oldVnode);
            }

            // replacing existing element
            var oldElm = oldVnode.elm;
            var parentElm = nodeOps.parentNode(oldElm);

            // create new node
            createElm(
              vnode,
              insertedVnodeQueue,
              // extremely rare edge case: do not insert if old element is in a
              // leaving transition. Only happens when combining transition +
              // keep-alive + HOCs. (#4590)
              oldElm._leaveCb ? null : parentElm,
              nodeOps.nextSibling(oldElm)
            );

            // update parent placeholder node element, recursively
            if (isDef(vnode.parent)) {
              var ancestor = vnode.parent;
              var patchable = isPatchable(vnode);
              while (ancestor) {
                for (var i = 0; i < cbs.destroy.length; ++i) {
                  cbs.destroy[i](ancestor);
                }
                ancestor.elm = vnode.elm;
                if (patchable) {
                  for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                    cbs.create[i$1](emptyNode, ancestor);
                  }
                  // #6513
                  // invoke insert hooks that may have been merged by create hooks.
                  // e.g. for directives that uses the "inserted" hook.
                  var insert = ancestor.data.hook.insert;
                  if (insert.merged) {
                    // start at index 1 to avoid re-invoking component mounted hook
                    for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                      insert.fns[i$2]();
                    }
                  }
                } else {
                  registerRef(ancestor);
                }
                ancestor = ancestor.parent;
              }
            }

            // destroy old node
            if (isDef(parentElm)) {
              removeVnodes(parentElm, [oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode);
            }
          }
        }

        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm
      }
    }

    /*  */

    var directives = {
      create: updateDirectives,
      update: updateDirectives,
      destroy: function unbindDirectives (vnode) {
        updateDirectives(vnode, emptyNode);
      }
    };

    function updateDirectives (oldVnode, vnode) {
      if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
      }
    }

    function _update (oldVnode, vnode) {
      var isCreate = oldVnode === emptyNode;
      var isDestroy = vnode === emptyNode;
      var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
      var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

      var dirsWithInsert = [];
      var dirsWithPostpatch = [];

      var key, oldDir, dir;
      for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
          // new directive, bind
          callHook$1(dir, 'bind', vnode, oldVnode);
          if (dir.def && dir.def.inserted) {
            dirsWithInsert.push(dir);
          }
        } else {
          // existing directive, update
          dir.oldValue = oldDir.value;
          dir.oldArg = oldDir.arg;
          callHook$1(dir, 'update', vnode, oldVnode);
          if (dir.def && dir.def.componentUpdated) {
            dirsWithPostpatch.push(dir);
          }
        }
      }

      if (dirsWithInsert.length) {
        var callInsert = function () {
          for (var i = 0; i < dirsWithInsert.length; i++) {
            callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
          }
        };
        if (isCreate) {
          mergeVNodeHook(vnode, 'insert', callInsert);
        } else {
          callInsert();
        }
      }

      if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          for (var i = 0; i < dirsWithPostpatch.length; i++) {
            callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
          }
        });
      }

      if (!isCreate) {
        for (key in oldDirs) {
          if (!newDirs[key]) {
            // no longer present, unbind
            callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
          }
        }
      }
    }

    var emptyModifiers = Object.create(null);

    function normalizeDirectives$1 (
      dirs,
      vm
    ) {
      var res = Object.create(null);
      if (!dirs) {
        // $flow-disable-line
        return res
      }
      var i, dir;
      for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
          // $flow-disable-line
          dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
      }
      // $flow-disable-line
      return res
    }

    function getRawDirName (dir) {
      return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
    }

    function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
      var fn = dir.def && dir.def[hook];
      if (fn) {
        try {
          fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        } catch (e) {
          handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
        }
      }
    }

    var baseModules = [
      ref,
      directives
    ];

    /*  */

    function updateAttrs (oldVnode, vnode) {
      var opts = vnode.componentOptions;
      if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return
      }
      if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return
      }
      var key, cur, old;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs = vnode.data.attrs || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(attrs.__ob__)) {
        attrs = vnode.data.attrs = extend({}, attrs);
      }

      for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
          setAttr(elm, key, cur);
        }
      }
      // #4391: in IE9, setting type can reset value for input[type=radio]
      // #6666: IE/Edge forces progress value down to 1 before setting a max
      /* istanbul ignore if */
      if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
      }
      for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
          if (isXlink(key)) {
            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else if (!isEnumeratedAttr(key)) {
            elm.removeAttribute(key);
          }
        }
      }
    }

    function setAttr (el, key, value) {
      if (el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
      } else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          // technically allowfullscreen is a boolean attribute for <iframe>,
          // but Flash expects a value of "true" when used on <embed> tag
          value = key === 'allowfullscreen' && el.tagName === 'EMBED'
            ? 'true'
            : key;
          el.setAttribute(key, value);
        }
      } else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
      } else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        baseSetAttr(el, key, value);
      }
    }

    function baseSetAttr (el, key, value) {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (
          isIE && !isIE9 &&
          el.tagName === 'TEXTAREA' &&
          key === 'placeholder' && value !== '' && !el.__ieph
        ) {
          var blocker = function (e) {
            e.stopImmediatePropagation();
            el.removeEventListener('input', blocker);
          };
          el.addEventListener('input', blocker);
          // $flow-disable-line
          el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
      }
    }

    var attrs = {
      create: updateAttrs,
      update: updateAttrs
    };

    /*  */

    function updateClass (oldVnode, vnode) {
      var el = vnode.elm;
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (
        isUndef(data.staticClass) &&
        isUndef(data.class) && (
          isUndef(oldData) || (
            isUndef(oldData.staticClass) &&
            isUndef(oldData.class)
          )
        )
      ) {
        return
      }

      var cls = genClassForVnode(vnode);

      // handle transition classes
      var transitionClass = el._transitionClasses;
      if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
      }

      // set the class
      if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
      }
    }

    var klass = {
      create: updateClass,
      update: updateClass
    };

    /*  */

    /*  */

    /*  */

    /*  */

    // in some cases, the event used has to be determined at runtime
    // so we used some reserved tokens during compile.
    var RANGE_TOKEN = '__r';
    var CHECKBOX_RADIO_TOKEN = '__c';

    /*  */

    // normalize v-model event tokens that can only be determined at runtime.
    // it's important to place the event as the first in the array because
    // the whole point is ensuring the v-model callback gets called before
    // user-attached handlers.
    function normalizeEvents (on) {
      /* istanbul ignore if */
      if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event = isIE ? 'change' : 'input';
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
      }
      // This was originally intended to fix #4521 but no longer necessary
      // after 2.5. Keeping it for backwards compat with generated code from < 2.4
      /* istanbul ignore if */
      if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
      }
    }

    var target$1;

    function createOnceHandler$1 (event, handler, capture) {
      var _target = target$1; // save current target element in closure
      return function onceHandler () {
        var res = handler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, onceHandler, capture, _target);
        }
      }
    }

    // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
    // implementation and does not fire microtasks in between event propagation, so
    // safe to exclude.
    var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

    function add$1 (
      name,
      handler,
      capture,
      passive
    ) {
      // async edge case #6566: inner click event triggers patch, event handler
      // attached to outer element during patch, and triggered again. This
      // happens because browsers fire microtask ticks between event propagation.
      // the solution is simple: we save the timestamp when a handler is attached,
      // and the handler would only fire if the event passed to it was fired
      // AFTER it was attached.
      if (useMicrotaskFix) {
        var attachedTimestamp = currentFlushTimestamp;
        var original = handler;
        handler = original._wrapper = function (e) {
          if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget ||
            // event is fired after handler attachment
            e.timeStamp >= attachedTimestamp ||
            // bail for environments that have buggy event.timeStamp implementations
            // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
            // #9681 QtWebEngine event.timeStamp is negative value
            e.timeStamp <= 0 ||
            // #9448 bail if event is fired in another document in a multi-page
            // electron/nw.js app, since event.timeStamp will be using a different
            // starting reference
            e.target.ownerDocument !== document
          ) {
            return original.apply(this, arguments)
          }
        };
      }
      target$1.addEventListener(
        name,
        handler,
        supportsPassive
          ? { capture: capture, passive: passive }
          : capture
      );
    }

    function remove$2 (
      name,
      handler,
      capture,
      _target
    ) {
      (_target || target$1).removeEventListener(
        name,
        handler._wrapper || handler,
        capture
      );
    }

    function updateDOMListeners (oldVnode, vnode) {
      if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      target$1 = vnode.elm;
      normalizeEvents(on);
      updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
      target$1 = undefined;
    }

    var events = {
      create: updateDOMListeners,
      update: updateDOMListeners
    };

    /*  */

    var svgContainer;

    function updateDOMProps (oldVnode, vnode) {
      if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return
      }
      var key, cur;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.domProps || {};
      var props = vnode.data.domProps || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(props.__ob__)) {
        props = vnode.data.domProps = extend({}, props);
      }

      for (key in oldProps) {
        if (!(key in props)) {
          elm[key] = '';
        }
      }

      for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
          if (vnode.children) { vnode.children.length = 0; }
          if (cur === oldProps[key]) { continue }
          // #6601 work around Chrome version <= 55 bug where single textNode
          // replaced by innerHTML/textContent retains its parentNode property
          if (elm.childNodes.length === 1) {
            elm.removeChild(elm.childNodes[0]);
          }
        }

        if (key === 'value' && elm.tagName !== 'PROGRESS') {
          // store value as _value as well since
          // non-string values will be stringified
          elm._value = cur;
          // avoid resetting cursor position when value is the same
          var strCur = isUndef(cur) ? '' : String(cur);
          if (shouldUpdateValue(elm, strCur)) {
            elm.value = strCur;
          }
        } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
          // IE doesn't support innerHTML for SVG elements
          svgContainer = svgContainer || document.createElement('div');
          svgContainer.innerHTML = "<svg>" + cur + "</svg>";
          var svg = svgContainer.firstChild;
          while (elm.firstChild) {
            elm.removeChild(elm.firstChild);
          }
          while (svg.firstChild) {
            elm.appendChild(svg.firstChild);
          }
        } else if (
          // skip the update if old and new VDOM state is the same.
          // `value` is handled separately because the DOM value may be temporarily
          // out of sync with VDOM state due to focus, composition and modifiers.
          // This  #4521 by skipping the unnecesarry `checked` update.
          cur !== oldProps[key]
        ) {
          // some property updates can throw
          // e.g. `value` on <progress> w/ non-finite value
          try {
            elm[key] = cur;
          } catch (e) {}
        }
      }
    }

    // check platforms/web/util/attrs.js acceptValue


    function shouldUpdateValue (elm, checkVal) {
      return (!elm.composing && (
        elm.tagName === 'OPTION' ||
        isNotInFocusAndDirty(elm, checkVal) ||
        isDirtyWithModifiers(elm, checkVal)
      ))
    }

    function isNotInFocusAndDirty (elm, checkVal) {
      // return true when textbox (.number and .trim) loses focus and its value is
      // not equal to the updated value
      var notInFocus = true;
      // #6157
      // work around IE bug when accessing document.activeElement in an iframe
      try { notInFocus = document.activeElement !== elm; } catch (e) {}
      return notInFocus && elm.value !== checkVal
    }

    function isDirtyWithModifiers (elm, newVal) {
      var value = elm.value;
      var modifiers = elm._vModifiers; // injected by v-model runtime
      if (isDef(modifiers)) {
        if (modifiers.number) {
          return toNumber$1(value) !== toNumber$1(newVal)
        }
        if (modifiers.trim) {
          return value.trim() !== newVal.trim()
        }
      }
      return value !== newVal
    }

    var domProps = {
      create: updateDOMProps,
      update: updateDOMProps
    };

    /*  */

    var parseStyleText = cached(function (cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
          var tmp = item.split(propertyDelimiter);
          tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return res
    });

    // merge static and dynamic style data on the same vnode
    function normalizeStyleData (data) {
      var style = normalizeStyleBinding(data.style);
      // static style is pre-processed into an object during compilation
      // and is always a fresh object, so it's safe to merge into it
      return data.staticStyle
        ? extend(data.staticStyle, style)
        : style
    }

    // normalize possible array / string values into Object
    function normalizeStyleBinding (bindingStyle) {
      if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle)
      }
      if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle)
      }
      return bindingStyle
    }

    /**
     * parent component style should be after child's
     * so that parent component's style could override it
     */
    function getStyle (vnode, checkChild) {
      var res = {};
      var styleData;

      if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
          childNode = childNode.componentInstance._vnode;
          if (
            childNode && childNode.data &&
            (styleData = normalizeStyleData(childNode.data))
          ) {
            extend(res, styleData);
          }
        }
      }

      if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
      }

      var parentNode = vnode;
      while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
          extend(res, styleData);
        }
      }
      return res
    }

    /*  */

    var cssVarRE = /^--/;
    var importantRE = /\s*!important$/;
    var setProp = function (el, name, val) {
      /* istanbul ignore if */
      if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
      } else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
      } else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
          // Support values array created by autoprefixer, e.g.
          // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
          // Set them one by one, and the browser will only set those it can recognize
          for (var i = 0, len = val.length; i < len; i++) {
            el.style[normalizedName] = val[i];
          }
        } else {
          el.style[normalizedName] = val;
        }
      }
    };

    var vendorNames = ['Webkit', 'Moz', 'ms'];

    var emptyStyle;
    var normalize = cached(function (prop) {
      emptyStyle = emptyStyle || document.createElement('div').style;
      prop = camelize(prop);
      if (prop !== 'filter' && (prop in emptyStyle)) {
        return prop
      }
      var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i = 0; i < vendorNames.length; i++) {
        var name = vendorNames[i] + capName;
        if (name in emptyStyle) {
          return name
        }
      }
    });

    function updateStyle (oldVnode, vnode) {
      var data = vnode.data;
      var oldData = oldVnode.data;

      if (isUndef(data.staticStyle) && isUndef(data.style) &&
        isUndef(oldData.staticStyle) && isUndef(oldData.style)
      ) {
        return
      }

      var cur, name;
      var el = vnode.elm;
      var oldStaticStyle = oldData.staticStyle;
      var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

      // if static style exists, stylebinding already merged into it when doing normalizeStyleData
      var oldStyle = oldStaticStyle || oldStyleBinding;

      var style = normalizeStyleBinding(vnode.data.style) || {};

      // store normalized style under a different key for next diff
      // make sure to clone it if it's reactive, since the user likely wants
      // to mutate it.
      vnode.data.normalizedStyle = isDef(style.__ob__)
        ? extend({}, style)
        : style;

      var newStyle = getStyle(vnode, true);

      for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
          setProp(el, name, '');
        }
      }
      for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
          // ie9 setting to null has no effect, must use empty string
          setProp(el, name, cur == null ? '' : cur);
        }
      }
    }

    var style = {
      create: updateStyle,
      update: updateStyle
    };

    /*  */

    var whitespaceRE = /\s+/;

    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function addClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }

      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
        } else {
          el.classList.add(cls);
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        if (cur.indexOf(' ' + cls + ' ') < 0) {
          el.setAttribute('class', (cur + cls).trim());
        }
      }
    }

    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function removeClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }

      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
        } else {
          el.classList.remove(cls);
        }
        if (!el.classList.length) {
          el.removeAttribute('class');
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
          cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
          el.setAttribute('class', cur);
        } else {
          el.removeAttribute('class');
        }
      }
    }

    /*  */

    function resolveTransition (def$$1) {
      if (!def$$1) {
        return
      }
      /* istanbul ignore else */
      if (typeof def$$1 === 'object') {
        var res = {};
        if (def$$1.css !== false) {
          extend(res, autoCssTransition(def$$1.name || 'v'));
        }
        extend(res, def$$1);
        return res
      } else if (typeof def$$1 === 'string') {
        return autoCssTransition(def$$1)
      }
    }

    var autoCssTransition = cached(function (name) {
      return {
        enterClass: (name + "-enter"),
        enterToClass: (name + "-enter-to"),
        enterActiveClass: (name + "-enter-active"),
        leaveClass: (name + "-leave"),
        leaveToClass: (name + "-leave-to"),
        leaveActiveClass: (name + "-leave-active")
      }
    });

    var hasTransition = inBrowser && !isIE9;
    var TRANSITION = 'transition';
    var ANIMATION = 'animation';

    // Transition property/event sniffing
    var transitionProp = 'transition';
    var transitionEndEvent = 'transitionend';
    var animationProp = 'animation';
    var animationEndEvent = 'animationend';
    if (hasTransition) {
      /* istanbul ignore if */
      if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined
      ) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
      }
      if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined
      ) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
      }
    }

    // binding to window is necessary to make hot reload work in IE in strict mode
    var raf = inBrowser
      ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
      : /* istanbul ignore next */ function (fn) { return fn(); };

    function nextFrame (fn) {
      raf(function () {
        raf(fn);
      });
    }

    function addTransitionClass (el, cls) {
      var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
      if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
      }
    }

    function removeTransitionClass (el, cls) {
      if (el._transitionClasses) {
        remove(el._transitionClasses, cls);
      }
      removeClass(el, cls);
    }

    function whenTransitionEnds (
      el,
      expectedType,
      cb
    ) {
      var ref = getTransitionInfo(el, expectedType);
      var type = ref.type;
      var timeout = ref.timeout;
      var propCount = ref.propCount;
      if (!type) { return cb() }
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
      };
      var onEnd = function (e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };
      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }

    var transformRE = /\b(transform|all)(,|$)/;

    function getTransitionInfo (el, expectedType) {
      var styles = window.getComputedStyle(el);
      // JSDOM may return undefined for transition properties
      var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
      var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
      var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
      var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
      var animationTimeout = getTimeout(animationDelays, animationDurations);

      var type;
      var timeout = 0;
      var propCount = 0;
      /* istanbul ignore if */
      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0
          ? transitionTimeout > animationTimeout
            ? TRANSITION
            : ANIMATION
          : null;
        propCount = type
          ? type === TRANSITION
            ? transitionDurations.length
            : animationDurations.length
          : 0;
      }
      var hasTransform =
        type === TRANSITION &&
        transformRE.test(styles[transitionProp + 'Property']);
      return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
      }
    }

    function getTimeout (delays, durations) {
      /* istanbul ignore next */
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }

      return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i])
      }))
    }

    // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
    // in a locale-dependent way, using a comma instead of a dot.
    // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
    // as a floor function) causing unexpected behaviors
    function toMs (s) {
      return Number(s.slice(0, -1).replace(',', '.')) * 1000
    }

    /*  */

    function enter (vnode, toggleDisplay) {
      var el = vnode.elm;

      // call leave callback now
      if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }

      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data)) {
        return
      }

      /* istanbul ignore if */
      if (isDef(el._enterCb) || el.nodeType !== 1) {
        return
      }

      var css = data.css;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var appearClass = data.appearClass;
      var appearToClass = data.appearToClass;
      var appearActiveClass = data.appearActiveClass;
      var beforeEnter = data.beforeEnter;
      var enter = data.enter;
      var afterEnter = data.afterEnter;
      var enterCancelled = data.enterCancelled;
      var beforeAppear = data.beforeAppear;
      var appear = data.appear;
      var afterAppear = data.afterAppear;
      var appearCancelled = data.appearCancelled;
      var duration = data.duration;

      // activeInstance will always be the <transition> component managing this
      // transition. One edge case to check is when the <transition> is placed
      // as the root node of a child component. In that case we need to check
      // <transition>'s parent for appear check.
      var context = activeInstance;
      var transitionNode = activeInstance.$vnode;
      while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
      }

      var isAppear = !context._isMounted || !vnode.isRootInsert;

      if (isAppear && !appear && appear !== '') {
        return
      }

      var startClass = isAppear && appearClass
        ? appearClass
        : enterClass;
      var activeClass = isAppear && appearActiveClass
        ? appearActiveClass
        : enterActiveClass;
      var toClass = isAppear && appearToClass
        ? appearToClass
        : enterToClass;

      var beforeEnterHook = isAppear
        ? (beforeAppear || beforeEnter)
        : beforeEnter;
      var enterHook = isAppear
        ? (typeof appear === 'function' ? appear : enter)
        : enter;
      var afterEnterHook = isAppear
        ? (afterAppear || afterEnter)
        : afterEnter;
      var enterCancelledHook = isAppear
        ? (appearCancelled || enterCancelled)
        : enterCancelled;

      var explicitEnterDuration = toNumber$1(
        isObject(duration)
          ? duration.enter
          : duration
      );

      if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
      }

      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(enterHook);

      var cb = el._enterCb = once(function () {
        if (expectsCSS) {
          removeTransitionClass(el, toClass);
          removeTransitionClass(el, activeClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, startClass);
          }
          enterCancelledHook && enterCancelledHook(el);
        } else {
          afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
      });

      if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
          var parent = el.parentNode;
          var pendingNode = parent && parent._pending && parent._pending[vnode.key];
          if (pendingNode &&
            pendingNode.tag === vnode.tag &&
            pendingNode.elm._leaveCb
          ) {
            pendingNode.elm._leaveCb();
          }
          enterHook && enterHook(el, cb);
        });
      }

      // start enter transition
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
          removeTransitionClass(el, startClass);
          if (!cb.cancelled) {
            addTransitionClass(el, toClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitEnterDuration)) {
                setTimeout(cb, explicitEnterDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }

      if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
      }

      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }

    function leave (vnode, rm) {
      var el = vnode.elm;

      // call enter callback now
      if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
      }

      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data) || el.nodeType !== 1) {
        return rm()
      }

      /* istanbul ignore if */
      if (isDef(el._leaveCb)) {
        return
      }

      var css = data.css;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var beforeLeave = data.beforeLeave;
      var leave = data.leave;
      var afterLeave = data.afterLeave;
      var leaveCancelled = data.leaveCancelled;
      var delayLeave = data.delayLeave;
      var duration = data.duration;

      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(leave);

      var explicitLeaveDuration = toNumber$1(
        isObject(duration)
          ? duration.leave
          : duration
      );

      if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
      }

      var cb = el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
          el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, leaveClass);
          }
          leaveCancelled && leaveCancelled(el);
        } else {
          rm();
          afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
      });

      if (delayLeave) {
        delayLeave(performLeave);
      } else {
        performLeave();
      }

      function performLeave () {
        // the delayed leave may have already been cancelled
        if (cb.cancelled) {
          return
        }
        // record leaving element
        if (!vnode.data.show && el.parentNode) {
          (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
          addTransitionClass(el, leaveClass);
          addTransitionClass(el, leaveActiveClass);
          nextFrame(function () {
            removeTransitionClass(el, leaveClass);
            if (!cb.cancelled) {
              addTransitionClass(el, leaveToClass);
              if (!userWantsControl) {
                if (isValidDuration(explicitLeaveDuration)) {
                  setTimeout(cb, explicitLeaveDuration);
                } else {
                  whenTransitionEnds(el, type, cb);
                }
              }
            }
          });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
    }

    // only used in dev mode
    function checkDuration (val, name, vnode) {
      if (typeof val !== 'number') {
        warn(
          "<transition> explicit " + name + " duration is not a valid number - " +
          "got " + (JSON.stringify(val)) + ".",
          vnode.context
        );
      } else if (isNaN(val)) {
        warn(
          "<transition> explicit " + name + " duration is NaN - " +
          'the duration expression might be incorrect.',
          vnode.context
        );
      }
    }

    function isValidDuration (val) {
      return typeof val === 'number' && !isNaN(val)
    }

    /**
     * Normalize a transition hook's argument length. The hook may be:
     * - a merged hook (invoker) with the original in .fns
     * - a wrapped component method (check ._length)
     * - a plain function (.length)
     */
    function getHookArgumentsLength (fn) {
      if (isUndef(fn)) {
        return false
      }
      var invokerFns = fn.fns;
      if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(
          Array.isArray(invokerFns)
            ? invokerFns[0]
            : invokerFns
        )
      } else {
        return (fn._length || fn.length) > 1
      }
    }

    function _enter (_, vnode) {
      if (vnode.data.show !== true) {
        enter(vnode);
      }
    }

    var transition = inBrowser ? {
      create: _enter,
      activate: _enter,
      remove: function remove$$1 (vnode, rm) {
        /* istanbul ignore else */
        if (vnode.data.show !== true) {
          leave(vnode, rm);
        } else {
          rm();
        }
      }
    } : {};

    var platformModules = [
      attrs,
      klass,
      events,
      domProps,
      style,
      transition
    ];

    /*  */

    // the directive module should be applied last, after all
    // built-in modules have been applied.
    var modules = platformModules.concat(baseModules);

    var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

    /**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */

    /* istanbul ignore if */
    if (isIE9) {
      // http://www.matts411.com/post/internet-explorer-9-oninput/
      document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        if (el && el.vmodel) {
          trigger(el, 'input');
        }
      });
    }

    var directive = {
      inserted: function inserted (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
          // #6903
          if (oldVnode.elm && !oldVnode.elm._vOptions) {
            mergeVNodeHook(vnode, 'postpatch', function () {
              directive.componentUpdated(el, binding, vnode);
            });
          } else {
            setSelected(el, binding, vnode.context);
          }
          el._vOptions = [].map.call(el.options, getValue);
        } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
          el._vModifiers = binding.modifiers;
          if (!binding.modifiers.lazy) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            el.addEventListener('change', onCompositionEnd);
            /* istanbul ignore if */
            if (isIE9) {
              el.vmodel = true;
            }
          }
        }
      },

      componentUpdated: function componentUpdated (el, binding, vnode) {
        if (vnode.tag === 'select') {
          setSelected(el, binding, vnode.context);
          // in case the options rendered by v-for have changed,
          // it's possible that the value is out-of-sync with the rendered options.
          // detect such cases and filter out values that no longer has a matching
          // option in the DOM.
          var prevOptions = el._vOptions;
          var curOptions = el._vOptions = [].map.call(el.options, getValue);
          if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
            // trigger change event if
            // no matching option found for at least one value
            var needReset = el.multiple
              ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
              : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
            if (needReset) {
              trigger(el, 'change');
            }
          }
        }
      }
    };

    function setSelected (el, binding, vm) {
      actuallySetSelected(el, binding, vm);
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(function () {
          actuallySetSelected(el, binding, vm);
        }, 0);
      }
    }

    function actuallySetSelected (el, binding, vm) {
      var value = binding.value;
      var isMultiple = el.multiple;
      if (isMultiple && !Array.isArray(value)) {
        process.env.NODE_ENV !== 'production' && warn(
          "<select multiple v-model=\"" + (binding.expression) + "\"> " +
          "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
          vm
        );
        return
      }
      var selected, option;
      for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) {
              el.selectedIndex = i;
            }
            return
          }
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }

    function hasNoMatchingOption (value, options) {
      return options.every(function (o) { return !looseEqual(o, value); })
    }

    function getValue (option) {
      return '_value' in option
        ? option._value
        : option.value
    }

    function onCompositionStart (e) {
      e.target.composing = true;
    }

    function onCompositionEnd (e) {
      // prevent triggering an input event for no reason
      if (!e.target.composing) { return }
      e.target.composing = false;
      trigger(e.target, 'input');
    }

    function trigger (el, type) {
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
    }

    /*  */

    // recursively search for possible transition defined inside the component root
    function locateNode (vnode) {
      return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode
    }

    var show = {
      bind: function bind (el, ref, vnode) {
        var value = ref.value;

        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        var originalDisplay = el.__vOriginalDisplay =
          el.style.display === 'none' ? '' : el.style.display;
        if (value && transition$$1) {
          vnode.data.show = true;
          enter(vnode, function () {
            el.style.display = originalDisplay;
          });
        } else {
          el.style.display = value ? originalDisplay : 'none';
        }
      },

      update: function update (el, ref, vnode) {
        var value = ref.value;
        var oldValue = ref.oldValue;

        /* istanbul ignore if */
        if (!value === !oldValue) { return }
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        if (transition$$1) {
          vnode.data.show = true;
          if (value) {
            enter(vnode, function () {
              el.style.display = el.__vOriginalDisplay;
            });
          } else {
            leave(vnode, function () {
              el.style.display = 'none';
            });
          }
        } else {
          el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
      },

      unbind: function unbind (
        el,
        binding,
        vnode,
        oldVnode,
        isDestroy
      ) {
        if (!isDestroy) {
          el.style.display = el.__vOriginalDisplay;
        }
      }
    };

    var platformDirectives = {
      model: directive,
      show: show
    };

    /*  */

    var transitionProps = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };

    // in case the child is also an abstract component, e.g. <keep-alive>
    // we want to recursively retrieve the real component to be rendered
    function getRealChild (vnode) {
      var compOptions = vnode && vnode.componentOptions;
      if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children))
      } else {
        return vnode
      }
    }

    function extractTransitionData (comp) {
      var data = {};
      var options = comp.$options;
      // props
      for (var key in options.propsData) {
        data[key] = comp[key];
      }
      // events.
      // extract listeners and pass them directly to the transition methods
      var listeners = options._parentListeners;
      for (var key$1 in listeners) {
        data[camelize(key$1)] = listeners[key$1];
      }
      return data
    }

    function placeholder (h, rawChild) {
      if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
          props: rawChild.componentOptions.propsData
        })
      }
    }

    function hasParentTransition (vnode) {
      while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
          return true
        }
      }
    }

    function isSameChild (child, oldChild) {
      return oldChild.key === child.key && oldChild.tag === child.tag
    }

    var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

    var isVShowDirective = function (d) { return d.name === 'show'; };

    var Transition = {
      name: 'transition',
      props: transitionProps,
      abstract: true,

      render: function render (h) {
        var this$1 = this;

        var children = this.$slots.default;
        if (!children) {
          return
        }

        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */
        if (!children.length) {
          return
        }

        // warn multiple elements
        if (process.env.NODE_ENV !== 'production' && children.length > 1) {
          warn(
            '<transition> can only be used on a single element. Use ' +
            '<transition-group> for lists.',
            this.$parent
          );
        }

        var mode = this.mode;

        // warn invalid mode
        if (process.env.NODE_ENV !== 'production' &&
          mode && mode !== 'in-out' && mode !== 'out-in'
        ) {
          warn(
            'invalid <transition> mode: ' + mode,
            this.$parent
          );
        }

        var rawChild = children[0];

        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
          return rawChild
        }

        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
          return rawChild
        }

        if (this._leaving) {
          return placeholder(h, rawChild)
        }

        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-" + (this._uid) + "-";
        child.key = child.key == null
          ? child.isComment
            ? id + 'comment'
            : id + child.tag
          : isPrimitive(child.key)
            ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
            : child.key;

        var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);

        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
          child.data.show = true;
        }

        if (
          oldChild &&
          oldChild.data &&
          !isSameChild(child, oldChild) &&
          !isAsyncPlaceholder(oldChild) &&
          // #6687 component root is a comment node
          !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
        ) {
          // replace old child transition data with fresh one
          // important for dynamic transitions!
          var oldData = oldChild.data.transition = extend({}, data);
          // handle transition mode
          if (mode === 'out-in') {
            // return placeholder node and queue update when leave finishes
            this._leaving = true;
            mergeVNodeHook(oldData, 'afterLeave', function () {
              this$1._leaving = false;
              this$1.$forceUpdate();
            });
            return placeholder(h, rawChild)
          } else if (mode === 'in-out') {
            if (isAsyncPlaceholder(child)) {
              return oldRawChild
            }
            var delayedLeave;
            var performLeave = function () { delayedLeave(); };
            mergeVNodeHook(data, 'afterEnter', performLeave);
            mergeVNodeHook(data, 'enterCancelled', performLeave);
            mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
          }
        }

        return rawChild
      }
    };

    /*  */

    var props = extend({
      tag: String,
      moveClass: String
    }, transitionProps);

    delete props.mode;

    var TransitionGroup = {
      props: props,

      beforeMount: function beforeMount () {
        var this$1 = this;

        var update = this._update;
        this._update = function (vnode, hydrating) {
          var restoreActiveInstance = setActiveInstance(this$1);
          // force removing pass
          this$1.__patch__(
            this$1._vnode,
            this$1.kept,
            false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
          );
          this$1._vnode = this$1.kept;
          restoreActiveInstance();
          update.call(this$1, vnode, hydrating);
        };
      },

      render: function render (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = this.prevChildren = this.children;
        var rawChildren = this.$slots.default || [];
        var children = this.children = [];
        var transitionData = extractTransitionData(this);

        for (var i = 0; i < rawChildren.length; i++) {
          var c = rawChildren[i];
          if (c.tag) {
            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
              children.push(c);
              map[c.key] = c
              ;(c.data || (c.data = {})).transition = transitionData;
            } else if (process.env.NODE_ENV !== 'production') {
              var opts = c.componentOptions;
              var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
              warn(("<transition-group> children must be keyed: <" + name + ">"));
            }
          }
        }

        if (prevChildren) {
          var kept = [];
          var removed = [];
          for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
            var c$1 = prevChildren[i$1];
            c$1.data.transition = transitionData;
            c$1.data.pos = c$1.elm.getBoundingClientRect();
            if (map[c$1.key]) {
              kept.push(c$1);
            } else {
              removed.push(c$1);
            }
          }
          this.kept = h(tag, null, kept);
          this.removed = removed;
        }

        return h(tag, null, children)
      },

      updated: function updated () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || ((this.name || 'v') + '-move');
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
          return
        }

        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);

        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;

        children.forEach(function (c) {
          if (c.data.moved) {
            var el = c.elm;
            var s = el.style;
            addTransitionClass(el, moveClass);
            s.transform = s.WebkitTransform = s.transitionDuration = '';
            el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
              if (e && e.target !== el) {
                return
              }
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener(transitionEndEvent, cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            });
          }
        });
      },

      methods: {
        hasMove: function hasMove (el, moveClass) {
          /* istanbul ignore if */
          if (!hasTransition) {
            return false
          }
          /* istanbul ignore if */
          if (this._hasMove) {
            return this._hasMove
          }
          // Detect whether an element with the move class applied has
          // CSS transitions. Since the element may be inside an entering
          // transition at this very moment, we make a clone of it and remove
          // all other transition classes applied to ensure only the move class
          // is applied.
          var clone = el.cloneNode();
          if (el._transitionClasses) {
            el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
          }
          addClass(clone, moveClass);
          clone.style.display = 'none';
          this.$el.appendChild(clone);
          var info = getTransitionInfo(clone);
          this.$el.removeChild(clone);
          return (this._hasMove = info.hasTransform)
        }
      }
    };

    function callPendingCbs (c) {
      /* istanbul ignore if */
      if (c.elm._moveCb) {
        c.elm._moveCb();
      }
      /* istanbul ignore if */
      if (c.elm._enterCb) {
        c.elm._enterCb();
      }
    }

    function recordPosition (c) {
      c.data.newPos = c.elm.getBoundingClientRect();
    }

    function applyTranslation (c) {
      var oldPos = c.data.pos;
      var newPos = c.data.newPos;
      var dx = oldPos.left - newPos.left;
      var dy = oldPos.top - newPos.top;
      if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
        s.transitionDuration = '0s';
      }
    }

    var platformComponents = {
      Transition: Transition,
      TransitionGroup: TransitionGroup
    };

    /*  */

    // install platform specific utils
    Vue.config.mustUseProp = mustUseProp;
    Vue.config.isReservedTag = isReservedTag;
    Vue.config.isReservedAttr = isReservedAttr;
    Vue.config.getTagNamespace = getTagNamespace;
    Vue.config.isUnknownElement = isUnknownElement;

    // install platform runtime directives & components
    extend(Vue.options.directives, platformDirectives);
    extend(Vue.options.components, platformComponents);

    // install platform patch function
    Vue.prototype.__patch__ = inBrowser ? patch : noop;

    // public mount method
    Vue.prototype.$mount = function (
      el,
      hydrating
    ) {
      el = el && inBrowser ? query(el) : undefined;
      return mountComponent(this, el, hydrating)
    };

    // devtools global hook
    /* istanbul ignore next */
    if (inBrowser) {
      setTimeout(function () {
        if (config$1.devtools) {
          if (devtools) {
            devtools.emit('init', Vue);
          } else if (
            process.env.NODE_ENV !== 'production' &&
            process.env.NODE_ENV !== 'test'
          ) {
            console[console.info ? 'info' : 'log'](
              'Download the Vue Devtools extension for a better development experience:\n' +
              'https://github.com/vuejs/vue-devtools'
            );
          }
        }
        if (process.env.NODE_ENV !== 'production' &&
          process.env.NODE_ENV !== 'test' &&
          config$1.productionTip !== false &&
          typeof console !== 'undefined'
        ) {
          console[console.info ? 'info' : 'log'](
            "You are running Vue in development mode.\n" +
            "Make sure to turn on production mode when deploying for production.\n" +
            "See more tips at https://vuejs.org/guide/deployment.html"
          );
        }
      }, 0);
    }

    //
    Vue.use(VueTheMask);

    var script$9 = {
        name: 'bc-int-input',
        components: {
            VueTheMask
        },
        props: {
            tipo: String
        },
        data() {
            return {
                field: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.field]);
            }
        }
    };

    /* script */
    const __vue_script__$9 = script$9;

    /* template */
    var __vue_render__$9 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-int-input" }, [
          _c("div", { staticClass: "options-container" }, [
            _vm.tipo === "_inteiro_32" ||
            _vm.tipo === "_inteiro_64" ||
            _vm.tipo === "_hora"
              ? _c("input", {
                  directives: [
                    {
                      name: "mask",
                      rawName: "v-mask",
                      value: "#########",
                      expression: "'#########'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.field,
                      expression: "field"
                    }
                  ],
                  staticClass: "inp",
                  attrs: { type: "tel" },
                  domProps: { value: _vm.field },
                  on: {
                    change: _vm.change,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.field = $event.target.value;
                    }
                  }
                })
              : _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.field,
                      expression: "field"
                    }
                  ],
                  staticClass: "inp",
                  attrs: { type: "number", step: 0.01 },
                  domProps: { value: _vm.field },
                  on: {
                    change: _vm.change,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.field = $event.target.value;
                    }
                  }
                })
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$9 = [];
    __vue_render__$9._withStripped = true;

      /* style */
      const __vue_inject_styles__$9 = function (inject) {
        if (!inject) return
        inject("data-v-6f9ed523_0", { source: ".btn-filter-icon[data-v-6f9ed523] {\n  padding: .1em;\n}\n.btn-filter[data-v-6f9ed523] {\n  padding: .5em;\n}\n.bc-int-input[data-v-6f9ed523] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.bc-int-input input[data-v-6f9ed523] {\n    width: 40px;\n}\n.options-container[data-v-6f9ed523] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-int-input.vue.map */", map: {"version":3,"sources":["bc-int-input.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-int-input.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAFA;IAIA,WAAA;AAAA;AAGA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADGA,2CAA2C","file":"bc-int-input.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-int-input {\n  display: inline-flex;\n  flex-direction: column; }\n  .bc-int-input input {\n    width: 40px; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-int-input.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-int-input {\n        display: inline-flex;\n        flex-direction: column;\n        input {\n            width: 40px;\n        }\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-int-input\">\n            <div class=\"options-container\">\n                <input class=\"inp\" type=\"tel\" v-mask=\"'#########'\" @change=\"change\"\n                       v-model=\"field\"\n                       v-if=\"tipo === '_inteiro_32' || tipo === '_inteiro_64' || tipo === '_hora'\">\n                <input class=\"inp\" type=\"number\" :step=\"0.01\" v-model=\"field\" @change=\"change\" v-else>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    import VueTheMask from 'vue-the-mask';\n    import Vue from 'vue';\n    Vue.use(VueTheMask);\n\n    export default {\n        name: 'bc-int-input',\n        components: {\n            VueTheMask\n        },\n        props: {\n            tipo: String\n        },\n        data() {\n            return {\n                field: ''\n            };\n        },\n        methods: {\n            change() {\n                this.$emit('change', [this.field]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$9 = "data-v-6f9ed523";
      /* module identifier */
      const __vue_module_identifier__$9 = undefined;
      /* functional template */
      const __vue_is_functional_template__$9 = false;
      /* style inject SSR */
      

      
      var numberInput = normalizeComponent_1(
        { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
        __vue_inject_styles__$9,
        __vue_script__$9,
        __vue_scope_id__$9,
        __vue_is_functional_template__$9,
        __vue_module_identifier__$9,
        browser,
        undefined
      );

    //
    Vue.use(VueTheMask);

    var script$a = {
        name: 'bc-int-inputs',
        components: {
            VueTheMask
        },
        props: {
            tipo: String
        },
        data() {
            return {
                field1: '',
                field2: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.field1, this.field2]);
            }
        }
    };

    /* script */
    const __vue_script__$a = script$a;

    /* template */
    var __vue_render__$a = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-int-inputs" }, [
          _vm.tipo === "_inteiro_32" ||
          _vm.tipo === "_inteiro_64" ||
          _vm.tipo === "_hora"
            ? _c("div", { staticClass: "options-container" }, [
                _c("input", {
                  directives: [
                    {
                      name: "mask",
                      rawName: "v-mask",
                      value: "#########",
                      expression: "'#########'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.field1,
                      expression: "field1"
                    }
                  ],
                  staticClass: "inp",
                  attrs: { type: "tel" },
                  domProps: { value: _vm.field1 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.field1 = $event.target.value;
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "mask",
                      rawName: "v-mask",
                      value: "#########",
                      expression: "'#########'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.field2,
                      expression: "field2"
                    }
                  ],
                  staticClass: "inp",
                  attrs: { type: "tel" },
                  domProps: { value: _vm.field2 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.field2 = $event.target.value;
                    }
                  }
                })
              ])
            : _c("div", { staticClass: "options-container" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.field1,
                      expression: "field1"
                    }
                  ],
                  staticClass: "inp",
                  attrs: { type: "number", step: 0.01 },
                  domProps: { value: _vm.field1 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.field1 = $event.target.value;
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.field2,
                      expression: "field2"
                    }
                  ],
                  staticClass: "inp",
                  attrs: { type: "number", step: 0.01 },
                  domProps: { value: _vm.field2 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.field2 = $event.target.value;
                    }
                  }
                })
              ])
        ])
      ])
    };
    var __vue_staticRenderFns__$a = [];
    __vue_render__$a._withStripped = true;

      /* style */
      const __vue_inject_styles__$a = function (inject) {
        if (!inject) return
        inject("data-v-5a177c42_0", { source: ".btn-filter-icon[data-v-5a177c42] {\n  padding: .1em;\n}\n.btn-filter[data-v-5a177c42] {\n  padding: .5em;\n}\n.bc-int-inputs[data-v-5a177c42] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.bc-int-inputs input[data-v-5a177c42] {\n    width: 40px;\n}\n.bc-int-inputs input[data-v-5a177c42]:last-child {\n      margin-left: 5px;\n}\n.options-container[data-v-5a177c42] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-int-inputs.vue.map */", map: {"version":3,"sources":["bc-int-inputs.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-int-inputs.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAFA;IAIA,WAAA;AAAA;AAJA;MAMA,gBAAA;AAAA;AAIA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADEA,4CAA4C","file":"bc-int-inputs.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-int-inputs {\n  display: inline-flex;\n  flex-direction: column; }\n  .bc-int-inputs input {\n    width: 40px; }\n    .bc-int-inputs input:last-child {\n      margin-left: 5px; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-int-inputs.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-int-inputs {\n        display: inline-flex;\n        flex-direction: column;\n        input {\n            width: 40px;\n            &:last-child {\n                margin-left: 5px;\n            }\n        }\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-int-inputs\">\n            <div class=\"options-container\" v-if=\"tipo === '_inteiro_32' || tipo === '_inteiro_64' || tipo === '_hora'\">\n                <input class=\"inp\" type=\"tel\" v-mask=\"'#########'\" v-model=\"field1\">\n                <input class=\"inp\" type=\"tel\" v-mask=\"'#########'\" v-model=\"field2\">\n            </div>\n            <div class=\"options-container\" v-else>\n                <input class=\"inp\" type=\"number\" :step=\"0.01\" v-model=\"field1\">\n                <input class=\"inp\" type=\"number\" :step=\"0.01\" v-model=\"field2\">\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    import VueTheMask from 'vue-the-mask';\n    import Vue from 'vue';\n    Vue.use(VueTheMask);\n\n    export default {\n        name: 'bc-int-inputs',\n        components: {\n            VueTheMask\n        },\n        props: {\n            tipo: String\n        },\n        data() {\n            return {\n                field1: '',\n                field2: ''\n            };\n        },\n        methods: {\n            change() {\n                this.$emit('change', [this.field1, this.field2]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$a = "data-v-5a177c42";
      /* module identifier */
      const __vue_module_identifier__$a = undefined;
      /* functional template */
      const __vue_is_functional_template__$a = false;
      /* style inject SSR */
      

      
      var numberInputs = normalizeComponent_1(
        { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
        __vue_inject_styles__$a,
        __vue_script__$a,
        __vue_scope_id__$a,
        __vue_is_functional_template__$a,
        __vue_module_identifier__$a,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script$b = {
        name: 'bc-hour-input',
        data() {
            return {
                hour: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.hour]);
            }
        }
    };

    /* script */
    const __vue_script__$b = script$b;

    /* template */
    var __vue_render__$b = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-hour-input" }, [
          _c("div", { staticClass: "options-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hour,
                  expression: "hour"
                }
              ],
              staticClass: "inp big",
              attrs: { id: "hour", name: "hour", type: "time" },
              domProps: { value: _vm.hour },
              on: {
                change: _vm.change,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.hour = $event.target.value;
                }
              }
            })
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$b = [];
    __vue_render__$b._withStripped = true;

      /* style */
      const __vue_inject_styles__$b = function (inject) {
        if (!inject) return
        inject("data-v-ba003fb6_0", { source: ".btn-filter-icon[data-v-ba003fb6] {\n  padding: .1em;\n}\n.btn-filter[data-v-ba003fb6] {\n  padding: .5em;\n}\n.bc-hour-input[data-v-ba003fb6] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.bc-hour-input .options-container[data-v-ba003fb6] {\n    display: inline-flex;\n    align-items: center;\n}\n.bc-hour-input .options-container input[data-v-ba003fb6] {\n      height: 24px !important;\n      padding: 2px;\n}\n.bc-hour-input .options-container input[data-v-ba003fb6]:not(:first-child) {\n        margin-left: 5px;\n}\n\n/*# sourceMappingURL=bc-hour-input.vue.map */", map: {"version":3,"sources":["bc-hour-input.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-hour-input.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAFA;IAIA,oBAAA;IACA,mBAAA;AAAA;AALA;MAOA,uBAAA;MACA,YAAA;AAAA;AARA;QAUA,gBAAA;AAAA;;ADIA,4CAA4C","file":"bc-hour-input.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-hour-input {\n  display: inline-flex;\n  flex-direction: column; }\n  .bc-hour-input .options-container {\n    display: inline-flex;\n    align-items: center; }\n    .bc-hour-input .options-container input {\n      height: 24px !important;\n      padding: 2px; }\n      .bc-hour-input .options-container input:not(:first-child) {\n        margin-left: 5px; }\n\n/*# sourceMappingURL=bc-hour-input.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-hour-input {\n        display: inline-flex;\n        flex-direction: column;\n        .options-container {\n            display: inline-flex;\n            align-items: center;\n            input {\n                height: 24px !important;\n                padding: 2px;\n                &:not(:first-child) {\n                    margin-left: 5px;\n                }\n            }\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-hour-input\">\n            <div class=\"options-container\">\n                <input id=\"hour\" name=\"hour\" type=\"time\" @change=\"change\"\n                    class=\"inp big\" v-model=\"hour\">\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'bc-hour-input',\n        data() {\n            return {\n                hour: ''\n            };\n        },\n        methods: {\n            change() {\n                this.$emit('change', [this.hour]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$b = "data-v-ba003fb6";
      /* module identifier */
      const __vue_module_identifier__$b = undefined;
      /* functional template */
      const __vue_is_functional_template__$b = false;
      /* style inject SSR */
      

      
      var hourInput = normalizeComponent_1(
        { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
        __vue_inject_styles__$b,
        __vue_script__$b,
        __vue_scope_id__$b,
        __vue_is_functional_template__$b,
        __vue_module_identifier__$b,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script$c = {
        name: 'bc-hours-inputs',
        props: {
            tipo: String
        },
        data() {
            return {
                hour: '',
                hour2: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.hour, this.hour2]);
            }
        }
    };

    /* script */
    const __vue_script__$c = script$c;

    /* template */
    var __vue_render__$c = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-hours-inputs" }, [
          _c("div", { staticClass: "options-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hour,
                  expression: "hour"
                }
              ],
              staticClass: "inp big",
              attrs: { id: "hour", name: "hour", type: "time" },
              domProps: { value: _vm.hour },
              on: {
                change: _vm.change,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.hour = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hour2,
                  expression: "hour2"
                }
              ],
              staticClass: "inp big",
              attrs: { id: "hour2", name: "hour2", type: "time" },
              domProps: { value: _vm.hour2 },
              on: {
                change: _vm.change,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.hour2 = $event.target.value;
                }
              }
            })
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$c = [];
    __vue_render__$c._withStripped = true;

      /* style */
      const __vue_inject_styles__$c = function (inject) {
        if (!inject) return
        inject("data-v-71ccda52_0", { source: ".btn-filter-icon[data-v-71ccda52] {\n  padding: .1em;\n}\n.btn-filter[data-v-71ccda52] {\n  padding: .5em;\n}\n.bc-hours-inputs[data-v-71ccda52] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.bc-hours-inputs .options-container[data-v-71ccda52] {\n    display: inline-flex;\n    align-items: center;\n}\n.bc-hours-inputs .options-container input[data-v-71ccda52] {\n      height: 24px !important;\n      padding: 2px;\n}\n.bc-hours-inputs .options-container input[data-v-71ccda52]:not(:first-child) {\n        margin-left: 5px;\n}\n\n/*# sourceMappingURL=bc-hour-inputs.vue.map */", map: {"version":3,"sources":["bc-hour-inputs.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-hour-inputs.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAFA;IAIA,oBAAA;IACA,mBAAA;AAAA;AALA;MAOA,uBAAA;MACA,YAAA;AAAA;AARA;QAUA,gBAAA;AAAA;;ADIA,6CAA6C","file":"bc-hour-inputs.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-hours-inputs {\n  display: inline-flex;\n  flex-direction: column; }\n  .bc-hours-inputs .options-container {\n    display: inline-flex;\n    align-items: center; }\n    .bc-hours-inputs .options-container input {\n      height: 24px !important;\n      padding: 2px; }\n      .bc-hours-inputs .options-container input:not(:first-child) {\n        margin-left: 5px; }\n\n/*# sourceMappingURL=bc-hour-inputs.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-hours-inputs {\n        display: inline-flex;\n        flex-direction: column;\n        .options-container {\n            display: inline-flex;\n            align-items: center;\n            input {\n                height: 24px !important;\n                padding: 2px;\n                &:not(:first-child) {\n                    margin-left: 5px;\n                }\n            }\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-hours-inputs\">\n            <div class=\"options-container\">\n                <input id=\"hour\" name=\"hour\" type=\"time\" @change=\"change\"\n                    class=\"inp big\" v-model=\"hour\">\n                <input id=\"hour2\" name=\"hour2\" type=\"time\" @change=\"change\"\n                    class=\"inp big\" v-model=\"hour2\">\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'bc-hours-inputs',\n        props: {\n            tipo: String\n        },\n        data() {\n            return {\n                hour: '',\n                hour2: ''\n            };\n        },\n        methods: {\n            change() {\n                this.$emit('change', [this.hour, this.hour2]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$c = "data-v-71ccda52";
      /* module identifier */
      const __vue_module_identifier__$c = undefined;
      /* functional template */
      const __vue_is_functional_template__$c = false;
      /* style inject SSR */
      

      
      var hourInputs = normalizeComponent_1(
        { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
        __vue_inject_styles__$c,
        __vue_script__$c,
        __vue_scope_id__$c,
        __vue_is_functional_template__$c,
        __vue_module_identifier__$c,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script$d = {
        name: 'bc-date-combo',
        data() {
            return {
                dates: [
                    {
                        id: 1,
                        label: 'Última semana'
                    },
                    {
                        id: 2,
                        label: 'Últimas 2 semanas'
                    },
                    {
                        id: 3,
                        label: 'Últimas 3 semanas'
                    },
                    {
                        id: 4,
                        label: 'Último mês'
                    },
                    {
                        id: 5,
                        label: 'Últimos 2 meses'
                    },
                    {
                        id: 6,
                        label: 'Últimos 3 meses'
                    }
                ],
                dateSelected: {
                    id: ''
                }
            };
        },
        methods: {
            change(e) {
                this.dateSelected = this.dates[e.target.value];
                this.$emit('change', [this.dateSelected]);
            }
        }
    };

    /* script */
    const __vue_script__$d = script$d;

    /* template */
    var __vue_render__$d = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-date-combo" }, [
          _c("div", { staticClass: "options-container" }, [
            _c(
              "select",
              { staticClass: "inp", on: { change: _vm.change } },
              [
                _c(
                  "option",
                  {
                    attrs: { value: "", disabled: "" },
                    domProps: { selected: _vm.dateSelected.id === null }
                  },
                  [_vm._v("Selecione")]
                ),
                _vm._v(" "),
                _vm._l(_vm.dates, function(date, idx) {
                  return _c(
                    "option",
                    {
                      key: idx,
                      domProps: {
                        value: idx,
                        selected: _vm.dateSelected.id === date.id
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(date.label) +
                          "\n                "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$d = [];
    __vue_render__$d._withStripped = true;

      /* style */
      const __vue_inject_styles__$d = function (inject) {
        if (!inject) return
        inject("data-v-4ffd164a_0", { source: ".btn-filter-icon[data-v-4ffd164a] {\n  padding: .1em;\n}\n.btn-filter[data-v-4ffd164a] {\n  padding: .5em;\n}\n.bc-date-combo[data-v-4ffd164a] {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n.options-container[data-v-4ffd164a] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-date-combo.vue.map */", map: {"version":3,"sources":["bc-date-combo.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-date-combo.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;EACA,gBAAA;AAAA;AAEA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADIA,4CAA4C","file":"bc-date-combo.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-date-combo {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-date-combo.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-date-combo {\n        display: inline-flex;\n        flex-direction: column;\n        margin-left: 5px;\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-date-combo\">\n            <div class=\"options-container\">\n                <select class=\"inp\" @change=\"change\">\n                    <option value=\"\" disabled :selected=\"dateSelected.id === null\">Selecione</option>\n                    <option v-for=\"(date, idx) in dates\" :key=\"idx\" :value=\"idx\"\n                        :selected=\"dateSelected.id === date.id\">\n                            {{date.label}}\n                    </option>\n                </select>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'bc-date-combo',\n        data() {\n            return {\n                dates: [\n                    {\n                        id: 1,\n                        label: 'Última semana'\n                    },\n                    {\n                        id: 2,\n                        label: 'Últimas 2 semanas'\n                    },\n                    {\n                        id: 3,\n                        label: 'Últimas 3 semanas'\n                    },\n                    {\n                        id: 4,\n                        label: 'Último mês'\n                    },\n                    {\n                        id: 5,\n                        label: 'Últimos 2 meses'\n                    },\n                    {\n                        id: 6,\n                        label: 'Últimos 3 meses'\n                    }\n                ],\n                dateSelected: {\n                    id: ''\n                }\n            };\n        },\n        methods: {\n            change(e) {\n                this.dateSelected = this.dates[e.target.value];\n                this.$emit('change', [this.dateSelected]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$d = "data-v-4ffd164a";
      /* module identifier */
      const __vue_module_identifier__$d = undefined;
      /* functional template */
      const __vue_is_functional_template__$d = false;
      /* style inject SSR */
      

      
      var dateCombo = normalizeComponent_1(
        { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
        __vue_inject_styles__$d,
        __vue_script__$d,
        __vue_scope_id__$d,
        __vue_is_functional_template__$d,
        __vue_module_identifier__$d,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script$e = {
        name: 'bc-date-input',
        props: {
            tipo: String
        },
        data() {
            return {
                date: '',
                hour: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.date, this.hour]);
            }
        }
    };

    /* script */
    const __vue_script__$e = script$e;

    /* template */
    var __vue_render__$e = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-int-input" }, [
          _c("div", { staticClass: "options-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.date,
                  expression: "date"
                }
              ],
              staticClass: "inp big",
              attrs: { id: "date", name: "finalDate", type: "date" },
              domProps: { value: _vm.date },
              on: {
                change: _vm.change,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.date = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _vm.tipo === "_data_hora"
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.hour,
                      expression: "hour"
                    }
                  ],
                  staticClass: "inp big",
                  attrs: { id: "hour", name: "hour", type: "time" },
                  domProps: { value: _vm.hour },
                  on: {
                    change: _vm.change,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.hour = $event.target.value;
                    }
                  }
                })
              : _vm._e()
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$e = [];
    __vue_render__$e._withStripped = true;

      /* style */
      const __vue_inject_styles__$e = function (inject) {
        if (!inject) return
        inject("data-v-51a8a736_0", { source: ".btn-filter-icon[data-v-51a8a736] {\n  padding: .1em;\n}\n.btn-filter[data-v-51a8a736] {\n  padding: .5em;\n}\n.bc-int-input[data-v-51a8a736] {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n.bc-int-input .options-container[data-v-51a8a736] {\n    display: inline-flex;\n    align-items: center;\n}\n.bc-int-input .options-container input[data-v-51a8a736] {\n      height: 24px !important;\n}\n.bc-int-input .options-container input[data-v-51a8a736]:not(:first-child) {\n        margin-left: 5px;\n}\n\n/*# sourceMappingURL=bc-date-input.vue.map */", map: {"version":3,"sources":["bc-date-input.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-date-input.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;EACA,gBAAA;AAAA;AAHA;IAKA,oBAAA;IACA,mBAAA;AAAA;AANA;MAQA,uBAAA;AAAA;AARA;QAUA,gBAAA;AAAA;;ADIA,4CAA4C","file":"bc-date-input.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-int-input {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px; }\n  .bc-int-input .options-container {\n    display: inline-flex;\n    align-items: center; }\n    .bc-int-input .options-container input {\n      height: 24px !important; }\n      .bc-int-input .options-container input:not(:first-child) {\n        margin-left: 5px; }\n\n/*# sourceMappingURL=bc-date-input.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-int-input {\n        display: inline-flex;\n        flex-direction: column;\n        margin-left: 5px;\n        .options-container {\n            display: inline-flex;\n            align-items: center;\n            input {\n                height: 24px !important;\n                &:not(:first-child) {\n                    margin-left: 5px;\n                }\n            }\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-int-input\">\n            <div class=\"options-container\">\n                <input id=\"date\" name=\"finalDate\" type=\"date\" @change=\"change\"\n                    class=\"inp big\" v-model=\"date\">\n                <input id=\"hour\" name=\"hour\" type=\"time\" @change=\"change\"\n                    class=\"inp big\" v-model=\"hour\" v-if=\"tipo === '_data_hora'\">\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'bc-date-input',\n        props: {\n            tipo: String\n        },\n        data() {\n            return {\n                date: '',\n                hour: ''\n            };\n        },\n        methods: {\n            change() {\n                this.$emit('change', [this.date, this.hour]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$e = "data-v-51a8a736";
      /* module identifier */
      const __vue_module_identifier__$e = undefined;
      /* functional template */
      const __vue_is_functional_template__$e = false;
      /* style inject SSR */
      

      
      var dateInput = normalizeComponent_1(
        { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
        __vue_inject_styles__$e,
        __vue_script__$e,
        __vue_scope_id__$e,
        __vue_is_functional_template__$e,
        __vue_module_identifier__$e,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script$f = {
        name: 'bc-date-inputs',
        props: {
            tipo: String
        },
        data() {
            return {
                initialDate: '',
                finalDate: '',
                hour: ''
            };
        },
        methods: {
            change() {
                this.$emit('change', [this.initialDate, this.finalDate, this.hour]);
            }
        }
    };

    /* script */
    const __vue_script__$f = script$f;

    /* template */
    var __vue_render__$f = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-int-inputs" }, [
          _c("div", { staticClass: "options-container" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.initialDate,
                  expression: "initialDate"
                }
              ],
              staticClass: "inp big",
              attrs: { id: "date1", name: "initialDate", type: "date" },
              domProps: { value: _vm.initialDate },
              on: {
                change: _vm.change,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.initialDate = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.finalDate,
                  expression: "finalDate"
                }
              ],
              staticClass: "inp big",
              attrs: { id: "date2", name: "finalDate", type: "date" },
              domProps: { value: _vm.finalDate },
              on: {
                change: _vm.change,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.finalDate = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _vm.tipo === "_data_hora"
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.hour,
                      expression: "hour"
                    }
                  ],
                  staticClass: "inp big",
                  attrs: { id: "hour", name: "hour", type: "time" },
                  domProps: { value: _vm.hour },
                  on: {
                    change: _vm.change,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.hour = $event.target.value;
                    }
                  }
                })
              : _vm._e()
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$f = [];
    __vue_render__$f._withStripped = true;

      /* style */
      const __vue_inject_styles__$f = function (inject) {
        if (!inject) return
        inject("data-v-c8c7be6e_0", { source: ".btn-filter-icon[data-v-c8c7be6e] {\n  padding: .1em;\n}\n.btn-filter[data-v-c8c7be6e] {\n  padding: .5em;\n}\n.bc-int-inputs[data-v-c8c7be6e] {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n.bc-int-inputs input[data-v-c8c7be6e] {\n    height: 24px !important;\n}\n.bc-int-inputs input[data-v-c8c7be6e]:not(:first-child) {\n      margin-left: 5px;\n}\n.options-container[data-v-c8c7be6e] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-date-inputs.vue.map */", map: {"version":3,"sources":["bc-date-inputs.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-field-options/bc-date-inputs.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;EACA,gBAAA;AAAA;AAHA;IAKA,uBAAA;AAAA;AALA;MAOA,gBAAA;AAAA;AAIA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADEA,6CAA6C","file":"bc-date-inputs.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-int-inputs {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px; }\n  .bc-int-inputs input {\n    height: 24px !important; }\n    .bc-int-inputs input:not(:first-child) {\n      margin-left: 5px; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-date-inputs.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/buttons\";\n\n    .bc-int-inputs {\n        display: inline-flex;\n        flex-direction: column;\n        margin-left: 5px;\n        input {\n            height: 24px !important;\n            &:not(:first-child) {\n                margin-left: 5px;\n            }\n        }\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-int-inputs\">\n            <div class=\"options-container\">\n                <input id=\"date1\" name=\"initialDate\" type=\"date\" @change=\"change\"\n                        class=\"inp big\" v-model=\"initialDate\">\n                <input id=\"date2\" name=\"finalDate\" type=\"date\" @change=\"change\"\n                        class=\"inp big\" v-model=\"finalDate\">\n                <input id=\"hour\" name=\"hour\" type=\"time\" @change=\"change\"\n                    class=\"inp big\" v-model=\"hour\" v-if=\"tipo === '_data_hora'\">\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'bc-date-inputs',\n        props: {\n            tipo: String\n        },\n        data() {\n            return {\n                initialDate: '',\n                finalDate: '',\n                hour: ''\n            };\n        },\n        methods: {\n            change() {\n                this.$emit('change', [this.initialDate, this.finalDate, this.hour]);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$f = "data-v-c8c7be6e";
      /* module identifier */
      const __vue_module_identifier__$f = undefined;
      /* functional template */
      const __vue_is_functional_template__$f = false;
      /* style inject SSR */
      

      
      var dateInputs = normalizeComponent_1(
        { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
        __vue_inject_styles__$f,
        __vue_script__$f,
        __vue_scope_id__$f,
        __vue_is_functional_template__$f,
        __vue_module_identifier__$f,
        browser,
        undefined
      );

    //

    var script$g = {
        name: 'bc-filter-field',
        components: {
            textField
        },
        props: {
            tipoAttrib: {
                type: String,
                default: null
            },
            operador: Object,
            hasField: {
                id: null
            },
            dateOption: Object
        },
        data() {
            return {
                field: {
                    id: null
                },
                metaFields: metadata.fields[this.tipoAttrib]
            };
        },
        computed: {
            // eslint-disable-next-line
            dynamicComponent() {
                switch (this.tipoAttrib) {
                    case '_texto_delimitado':
                        return this.checkTextField();
                    case '_inteiro_32':
                        return this.checkNumberField();
                    case '_inteiro_64':
                        return this.checkNumberField();
                    case '_decimal_32':
                        return this.checkNumberField();
                    case '_decimal_64':
                        return this.checkNumberField();
                    case '_data':
                        return this.checkDataField();
                    case '_hora':
                        return this.checkNumberField();
                    case '_data_hora':
                        return this.checkDataHoraField();
                    case '_tipo_selecao':
                        return textCombo;
                    case 'outros':
                        return textField;
                    default:
                        return textField;
                }
            }
        },
        methods: {
            fireFieldSelected(e) {
                const metaField = this.metaFields[e.target.value];
                this.field = metaField;
                this.$emit('meta-field-selected', metaField);
                this.$forceUpdate();
            },
            fireFieldRemoved() {
                this.$emit('meta-field-removed');
            },
            checkTextField() {
                if (this.operador.name === 'ANY_CONTENT' || this.operador.name === 'NO_CONTENT') {
                    return null;
                } else if (this.operador.autoComplete) {
                    return textAutocompleteField;
                }
                return textField;
            },
            checkNumberField() {
                if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {
                    return numberInputs;
                }
                return numberInput;
            },
            checkDataField() {
                if (this.dateOption.label === 'Data') {
                    if (this.operador.name === 'LESS_THAN' || this.operador.name === 'OUT_OF_RANGE') {
                        return dateInputs;
                    } else if (this.operador.name === 'PERIODO') {
                        return dateCombo;
                    }
                    return dateInput;
                } else if (this.dateOption.label === 'Ano') {
                    if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {
                        return hourInputs;
                    }
                    return hourInput;
                }
                return null;
            },
            checkDataHoraField() {
                if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {
                    return dateInputs;
                } else if (this.operador.name === 'PERIODO') {
                    return dateCombo;
                }
                return dateInput;
            },
            change(value) {
                this.$emit('change', value);
            }

        },
        watch: {
            hasField() {
                this.field = this.hasField;
                this.metaFields = metadata.fields[this.tipoAttrib];
            }
        }
    };

    /* script */
    const __vue_script__$g = script$g;

    /* template */
    var __vue_render__$g = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "bc-filter-field" }, [
          _c(
            "div",
            { staticClass: "options-container" },
            [
              _c(_vm.dynamicComponent, {
                tag: "component",
                attrs: { tipo: _vm.tipoAttrib },
                on: { change: _vm.change }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-filter",
                  on: { click: _vm.fireFieldRemoved }
                },
                [_c("i", { staticClass: "mdi mdi-close" })]
              )
            ],
            1
          )
        ])
      ])
    };
    var __vue_staticRenderFns__$g = [];
    __vue_render__$g._withStripped = true;

      /* style */
      const __vue_inject_styles__$g = function (inject) {
        if (!inject) return
        inject("data-v-3f71141e_0", { source: ".btn-filter-icon[data-v-3f71141e] {\n  padding: .1em;\n}\n.btn-filter[data-v-3f71141e] {\n  padding: .5em;\n}\n.bc-filter-field[data-v-3f71141e] {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n.options-container[data-v-3f71141e] {\n  display: inline-flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=bc-filter-fields.vue.map */", map: {"version":3,"sources":["bc-filter-fields.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-filter-fields.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;EACA,gBAAA;AAAA;AAEA;EACA,oBAAA;EACA,mBAAA;AAAA;;ADIA,+CAA+C","file":"bc-filter-fields.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-filter-field {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 5px; }\n\n.options-container {\n  display: inline-flex;\n  align-items: center; }\n\n/*# sourceMappingURL=bc-filter-fields.vue.map */","<style scoped lang=\"scss\">\n    @import \"styles/variables\";\n    @import \"styles/buttons\";\n\n    .bc-filter-field {\n        display: inline-flex;\n        flex-direction: column;\n        margin-left: 5px;\n    }\n    .options-container {\n        display: inline-flex;\n        align-items: center;\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-filter-field\">\n            <div class=\"options-container\">\n                <component :is=\"dynamicComponent\" :tipo=\"tipoAttrib\" @change=\"change\"></component>\n                <button class=\"btn btn-filter\" @click=\"fireFieldRemoved\">\n                    <i class=\"mdi mdi-close\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    import metadata from './metadata.json';\n    import textField from './bc-field-options/bc-text-field.vue';\n    import textAutocompleteField from './bc-field-options/bc-text-autocomplete.vue';\n    import textCombo from './bc-field-options/bc-text-combo.vue';\n    import numberInput from './bc-field-options/bc-int-input.vue';\n    import numberInputs from './bc-field-options/bc-int-inputs.vue';\n    import hourInput from './bc-field-options/bc-hour-input.vue';\n    import hourInputs from './bc-field-options/bc-hour-inputs.vue';\n    import dateCombo from './bc-field-options/bc-date-combo.vue';\n    import dateInput from './bc-field-options/bc-date-input.vue';\n    import dateInputs from './bc-field-options/bc-date-inputs.vue';\n\n    export default {\n        name: 'bc-filter-field',\n        components: {\n            textField\n        },\n        props: {\n            tipoAttrib: {\n                type: String,\n                default: null\n            },\n            operador: Object,\n            hasField: {\n                id: null\n            },\n            dateOption: Object\n        },\n        data() {\n            return {\n                field: {\n                    id: null\n                },\n                metaFields: metadata.fields[this.tipoAttrib]\n            };\n        },\n        computed: {\n            // eslint-disable-next-line\n            dynamicComponent() {\n                switch (this.tipoAttrib) {\n                    case '_texto_delimitado':\n                        return this.checkTextField();\n                    case '_inteiro_32':\n                        return this.checkNumberField();\n                    case '_inteiro_64':\n                        return this.checkNumberField();\n                    case '_decimal_32':\n                        return this.checkNumberField();\n                    case '_decimal_64':\n                        return this.checkNumberField();\n                    case '_data':\n                        return this.checkDataField();\n                    case '_hora':\n                        return this.checkNumberField();\n                    case '_data_hora':\n                        return this.checkDataHoraField();\n                    case '_tipo_selecao':\n                        return textCombo;\n                    case 'outros':\n                        return textField;\n                    default:\n                        return textField;\n                }\n            }\n        },\n        methods: {\n            fireFieldSelected(e) {\n                const metaField = this.metaFields[e.target.value];\n                this.field = metaField;\n                this.$emit('meta-field-selected', metaField);\n                this.$forceUpdate();\n            },\n            fireFieldRemoved() {\n                this.$emit('meta-field-removed');\n            },\n            checkTextField() {\n                if (this.operador.name === 'ANY_CONTENT' || this.operador.name === 'NO_CONTENT') {\n                    return null;\n                } else if (this.operador.autoComplete) {\n                    return textAutocompleteField;\n                }\n                return textField;\n            },\n            checkNumberField() {\n                if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {\n                    return numberInputs;\n                }\n                return numberInput;\n            },\n            checkDataField() {\n                if (this.dateOption.label === 'Data') {\n                    if (this.operador.name === 'LESS_THAN' || this.operador.name === 'OUT_OF_RANGE') {\n                        return dateInputs;\n                    } else if (this.operador.name === 'PERIODO') {\n                        return dateCombo;\n                    }\n                    return dateInput;\n                } else if (this.dateOption.label === 'Ano') {\n                    if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {\n                        return hourInputs;\n                    }\n                    return hourInput;\n                }\n                return null;\n            },\n            checkDataHoraField() {\n                if (this.operador.name === 'RANGE' || this.operador.name === 'OUT_OF_RANGE') {\n                    return dateInputs;\n                } else if (this.operador.name === 'PERIODO') {\n                    return dateCombo;\n                }\n                return dateInput;\n            },\n            change(value) {\n                this.$emit('change', value);\n            }\n\n        },\n        watch: {\n            hasField() {\n                this.field = this.hasField;\n                this.metaFields = metadata.fields[this.tipoAttrib];\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$g = "data-v-3f71141e";
      /* module identifier */
      const __vue_module_identifier__$g = undefined;
      /* functional template */
      const __vue_is_functional_template__$g = false;
      /* style inject SSR */
      

      
      var BcFilterFields = normalizeComponent_1(
        { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
        __vue_inject_styles__$g,
        __vue_script__$g,
        __vue_scope_id__$g,
        __vue_is_functional_template__$g,
        __vue_module_identifier__$g,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script$h = {
        name: 'dgt-context-menu',
        props: {
            opened: {
                type: Boolean,
                default: false
            },
            closeOnClick: {
                type: Boolean,
                default: false
            },
            changeOpen: {
                type: Boolean,
                default: true
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
                if (this.changeOpen) {
                    this.isOpened = !this.isOpened;
                }
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
                handler() {
                    if (this.isOpened) this.setContextMenuPosition();
                }
            }
        }
    };

    /* script */
    const __vue_script__$h = script$h;

    /* template */
    var __vue_render__$h = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "nav",
        { staticClass: "dgt-context-menu", attrs: { opened: _vm.isOpened } },
        [
          _c(
            "header",
            {
              staticClass: "dgt-context-menu-header",
              on: {
                click: function($event) {
                  $event.stopPropagation();
                  return _vm.onClickHeader($event)
                }
              }
            },
            [_vm._t("button", null, { isOpen: _vm.isOpened })],
            2
          ),
          _vm._v(" "),
          _c("transition", { attrs: { name: "fade" } }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isOpened,
                    expression: "isOpened"
                  }
                ],
                staticClass: "popover dgt-context-menu-items",
                on: {
                  click: function($event) {
                    $event.stopPropagation();
                    return _vm.handleCloseOnClick($event)
                  }
                }
              },
              [_vm._t("content")],
              2
            )
          ])
        ],
        1
      )
    };
    var __vue_staticRenderFns__$h = [];
    __vue_render__$h._withStripped = true;

      /* style */
      const __vue_inject_styles__$h = function (inject) {
        if (!inject) return
        inject("data-v-f9a44f4c_0", { source: ".dgt-context-menu {\n  position: relative;\n  display: inline-block;\n}\n.popover {\n  position: fixed;\n  width: max-content;\n  max-width: 350px;\n  overflow: auto;\n  max-height: 400px;\n  z-index: 10;\n}\n.popover-item {\n  display: block !important;\n}\n.popover-screen-blocker {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 9;\n}\n\n/*# sourceMappingURL=dgt-context-menu.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/components/dgt-context-menu.vue","dgt-context-menu.vue"],"names":[],"mappings":"AACA;EACA,kBAAA;EACA,qBAAA;AAAA;AAEA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,WAAA;AAAA;AAEA;EACA,yBAAA;AAAA;AAGA;EACA,eAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;AAAA;;ACAA,+CAA+C","file":"dgt-context-menu.vue","sourcesContent":["<style lang=\"scss\">\n    .dgt-context-menu {\n        position: relative;\n        display: inline-block;\n    }\n    .popover {\n        position: fixed;\n        width: max-content;\n        max-width: 350px;\n        overflow: auto;\n        max-height: 400px;\n        z-index: 10;\n    }\n    .popover-item{\n        display: block !important;\n    }\n\n    .popover-screen-blocker {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        z-index: 9;\n    }\n</style>\n<template>\n    <nav class=\"dgt-context-menu\" :opened=\"isOpened\">\n        <header class=\"dgt-context-menu-header\" @click.stop=\"onClickHeader\">\n            <slot name=\"button\" :isOpen=\"isOpened\"></slot>\n        </header>\n        <transition name=\"fade\">\n            <div class=\"popover dgt-context-menu-items\" @click.stop=\"handleCloseOnClick\" v-show=\"isOpened\">\n                <slot name=\"content\"></slot>\n            </div>\n        </transition>\n    </nav>\n</template>\n\n<script>\n    export default {\n        name: 'dgt-context-menu',\n        props: {\n            opened: {\n                type: Boolean,\n                default: false\n            },\n            closeOnClick: {\n                type: Boolean,\n                default: false\n            },\n            changeOpen: {\n                type: Boolean,\n                default: true\n            }\n        },\n        data() {\n            return {\n                isOpened: this.opened\n            };\n        },\n        mounted() {\n            this.component = this.$el.querySelector('.dgt-context-menu-items');\n            this.currentListener = this.closeAnotherMenus.bind(this);\n            ['click', 'mouseup'].forEach(evt => {\n                document.removeEventListener(evt, this.currentListener);\n                document.addEventListener(evt, this.currentListener);\n            });\n        },\n        methods: {\n            onClickHeader() {\n                if (this.changeOpen) {\n                    this.isOpened = !this.isOpened;\n                }\n            },\n            setContextMenuPosition() {\n                const topParent = this.$el.getBoundingClientRect().top + this.$el.clientHeight;\n                this.$el.querySelector('.popover').style.top = `${topParent}px`;\n            },\n            closeAnotherMenus() {\n                const menu = event.target.closest('.dgt-context-menu');\n                if (menu !== this.$el) {\n                    this.isOpened = false;\n                }\n            },\n            handleCloseOnClick() {\n                if (this.closeOnClick) this.isOpened = false;\n            }\n        },\n        watch: {\n            isOpened: {\n                handler() {\n                    if (this.isOpened) this.setContextMenuPosition();\n                }\n            }\n        }\n    };\n</script>\n",".dgt-context-menu {\n  position: relative;\n  display: inline-block; }\n\n.popover {\n  position: fixed;\n  width: max-content;\n  max-width: 350px;\n  overflow: auto;\n  max-height: 400px;\n  z-index: 10; }\n\n.popover-item {\n  display: block !important; }\n\n.popover-screen-blocker {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 9; }\n\n/*# sourceMappingURL=dgt-context-menu.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$h = undefined;
      /* module identifier */
      const __vue_module_identifier__$h = undefined;
      /* functional template */
      const __vue_is_functional_template__$h = false;
      /* style inject SSR */
      

      
      var dgtContextMenu = normalizeComponent_1(
        { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
        __vue_inject_styles__$h,
        __vue_script__$h,
        __vue_scope_id__$h,
        __vue_is_functional_template__$h,
        __vue_module_identifier__$h,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script$i = {
        name: 'dgtList',
        props: {
            list: {},
            header: String,
            subHeader: String
        }
    };

    /* script */
    const __vue_script__$i = script$i;

    /* template */
    var __vue_render__$i = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "dgt-list-component" },
        [
          _vm.header ? _c("h4", [_vm._v(_vm._s(_vm.header))]) : _vm._e(),
          _vm._v(" "),
          _vm.subHeader ? _c("small", [_vm._v(_vm._s(_vm.subHeader))]) : _vm._e(),
          _vm._v(" "),
          _vm.header || _vm.subHeader ? _c("hr") : _vm._e(),
          _vm._v(" "),
          _vm._t("main-slot", null, { list: _vm.list })
        ],
        2
      )
    };
    var __vue_staticRenderFns__$i = [];
    __vue_render__$i._withStripped = true;

      /* style */
      const __vue_inject_styles__$i = function (inject) {
        if (!inject) return
        inject("data-v-0b891a66_0", { source: ".dgt-list-component[data-v-0b891a66] {\n  padding: var(--dgt-grid-padding, 10px);\n  width: var(--dgt-list-width, fit-content);\n}\n.dgt-list-component h4[data-v-0b891a66],\n  .dgt-list-component small[data-v-0b891a66] {\n    margin: 0;\n    padding: 1px;\n}\n.dgt-list-component hr[data-v-0b891a66] {\n    margin-bottom: 1px;\n    box-shadow: 0px 1px 0px 0px #c7c7c7;\n    border-bottom: 0;\n}\n.dgt-list-component .list[data-v-0b891a66] {\n    display: grid;\n    overflow-y: scroll;\n    max-height: var(--dgt-list-max-height, 400px);\n    padding: var(--dgt-list-padding, 2px 0 2px 10px);\n}\n\n/*# sourceMappingURL=dgt-list.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/components/dgt-list.vue","dgt-list.vue"],"names":[],"mappings":"AACA;EACA,sCAAA;EACA,yCAAA;AAAA;AAFA;;IAKA,SAAA;IACA,YAAA;AAAA;AANA;IASA,kBAAA;IACA,mCAAA;IACA,gBAAA;AAAA;AAXA;IAcA,aAAA;IACA,kBAAA;IACA,6CAAA;IACA,gDAAA;AAAA;;ACDA,uCAAuC","file":"dgt-list.vue","sourcesContent":["<style lang=\"scss\" scoped>\n.dgt-list-component {\n  padding: var(--dgt-grid-padding, 10px);\n  width: var(--dgt-list-width, fit-content);\n  h4,\n  small {\n    margin: 0;\n    padding: 1px;\n  }\n  hr {\n    margin-bottom: 1px;\n    box-shadow: 0px 1px 0px 0px #c7c7c7;\n    border-bottom: 0;\n  }\n  .list {\n    display: grid;\n    overflow-y: scroll;\n    max-height: var(--dgt-list-max-height, 400px);\n    padding: var(--dgt-list-padding, 2px 0 2px 10px);\n  }\n}\n</style>\n\n<template>\n    <div class=\"dgt-list-component\">\n        <h4 v-if=\"header\">{{ header }}</h4>\n        <small v-if=\"subHeader\">{{ subHeader }}</small>\n        <hr v-if=\"header || subHeader\">\n        <slot name=\"main-slot\" :list=\"list\"></slot>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: 'dgtList',\n        props: {\n            list: {},\n            header: String,\n            subHeader: String\n        }\n    };\n</script>\n",".dgt-list-component {\n  padding: var(--dgt-grid-padding, 10px);\n  width: var(--dgt-list-width, fit-content); }\n  .dgt-list-component h4,\n  .dgt-list-component small {\n    margin: 0;\n    padding: 1px; }\n  .dgt-list-component hr {\n    margin-bottom: 1px;\n    box-shadow: 0px 1px 0px 0px #c7c7c7;\n    border-bottom: 0; }\n  .dgt-list-component .list {\n    display: grid;\n    overflow-y: scroll;\n    max-height: var(--dgt-list-max-height, 400px);\n    padding: var(--dgt-list-padding, 2px 0 2px 10px); }\n\n/*# sourceMappingURL=dgt-list.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$i = "data-v-0b891a66";
      /* module identifier */
      const __vue_module_identifier__$i = undefined;
      /* functional template */
      const __vue_is_functional_template__$i = false;
      /* style inject SSR */
      

      
      var dgtList = normalizeComponent_1(
        { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
        __vue_inject_styles__$i,
        __vue_script__$i,
        __vue_scope_id__$i,
        __vue_is_functional_template__$i,
        __vue_module_identifier__$i,
        browser,
        undefined
      );

    //

    const BC = {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS', checked: true};

    var script$j = {
        name: 'bc-filter-source-modal',
        mixins: [i18n.mixin],
        components: {
            dgtContextMenu,
            dgtList
        },
        props: {
            searchProp: String,
            uniqueId: Number,
            uiProps: String,
            sourceTypes: Array,
            sourcesSelectedProp: Array
        },
        data() {
            return {
                searchInput: this.searchProp || '',
                sources: [],
                ui: this.uiProps,
                showList: true
            };
        },
        created() {
            this.loadSources();
        },
        computed: {
            sourcesList() {
                if (!this.searchInput) {
                    return this.sources;
                }
                return this.sources.filter((source) => {
                    let searchText = this.searchInput.toLowerCase();
                    return source.name && source.name.toLowerCase().indexOf(searchText) >= 0;
                });
            },
            hasSourceSelected() {
                for (const source of this.getAppliedSources()) {
                    if (source.type !== BC.type) {
                        return true;
                    }
                }
                return false;
            },
            showSourceOption() {
                for (const source of this.sources) {
                    if (source.type !== BC.type) {
                        return true;
                    }
                }
                return false;
            }
        },
        methods: {
            async loadSources() {
                let sourcesTemp = await bcService.getSourcesForUI(this.ui);
                this.sources = [JSON.parse(JSON.stringify(BC))];
                for (const source of sourcesTemp) {
                    if (this.sourceTypes.indexOf(source.type) !== -1) {
                        this.sources.push(source);
                    }
                }
            },
            save() {
                this.$refs.menu.onClickHeader();
                this.searchInput = '';
                this.$emit('apply', JSON.parse(JSON.stringify(this.sources.filter((source) => source.checked))));
            },
            getAppliedSources() {
                const srcs = (this.sourcesSelectedProp || []);
                if (!this.sourcesSelectedProp) {
                    srcs.push(BC);
                }
                return srcs;
            },
            cancel() {
                outter: for (const source of this.sources || []) {
                    for (const sourceProp of this.getAppliedSources()) {
                        if (sourceProp.id === source.id) {
                            source.checked = sourceProp.checked;
                            continue outter;
                        }
                    }
                    source.checked = false;
                }
                this.searchInput = '';
                this.showList = false;
                this.$nextTick(() => {
                    this.showList = true;
                });
                this.$refs.menu.onClickHeader();
            }
        }
    };

    /* script */
    const __vue_script__$j = script$j;

    /* template */
    var __vue_render__$j = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _vm.showSourceOption
        ? _c(
            "dgt-context-menu",
            {
              ref: "menu",
              staticClass: "bc-filter-source-menu",
              attrs: { "close-on-click": false }
            },
            [
              _c("template", { slot: "button" }, [
                _c("i", {
                  staticClass: "mdi mdi-database",
                  class: { blue: _vm.hasSourceSelected }
                })
              ]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "content" },
                [
                  _c("b", [_vm._v(_vm._s(_vm._f("i18n")("sources")))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "field width-full input-search" }, [
                    _c("i", { staticClass: "mdi mdi-magnify" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.searchInput,
                          expression: "searchInput"
                        }
                      ],
                      staticClass: "inp big",
                      attrs: {
                        type: "search",
                        placeholder: _vm._f("i18n")("createSearch")
                      },
                      domProps: { value: _vm.searchInput },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.searchInput = $event.target.value;
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm.showList
                    ? _c("dgt-list", {
                        staticClass: "custom",
                        attrs: { list: _vm.sourcesList },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "main-slot",
                              fn: function(slotProps) {
                                return [
                                  _c(
                                    "table",
                                    { staticClass: "list" },
                                    _vm._l(slotProps.list, function(source, index) {
                                      return _c(
                                        "tr",
                                        { key: index, staticClass: "source-item" },
                                        [
                                          _c("td", { staticClass: "name-source" }, [
                                            _c("div", { staticClass: "checkbox" }, [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: source.checked,
                                                    expression: "source.checked"
                                                  }
                                                ],
                                                staticClass: "inp",
                                                attrs: {
                                                  type: "checkbox",
                                                  id:
                                                    _vm.uniqueId +
                                                    "-" +
                                                    source.name +
                                                    "-" +
                                                    source.id
                                                },
                                                domProps: {
                                                  checked: source.checked,
                                                  value: source.id,
                                                  checked: Array.isArray(
                                                    source.checked
                                                  )
                                                    ? _vm._i(
                                                        source.checked,
                                                        source.id
                                                      ) > -1
                                                    : source.checked
                                                },
                                                on: {
                                                  change: function($event) {
                                                    var $$a = source.checked,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false;
                                                    if (Array.isArray($$a)) {
                                                      var $$v = source.id,
                                                        $$i = _vm._i($$a, $$v);
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            source,
                                                            "checked",
                                                            $$a.concat([$$v])
                                                          );
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            source,
                                                            "checked",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice($$i + 1)
                                                              )
                                                          );
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        source,
                                                        "checked",
                                                        $$c
                                                      );
                                                    }
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  attrs: {
                                                    for:
                                                      _vm.uniqueId +
                                                      "-" +
                                                      source.name +
                                                      "-" +
                                                      source.id
                                                  }
                                                },
                                                [_vm._v(_vm._s(source.name))]
                                              )
                                            ])
                                          ])
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          3196111699
                        )
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _c(
                      "button",
                      { staticClass: "btn btn-primary", on: { click: _vm.save } },
                      [_vm._v(_vm._s(_vm._f("i18n")("save")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn", on: { click: _vm.cancel } },
                      [_vm._v(_vm._s(_vm._f("i18n")("cancel")))]
                    )
                  ])
                ],
                1
              )
            ],
            2
          )
        : _vm._e()
    };
    var __vue_staticRenderFns__$j = [];
    __vue_render__$j._withStripped = true;

      /* style */
      const __vue_inject_styles__$j = function (inject) {
        if (!inject) return
        inject("data-v-76ccdafa_0", { source: ".input-search {\n  position: relative;\n}\n.input-search .mdi-magnify {\n    position: absolute;\n    left: 0.29em;\n    font-size: 2em;\n}\n.input-search .inp {\n    padding-left: 2.8em !important;\n}\n.bc-filter-source-menu .popover {\n  padding: 10px;\n}\n.bc-filter-source-menu .popover .dgt-list-component {\n    padding: 0 0 15px 0;\n    width: 250px;\n}\n.bc-filter-source-menu .popover .dgt-list-component .list {\n      max-height: 120px !important;\n      overflow-y: auto;\n}\n.bc-filter-source-menu .mdi.blue {\n  color: #0d47a1;\n}\n\n/*# sourceMappingURL=bc-filter-source-menu.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/bc-components/bc-filter-source-menu.vue","bc-filter-source-menu.vue"],"names":[],"mappings":"AAEA;ECDE,kBAAkB;AAAE;ADCtB;IAGA,kBAAA;IACA,YAaA;ICdI,cAAc;AAAE;ADHpB;IAQA,8BAAA;AAAA;AANA;EAEA,aAAA;AAAA;AAFA;IAKA,mBAAA;IACA,YAAA;AAAA;AANA;MASA,4BAAA;MACA,gBAAA;AAAA;AAVA;EAiBA,cANA;AAAA;;ACMA,oDAAoD","file":"bc-filter-source-menu.vue","sourcesContent":["<style lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"../styles/inputs\";\n\n    .bc-filter-source-menu {\n        .popover {\n            padding: 10px;\n\n            .dgt-list-component {\n                padding: 0 0 15px 0;\n                width: 250px;\n\n                .list {\n                    max-height: 120px !important;\n                    overflow-y: auto;\n                }\n            }\n        }\n\n        .mdi {\n            &.blue {\n                color: $blue;\n            }\n        }\n    }\n</style>\n\n<template>\n    <dgt-context-menu :close-on-click=\"false\" class=\"bc-filter-source-menu\" ref=\"menu\" v-if=\"showSourceOption\">\n        <template slot=\"button\">\n            <i class=\"mdi mdi-database\" :class=\"{'blue': hasSourceSelected}\"></i>\n        </template>\n        <template slot=\"content\">\n            <b>{{ 'sources' | i18n}}</b>\n            <div class=\"field width-full input-search\">\n                <i class=\"mdi mdi-magnify\"></i>\n                <input type=\"search\" v-model=\"searchInput\" :placeholder=\"'createSearch' | i18n\" class=\"inp big\">\n            </div>\n            <dgt-list :list=\"sourcesList\" class=\"custom\" v-if=\"showList\">\n                <template slot=\"main-slot\" slot-scope=\"slotProps\">\n                    <table class=\"list\">\n                        <tr class=\"source-item\" v-for=\"(source, index) in slotProps.list\" :key=\"index\">\n                            <td class=\"name-source\">\n                                <div class=\"checkbox\">\n                                    <input\n                                        type=\"checkbox\"\n                                        class=\"inp\"\n                                        :id=\"`${uniqueId}-${source.name}-${source.id}`\"\n                                        :checked=\"source.checked\"\n                                        v-model=\"source.checked\"\n                                        :value=\"source.id\">\n                                    <label :for=\"`${uniqueId}-${source.name}-${source.id}`\">{{ source.name }}</label>\n                                </div>\n                            </td>\n                        </tr>\n                    </table>\n                </template>\n            </dgt-list>\n            <div class=\"text-center\">\n                <button @click=\"save\" class=\"btn btn-primary\">{{'save' | i18n}}</button>\n                <button @click=\"cancel\" class=\"btn\">{{'cancel' | i18n}}</button>\n            </div>\n        </template>\n    </dgt-context-menu>\n</template>\n\n<script>\n\n    import dgtContextMenu from '../components/dgt-context-menu.vue';\n    import dgtList from '../components/dgt-list.vue';\n    import i18n from './utils/i18n.js';\n    import bcService from './services/bc-services.js';\n\n    const BC = {name: 'Base de Conhecimento', id: -1, type: 'BANCO_DE_DADOS', checked: true};\n\n    export default {\n        name: 'bc-filter-source-modal',\n        mixins: [i18n.mixin],\n        components: {\n            dgtContextMenu,\n            dgtList\n        },\n        props: {\n            searchProp: String,\n            uniqueId: Number,\n            uiProps: String,\n            sourceTypes: Array,\n            sourcesSelectedProp: Array\n        },\n        data() {\n            return {\n                searchInput: this.searchProp || '',\n                sources: [],\n                ui: this.uiProps,\n                showList: true\n            };\n        },\n        created() {\n            this.loadSources();\n        },\n        computed: {\n            sourcesList() {\n                if (!this.searchInput) {\n                    return this.sources;\n                }\n                return this.sources.filter((source) => {\n                    let searchText = this.searchInput.toLowerCase();\n                    return source.name && source.name.toLowerCase().indexOf(searchText) >= 0;\n                });\n            },\n            hasSourceSelected() {\n                for (const source of this.getAppliedSources()) {\n                    if (source.type !== BC.type) {\n                        return true;\n                    }\n                }\n                return false;\n            },\n            showSourceOption() {\n                for (const source of this.sources) {\n                    if (source.type !== BC.type) {\n                        return true;\n                    }\n                }\n                return false;\n            }\n        },\n        methods: {\n            async loadSources() {\n                let sourcesTemp = await bcService.getSourcesForUI(this.ui);\n                this.sources = [JSON.parse(JSON.stringify(BC))];\n                for (const source of sourcesTemp) {\n                    if (this.sourceTypes.indexOf(source.type) !== -1) {\n                        this.sources.push(source);\n                    }\n                }\n            },\n            save() {\n                this.$refs.menu.onClickHeader();\n                this.searchInput = '';\n                this.$emit('apply', JSON.parse(JSON.stringify(this.sources.filter((source) => source.checked))));\n            },\n            getAppliedSources() {\n                const srcs = (this.sourcesSelectedProp || []);\n                if (!this.sourcesSelectedProp) {\n                    srcs.push(BC);\n                }\n                return srcs;\n            },\n            cancel() {\n                outter: for (const source of this.sources || []) {\n                    for (const sourceProp of this.getAppliedSources()) {\n                        if (sourceProp.id === source.id) {\n                            source.checked = sourceProp.checked;\n                            continue outter;\n                        }\n                    }\n                    source.checked = false;\n                }\n                this.searchInput = '';\n                this.showList = false;\n                this.$nextTick(() => {\n                    this.showList = true;\n                });\n                this.$refs.menu.onClickHeader();\n            }\n        }\n    };\n</script>\n",".input-search {\n  position: relative; }\n  .input-search .mdi-magnify {\n    position: absolute;\n    left: 0.29em;\n    font-size: 2em; }\n  .input-search .inp {\n    padding-left: 2.8em !important; }\n\n.bc-filter-source-menu .popover {\n  padding: 10px; }\n  .bc-filter-source-menu .popover .dgt-list-component {\n    padding: 0 0 15px 0;\n    width: 250px; }\n    .bc-filter-source-menu .popover .dgt-list-component .list {\n      max-height: 120px !important;\n      overflow-y: auto; }\n\n.bc-filter-source-menu .mdi.blue {\n  color: #0d47a1; }\n\n/*# sourceMappingURL=bc-filter-source-menu.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$j = undefined;
      /* module identifier */
      const __vue_module_identifier__$j = undefined;
      /* functional template */
      const __vue_is_functional_template__$j = false;
      /* style inject SSR */
      

      
      var BcFilterSourceMenu = normalizeComponent_1(
        { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
        __vue_inject_styles__$j,
        __vue_script__$j,
        __vue_scope_id__$j,
        __vue_is_functional_template__$j,
        __vue_module_identifier__$j,
        browser,
        undefined
      );

    var rename = (oldProp, newProp, { [oldProp]: old, ...others }) => {
        return {
            [newProp]: old,
            ...others
        };
    };

    //

    var script$k = {
        name: 'bc-filter-ui',
        mixins: [i18n.mixin],
        components: {
            BcFilterSourceMenu,
            BcFilterAttrib,
            BcFilterGroup,
            BcFilterOperators,
            BcFilterFields,
            bcService
        },
        props: {
            ui: Object,
            logicNameUis: Array,
            sourceTypes: Array,
            idx: Number,
            operator: String
        },
        data() {
            return {
                attribs: [],
                operators: [],
                atribType: [],
                fields: [],
                dataType: [],
                uis: [],
                newFilter: {},
                lastMetaUiSelected: null,
                type: 'AND'
            };
        },
        async created() {
            await this.loadMetadada();
        },
        computed: {
            showSourceOption() {
                if (!this.sourceTypes || this.ui.id === null) {
                    return false;
                }
                for (const sourceType of this.sourceTypes) {
                    if (sourceType !== 'BANCO_DE_DADOS') {
                        return true;
                    }
                }
                return false;
            }
        },
        methods: {
            async loadMetadada() {
                this.uis = await bcService.getLabelUIs(this.logicNameUis);
            },
            applySelectedFilters(sourcesSelected) {
                this.ui.sourcesSelected = sourcesSelected;
                this.$forceUpdate();
            },
            buildBaseObject(uiId) {
                this.newFilter[uiId] = {};
                this.newFilter[uiId][this.type] = [];
            },
            renameKey(obj, oldName, newName) {
                if (oldName === newName) {
                    return obj;
                }
                if (obj.hasOwnProperty(oldName)) {
                    obj[newName] = obj[oldName];
                    delete obj[oldName];
                }
                return obj;
            },
            removeChangedUi(uiId) {
                if (!this.lastMetaUiSelected) {
                    return;
                }
                delete this.newFilter[this.lastMetaUiSelected];
                this.lastMetaUiSelected = uiId;
            },
            async fireUISelected(e) {
                const metaUI = this.uis[e.target.value];
                this.removeChangedUi();
                this.lastMetaUiSelected = metaUI.name;
                this.buildBaseObject(metaUI.name);
                this.attribs = await bcService.getAttribsFromUI(metaUI.name);
                this.attribs.sort((e1, e2) => {
                    const l1 = e1.label.normalize('NFD');
                    const l2 = e2.label.normalize('NFD');
                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);
                });
                this.operators = [];
                this.atribType = [];
                this.fields = [];
                this.$emit('meta-ui-selected', metaUI);
                console.log(this.newFilter);
                /*
                this.$emit('meta-ui-selected', {
                    newFilter: this.newFilter,
                    ids: this.idx
                });

                 */
            },
            fireUIRemoved() {
                this.$emit('meta-ui-removed', this.attrib);
            },
            checkType(type) {
                switch (type) {
                    case '_texto_delimitado':
                        return type;
                    case '_inteiro_32':
                        return type;
                    case '_inteiro_64':
                        return type;
                    case '_decimal_32':
                        return type;
                    case '_decimal_64':
                        return type;
                    case '_tipo_selecao':
                        return type;
                    // case 'metaSelecaoValorada':
                    //     return type;
                    case '_data':
                        return type;
                    // case '_ano':
                    //     return type;
                    case '_hora':
                        return type;
                    case '_data_hora':
                        return type;
                    default:
                        return 'outros';
                }
            },
            onMetaAttribSelected(metaAttrib, attrib, idx) {
                attrib.id = metaAttrib.name;
                const emptyAttrib = this.ui.attribs.find((e)=>e.id === null);
                this.atribType[idx] = this.checkType(metaAttrib.type);
                if (this.operators[idx]) {
                    this.operators.splice(idx, 1);
                    this.fields.splice(idx, 1);
                }

                if (!emptyAttrib) {
                    // adiciona novo grupo de attribs
                    this.ui.attribs.push({id: null});
                }

                this.$forceUpdate();

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                    this.$refs.operator[idx].attribChanged();
                });
            },
            onAttribRemoved(idx) {
                this.fields.splice(idx, 1);
                this.atribType.splice(idx, 1);
                this.operators.splice(idx, 1);
                this.operators.splice(idx, 1);
                this.ui.attribs.splice(idx, 1);

                this.$nextTick(()=>{
                    this.$refs.attribsGroup.updateGroups();
                });
                this.$forceUpdate();

            },
            onMetaOperatorSelected(obj, idx) {
                this.operators[idx] = obj;
                this.$forceUpdate();
            },
            onMetaFieldSelected(obj, idx) {
                this.fields[idx] = obj;
                this.$forceUpdate();
            },
            onDataOptionSelected(obj, idx) {
                this.dataType[idx] = obj;
                this.operators.splice(idx, 1);
                this.fields.splice(idx, 1);
                this.$forceUpdate();
            },
            onMetaFieldFilled($event, idx) {
                console.log($event, idx);
            },
            onTypeChanged(type) {
                this.newFilter[this.lastMetaUiSelected] = rename(this.type,
                    type, this.newFilter[this.lastMetaUiSelected]);
                this.type = type;
                console.log(this.newFilter);
                this.$emit('operator-changed', this.newFilter);
            }
        }
    };

    /* script */
    const __vue_script__$k = script$k;

    /* template */
    var __vue_render__$k = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c(
          "div",
          { staticClass: "bc-filter-ui" },
          [
            _c(
              "div",
              { staticClass: "bc-filter-ui-main" },
              [
                _vm.uis
                  ? _c(
                      "select",
                      { staticClass: "inp", on: { change: _vm.fireUISelected } },
                      [
                        _c(
                          "option",
                          {
                            attrs: { value: "", disabled: "" },
                            domProps: { selected: _vm.ui.id === null }
                          },
                          [_vm._v(_vm._s(_vm._f("i18n")("select")))]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.uis, function(opt, idx) {
                          return _c(
                            "option",
                            {
                              key: idx,
                              domProps: {
                                value: idx,
                                selected: _vm.ui.id === opt.id
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(opt.label) +
                                  "\n                "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.showSourceOption
                  ? _c("bc-filter-source-menu", {
                      attrs: {
                        uiProps: _vm.ui.id,
                        uniqueId: Math.random(),
                        "source-types": _vm.sourceTypes,
                        sourcesSelectedProp: _vm.ui.sourcesSelected
                      },
                      on: { apply: _vm.applySelectedFilters }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.ui.id !== null
                  ? _c("button", { staticClass: "btn btn-filter-icon" }, [
                      _c("i", {
                        staticClass: "mdi mdi-close",
                        on: { click: _vm.fireUIRemoved }
                      })
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm.ui.attribs && _vm.ui.attribs.length > 0
              ? _c(
                  "bc-filter-group",
                  {
                    ref: "attribsGroup",
                    staticClass: "bc-filter-group",
                    on: { "type-changed": _vm.onTypeChanged }
                  },
                  _vm._l(_vm.ui.attribs, function(attrib, idx) {
                    return _c(
                      "bc-filter-attrib",
                      {
                        key: idx,
                        ref: "attrib",
                        refInFor: true,
                        attrs: { "meta-attribs": _vm.attribs, attrib: attrib },
                        on: {
                          "meta-attrib-selected": function($event) {
                            return _vm.onMetaAttribSelected($event, attrib, idx)
                          },
                          "meta-attrib-removed": function($event) {
                            return _vm.onAttribRemoved(idx)
                          }
                        }
                      },
                      [
                        _vm.atribType[idx]
                          ? _c(
                              "bc-filter-operators",
                              {
                                ref: "operator",
                                refInFor: true,
                                attrs: {
                                  slot: "operator",
                                  "tipo-attrib": _vm.atribType[idx],
                                  "ui-name": _vm.ui.id,
                                  "attrib-name": _vm.ui.attribs[idx].id,
                                  operador: _vm.operators[idx]
                                },
                                on: {
                                  "meta-operator-selected": function($event) {
                                    return _vm.onMetaOperatorSelected($event, idx)
                                  },
                                  "meta-operator-removed": function($event) {
                                    return _vm.onAttribRemoved(idx)
                                  },
                                  "data-option-selected": function($event) {
                                    return _vm.onDataOptionSelected($event, idx)
                                  }
                                },
                                slot: "operator"
                              },
                              [
                                _vm.operators[idx] && _vm.operators[idx].name
                                  ? _c("bc-filter-fields", {
                                      ref: "field",
                                      refInFor: true,
                                      attrs: {
                                        slot: "field",
                                        hasField: _vm.fields[idx],
                                        operador: _vm.operators[idx],
                                        "tipo-attrib": _vm.atribType[idx],
                                        "date-option": _vm.dataType[idx]
                                      },
                                      on: {
                                        "meta-field-selected": function($event) {
                                          return _vm.onMetaFieldSelected(
                                            $event,
                                            idx
                                          )
                                        },
                                        "meta-field-removed": function($event) {
                                          return _vm.onAttribRemoved(idx)
                                        },
                                        change: function($event) {
                                          return _vm.onMetaFieldFilled($event, idx)
                                        }
                                      },
                                      slot: "field"
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  }),
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    };
    var __vue_staticRenderFns__$k = [];
    __vue_render__$k._withStripped = true;

      /* style */
      const __vue_inject_styles__$k = function (inject) {
        if (!inject) return
        inject("data-v-2599c3cd_0", { source: ".btn-filter-icon[data-v-2599c3cd] {\n  padding: .1em;\n}\n.btn-filter[data-v-2599c3cd] {\n  padding: .5em;\n}\n.bc-filter-ui[data-v-2599c3cd] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.bc-filter-ui .bc-filter-group[data-v-2599c3cd] {\n    margin-top: 0.645em;\n}\n.bc-filter-ui .bc-filter-ui-main[data-v-2599c3cd] {\n    white-space: nowrap;\n}\n\n/*# sourceMappingURL=bc-filter-ui.vue.map */", map: {"version":3,"sources":["bc-filter-ui.vue","/home/ju/Documentos/components-vue/src/bc-components/bc-filter-ui.vue"],"names":[],"mappings":"AAAA;ECCA,aAAA;AAAA;AAGA;EACA,aAAA;AAAA;AADA;EACA,oBAAA;EACA,sBAAA;AAAA;AAFA;IAKA,mBAAA;AAAA;AALA;IASA,mBAAA;AAAA;;ADCA,2CAA2C","file":"bc-filter-ui.vue","sourcesContent":[".btn-filter-icon {\n  padding: .1em; }\n\n.btn-filter {\n  padding: .5em; }\n\n.bc-filter-ui {\n  display: inline-flex;\n  flex-direction: column; }\n  .bc-filter-ui .bc-filter-group {\n    margin-top: 0.645em; }\n  .bc-filter-ui .bc-filter-ui-main {\n    white-space: nowrap; }\n\n/*# sourceMappingURL=bc-filter-ui.vue.map */","<style scoped lang=\"scss\">\n    @import \"../styles/variables\";\n    @import \"styles/buttons\";\n\n    .bc-filter-ui {\n        display: inline-flex;\n        flex-direction: column;\n\n        .bc-filter-group {\n            margin-top: $normal-space;\n        }\n\n        .bc-filter-ui-main {\n            white-space: nowrap;\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <div class=\"bc-filter-ui\">\n            <div class=\"bc-filter-ui-main\">\n                <select class=\"inp\" @change=\"fireUISelected\" v-if=\"uis\">\n                    <option value=\"\" disabled :selected=\"ui.id === null\">{{'select' | i18n}}</option>\n                    <option v-for=\"(opt, idx) in uis\" :key=\"idx\"\n                            :value=\"idx\"\n                            :selected=\"ui.id === opt.id\"\n                    >\n                        {{opt.label}}\n                    </option>\n                </select>\n                <bc-filter-source-menu v-if=\"showSourceOption\" :uiProps=\"ui.id\" :uniqueId=\"Math.random()\" :source-types=\"sourceTypes\"\n                                       @apply=\"applySelectedFilters\" :sourcesSelectedProp=\"ui.sourcesSelected\"></bc-filter-source-menu>\n                <button class=\"btn btn-filter-icon\" v-if=\"ui.id !== null\">\n                    <i class=\"mdi mdi-close\" @click=\"fireUIRemoved\"></i>\n                </button>\n            </div>\n            <bc-filter-group\n                 v-if=\"ui.attribs && ui.attribs.length > 0\"\n                 class=\"bc-filter-group\"\n                 ref=\"attribsGroup\"\n                 @type-changed=\"onTypeChanged\"\n            >\n                <bc-filter-attrib\n                    v-for=\"(attrib, idx) in ui.attribs\" :key=\"idx\"\n                    @meta-attrib-selected=\"onMetaAttribSelected($event, attrib, idx)\"\n                    @meta-attrib-removed=\"onAttribRemoved(idx)\"\n                    :meta-attribs=\"attribs\" :attrib=\"attrib\" ref=\"attrib\"\n                >\n                    <bc-filter-operators slot=\"operator\" v-if=\"atribType[idx]\"\n                        :tipo-attrib=\"atribType[idx]\" :ui-name=\"ui.id\"\n                        :attrib-name=\"ui.attribs[idx].id\" :operador=\"operators[idx]\"\n                        @meta-operator-selected=\"onMetaOperatorSelected($event, idx)\"\n                        @meta-operator-removed=\"onAttribRemoved(idx)\"\n                        @data-option-selected=\"onDataOptionSelected($event, idx)\"\n                        ref=\"operator\"\n                    >\n                        <bc-filter-fields slot=\"field\" v-if=\"operators[idx] && operators[idx].name\"\n                            @meta-field-selected=\"onMetaFieldSelected($event, idx)\"\n                            @meta-field-removed=\"onAttribRemoved(idx)\"\n                            @change=\"onMetaFieldFilled($event, idx)\"\n                            :hasField=\"fields[idx]\" :operador=\"operators[idx]\"\n                            :tipo-attrib=\"atribType[idx]\" :date-option=\"dataType[idx]\" ref=\"field\"\n                        >\n                        </bc-filter-fields>\n                    </bc-filter-operators>\n                </bc-filter-attrib>\n            </bc-filter-group>\n        </div>\n    </div>\n</template>\n\n<script>\n\n    import BcFilterGroup from './bc-filter-group.vue';\n    import BcFilterAttrib from './bc-filter-attrib.vue';\n    import BcFilterOperators from './bc-filter-operators.vue';\n    import BcFilterFields from './bc-filter-fields.vue';\n    import BcFilterSourceMenu from './bc-filter-source-menu.vue';\n    import bcService from './services/bc-services.js';\n    import i18n from './utils/i18n.js';\n    import rename from './utils/rename-key.js';\n\n    export default {\n        name: 'bc-filter-ui',\n        mixins: [i18n.mixin],\n        components: {\n            BcFilterSourceMenu,\n            BcFilterAttrib,\n            BcFilterGroup,\n            BcFilterOperators,\n            BcFilterFields,\n            bcService\n        },\n        props: {\n            ui: Object,\n            logicNameUis: Array,\n            sourceTypes: Array,\n            idx: Number,\n            operator: String\n        },\n        data() {\n            return {\n                attribs: [],\n                operators: [],\n                atribType: [],\n                fields: [],\n                dataType: [],\n                uis: [],\n                newFilter: {},\n                lastMetaUiSelected: null,\n                type: 'AND'\n            };\n        },\n        async created() {\n            await this.loadMetadada();\n        },\n        computed: {\n            showSourceOption() {\n                if (!this.sourceTypes || this.ui.id === null) {\n                    return false;\n                }\n                for (const sourceType of this.sourceTypes) {\n                    if (sourceType !== 'BANCO_DE_DADOS') {\n                        return true;\n                    }\n                }\n                return false;\n            }\n        },\n        methods: {\n            async loadMetadada() {\n                this.uis = await bcService.getLabelUIs(this.logicNameUis);\n            },\n            applySelectedFilters(sourcesSelected) {\n                this.ui.sourcesSelected = sourcesSelected;\n                this.$forceUpdate();\n            },\n            buildBaseObject(uiId) {\n                this.newFilter[uiId] = {};\n                this.newFilter[uiId][this.type] = [];\n            },\n            renameKey(obj, oldName, newName) {\n                if (oldName === newName) {\n                    return obj;\n                }\n                if (obj.hasOwnProperty(oldName)) {\n                    obj[newName] = obj[oldName];\n                    delete obj[oldName];\n                }\n                return obj;\n            },\n            removeChangedUi(uiId) {\n                if (!this.lastMetaUiSelected) {\n                    return;\n                }\n                delete this.newFilter[this.lastMetaUiSelected];\n                this.lastMetaUiSelected = uiId;\n            },\n            async fireUISelected(e) {\n                const metaUI = this.uis[e.target.value];\n                this.removeChangedUi();\n                this.lastMetaUiSelected = metaUI.name;\n                this.buildBaseObject(metaUI.name);\n                this.attribs = await bcService.getAttribsFromUI(metaUI.name);\n                this.attribs.sort((e1, e2) => {\n                    const l1 = e1.label.normalize('NFD');\n                    const l2 = e2.label.normalize('NFD');\n                    return l1 < l2 ? -1 : (l1 > l2 ? 1 : 0);\n                });\n                this.operators = [];\n                this.atribType = [];\n                this.fields = [];\n                this.$emit('meta-ui-selected', metaUI);\n                console.log(this.newFilter);\n                /*\n                this.$emit('meta-ui-selected', {\n                    newFilter: this.newFilter,\n                    ids: this.idx\n                });\n\n                 */\n            },\n            fireUIRemoved() {\n                this.$emit('meta-ui-removed', this.attrib);\n            },\n            checkType(type) {\n                switch (type) {\n                    case '_texto_delimitado':\n                        return type;\n                    case '_inteiro_32':\n                        return type;\n                    case '_inteiro_64':\n                        return type;\n                    case '_decimal_32':\n                        return type;\n                    case '_decimal_64':\n                        return type;\n                    case '_tipo_selecao':\n                        return type;\n                    // case 'metaSelecaoValorada':\n                    //     return type;\n                    case '_data':\n                        return type;\n                    // case '_ano':\n                    //     return type;\n                    case '_hora':\n                        return type;\n                    case '_data_hora':\n                        return type;\n                    default:\n                        return 'outros';\n                }\n            },\n            onMetaAttribSelected(metaAttrib, attrib, idx) {\n                attrib.id = metaAttrib.name;\n                const emptyAttrib = this.ui.attribs.find((e)=>e.id === null);\n                this.atribType[idx] = this.checkType(metaAttrib.type);\n                if (this.operators[idx]) {\n                    this.operators.splice(idx, 1);\n                    this.fields.splice(idx, 1);\n                }\n\n                if (!emptyAttrib) {\n                    // adiciona novo grupo de attribs\n                    this.ui.attribs.push({id: null});\n                }\n\n                this.$forceUpdate();\n\n                this.$nextTick(()=>{\n                    this.$refs.attribsGroup.updateGroups();\n                    this.$refs.operator[idx].attribChanged();\n                });\n            },\n            onAttribRemoved(idx) {\n                this.fields.splice(idx, 1);\n                this.atribType.splice(idx, 1);\n                this.operators.splice(idx, 1);\n                this.operators.splice(idx, 1);\n                this.ui.attribs.splice(idx, 1);\n\n                this.$nextTick(()=>{\n                    this.$refs.attribsGroup.updateGroups();\n                });\n                this.$forceUpdate();\n\n            },\n            onMetaOperatorSelected(obj, idx) {\n                this.operators[idx] = obj;\n                this.$forceUpdate();\n            },\n            onMetaFieldSelected(obj, idx) {\n                this.fields[idx] = obj;\n                this.$forceUpdate();\n            },\n            onDataOptionSelected(obj, idx) {\n                this.dataType[idx] = obj;\n                this.operators.splice(idx, 1);\n                this.fields.splice(idx, 1);\n                this.$forceUpdate();\n            },\n            onMetaFieldFilled($event, idx) {\n                console.log($event, idx);\n            },\n            onTypeChanged(type) {\n                this.newFilter[this.lastMetaUiSelected] = rename(this.type,\n                    type, this.newFilter[this.lastMetaUiSelected]);\n                this.type = type;\n                console.log(this.newFilter);\n                this.$emit('operator-changed', this.newFilter);\n            }\n        }\n    };\n</script>\n"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$k = "data-v-2599c3cd";
      /* module identifier */
      const __vue_module_identifier__$k = undefined;
      /* functional template */
      const __vue_is_functional_template__$k = false;
      /* style inject SSR */
      

      
      var BcFilterUi = normalizeComponent_1(
        { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
        __vue_inject_styles__$k,
        __vue_script__$k,
        __vue_scope_id__$k,
        __vue_is_functional_template__$k,
        __vue_module_identifier__$k,
        browser,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script$l = {
        name: 'bcModal'
    };

    /* script */
    const __vue_script__$l = script$l;

    /* template */
    var __vue_render__$l = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("transition", { attrs: { name: "modal" } }, [
        _c("div", { staticClass: "modal-mask" }, [
          _c("div", { staticClass: "modal-wrapper" }, [
            _c("div", { staticClass: "modal-container" }, [
              _c(
                "div",
                { staticClass: "modal-header" },
                [_vm._t("header", [_vm._v("Exemplo de título")])],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [_vm._t("body", [_vm._v("Exemplo de conteúdo")])],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [_vm._t("footer")], 2)
            ])
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__$l = [];
    __vue_render__$l._withStripped = true;

      /* style */
      const __vue_inject_styles__$l = function (inject) {
        if (!inject) return
        inject("data-v-282d89b9_0", { source: ".modal-mask[data-v-282d89b9] {\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  transition: opacity 0.3s ease;\n}\n.modal-wrapper[data-v-282d89b9] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container[data-v-282d89b9] {\n  width: -moz-fit-content;\n  max-width: auto;\n  margin: 0px auto;\n  padding: 1em;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n}\n.modal-header[data-v-282d89b9] {\n  display: flex;\n}\n.modal-header h3[data-v-282d89b9] {\n  margin-top: 0;\n  color: #42b983;\n}\n.modal-body[data-v-282d89b9] {\n  margin: 1em 0;\n}\n.modal-default-button[data-v-282d89b9] {\n  float: right;\n}\n.modal-enter[data-v-282d89b9] {\n  opacity: 0;\n}\n.modal-leave-active[data-v-282d89b9] {\n  opacity: 0;\n}\n.modal-enter .modal-container[data-v-282d89b9],\n.modal-leave-active .modal-container[data-v-282d89b9] {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n/*# sourceMappingURL=bc-modal.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/bc-components/utils/bc-modal.vue","bc-modal.vue"],"names":[],"mappings":"AAGA;EACA,eAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,cAAA;EACA,6BAAA;AAAA;AAEA;EACA,mBAAA;EACA,sBAAA;AAAA;AAEA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,YALA;EAMA,sBAAA;EACA,kBAAA;EACA,yCAAA;EACA,yBAAA;AAAA;AAEA;EACA,aAAA;AAAA;AAEA;EACA,aAAA;EACA,cAAA;AAAA;AAEA;EACA,aAAA;AAAA;AAEA;EACA,YAAA;AAAA;AAEA;EACA,UAAA;AAAA;AAEA;EACA,UAAA;AAAA;AAEA;;EAEA,6BAAA;EACA,qBAAA;AAAA;;ACDA,uCAAuC","file":"bc-modal.vue","sourcesContent":["<style lang=\"scss\" scoped>\n\n    @import '../../styles/variables.scss';\n    .modal-mask {\n        position: fixed;\n        z-index: 9;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        display: table;\n        transition: opacity 0.3s ease;\n    }\n    .modal-wrapper {\n        display: table-cell;\n        vertical-align: middle;\n    }\n    .modal-container {\n        width: -moz-fit-content;\n        max-width: auto;\n        margin: 0px auto;\n        padding: $big-space;\n        background-color: #fff;\n        border-radius: 4px;\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n        transition: all 0.3s ease;\n    }\n    .modal-header {\n        display: flex;\n    }\n    .modal-header h3 {\n        margin-top: 0;\n        color: #42b983;\n    }\n    .modal-body {\n        margin: $big-space 0;\n    }\n    .modal-default-button {\n        float: right;\n    }\n    .modal-enter {\n        opacity: 0;\n    }\n    .modal-leave-active {\n        opacity: 0;\n    }\n    .modal-enter .modal-container,\n    .modal-leave-active .modal-container {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1);\n    }\n\n</style>\n\n<template>\n\t  <transition name=\"modal\">\n\t\t  <div class=\"modal-mask\">\n\t\t\t  <div class=\"modal-wrapper\">\n\t\t\t\t  <div class=\"modal-container\">\n\t\t\t\t\t  <div class=\"modal-header\">\n\t\t\t\t\t\t  <slot name=\"header\">Exemplo de título</slot>\n\t\t\t\t\t  </div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<slot name=\"body\">Exemplo de conteúdo</slot>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<slot name=\"footer\"></slot>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</transition>\n</template>\n\n<script>\n    export default {\n        name: 'bcModal'\n    };\n</script>\n",".modal-mask {\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  transition: opacity 0.3s ease; }\n\n.modal-wrapper {\n  display: table-cell;\n  vertical-align: middle; }\n\n.modal-container {\n  width: -moz-fit-content;\n  max-width: auto;\n  margin: 0px auto;\n  padding: 1em;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease; }\n\n.modal-header {\n  display: flex; }\n\n.modal-header h3 {\n  margin-top: 0;\n  color: #42b983; }\n\n.modal-body {\n  margin: 1em 0; }\n\n.modal-default-button {\n  float: right; }\n\n.modal-enter {\n  opacity: 0; }\n\n.modal-leave-active {\n  opacity: 0; }\n\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1); }\n\n/*# sourceMappingURL=bc-modal.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$l = "data-v-282d89b9";
      /* module identifier */
      const __vue_module_identifier__$l = undefined;
      /* functional template */
      const __vue_is_functional_template__$l = false;
      /* style inject SSR */
      

      
      var bcModal = normalizeComponent_1(
        { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
        __vue_inject_styles__$l,
        __vue_script__$l,
        __vue_scope_id__$l,
        __vue_is_functional_template__$l,
        __vue_module_identifier__$l,
        browser,
        undefined
      );

    //

    var script$m = {
        name: 'BcSaveSearchModal',
        mixins: [i18n.mixin],
        components: {
            bcModal
        },
        props: {
            type: {
                type: String,
                default: 'saveAs'
            },
            defaultName: String
        },
        data() {
            return {
                nome: null
            };
        },
        created() {
            if (this.type === 'rename' && this.defaultName) this.nome = this.defaultName;
        },
        methods: {
            closeSaveSearchModal() {
                this.$emit('cancel');
            },
            checkSearchName() {
                this.$emit('confirm', this.nome, this.type);
            }
        }
    };

    /* script */
    const __vue_script__$m = script$m;

    /* template */
    var __vue_render__$m = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        [
          _c(
            "bc-modal",
            { staticClass: "bc-save-search-modal" },
            [
              _c("template", { slot: "header" }, [
                _c("h3", { staticClass: "modal-title" }, [
                  _vm._v(" " + _vm._s(_vm._f("i18n")("search." + _vm.type)) + " ")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn-icon btn-close",
                    on: { click: _vm.closeSaveSearchModal }
                  },
                  [_c("i", { staticClass: "mdi mdi-close" })]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "field width-full",
                  attrs: { slot: "body" },
                  slot: "body"
                },
                [
                  _c("label", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm._f("i18n")("search.name")) +
                        "\n                "
                    ),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.nome,
                          expression: "nome"
                        }
                      ],
                      staticClass: "inp big",
                      attrs: {
                        name: "operation",
                        autocomplete: "off",
                        type: "text"
                      },
                      domProps: { value: _vm.nome },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.nome = $event.target.value;
                        }
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "footer",
                {
                  staticClass: "text-right",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "button",
                    { staticClass: "btn", on: { click: _vm.closeSaveSearchModal } },
                    [_vm._v(" " + _vm._s(_vm._f("i18n")("cancel")) + " ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { disabled: !_vm.nome },
                      on: { click: _vm.checkSearchName }
                    },
                    [_vm._v(" " + _vm._s(_vm._f("i18n")("confirm")) + " ")]
                  )
                ]
              )
            ],
            2
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$m = [];
    __vue_render__$m._withStripped = true;

      /* style */
      const __vue_inject_styles__$m = function (inject) {
        if (!inject) return
        inject("data-v-d087ea18_0", { source: ".bc-save-search-modal .modal-container {\n  width: 350px;\n  max-width: 650px;\n}\n.bc-save-search-modal .modal-title {\n  margin-right: auto;\n}\n\n/*# sourceMappingURL=bc-save-search-modal.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/bc-components/modal/bc-save-search-modal.vue","bc-save-search-modal.vue"],"names":[],"mappings":"AAGA;EAEA,YAAA;EACA,gBAAA;AAAA;AAHA;EAMA,kBAAA;AAAA;;ACFA,mDAAmD","file":"bc-save-search-modal.vue","sourcesContent":["<style lang=\"scss\">\n    @import \"../styles/variables\";\n\n    .bc-save-search-modal {\n        .modal-container {\n            width: 350px;\n            max-width: 650px;\n        }\n        .modal-title {\n            margin-right: auto;\n        }\n    }\n</style>\n\n<template>\n    <div>\n        <bc-modal class=\"bc-save-search-modal\">\n            <template slot=\"header\">\n                <h3 class=\"modal-title\"> {{ `search.${type}` | i18n }} </h3>\n                <button class=\"btn-icon btn-close\" @click=\"closeSaveSearchModal\">\n                    <i class=\"mdi mdi-close\"></i>\n                </button>\n            </template>\n            <div slot=\"body\" class=\"field width-full\">\n                <label>\n                    {{ `search.name` | i18n }}\n                    <input name=\"operation\" autocomplete=\"off\" type=\"text\" class=\"inp big\" v-model=\"nome\">\n                </label>\n            </div>\n            <footer slot=\"footer\" class=\"text-right\">\n                <button @click=\"closeSaveSearchModal\" class=\"btn\"> {{ 'cancel' | i18n }} </button>\n                <button @click=\"checkSearchName\" :disabled=\"!nome\" class=\"btn btn-primary\"> {{ `confirm` | i18n }} </button>\n            </footer>\n        </bc-modal>\n    </div>\n</template>\n<script>\n    import bcModal from '../utils/bc-modal.vue';\n    import i18n from '../utils/i18n.js';\n\n    export default {\n        name: 'BcSaveSearchModal',\n        mixins: [i18n.mixin],\n        components: {\n            bcModal\n        },\n        props: {\n            type: {\n                type: String,\n                default: 'saveAs'\n            },\n            defaultName: String\n        },\n        data() {\n            return {\n                nome: null\n            };\n        },\n        created() {\n            if (this.type === 'rename' && this.defaultName) this.nome = this.defaultName;\n        },\n        methods: {\n            closeSaveSearchModal() {\n                this.$emit('cancel');\n            },\n            checkSearchName() {\n                this.$emit('confirm', this.nome, this.type);\n            }\n        }\n    };\n</script>\n",".bc-save-search-modal .modal-container {\n  width: 350px;\n  max-width: 650px; }\n\n.bc-save-search-modal .modal-title {\n  margin-right: auto; }\n\n/*# sourceMappingURL=bc-save-search-modal.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$m = undefined;
      /* module identifier */
      const __vue_module_identifier__$m = undefined;
      /* functional template */
      const __vue_is_functional_template__$m = false;
      /* style inject SSR */
      

      
      var bcSaveSearchModal = normalizeComponent_1(
        { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
        __vue_inject_styles__$m,
        __vue_script__$m,
        __vue_scope_id__$m,
        __vue_is_functional_template__$m,
        __vue_module_identifier__$m,
        browser,
        undefined
      );

    //

    var script$n = {
        name: 'bc-filter-profile',
        mixins: [i18n.mixin],
        components: {
            bcService,
            dgtContextMenu,
            bcSaveSearchModal
        },
        props: {
            show: {
                type: Boolean,
                default: true
            },
            json: {},
            profiles: Array
        },
        data() {
            return {
                showModal: false,
                modalType: 'saveAs',
                selectedProfile: {
                    id_cnfg_usua_app_pes: null
                },
                optionSelected: {
                    id: ''
                },
                enableDefaultOption: true,
                options: [
                    { id: 1, label: 'save' },
                    { id: 2, label: 'saveAs' },
                    { id: 3, label: 'default' },
                    { id: 4, label: 'rename' },
                    { id: 5, label: 'exclude' }
                ]
            };
        },
        methods: {
            setDefault() {
                let defaultProfile = this.profiles.filter(profile => {
                    return profile.flg_default.valor === 'Sim';
                });
                if (defaultProfile.length) {
                    [this.selectedProfile] = [...defaultProfile];
                    this.$emit('change', this.selectedProfile);
                }
            },
            fireProfileSelected(e) {
                this.selectedProfile = this.profiles[e.target.value];
                this.$emit('change', this.selectedProfile);
            },
            fireOptionSelected(obj) {
                this.optionSelected = obj;
                switch (obj.label) {
                    case 'save':
                        return this.fireProfileSaved(obj);
                    case 'saveAs':
                        this.modalType = 'saveAs';
                        return this.showModal = true;
                    case 'default':
                        return this.fireProfileDefault(obj);
                    case 'rename':
                        this.modalType = 'rename';
                        return this.showModal = true;
                    case 'exclude':
                        return this.fireProfileRemoved(obj);
                    default:
                        return null;
                }
            },
            handleConfirm(name, type) {
                if (type === 'saveAs') {
                    return this.fireProfileSavedAs(name);
                }
                return this.fireProfileRenamed(name);
            },
            checkDefault(option) {
                if (option.label === 'default') {
                    return this.selectedProfile.flg_default && this.selectedProfile.flg_default.valor === 'Sim';
                }
                return null;
            },
            checkDisabled(option) {
                if (option.label === 'default') {
                    if (this.selectedProfile.flg_default &&
                        this.selectedProfile.flg_default.valor === 'Sim') return true;
                    if (!this.selectedProfile.id_cnfg_usua_app_pes) return true;
                } else if (option.label !== 'saveAs') {
                    return !this.selectedProfile.id_cnfg_usua_app_pes;
                }
                return null;
            },
            closeModal() {
                this.showModal = false;
            },
            fireProfileSaved() {
                try {
                    //necessário passar o json junto para salvar os filtros da pesquisa;
                    bcService.editProfile(this.selectedProfile);
                    this.$emit('success', 'save');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    this.$emit('error', 'save');
                    return console.error('Erro ao salvar perfil');
                }
            },
            async fireProfileSavedAs(name) {
                //necessário passar o json junto para salvar os filtros da pesquisa;
                this.selectedProfile = this.selectedProfile.descricao ?
                    this.selectedProfile : this.json;
                if (this.checkSameProfileName(name)) {
                    try {
                        await bcService.saveSearchProfiles(this.selectedProfile, {descricao: name});
                        this.showModal = false;
                        this.$emit('success', 'saveAs');
                        return this.$emit('reload-profiles');
                    } catch (error) {
                        this.$emit('error', 'saveAs');
                        this.selectedProfile.id_cnfg_usua_app_pes = null;
                        this.$forceUpdate();
                        return console.error('Erro ao salvar perfil como');
                    }
                }
                this.$emit('error', 'saveAs');
                this.selectedProfile.id_cnfg_usua_app_pes = null;
                this.$forceUpdate();
                return alert('Erro ao salvar perfil com o mesmo nome');
            },
            async fireProfileDefault() {
                try {
                    await bcService.setDefaultProfile(this.selectedProfile);
                    this.$emit('success', 'default');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    this.$emit('error', 'default');
                    return console.error('Erro ao setar default');
                }
            },
            async fireProfileRenamed(name) {
                if (this.checkSameProfileName(name)) {
                    try {
                        await bcService.renameSearchProfiles(this.selectedProfile, name);
                        this.showModal = false;
                        this.$emit('success', 'renamed');
                        return this.$emit('reload-profiles');
                    } catch (error) {
                        this.$emit('error', 'renamed');
                        this.selectedProfile.id_cnfg_usua_app_pes = null;
                        return alert('Não foi possível renomear a pesquisa.');
                    }
                }
                this.$emit('error', 'renamed');
                this.selectedProfile.id_cnfg_usua_app_pes = null;
                return alert('Erro ao salvar perfil com o mesmo nome');
            },
            async fireProfileRemoved() {
                try {
                    await bcService.deleteSearchProfiles(this.selectedProfile);
                    this.$emit('success', 'removed');
                    return this.$emit('reload-profiles');
                } catch (error) {
                    this.$emit('error', 'removed');
                    return alert('Não foi possível excluir a pesquisa.');
                }
            },
            checkSameProfileName(name) {
                if (this.profiles.length > 1) {
                    let defaultProfile = this.profiles.filter(profile => {
                        return profile.descricao === name;
                    });
                    if (defaultProfile.length) {
                        return false;
                    }
                }
                return true;
            }
        },
        watch: {
            profiles() {
                if (this.profiles.length) {
                    this.setDefault();
                }
            }
        }
    };

    /* script */
    const __vue_script__$n = script$n;

    /* template */
    var __vue_render__$n = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _vm.show
        ? _c(
            "div",
            { staticClass: "bc-filter-profile field" },
            [
              _c(
                "select",
                {
                  staticClass: "inp",
                  attrs: { name: "profiles" },
                  on: { change: _vm.fireProfileSelected }
                },
                [
                  _c(
                    "option",
                    {
                      attrs: { value: "", disabled: "" },
                      domProps: {
                        selected: _vm.selectedProfile.id_cnfg_usua_app_pes === null
                      }
                    },
                    [_vm._v(_vm._s(_vm._f("i18n")("select")))]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.profiles, function(profile, idx) {
                    return _c(
                      "option",
                      {
                        key: idx,
                        domProps: {
                          value: idx,
                          selected:
                            _vm.selectedProfile.descricao === profile.descricao
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(profile.descricao) +
                            "\n        "
                        )
                      ]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "dgt-context-menu",
                {
                  attrs: {
                    "close-on-click": true,
                    "change-open": _vm.selectedProfile.id
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn-icon",
                      class: { "disabled-button": _vm.selectedProfile.id },
                      attrs: { slot: "button" },
                      slot: "button"
                    },
                    [_c("i", { staticClass: "mdi mdi-settings" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { slot: "content" }, slot: "content" },
                    _vm._l(_vm.options, function(option, idx) {
                      return _c(
                        "button",
                        {
                          key: idx,
                          staticClass: "btn popover-item",
                          class: { "disabled-button": _vm.checkDisabled(option) },
                          on: {
                            click: function($event) {
                              return _vm.fireOptionSelected(option)
                            }
                          }
                        },
                        [
                          _vm.checkDefault(option)
                            ? _c("i", { staticClass: "mdi mdi-check" })
                            : _vm._e(),
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm._f("i18n")("profileOptions." + option.label)
                              ) +
                              "\n            "
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]
              ),
              _vm._v(" "),
              _vm.showModal
                ? _c("bc-save-search-modal", {
                    attrs: {
                      type: _vm.modalType,
                      "default-name": _vm.selectedProfile.descricao
                    },
                    on: { cancel: _vm.closeModal, confirm: _vm.handleConfirm }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("hr")
            ],
            1
          )
        : _vm._e()
    };
    var __vue_staticRenderFns__$n = [];
    __vue_render__$n._withStripped = true;

      /* style */
      const __vue_inject_styles__$n = function (inject) {
        if (!inject) return
        inject("data-v-4e91c57d_0", { source: ".bc-filter-profile[data-v-4e91c57d] {\n  display: flex;\n  align-items: center;\n}\n.bc-filter-profile button[data-v-4e91c57d] {\n    text-align: left;\n}\n.bc-filter-profile button[data-v-4e91c57d]:nth-child(3) {\n      border-top-color: #BDBDBD;\n      border-bottom-color: #BDBDBD;\n}\n.bc-filter-profile button.disabled-button[data-v-4e91c57d] {\n      cursor: default;\n      pointer-events: none;\n      color: #212121;\n      opacity: 0.4;\n}\n\n/*# sourceMappingURL=bc-filter-profile.vue.map */", map: {"version":3,"sources":["/home/ju/Documentos/components-vue/src/bc-components/bc-filter-profile.vue","bc-filter-profile.vue"],"names":[],"mappings":"AAEA;EACA,aAAA;EACA,mBAAA;AAAA;AAFA;IAIA,gBAAA;AAAA;AAJA;MAMA,yBAAA;MACA,4BADA;AAAA;AANA;MAUA,eAAA;MACA,oBAAA;MACA,cADA;MAEA,YAAA;AAAA;;ACDA,gDAAgD","file":"bc-filter-profile.vue","sourcesContent":["<style scoped lang=\"scss\">\n    @import '../styles/variables';\n    .bc-filter-profile{\n        display: flex;\n        align-items: center;\n        button {\n            text-align: left;\n            &:nth-child(3) {\n                border-top-color: $gray400;\n                border-bottom-color: $gray400;\n            }\n            &.disabled-button{\n                cursor: default;\n                pointer-events: none;\n                color: $gray900;\n                opacity: 0.4;\n            }\n        }\n    }\n</style>\n\n<template>\n    <div class=\"bc-filter-profile field\" v-if=\"show\">\n        <select name=\"profiles\" class=\"inp\" @change=\"fireProfileSelected\">\n            <option value=\"\" disabled :selected=\"selectedProfile.id_cnfg_usua_app_pes === null\">{{'select' | i18n}}</option>\n            <option v-for=\"(profile, idx) in profiles\" :key=\"idx\"\n                    :value=\"idx\" :selected=\"selectedProfile.descricao === profile.descricao\">\n                    {{profile.descricao}}\n            </option>\n        </select>\n        <dgt-context-menu :close-on-click=\"true\" :change-open=\"selectedProfile.id\">\n            <button slot=\"button\" class=\"btn-icon\" :class=\"{'disabled-button': selectedProfile.id}\">\n                <i class=\"mdi mdi-settings\"></i>\n            </button>\n            <div slot=\"content\">\n                <button v-for=\"(option, idx) in options\" :key=\"idx\" class=\"btn popover-item\"\n                        :class=\"{'disabled-button': checkDisabled(option)}\" @click=\"fireOptionSelected(option)\">\n                        <i v-if=\"checkDefault(option)\" class=\"mdi mdi-check\"></i>\n                        {{ `profileOptions.${option.label}` | i18n }}\n                </button>\n            </div>\n        </dgt-context-menu>\n        <bc-save-search-modal v-if=\"showModal\" :type=\"modalType\"\n            @cancel=\"closeModal\" @confirm=\"handleConfirm\" :default-name=\"selectedProfile.descricao\"\n        ></bc-save-search-modal>\n        <hr>\n    </div>\n</template>\n\n<script>\n\n    import bcSaveSearchModal from './modal/bc-save-search-modal.vue';\n    import dgtContextMenu from '../components/dgt-context-menu.vue';\n    import bcService from './services/bc-services.js';\n    import i18n from './utils/i18n.js';\n\n    export default {\n        name: 'bc-filter-profile',\n        mixins: [i18n.mixin],\n        components: {\n            bcService,\n            dgtContextMenu,\n            bcSaveSearchModal\n        },\n        props: {\n            show: {\n                type: Boolean,\n                default: true\n            },\n            json: {},\n            profiles: Array\n        },\n        data() {\n            return {\n                showModal: false,\n                modalType: 'saveAs',\n                selectedProfile: {\n                    id_cnfg_usua_app_pes: null\n                },\n                optionSelected: {\n                    id: ''\n                },\n                enableDefaultOption: true,\n                options: [\n                    { id: 1, label: 'save' },\n                    { id: 2, label: 'saveAs' },\n                    { id: 3, label: 'default' },\n                    { id: 4, label: 'rename' },\n                    { id: 5, label: 'exclude' }\n                ]\n            };\n        },\n        methods: {\n            setDefault() {\n                let defaultProfile = this.profiles.filter(profile => {\n                    return profile.flg_default.valor === 'Sim';\n                });\n                if (defaultProfile.length) {\n                    [this.selectedProfile] = [...defaultProfile];\n                    this.$emit('change', this.selectedProfile);\n                }\n            },\n            fireProfileSelected(e) {\n                this.selectedProfile = this.profiles[e.target.value];\n                this.$emit('change', this.selectedProfile);\n            },\n            fireOptionSelected(obj) {\n                this.optionSelected = obj;\n                switch (obj.label) {\n                    case 'save':\n                        return this.fireProfileSaved(obj);\n                    case 'saveAs':\n                        this.modalType = 'saveAs';\n                        return this.showModal = true;\n                    case 'default':\n                        return this.fireProfileDefault(obj);\n                    case 'rename':\n                        this.modalType = 'rename';\n                        return this.showModal = true;\n                    case 'exclude':\n                        return this.fireProfileRemoved(obj);\n                    default:\n                        return null;\n                }\n            },\n            handleConfirm(name, type) {\n                if (type === 'saveAs') {\n                    return this.fireProfileSavedAs(name);\n                }\n                return this.fireProfileRenamed(name);\n            },\n            checkDefault(option) {\n                if (option.label === 'default') {\n                    return this.selectedProfile.flg_default && this.selectedProfile.flg_default.valor === 'Sim';\n                }\n                return null;\n            },\n            checkDisabled(option) {\n                if (option.label === 'default') {\n                    if (this.selectedProfile.flg_default &&\n                        this.selectedProfile.flg_default.valor === 'Sim') return true;\n                    if (!this.selectedProfile.id_cnfg_usua_app_pes) return true;\n                } else if (option.label !== 'saveAs') {\n                    return !this.selectedProfile.id_cnfg_usua_app_pes;\n                }\n                return null;\n            },\n            closeModal() {\n                this.showModal = false;\n            },\n            fireProfileSaved() {\n                try {\n                    //necessário passar o json junto para salvar os filtros da pesquisa;\n                    bcService.editProfile(this.selectedProfile);\n                    this.$emit('success', 'save');\n                    return this.$emit('reload-profiles');\n                } catch (error) {\n                    this.$emit('error', 'save');\n                    return console.error('Erro ao salvar perfil');\n                }\n            },\n            async fireProfileSavedAs(name) {\n                //necessário passar o json junto para salvar os filtros da pesquisa;\n                this.selectedProfile = this.selectedProfile.descricao ?\n                    this.selectedProfile : this.json;\n                if (this.checkSameProfileName(name)) {\n                    try {\n                        await bcService.saveSearchProfiles(this.selectedProfile, {descricao: name});\n                        this.showModal = false;\n                        this.$emit('success', 'saveAs');\n                        return this.$emit('reload-profiles');\n                    } catch (error) {\n                        this.$emit('error', 'saveAs');\n                        this.selectedProfile.id_cnfg_usua_app_pes = null;\n                        this.$forceUpdate();\n                        return console.error('Erro ao salvar perfil como');\n                    }\n                }\n                this.$emit('error', 'saveAs');\n                this.selectedProfile.id_cnfg_usua_app_pes = null;\n                this.$forceUpdate();\n                return alert('Erro ao salvar perfil com o mesmo nome');\n            },\n            async fireProfileDefault() {\n                try {\n                    await bcService.setDefaultProfile(this.selectedProfile);\n                    this.$emit('success', 'default');\n                    return this.$emit('reload-profiles');\n                } catch (error) {\n                    this.$emit('error', 'default');\n                    return console.error('Erro ao setar default');\n                }\n            },\n            async fireProfileRenamed(name) {\n                if (this.checkSameProfileName(name)) {\n                    try {\n                        await bcService.renameSearchProfiles(this.selectedProfile, name);\n                        this.showModal = false;\n                        this.$emit('success', 'renamed');\n                        return this.$emit('reload-profiles');\n                    } catch (error) {\n                        this.$emit('error', 'renamed');\n                        this.selectedProfile.id_cnfg_usua_app_pes = null;\n                        return alert('Não foi possível renomear a pesquisa.');\n                    }\n                }\n                this.$emit('error', 'renamed');\n                this.selectedProfile.id_cnfg_usua_app_pes = null;\n                return alert('Erro ao salvar perfil com o mesmo nome');\n            },\n            async fireProfileRemoved() {\n                try {\n                    await bcService.deleteSearchProfiles(this.selectedProfile);\n                    this.$emit('success', 'removed');\n                    return this.$emit('reload-profiles');\n                } catch (error) {\n                    this.$emit('error', 'removed');\n                    return alert('Não foi possível excluir a pesquisa.');\n                }\n            },\n            checkSameProfileName(name) {\n                if (this.profiles.length > 1) {\n                    let defaultProfile = this.profiles.filter(profile => {\n                        return profile.descricao === name;\n                    });\n                    if (defaultProfile.length) {\n                        return false;\n                    }\n                }\n                return true;\n            }\n        },\n        watch: {\n            profiles() {\n                if (this.profiles.length) {\n                    this.setDefault();\n                }\n            }\n        }\n    };\n</script>\n",".bc-filter-profile {\n  display: flex;\n  align-items: center; }\n  .bc-filter-profile button {\n    text-align: left; }\n    .bc-filter-profile button:nth-child(3) {\n      border-top-color: #BDBDBD;\n      border-bottom-color: #BDBDBD; }\n    .bc-filter-profile button.disabled-button {\n      cursor: default;\n      pointer-events: none;\n      color: #212121;\n      opacity: 0.4; }\n\n/*# sourceMappingURL=bc-filter-profile.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__$n = "data-v-4e91c57d";
      /* module identifier */
      const __vue_module_identifier__$n = undefined;
      /* functional template */
      const __vue_is_functional_template__$n = false;
      /* style inject SSR */
      

      
      var BcFilterProfile = normalizeComponent_1(
        { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
        __vue_inject_styles__$n,
        __vue_script__$n,
        __vue_scope_id__$n,
        __vue_is_functional_template__$n,
        __vue_module_identifier__$n,
        browser,
        undefined
      );

    //

    var script$o = {
        name: 'bc-filter',
        mixins: [i18n.mixin],
        components: {
            bcService,
            BcFilterUi,
            BcFilterGroup,
            BcFilterProfile
        },
        props: {
            listUis: Array,
            sourceTypes: Array,
            idAplicacao: String,
            idTipoPesquisa: String
        },
        data() {
            return {
                operator: 'AND',
                uis: [{
                    id: null,
                    attribs: []
                }],
                filterData: [],
                profiles: [],
                profile: {},
                jsonMounted: {
                    descricao: ''
                }
            };
        },
        async created() {
            await this.getProfiles();
        },
        methods: {
            onMetaUISelected(metaUI, ui) {
                ui.id = metaUI.id;

                const emptyUi = this.uis.find((e)=>e.id === null);

                if (!emptyUi) {
                    // adiciona novo grupo de ui
                    this.uis.push({id: null, attribs: []});
                }

                this.$nextTick(()=>{
                    this.$refs.uiGroup.updateGroups();
                });
                // limpa os atributos da ui
                ui.attribs = [{id: null}];
            },

            onMetaUIRemoved(idx) {
                this.uis.splice(idx, 1);

                this.$nextTick(()=>{
                    this.$refs.uiGroup.updateGroups();
                });
            },
            onProfileSelected(e) {
                console.log(e.target.value);
            },
            removeChangedUi(uiId) {
                if (!this.lastMetaUiSelected) {
                    return;
                }
                let keys = Object.keys(this.newFilter);
                delete this.newFilter[keys[this.idx]];
                this.lastMetaUiSelected = uiId;
            },
            onTypeChanged(type) {
                this.operator = type;
            },
            onOperatorChanged(value) {
                this.filterData.push(value);
                console.log(this.filterData);
            },
            onProfileSelected(obj) {
                this.profile = obj;
            },
            async getProfiles() {
                let response = await bcService.getSearchProfiles();
                this.profiles = [];
                response.uis.forEach(ui => {
                    this.profiles.push(ui);
                });
            },
            handleEvent(msg, type) {
                var event = new CustomEvent(type, {detail: msg});
                document.dispatchEvent(event);
            }
        }
    };

    /* script */
    const __vue_script__$o = script$o;

    /* template */
    var __vue_render__$o = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "bc-filter-component" },
        [
          _c("bc-filter-profile", {
            attrs: { profiles: _vm.profiles, json: _vm.jsonMounted },
            on: {
              change: _vm.onProfileSelected,
              "reload-profiles": _vm.getProfiles,
              sucess: function($event) {
                return _vm.handleEvent($event, "sucess")
              },
              error: function($event) {
                return _vm.handleEvent($event, "error")
              }
            }
          }),
          _vm._v(" "),
          _c(
            "bc-filter-group",
            {
              ref: "uiGroup",
              on: { "type-changed": _vm.onTypeChanged },
              model: {
                value: _vm.operator,
                callback: function($$v) {
                  _vm.operator = $$v;
                },
                expression: "operator"
              }
            },
            _vm._l(_vm.uis, function(ui, idx) {
              return _c("bc-filter-ui", {
                key: idx,
                attrs: {
                  operator: _vm.operator,
                  idx: idx,
                  ui: ui,
                  "logic-name-uis": _vm.listUis,
                  "source-types": _vm.sourceTypes,
                  "show-source-option": ui.id !== null
                },
                on: {
                  "meta-ui-selected": function($event) {
                    return _vm.onMetaUISelected($event, ui)
                  },
                  "meta-ui-removed": function($event) {
                    return _vm.onMetaUIRemoved(idx)
                  },
                  "operator-changed": _vm.onOperatorChanged
                }
              })
            }),
            1
          )
        ],
        1
      )
    };
    var __vue_staticRenderFns__$o = [];
    __vue_render__$o._withStripped = true;

      /* style */
      const __vue_inject_styles__$o = undefined;
      /* scoped */
      const __vue_scope_id__$o = undefined;
      /* module identifier */
      const __vue_module_identifier__$o = undefined;
      /* functional template */
      const __vue_is_functional_template__$o = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var bcFilter = normalizeComponent_1(
        { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
        __vue_inject_styles__$o,
        __vue_script__$o,
        __vue_scope_id__$o,
        __vue_is_functional_template__$o,
        __vue_module_identifier__$o,
        undefined,
        undefined
      );

    return bcFilter;

})));
