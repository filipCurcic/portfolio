import dave from '../images/dave.png';
import davePhone from '../images/dave_phone.png';
import jeff from '../images/jeff.png';
import jeffPhone from '../images/jeff_phone.png';
import webshop from '../images/webshop.png';
import webshopPhone from '../images/webshop_phone.png';
import tapme from '../images/tapme.png';
import tapmePhone from '../images/tapme_phone.png';

const data = [
  {
    title: 'portfolio_item1.title',
    description: 'portfolio_item1.description',
    image: jeff,
    imagePhone: jeffPhone,
    mobileSummary: 'portfolio_item1.mobileSummary',
    more: null,
    liveUrl: 'http://jeffreycheah.com.au/',
    sourceUrl: null,
    id: 1,
  },
  {
    title: 'portfolio_item2.title',
    description: 'portfolio_item2.description',
    image: dave,
    imagePhone: davePhone,
    mobileSummary: 'portfolio_item2.mobileSummary',
    more: 'portfolio_item2.more',
    liveUrl: 'https://davidc.photo/',
    sourceUrl: 'https://github.com/filipCurcic/dave-portfolio',
    id: 2,
  },
  {
    title: 'portfolio_item3.title',
    description: 'portfolio_item3.description',
    image: webshop,
    imagePhone: webshopPhone,
    mobileSummary: 'portfolio_item3.mobileSummary',
    more: 'portfolio_item3.more',
    liveUrl: null,
    sourceUrl: 'https://gitlab.com/Bigaraaaa/masinkamasashop-front/',
    id: 3,
  },
  {
    title: 'portfolio_item4.title',
    description: 'portfolio_item4.description',
    image: tapme,
    imagePhone: tapmePhone,
    more: 'portfolio_item4.more',
    liveUrl: 'https://4mi4u.com/',
    sourceUrl: 'https://github.com/Vujos/tapme',
    mobileSummary: 'portfolio_item4.mobileSummary',
    id: 4,
  },
];
export default data;
