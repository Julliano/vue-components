<template>
    <div class="thumbnail" :class="{'selected': selected}">
        <div class="wrapper-checkbox">
            <div class="checkbox">
                <input type="checkbox" :id="`thumb-${id}`" class="inp" :checked="checked">
                <label :for="`thumb-${id}`" @click="handleCheckbox"></label>
            </div>
        </div>
        <div class="video-duration" v-if="gif">
            <i class="mdi mdi-play"></i> {{videoDuration}}
        </div>
        <div class="thumb-container" @click.stop="handleClick" @mouseover="showPreview" @mouseout="showStatic">
            <img class="thumb static" :src="src" v-if="!showGif">
        </div>
        <footer class="footer">{{footer}}</footer>
    </div>
</template>
<script>
    export default {
        name: 'dgtThumbnail',
        props: {
            selected: {
                type: Boolean,
                default: false
            },
            src: String,
            id: String,
            videoDuration: String,
            gif: String,
            footer: String,
            index: Number
        },
        data() {
            return {
                checked: false,
                showGif: false,
                timeout: null
            };
        },
        methods: {
            handleCheckbox() {
                this.$emit('selected', this.index);
            },
            handleClick() {
                this.$emit('click', this.$props);
            },
            showPreview() {
                if (!this.gif) return;
                let image = new Image();
                image.src = this.gif;
                image.setAttribute('class', 'thumb gif');
                image.setAttribute('style', 'display: none');
                let thumbContainer = this.$el.querySelector('.thumb-container');
                thumbContainer.appendChild(image);
                this.timeout = setTimeout(() => {
                    this.showGif = true;
                    this.$el.querySelector('.gif').removeAttribute('style');
                }, 2000);
            },
            showStatic() {
                if (!this.gif) return;
                clearTimeout(this.timeout);
                this.showGif = false;
                this.$el.querySelector('.gif').remove();
            }
        }
    };
</script>
