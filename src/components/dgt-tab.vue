<style lang="scss" scoped>
.tab-content{
    display:none;
    &[active]{
        display: block;
    }
}

</style>

<template>
    <div class="tab-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'dgtTab'
    };
</script>
