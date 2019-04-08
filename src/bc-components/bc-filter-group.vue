<style scoped lang="scss">
    @import "styles/variables";
    @import "../styles/variables";

    $disabled-color: lightgray;
    $group-line: 2px;

    @mixin halfBorderLeft($color) {
        border-image-source: linear-gradient(
                to bottom,
                $color 0,
                $color calc(#{$big-space+$input-height/2} + #{$group-line/2}),
                rgba(0,0,0,0) calc(#{$big-space+$input-height/2} + #{$group-line/2})
        );
        border-image-slice: 1;
        border-image-width: 0 0 0 $group-line;

    }

    .container {
        margin-left: $big-space;

        &.and {
            border-color: $and-color;
            > :last-child {
                @include halfBorderLeft($and-color)
            }
        }

        &.or {
            border-color: $or-color;
            > :last-child {
                @include halfBorderLeft($or-color)
            }
        }

        &.disabled-switch {
            border-color: $disabled-color;
            > :last-child {
                @include halfBorderLeft($disabled-color)
            }
        }

        > * {
            border-left: $group-line solid;
            border-color: inherit;
            padding-top: $big-space;

        }

        > :before{
            content: '';
            position: relative;
            bottom: $input-height/2;
            border-bottom: $group-line solid;
            padding-left: 15px;
            margin-right: 5px;
            margin-left: -$group-line;
            border-color: inherit;
            height: 50%;
        }
        > .group {
            .container {
                margin-left: $big-space*2;
                margin-top: $small-space;
            }
            .switch {
                display: inline-block;
                vertical-align: sub;
            }
        }

    }
</style>

<template>
    <div class="group">
        <bc-switch v-model="type" :disabled="itemCount < 3" @input="onOperatorChanged"></bc-switch>
        <div class="container"
            :class="{
                'and': type === 'and',
                'or': type === 'or',
                'disabled-switch': itemCount < 3
            }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BcSwitch from './bc-switch.vue';

    export default {
        name: 'bc-filter-group',
        components: {
            BcSwitch
        },
        props: {
            profileSelected: Object,
            operator: String,
            criteriaSize: Number
        },
        data() {
            return {
                type: this.operator || '',
                itemCount: 0
            };
        },
        mounted() {
            this.updateGroups();
            this.verifyOperator();
        },
        methods: {
            verifyOperator() {
                this.type = this.operator ? this.operator : 'and';
                this.onOperatorChanged(this.type);
            },
            updateGroups() {
                this.itemCount = this.$slots.default.length;
                if (this.itemCount < 3) {
                    this.type = 'and';
                }
            },
            onOperatorChanged(type) {
                this.type = type;
                this.$emit('operator-changed', this.type);
            }
        },
        watch: {
            criteriaSize(value) {
                this.itemCount = value;
            },
            operator(value) {
                this.type = value;
            }
        }
    };
</script>
