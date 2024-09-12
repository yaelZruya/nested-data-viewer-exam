<!-- SubItem Componnet -->
<!-- The component is responsible for displaying a subitem data -->

<template>
  <div class="subitem font-class">
    <div class="subitem-header">
      <h4>{{ subitem.name }}</h4>
      <router-link :to="{ name: 'ItemDetails', params: { id: subitem.id } }" class="subitem-link">
        <i class="fas fa-eye eye-icon" aria-label="Show Item"></i>
        <span class="tooltip">Show Item</span>
      </router-link>
    </div>
  </div>
</template>


<script>
import  './SubItem.css'; 
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SubItem',
  props: {
    subitem: {
      type: Object,
      required: true
    }
  }
})
</script>


