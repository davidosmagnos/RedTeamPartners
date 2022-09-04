import { createApp } from 'vue'
import App from './App.vue'
import Partners from './components/Partners.vue'
import Index from "./components/Index"
import Services from "./components/Services.vue"
import AboutUs from "./components/about-us.vue"
import KnowHow from "./components/KnowHow.vue"
import Careers from "./components/Careers.vue"
import Blogs from "./components/Blogs.vue"
import News from "./components/News.vue"
import GetInTouch from "./components/GetInTouch.vue"
import Products from "./components/Products.vue"
import Admin from "./components/admin.vue"
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:"/",
        name:"Index",
        component:Index
    },
    {
        path:"/partners",
        name:"Partners",
        component:Partners
    },
    {
        path:"/services",
        name:"Services",
        component:Services
    },
    {
        path:"/about-us",
        name:"About us",
        component:AboutUs
    },
    {
        path:"/know-how",
        name:"Know How",
        component:KnowHow
    },
    {
        path:"/careers",
        name:"Careers",
        component:Careers
    },
    {
        path:"/blogs",
        name:"Blogs",
        component:Blogs
    },
    {
        path:"/news",
        name:"News",
        component:News
    },
    {
        path:"/get-in-touch",
        name:"Get in touch",
        component:GetInTouch
    },
    {
        path:"/products",
        name:"Products",
        component:Products
    },
    {
        path:"/admin",
        name:"Admin",
        component:Admin
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


createApp(App).use(router).mount('#app')
