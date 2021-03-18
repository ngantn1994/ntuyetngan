<template>
  <div class="work">
    <SiteHeader activeText="work"/>
    <WorksList msg="Works list"/>
  </div>
</template>

<script>
import WorksList from '@/components/WorksList.vue';
import SiteHeader from '@/components/SiteHeader.vue';

export default {
  name: 'Works',
  metaInfo: {
    title: 'Projects',
  },
  components: {
    WorksList,
    SiteHeader,
  },
};
</script>

<style scoped>
.work {
  width: 100%;
}
</style>
