<!-- ItemDetails Componnet -->
<!-- The component is responsible for displaying item or subitem details based on the ID it receives-->

<template>
  <div class="item-details font-class" v-if="item">  
    <h2 class="item-title ">{{ item.name }}</h2>
    <p class="item-description ">{{ item.details }}</p>
    <div v-if="item.subitems && item.subitems.length">
      <h3 class="subitems-title ">Subitems</h3>
      <ul class="subitems-list">
        <li v-for="subitem in item.subitems" :key="subitem.id" class="subitem">
          <strong>{{ subitem.name }}:</strong> {{ subitem.details }}
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="loading-message">
    <p >Loading item details...</p>
  </div>
</template>

<script>
import  './ItemDetails.css'; 
import { computed } from 'vue'
import { useCategoriesStore } from  '../../stores/categories';


export default {
  name: 'ItemDetails',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const store = useCategoriesStore()

    // Find the item or subitem with the matching id
    const item = computed(() => {
      const { categories } = store
      if (!props.id) return null
      
      for (const category of categories) {
        for (const item of category.items) {
          if (item.id == props.id) {
            return item
          }
          if (item.subitems) {
            const subitem = item.subitems.find(sub => sub.id == props.id)
            if (subitem) {
              return subitem
            }
          }
        }
      }
      return null
    })

    return {
      item
    }
  }
}
</script>


