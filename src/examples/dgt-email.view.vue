<template>
    <dgt-tabs :data="dataTabs">
        <template slot="tabContent" slot-scope="slotProps">
            <div v-if="slotProps.selectedTab === 'Visualização'" class="dgt-email-component">
                <div class="obj-itens" v-for="item in columns" :key="item">
                    <label>{{item}}:</label>
                    <span class="email-title">{{data[item] || '-'}}</span>
                </div>
                <div class="attachment" v-if="data.attach_file">
                    <i class="material-icons">attachment</i>:
                    <ul>
                        <li v-for="file in data.files" :key="file"><a href="url"> {{file}}</a>;</li>
                    </ul>
                </div>
                <div class="emailBody">
                    {{data.body}}
                </div>
            </div>
            <div v-else>
                <dgt-metadados :data="slotProps.data" :columns="columns"></dgt-metadados>
            </div>
        </template>
    </dgt-tabs>
</template>

<script>
import dgtTabs from '../components/dgt-tabs.vue';
import dgtMetadados from '../components/dgt-metadados.vue';
export default {
    name: 'dgtEmail',
    components: {
        dgtMetadados,
        dgtTabs
    },
    props: {
        data: {},
        columns: {}
    },
    data() {
        return {
            dataTabs: {
                vertical: false,
                position: '',
                fontSize: '10px',                
                barAnimatedHidden: false,
                barAnimatedSize: '2',
                barAnimatedColor: '#000',
                tabsContainerStyle: {
                    margin: '0px'
                },
                tabsTextStyle: {
                    padding: '3px'
                },
                tabBlockedStyle: {
                    color: '#0f0f0f'
                },
                tabSelectedStyle: {
                    backgroundColor: 'cyan',
                    color: '#000'
                },
                tabsStyle: {
                    width: '50%'
                },
                tabs: {
                    'Visualização': {
                        block: true,
                        selected: true
                    },
                    'Metadados': {
                        block: true
                    }
                }
            }
        };
    },
    methods: {
    }
};
</script>
