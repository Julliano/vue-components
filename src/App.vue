<style lang="scss" scoped>
.dgt-container {
    ::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #F5F5F5;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(85, 85, 85, 0.493);
}

}
.showcase {
  margin-left: 20px;
  h3 {
    margin: 25px 0px 5px;
  }
}
hr {
  margin: 2em 0;
}
</style>

<template>
    <div class="dgt-container light padding">
        <nav>
            <a href="/#/chat/">Go to Chat</a>
        </nav>
        <h3>Dgt-Collapse</h3>
        <dgt-collapse-view></dgt-collapse-view>
        <hr style="clear: both;">
        <h3>Dgt-Thumbnail</h3>
        <dgt-thumbnail-view></dgt-thumbnail-view>
        <hr style="clear: both;">
        <h3>Dgt-Switch</h3>
        <dgt-switch-view></dgt-switch-view>
        <h3>Dgt-Toast</h3>
        <dgt-toast-view></dgt-toast-view>
        <hr style="clear: both;">
        <h3>Dgt-Layout</h3>
        <dgt-layout-view></dgt-layout-view>
        <hr style="clear: both;">
        <h3>Dgt-Star</h3>
        <dgt-star-view></dgt-star-view>
        <hr style="clear: both;">
        <h3>Dgt-Tag-Input</h3>
        <dgt-tag-input-view></dgt-tag-input-view>
        <hr style="clear: both;">
        <h3>Dgt-Tag-Area</h3>
        <dgt-tag-area-view></dgt-tag-area-view>
        <hr style="clear: both;">
        <h3>Dgt-Upload-File</h3>
        <dgt-upload-file-view></dgt-upload-file-view>
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
        <h3>Dgt-Infinite-scroll</h3>
        <dgt-infinite-scroll-view />
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
import dgtTabsView from './examples/dgt-tabs.view';
import dgtToastView from './examples/dgt-toast.view';
import DgtSwitchView from './examples/dgt-switch.view';
import dgtLayoutView from './examples/dgt-layout.view';
import dgtTagAreaView from './examples/dgt-tag-area.view';
import dgtCollapseView from './examples/dgt-collapse.view';
import dgtTagInputView from './examples/dgt-tag-input.view';
import dgtThumbnailView from './examples/dgt-thumbnail.view';
import dgtPaginationView from './examples/dgt-pagination.view';
import dgtUploadFileView from './examples/dgt-upload-file.view';
import dgtAutocompleteView from './examples/dgt-autocomplete.view';
import dgtComponentGridView from './examples/dgt-component-grid.view';
import dgtInfiniteScrollView from './examples/dgt-infinite-scroll.view.vue';

export default {
    name: 'app',
    components: {
        dgtStarView,
        dgtGridView,
        dgtCardView,
        dgtListView,
        dgtTabsView,
        dgtToastView,
        DgtSwitchView,
        dgtLayoutView,
        dgtTagAreaView,
        dgtTagInputView,
        dgtCollapseView,
        dgtThumbnailView,
        dgtUploadFileView,
        dgtPaginationView,
        dgtAutocompleteView,
        dgtComponentGridView,
        dgtInfiniteScrollView
    }
};
</script>
