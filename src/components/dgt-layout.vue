<style lang="scss" scoped>
  .dgt-resize {
    display: grid;
    grid-template-columns: auto 4px;
    .horizontal-grip-area {
      width: 4px;
      height: 100%;
      cursor: col-resize;
      background: #BDBDBD;
    }
  }
</style>
<template>
<section class="dgt-resize">
  <div class="dgt-resize-content">
    <slot></slot>
  </div>
  <div class="horizontal-grip-area" @mousedown="resize" v-if="horizontalResizable"></div>
</section>
</template>
<script>
  export default {
      name: 'dgtLayout',
      props: {
          horizontalResizable: {
              type: Boolean,
              default: false
          }
      },
      mounted() {
          this.contentArea = this.$el;
      },
      methods: {
          resize() {
              const bounds = this.contentArea.getBoundingClientRect();
              let mouseMove = e => {
                  e.preventDefault();
                  const x = e.clientX - bounds.right;
                  const newWidth = bounds.width + x;
                  this.contentArea.style.flexBasis =  `${newWidth}px`;
              };
              document.addEventListener('mousemove', mouseMove);
              let i = 0;
              document.addEventListener(
                  'mouseup',
                  () => {
                      if (i === 0) {
                          document.removeEventListener('mousemove', mouseMove, false);
                      }
                      i++;
                  },
                  false
              );

          }
      }
  };
</script>
