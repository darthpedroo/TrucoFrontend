import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMesaCardStore = defineStore("mesaCards", ()=> {
    const mesa_cards = ref({
        mesa_cards: []
    });

    const setCards = (newCards) => {        
        mesa_cards.value.mesa_cards = newCards;
    }


    

    return {
        mesa_cards,
        setCards,
    
    }
})


