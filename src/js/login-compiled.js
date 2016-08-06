'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _Login = require('../components/Login/Login');

var _Login2 = _interopRequireDefault(_Login);

var _LoginFooter = require('../components/Footer/LoginFooter');

var _LoginFooter2 = _interopRequireDefault(_LoginFooter);

require('../css/login.css');

require('../css/lib/bootstrap.min.css');

var _logo_small = require('../img/min/logo_small.png');

var _logo_small2 = _interopRequireDefault(_logo_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
  el: 'body',
  data: {
    systemTitle: '国度航服差旅系统',
    logoImg: _logo_small2.default,
    loginMsg: '',
    loginAction: 'j_spring_security_check',
    footerMsg: 'Copyright © 2015国度航服 版权所有 沪ICP备15027843号-1'
  },
  components: { Login: _Login2.default, LoginFooter: _LoginFooter2.default }
});

//# sourceMappingURL=login-compiled.js.map