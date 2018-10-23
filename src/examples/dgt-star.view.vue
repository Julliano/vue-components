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
    <div id="vue-star-rating" :class="{'vue-star-rating-inline': inline}">
        <div class="inline">
            <div class="grid">
                <label> Rating: </label>
                <select v-model="rating">
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
                <select v-model="increment">
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
        <div @mouseleave="resetRating" class="vue-star-rating">
            <span v-for="(n, index) in maxRating" :key="n" :class="['star-'+index,'vue-star-rating-pointer','vue-star-rating-star']" :style="{'margin-right': margin + 'px'}">
              <star :fill="fillLevel[n-1]" :size="starSize" :points="starPoints" :star-id="n" :step="step" :active-color="activeColor" :inactive-color="inactiveColor" :border-color="borderColor" :border-width="borderWidth" @star-selected="setRating($event, true)" @star-mouse-move="setRating"></star>
            </span>
            <span v-if="showRating" :class="['vue-star-rating-rating-text']"> {{formattedRating}}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
import star from '../components/star.vue';

export default {
    name: 'dgtStarRating',
    components: {
        star
    },
    model: {
        prop: 'rating',
        event: 'rating-selected'
    },
    props: {
        roundStartRating: {
            type: Boolean,
            default: true
        },
        borderColor: {
            type: String,
            default: '#999'
        },
        inactiveColor: {
            type: String,
            default: '#d8d8d8'
        },
        starPoints: {
            type: Array,
            default() {
                return [];
            }
        },
        starSize: {
            type: Number,
            default: 50
        },
        inline: {
            type: Boolean,
            default: false
        },
        borderWidth: {
            type: Number,
            default: 0
        },
        padding: {
            type: Number,
            default: 0
        },
        fixedPoints: {
            type: Number,
            default: null
        }
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
    },
    created() {
        this.step = this.increment * 100;
        this.currentRating = this.rating;
        this.selectedRating = this.currentRating;
        this.createStars(this.roundStartRating);
    },
    methods: {
        setRating($event, persist) {
            if (!this.readOnly) {
                const position = $event.position / 100;
                this.currentRating = (($event.id + position) - 1).toFixed(2);
                this.currentRating = (this.currentRating > this.maxRating) ?
                    this.maxRating : this.currentRating;
                this.createStars();
                if (persist) {
                    this.selectedRating = this.currentRating;
                    // informa o component pai que o rating foi alterado;
                    this.$emit('rating-selected', this.selectedRating);
                    this.ratingSelected = true;
                }
            }
        },
        resetRating() {
            if (!this.readOnly) {
                this.currentRating = this.selectedRating;
                this.createStars(this.shouldRound);
            }
        },
        createStars() {
            this.round();
            for (var i = 0; i < this.maxRating; i++) {
                let level = 0;
                if (i < this.currentRating) {
                    level = (this.currentRating - i > 1) ? 100 : (this.currentRating - i) * 100;
                }
                this.$set(this.fillLevel, i, Math.round(level));
            }
        },
        round() {
            var inv = 1.0 / this.increment;
            this.currentRating = Math.min(this.maxRating,
                Math.ceil(this.currentRating * inv) / inv);
        }
    },
    computed: {
        formattedRating() {
            return (this.fixedPoints === null) ? this.currentRating :
                this.currentRating.toFixed(this.fixedPoints);
        },
        shouldRound() {
            return this.ratingSelected || this.roundStartRating;
        },
        margin() {
            return this.padding + this.borderWidth;
        }
    },
    watch: {
        rating(val) {
            this.currentRating = val;
            this.selectedRating = val;
            this.createStars();
        }
    }
};
</script>