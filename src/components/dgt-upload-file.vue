<style lang="scss" scoped>
.dgt-upload-file {
  position: relative;
  overflow: hidden;
  display: inline-block;
  input.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
}
</style>

<template>
    <div>
        <div class="dgt-upload-file">
            <button class="btn" @click="callFileUpload" :disabled="disabled"> {{ currentLabel }} </button>
            <input type="file" class="inputfile" name="uploadFiles"
                :multiple="multiple"  @change="onFileChange" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dgtUploadFile',
        props: {
            label: {
                type: String,
                default: 'Selecionar arquivo...'
            },
            multiple: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentLabel: this.label || 'Selecionar arquivo...',
                files: []
            };
        },
        methods: {
            callFileUpload() {
                document.querySelector('input.inputfile').click();
            },
            onFileChange(event) {
                this.files = event.target.files;
                this.$emit('files-changed', this.files);
            }
        }
    };
</script>
