import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/Views/HomeComponent.vue"
import ShowsComponent from "../components/Views/ShowsComponent.vue";
import AboutComponent from "../components/Views/AboutComponent.vue";
import ContactComponent from "../components/Views/ContactComponent.vue";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeComponent
    },

    {
        name: 'Shows',
        path: '/shows',
        component: ShowsComponent
    },

    {
        name: 'About',
        path: '/about',
        component: AboutComponent
    },

    {
        name: 'Contact',
        path: '/contact',
        component: ContactComponent
    }
]

const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router;