<template>
  <div class="nav-container" :style="navContainerStyle"
    @mouseover="isOnHover = true" @mouseleave="isOnHover=false">
    <div :style="normalBackgroundStyle" :class="{'background-box': true,
      'background-box-hide': isOnHover, 'background-box-display': !isOnHover }"></div>
    <div :style="hoverBackgroundStyle" :class="{'background-box': true,
      'background-box-display': isOnHover, 'background-box-hide': !isOnHover }"></div>
    <div :class="{ 'hover-box': true,
      'hover-box-display': isOnHover, 'hover-box-hide': !isOnHover }"></div>
  </div>
</template>

<script>
function getBackgroundAttribute(url, xPos, yPos) {
  return {
    'background-image': `url("${url}")`,
    'background-position': `${xPos} ${yPos}`,
  };
}

export default {
  name: 'NavText',
  props: {
    normalUrl: {
      type: String,
      required: true,
    },
    hoverUrl: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    positionX: {
      type: String,
      default: '0px',
    },
    positionY: {
      type: String,
      default: '0px',
    },
  },
  data() {
    return {
      isOnHover: false,
    };
  },
  computed: {
    navContainerStyle() {
      return `width: ${this.width}`;
    },
    normalBackgroundStyle() {
      return getBackgroundAttribute(this.normalUrl, this.positionX, this.positionY);
    },
    hoverBackgroundStyle() {
      return getBackgroundAttribute(this.hoverUrl, this.positionX, this.positionY);
    },
  },
};
</script>

<style scoped>
.nav-container {
  background: #33B4D7;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.background-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10001;
  transition: all 200ms ease-in-out;
  background-repeat: no-repeat;
}
.background-box-hide {
  visibility: hidden;
}
.background-box-display {
  visibility: visible;
}
.hover-box {
  width: 100%;
  height: 100%;
  background: #212121;
  position: absolute;
  left: 0px;
  transition: all 200ms ease-in-out;
}
.hover-box-hide {
  top: 100%;
}
.hover-box-display {
  top: 0px;
}
</style>
