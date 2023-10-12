import { createStore } from 'vuex';
import favoriteMovies from "./modules/favoriteMovies.js";

export default createStore({
  modules: {
    favoriteMovies
  },
});