<template>
    <dgt-details :data="dataDgtGrid.lineSelected" :showAnalise="showAnalise" :defaultColumns="defaultColumns">
        <template slot="halfTop" slot-scope="slotHalfTop">
            <div class="obj-top-details" :class="{closeAnalise:slotHalfTop.open}">
                <component :is="componentType" :data="slotHalfTop.data" :columns="defaultColumns">
                    <template slot="metadados" slot-scope="slotProps">
                        <dgt-metadados :data="slotProps.data" :columns="defaultColumns"></dgt-metadados>
                    </template>
                </component>
            </div>
        </template>
        <template slot="halfBottom" slot-scope="slotHalfBottom">
            <div class="obj-bottom-details">
                <div class="title informationTitle" @click="classToggle">
                    <i class="material-icons toggle-analise">{{showAnalise ? 'expand_more' : 'expand_less'}}</i>
                    <h5>Análise da Informação</h5>
                </div>
                <div class="main-div form-group analise">
                    <div class="form-group flex">
                        <div class="col-6">
                            Classificação da Informação:
                            <dgt-star-rating @rating-selected="setRating" :show-rating="true" :padding="1" inactive-color="#f5f5f5" 
                                :border-width="1" :rating="slotHalfBottom.obj.rating" active-color="#0D47A1" :increment="0.5" :star-size="13"></dgt-star-rating>
                        </div>
                        <div class="col-6">
                            <button :class="{notPurge:notPurge()}" class="armazenar" @click="storageObj(slotHalfBottom.obj)">
                                <svg class="unsaved" viewBox="0 0 24 24"><path fill="#164C9D" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" /></svg>
                                Armazenar
                                <svg class="saved" viewBox="0 0 24 24"><path fill="#388E3C" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div class="form-group textarea">
                        Comentário
                        <textarea v-model="slotHalfBottom.obj.comments"></textarea>
                    </div>
                    <div class="form-group textarea">
                        Tags
                        <dgt-tag-input :autocomplete="true" :objTag="slotHalfBottom.obj.tags"></dgt-tag-input>
                    </div>
                </div>
                <footer>
                    <button>Cancelar</button>
                    <button @click="saveLineSelected">Salvar</button>
                </footer>
            </div>
        </template>
    </dgt-details>
</template>

<script>
import dgtDetails from '../components/dgt-details.vue';
import dgtTagInput from '../components/dgt-tag-input.vue';
import dgtMetadados from '../components/dgt-metadados.vue';
import dgtStarRating from '../components/dgt-star-rating.vue';

export default {
    data() {
        return {
            showAnalise: true,
            componentType: null,
            midiaComponent: 'dgt-midia',
            metadadosComponent: 'dgt-metadados',
            emailComponent: 'dgt-email',            
            dataDgtGrid: {
                lineSelected: null,
                pagination: {
                    page: 1,
                    total: 10
                },
                headers: {
                    customColumn: {
                        draggable: false,
                        resizable: false
                    },
                    horario: {
                        name: 'horario',
                        draggable: true,
                        resizable: true
                    },
                    conta: {
                        name: 'conta',
                        draggable: true,
                        resizable: true
                    },
                    url: {
                        name: 'url',
                        draggable: true,
                        resizable: true
                    },
                    localidade: {
                        name: 'localidade',
                        draggable: true,
                        resizable: true
                    },
                    data: {
                        name: 'data',
                        draggable: true,
                        resizable: true
                    }
                },
                data: [
                    {
                        customColumn: ['storage', 'attach_file', 'message'],
                        rating: 1,
                        horario: 'horario1',
                        conta: 'contaa',
                        url: 'urll',
                        localidade: 'localidadee',
                        data: 'data',
                        checked: false,
                        storage: false,
                        attach_file: false,
                        message: true,
                        comments: '',
                        tags: ['adas'],
                        tipo: 'pesquisa'
                    },
                    {
                        customColumn: ['storage', 'attach_file', 'message'],
                        rating: 2,
                        horario: 'horarioo2',
                        conta: 'contaa1',
                        url: 'urll1',
                        data: 'data1',
                        checked: false,
                        storage: false,
                        attach_file: true,
                        message: true,
                        comments: '',
                        tags: [],
                        tipo: 'email',
                        body:
                            'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Per aumento de cachacis, eu reclamis. Diuretics paradis num copo é motivis de denguis. Sapien in monti palavris qui num significa nadis i pareci latim. Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Per aumento de cachacis, eu reclamis. Diuretics paradis num copo é motivis de denguis. Sapien in monti palavris qui num significa nadis i pareci latim. Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Per aumento de cachacis, eu reclamis. Diuretics paradis num copo é motivis de denguis. Sapien in monti palavris qui num significa nadis i pareci latim.',
                        files: ['file 1', 'file 2']
                    },
                    {
                        customColumn: ['storage', 'attach_file', 'message'],
                        rating: 3,
                        horario: 'horario3',
                        conta: 'bontaa',
                        url: 'urll',
                        localidade: 'localidadee',
                        data: 'data',
                        checked: false,
                        storage: false,
                        attach_file: false,
                        message: true,
                        comments: '',
                        tags: [],
                        tipo: 'midia',
                        midia: 'https://cdn.dribbble.com/users/141074/screenshots/1101614/blackbird-400x300.png'
                    }
                ],
                icons: ['storage', 'attach_file', 'message'],
                checkedAll: false,
                checkeds: 0,
                arrowsSort: ['compare_arrows', 'arrow_right_alt', 'arrow_right_alt']
            },
            defaultColumns: ['conta', 'horario', 'data', 'localidadee']
        };
    },
    methods: {
        component(obj) {
            if(obj){
                switch (obj.tipo) {
                    case 'email':
                        return this.componentType = this.emailComponent;
                    case 'pesquisa':
                        return this.componentType = this.metadadosComponent;
                    case 'midia':
                        return this.componentType = this.midiaComponent;
                }
            }
            return this.componentType = null;
        },
        setRating: function(rating) {
            this.dataDgtGrid.lineSelected.rating = rating;
        },
        classToggle: function() {
            this.showAnalise = !this.showAnalise;
        }
    },
    components: {
        dgtDetails,
        dgtTagInput,
        dgtMetadados,
        dgtStarRating
    }
};
</script>
