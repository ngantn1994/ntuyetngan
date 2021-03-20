<template>
  <div class="cssgen-container">
    <img class="logo" src="../assets/cssgen-logo-sd.png"/>
    <div class="descrition-box">
      A compact tool for quick CSS creation.<br>Available as a Chrome Extension.
    </div>
    <div class="extension-btn" @click="toProductPage()">Get it on Extension Store</div>
    <div class="content-card">
      <div class="feature-title">
        Features
      </div>
      <div class="feature-content">
        <ul class="feature-items">
          <li>shadow generator</li>
          <li>gradient background</li>
          <li>transform 2D</li>
          <li>border-radius</li>
          <li>CSS filter</li>
          <li>flexbox container</li>
          <li>... and also some snippets for quick use</li>
        </ul>
      </div>
    </div>
    <div class="content-card">
      <div class="feature-title">
        Preview
      </div>
      <div class="feature-content">
        <div class="image-box">
          <div v-for="(image, index) in imageList" :key="index"
            :class="{'image-item': true, 'current-image': index === currentImageIndex}">
            <img class="demo-img" :src="image"/>
          </div>
        </div>
        <div class="prev-btn navigate-btn" @click="prevImg()">◄</div>
        <div class="next-btn navigate-btn" @click="nextImg()">►</div>
      </div>
    </div>
    <div class="back-btn" @click="toProjectPage()">
      See my others projects
    </div>

    <div class="bottom-info">© 2021 Nguyen Tuyet Ngan. All rights reserved.</div>
  </div>
</template>

<script>
/* eslint global-require: 0 */
const demoImg = [
  require('../assets/demo/ts.png'),
  require('../assets/demo/bs.png'),
  require('../assets/demo/gb.png'),
];

export default {
  name: 'CssGenerator',
  metaInfo: {
    title: 'CSS Generator | Chrome Extension',
  },
  methods: {
    toProductPage() {
      window.open('https://chrome.google.com/webstore/detail/css-generator/npgoopoibhhgmcmhopfelengdencbcco', '_blank');
    },
    toProjectPage() {
      this.$router.push({
        name: 'Works',
      });
    },
    nextImg() {
      this.currentImageIndex = (this.currentImageIndex + 1) % (this.imageList.length);
    },
    prevImg() {
      this.currentImageIndex = (this.currentImageIndex + this.imageList.length - 1)
        % (this.imageList.length);
    },
  },
  data() {
    return {
      imageList: demoImg,
      currentImageIndex: 0,
    };
  },
};
</script>

<style scoped>
.cssgen-container {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 50px);
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url('../assets/patterns/pt1.png');
  background-repeat: repeat;
  padding-bottom: 50px;
}
.logo {
  max-width: 95%;
  margin: auto;
}
.descrition-box {
  max-width: 95%;
  margin: auto;
  text-align: center;
  font-family: 'Asap Condensed', sans-serif;
  color: #000000;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 10px;
}
.extension-btn {
  width: 300px;
  max-width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #000000;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  color: #FFF;
  font-weight: bold;
  text-align: center;
  border-radius: 50px;
  margin: auto;
  margin-top: 30px;
  cursor: pointer;
}
.extension-btn:hover {
  background-color: #2e3038;
}
.content-card {
  padding: 10px;
  width: 300px;
  max-width: calc(99% - 20px);
  background: #FFF;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  margin: auto;
  margin-top: 30px;
  border-radius: 10px;
}
.feature-title {
  max-width: 95%;
  margin: auto;
  text-align: center;
  font-family: 'Asap Condensed', sans-serif;
  color: #000000;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-size: 40px;
  position: relative;
}
.feature-content {
  width: 100%;
  margin: auto;
  text-align: justify;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feature-items {
  width: fit-content;
  height: fit-content;
}
.bottom-info {
  width: 100%;
  height: 30px;
  font-weight: bold;
  font-size: min(3vw, 20px);
  line-height: 30px;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.demo-img {
  max-width: 100%;
}
.image-box {
  width: 300px;
  height: 280px;
  overflow: hidden;
  position: relative;
}
.image-item {
  width: 300px;
  height: 280px;
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  transition: 200ms opacity ease-in-out;
}
.current-image {
  opacity: 100;
}
.navigate-btn {
  height: 100%;
  width: 50px;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  color: #666;
  cursor: pointer;
  transition: 200ms all ease-in-out;
}
.navigate-btn:hover {
  background: rgba(255, 255, 255, 0.8);
}
.prev-btn {
  position: absolute;
  top: 0px;
  left: 0px;
}
.next-btn {
  position: absolute;
  top: 0px;
  right: 0px;
}

.back-btn {
  width: fit-content;
  margin: auto;
  color: #000;
  text-decoration: underline;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
}
.back-btn:hover {
  color: #2e3038;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
  display: block;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
