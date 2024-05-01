<template>
    <div>
      
    <ul id="example-1">
      <li v-for="carta in cartas">
        {{ carta }}
      </li>
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
  