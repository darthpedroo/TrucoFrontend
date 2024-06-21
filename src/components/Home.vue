<script setup>
import { ref, onMounted } from 'vue';
import main_client from '@/main';
import Username from '../user/Username.vue';
import Logout from '../user/Logout.vue';
import { useUsuarioStore } from '@/stores/Usuario';

const R_RoomId = ref('');
let usuarioStore = useUsuarioStore()

onMounted(() => console.log(R_RoomId.value));

function join_room() {
    console.log("XD: ", R_RoomId.value);
    console.log("i am main: ", main_client);
    main_client.emit("join_room", R_RoomId.value, usuarioStore.usuario_data.username);
}

function changeUsername(newUsername) {
    usuarioStore.set_username(newUsername)
    console.log("sasdsa", usuarioStore.usuario_data.username)
}

function changeRoomId(valor) {
    console.log("valor: ", valor);
    R_RoomId.value = valor;
    console.log("ROM : ", R_RoomId.value);
}
</script>
    
<template>
  <div class="container">
    <h1>Main Menu</h1>

    <Username></Username>

    <div class="button-group">
      <router-link :to="{ path: '/register' }">
        <button>REGISTER</button>
      </router-link>
      <router-link :to="{ path: '/login' }">
        <button>LOGIN</button>
      </router-link>
      <button>
        <Logout></Logout>
      </button>
    </div>
    <div class="input-group">
        <h1>JUEGA BONITO </h1>
        
        <div class="div" v-if="usuarioStore.usuario_data.username === undefined">
            <input @change="changeUsername($event.target.value)" placeholder="Enter your username">
        </div>
      <input @change="changeRoomId($event.target.value)" placeholder="Enter room code">
    </div>
   <h1>TOLOT : {{ R_RoomId }}</h1> 
    <router-link :to="{ path: `/sala/${R_RoomId}` }">
      <button @click="join_room">JOIN ROOM</button>
    </router-link>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background: #0707ee;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.button-group,
.input-group {
  margin-bottom: 20px;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

router-link {
  display: block;
  text-decoration: none;
}
</style>
