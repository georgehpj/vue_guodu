import Vue from 'vue';
import LoginHeader from '../components/Header/LoginHeader';
import Login from '../components/Login/Login';
import '../css/login.css';
import '../css/lib/bootstrap.min.css';

new Vue({
  el: 'body',
  components: {Login, LoginHeader}
});
