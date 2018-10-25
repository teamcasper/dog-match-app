const URL = '/api';
const USERS_URL = `${URL}/users`;
const DOGS_URL = `${URL}/dogs`;

function responseHandler(response) {
    if(response.ok) return response.json();
    return response.json().then(body => {
      throw body.error;
    });
  }
  
  function getHeaders() {
    const headers = { 'Content-type': 'application/json' };
    const token = checkForToken();
    if(token) headers['Authorization'] = token;
    return headers;
  }

  function storeToken(userToken) {
    const token = userToken;
    window.localStorage.setItem('token', token);
  }

  export function signUp(credentials) {
    return fetch(`${USERS_URL}/signup`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(credentials)
    })
      .then(responseHandler)
      .then(res => {
        storeToken(res.token);
        return res.body;
      });
  }
  
  export function signIn(credentials) {
    return fetch(`${USERS_URL}/signin`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(credentials)
    })
      .then(responseHandler)
      .then(res => {
        storeToken(res.token);
        return res.token;
      });
  }
  
  export function signOut() {
    window.localStorage.removeItem('token');
  }

  export function checkForToken() {
    const token = window.localStorage.getItem('token');
    if(!token) {
      return null;
    }
    else return token;
  }

  export function addDog(name, description, weight, price, photoUrl, gender, spayedOrNeutered) {
      return fetch(DOGS_URL, {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify({
            name: name,
            description: description,
            weight: weight,
            price: price,
            photoUrl: photoUrl,
            gender: gender,
            spayedOrNeutered: spayedOrNeutered
          })
      })
        .then(responseHandler);
  }