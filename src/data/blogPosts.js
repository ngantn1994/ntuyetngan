import blog1 from 'raw-loader!./posts/blog1.txt';
import blog2 from 'raw-loader!./posts/blog2.txt';

const blogPosts = [
  {
    id: 2,
    html: blog2,
  },
  {
    id: 1,
    html: blog1,
  },
];

export default blogPosts;
