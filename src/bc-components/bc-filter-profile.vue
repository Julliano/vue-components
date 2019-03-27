<template>
    <div class="bc-filter-profile field">
        <select name="profiles" class="inp" @change="fireProfileSelected">
            <option value="" disabled :selected="selectedProfileId === null">{{'select' | i18n}}</option>
            <option v-for="(profile, idx) in profiles"
                    :value="idx"
                    :selected="idx === selectedProfileId">
                {{profile.label}}
            </option>
        </select>

    </div>
</template>

<script>
    import metadata from './metadata.json';
    import i18n from './utils/i18n.js';

    export default {
        name: 'bc-filter-profile',
        mixins: [i18n.mixin],
        props: {
            profiles: Array
        },
        data() {
            return {
                metadata,
                selectedProfileId: null,
                enableDefaultOption: true
            };
        },
        methods: {
            fireProfileSelected(e) {
                this.$emit('change', e);
            },
            fireProfileRenamed() {

            },
            fireProfileSaved() {

            },
            fireProfileSavedAs() {

            },
            fireProfileRemoved() {

            },
            fireProfileDefault() {

            }
        }
    };
</script>
