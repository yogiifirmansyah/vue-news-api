<script>
import { ref } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const search = ref("");

    return { search };
  },
};
</script>

<template>
  <nav>
    <h3 class="logo">US News</h3>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/business">Business</router-link>
      <router-link to="/entertainment">Entertainment</router-link>
      <router-link to="/general">General</router-link>
      <router-link to="/health">Health</router-link>
      <router-link to="/science">Science</router-link>
      <router-link to="/sports">Sports</router-link>
      <router-link to="/technology">Technology</router-link>
    </div>
    <input type="text" placeholder="Search keyword..." v-model="search" />
  </nav>
  <router-view :search="search" />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

nav {
  display: flex;
  padding: 2rem;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
