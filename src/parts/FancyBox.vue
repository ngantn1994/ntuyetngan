<template>
  <div :style="backgroundStyle" class="fancy-box" @click="boxSelected()">
    <div class="text-box">
      {{info.name}}
    </div>
  </div>
</template>

<script>
function getBackgroundAttribute(url) {
  return {
    'background-image': `url("${url}")`,
  };
}

export default {
  name: 'FancyBox',
  props: {
    info: {
      type: Object,
      required: true,
      validator(value) {
        return 'name' in value && 'background' in value
          && 'link' in value;
      },
    },
  },
  computed: {
    backgroundStyle() {
      return getBackgroundAttribute(this.info.background);
    },
  },
  methods: {
    boxSelected() {
      this.$router.push({
        name: this.info.link,
      });
    },
  },
};
</script>

<style scoped>
.fancy-box {
  background-size: 100%;
  position: relative;
  box-shadow: #212121 10px 10px 0px -3px, rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
   rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: 200ms all ease-in-out;
  cursor: pointer;
}
.text-box {
  background: rgba(51, 180, 215, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
}
.fancy-box:hover {
  font-size: 120%;
  letter-spacing: 5px;
  box-shadow: #FFF 10px 10px 0px -3px, #212121 20px 20px 0px -3px,
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
