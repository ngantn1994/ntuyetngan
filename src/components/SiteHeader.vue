<template>
  <header>
    <nav>
      <ul>
        <li :class="{'nav-item': true, 'nav-item-active': activeText === 'about',
          'is-mobile-only': true }">
          <div :class="{'menu-marker': true, 'menu-marker-selected': isMenuOpen }"
            @click="clickMenu()" :v-html="menuIcon">{{menuIcon}}</div>
        </li>
        <li :class="{'nav-item': true, 'nav-item-active': activeText === 'blog',
          'is-mobile-hidden': true }">
          <router-link to="/blog">
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
        <li :class="{'nav-item': true, 'nav-item-active': activeText === 'about',
          'is-mobile-hidden': true }">
          <router-link to="/">
            <NavText text="Works"/>
          </router-link>
        </li>
      </ul>
    </nav>
    <div :class="{'mobile-menu': true, 'is-mobile-only': true, 'mobile-menu-open': isMenuOpen }">
      <router-link to="/blog">
        <div class="mobile-menu-item">
          Blog
        </div>
      </router-link>
      <router-link to="/">
        <div class="mobile-menu-item">
          Works
        </div>
      </router-link>
    </div>
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
  data() {
    return {
      isMenuOpen: false,
      menuIcon: '☰',
    };
  },
  methods: {
    clickMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.menuIcon = this.isMenuOpen ? '×' : '☰';
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
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
}
.nav-item {
  display: inline-block;
}
.nav-item-active {
  border-bottom: 2px inset #212121;
}
.is-mobile-hidden {
  display: none;
}
.is-mobile-only {
  display: inline-block;
  width: 60px;
}
@media only screen and (min-width: 600px) {
  .is-mobile-hidden {
    display: inline-block;
  }
  .is-mobile-only {
    display: none;
  }
  ul {
    justify-content: center;
  }
}
.menu-marker {
  height: 60px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  font-family: 'Abril Fatface', cursive;
  font-size: 25px;
  transition: 200ms all ease-in-out;
}
.menu-marker-selected {
  font-weight: bold;
  color: #FFF;
  background-color: #212121;
}
.mobile-menu {
  width: 100%;
  color: #FFF;
  background-color: #212121;
  position: fixed;
  top: 60px;
  left: -100%;
  transition: 200ms left ease-in-out;
}
.mobile-menu-item {
  width: 100%;
  margin: auto;
  height: 58px;
  border-bottom: 2px solid #FFF;
  text-decoration: none;
  color: #FFF;
  font-family: 'Abril Fatface', cursive;
  font-size: 20px;
}
.mobile-menu-open {
  top: 60px;
  left: 0px;
}
a {
  text-decoration: none;
}
</style>
