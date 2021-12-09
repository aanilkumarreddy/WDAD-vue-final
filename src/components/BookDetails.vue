<template>
  <div class="column width-100">
    <div id="publications" class="notifier mt-10">
      <div class="card vertical-center title-card">
        <span class="card-title">BOOK DETAILS</span>
      </div>
    </div>
    <div class="card-container mt-20">
      <div class="card">
        <div class="column">
          <div>
            <span class="horizontal-center paper-title">
              Title: {{ this.bookDetails?.title }}
            </span>
          </div>
          <div>
            <div><b>Description: </b>{{ this.bookDetails.description }}</div>
            <div>
              <b> Published </b>{{ this.bookDetails.published ? "Yes" : "No" }}
            </div>

            <div>
              <b>Created At : </b>{{ new Date(this.bookDetails.createdAt) }}
            </div>

            <div>
              <b> Last Updated At :</b>
              {{ new Date(this.bookDetails.updatedAt) }}
            </div>
            <div></div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Book from "./Book.vue";
import axios from "axios";

export default {
  name: "BookDetails",
  props: {
    books: Array,
  },
  components: {
    // Book,
  },
  data() {
    return {
      bookDetails: {},
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    axios
      .get(
        "https://wdad-nodejs.herokuapp.com/api/books/" + this.$route.params.id
      )
      .then((res) => {
        this.bookDetails = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
  justify-content: center;
}
.notifier {
  width: 100%;
}
.width-100 {
  width: 100%;
}
.column {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
