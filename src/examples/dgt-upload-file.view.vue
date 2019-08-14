<style lang="scss" scoped>
  .custom {
    --dgt-tag-white-space: nowrap;
    --dgt-tag-max-width: 95%;
    --dgt-font-size: 12px;
    --dgt-area-width: 250px;
  }
</style>

<template>
    <div>
        <dgt-upload-file @files-changed="newFiles"></dgt-upload-file>
        <dgt-tag-area :tags="fileNames || []" :searchInput="searchInput"
                      :deleteButton="deleteButton" @removed="fileRemoved" class="custom" />
    </div>
</template>

<script>
    import dgtTagArea from '../components/dgt-tag-area.vue';
    import dgtUploadFile from '../components/dgt-upload-file.vue';

    export default {
        name: 'dgtUploadFileView',
        components: {
            dgtTagArea,
            dgtUploadFile
        },
        data() {
            return {
                files: null,
                tags: [],
                searchInput: false,
                deleteButton: true
            };
        },
        computed: {
            fileNames() {
                if (this.files) {
                    let fileNames = [];
                    let len = this.files.length;
                    for (let i = 0; i < len; i++) {
                        fileNames.push(this.files[i].name);
                    }
                    return fileNames;
                }
                return null;
            }
        },
        methods: {
            newFiles(filesUploaded) {
                this.files = [...filesUploaded];
            },
            fileRemoved(index) {
                this.files.splice(index, 1);
            }
        }
    };
</script>
