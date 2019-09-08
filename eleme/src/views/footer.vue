<template>
<div class="footer">
    <router-link to="/home" replace>
    <div class="home" :class="{onhome:'/home'===$route.path}" @click="goto('/home')">
        <span class="iconfont">
             &#xe722;
        </span><p>首页</p>
    </div>
    </router-link>
    <router-link to="/find" replace>
    <div class="find" :class="{onfind:'/find'===$route.path}" @click="goto('/find')">
        <span class="iconfont">
            &#xe654;
        </span> <p>发现</p>
    </div>
    </router-link>

    <!-- 用点击事件代替router-link -->
    <router-link to="/order" replace>
    <div class="order" :class="{onorder:'/order'===$route.path}" @click="goto('/order')" >
        <span class="iconfont">
              &#xe606;
        </span><p>订单</p>
    </div>
    </router-link>
     <router-link to="/my" replace>
    <div class="my" :class="{onmy:'/my'===$route.path}" >
        <span class="iconfont">
            &#xe627;
        </span>
       <p>我的</p>
    </div>
    </router-link>
    
</div>
</template>

<script>
export default{
    methods:{
        goto(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style scoped>

.onmy{
    color: yellow
}
.onfind{
    color: red;
}
.onorder{
    color:dodgerblue
}
.onhome{
    color:springgreen;
}
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