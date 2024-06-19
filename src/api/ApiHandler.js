import api from "./Api"

export function registerUser(data) {
    console.log('data: ', data);
    return api()
      .post('register', data)
      .then(response => {
        console.log('Registration successful', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('An error occurred during registration', error.response?.data || error.message);
        throw error.response?.data || error;
      });
  }
