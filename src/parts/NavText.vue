<template>
  <div class="nav-container" @mouseover="isOnHover = true" @mouseleave="isOnHover=false">
    <div :class="{'text-box': true,
      'text-color-hover': isOnHover, 'text-color-normal': !isOnHover }">{{text}}</div>
    <div :class="{ 'hover-box': true,
      'hover-box-display': isOnHover, 'hover-box-hide': !isOnHover }"></div>
  </div>
</template>

<script>
export default {
  name: 'NavText',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOnHover: false,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

.nav-container {
  background: #33B4D7;
  width: 200px;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  text-align: center;
  font-family: 'Abril Fatface', cursive;
  font-size: 20px;
  transition: all 200ms ease-in-out;
}
.text-color-normal {
  color: #212121;
}
.text-color-hover {
  color: #FFF;
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
