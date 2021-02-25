import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    description: 'Product coding standards',
    media: '/static/images/products/icon-coding.png',
    title: 'Product Coding Standards',
    link: '/app/product-coding-standards'
  },
  {
    id: uuid(),
    description: 'Product testing standards',
    media: '/static/images/products/icon-testing.png',
    title: 'Product Testing Standards',
    link: '/app/product-testing-standards'
  },
  {
    id: uuid(),
    description: 'Product design standards',
    media: '/static/images/products/icon-design.png',
    title: 'Product Design Standards',
    link: '/app/product-design-standards'
  },
  {
    id: uuid(),
    description: 'Miscellaneous',
    media: '/static/images/products/icon-misc.png',
    title: 'Miscellaneous',
    link: '/404'
  },
];
