<script setup>

import { socket } from '@/socket';
import { ref } from 'vue';

const R_RoomId = ref(null)

function greet() {
   /// R_RoomId.value = 100
    console.log("ping: ", R_RoomId.value)
    socket.emit("ping")
}

function join_room(RoomId){
    console.log(RoomId)
    socket.emit("join_room", RoomId);
}

function changeRef(valor){
    console.log("valor: ", valor)
    R_RoomId.value = valor

}
    

</script>

<template>
    <div>
      
    
    <h1>Main motherfucking menu</h1>
    
        <input placeholder="Nombre ???">
        <input @change="changeRef($event.target.value)" placeholder="ingrese el codigo de la sala">

        <button @click="join_room(R_RoomId)" >UNIRSE A LA SALA</button>

  </div>
  </template>
  