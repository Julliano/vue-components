<style lang="scss" scoped>
.vue-star-rating-inline {
  display: inline-flex;
}
.vue-star-rating {
  display: flex;
  align-items: center;
}
.vue-star-rating-pointer {
  cursor: pointer;
}
.vue-star-rating-star {
  display: inline-block;
  margin-right: var(--dgt-star-margin-right, 0px);
}
.vue-star-rating-rating-text {
  margin-top: 7px;
  margin-left: 7px;
}
</style>

<template>
    <div :class="{'vue-star-rating-inline': inline}">
        <div @mouseleave="resetRating" class="vue-star-rating">
            <span v-for="(n, index) in maxRating" :key="n" :class="['star-'+index,'vue-star-rating-pointer','vue-star-rating-star']">
              <star :fill="fillLevel[n-1]" :size="starSize" :points="starPoints" :star-id="n" :step="step" 
              :active-color="activeColor" :inactive-color="inactiveColor" :border-color="borderColor" :border-width="borderWidth" 
              @star-selected="setRating($event, true)" @star-mouse-move="setRating"></star>
            </span>
            <span v-if="showRating" :class="['vue-star-rating-rating-text']"> {{formattedRating}}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
    import star from './star.vue';

    export default {
        name: 'dgtStarRating',
        model: {
            prop: 'rating',
            event: 'rating-selected'
        },
        props: {
            increment: {
                type: Number,
                default: 1
            },
            rating: {
                type: Number,
                default: 0
            },
            roundStartRating: {
                type: Boolean,
                default: true
            },
            activeColor: {
                type: String,
                default: '#ffd055'
            },
            inactiveColor: {
                type: String,
                default: '#d8d8d8'
            },
            maxRating: {
                type: Number,
                default: 5
            },
            readOnly: {
                type: Boolean,
                default: false
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
            showRating: {
                type: Boolean,
                default: true
            },
            inline: {
                type: Boolean,
                default: false
            },
            borderColor: {
                type: String,
                default: '#999'
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
        components: {
            star
        },
        data() {
            return {
                step: 0,
                fillLevel: [],
                currentRating: 0,
                selectedRating: 0,
                ratingSelected: false
            };
        },
        computed: {
            formattedRating() {
                return this.fixedPoints ?
                    this.currentRating : this.currentRating.toFixed(1);
            },
            shouldRound() {
                return this.ratingSelected || this.roundStartRating;
            }
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
            createStars(round = true) {
                if (round) {
                    this.round();
                }
                for (let i = 0; i < this.maxRating; i++) {
                    let level = 0;
                    if (i < this.currentRating) {
                        level = (this.currentRating - i > 1) ? 100 : (this.currentRating - i) * 100;
                    }
                    this.$set(this.fillLevel, i, Math.round(level));
                }
            },
            round() {
                let inv = 1.0 / this.increment;
                this.currentRating = Math.min(this.maxRating,
                    Math.ceil(this.currentRating * inv) / inv);
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
