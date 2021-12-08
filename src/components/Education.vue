<template>
  <div id="education" class="notifier mt-10">
    <div class="card vertical-center title-card">
      <span class="card-title"> EDUCATION </span>
      <span class="material-icons md-36 pd-10">school </span>
    </div>
  </div>

  <div class="education mt-10">
    <section class="education-section">
      <div class="card content-card">
        <div class="row">
          <div class="left-content">
            <div>
              <img
                src="https://anil-portfolio.firebaseapp.com/assets/images/unh.png"
                height="100px"
                width="100px"
                alt="UNH"
              />
            </div>
            <div class="vertical-line"></div>
          </div>
          <div class="card-content">
            <div class="row card-content">
              <div>
                <div class="column">
                  <div>UNIVERSITY OF NEW HAVEN</div>
                  <div>Master of Sciences | Computer Science</div>
                </div>
              </div>
              <div>
                23-07-2021
                <span class="material-icons inline-icon">arrow_forward</span>
                now
                <span class="material-icons inline-icon">access_time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card content-card mt-10">
        <div class="row">
          <div class="left-content">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jcYycOqwM1S6zBuIZC1R1GQuMDUcxCwNsw&usqp=CAU"
                height="100px"
                width="100px"
                alt="CVR"
              />
            </div>
            <div class="vertical-line"></div>
          </div>
          <div class="card-content">
            <div class="row card-content">
              <div>
                <div class="column">
                  <div>CVR COLLEGE OF ENGINEERING</div>
                  <div>Bachelor of Technology | ECE</div>
                </div>
              </div>
              <div>
                15-08-2014
                <span class="material-icons inline-icon">arrow_forward</span>
                13-04-2018
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
  name: "Education",
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
