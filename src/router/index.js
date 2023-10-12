import { createRouter, createWebHistory } from 'vue-router';
import TvShows from '../views/TvShows.vue';
import Movies from '../views/Movies.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/tv-shows',
    name: 'TvShows',
    component: TvShows
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;