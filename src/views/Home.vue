<template>
  <div class="home">
    <SiteHeader activeText="home"/>
    <HomePage msg="Resume page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue';
import SiteHeader from '@/components/SiteHeader.vue';

export default {
  name: 'Home',
  components: {
    HomePage,
    SiteHeader,
  },
};
</script>

<style>
.home {
  min-height: calc(100vh - 5rem);
  width: 100%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
