import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

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
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue'),
  },
  {
    path: '/wip',
    name: 'WIP',
    component: () => import(/* webpackChunkName: "wip" */ '../components/UnfinishedPage.vue'),
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: () => import(/* webpackChunkName: "blogpost" */ '../components/BlogPost.vue'),
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.id));
      next(isValid);
    },
  },
  {
    path: '*',
    name: 'sitemap',
    component: () => import(/* webpackChunkName: "wip" */ '../components/SiteMap.vue'),
  },
  {
    path: '/cssgen',
    name: 'CSSGen',
    component: () => import(/* webpackChunkName: "cssgen" */ '../views/CssGenerator.vue'),
  },
  {
    path: '/binderpad',
    name: 'BinderPad',
    component: () => import(/* webpackChunkName: "binderpad" */ '../views/BinderPad.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
