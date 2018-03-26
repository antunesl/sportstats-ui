<template>

  <nav class="breadcrumb">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/football">Sport</a></li>
      <li class="is-active" v-for="country in this.$parent.countries" :key="country">
        <a aria-current="page" v-bind:href="country.link">{{country.name}}</a>
      </li>
      <li class="is-active" v-for="competition in this.$parent.competitions" :key="competition.name">
        <a aria-current="page" v-bind:href="competition.link">{{competition.name}}</a>
      </li>
      
      <li class="is-active" v-for="team in this.$parent.teams" :key="team.name" >
        <a aria-current="page">{{team.name}}</a>
      </li>
    </ul>
  </nav>


</template>


<script>
export default {

  }

</script>


<style scoped>
.breadcrumb a{
  color: black !important;
}
li.is-active a{
  color: #68C3A3 !important;
}
</style>