<style scoped lang="scss">
    @import "../styles/variables";

    $unchecked-color: var(--dgt-switch-unchecked-color, $white);
    $checked-color: var(--dgt-switch-checked-color, $primary-color);
    $disabled-color: $gray300;
    $switch-height: $input-height;
    $switch-font-size: $switch-height/2;
    $switch-width: $switch-height*2;
    $switch-border: 2px;
    $switch-button-width: $switch-height*0.75;
    $group-line: 2px;

    .switch {
        position: relative;
        width: $switch-width;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;

        .switch-checkbox {
            display: none;
        }

        .switch-label {
            display: block;
            overflow: hidden;
            cursor: pointer;
            border-radius: $switch-border;
        }

        .switch-inner {
            display: block;
            width: 200%;
            margin-left: -100%;
            transition: margin 0.3s ease-in 0s;
        }

        .switch-inner:before, .switch-inner:after {
            display: block;
            float: left;
            width: 50%;
            height: $switch-height;
            padding: 0;
            line-height: $switch-height;
            font-size: $switch-font-size;
            color: white;
            font-weight: bold;
            box-sizing: border-box;
        }

        .switch-inner:before {
            content: attr(checked-label);
            background-color: $checked-color;
            color: #FFFFFF;
            text-align: center;
            padding-right: 20%;
        }

        .switch-inner:after {
            content: attr(unchecked-label);
            background-color: $unchecked-color;
            color: #FFFFFF;
            text-align: center;
            padding-left: 20%;
        }

        &.disabled {
            .switch-inner:after,
            .switch-inner:before {
                background-color: $disabled-color;
            }
            .switch-label {
                cursor: default;
            }
        }

        .switch-button {
            display: block;
            width: $switch-button-width;
            margin: 0;
            background: #FFFFFF;
            position: absolute;
            top: 0;
            bottom: 0;
            right: $switch-width - $switch-button-width;
            border-radius: $switch-border;
            transition: all 0.3s ease-in 0s;
            box-shadow: 0 $switch-border/5 $switch-border $switch-border/10 #A1A1A1;
        }

        .switch-checkbox:checked + .switch-label .switch-inner {
            margin-left: 0;
        }

        .switch-checkbox:checked + .switch-label .switch-button {
            right: 0;
        }
    }
</style>
<template>
    <div class="switch" :class="{'disabled': disabled}">
        <input type="checkbox"
               class="switch-checkbox"
               :checked="value === checkedValue"
               @change="changeValue"
               :id="_uid"
               :disabled="disabled"
               >
        <label class="switch-label" :for="_uid">
            <span class="switch-inner" :checked-label="checkedLabel" :unchecked-label="uncheckedLabel"></span>
            <span class="switch-button"></span>
        </label>
    </div>
</template>

<script>
    export default {
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
</script>
