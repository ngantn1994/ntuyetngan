<template>
  <div class="roll-container">
    <div class="roll-left-decor-1"></div>
    <div class="roll-left-decor-2"></div>
    <div class="roll-right-decor-1"></div>
    <div class="roll-right-decor-2"></div>
    <div class="roll-start"></div>
    <div id="roll-content" class="roll-content">
      <slot>
        <div>Empty roll</div>
      </slot>
    </div>
    <div id="roll-end" class="roll-end"></div>
  </div>
</template>

<script>
export default {
  name: 'FancyRoll',
  mounted() {
    const rollContent = document.getElementById('roll-content');
    const rollEnd = document.getElementById('roll-end');
    const halfContentWidth = Number(getComputedStyle(rollContent).width.slice(0, -2)) / 2;

    rollEnd.style.borderLeftWidth = `${halfContentWidth}px`;
    rollEnd.style.borderRightWidth = `${halfContentWidth}px`;
  },
};
</script>

<style scoped>
.roll-container {
  position: relative;
}
.roll-left-decor-1 {
  background-color: #212121;
  height: 30px;
  width: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.roll-left-decor-2 {
  background-color: #212121;
  height: 10px;
  width: 10px;
  position: absolute;
  left: 10px;
  top: 10px;
}
.roll-right-decor-1 {
  background-color: #212121;
  height: 30px;
  width: 10px;
  position: absolute;
  right: 0px;
  top: 0px;
}
.roll-right-decor-2 {
  background-color: #212121;
  height: 10px;
  width: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.roll-start {
  width: calc(100% - 40px);
  height: 30px;
  margin: auto;
  border-bottom: 5px dashed #212121;
  background-color: #33B7D4;
}
.roll-content {
  position: relative;
  width: calc(100% - 40px);
  background-color: #33B7D4;
  margin: auto;
}
.roll-end {
  /* position: absolute;
  bottom: 0px;
  left: 20px; */
  width: 0px;
  margin: auto;
  border: 50px solid #33B7D4;
  border-color: #33B7D4 #33B7D4 transparent #33B7D4;
}
</style>
