<template>
    <div class="sec">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="">
        <router-link to="/login" class="p1">登录/注册</router-link>
        <router-link to="/login" class="p2"> 登录后享受更多特权</router-link>
        <span>></span>
    </div>

</template>

<script>
export default {
    
}
</script>
 
<style scoped>
.sec{
    width: 100%;
    height: 29.33vw;
    background-color: #0085ff;
    
    position: relative;
    background-image: linear-gradient(90deg,#0af,#0085ff)
}
.p1{
    position: absolute;
    font-size: 5.333vw;
    left:25.33vw;
    top:9.333vw;
    color: #fff;
    font-weight: 600;
    font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;

}
.p2{
    font-size: 3.2vw;
    position: absolute;
    left:25.333vw;
    top:17.333vw;
    color: #fff

}
img{
    max-width: 16vw;
    max-width: 16vw;
    border-radius: 50%;
    position: absolute;
    left:4vw;
    top:6.666vw;
}
span{
    font-size: 4.2666vw;
    font-weight: 200;
    position: absolute;
    right: 5.333vw;
    top: 12vw;
    color:#fff
}
</style>