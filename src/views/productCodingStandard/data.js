import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    description: 'C++ standards',
    media: '/static/images/products/icon-c++.png',
    title: 'C++',
    link: '/app/cplusplus-standard'
  },
  {
    id: uuid(),
    description: 'Javascript standards',
    media: '/static/images/products/icon-js.png',
    title: 'Javascript Standards',
    link: '/app/javascript-standard'
  },
];
