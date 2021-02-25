import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    description: 'App design standard',
    media: '/static/images/products/icon-mobile.png',
    title: 'App Design Standards',
    link: '/app/app-design-standard'
  },
  {
    id: uuid(),
    description: 'Live editor standards',
    media: '/static/images/products/icon-ide.png',
    title: 'Live Editor Standards',
    link: '/app/live-editor-standard'
  },
  {
    id: uuid(),
    description: 'Mathwork web standards',
    media: '/static/images/products/icon-matlab.png',
    title: 'Mathwork Web Standards',
    link: '/app/mathwork-web-standard'
  },
  {
    id: uuid(),
    description: 'Prism',
    media: '/static/images/products/icon-prism.png',
    title: 'Prism',
    link: '/app/prism'
  }
];
