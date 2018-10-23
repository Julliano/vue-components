<style lang="scss" scoped>
    .showcase{
        margin-left: 20px;
        h3{
            margin: 25px 0px 5px;
        }
    }
</style>

<template>
    <div class="showcase">
        <h3> Dgt-Star </h3>
        <dgt-star></dgt-star>
        <hr>
        <h3> Dgt-Tag-Input </h3>
        <dgt-tag-input></dgt-tag-input>
        <hr>
        <h3> Dgt-Autocomplete </h3>
        <dgt-autocomplete></dgt-autocomplete>
        <hr>
        <h3> Dgt-Grid </h3>
        <dgt-grid></dgt-grid>
        <hr>
        <h3> Dgt-Card </h3>
        <dgt-card></dgt-card>
        <hr>
        <h3> Dgt-List </h3>
        <dgt-list></dgt-list>
        <hr>
        <h3> Dgt-Component-Grid </h3>
        <dgt-component-grid></dgt-component-grid>
    </div>
</template>

<script>

import dgtStar from './examples/dgt-star.view';
import dgtGrid from './examples/dgt-grid.view';
import dgtCard from './examples/dgt-card.view';
import dgtList from './examples/dgt-list.view';
import dgtComponentGrid from './examples/dgt-component-grid.view';
import dgtTagInput from './examples/dgt-tag-input.view';
import dgtAutocomplete from './examples/dgt-autocomplete.view';


export default {
    name: 'app',
    data() {
        return {
        };
    },
    methods: {
    },
    components: {
        dgtStar,
        dgtGrid,
        dgtCard,
        dgtList,
        dgtTagInput,
        dgtAutocomplete,
        dgtComponentGrid
    }
};
</script>
