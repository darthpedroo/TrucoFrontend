import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue';
import Sala from './components/Sala.vue';
import RegisterUser from './auth/RegisterUser.vue';
import LoginUser from './auth/LoginUser.vue';
import Socket from './socket.js'; 
import { createPinia } from 'pinia';

import { useUserStore } from './stores/user';
import { useCardStore } from './stores/cards';
import { useMesaCardStore } from './stores/cartasMesa';
import { usePointsStore } from './stores/points';

import { useUsuarioStore } from './stores/Usuario';

class main {
    constructor(){
        this.router = createRouter({
            history: createWebHistory(),
            routes: [
                {path: '/', name: 'home', component: Home},
                {
                    path: '/sala/:salaId',
                    name: 'Sala',
                    component: Sala
                  },
                {path: '/register', 
                name: 'register', 
                component: RegisterUser},
                {   path: '/login',
                    name: 'login',
                    component: LoginUser
                }
        
            ]
        });

        this.app = createApp(App)
        this.app.use(this.router)
        this.app.use(createPinia())
        this.app.mount('#app')
        this.socket = new Socket(this) // esto puede ser un poco diabolico, pq le estoy pasando esta clase main al socket
        this.UserStore = useUserStore()
        this.CardsStore = useCardStore()
        this.MesaCardStore = useMesaCardStore()
        this.PointsStore = usePointsStore()

        this.UsuarioStore = useUsuarioStore()
        
        this.UsuarioStore.set_username_by_storage()
        
    }

    test_connection(){
        console.log("main runs the fucking test connection")
    }

    test_disconnection(){
        console.log("DISCONENECT!")
    }

    recibir_usuarios(usuarios){
        console.log("faking usuarios: ", usuarios)
        if (usuarios.length < 2) {
            this.CardsStore.setCards([])
        }

        this.UserStore.setUsers(usuarios)
    }

    recibir_cartas(cartas){
        this.MesaCardStore.setCards([])
        console.log("estas son las cartas: ", cartas)
        this.CardsStore.setCards(cartas)
    }
    
    recibir_cartas_tiradas(cartas_mesa){
        console.log("Cartas mnesa;", cartas_mesa)
        this.MesaCardStore.setCards(cartas_mesa)
    }

    join_room(salaId){
        console.log("hola me uni a sala queeee")
        this.PointsStore.resetPoints()
        this.CardsStore.setCards([])
        this.MesaCardStore.setCards([])
    }

    update_points(team_id, points){
        this.PointsStore.setPoints(team_id, points)
    }

    ocultar_cartas(newVisibility) {
        this.UserStore.setStartButtonVisibility(newVisibility)
    }

    remove_user_from_sala(user) {
        this.UserStore.removeUser(user)
    }

    emit(...args){
        // console.log("emitiendo: ", args)
        this.socket.emit(...args)
    }

}

const main_client = new main()

export default main_client