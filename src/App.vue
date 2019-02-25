<style lang="scss" scoped>
.showcase {
  margin-left: 20px;
  h3 {
    margin: 25px 0px 5px;
  }
}
</style>

<template>
  <div class="dgt-container light padding">
        <h3>Dgt-Thumbnail</h3>
      <dgt-thumbnail-view></dgt-thumbnail-view>
        <h3>Dgt-Toast</h3>
        <dgt-toast-view></dgt-toast-view>
        <h3>Dgt-Layout</h3>
        <dgt-layout-view></dgt-layout-view>
        <h3>Dgt-Star</h3>
        <dgt-star-view></dgt-star-view>
        <hr style="clear: both;">
        <h3>Dgt-Tag-Input</h3>
        <dgt-tag-input-view></dgt-tag-input-view>
        <hr style="clear: both;">
        <h3>Dgt-Autocomplete</h3>
        <dgt-autocomplete-view></dgt-autocomplete-view>
        <hr style="clear: both;">
        <h3>Dgt-Tabs</h3>
        <dgt-tabs-view></dgt-tabs-view>
        <hr style="clear: both;">
        <h3>Dgt-Grid</h3>
        <dgt-grid-view></dgt-grid-view>
        <hr style="clear: both;">
        <h3>Dgt-Card</h3>
        <dgt-card-view></dgt-card-view>
        <hr style="clear: both;">
        <h3>Dgt-List</h3>
        <dgt-list-view></dgt-list-view>
        <hr style="clear: both;">
        <h3>Dgt-Component-Grid</h3>
        <dgt-component-grid-view></dgt-component-grid-view>
        <hr style="clear: both;">
        <h3>Dgt-Pagination</h3>
        <dgt-pagination-view></dgt-pagination-view>
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
import dgtTabsView from './examples/dgt-tabs.view';
import dgtPaginationView from './examples/dgt-pagination.view';
import dgtLayoutView from './examples/dgt-layout.view';
import dgtToastView from './examples/dgt-toast.view';
import dgtThumbnailView from './examples/dgt-thumbnail.view';

export default {
    name: 'app',
    components: {
        dgtStarView,
        dgtGridView,
        dgtCardView,
        dgtListView,
        dgtTagInputView,
        dgtAutocompleteView,
        dgtComponentGridView,
        dgtTabsView,
        dgtPaginationView,
        dgtLayoutView,
        dgtToastView,
        dgtThumbnailView
    }
};
</script>
