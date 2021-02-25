<template>
  <div class="about">
    <SiteHeader activeText="about"/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/SiteHeader.vue';

export default {
  name: 'About',
  components: {
    SiteHeader,
  },
};
</script>
