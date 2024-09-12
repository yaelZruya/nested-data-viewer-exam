
<template>
  <div id="app">
    <header class="header">
      <h1 class="title font-class">Nested Data Viewer</h1>
      <SearchBar @search="handleSearch" />
    </header>
    <main class="content">
      <div class="container">
        <div class="categories-section">
          <CategoryList :categories="filteredCategories" />
        </div>
        <div class="details-section">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import './assets/styles/global.css';
import { ref, computed } from 'vue'
import { useCategoriesStore } from './stores/categories'
import CategoryList from './components/CategoryList/CategoryList.vue'
import SearchBar from './components/SearchBar/SearchBar.vue'


export default {
  name: 'App',
  components: {
    CategoryList,
    SearchBar
  },
  setup() {
    const store = useCategoriesStore()
    const searchQuery = ref('')

    const filteredCategories = computed(() => {
      return store.getFilteredCategories(searchQuery.value)
    })

    const handleSearch = (query) => {
      searchQuery.value = query
    }

    //get the dada from the api
    store.fetchCategories()

    return {
      filteredCategories,
      handleSearch
    }
  }
}
</script>

