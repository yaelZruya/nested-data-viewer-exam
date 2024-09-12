import { createRouter, createWebHistory } from 'vue-router'
import ItemDetails from '../components/ItemDetails/ItemDetails.vue'

const routes = [
  {
    path: '/item/details/:id',
    name: 'ItemDetails',
    component: ItemDetails,
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router