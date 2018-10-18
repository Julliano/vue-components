<style lang="scss" scoped>
    #dgt-midia{
        height: 100%;
        width: 100%;
        img{
            height: auto;
            width: 100%;
        }
    }
</style>

<template>
    <div id="dgt-midia"> 
        <img :src="data.midia" />
        <slot name="metadados" :data="data"></slot>
    </div>
</template>

<script>
export default {
    name: 'dgtMidia',
    props: {    
        data: {}
    },
    data() {
        return {
        };
    }
};
</Script>
