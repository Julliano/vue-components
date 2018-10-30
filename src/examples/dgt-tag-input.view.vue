<style lang="scss" scoped>
.inline {
  display: inline-flex;
  margin-bottom: 10px;
}
.grid {
  display: grid;
  margin-right: 10px;
}
.custom {
  --dgt-delete-tag: yellow;
  --dgt-background-tag: #000;
  --dgt-background-delete-tag: red;
  --dgt-tag-font-size: 12px;
}
</style>

<template>
    <div>
        <div class="inline">
            <div class="grid">
                <label>Tag color:</label>
                <input v-model="backgroundTag">
            </div>
            <div class="grid">
                <label>Tag delete bg color:</label>
                <input v-model="backgroundTagDelete">
            </div>
            <div class="grid">
                <label>Tag delete X color:</label>
                <input v-model="xTagDelete">
            </div>
            <div class="grid">
                <label>Font-size:</label>
                <input type="number" v-model="fontSize">
            </div>
        </div>
        <dgt-autocomplete :items="validsTags" :search-tag="search" :existingTags="tags" @tag-selected="pushTag" ref="childComplete">
            <template slot="slot" slot-scope="slotProps">
                <dgt-tag-input @new-tag="newTag" :obj-tag="tags" @keyup="keyUp" @keydown="keyDown" @enter="keyEnter"></dgt-tag-input>
            </template>
        </dgt-autocomplete>
    </div>
</template>

<script>
    import dgtTagInput from '../components/dgt-tag-input.vue';
    import dgtAutocomplete from '../components/dgt-autocomplete.vue';
    
    export default {
        name: 'dgtTagInputView',
        components: {
            dgtTagInput,
            dgtAutocomplete
        },
        data() {
            return {
                tags: [],
                backgroundTag: '#000',
                backgroundTagDelete: '#000333',
                xTagDelete: '#fff',
                fontSize: 14,
                search: '',
                validsTags: [
                    'teste',
                    'teste2'
                ]
            };
        },
        methods: {
            newTag(param) {
                this.search = param;
            },
            pushTag(param) {
                this.tags.push(param);
            },
            keyDown() {
                this.$refs.childComplete && this.$refs.childComplete.onArrowDown();
            },
            keyUp() {
                this.$refs.childComplete && this.$refs.childComplete.onArrowUp();
            },
            keyEnter() {
                if (this.$refs.childComplete) {
                    this.$refs.childComplete.onEnter();
                } else {
                    this.tags.push(this.search);
                }
                document.getElementById('inputTag').focus();
            }
        }
    };
</script>
