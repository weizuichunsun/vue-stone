import Vue from 'vue';

import App from './App';
import Timer from './pages/Timer';
// import TimerRepeat from './pages/TimerRepeat';
// import TimerTask from './pages/TimerTask';
// import TimerNotice from './pages/TimerNotice';
import NotFind from './pages/404';

import Store from './store';

Store.install(Vue);

const routes = {
  '/': App,
  '/timer': Timer,
  '/timer/repeat': Timer,
  '/timer/task': Timer,
  '/timer/notice': Timer,
};

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFind;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
