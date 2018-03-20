<template>
  <div>
    <section class="container">
        <div>
        <h1>{{country}}</h1>
        <h2>{{sport}}</h2>
        <br/>
        </div>
    </section>

    <section>
        <div>
            <h4>Competitions</h4>
            <div>
                <span v-for="competition in competitions" :key="competition.name">
                    <a v-bind:href="competition.link">{{competition.name}} | </a>
                </span>
            </div>
        </div>
    </section>
    <br/>
    
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import axios from "~/plugins/axios";

export default {
  components: {
    AppLogo
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

</style>
