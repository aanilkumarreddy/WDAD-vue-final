<template>
  <div class="container">
    <div class="inner-container">
      <Header msg="Welcome to Your Vue.js App" />
      <Navbar />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
export default {
  name: "Portfolio",
  components: {
    Header,
    Navbar,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
