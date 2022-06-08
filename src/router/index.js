import {createRouter, createWebHistory} from 'vue-router'


const JobView = () => import ("@/views/JobView");
const HomeView = () => import("@/views/HomeView");
const JobResultsView = ()=> import("@/views/JobResultsView");

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/jobs/results',
        name: 'JobResults',
        component: JobResultsView
    },
    {
        path: '/jobs/results/:id',
        name: 'JobListing',
        component: JobView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
