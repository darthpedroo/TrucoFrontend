<script setup>

import { useCardStore } from '@/stores/cards';
import { useRoute } from 'vue-router';

import { ref } from 'vue';
import main_client from '@/main'

const store = useCardStore()
const route = useRoute();
const SalaId = ref(route.params.salaId);

function tirar_carta(IndexOfCard){
    const carta = store.hand_cards.cards[IndexOfCard]; // Declare carta here

    if (IndexOfCard > -1) {
        store.removeCardByIndex(IndexOfCard)
    }
    
    main_client.emit("mostrar_carta_tirada", SalaId._rawValue, carta);
}

</script>

<template>

    <div class="mano-container">
        <h1>CARTAS:</h1> 

        <div v-for="card in store.hand_cards.cards" class="card-container">
            <img :src="`../../public/cards/${card}.png`" :alt="'Carta' + card" @click="tirar_carta(store.hand_cards.cards.indexOf(card))" class="card-image">
        </div>
        
    </div>

</template>

<style>
*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    color: white;
}

:root {
    --background-main: #3F403A;
}

.main-background {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: var(--background-main);
}

.mano-container {
    display: inline-flex;
    flex-direction: row;
    gap: 5px;

    position: absolute; 
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 5%;


    padding: 5px;
}

.mano-container h1 {
    display: none
}

.card-container {
    max-width: var(--card-size);
}

.card-image {
    display: inline-block;
    max-width: 100%;
    max-height: 100%
}
</style>