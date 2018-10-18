<style lang="scss" scoped>
    .dgt-email-component {
        overflow-y: auto;
        font-size: 12px;
        margin-bottom: -100%;
        hr {
            display: block;
            -webkit-margin-before: 0px;
            -webkit-margin-after: 0px;
            border-top: 2px solid #cccccc59;
            margin-top: 5px;
        }
        .content{
            padding: 0px 20px;
        }
        &.showEmail {
            margin-bottom: 0;
            height: 350px;
        }
        .obj-itens {
            padding-top: 7px;
            padding-bottom: 7px;
            color: black;
            label {
                font-size: 12px;
                font-weight: 600;
                color: #8c8c8c;
                text-transform: uppercase;
            }
            span {
                margin-left: 5px;
                font-size: 12px;
            }
        }
        .attachment {
            display: flex;
            i {
                font-size: 16px;
                color: #8c8c8c;
            }
            ul {
                display: flex;
                margin: 1px;
                -webkit-padding-start: 5px;
                list-style-type: none;
                li {
                    margin-left: 5px;
                }
            }
        }
        .emailBody {
            margin: 25px 0px;
            line-height: 20px;
            text-align: justify;
        }
    }
</style>

<template>
    <dgt-tabs :data="dataTabs">
        <template slot="tabContent" slot-scope="slotProps">
            <div v-if="slotProps.selectedTab === 'Visualização'" class="dgt-email-component">
                <div class="obj-itens content" v-for="item in columns" :key="item">
                    <label>{{item}}:</label>
                    <span class="email-title">{{data[item] || '-'}}</span>
                </div>
                <div class="attachment obj-itens content" v-if="data.attach_file">
                    <i class="material-icons">attachment</i>:
                    <ul>
                        <li v-for="file in data.files" :key="file"><a href="url"> {{file}}</a>;</li>
                    </ul>
                </div>
                <hr />
                <div class="emailBody content">
                    {{data.body}}
                </div>
            </div>
            <div v-else>
                <dgt-metadados :data="data" :columns="columns"></dgt-metadados>
            </div>
        </template>
    </dgt-tabs>
</template>

<script>
import dgtTabs from '../dgt-tabs/dgt-tabs.vue';
import dgtMetadados from '../dgt-metadados/dgt-metadados.vue';
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
