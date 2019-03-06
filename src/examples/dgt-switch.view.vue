<style>
    .custom {
        --dgt-switch-checked-color: #641C90;
        --dgt-switch-unchecked-color: #2E7D32;
    }
</style>
<template>
    <div>
        <h5>Default</h5>
        <dgt-switch class="default-switch" v-model="s1Value"></dgt-switch>
        {{s1Value}}
        <hr/>
        <h5>Disabled</h5>
        <dgt-switch v-model="s1Value" disabled=""></dgt-switch>
        <hr/>
        <h5>Custom Props</h5>
        <dgt-switch
            v-model="s2Value"
            checked-label="OU"
            unchecked-label="E"
            checked-value="OR"
            unchecked-value="AND"
            class="custom"
        ></dgt-switch>
        {{s2Value}}
        <hr/>
    </div>
</template>

<script>
    import dgtSwitch from '../components/dgt-switch.vue';

    export default {
        name: 'dgt-switch-view',
        components: {
            dgtSwitch
        },
        data() {
            return {
                s1Value: false,
                s2Value: 'OR'
            };
        }
    };
</script>
