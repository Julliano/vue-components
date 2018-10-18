<style lang="scss" scoped>
    #dgt-metadados-component{
        width: 100%;
        .obj-itens{
            display: flex;
            word-break: break-word;
            background: white;
            padding: 10px;
            border-bottom: 2px solid #8080803d;
            color: black;
            .label{
                word-break: break-word;
                width: 40%;
            }
            .content{
                width: 60%;
            }
        }
    }
</style>

<template>
    <div id="dgt-metadados-component">
        <div v-if="columns">
            <div class="obj-itens" v-for="item in columns" :key="item">
                <div class="label">
                    <label>{{item}}</label>
                </div>
                <div class="content">
                    <span>{{data[item] || '-'}}</span>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="obj-itens" v-for="(item, key) in data" :key="key">
                <div class="label">
                    <label>{{key}}</label>
                </div>
                <div class="content">
                    <span>{{item || '-'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dgtMetadados',
    props: {    
        data: {},
        columns: Array
    },
    data() {
        return {
        };
    }
};
</Script>
