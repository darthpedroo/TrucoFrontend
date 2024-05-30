<template>
  <div>
    <h1 class="sala-title">[ID SALA]: {{ SalaId }}</h1>    
    <h2 class="user-title">Jugadores</h2>
    <H1> MESA CARDS STORE {{ MesaCardStore.mesa_cards['mesa_cards']}}</H1>
    <ul>
      <li v-for="(user, index) in UserStore.users_connected.users" :key="index">
        {{ user }}
      </li>
    </ul>

    <Contador></Contador>

    <input type="checkbox" v-model="checked" @click="start_game">Empezar game</input>

    <router-link :to="{ path: `/`}">
      <button @click="leave_room()">SALIR</button>
    </router-link>

      <div class="sockets-container">

      <div class="socket-card-pair">

        <div  class="enemy thrown-card-container">
          <div v-for="(cardObj, card_index) in MesaCardStore.mesa_cards['mesa_cards']" :key="card_index" class="thrown-card-image-container">
            <img :class="cardObj.team_id === 1 ? 'no-display' : ''" :src="`../../public/cards/${cardObj.card}.png`" :alt="'Carta' + cardObj.card" class="thrown-card-image">
          </div>

        </div>

        <div  class="friend thrown-card-container">
          <div v-for="(cardObj, card_index) in MesaCardStore.mesa_cards['mesa_cards']" :key="card_index" class="thrown-card-image-container">
              <img :class="cardObj.team_id === 2 ? 'no-display' : ''" :src="`../../public/cards/${cardObj.card}.png`" :alt="'Carta' + cardObj.card" class="thrown-card-image">
          </div>

        </div>

      </div>

      <button @click="pasar_ronda()">VOLVER A REPARTIR</button>

      </div>

    <Mano></Mano>
    
  </div>
</template>

<style>
:root {
  --card-size: 100px;
  --card-gap: 0;
}

.no-display {display: none !important;}

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
import Contador from './Contador.vue';
import { useCardStore } from '@/stores/cards';
import main_client from '@/main'

const MesaCardStore = useMesaCardStore();
const UserStore = useUserStore();
const route = useRoute();
const SalaId = ref(route.params.salaId);
const checked = ref(false)

function leave_room() {
  main_client.emit('leave_room')
}

function pasar_ronda() {
  main_client.emit('switch_round')
}

function start_game() {
  main_client.emit("start_game", !checked.value)
}

</script>

