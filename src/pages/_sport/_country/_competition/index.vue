<template>
  <div class="row">
    <div class="column is-8 is-offset-2">
      <div>
        <h3 class="title is-4 has-text-centered">{{sport}}</h3>
      </div>
      <div>
        <div class="column is-3">Competition Logo
           <img src=""/>
        </div>
        <div class="column is-9 is-offset-3">
          <div class="title">{{title}}</div>
          <div class="subtitle">{{country}}</div>
        </div>
      </div>
      <div style="padding-top:30px; padding-bottom:30px">
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
                <th style="text-align: right;">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="standing in standings" :key="standing.position">
                  <td >{{standing.position}}</td>
                  <td>{{standing.teamName}} </td>
                  <td style="text-align: right;">{{standing.points}} </td>
              </tr>
            </tbody>
          </table>
        </section>
        <br/>
        <section>
          <div>
            <h4 class="title is-4 has-text-centered">Teams</h4>
            <div class="titlesLine"></div>
          </div>
          <div class="columns is-mobile has-text-centered ">
            <div class="column is-4" v-for="team in teams" :key="team.permalink"> 
              <a v-bind:href="team.link">{{team.name}}</a>
            </div> 
          </div>   
        </section> 

                  <!--Columns TEST-->
                    <div class="columns is-desktop has-text-centered ">
                      <div class="column">1</div>
                      <div class="column">2</div>
                      <div class="column">3</div>
                    </div>
                    <div class="columns is-desktop has-text-centered ">
                      <div class="column">4</div>
                      <div class="column">5</div>
                      <div class="column">6</div>
                    </div>
                    <div class="columns is-desktop has-text-centered ">
                      <div class="column">7</div>
                      <div class="column">8</div>
                      <div class="column">9</div>
                    </div>
                  <!--Columns TEST-->
          </div>  
            



        
   



<br/>
<hr>
<br/>
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
a{
  color: black;
}
a:hover{
  color: #68C3A3;
}

</style>
