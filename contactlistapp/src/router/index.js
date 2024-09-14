import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactList from '@/components/ContactList.vue'
import DetailContact from '@/components/DetailContact.vue'
import AddContact from '@/components/AddContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: ContactList },
    { path: '/details/:index', name: 'details', component: DetailContact },
    { path: '/add', name: 'add', component: AddContact }
  ]
})

export default router
