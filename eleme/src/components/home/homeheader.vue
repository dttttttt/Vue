<template>
<div class="home">
    <!-- <div class="map">
        <span  class="iconfont">&#xe60f;</span>
        <span class="s">地址</span>
        <span class="iconfont">&#xe611;</span>
    </div> -->
    <div class="button">
        <div class="btn">
            <span id= "ic" class="iconfont">&#xe604;</span> 
            <span class="btn-text" @click="goto">搜索饿了么商家、商品名称 </span>
        </div>
        
    </div>
</div>
  
</template>
<script>
export default {
       methods:{
           goto(){
               this.$router.push('/homesearch')
           }
       }
}
</script>
 
<style scoped>
.home{
    width: 100%;
    /* height: 28vm; */
    height: 14vm;
    overflow: hidden;
}
.map{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    width: 100%;
    height: 10.6666vw;
    font-size: 8vw;
    

}
.button{
    width: 100%;
   
    font-size: 3.7333vw;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #999;
    text-align: center;
    display: flex;
}

.btn{
    flex:1;
    background-color: #fff;
    margin: 2.666vw 3.7333vw 2.666vw 3.7333vw;
}
.btn-text{
    vertical-align: 50%;
}
.s{
    font-size: 4.2666vw;
    font-weight: 700;
    color: #fff
}
</style>