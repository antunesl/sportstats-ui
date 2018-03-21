<template>
  <div class="tabs">
    <div>
        <button v-for="(tab,index) in tabs " :key='index' 
            :class="{active : currentTab === index}"
            @click="currentTab = index" > {{tab}}</button>
    </div>
    <div class="tab-content">
        <div v-show="currentTab === 0">Tab Content</div>
        <div v-show="currentTab === 1">Tab Content2</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          currentTab: 0,
          tabs:['Tab1', 'Tab2']
      }
  }
}
</script>
<style scoped>
button.active{
    background-color: red;
}
.tab-content div{
    padding: 30px;
}
</style>
