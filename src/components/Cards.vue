<template>
    <div>
    <p>CARTAS:</p>
    <ul>
      <li v-for="(card, index) in cartas" :key="index">{{card.nombre}}</li>
    </ul>
  </div>
  </template>
  
  <script>
  import { state } from "@/socket";
  
  export default {
    name: "Cards",
  
    computed: {
      cartas() {
        return state.cartas;
      }
    }
  }
  </script>
  