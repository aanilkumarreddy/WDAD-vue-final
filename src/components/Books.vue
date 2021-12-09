<template>
  <div>
    <div id="publications" class="notifier mt-10">
      <div class="card vertical-center title-card">
        <span class="card-title">AVAILABLE BOOKS</span>
      </div>
    </div>
    <div class="row content-wrap mt-20">
      <div class="width-50-75-100" v-for="book in books" :key="book.id">
        <Book :bookDetail="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
import axios from "axios";

export default {
  name: "Books",
  components: {
    Book,
  },
  data() {
    return { books: [] };
  },
  mounted() {
    axios
      .get("https://wdad-nodejs.herokuapp.com/api/books")
      .then((res) => {
        console.log(res);
        this.books = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.notifier {
  width: 100%;
}
</style>
