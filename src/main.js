import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Cards from './components/Cards.vue';
import Test from './components/Test.vue';
import Home from './components/Home.vue';
import Sala from './components/Sala.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/test', name: "test", component: Test},
        {path: '/Cards',  component: Cards },
        
        {
            path: '/sala/:salaId',
            name: 'Sala',
            component: Sala
          },

    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')