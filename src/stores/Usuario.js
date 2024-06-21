import { ref, computed } from "vue";
import { defineStore } from "pinia";
import VueJwtDecode from 'vue-jwt-decode';

export const useUsuarioStore = defineStore("usuario", () => {
    const usuario_data = ref({
        username: '',
        id: '',
    });

    const set_username = (newUsername) => {
        usuario_data.value.username = newUsername;
    }

    const set_username_by_storage = () => {
        const data = get_user_data();
        usuario_data.value.username = data.username; 
        usuario_data.value.id = data.user_id;
    };

    const get_user_data = () => {
        const tokenString = localStorage.getItem("authTokens");
        let token = {};

        if (tokenString) {
            token = JSON.parse(tokenString);
        }

        const access = token['access'];

        let decodedToken = {};
        if (access) {
            decodedToken = VueJwtDecode.decode(access);
            console.log(decodedToken);
        }

        return decodedToken;
    };

    const remove_data = () => {
        usuario_data.value.username = undefined // MEDIO TOILET !
        usuario_data.value.id = undefined
    }

    return {
        usuario_data,
        set_username,
        set_username_by_storage,
        remove_data,
    };
});
