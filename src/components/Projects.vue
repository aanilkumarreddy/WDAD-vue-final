<template>
  <div id="projects" class="notifier mt-10">
    <div class="card vertical-center title-card">
      <span class="card-title"> PROJECTS </span>
      <span class="material-icons md-36 pd-10">description </span>
    </div>
  </div>

  <div class="projects mt-10">
    <section class="projects-section">
      <div class="card content-card">
        <div class="row">
          <div class="left-content">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Lf5KMz9Bx3PCa6m--iHYpAzJxk0S6PgNog&usqp=CAU"
                height="100px"
                width="100px"
                alt="LOGISTICS"
              />
            </div>
            <div class="vertical-line"></div>
          </div>
          <div class="card-content">
            <div class="row card-content">
              <div>
                <div class="column">
                  <div>LOGISTICS PROJECT</div>
                </div>
              </div>
              <div>
                01-11-2020
                <span class="material-icons inline-icon">arrow_forward</span>
                27-07-2021
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-10 content-card">
        <div class="row">
          <div class="left-content">
            <div>
              <img
                src="https://anil-portfolio.firebaseapp.com/assets/images/marriot.png"
                height="100px"
                width="100px"
                alt="AIRLINES"
              />
            </div>
            <div class="vertical-line"></div>
          </div>
          <div class="card-content">
            <div class="row card-content">
              <div>
                <div class="column">
                  <div>AIRLINES PROJECT</div>
                </div>
              </div>
              <div>
                11-03-2019
                <span class="material-icons inline-icon">arrow_forward</span>
                31-10-2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Projects",
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
