import { createRouter, createWebHistory } from "vue-router";
// import Home from "./../components/Home.vue";
import Portfolio from "./../components/Portfolio.vue";
import About from "../components/About.vue";
import General from "../components/General.vue";
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import Volunteering from "../components/Volunteering.vue";
import Contact from "../components/Contact.vue";
import Library from "./../components/Library.vue";
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", redirect: "/portfolio" },
  {
    path: "/portfolio",
    component: Portfolio,
    children: [
      //   { path: "", redirect: "/portfolio" },
      { path: "overview", component: General },
      { path: "education", component: Education },
      { path: "experience", component: Experience },
      { path: "projects", component: Projects },
      { path: "volunteering", component: Volunteering },
      { path: "contact", component: Contact },
      { path: "about", component: About },
    ],
  },
  {
    path: "/library",
    component: Library,
    children: [],
  },
  //   { path: "/:pathMatch(.*)*", redirect: "/" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
