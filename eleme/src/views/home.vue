<template>
<div >
  <!-- <homeheader></homeheader> -->
  <homesearch></homesearch>
  <homeswiper></homeswiper>
  <homefilternav></homefilternav>
  <homefood></homefood>
  <homegoods></homegoods>
  <homeshopcart></homeshopcart>
  <!-- <homegoods></homegoods> -->
</div>
  
</template>

<script>
import homesearch from '../components/home/homesearch'

import homeheader from '../components/home/homeheader'
import homeswiper from '../components/home/homeswiper'

//import homeadvertisement from '../components/home/homeadvertisement'
import homefilternav from '../components/home/homefilternav'
import homefood from '../components/home/homefood'
import homegoods from '../components/home/homegoods'


import homeshopcart from '../components/home/homeshopcart'


export default {
    components:{
        homesearch ,
        // homeheader,
        homeswiper,
        homefilternav,
        homefood,
        homeshopcart,
        homegoods
    }
}
</script>
 
<style >

</style>