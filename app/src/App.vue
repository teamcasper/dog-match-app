<template>
  <div id="app">
    <p id="logo">Dog Match</p>
    <header>
      <a v-if="user" href="/">Home</a>
      <router-link v-if="!user" to="/auth">Sign in</router-link>
      <a v-if="user" href="/" @click.prevent="handleSignOut">Sign Out</a>
      <router-link to="/dogs" v-if="user"></router-link>
      <router-link v-if="user" to="/"></router-link>
      <span class="user" v-if="user">user: {{ user.name }}</span> 
    </header>
    <router-view class="routes" :onUser="handleUser" :user="user"></router-view>
  </div>
</template>

<script>

import { checkForToken, signOut } from './services/api';

export default {
  name: 'app',
  components: {
  },
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
  margin-top: 60px;
}
</style>
