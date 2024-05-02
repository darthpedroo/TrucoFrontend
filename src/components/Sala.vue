<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const SalaId = route.params.salaId

console.log("Sala id: ", SalaId)


</script>

<template>

    <h1>Sala giga: {{ SalaId }}</h1>

</template>
  