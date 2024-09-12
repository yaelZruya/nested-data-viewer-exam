<!-- CategoryList Componnet -->
<!-- The component is responsible for displaying the all category from the List -->

<template>
  <div class="category-list">
    <CategoryItem 
      v-for="category in categories" 
      :key="category.id" 
      :category="category"
    />
  </div>
</template>

<script>
import './CategoryList.css'; 
import { defineComponent } from 'vue'
import CategoryItem from '../CategoryItem/CategoryItem.vue'

export default defineComponent({
  name: 'CategoryList',
  components: {
    CategoryItem
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
})
</script>


