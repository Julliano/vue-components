<template>
    <div class="dgt-filter-component component">
        <div>
            <p class="filter-title">{{data.who}}</p>
            <slot :name="key" v-for="key in data.sections"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dgtFilter',
    props: {
        data: {}
    },
    data() {
        return {};
    },
    methods: {}
};
</script>
