<style lang="scss" scoped>
  .adc-audio-message {
    background-color: white;
	height: var(--adc-audio-message-height, 45px);
	min-height: 45px;
    width: var(--adc-audio-message-width, 200px);
    min-width: 200px;
    .audio.green-audio-player {
      width: 100%;
      height: 100%;
      min-height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px;
      user-select: none;
      -webkit-user-select: none;
      background-color: #fff;
      position: relative;
      padding-left:  var(--adc-audio-message-padding-left, 10px);
      padding-right:  var(--adc-audio-message-padding-right, 10px);
      .play-pause-btn {
        display: none;
        cursor: pointer;
        i {
          font-size: 2.5em;
          color: #757575;
        }
      }
      .spinner {
          width: 18px;
          height: 18px;
          background-image: url('../assets/images/loading.png');
          background-size: cover;
          background-repeat: no-repeat;
          animation: spin 0.4s linear infinite;
      }
      .slider {
        flex-grow: 1;
        background-color: #D8D8D8;
        cursor: pointer;
        width: 100%;
        position: relative;
        .progress {
          background-color: var(--adc-audio-text-color, #418bff);
          border-radius: inherit;
          position: absolute;
          pointer-events: none;
          .pin {
            height: 16px;
            width: 16px;
            border-radius: 8px;
            background-color: var(--adc-audio-text-color, #418bff);
            position: absolute;
            pointer-events: all;
            box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.32);
          }
        }
      }
      .controls {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 18px;
        color: #55606E;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 15px;
        width: 90%;
        .timers {
          margin-top: 3%;
          margin-left: -4px;
          width: 100%;
          display: flex;
          font-size: 0.7rem;
          justify-content: space-between;
          .total-time {
            display: none;
		  }
		  .time {
			position: absolute;
			right: 0;
			bottom: 0;
			margin-bottom: -6px;
		  }
        }
        .slider {
          border-radius: 2px;
          height: 5px;
		  align-self: self-end;
		  margin-top: 22px;
          .progress {
            width: 0;
            height: 5px;
            .pin {
              right: -8px;
              top: -6px;
            }
          }
        }
        span {
          cursor: default;
        }
      }
    }
    svg, img {
      display: block;
    }
    @keyframes spin {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(1turn);
    }
  }
}

</style>

<template>
    <div class="adc-audio-message" :id="_id" @click="clicked">
        <div class="audio green-audio-player">
            <div class="loading">
                <div class="spinner"></div>
            </div>
            <div class="play-pause-btn" @click="togglePlay()">
                <i class="mdi mdi-pause" v-if="!paused"></i>
                <i class="mdi mdi-play" v-else></i>
            </div>

            <div class="controls">
                <div class="slider" @click="rewind">
                    <div class="progress">
                        <div class="pin" id="progress-pin"></div>
                    </div>
                </div>
                <div class="timers">
                    <span class="current-time"> 0:00 </span>
                    <span class="total-time"> {{ duration }} </span>
                    <span class="time"> {{ time }} </span>
                </div>
            </div>

            <audio>
                <source :src="audioUrl">
            </audio>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdcAudioMessage',
        props: {
            _id: {
                type: String,
                default: null
            },
            duration: String,
            audioUrl: String,
            time: String
        },
        data() {
            return {
                audioPlayer: null,
                playpauseBtn: null,
                loading: null,
                progress: null,
                sliders: null,
                player: null,
                currentTime: null,
                totalTime: null,
                speaker: null,
                draggableClasses: null,
                currentlyDragged: null,
                paused: true
            };
        },
        mounted() {
            this.mountVariables();
            this.player.addEventListener('timeupdate', this.updateProgress);
            this.player.addEventListener('loadedmetadata', () => {
                this.totalTime.textContent = this.formatTime(this.player.duration);
            });
            this.player.addEventListener('canplay', this.makePlay);
            this.player.addEventListener('ended', function() {
                this.paused = true;
                this.player.currentTime = 0;
            }.bind(this));

            this.sliders.forEach(slider => {
                slider.addEventListener('click', document['rewind']);
            });
        },
        methods: {
            clicked() {
                return this.$emit('audio-clicked', this['_id']);
            },
            mountVariables() {
                this.audioPlayer = this.$el.querySelector(`#${this['_id']} .green-audio-player`);
                this.playpauseBtn = this.audioPlayer.querySelector('.play-pause-btn');
                this.loading = this.audioPlayer.querySelector('.loading');
                this.progress = this.audioPlayer.querySelector('.progress');
                this.sliders = this.audioPlayer.querySelectorAll('.slider');
                this.player = this.audioPlayer.querySelector('audio');
                this.currentTime = this.audioPlayer.querySelector('.current-time');
                this.totalTime = this.audioPlayer.querySelector('.total-time');
                this.speaker = this.audioPlayer.querySelector('#speaker');
                this.draggableClasses = ['pin'];
            },
            isDraggable(el) {
                let canDrag = false;
                let classes = Array.from(el.classList);
                this.draggableClasses.forEach(draggable => {
                    if (classes.indexOf(draggable) !== -1) canDrag = true;
                });
                return canDrag;
            },
            inRange(event) {
                let rangeBox = this.getRangeBox(event);
                let min = rangeBox.offsetLeft;
                let absoluteLeft = rangeBox.getBoundingClientRect().left;
                let max = min + (rangeBox.offsetWidth + absoluteLeft);
                if (event.clientX < min || event.clientX > max) return false;
                return true;
            },
            updateProgress() {
                var current = this.player.currentTime;
                var percent = (current / this.player.duration) * 100;
                this.progress.style.width = `${percent}%`;
                this.currentTime.textContent = this.formatTime(current);
            },
            getRangeBox(event) {
                let rangeBox = event.target;
                let el = this.currentlyDragged;
                if (event.type === 'click' && this.isDraggable(event.target)) {
                    rangeBox = event.target.parentElement.parentElement;
                }
                if (event.type === 'mousemove') {
                    rangeBox = el.parentElement.parentElement;
                }
                return rangeBox;
            },
            getCoefficient(event) {
                let slider = this.getRangeBox(event);
                let K = 0;
                let absoluteLeft = slider.getBoundingClientRect().left;
                let offsetX = (event.clientX - absoluteLeft);
                let width = slider.clientWidth;
                K = offsetX / width;
                return K;
            },
            rewind(event) {
                if (this.inRange(event)) {
                    this.player.currentTime = this.player.duration * this.getCoefficient(event);
                }
            },
            formatTime(time) {
                var min = Math.floor(time / 60);
                var sec = Math.floor(time % 60);
                return `${min}:${((sec < 10) ? (`0${sec}`) : sec)}`;
            },
            togglePlay() {
                this.paused = !this.paused;
                this.player.paused ? this.player.play() : this.player.pause();
            },
            makePlay() {
                this.playpauseBtn.style.display = 'block';
                this.loading.style.display = 'none';
            }
        }
    };
</script>
