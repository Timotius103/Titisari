import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
function importComponent(path) {
    return () => import(`./components/${path}.vue`)
}
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
           
            path: "/",
            name: "Root",
            meta: { title: 'Agragendis Residence' },
            component:  importComponent('Home'),
            
        },
    ]
});

export default router;


// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }


// const routes = [
//   { path: '/', component: importComponent('Home'), },
// ]

// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHashHistory(),
//   routes, 
// })

// const app = Vue.createApp({})

// app.use(router)

// app.mount('#app')