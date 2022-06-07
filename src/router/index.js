import {createRouter, createWebHistory} from 'vue-router'

const HomeView = () => import("@/views/HomeView");
const JobResultsView = (/* webpackChunkName: "jobs" */) => import("@/views/JobResultsView");
const JobView = (/* webpackChunkName: "jobs" */) => import("@/views/JobView");

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
