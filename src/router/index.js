import VueRouter from "vue-router";
import AllFilmsPage from "./../pages/AllFilmsPage.vue";
import MainPage from "../pages/MainPage.vue";
import FilmPage from "./../pages/FilmPage.vue";
import FilmsLayout from "../pages/FilmsLayout.vue";
// import NotFound from "../pages/404.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/films",
      component: FilmsLayout,
      children: [
        {
          path: "",
          name: "films",
          component: AllFilmsPage,
        },
        {
          path: ":id",
          name: "filmPage",
          component: FilmPage,
          beforeEnter: (to, from, next) => {
            if(localStorage.getItem('auth')) {
              next()
            } else {
              next({name: 'films'})
            }
          }
        },
        {
          path: "*",
          redirect: { name: 'films' }
        },
      ],
    },
    {
      path: "*",
      name: "main",
      component: MainPage ,
    },
  ],
});
