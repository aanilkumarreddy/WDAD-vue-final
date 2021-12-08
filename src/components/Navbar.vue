<template>
  <div class="nav-section">
    <nav class="nav-bar">
      <router-link class="nav-content" to="/portfolio/overview"
        >OVERVIEW</router-link
      >
      <router-link class="nav-content" to="/portfolio/experience"
        >EXPERIENCE</router-link
      >
      <router-link class="nav-content" to="/portfolio/education"
        >EDUCATION</router-link
      >
      <router-link class="nav-content" to="/portfolio/projects"
        >PROJECTS</router-link
      >
      <router-link class="nav-content" to="/portfolio/volunteering"
        >VOLUNTEERING</router-link
      >
      <router-link class="nav-content" to="/portfolio/contact"
        >CONTACT</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
