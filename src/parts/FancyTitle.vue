<template>
  <div class="fancy-title-container">
    <div class="fancy-title-main">
      {{text}}
    </div>
    <div class="fancy-decoration-left-top"></div>
    <div class="fancy-decoration-left-bottom"></div>
    <div class="fancy-decoration-left-square"></div>
    <div class="fancy-decoration-left-triangle"></div>
    <div class="fancy-decoration-right-top"></div>
    <div class="fancy-decoration-right-bottom"></div>
    <div class="fancy-decoration-right-square"></div>
    <div class="fancy-decoration-right-triangle"></div>
  </div>
</template>

<script>
export default {
  name: 'FancyTitle',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.fancy-title.container {
  position: relative;
}
.fancy-title-main {
  background-color: #212121;
  color: #FFF;
  text-align: center;
  font-size: 25px;
  line-height: 100px;
  width: 200px;
  height: 100px;
  position: absolute;
  top: 0px;
  left: 100px;
  font-family: 'DM Serif Display', serif;
  z-index: 1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.fancy-decoration-left-top {
  border: 50px solid #212121;
  border-color: #212121 transparent transparent transparent;
  position: absolute;
  top: 50px;
  left: 0px;
}
.fancy-decoration-left-bottom {
  border: 50px solid #212121;
  border-color: transparent transparent #212121 transparent;
  position: absolute;
  top: 50px;
  left: 0px;
}
.fancy-decoration-left-square {
  background-color: #212121;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
}
.fancy-decoration-left-triangle {
  border: 25px solid #666;
  border-color: #666 #666 transparent transparent;
  position: absolute;
  top: 100px;
  left: 100px;
  z-index: 1;
}
.fancy-decoration-right-top {
  border: 50px solid #212121;
  border-color: #212121 transparent transparent transparent;
  position: absolute;
  top: 50px;
  left: 300px;
}
.fancy-decoration-right-bottom {
  border: 50px solid #212121;
  border-color: transparent transparent #212121 transparent;
  position: absolute;
  top: 50px;
  left: 300px;
}
.fancy-decoration-right-square {
  background-color: #212121;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 250px;
}
.fancy-decoration-right-triangle {
  border: 25px solid #666;
  border-color: #666 transparent transparent #666;
  position: absolute;
  top: 100px;
  left: 250px;
  z-index: 1;
}
</style>
