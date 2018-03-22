<template>
    <div class= "tabs">
        <div class="has-text-centered">
            <button class="button" v-for="(tab,index) in tabs " :key='index' 
                :class="{active : currentTab === index}"
                @click="currentTab = index" > {{tab}}
            </button>
        </div>

        <div class="">
            <div class="tab-content">
                <div v-show="currentTab === 0">
                    <table class="table is-fullwidth">
                        <tbody>
                            <tr v-for="player in this.$parent.nextGame.lineup.home" :key="player.name">
                                <td >{{player.left}}</td>
                                <td>{{player.right}}</td>
                                <td>{{player.top}}</td>
                                <td>{{player.name}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="green">
                        <h5 class="title is-5">Home News</h5>
                        <p v-for="player in this.$parent.nextGame.news.home" :key="player.text">
                            {{player.text}}
                        </p>  
                    </div>
                </div>
                    
                <div v-show="currentTab === 1">
                    <table class="table is-fullwidth">
                        <tbody>
                            <tr v-for="player in this.$parent.nextGame.lineup.away" :key="player.name">
                                <td >{{player.left}}</td>
                                <td>{{player.right}}</td>
                                <td>{{player.top}}</td>
                                <td>{{player.name}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="green">
                        <h5 class="title is-5">Away News</h5>
                        <p v-for="player in this.$parent.nextGame.news.away" :key="player.text">
                            {{player.text}}
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data(){
      return{
          currentTab: 0,
          tabs:['HOME', 'AWAY']
      }
  },

}
</script>
<style scoped>
.tabs{
    display: inline;
}
button{
    width: 30%;
    margin-left: 30px;
    margin-right: 30px;
}
button.active{
    border: 1px solid #68C3A3;
}
button.focus{
    border: 1px solid #68C3A3;
}
.tab-content div{
    padding: 30px;
}
th, td{
    color: #999;
    border: 1px solid #eee;
    padding: 12px 35px;
    border: none;
    text-align: center;
}
.green{
    background-color: green;
    overflow: hidden;
height: 200px;
}
</style>
