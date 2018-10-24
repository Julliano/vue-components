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
}
</style>

<template>
    <div>
        <div class="inline">
            <div class="grid">
                <label>Autocomplete</label>
                <div class="inline">
                    <input type="radio" v-model="showComplete" :value="true"> True<br>
                    <input type="radio" v-model="showComplete" :value="false"> False<br>
                </div>
            </div>
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
        </div>
        <dgt-tag-input :obj-tag="tags" :style="'--dgt-background-tag: ' + `${backgroundTag}`+'; --dgt-background-delete-tag: ' + `${backgroundTagDelete}`+'; --dgt-delete-tag: '+ `${xTagDelete}`" :valids-tags="validsTags"
        :autocomplete="showComplete"></dgt-tag-input>
    </div>
</template>

<script>
    import dgtTagInput from '../components/dgt-tag-input.vue';
    export default {
        name: 'dgtTagInputView',
        components: {
            dgtTagInput
        },
        data() {
            return {
                tags: [],
                backgroundTag: '#000',
                backgroundTagDelete: '#000333',
                xTagDelete: '#fff',
                newTag: null,
                showComplete: true,
                validsTags: [
                    'Batman',
                    'Super-Man',
                    'Lex Luthor',
                    'Lana Lang',
                    'Arqueiro-Verde',
                    'Aquaman',
                    'Flash',
                    'Mulher Maravilha'
                ]
            };
        }
    };
</Script>