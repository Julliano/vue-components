<style scoped lang="scss">
    @import "styles/variables";

    .bc-switch {
        --dgt-switch-checked-color: #{$or-color};
        --dgt-switch-unchecked-color: #{$and-color};
    }
</style>


<template>
    <dgt-switch class="bc-switch"
                checked-label="OU"
                unchecked-label="E"
                checked-value="OR"
                unchecked-value="AND"
                :disabled="disabled"
                :value="value"
                @input="$emit('input', $event)"
    ></dgt-switch>
</template>

<script>
    import DgtSwitch from '../components/dgt-switch.vue';
    export default {
        name: 'bc-switch',
        components: {DgtSwitch},
        props: {
            value: [Object, String, Number, Boolean],
            disabled: Boolean
        }
    };
</script>
