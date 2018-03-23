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
              Competition Logo
            <img src=""/>
          </div>
          <div class="column is-9">
            <div class="title">{{title}}</div>
            <div class="subtitle">{{country}}</div>
          </div>
        </div>
        <div style="padding-top:30px; padding-bottom:30px">
          <progress class="progress is-success" value="60" max="100"></progress>
        </div>
      </section>

        <section>
          <h4 class="title is-4 has-text-centered titlesStyle">standings</h4>
          <div class="titlesLine"></div>
          <table class="table is-fullwidth squadTable">
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
        <br/>
        
        <section>
          <div>
            <h4 class="title is-4 has-text-centered titlesStyle">teams</h4>
            <div class="titlesLine"></div>
          </div>
          <div v-for="(team, index) in teams" :key='index'>
            <div v-if="index == 0 || index % 3 == 0" class="columns has-text-centered">
              <div class="column is-4"><a v-bind:href="teams[index].link">{{ teams[index].name }}</a></div>
              <div class="column is-4"><a v-bind:href="teams[index+1].link">{{ teams[index+1].name }}</a></div>
              <div class="column is-4"><a v-bind:href="teams[index+2].link">{{ teams[index+2].name }}</a></div>
            </div>
          </div>
            
        </section>        
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
section{
    margin-top: 70px;
}
a {
  color: black;
}
a:hover {
  color: #68c3a3;
}
.squadTable tr td{
    text-align: center;
}
.squadTable th{
    text-align: center;
}
</style>
