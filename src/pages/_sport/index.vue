<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <h3 class="title is-3 has-text-centered is-uppercase" style="letter-spacing:2px">{{sport}}</h3>
      </div>
    </div>
    <section>
        <div class="column is-8 is-offset-2">
          <h4 class="title is-4 titlesStyle">countries</h4>
          <div class="">
            <a class="button" v-for="country in countries" :key="country" v-bind:href="country.link">
                {{country.name}}
            </a>
          </div>
        </div>
    </section>
    

  <Footer></Footer>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import axios from "~/plugins/axios";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    AppLogo,
    Footer
  },
  asyncData(context) {
    var sport = context.params.sport;
    // called every time before loading the component
    return axios.get(`/countries`).then(res => {
      var doc = {
        sport: sport,
        countries: res.data.result.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ),
      };

      doc.countries.forEach(country => {
        country.link = `/${sport}/${country.name}`;
      });

      return doc;
    });
  },
  validate({ params }) {
    // Must be a number
    return true;
  }
};
</script>

<style scoped>
section{
    margin-top: 70px;
}
a.button{
  width: 100%;
  margin-bottom: 30px;
}
a{
  color: black;
}
</style>

