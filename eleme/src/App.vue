<template>
  <div id="app">
    <Footer v-show="$route.meta.showfooter"></Footer>
    <router-view></router-view>
    
  </div>
</template>

<script>
import footer from './views/footer'

export default {
  components:{
    "Footer":footer
  }

}
</script>

<style>

</style>
