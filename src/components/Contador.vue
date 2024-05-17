<template>


    <div class="team-1 counter-container">
        <h1>Equipo 1 [{{ usePointsStore }}]</h1>
        <button @click="update_points(1,1)">Sumar</button>
        <button @click="update_points(1,-1)">Restar</button>
    </div>
    <div class="team-2 counter-container">
        <h1>Equipo 2 [{{ usePointsStore }}]</h1>
        <button @click="update_points(2,1)">Sumar</button>
        <button @click="update_points(2,-1)">Restar</button>
    </div>

      </template>
  
  <script setup>

  import { usePointsStore } from "@/stores/points"
  import main_client from "@/main"

  function update_points(team_id, num) {
    main_client.emit('update_points', team_id, usePointsStore.points.value[team_id] + num)

  }
 
  </script>
  
  