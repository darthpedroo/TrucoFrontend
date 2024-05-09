<template>
  <div>
    <h1>Sala giga: {{ SalaId }}</h1>
    
    <!-- Render the list of users -->
    <ul>
      <li v-for="(user, index) in store.users_connected.users" :key="index">
        {{ user }}
      </li>
    </ul>
  </div>
</template>


<script setup>
    import { useRoute } from 'vue-router';
    import { ref, reactive } from 'vue';
    import { useUserStore } from '@/stores/user';
    const store = useUserStore()
    const route = useRoute();
    const SalaId = ref(route.params.salaId);

  
</script>


