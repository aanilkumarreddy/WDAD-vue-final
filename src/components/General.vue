<template>
  <div id="overview" class="notifier">
    <div class="card vertical-center title-card">
      <span class="card-title"> OVERVIEW </span>
      <span class="material-icons md-36 pd-10">account_circle </span>
    </div>
  </div>
  <div class="about-me mt-10">
    <section class="about-me-section">
      <div class="card">
        <div class="column bb">
          <div class="row ht-60 pd-5-10">
            <div>
              <img
                class="rounded-img"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profile pic"
              />
            </div>
            <div class="column justify-center">
              <div class="card-title">ABOUT ME</div>
              <div class="card-sub-title">Software Engineer</div>
            </div>
          </div>

          <div class="row">
            <img
              class="abt-img"
              src="https://anil-portfolio.firebaseapp.com/assets/images/anil.jpg"
              alt="profile photo"
            />
          </div>

          <div class="row">
            <p class="pd-r-l-10">
              This website shall give you an impression of me and encourage your
              interest in hiring me. Please navigate through the site in order
              to find out more.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="hobbies-intrests mt-10">
    <section class="hobbies-intrests-section">
      <div class="card hobbies-card">
        <div class="column">
          <div class="row">
            <span class="card-title"> Hobbies and Intrests </span>
          </div>
          <div class="row m-t-b-5">
            <div class="column">
              <div class="">Playing games</div>
              <div class="">cricket, badminton etc...</div>
            </div>
          </div>
          <div class="row m-t-b-5">
            <div class="column">
              <div class="">Reading articles</div>
              <div class="">political, economics etc...</div>
            </div>
          </div>
          <div class="row m-t-b-5">
            <div class="column">
              <div class="">Organizing events</div>
              <div class=""></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "General",
  props: {
    msg: String,
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
