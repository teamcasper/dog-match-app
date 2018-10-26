<template>
  <div v-if="user">
    <br>
    <div>

    </div>
    <router-view></router-view>
  </div>  
</template>

<script>

export default {
  props: {
    user: String
  }
};

</script>