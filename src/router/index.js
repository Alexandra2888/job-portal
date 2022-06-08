import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import("@/views/HomeView");
const JobResultsView = ()=> import("@/views/JobResultsView");
const JobView = ()=> import("@/views/JobView");

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/jobs/results',
        name: 'JobResults',
        component: JobResultsView
    },
    {
        pathL: "/jobs/results/:id",
        name: "JobListing",
        component: JobView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
