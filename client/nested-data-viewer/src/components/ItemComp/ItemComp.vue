<!-- ItemComp Componnet -->
<!-- The component is responsible for displaying an individual item and its subitems-->

<template>
  <div class="item font-class">
    <div class="header-item ">
      <h3  @click="toggleExpanded">{{ item.name }} <i v-if="item.subitems" :class="{'fa-chevron-down': !isExpanded, 'fa-chevron-up': isExpanded}" class="fas icon"></i></h3>
      <router-link :to="{ name: 'ItemDetails', params: { id: item.id } }" class="item-link">
        <i class="fas fa-eye eye-icon" aria-label="Show Item"></i>
        <span class="tooltip">Show Item</span>
      </router-link>
    </div>
    <div v-if="isExpanded && item.subitems" class="subitems">
      <SubItem 
        v-for="subitem in item.subitems" 
        :key="subitem.id" 
        :subitem="subitem"
      />
    </div>
  </div>
</template>

<script>
import './ItemComp.css'; 
import { defineComponent, ref } from 'vue'
import SubItem from '../SubItem/SubItem.vue'

export default defineComponent({
  name: 'ItemComp',
  components: {
    SubItem
  },
  props: {
    item: {
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

