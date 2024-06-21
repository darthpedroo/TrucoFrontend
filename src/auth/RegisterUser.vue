<script setup>

import {registerUser} from '@/api/ApiHandler'
import { ref } from 'vue';

const data = ref({
  username: '',
  email: '',
  password: ''
});
const errorMessage = ref('');

const handleSubmit = async () => {

    const jsondata = JSON.stringify(data.value)
    try {
        registerUser(jsondata)
    }
    catch (error)  {
        console.log("erorr dog : C : ", error)
    }
}


</script>

<template>
    <div class="div">
      <h1>Register</h1>
  
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input
            id="username"
            v-model="data.username"
            type="text"
            required
          />
        </div>
  
        <div>
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="data.email"
            type="email"
            required
          />
        </div>
  
        <div>
          <label for="password">Password:</label>
          <input
            id="password"
            v-model="data.password"
            type="password"
            required
          />
        </div>
  
        <button type="submit">Register</button>
      </form>
  
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>


<style scoped>
.div {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
}
</style>