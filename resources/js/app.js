require('./bootstrap');

window.Vue = require('vue');

Vue.component('tweet-component', require('./components/TweetComponent.vue').default);
Vue.component('form-tweet-component', require('./components/FormTweetComponent.vue').default);
Vue.component('my-tweet-component', require('./components/MyTweetComponent.vue').default);

const app = new Vue({
    el: '#app',
});
