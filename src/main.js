import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import App from './App.vue'
import Cards from './components/Cards.vue';
import Test from './components/Test.vue';
import Home from './components/Home.vue';
import Sala from './components/Sala.vue';
import Socket from './socket.js'; 
import { createPinia } from 'pinia';

import { useUserStore } from './stores/user';



class main {
    constructor(){
        this.router = createRouter({
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
        this.app = createApp(App)
        this.app.use(this.router)
        this.app.use(createPinia())
        this.app.mount('#app')
        this.socket = new Socket(this) // esto puede ser un poco diabolico, pq le estoy pasando esta clase main al socket
        this.store = useUserStore()

    }

    test_connection(){
        console.log("main runs the fucking test connection")
    }

    test_disconnection(){
        console.log("DISCONENECT!")
    }

    recibir_usuarios(usuarios){
        console.log("faking usuarios: ", usuarios)
        this.store.setUsers(usuarios)
    }


    emit(...args){
        console.log("emitiendo: ", args)
        this.socket.emit(args)
    }

}

const main_client = new main()

export default main_client