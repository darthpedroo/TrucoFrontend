<script setup>

import { useCardStore } from '@/stores/cards';
const store = useCardStore()

</script>

<template>

    <h1>CARTAS: {{store.hand_cards.cards}}</h1>
</template>