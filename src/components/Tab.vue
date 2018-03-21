<template>
    <div class= "tabs">
        <div class="has-text-centered">
                <button class="button" v-for="(tab,index) in tabs " :key='index' 
                    :class="{active : currentTab === index}"
                    @click="currentTab = index" > {{tab}}
                </button>
        </div>

    <div class="ola2">
        <div class="tab-content">
            <div v-show="currentTab === 0">Tab Content</div>
            <div v-show="currentTab === 1">Tab Content2</div>
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
  }
}
</script>
<style scoped>
.tabs{
    display: inline;
}
button{
    margin-left: 30px;
    margin-right: 30px;
}
button.active{
    border: 1px solid #68C3A3;
}
.tab-content div{
    padding: 30px;
}
</style>
