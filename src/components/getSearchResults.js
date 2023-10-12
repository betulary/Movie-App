import { ref } from 'vue';

const getSearchResults = () => {
    const searchResults = ref([]);
    const loading = ref(false);

    const loadSearchResults = (search) => {
        loading.value = true;
        if (search.length > 2) {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&query=${search}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('API isteği başarısız oldu');
                    }
                    return response.json();
                })
                .then(data => {
                    loading.value = false;
                    searchResults.value = data.results;
                })
                .catch(error => {
                    loading.value = false;
                    console.error(error);
                });
        } else {
            searchResults.value = [];
        }
    }

    return { searchResults, loading, loadSearchResults };
}

export default getSearchResults;
