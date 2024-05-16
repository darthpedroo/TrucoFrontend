import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", ()=> {
    const users_connected = ref({
        users: []
    });

    
    const setUsers = (newUsers) => {
        users_connected.value.users = newUsers;
    }

    return {
        users_connected,
        setUsers,

    }
})


