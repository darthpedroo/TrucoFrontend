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

    <h1>CARTAS: {{store.hand_cards.cards}}</h1>

    <button @click="tirar_carta(0)"> {{store.hand_cards.cards[0]}} </button>
    <button @click="tirar_carta(1)"> {{store.hand_cards.cards[1]}} </button>
    <button @click="tirar_carta(2)"> {{store.hand_cards.cards[2]}} </button>
</template>