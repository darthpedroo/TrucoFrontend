<script setup>

import { RouterLink, RouterView } from 'vue-router'
  


</script>


<template>
  
  <main class="main-background">

    <header>  TRUCO </header>


    <RouterView>
    </RouterView>
    
  </main>
</template>

<style scoped>
  header {
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
  }
</style>