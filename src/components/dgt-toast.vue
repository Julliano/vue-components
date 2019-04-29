<style lang="scss" scoped>
    @keyframes DefaultAnimation {
        0% {
            transform: translate(-50%, -100%);
            top:0;
            margin-top: -10px;
            opacity: 0;
        }
        100% {
            transform: translate(-50%, 0%);
        }
    }
    .dgt-toast {
        position: fixed;
        animation:  DefaultAnimation .2s ease-out;
        animation-play-state: paused;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        display: none;

        &.msg-warn,
        &.msg-info,
        &.msg-error,
        &.msg-success {
            display: block;
        }
    }
</style>
<template>
    <div class="dgt-toast"></div>
</template>
<script>
    export default {
        name: 'dgtToast',
        data() {
            return {
                queue: [],
                timeoutDefault: 3000
            };
        },
        mounted() {
            this.$el.addEventListener('animationiteration', this.onAnimationIteration);
        },
        methods: {
            showMessage(className, content, timeout = this.timeoutDefault) {
                this.queue.push({
                    className,
                    content,
                    timeout
                });
                if (this.showing || this.current) {
                    return;
                }
                this.show(this.queue.shift());
            },
            createToastContent() {
                const props = this.current;
                if (props.content.nodeType === Node.ELEMENT_NODE) {
                    this.$el.innerHTML = '';
                    this.$el.appendChild(props.content);
                } else {
                    this.$el.innerHTML = props.content;
                }
                this.$el.classList.add(props.className);
            },
            onAnimationIteration() {
                this.$el.style.animationPlayState = 'paused';
                if (this.state === 'showing') {
                    setTimeout(this.hide, this.current.timeout);
                } else if (this.state === 'hiding') {
                    this.onMessageHidden();
                }
            },
            show(props) {
                this.showing = true;
                this.current = props;
                this.createToastContent();
                this.state = 'showing';
                this.$el.setAttribute('visible', 'true');
                this.$el.style.animationPlayState = 'running';
            },
            onMessageHidden() {
                this.$el.classList.remove(this.current.className);
                this.$el.setAttribute('visible', 'false');
                this.$el.removeAttribute('visible');
                this.showing = false;
                this.current = null;
                this.$el.innerHTML = '';
                this.showNext();
            },
            hide() {
                this.state = 'hiding';
                this.$el.style.animationPlayState = 'running';
            },
            showNext() {
                if (this.queue.length) {
                    this.show(this.queue.shift());
                }
            }
        }
    };
</script>
