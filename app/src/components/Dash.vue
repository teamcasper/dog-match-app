<template>
  <div v-if="user">
    <h1>Dashboard</h1>
    <br>
    <div>
      <router-link to="/post">Post A Dog</router-link>
      <router-link to="/search">Search For Dogs</router-link>
    </div>
    <router-view></router-view>
  </div>  
</template>

<script>

export default {
  props: {
    user: Object,
    handleNext: Function
  }
};

</script>