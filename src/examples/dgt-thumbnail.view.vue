<style lang="scss" scoped>
.mansory{
    column-count:4;
    column-gap: 1em;
    max-width: 1920px;
}
.thumbnail{
    margin-bottom: 1em;
    break-inside: avoid;
    display: inline-block;
    page-break-inside: avoid;
    width: 100%;
}
</style>

<template>
    <div class="mansory">
            <dgt-thumbnail v-for="(thumb, index) in thumbs"
                           :key="index"
                           title="Tooltip com detalhes"
                           @checked="handleCheckbox"
                           @click="handleClick"
                           :src="thumb.src"
                           backupSrc="https://placeimg.com/200/300/animals"
                           :footer="thumb.footer"
                           :id="thumb.id"
                           :index="index"
                           :checked="thumb.checked"
                           :selected="thumb.selected"
                           :gif="thumb.gif"
                           :video-duration="thumb.duration"
            >
            </dgt-thumbnail>
    </div>
</template>

<script>
    import dgtThumbnail from '../components/dgt-thumbnail.vue';

    let thumbs = [
        {
            duration: '03:22',
            isVideo: true,
            selected: false,
            checked: false,
            src: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Pinus_echinata_thinned_forest_1.jpg',
            id: '0',
            footer: 'usuariodoalem@bol.com.br'
        },
        {
            isVideo: false,
            selected: false,
            checked: false,
            src: 'https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/02/dicas-redes-sociais.png',
            id: '1',
            footer: 'telmo@bol.com.br'
        },
        {
            duration: '04:30',
            isVideo: true,
            selected: false,
            checked: false,
            src: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Pinus_echinata_thinned_forest_1.jpg',
            id: '2',
            footer: 'usuariodoalem@bol.com.br'
        },
        {
            isVideo: false,
            selected: false,
            checked: false,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U9Yc9waJ3qOfClktkGk7eXuXbqaSHwfr3BOPxDfNI2hsVWxW',
            id: '3',
            footer: 'telmo@bol.com.br'
        },
        {
            duration: '06:15',
            isVideo: true,
            selected: false,
            checked: false,
            src: 'https://lh3.googleusercontent.com/-CVSScpWOKf8/WEreasxe2nI/AAAAAAAAz2w/wRxjn1pOm0o/image_thumb%25255B1%25255D.png?imgmax=800',
            id: '4',
            footer: 'usuariodoalem@bol.com.br'
        },
        {
            isVideo: false,
            selected: false,
            checked: false,
            src: 'https://iphotochannel.com.br/wp-content/uploads/2018/05/iphoto-os-10-mandamentos-da-fotografia-de-retrato-1-990x660.jpg',
            id: '5',
            footer: 'telmo@bol.com.br'
        },
        {
            duration: '02:39',
            isVideo: true,
            selected: false,
            checked: false,
            src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Almeida_J%C3%BAnior_-_Retrato_de_Prudente_de_Moraes.jpg',
            id: '6',
            footer: 'usuariodoalem@bol.com.br'
        },
        {
            isVideo: false,
            selected: false,
            checked: false,
            src: 'https://fotodicasbrasil.com.br/wp-content/uploads/2016/08/Retrato-Noturno-Lente-perfeita-para-retratos.jpg',
            id: '7',
            footer: 'telmo@bol.com.br'
        },
        {
            duration: '08:56',
            isVideo: true,
            selected: false,
            checked: false,
            src: 'https://lh4.googleusercontent.com/-gZiu96oTuu4/Uag5oWLQHfI/AAAAAAAABSE/pl1W8n91hH0/w140-h165-no/Homer-Static.png',
            gif: 'https://lh4.googleusercontent.com/i1RprwcvxhbN2TAMunNxS4RiNVT0DvlD9FNQCvPFuJ0=w140-h165-no',
            id: '10',
            footer: 'usuariodoalem@bol.com.br'
        },
        {
            duration: '08:56',
            isVideo: true,
            selected: false,
            checked: false,
            src: 'https://fotodicasbrasil.com.br/wp-content/uploads/2016/08/Retrato-Fashion-Lente-perfeita-para-retratos.jpg',
            id: '8',
            footer: 'usuariodoalem@bol.com.br'
        },
        {
            isVideo: false,
            selected: false,
            checked: false,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQbs34xJbcrPYX26pr-9xYPh7-TGQTgjY8rXFqWkySjzbm6H3',
            id: '9',
            footer: 'telmo@bol.com.br'
        }
    ];

    export default {
        name: 'dgtThumbnailView',
        components: {
            dgtThumbnail
        },
        data() {
            return {
                thumbs,
                itemSelected: null
            };
        },
        methods: {
            handleCheckbox(index) {
                this.thumbs[index].checked = !this.thumbs[index].checked;
            },
            handleClick(item) {
                if (this.itemSelected) {
                    this.thumbs[this.itemSelected].selected = false;
                }
                this.thumbs[item.index].selected = true;
                this.itemSelected = item.index;
            }
        }
    };
</script>
