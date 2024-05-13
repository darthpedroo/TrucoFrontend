<template>
  <div>
    <h1 class="sala-title">[ID SALA]: {{ SalaId }}</h1>
    
    <h2 class="user-title">Jugadores</h2>
    <ul>
      <li v-for="(user, index) in UserStore.users_connected.users" :key="index">
        {{ user }}
      </li>
    </ul>



      <div class="sockets-container">

      <div v-for="(pair, index) in MesaCardStore.mesa_cards" :key="index" class="socket-card-pair">

        <div  class="enemy thrown-card-container">
          <div v-for="(card_thrown, pair_index) in pair" :key="pair_index" class="thrown-card-image-container">
            <img v-if="pair_index % 2 === 1" :src="`../../public/cards/${Object.values(card_thrown)[0]}.png`" :alt="'Carta' + Object.values(card_thrown)[0]" class="thrown-card-image">
          </div>
        </div>

        <div  class="friend thrown-card-container">
          <div v-for="(card_thrown, pair_index) in pair" :key="pair_index" class="thrown-card-image-container">
            <img v-if="pair_index % 2 === 0" :src="`../../public/cards/${Object.values(card_thrown)[0]}.png`" :alt="'Carta' + Object.values(card_thrown)[0]" class="thrown-card-image">
          </div>
        </div>
      </div>

      </div>

    <Mano></Mano>
    
  </div>
</template>

<style>
:root {
  --card-size: 100px;
  --card-gap: 0;
}

input, button {
  color: black;
}

.sockets-container {
  display: flex;
  justify-content: space-between;
}

.socket-card-pair {
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% - 75px));
  
  width: calc(var(--card-size)*3);

  background-color: gray;
}

.thrown-card-image-container {
  display: inline-block;
  max-width: var(--card-size);
}

.thrown-card-container {
  display: flex;
  flex-direction: row;
}

.thrown-card-image {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}

.friend.thrown-card-container {
 background-color: blue;
}

.enemy.thrown-card-container {
  background-color: red;
}

</style>


<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useMesaCardStore } from '@/stores/cartasMesa';
import Mano from './Mano.vue';
import { useCardStore } from '@/stores/cards';

const MesaCardStore = useMesaCardStore();
const UserStore = useUserStore();
const route = useRoute();
const SalaId = ref(route.params.salaId);

</script>

