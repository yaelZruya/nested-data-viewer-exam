import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: []
  }),
  actions: {
    //gat the all categories data
    async fetchCategories() {
      const response = await fetch('/api/data')
      const data = await response.json()
      this.categories = data
    }
  },
  getters: {
    //for filter categories by the searchBar componnet 
    getFilteredCategories: (state) => (searchQuery) => {
      if (!searchQuery) return state.categories

      return state.categories.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.subitems && item.subitems.some(subitem => 
            subitem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            subitem.details.toLowerCase().includes(searchQuery.toLowerCase())
          ))
        )
      })).filter(category => category.items.length > 0)
    }
  }
})