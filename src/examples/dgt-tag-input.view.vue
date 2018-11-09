<style lang="scss">
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
                <input v-model="tagProps.backgroundTag">
            </div>
            <div class="grid">
                <label>Tag delete bg color:</label>
                <input v-model="tagProps.backgroundTagDelete">
            </div>
            <div class="grid">
                <label>Tag delete X color:</label>
                <input v-model="tagProps.xTagDelete">
            </div>
            <div class="grid">
                <label>Font-size:</label>
                <input type="number" v-model="tagProps.fontSize">
            </div>
        </div>
        <dgt-autocomplete :items="tagProps.validsTags" :search-tag="tagProps.search" :existingTags="tagProps.tags" @tag-selected="pushTag" ref="childComplete">
            <template slot-scope="slotProps">
                <dgt-tag-input @new-tag="newTag" :obj-tag="tagProps.tags" @keyup="keyUp" @keydown="keyDown" @enter="keyEnter" placeholder="Adicionar tag"
                :style="'--dgt-background-tag: ' + `${tagProps.backgroundTag}`+'; --dgt-tag-font-size: ' + `${tagProps.fontSize}`+'px; --dgt-background-delete-tag: ' + `${tagProps.backgroundTagDelete}`+'; --dgt-delete-tag: '+ `${tagProps.xTagDelete}`">
                </dgt-tag-input>
            </template>
        </dgt-autocomplete>
    </div>
</template>

<script>
    import dgtTagInput from '../components/dgt-tag-input.vue';
    import dgtAutocomplete from '../components/dgt-autocomplete.vue';

    const tagProps = {
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

    export default {
        name: 'dgtTagInputView',
        components: {
            dgtTagInput,
            dgtAutocomplete
        },
        data() {
            return {
                tagProps
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
