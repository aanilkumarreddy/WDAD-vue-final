<template>
  <header>
    <div class="header-section row">
      <div class="nav-menu hamburger-menu">
        <button class="ham-btn" @click="toggle">
          <span class="material-icons"> menu </span>
        </button>
      </div>
      <div class="vertical-center header-title"><span>ANIL</span></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  methods: {
    toggle() {
      console.log("this is clickde");
    },
  },
};
</script>

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
