<template>
    <div class="movie-card-container">
      <swiper
        class="swiper"
        :slidesPerView="5"
        :mousewheel=true
        :spaceBetween="30"
        v-if="movies.length"
      >
        <swiper-slide
            v-for="movie in movies"
            :key="movie.id"
        >
            <div class="movie-card flex flex-col items-center">
            <img
                class="movies-image"
                :src="`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`"
            >
            <div class="movies-title">{{ movie.title || movie.name }}</div>
            <div class="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 text-gray-700 fill-current text-myyellow" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                    <path
                        d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                        data-name="star"
                    />
                    </g>
                </svg>
                <span class="ml-1">{{ movie.vote_average * 10 }}%</span>
                <span class="mx-2">|</span>
                <span class="movie-date">{{ movie.release_date || movie.first_air_date }}</span>
                <svg class="w-4 ml-4 text-gray-700 fill-current text-white" viewBox="0 0 24 24" @click="removeFavorite(movie)" v-if=isFavorite(movie)>
                    <path d="m11.2 20-.5-.5-8.9-9.2c-1-1.1-1.8-2.4-1.8-4.2 0-3.4 2.7-6.1 6.1-6.1 2.1 0 4.1 1.1 5.2 2.9 1-1.8 2.9-2.9 5.1-2.9 3.4 0 6.1 2.7 6.1 6.1 0 1.9-.8 3.1-1.8 4.2z"
                    class="heart-filled text-myyellow"
                    />
                </svg>
                <svg class="w-4 ml-4 text-gray-700 fill-current text-white" viewBox="0 0 24 24" @click="addFavorite(movie)" v-if=!isFavorite(movie)>
                    <path d="m11.2 20-.5-.5-8.9-9.2c-1-1.1-1.8-2.4-1.8-4.2 0-3.4 2.7-6.1 6.1-6.1 2.1 0 4.1 1.1 5.2 2.9 1-1.8 2.9-2.9 5.1-2.9 3.4 0 6.1 2.7 6.1 6.1 0 1.9-.8 3.1-1.8 4.2z"
                    />
                </svg>
            </div>
        </div>
        </swiper-slide>
        </swiper>
        <div v-else>
            <p>Loading..</p>
        </div>
    </div>
</template>
  
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { mapState, mapActions } from 'vuex';
  
  export default {
    props: {
      movies: Array,
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    computed: {
      ...mapState('favoriteMovies', ['favorites']),
    },
    methods: {
      ...mapActions('favoriteMovies', ['addMovieToFavorite', 'removeMovieFromFavorite']),

      addFavorite(movie) {
        this.addMovieToFavorite(movie);
      },
      removeFavorite(movie) {
        this.removeMovieFromFavorite(movie);
      },
      isFavorite(movie) {
        return this.favorites.some((m) => m.id === movie.id) || false;
      },
    },
  };
</script>
  