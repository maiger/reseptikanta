import { createRouter, createWebHistory } from "vue-router";
import RecipeView from "../views/RecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RecipeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/recipes/:id",
      name: "recipes",
      component: () => import("../views/RecipeDetailsView.vue"),
    },
  ],
});

export default router;
