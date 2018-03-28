<template>

  <nav class="breadcrumb">
    <ul class="list-group">
      <li class="list-group-item">
        <a href="/">Home</a>
      </li>

      <li v-if="this.$parent.hasBreadcrumbData" class="list-group-item">
        <a href="/football">Football</a>
      </li>
      
      <li v-if="this.$parent.hasBreadcrumbData && this.$parent.breadcrumbData.countryLink" class="list-group-item" >
        <a v-bind:href="`${(this.$parent.breadcrumbData) ? this.$parent.breadcrumbData.countryLink : ''}`">{{ (this.$parent.breadcrumbData) ? this.$parent.breadcrumbData.country : ''}}</a>
      </li>

      <li v-if="this.$parent.hasBreadcrumbData && this.$parent.breadcrumbData.competitionLink" class="list-group-item">
        <a v-bind:href="`${(this.$parent.breadcrumbData) ? this.$parent.breadcrumbData.competitionLink : ''}`" >{{(this.$parent.breadcrumbData) ? this.$parent.breadcrumbData.competition : ''}}</a>
      </li>
      
      <li v-if="this.$parent.hasBreadcrumbData && this.$parent.breadcrumbData.teamLink" class="list-group-item active">
        <a v-bind:href="`${(this.$parent.breadcrumbData) ? this.$parent.breadcrumbData.teamLink : ''}`" >{{ (this.$parent.breadcrumbData) ? this.$parent.breadcrumbData.team : ''}}</a>
      </li>
    </ul>
  </nav>



</template>


<script>

</script>


<style scoped>
.breadcrumb a{
  color: black !important;
}
li.is-active a{
  color: #68C3A3 !important;
}
</style>