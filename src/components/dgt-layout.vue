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
      methods: {
          resize() {
              let mouseMove = e => {
                  e.preventDefault();
                  const width = e.clientX - this.$el.offsetLeft;
                  this.$el.style.flexBasis =  `${width}px`;
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
