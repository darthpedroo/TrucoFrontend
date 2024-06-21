<script setup>

import { useUsuarioStore } from '@/stores/Usuario';
import { computed } from 'vue';

let usuarioStore = useUsuarioStore()

const usuarioDataLength = computed(() => {
  const data = usuarioStore.usuario_data;
  // Check if specific fields like 'username' or any other fields are filled
  const fields = Object.values(data).filter(value => value !== '');
  return fields.length;
});


</script>

<template>



    <div class="div" v-if="usuarioStore.usuario_data.username === undefined">
        <h1>SOS UN INVITADO. LOGEATE !</h1>
    </div>

    <div class="div" v-else>
        <h1>BIENVENIDO {{ usuarioStore.usuario_data.username }} !</h1>
        

    </div>

    

    
     
</template>

<style scoped>

h1 {
    color: black;

}

</style>


