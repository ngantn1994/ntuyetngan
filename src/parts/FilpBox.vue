<template>
  <div id="flip-box-container" class="flip-box-container">
    <div :id="`normal-state-${uniqueIndex}`" class="normal-state">
      {{normalText}}
    </div>
    <div :id="`hover-state-${uniqueIndex}`" class="hover-state">
      {{hoverText}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlipBox',
  props: {
    normalText: {
      type: String,
      required: true,
    },
    hoverText: {
      type: String,
      required: true,
    },
    uniqueIndex: {
      type: Number,
      required: true,
    },
    data() {
      return {
        id: null,
      };
    },
    mounted() {
      /* eslint no-underscore-dangle: 0 */
      this.id = this._uid;
    },
  },
  mounted() {
    const container = document.getElementById('flip-box-container');
    const normalState = document.getElementById(`normal-state-${this.uniqueIndex}`);
    const hoverState = document.getElementById(`hover-state-${this.uniqueIndex}`);
    const halfContentHeight = Number(getComputedStyle(container).height.slice(0, -2)) / 2;

    normalState.style.transformOrigin = `center center -${halfContentHeight}px`;
    hoverState.style.transformOrigin = `center center -${halfContentHeight}px`;
  },
};
</script>

<style scoped>
.flip-box-container {
  font-weight: bold;
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  text-align: center;
}
.normal-state, .hover-state {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 500ms ease-in-out;
  perspective: 1000px;
}
.normal-state {
  background-color: #212121;
  color:#FFF;
  transform: rotateX(0deg);
  z-index: 2;
}
.hover-state {
  background-color: #FFF;
  color:#212121;
  transform: rotateX(-90deg);
  z-index: 1;
}
.flip-box-container:hover .normal-state {
    transform: rotateX(90deg);
}
.flip-box-container:hover .hover-state {
    z-index: 3;
    transform: rotateX(0deg);
    cursor: text;
}
</style>
