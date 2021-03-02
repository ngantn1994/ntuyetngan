<template>
  <div class="blog">
    <SiteHeader activeText="blog"/>
    <BlogPage msg="Blog list"/>
  </div>
</template>

<script>
import BlogPage from '@/components/BlogPage.vue';
import SiteHeader from '@/components/SiteHeader.vue';

export default {
  name: 'Blog',
  components: {
    BlogPage,
    SiteHeader,
  },
};
</script>

<style scoped>
.blog {
  width: 100%;
}
</style>
