<template>
  <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
    <ul>
      <li><a href="#">Sport</a></li>
      <li><a href="#">Country</a></li>
      <li><a href="">Competition</a></li>
      <li class="is-active"><a href="#" aria-current="page">Team</a></li>
    </ul>
  </nav>
</template>


<script>
export default {
  data(){
}
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