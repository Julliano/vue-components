<style scoped>
    .vue-star-rating-star {
        display: inline-block;
    }
    .vue-star-rating-pointer {
        cursor: pointer;
    }
    .vue-star-rating {
        display: flex;
        align-items: center;
    }
    .vue-star-rating-inline {
        display: inline-flex;
    }component
    .vue-star-rating-rating-text {
        margin-top: 7px;
        margin-left: 7px;
    }
    .inline{
        display: inline-flex;
    }
    .grid{
        display: grid;
        margin-right: 10px;
    }
</style>

<template>
    <div>
        <div class="inline">
            <div class="grid">
                <label> Rating: </label>
                <select v-model.number="rating">
                    <option value="0"> 0 </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                </select>
            </div>
            <div class="grid">
                <label> Increment: </label>
                <select v-model.number="increment">
                    <option value="0.1"> 0.1 </option>
                    <option value="0.2"> 0.2 </option>
                    <option value="0.3"> 0.3 </option>
                    <option value="0.4"> 0.4 </option>
                    <option value="0.5"> 0.5 </option>
                    <option value="0.6"> 0.6 </option>
                    <option value="0.7"> 0.7 </option>
                    <option value="0.8"> 0.8 </option>                
                    <option value="0.9"> 0.9 </option>
                    <option value="1"> 1 </option>                
                </select>
            </div>
            <div class="grid">
                <label> Max Rating: </label>
                <input v-model.number="maxRating" type="number" min="1" max="100">
            </div>
            <div class="grid">
                <label> Active Color: </label>
                <input v-model="activeColor">
            </div>
            <div class="grid">
                <label> Read only: </label>
                <div class="inline">
                    <input type="radio" v-model="readOnly" :value="true"> True<br>
                    <input type="radio" v-model="readOnly" :value="false"> False<br>
                </div>
            </div>
            <div class="grid">
                <label> Show Rating: </label>
                <div class="inline">
                    <input type="radio" v-model="showRating" :value="true"> True<br>
                    <input type="radio" v-model="showRating" :value="false"> False<br>
                </div>
            </div>
        </div>
        <dgt-star-rating :increment="increment" :rating="rating" :active-color="activeColor"
        :max-rating="maxRating" :read-only="readOnly" :show-rating="showRating"></dgt-star-rating>
    </div>
</template>

<script type="text/javascript">
    import dgtStarRating from '../components/dgt-star-rating.vue';

    export default {
        name: 'dgtStarRatingView',
        components: {
            dgtStarRating
        },
        data() {
            return {
                increment: 1,
                rating: 0,
                activeColor: '#ffd055',
                maxRating: 5,
                readOnly: false,
                showRating: false,
                step: 0,
                fillLevel: [],
                currentRating: 0,
                selectedRating: 0,
                ratingSelected: false
            };
        }
    };
</script>