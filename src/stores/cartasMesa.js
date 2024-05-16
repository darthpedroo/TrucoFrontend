import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMesaCardStore = defineStore("mesaCards", ()=> {
    const mesa_cards = ref({
        mesa_cards: []
    });

    const setCards = (newCards) => {       
        console.log("Setting cards: ", newCards) 
        mesa_cards.value.mesa_cards = newCards;
        console.log(mesa_cards.value.mesa_cards)

    }


    

    return {
        mesa_cards,
        setCards,
    
    }
})


