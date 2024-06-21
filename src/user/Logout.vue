<script setup>

import { useUsuarioStore } from '@/stores/Usuario';

let usuarioStore = useUsuarioStore()

function logout(){
    localStorage.removeItem("authTokens"); 
    usuarioStore.remove_data()
}

</script>

<template>
    <button @click="logout()">LOGOUT</button>
</template>