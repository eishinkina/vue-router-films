import VueRouter from 'vue-router'
import AllFilmsPage from "./../pages/AllFilmsPage.vue"
import MainPage from "../pages/MainPage.vue"
import FilmPage from "./../pages/FilmPage.vue"
// import FilmsLayout from "../pages/FilmsLayout.vue"
import NotFound from "../pages/404.vue"



export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/films',
      name: 'films',
      component: AllFilmsPage
    },
    {
      path: '/films/:id',
      name: 'filmPage',
      component: FilmPage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
