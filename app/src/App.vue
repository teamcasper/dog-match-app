<template>
  <div id="app">
    <header>
      <img src="http://www.barkdenver.com/files/5714/2126/5232/s5810nb9g6pio7lr.jpg">
      <h1>Meet Your Best Friend</h1>
      <nav class="menu second">
          <input type="checkbox" id="checkbox2" />
          <label for="checkbox2">
            <a v-if="user" class="nav" href="/">Home</a>
            <router-link class="nav" v-if="!user" to="/auth">Sign in</router-link>
            <a v-if="user" class="nav" href="/" @click.prevent="handleSignOut">Sign Out</a>
            <router-link class="nav" to="/dogs/post">Post A Dog</router-link>
            <router-link class="nav" to="/dogs/search">Search For Dogs</router-link>
            <router-link class="nav" to="/dogs" v-if="user">All Dogs</router-link>
            <span class="toggle">☰</span>
          </label>
      </nav>
    </header>
      
    <router-view class="routes" :onUser="handleUser" :user="user"></router-view>
  </div>
</template>

<script>

import { checkForToken, signOut } from './services/api';

export default {
  name: 'app',
  data() {
    return {
      user: null
    };
  },
  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push('/');
    }
  },
  created() {
    this.user = checkForToken();
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 25px;
}

h1 {
  font-size: 60px;
}

div input {
  padding: 10px;
  margin: 20px;
}

button {
  padding: px 10px;
  font-size: 30px;
}

nav {
  margin: 50px auto;
  max-width: 100%;
  width: 100%;

}

#checkbox2,
.toggle {
  display: none;
}

.menu {
  padding: 20px;
  margin: 0;
  max-width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
}

.menu .nav {
  text-decoration: none;
  align-self: center;
  font-size: 14px;
  padding: 16px 20px;
  color: white;
  font-size: 30px;
  padding: 50px;

}

@media screen and (max-width: 600px) {
  .menu .nav {
    font-size: 13px;
  }
}

@media screen and (max-width: 550px) {
  .toggle {
    clear: both;
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #595959;
    background: #dbdbdb;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 0px;
  }
  .menu .nav {
    display: flex;

  }
  .menu .nav a {
    width: 100%;
    text-align: center;
    align-self: center;
    align-content: center;
  }
}

.second {
  background: #51535f;
}

.second nav {
  color: #fff;
}

body {
  background: #FFF;
}
</style>
