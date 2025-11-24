import { createRouter, createWebHistory } from 'vue-router'
import AuthorizationsView from '../views/AuthorizationsView.vue'
import RegisterMovementView from '../views/RegisterMovementView.vue'
import TrafficBoardView from '../views/TrafficBoardView.vue'

const routes = [
  { path: '/', redirect: '/authorizations' },
  { path: '/authorizations', component: AuthorizationsView },
  { path: '/register', component: RegisterMovementView },
  { path: '/traffic', component: TrafficBoardView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
