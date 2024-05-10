import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCardStore = defineStore("cards", ()=> {
    const hand_cards = ref({
        cards: []
    });

    
    const setCards = (newCards) => {
        
        hand_cards.value.cards = newCards;
    }

    return {
        hand_cards,
        setCards,

    }
})


