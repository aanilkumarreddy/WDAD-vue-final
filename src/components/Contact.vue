<template>
  <div id="contact" class="notifier mt-10">
    <div class="card vertical-center title-card">
      <span class="card-title"> CONTACT </span>
      <span class="material-icons md-36 pd-10">email </span>
    </div>
  </div>

  <div class="contact mt-10">
    <section class="conatct-section">
      <div class="card content-card column-start">
        <div class="card-title">General</div>
        <div class="column">
          <div class="row">
            <span class="material-icons md-24 pd-10 inline-icon">place </span
            ><span>New Haven, CT, USA</span>
          </div>
          <div class="row">
            <span class="material-icons md-24 pd-10 inline-icon">email </span
            ><span>
              <a href="mailto: aalli2@unh.newhaven.edu"
                >aalli2@unh.newhaven.edu
              </a>
            </span>
          </div>
          <div class="row">
            <span class="material-icons md-24 pd-10 inline-icon">phone </span
            ><span> <a href="tel: +1 475 800 2465"> +1 475 800 2465</a></span>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="contact mt-10">
    <section class="conatct-section">
      <div class="card content-card column-start">
        <div class="card-title">OTHER PROFILES ON WEB</div>
        <div class="column">
          <div class="row">
            <span class="material-icons md-24 pd-10 inline-icon">place </span
            ><span>New Haven, CT, USA</span>
          </div>
          <div class="row">
            <span class="material-icons md-24 pd-10 inline-icon">email </span
            ><span>
              <a href="mailto: aalli2@unh.newhaven.edu"
                >aalli2@unh.newhaven.edu
              </a>
            </span>
          </div>
          <div class="row">
            <span class="material-icons md-24 pd-10 inline-icon">phone </span
            ><span> <a href="tel: +1 475 800 2465"> +1 475 800 2465</a></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column-start {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
