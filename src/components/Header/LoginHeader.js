import './LoginHeader.css';
import template from './LoginHeader.html';

export default {
  template,
  data () {
    return {
      items: [
        {
          name: '企业介绍',
          url: 'http://empire.ren/about-guo-du/'
        },
        {
          name: '合作伙伴',
          url: 'http://empire.ren/our-partners/'
        },
        {
          name: '联系我们',
          url: 'http://empire.ren/contact-us/'
        }
      ]
    }
  }
};
