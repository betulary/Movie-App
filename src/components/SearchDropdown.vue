<script>
import { watchEffect } from "vue";
import getSearchResults from "./getSearchResults";
import ImageOrPlaceholder from "./ImageOrPlaceholder.vue";

export default {
  components: { ImageOrPlaceholder },
  props: ["search"],
  setup(props) {
    const { searchResults, loadSearchResults } = getSearchResults();

    const sliceArray = (array, begin, end) => {
      if (array) {
        console.log(array.slice(begin, end));
        return array.slice(begin, end);
      }
      return [];
    };

    watchEffect(() => {
      loadSearchResults(props.search);
    });

    return { searchResults, sliceArray };
  },
};
</script>

<template>
  <div
    v-if="search.length > 2"
    class="absolute z-50 w-64 mt-4 text-sm bg-gray-800 rounded text-mywhite"
  >
    <ul v-if="searchResults.length">
      <li
        class="border-b border-gray-600 dark:border-gray-700"
        v-for="result in sliceArray(searchResults, 0, 7)"
        :key="result"
      >
        <div
          v-if="result.media_type == 'movie'"
          class="flex items-center px-3 py-3 transition duration-150 ease-in-out hover:bg-gray-700"
        >
          <ImageOrPlaceholder
            :result="result"
            my_key="poster_path"
            size="w45"
          />
          <span class="ml-4">{{ result["title"] }}</span>
    </div>
      </li>
    </ul>
    <div class="px-3 py-3" v-else>No results for "{{ search }}"</div>
  </div>
</template>
