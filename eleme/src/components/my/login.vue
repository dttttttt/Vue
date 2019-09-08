<template>
    <div class="log">
     <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">
     <section>
         <input id='user' class="i" type="user" placeholder="node相关知识，暂未完成">
     </section>
     <input id='password' type="password" placeholder="">
     <p>新用户登录即自动注册，并表示已同意<a href="">《用户服务协议》</a>和<a>《隐私权政策》</a></p>
     <button id="login" class="b1" >登录</button>
     <router-link to="/post"><button class="b2">注册</button></router-link>
     <a class="a3" href="">关于我们</a>
    </div>
</template>

<script>

</script>
 
<style scoped>
.log{
    height: 100%;
    width: 100%;
    position: relative;
    top:10.666vw;
    text-align: center;
}
section{
    position: relative;
}
section a{
    position: absolute;
    right: 12%;
    top: 50%;
    font-size: 3.2vw;
    font-weight: normal;
    color: #aaa;
}
img{
    max-width: 34.883vw;
    max-height:14.9333vw;
}
input{
    width: 80%;
    height: 12.8vw;
    font-size: 4.2667vw;
    font-weight: 100;
    border: 1px solid #ddd;
    border-radius: 1.0667vw;
    padding-left: 2.667vw
}
p{
  font-size: 4.2667vw;
  margin-top: 5.333vw;
  color: #aaa;
   margin-left: 6.4vw
}
p a{
  
    color: #2395ff;
}
button{
    width: 80%;
    height: 10.4vw;
    font-size: 4.8vw;
    color: #fff;
    background-color: #56d176;
    border-radius: 1.0667vw;
    padding: 2.4vw;
    font-weight: 800;
    border-right-color: #56d176;
    border-bottom-color: #56d176;
}
.a3 {
    display: block;
    font-size: 3.7vw;
    color: #aaa;
    margin-top: 5.333vw
}
.b2{
    width: 80%;
    height: 10.4vw;
    font-size: 4.8vw;
    color: #fff;
    background-color: #56d176;
    border-radius: 1.066vw;
    padding: 2.4vw;
    font-weight: 800;
    border-right-color: #56d176;
    border-bottom-color: #56d176;
    margin-right: 4vw
}

</style>