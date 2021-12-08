<template>
  <div class="card content-card">
    <div class="row">
      <div class="left-content">
        <div>
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLQn0NnQ0UKTufNgoa5uNZ3olaspYxgv8H3rXvpLMw=s900-c-k-c0x00ffffff-no-rj"
            height="100px"
            width="100px"
            alt=""
          />
        </div>
        <div class="vertical-line"></div>
      </div>

      <div class="card-content">
        <div class="row card-content">
          <div>
            <div class="column">
              <div>MINDTREE</div>
              <div>Senior Software Engineer</div>
            </div>
          </div>
          <div>
            30-06-2018
            <span class="material-icons inline-icon">arrow_forward</span>
            30-07-2021
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CvItem",
  props: {
    msg: String,
  },
};
</script>
