<template>
<div >
  <HomeHeader></HomeHeader>
  <homeswiper></homeswiper>
  <homefilternav></homefilternav>
  <homefood></homefood>
  <homeshopcart></homeshopcart>
  <homegoods></homegoods>
</div>
  
</template>

<script>

import homeheader from '../components/home/homeheader'
import homeswiper from '../components/home/homeswiper'
//import homeadvertisement from '../components/home/homeadvertisement'
import homefilternav from '../components/home/homefilternav'
import homefood from '../components/home/homefood'
import homegoods from '../components/home/homegoods'


import homeshopcart from '../components/home/homeshopcart'


export default {
    components:{
        "HomeHeader":homeheader ,
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