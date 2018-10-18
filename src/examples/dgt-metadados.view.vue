<template>
    <div id="dgt-metadados-component">
        <div class="obj-itens" v-for="item in columns" :key="item">
            <label>{{item}}</label>
            <span>{{data[item] || '-'}}</span>
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
