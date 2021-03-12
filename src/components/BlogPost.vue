<template>
  <div class="blogPost">
    <SiteHeader activeText="blobPost"/>
    <div class="content-container">
      <div class="post-title" v-html="blogInfo.title"></div>
      <div class="post-meta">
        <div v-for="(tag, index) in blogInfo.tags" :key="index" class="post-tag">
          {{tag}}
        </div>
        <div class="post-date" v-html="blogInfo.date"></div>
        <div class="post-clear"></div>
      </div>
      <div class="post-content" v-html="blogHtml"></div>
      <div class='comments'>
        <Disqus :pageConfig="pageConfig"/>
      </div>
    </div>
    <div class="bottom-info">© 2021 Nguyen Tuyet Ngan. All rights reserved.</div>
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus';
import SiteHeader from '@/components/SiteHeader.vue';
import blogTitles from '../data/blogTitle';
import blogPosts from '../data/blogPosts';

export default {
  name: 'BlogPost',
  components: {
    SiteHeader,
    Disqus,
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  mounted() {
    /* eslint no-plusplus: 0 */
    for (let index = 0; index < blogPosts.length; index++) {
      /* eslint eqeqeq: 0 */
      if (blogPosts[index].id == this.id) {
        this.blogHtml = blogPosts[index].html;
        break;
      }
    }

    /* eslint no-plusplus: 0 */
    for (let index = 0; index < blogTitles.data.length; index++) {
      /* eslint eqeqeq: 0 */
      if (blogTitles.data[index].id == this.id) {
        this.blogInfo = blogTitles.data[index];
        break;
      }
    }
  },
  computed: {
    pageConfig() {
      return {
        title: this.blogInfo.title,
      };
    },
  },
  data() {
    return {
      blogInfo: blogTitles.data[0],
      blogHtml: blogPosts[0],
    };
  },
};
</script>

<style scoped>
.blogPost {
  width: 100%;
  min-height: calc(100vh - 150px);
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 70px;
  padding-bottom: 80px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%2333b7d4' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
}
.content-container {
  width: calc(94% - 50px);
  max-width: 1044px;
  padding: 20px;
  margin: auto;
  background: #FFF;
  box-shadow:#33B4D7 20px 20px 0px -3px, rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
   rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  text-align: justify;
}
.post-title {
  width: 100%;
  padding-bottom: 5px;
  text-align: justify;
  color: #33B4D7;
  font-family: 'Asap Condensed', sans-serif;
  font-size: min(5vw, 40px);
  text-transform: uppercase;
  margin: auto;
  font-weight: bold;
  text-shadow: 1px 1px #666;
}
.post-meta {
  width: 100%;
  margin: auto;
}
.post-tag {
  background: #666;
  color: #FFF;
  float: left;
  width: fit-content;
  height: fit-content;
  margin-right: 10px;
  padding: 5px;
  font-size: min(3vw, 20px);
}
.post-date {
  color: #666;
  float: right;
  width: fit-content;
  height: fit-content;
  font-size: min(3vw, 20px);
}
.post-clear {
  clear: both;
  width: 100%;
  height: 10px;
  border-bottom: 2px solid #33B4D7;
  margin-bottom: 20px;
}
.post-content {
  font-size: min(3vw, 22px);
  text-align: justify;
}
.comments {
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #33B4D7;
}
.bottom-info {
  background: #33B4D7;
  width: 100%;
  height: 30px;
  font-weight: bold;
  font-size: min(3vw, 20px);
  line-height: 30px;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>
