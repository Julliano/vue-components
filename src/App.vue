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
        <dgt-star-view></dgt-star-view>
        <hr>
        <h3> Dgt-Tag-Input </h3>
        <dgt-tag-input-view></dgt-tag-input-view>
        <hr>
        <h3> Dgt-Autocomplete </h3>
        <dgt-autocomplete-view></dgt-autocomplete-view>
        <hr>
        <h3> Dgt-Grid </h3>
        <dgt-grid-view></dgt-grid-view>
        <hr>
        <h3> Dgt-Card </h3>
        <dgt-card-view></dgt-card-view>
        <hr>
        <h3> Dgt-List </h3>
        <dgt-list-view></dgt-list-view>
        <hr>
        <h3> Dgt-Component-Grid </h3>
        <dgt-component-grid-view></dgt-component-grid-view>
    </div>
</template>

<script>

import dgtStarView from './examples/dgt-star.view';
import dgtGridView from './examples/dgt-grid.view';
import dgtCardView from './examples/dgt-card.view';
import dgtListView from './examples/dgt-list.view';
import dgtTagInputView from './examples/dgt-tag-input.view';
import dgtAutocompleteView from './examples/dgt-autocomplete.view';
import dgtComponentGridView from './examples/dgt-component-grid.view';


export default {
    name: 'app',
    components: {
        dgtStarView,
        dgtGridView,
        dgtCardView,
        dgtListView,
        dgtTagInputView,
        dgtAutocompleteView,
        dgtComponentGridView
    }
};
</script>
