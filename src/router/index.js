import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import Accueil from "../views/Accueil.vue";
import ContactMe from "../views/ContactMe.vue";
import AboutMe from "../components/About/AboutMe.vue";
import Cv from "../views/Cv.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Accueil-page",
        component: Accueil,
      },
      {
        path: "/contact",
        name: "Contact-me",
        component: ContactMe,
      },
      {
        path: "/aboutme",
        name: "About-Me",
        component: AboutMe,
      },
      {
        path: "/Cv",
        name: "mon-cv",
        component: Cv,
      },
      {
        path: "/projets",
        name: "Projects",
        component: Projects,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;