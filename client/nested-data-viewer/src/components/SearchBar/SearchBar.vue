<!-- SearchBar Componnet -->
<!-- The component allows searching for information and filters the categories accordingly -->

<template>
  <div class="search-bar">
    <input 
      type="text" 
      v-model="searchQuery" 
      @input="emitSearch" 
      placeholder="Search for items and subitems"
    />
  </div>
</template>

<script>
import  './SearchBar.css'; 
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SearchBar',
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('')

    const emitSearch = () => {
      emit('search', searchQuery.value)
    }

    return {
      searchQuery,
      emitSearch
    }
  }
})
</script>

