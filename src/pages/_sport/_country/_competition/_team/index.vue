<template>
    <div v-if="hasData == true">
        <div>
            <div class="hero is-primary">
                <div class="hero-body">
                </div>
            </div>
            
            <div class="column is-8 is-offset-2"> 
                <breadcrumb></breadcrumb>
                <section>
                    <div class="columns">
                        <div class="column is-2">
                            Team Logo
                        <img src=""/>
                        </div>
                        <div class="column s-10">
                            <div class="title">{{title}}</div>
                            <div class="subtitle">{{teamInfo.city}}</div>
                        </div>
                    </div>
                </section>

                <section>
                <div class="">
                    <h4 class="title is-4 is-uppercase has-text-centered" style="color:#68C3A3">Manager </h4>
                    <div class="lineManager"></div>
                </div>
                <div class="">
                    <h6 class="title is-6 is-uppercase has-text-centered">   {{teamInfo.manager}}</h6>
                </div>
                </section>
 
                <section>
                    <h4 class="title is-4 has-text-centered titlesStyle">squad</h4>
                    <div class="titlesLine"></div>
                        <table class="table is-fullwidth squadTable">
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
                    <h4 class="title is-4 has-text-centered titlesStyle">top scorers</h4>
                    <div class="titlesLine"></div>
                    <br>
                        <table class="table is-fullwidth topScorers">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="player in topScorers" :key="player.name">
                                    <td class="topScorersTd" >{{player.position}}</td>
                                    <td class="topScorersTd">{{player.name}}</td>
                                    <td><strong style="font-size: 35px;">{{player.goals}} </strong>   Goals </td>
                                </tr>
                            </tbody>
                        </table>
                </section>
                <section>
                <h4 class="title is-4 has-text-centered titlesStyle">next game</h4>
                    <div class="titlesLine"></div>
                </section>
                <div>
                    <br/>
                    <Tabs></Tabs>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    <div v-else>
        <section class="container has-text-centered">
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
import Footer from "~/components/Footer.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";

export default {
  components: {
    AppLogo,
    Tabs,
    Footer,
    Breadcrumb
  },
  asyncData(context) {
    var country = context.params.country;
    var competition = context.params.competition;
    var team = context.params.team;
    // called every time before loading the component
    return axios.get(`/teams/${team}`).then(res => {
      if (!res.data.success || !res.data.result) return { hasData: false };

    console.log(res.data.result);

      var doc = {
        hasBreadcrumbData: true,
        breadcrumbData: {
            country: country,
            countryLink: '/football/' + country,
            competition: res.data.result.actualCompetitionName,
            competitionLink: '/football/' + country + '/' + competition,
            team: res.data.result.name,
            teamLink: '/football/' + country + '/' + competition + '/' + team
        },

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

<style scoped>
section {
  margin-top: 70px;
}
.squadTable tr td {
  text-align: center;
}
.squadTable th {
  text-align: center;
}
.topScorers tr td {
  text-align: center;
  border: 1px solid #eee;
  border-right: none;
  border-left: none;
}
.topScorersTd {
  padding-top: 25px;
}
.topScorers th {
  text-align: center;
}
</style>
