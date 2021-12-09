<template>
  <div class="card">
    <div class="column">
      <div>
        <span class="horizontal-center paper-title">
          {{ this.bookDetail?.title }}
        </span>
      </div>
      <div>
        {{ this.bookDetail.description }}
      </div>

      <div>
        <router-link :to="'/bookDetails/' + this.bookDetail.id">
          <button class="btn">View Details</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: {
    msg: String,
    bookDetail: Object,
  },
};
</script>
