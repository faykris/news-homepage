import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home-page.vue"
import About from "../pages/about-page.vue"
import New from "../pages/new-page.vue"
import Popular from "../pages/popular-page.vue"
import Trending from "../pages/trending-page.vue"
import Categories from "../pages/categories-page.vue"


const routes = [
    { path: '/', component: Home }, 
    { path: '/about', component: About },
    { path: '/categories', component: Categories }, 
    { path: '/new', component: New }, 
    { path: '/popular', component: Popular }, 
    { path: '/trending', component: Trending }, 
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;