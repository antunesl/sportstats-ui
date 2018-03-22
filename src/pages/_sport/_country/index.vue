<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <h3 class="title is-3 has-text-centered is-uppercase" style="letter-spacing:2px">{{sport}}</h3>
      </div>
    </div>
    <div class="column is-8 is-offset-2">
      <section>
        <div class="columns">
          <div class="column is-2">
            Country Logo
            <img src=""/>
          </div>
          <div class="column is-10">
            <div class="title">{{country}}</div>
          </div>
        </div>
      </section>
      <section>
        <h4 class="title is-4 has-text-centered titlesStyle">competitions</h4>
        <div class="titlesLine"></div>
        <br/>
        <div class="columns">
          <div class="column is-6 has-text-centered" v-for="competition in competitions" :key="competition.name">
            <a class="button is-outlined" v-bind:href="competition.link">{{competition.name}} </a>
          </div>
        </div>
      </section>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
     

    </div>
    <br>

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
    var country = context.params.country;
    // called every time before loading the component
    return axios.get(`/countries/${country}/competitions`).then(res => {
      var doc = {
        country: country,
        sport: sport,
        competitions: res.data.result.docs.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ),
      };

      doc.competitions.forEach(competition => {
        competition.link = `/football/${country}/${competition.permalink}`; 
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

<style>
section{
    margin-top: 70px;
}
.button{
  width: 60%;
}
</style>
