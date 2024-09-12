<!-- CategoryItem Componnet -->
<!-- The component is responsible for displaying a category -->

<template>
  <div class="category font-class">
    <h2 @click="toggleExpanded">
        {{ category.name }} <i :class="{'fa-chevron-down': !isExpanded, 'fa-chevron-up': isExpanded}" class="fas icon"></i>
    </h2>
    <div v-if="isExpanded" class="items">
      <ItemComp 
        v-for="item in category.items" 
        :key="item.id" 
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import './CategoryItem.css'; 
import { defineComponent, ref } from 'vue'
import ItemComp from '../ItemComp/ItemComp.vue'

export default defineComponent({
  name: 'CategoryItem',
  components: {
    ItemComp
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  setup() {
    const isExpanded = ref(false)

    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value
    }

    return {
      isExpanded,
      toggleExpanded
    }
  }
})
</script>
