<template>
  <header>
    <nav>
      <ul>
        <li :class="{'nav-item': true, 'nav-item-active': activeText === 'blog'}">
          <router-link to="/">
            <NavText text="Blog"/>
          </router-link>
        </li>
        <li :class="{'nav-item': true, 'nav-item-active': activeText === 'home'}">
          <router-link to="/">
            <NavImage :normalUrl="require('../assets/ntuyetngan.png')"
              :hoverUrl="require('../assets/title-hover.png')"
              width="285px" positionY="7px"/>
          </router-link>
        </li>
        <li :class="{'nav-item': true, 'nav-item-active': activeText === 'about'}">
          <router-link to="/">
            <NavText text="Works"/>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import NavText from '../parts/NavText.vue';
import NavImage from '../parts/NavImage.vue';

export default {
  name: 'SiteHeader',
  components: {
    NavText,
    NavImage,
  },
  props: {
    activeText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
header {
  background-color: #33B4D7;
  height: 60px;
  line-height: 60px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 9999;
}
nav {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  align-content: center;
  justify-content: center;
}
ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.nav-item {
  display: inline-block;
}
.nav-item-active {
  border-bottom: 2px inset #212121;
}
</style>
