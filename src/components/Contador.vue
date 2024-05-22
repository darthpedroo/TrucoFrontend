<script setup>

import main_client from "@/main"
import { usePointsStore } from "@/stores/points"

const PointsStore = usePointsStore()

function update_points(team_id, num) {
  main_client.emit('update_points', team_id, num)
}

</script>
<template>


    <div class="team-1 counter-container">
        <h1>team 1: {{ PointsStore.points.points['1'] }}</h1>
        <button @click="update_points(1,1)">Sumar</button>
        <button @click="update_points(1,-1)">Restar</button>
    </div>
    <div class="team-2 counter-container">
      <h1>team 2: {{ PointsStore.points.points['2'] }}</h1>
        <button @click="update_points(2,1)">Sumar</button>
        <button @click="update_points(2,-1)">Restar</button>
    </div>

      </template>
  

  
  