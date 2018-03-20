<template>
  <div>
    <section class="container">
        <div>
        <div class="title">{{title}}</div>
        <div class="subtitle">{{country}}</div>
        <h3>{{sport}}</h3>
        <br/>
        
        </div>
    </section>

    <section>
        <div>
            <h4>Teams</h4>
            <div>
                <span v-for="team in teams" :key="team.permalink">
                    <a v-bind:href="team.link">{{team.name}} | </a>
                </span>
            </div>
        </div>
    </section>
    <br/>
    <section>
        <div>
            <h4>Standings</h4>
            <ul>
                <li v-for="standing in standings" :key="standing.position">
                    {{standing.position}} {{standing.teamName}} [{{standing.points}} pts]
                </li>
            </ul>
        </div>
    </section>
   
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
    var competition = context.params.competition;
    // called every time before loading the component
    return axios.get(`/leagues/${competition}`).then(res => {
      var doc = {
        sport: sport,
        country: res.data.result.country,
        title: res.data.result.name,
        teams: res.data.result.teams,

        standings: res.data.result.standings.sort(function(a, b) {
          return a.position - b.position;
        }),

        teams: res.data.result.teams
      };

      doc.teams.forEach(team => {
        team.link = `/football/${country}/${competition}/${team.permalink}`;
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
