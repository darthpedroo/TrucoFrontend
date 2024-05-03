<script setup>

import { socket } from '@/socket';
import { ref, onMounted } from 'vue';

const R_RoomId = ref(0)
const R_Username = ref('')

onMounted(() => console.log(R_RoomId.value))

function greet() {
   /// R_RoomId.value = 100
    console.log("ping: ", R_RoomId.value)
    socket.emit("ping")
}

function join_room(RoomId){
    console.log("XD: ", R_RoomId)
    console.log(RoomId)
    socket.emit("join_room", RoomId, R_Username);
}

function changeUsername(newUsername){
    R_Username.value = newUsername
}

function changeRoomId(valor){
    console.log("valor: ", valor)
    console.log("ROM : ",R_RoomId )
    R_RoomId.value = valor

}
    

</script>

<template>
    <div>
      
    
    <h1>Main motherfucking menu</h1>
    
        <input @change="changeUsername($event.target.value)" placeholder="Nombre ???">
        <br>
        <input @change="changeRoomId($event.target.value)" placeholder="ingrese el codigo de la sala">

        <h1>REF: {{R_RoomId }}</h1>

        <router-link :to="{ path: `/sala/${R_RoomId}`}"><button @click="join_room(R_RoomId)">UNIRSE A LA SALA</button></router-link>
        
  </div>
  </template>
  