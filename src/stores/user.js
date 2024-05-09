import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", ()=> {
    const users_connected = ref({
        users: []
    });

    
    const setUsers = (newUsers) => {
        const rawValuesArray = newUsers.map(user => user._rawValue);
        users_connected.value.users = rawValuesArray;
    }

    return {
        users_connected,
        setUsers,

    }
})


