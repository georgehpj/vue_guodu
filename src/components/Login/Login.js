import template from './LoginTpl_1.html';
import './LoginTpl_1.css';

export default {
  template: template,
  props: {
    title: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    },
    logoImg: {
      type: String
    },
    action:{
      type: String,
      required: true
    }
  },
};

