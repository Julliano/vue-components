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
        <h3> Dgt-Card-List </h3>
        <dgt-card-list></dgt-card-list>
        <hr>
        <h3> Dgt-Card-Grid </h3>
        <dgt-card-grid></dgt-card-grid>
    </div>
</template>

<script>

import dgtStar from './examples/dgt-star.view';
import dgtGrid from './examples/dgt-grid.view';
import dgtCard from './examples/dgt-card.view';
import dgtCardList from './examples/dgt-card-list.view';
import dgtCardGrid from './examples/dgt-card-grid.view';
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
        dgtCardList,
        dgtCardGrid,
        dgtTagInput,
        dgtAutocomplete
    }
};
</script>
