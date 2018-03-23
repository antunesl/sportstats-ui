<template>
  <div>
<div class=" hero is-primary">
  <div class="hero-body">
    <section class="container">
      <div>
        <!--- <app-logo/> -->
        <h2 class="title is-2">SPORTSTATS</h2>
        <h4 class="title is-4">Estatísticas de desporto</h4>
      </div>
    </section>
  </div>
</div>
    <section class="container">
      <br>
      <br>
      <h4 class="title is-4 has-text-centered titlesStyle">sports</h4>
      <div>
        <div class="links">
          <a href="/football" target="_blank" class="button is-primary is-outlined">Football</a>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Footer from "~/components/Footer.vue";

export default {
  components: {
    AppLogo,
    Footer
  }
}
</script>

<style scoped>
.container {
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
Footer{
  margin-top: 70px
}
.button{
  width: 70%;
}
</style>
<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 50px;
  padding-bottom: 100px;
}
</style>
