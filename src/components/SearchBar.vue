<script>
import SearchDropdown from "./SearchDropdown.vue";
import { onBeforeMount, ref, watch } from "vue";

export default {
  components: { SearchDropdown },
  setup() {
    const search = ref("");
    const searchbar = ref(null);
    const isOpen = ref(false);

    function hideDropdown() {
      isOpen.value = false;
    }

    function showDropdown() {
      isOpen.value = true;
    }

    watch(search, () => {
      isOpen.value = true;
    });

    onBeforeMount(() => {
      window.addEventListener("keydown", (e) => {
        if (e.key === " " && e.ctrlKey) {
          searchbar.value.focus();
        }
      });
    });

    const updatePage = () => {
      location.reload();
    };

    return {
      search,
      searchbar,
      isOpen,
      hideDropdown,
      showDropdown,
      updatePage,
      emitsOptions: {
        click: true
      }
    };
  },
};
</script>

<template>
<div class="banner-container bg-img flex flex-col items-start">
    <div class="title flex items-start flex-col gap-10 font-semibold">
        <h2 class="text-4xl">Welcome</h2>
        <h3 class="mt-1">Millions of movies, TV shows and people to discover. Explore now</h3>
    </div>
    <div
          class="relative left-2 top-20 w-100 mt-3 md:mt-0"
          v-click-away="{
            handler: hideDropdown,
            events: ['click'],
            middleware: true
          }"
          @keydown.esc="hideDropdown"
        >
          <input
            id="search"
            ref="searchbar"
            v-model="search"
            type="text"
            class="w-100 px-4 py-3 pl-12 text-sm text-black-200 transition duration-200 ease-in-out bg-white-600 rounded-full focus:outline-none focus:shadow-outline"
            placeholder="Search ( Tap Ctrl+Space )"
            @focus="showDropdown"
            autofocus
          />
          <div class="absolute top-0">
            <svg
              class="w-5 mt-3 ml-4 text-gray-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </div>
          <div
            class="absolute top-0 right-0 cursor-pointer"
            v-if="search"
            @click="search = ''"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 mt-3 mr-4 text-gray-200 fill-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <search-dropdown :search="search" v-show="isOpen" />
        </div>
    </div>
</template>
