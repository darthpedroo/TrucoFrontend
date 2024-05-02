<script setup>

import { socket } from '@/socket';
import { ref, onMounted } from 'vue';

const R_RoomId = ref(0)

onMounted(() => console.log(R_RoomId.value))

function greet() {
   /// R_RoomId.value = 100
    console.log("ping: ", R_RoomId.value)
    socket.emit("ping")
}

function join_room(RoomId){
    console.log("XD: ", R_RoomId)
    console.log(RoomId)
    socket.emit("join_room", RoomId);
}

function changeRef(valor){
    console.log("valor: ", valor)
    console.log("ROM : ",R_RoomId )
    R_RoomId.value = valor

}
    

</script>

<template>
    <div>
      
    
    <h1>Main motherfucking menu</h1>
    
        <input placeholder="Nombre ???">
        <br>
        <input @change="changeRef($event.target.value)" placeholder="ingrese el codigo de la sala">

        <h1>REF: {{R_RoomId }}</h1>

        <router-link :to="{ path: `/sala/${R_RoomId}`}"><button @click="join_room(R_RoomId)">UNIRSE A LA SALA</button></router-link>
        
  </div>
  </template>
  