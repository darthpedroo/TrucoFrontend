import api from "./Api";

export function loginUser(data) {
  return api()
    .post('api/token/', data)
    .then(response => {
      console.log("GOT THE TOKEN SUCCESSFULLY: ", response.data);
      localStorage.setItem('authTokens', JSON.stringify(response.data));
    })
    .catch(error => {
      console.error('An error occurred during obtention of token', error.response?.data || error.message);
      throw error.response?.data || error;
    });
}

export function registerUser(data) {
  return api()
    .post('register', data)
    .then(response => {
      console.log('Registration successful', response.data);
      const { email, ...login_data } = response.data;

      console.log("LOGIN_DATA: ", login_data);
      loginUser(login_data); // Pass username and password separately
      return response.data;
    })
    .catch(error => {
      console.error('An error occurred during registration', error.response?.data || error.message);
      throw error.response?.data || error;
    });
}

