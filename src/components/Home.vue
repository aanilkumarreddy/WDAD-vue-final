<template>
  <LibraryHeader />

  <div class="row content-wrap mt-20">
    <router-view />
  </div>
</template>

<script>
import LibraryHeader from "./LibraryHeader.vue";
// import Books from "./Books.vue";
// import axios from "axios";

export default {
  name: "Home",
  components: {
    LibraryHeader,
    // Books,
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
