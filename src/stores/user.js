import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", ()=> {
    const users_connected = ref({
        users: []
    });

    
    const addUser = (newName) => {
        users_connected.value.users = newName 
    }

    return {
        users_connected,
        addUser,

    }
})