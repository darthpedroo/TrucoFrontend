import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", ()=> {
    const users_connected = ref({
        users: [],
        start_button_is_visible: true
    });

    
    const setUsers = (newUsers) => {
        users_connected.value.users = newUsers;
    }

    const setStartButtonVisibility = (newVisibility) => {
        users_connected.value.start_button_is_visible = newVisibility
    }

    const removeUser = (user) => {
        users_connected.value.users = users_connected.value.users.filter(u => u !== user);
    }

    return {
        users_connected,
        setUsers,
        setStartButtonVisibility,
        removeUser
    }
})


