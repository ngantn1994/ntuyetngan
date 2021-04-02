<template>
  <div class="binder-pad">
    <div class="binder-pad-top-wrapper">
      <div class="binder-pad-top">
        <div class="logo-container">
          <img class="logo" src="../assets/binderpad-logo.png"/>
        </div>
        <div class="page-description">
          Save your stories. Share them with people. Discover great things.
        </div>
        <div class="goto-btn" @click="toProductPage()">To the pad</div>
        <div class="page-description">
          <i>**The service is still in middle of development.<br>
          Info page will be updated later.</i>
        </div>
      </div>
    </div>
    <div class="binder-pad-second-wrapper" @click="toGithubPage()">
      <div class="binder-pad-github-box">
        <div class="binder-pad-github-logo-wrapper">
          <img class="binder-pad-github-logo" src="../assets/github-logo.png"/>
        </div>
        <div class="binder-pad-github-desc">You can find the project source code here.<br>
        Feels free to contact me for further information! :3</div>
        <div class="clear-both"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BinderPad',
  metaInfo: {
    title: 'Binderpad | The social network for writers',
  },
  methods: {
    toProductPage() {
      window.open('https://binderpad.com', '_blank');
    },
    toGithubPage() {
      window.open('https://github.com/ngantn1994/binderpad', '_blank');
    },
  },
};
</script>

<style scoped>
.binder-pad {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
}
.binder-pad-top-wrapper {
  width: 100%;
  height: calc(100vh - 304px);
  background: url('../assets/binderpad-pattern.png') repeat;
  position: relative;
}
.binder-pad-top {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(226, 232, 240, 0.95);
  color: #212121;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
.logo-container {
  width: fit-content;
  height: fit-content;
}
.logo {
  max-width: calc(100% - 10px);
}
.page-description {
  padding: 10px;
  font-weight: bold;
}
.goto-btn {
  width: 300px;
  height: 50px;
  line-height: 50px;
  background-color: #33b4d7;
  color: #FFF;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
}
.goto-btn:hover {
  opacity: 0.9;
}
.binder-pad-second-wrapper {
  background-color: #33b4d7;
  cursor: pointer;
}
.binder-pad-second-wrapper:hover {
  opacity: 0.9;
}
.binder-pad-github-box {
  width: 700px;
  max-width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: auto;
  color: #FFF;
}
.binder-pad-github-logo-wrapper {
  float: left;
  width: 100%;
}
.binder-pad-github-logo {
  width: 200px;
  height: 200px;
  margin: auto;
}
.binder-pad-github-desc {
  float: right;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.clear-both {
  clear: both;
}
@media only screen and (min-width: 610px) {
  .binder-pad-github-logo-wrapper {
    width: 200px;
  }
  .binder-pad-github-desc {
    height: 200px;
    width: 400px;
  }
  .binder-pad-top-wrapper {
    height: calc(100vh - 244px);
  }
}
</style>
