<template>
  <h1>Sala giga: {{ SalaId }}</h1>
  <ul id="example-1">
    <li v-for="jugador in jugadores">
      {{ jugador }}
    </li>
  </ul>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref, reactive } from 'vue';
    import { state } from "@/socket";

    const route = useRoute();
    const SalaId = ref(route.params.salaId);

    console.log("Sala id: ", SalaId.value);

    const jugadores = reactive({
        connectedUsers: state.connected_users
    });

    console.log('CACA CREBO', state.connected_users);
    console.log("J: ", jugadores)

</script>
