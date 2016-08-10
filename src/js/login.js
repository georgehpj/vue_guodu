import Vue from 'vue';
import Login from '../components/Login/Login';
import LoginFooter from '../components/Footer/LoginFooter';
import '../css/login.css';
import '../css/lib/bootstrap.min.css';
import logo from '../img/min/logo_small.png';

new Vue({
  el: 'body',
  data: {
    systemTitle: '国度航服差旅系统',
    logoImg: logo,
    loginMsg: '',
    loginAction: 'j_spring_security_check',
    footerMsg: 'Copyright © 2015国度航服 版权所有 沪ICP备15027843号-1',
    userNameId: 'j_username',
    passwordId: 'j_password'
  },
  components: {
    Login,
    LoginFooter
  }
});
