<template>
  <div class="counter-container" :style="{ 'width': `${numberOfSection*50}px` }"
    :class="{ 'counter-space-normal': homepageAcctiveSection < numberOfSection,
      'counter-space-last': homepageAcctiveSection === numberOfSection }">
    <nav>
      <ul>
        <li v-for="(section, index) in sectionDescriptions"
          :key="index" @click="selectSection(index + 1)"
          :class="{'counter-item': true, 'counter-active': (index + 1) === homepageAcctiveSection}">
          {{index + 1}}
          <span class="counter-arrow"></span>
          <span class="counter-description">
            {{section}}
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BottomCounter',
  props: {
    sectionDescriptions: {
      type: Array,
      required: false,
    },
    homepageAcctiveSection: {
      type: [Number, String],
      required: true,
      validator(value) {
        return (parseInt(value, 10) > 0);
      },
    },
  },
  computed: {
    numberOfSection() {
      return this.sectionDescriptions.length;
    },
  },
  methods: {
    selectSection(sectionIndex) {
      this.$emit('changeSection', sectionIndex);
    },
  },
};
</script>

<style scoped>
.counter-container {
  background-color: #33B4D7;
  height: 30px;
  position: fixed;
  right: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 9999;
  transition: all 200ms ease-in-out;
}
.counter-space-normal {
  bottom: 30px;
}
.counter-space-last {
  bottom: 130px;
}
nav {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
ul {
  position: relative;
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.counter-item {
  display: inline-block;
  color: #212121;
  text-align: center;
  line-height: 30px;
  transition: all 500ms ease-in-out;
  width: 50px;
  height: 100%;
  position: relative;
  font-weight: bold;
}
.counter-description {
  visibility: hidden;
  background-color: #212121;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  line-height: 100px;
  color: #FFF;
  text-align: center;
  padding: 5px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -5px);
  z-index: 1;
  font-weight: bold;
}
.counter-arrow {
  border: 10px solid #212121;
  border-color: #212121 transparent transparent transparent;
  visibility: hidden;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;
}
.counter-item:hover {
  cursor: pointer;
}
.counter-item:hover .counter-description {
  visibility: visible;
}
.counter-item:hover .counter-arrow {
  visibility: visible;
}
.counter-active {
  background-color: #212121;
  color: #FFF;
}
</style>
