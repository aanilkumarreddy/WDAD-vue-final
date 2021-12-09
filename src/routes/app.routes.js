import { createRouter, createWebHistory } from "vue-router";

import Books from "./../components/Books.vue";
import BookDetails from "./../components/BookDetails.vue";

const routes = [
  { path: "/", redirect: "/books" },

  {
    path: "/books",
    component: Books,
  },
  {
    path: "/bookDetails/:id",
    component: BookDetails,
  },
  { path: "/:catchAll(.*)", redirect: "/" },

  //   { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
