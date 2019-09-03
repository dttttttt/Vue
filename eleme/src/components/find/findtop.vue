<template>
<div class="find">
    <div class="find1">
    <p class="p1">金币商城</p>
    <p class="p2">0元好物在这里</p>
    <img class="i" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
    </div>
    <div >
        <div class="find2">
        <p class="p1" style="color:rgb(27, 169, 225)">推荐有奖</p>
        <p class="p2">20元现金拿不停</p>
        <img class="m" src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" alt="">
        </div>
        <div class="find2">
            <p class="p1" style="color:rgb(237, 102, 96)">周边优惠</p>
            <p class="p2">领取口碑好卷</p>
            <img class="m" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt="">
        </div>

    </div>
   
</div>
  
</template>

<script>
export default {
    
}
</script>
 
<style scoped>
.find{
    width: 100%;
    height: 3.4rem;
    display: flex;
}
.find1{
    width: 50%;
    height: 3.4rem;
    position: relative;
    border-right: solid;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #ededed;

}
.p1{
    margin-top: 22px;
    margin-left: 15px;
    font-size: 16px;
    color: rgb(255, 153, 0);
    font-weight: 400;
}
.p2{
    margin-top: 8px;
    margin-left: 15px;
    font-size: 12px;
    color: #999;
}
.i{
    max-height: 75px;
    max-width: 75px;
    right: 6.3%;
    bottom: 5.8%;
    position: absolute;
    
}
.find2{
    position: relative;
    width: 100%;
    height: 60px;
}
.m{
    max-width: 45px;
    max-height: 45px;
    position: absolute;
    bottom: 20PX;
    left: 125px
}

</style>