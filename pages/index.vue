<template>
  <v-container>
    <v-img></v-img>
    <h1 class="text-center">Welcome to Twifer</h1>
    <p class="text-center mt-12">
      The website is currently on progress...
    </p>
    <p>
      b
      {{ isAuthenticated }}
    </p>
    <p v-if="isAuthenticated">
      aaa
    </p>
  </v-container>
</template>

<script>
export default {
  layout: "default",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>
