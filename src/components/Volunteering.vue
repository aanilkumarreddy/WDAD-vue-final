<template>
  <div id="volunteering" class="notifier mt-10">
    <div class="card vertical-center title-card">
      <span class="card-title"> VOLUNTEERING </span>
      <span class="material-icons md-36 pd-10">favorite </span>
    </div>
  </div>

  <div class="volunteering mt-10">
    <section class="volunteering-section">
      <div class="card content-card">
        <div class="row">
          <div class="left-content">
            <div>
              <img
                src="https://anil-portfolio.firebaseapp.com/assets/images/ciencia.png"
                height="100px"
                width="100px"
                alt="ciencia"
              />
            </div>
            <div class="vertical-line"></div>
          </div>
          <div class="card-content">
            <div class="row card-content">
              <div>
                <div class="column">
                  <div>CIENCIA 2K18</div>
                  <div>Hospitality Head at Ciencia 2K18</div>
                </div>
              </div>
              <div>
                17-02-2018
                <span class="material-icons inline-icon">arrow_forward</span>
                16-03-2018
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
                src="https://anil-portfolio.firebaseapp.com/assets/images/happo.jpg"
                height="100px"
                width="100px"
                alt="happy happo hub"
              />
            </div>
            <div class="vertical-line"></div>
          </div>
          <div class="card-content">
            <div class="row card-content">
              <div>
                <div class="column">
                  <div>HAPPY HAPPO HUB</div>
                </div>
              </div>
              <div>
                21-07-2018
                <span class="material-icons inline-icon">arrow_forward</span>
                22-07-2018
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
  name: "Volunteering",
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
