const state = {
    favorites: [],
};

const getters = {
    getFavoriteMovies: (state) => state.favorites,
};

const mutations = {
addToFavorites: (state, movie) => {
    state.favorites.push(movie);
},
removeFromFavorites: (state, movie) => {
    state.favorites = state.favorites.filter((m) => m.id !== movie.id);
},
};

const actions = {
    addMovieToFavorite: ({ commit }, movie) => {
        commit('addToFavorites', movie);
    },
    removeMovieFromFavorite: ({ commit }, movie) => {
        commit('removeFromFavorites', movie);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
  