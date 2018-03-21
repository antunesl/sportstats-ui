<template>
  <div class="row">
    <div class="column is-8 is-offset-2">
      <div>
        <h3 class="title is-4">{{sport}}</h3>
        <div class="title">{{title}}</div>
        <div class="subtitle">{{country}}</div>
        <progress class="progress is-success" value="60" max="100"></progress>
        <br/>
      </div>
          <section>
            <h4 class="title is-4 has-text-centered">Standings</h4>
            <div class="titlesLine"></div>
                <table class="table is-fullwidth">
                    <thead>
                    <tr>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="standing in standings" :key="standing.position">
                        <td >{{standing.position}}</td>
                        <td>{{standing.teamName}} </td>
                        <td>{{standing.points}} </td>
                    </tr>
                    </tbody>
                </table>
        </section>
      <section>
        <div>
          <h4 class="title is-4 has-text-centered">Teams</h4>
          <div class="titlesLine"></div>
            <div>
              <span v-for="team in teams" :key="team.permalink">
                  <a v-bind:href="team.link">{{team.name}} | </a>
              </span>
            </div>
          </div>
      </section>
    </div>






  <section>
        <div>
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
            <h1>Standings</h1>
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
