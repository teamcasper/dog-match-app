import VueRouter from 'vue-router';
import Dash from './components/Dash';
import Auth from './components/Auth';
import DogPost from './components/DogPost';
import DogSearch from './components/DogSearch';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dash },
    { path: '/auth', component: Auth },
    { path: '/dogs/post', component: DogPost },
    { path: '/dogs/search', component: DogSearch },
    { path: '*', redirect: '/' }
  ]
});