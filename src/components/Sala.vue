<template>
  <div>
    <h1>Sala giga: {{ SalaId }}</h1>
    
    <!-- Render the list of users -->
    <ul>
      <li v-for="(user, index) in CardStore.users_connected.users" :key="index">
        {{ user }}
      </li>
    </ul>

    <Mano>

    </Mano>

    <!-- Render socket-card pairs -->
    <div class="sockets-container">
      <div v-for="(pair, index) in MesaCardStore.mesa_cards" :key="index" class="socket-card-pair">
        <div v-for="(card, socket) in pair" :key="socket" class="card" :class="{ 'left-socket': socket === leftSocketId, 'right-socket': socket === rightSocketId }">
          {{ socket }}: {{ card }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useMesaCardStore } from '@/stores/cartasMesa';
import Mano from './Mano.vue';

const MesaCardStore = useMesaCardStore();
const CardStore = useUserStore();
const route = useRoute();
const SalaId = ref(route.params.salaId);

// Determine left and right socket IDs
const leftSocketId = "-sQ55EIcP73mo4RhAAAO";
const rightSocketId = "rRxPAHwQGtT8jeczAAAP";
</script>

<style>
.sockets-container {
  display: flex;
  justify-content: space-between;
}

.socket-card-pair {
  margin-bottom: 20px;
}

.card {
  padding: 10px;
  border: 1px solid black;
  margin: 5px;
}

.left-socket {
  background-color: lightblue;
}

.right-socket {
  background-color: lightgreen;
}
</style>
