<style lang="scss" scoped>
    .inline{
        display: inline-flex;
    }
    .grid{
        display: grid;
        margin-right: 10px;
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
        </div>
        <dgt-tag-input :obj-tag="tags" :valids-tags="validsTags"
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
                backgroundTag: '#3273dc',
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