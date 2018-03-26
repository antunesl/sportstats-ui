<template>

  <nav class="breadcrumb">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/football">Sport</a></li>
      <li v-for="country in countries" :key="country">
        <a v-bind:href="country.link">{{country.name}}</a>
      </li>
      <li v-for="competition in competitions" :key="competition.name">
        <a v-bind:href="competition.link">{{competition.name}}</a>
      </li>
      <li v-for="team in teams" :key="team.name" >
        <a v-bind:href="team.link">{{team.name}}</a>
      </li>
    </ul>
  </nav>


</template>


<script>
export default {
  data(){
    return{
}
}
};
</script>


<style scoped>
.breadcrumb a{
  color: black !important;
}
li.is-active a{
  color: #68C3A3 !important;
}
</style>