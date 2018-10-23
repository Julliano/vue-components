<style lang="scss" scoped>
    .dgt-component-grid {
        padding: 10px;
        h4, small {
            margin: 0;
            padding: 1px;
        }
        .cards {
            flex-wrap: wrap;
            display: flex;
        }
    }
</style>

<template>
    <div class="dgt-component-grid">
        <h4 v-if="header">{{ header }}</h4>
        <small v-if="subHeader">{{ subHeader }}</small>
        <slot name="main-slot" :grid="grid"></slot>
    </div>
</template>
<script>
    export default {
        name: 'dgtComponentGrid',
        props: {
            grid: Array,
            header: String,
            subHeader: String
        },
        components: {
        }
    };
</Script>