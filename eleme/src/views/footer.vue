<template>
<div class="footer">
    <router-link to="/home">
    <div class="home">
        <span class="iconfont">
             &#xe722;
        </span><p>首页</p>
    </div>
    </router-link>
    <router-link to="/find">
    <div class="find">
        <span class="iconfont">
            &#xe654;
        </span> <p>发现</p>
    </div>
    </router-link>
    <router-link to="/order">
    <div class="order" >
        <span class="iconfont">
              &#xe606;
        </span><p>订单</p>
    </div>
    </router-link>
     <router-link to="/my" >
    <div class="my" >
        <span class="iconfont">
            &#xe627;
        </span>
       <p>我的</p>
    </div>
    </router-link>
    
</div>
</template>

<script>
</script>

<style scoped>
.footer{
    box-sizing: border-box;
    width: 100%;
    background-color:#fff;
    display: flex;
    font-size: 2.66666vw;
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    left: 0;
    right: 0;
    z-index: 999;
    align-items: center;
}
.home ,.find,.my,.order{
    text-align: center;
}
 span{
     font-size: 8vw;
     padding-right: 2vw;
 }
 


</style>