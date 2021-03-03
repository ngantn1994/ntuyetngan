import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import BlogPost from '../components/BlogPost.vue';
import UnfinishedPage from '../components/UnfinishedPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/wip',
    name: 'WIP',
    component: UnfinishedPage,
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.id));
      next(isValid);
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
