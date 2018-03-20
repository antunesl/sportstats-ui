<template>
  <div>
    <section class="container">
        <div>
        <div class="title">{{sport}}</div>
        <br/>
        </div>
    </section>

    <section>
        <div>
            <h4>Countries</h4>
            <div>
                <span v-for="country in countries" :key="country">
                    <a v-bind:href="country.link">{{country.name}} | </a>
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

<style>

</style>
