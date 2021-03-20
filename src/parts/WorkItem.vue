<template>
  <div class="work-item-container" @click="boxSelected()">
    <div class="image-box" :style="backgroundStyle">
      <div class="desc-box">
        <div class="desc-text">
          {{info.desc}}
        </div>
      </div>
    </div>
    <div class="title-box">
      {{info.title}}
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
  name: 'WorkItem',
  props: {
    info: {
      type: Object,
      required: true,
      validator(value) {
        return 'title' in value && 'background' in value
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
.work-item-container {
  position: relative;
  cursor: pointer;
}
.image-box {
  width: 400px;
  height: 300px;
  position: relative;
  box-shadow: #33B4D7 10px 10px 0px -3px, rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
   rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  max-width: 100%;
  overflow: hidden;
}
.desc-box {
  width: 100%;
  height: 100%;
  background-color: rgba(51, 180, 215, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0%;
  transition: 500ms top ease-in-out;
}
.work-item-container:hover .desc-box {
  top: 0%;
}
.desc-text {
  width: fit-content;
  height: fit-content;
  max-width: 90%;
  max-height: 90%;
  color: #FFF;
  font-weight: bold;
}
.title-box {
  width: 400px;
  text-align: center;
  font-weight: bold;
  font-family: 'Asap Condensed', sans-serif;
  color: #33B4D7;
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 10px;
  max-width: 100%;
  text-shadow: 1px 1px 0px #212121;
}
</style>
