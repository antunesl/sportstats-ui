<template>
  <div v-if="hasData == true">
      <div class="row">
        <div class="column is-8 is-offset-2">
            <div style="padding:30px">
            <h3 class="title is-4 has-text-centered is-uppercase">{{sport}}</h3>
        </div>
        <div class="columns">
            <div class="column is-2">
                Team Logo
            <img src=""/>
            </div>
            <div class="column s-10">
                <h1 class="title is-1">{{title}}</h1>
                <p class="subtitle is-3">{{teamInfo.city}}</p>
           </div>
        </div>
        <br>
        <div class="columns">
            <h5 class="title is-5">Manager: {{teamInfo.manager}}</h5>
        </div>
        
 
        <section>
            <h4 class="title is-4 has-text-centered">Squad</h4>
            <div class="titlesLine"></div>
                <table class="table is-fullwidth">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="player in squad" :key="player.name">
                        <td >{{player.number}}</td>
                        <td>{{player.name}}</td>
                        <td>{{player.position}}</td>
                    </tr>
                    </tbody>
                </table>
        </section>
        <section>
            <h4 class="title is-4 has-text-centered">Top Scorers</h4>
            <div class="titlesLine"></div>
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="player in topScorers" :key="player.name">
                            <td >{{player.position}}</td>
                            <td>{{player.name}}</td>
                            <td style="padding-bottom: 3px;"><strong style="font-size: 35px;">{{player.goals}}</strong> Goals </td>
                        </tr>
                    </tbody>
                </table>
        </section>
        <section>
            <Tabs></Tabs>
        <h4 class="title is-4 has-text-centered">Next Game</h4>
            <div class="titlesLine"></div>
            
        <div class="tabs is-centered">
            <ul>
                <li class="is-active"><a>Home</a></li>
                <li><a>Away</a></li>
            </ul>
            </div>

        </section>

    </div>
      </div>


  <hr />
  <section>
        <div>
            <h4>Squad</h4>
   <ul>
                <li v-for="player in squad" :key="player.name">
                    {{player.number}} {{player.name}} [{{player.position}}]
                </li>
            </ul>
        </div>
  </section>
    <hr />
    <section>
        <div>
            <h4>Top Scorers</h4>
            <ul>
                <li v-for="player in topScorers" :key="player.name">
                    {{player.position}} {{player.name}} [{{player.goals}} goals]
                </li>
            </ul>
        </div>
    </section>
    <hr />
    <section>
        <div>
            <h4>Next Game</h4>
            <h5>Home</h5>
            <ul>
                <li v-for="player in nextGame.lineup.home" :key="player.name">
                    [{{player.left}},{{player.right}},{{player.top}}] {{player.name}}
                </li>
            </ul>
            <h5>Home News</h5>
            <ul>
                <li v-for="player in nextGame.news.home" :key="player.text">
                    {{player.text}}
                </li>
            </ul>
            <br/>
            <h5>Away</h5>
            <ul>
                <li v-for="player in nextGame.lineup.away" :key="player.name">
                    [{{player.left}},{{player.right}},{{player.top}}] {{player.name}}
                </li>
            </ul>
            <h5>Away News</h5>
            <ul>
                <li v-for="player in nextGame.news.away" :key="player.name">
                    {{player.text}}
                </li>
            </ul>
        </div>
    </section>
  </div>
  <div v-else>
       <section class="container">
        <div>
        <h1>No data for this team</h1>
        </div>
    </section>
  </div>
</template>
<script>

import AppLogo from "~/components/AppLogo.vue";
import axios from "~/plugins/axios";
import Tabs from "~/components/Tab.vue";


export default {  
  components: {
    AppLogo,
    Tabs,
  },
  asyncData(context) {
    var country = context.params.country;
    var competition = context.params.competition;
    var team = context.params.team;
    // called every time before loading the component
    return axios.get(`/teams/${team}`).then(res => {
      
      if (!res.data.success || !res.data.result) return { hasData: false };

      var doc = {
        hasData: true,
        title: `${res.data.result.name}`,

        country: country,
        competition: competition,

        teamInfo: res.data.result.teamInfo,

        topScorers: res.data.result.topScores.sort(function(a, b) {
          return a.position - b.position;
        }),

        squad: res.data.result.squad.sort(function(a, b) {
          return a.number - b.number;
        }),

        nextGame: {
          lineup: {
            home: res.data.result.nextGame.homeLineup,
            away: res.data.result.nextGame.awayLineup
          },
          news: {
            home: res.data.result.nextGame.homeNews,
            away: res.data.result.nextGame.awayNews
          }
        }
      };
      

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
