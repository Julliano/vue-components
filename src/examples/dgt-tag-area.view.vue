<style lang="scss" >
.container {
  display: grid;
  .inline {
    display: inline-flex;
    margin-bottom: 10px;
  }
  .grid {
    display: grid;
    margin-right: 10px;
  }
  .custom {
    --dgt-area-width: 300px;
    --dgt-area-height: 140px;
    --dgt-font-size: 12px;
  }
}
</style>

<template>
    <div class="container">
        <div class="insert-tag">
            <label>Incluir tag:</label>
            <input id="input-tag-area" type="text" v-model="newTag" @keyup.enter="insertTag" />
            <button id="button-tag" @click="insertTag"> Incluir </button>
        </div>
        <div class="inline">
            <div class="field">
                <dgt-tag-area :tags="tags" :placeholder="placeholder" :searchInput="searchInput"
                              :deleteButton="deleteButton" @removed="tagRemoved" class="custom" />
            </div>
        </div>
    </div>
</template>

<script>
    import dgtTagArea from '../components/dgt-tag-area.vue';

    export default {
        name: 'dgtTagAreaView',
        components: {
            dgtTagArea
        },
        data() {
            return {
                tags: ['Batman', 'Captain America', 'Black Phanter', 'Wonder Woman', 'Superman'],
                placeholder: 'Pesquisar...',
                searchInput: true,
                deleteButton: true,
                newTag: null
            };
        },
        methods: {
            tagRemoved(index) {
                this.tags.splice(index, 1);
            },
            insertTag() {
                this.tags.push(this.newTag);
                this.newTag = null;
            }
        }
    };
</script>
