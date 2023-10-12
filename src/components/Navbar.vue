<template>
    <nav class="main-nav text-sm flex gap-10 justify-start bg-gray-800 p-6 text-white">
        <router-link :to="{ name:'Home' }">
            <img class="w-11 ml-4" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg">
        </router-link>
        <router-link :to="{ name:'Movies' }">Movies</router-link>
        <router-link :to="{ name: 'TvShows' }">Tv Shows</router-link>
    </nav>
</template>
