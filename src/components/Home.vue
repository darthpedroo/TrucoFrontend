<script setup>

import { socket } from '@/socket';

function greet(event) {
    console.log("ping")
    socket.emit("ping")
}

</script>

<template>
    <div>
      
    
    <h1>Main motherfucking menu</h1>
    
        <input placeholder="Nombre ???">
        <input placeholder="ingrese el codigo de la sala">
        <button >UNIRSE A LA SALA</button>
<!-- `greet` is the name of the method defined above -->
<button @click="greet($event.target.value)">BORRAR</button>

  </div>
  </template>
  