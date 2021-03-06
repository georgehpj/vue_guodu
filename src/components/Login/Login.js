import template from './LoginTpl_1.html';
import './LoginTpl_1.css';
import '../../css/common.css';

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
    action: {
      type: String,
      required: true
    },
    logoImg: {
      type: String
    },
    userNameId: {
      type: String
    },
    passwordId: {
      type: String
    }
  },
};

