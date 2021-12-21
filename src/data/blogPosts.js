import blog1 from 'raw-loader!./posts/blog1.txt';
import blog2 from 'raw-loader!./posts/blog2.txt';
import blog3 from 'raw-loader!./posts/blog3.txt';
import blog4 from 'raw-loader!./posts/blog4.txt';
import blog5 from 'raw-loader!./posts/blog5.txt';

const blogPosts = [
  {
    id: 5,
    html: blog5,
  },
  {
    id: 4,
    html: blog4,
  },
  {
    id: 3,
    html: blog3,
  },
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
