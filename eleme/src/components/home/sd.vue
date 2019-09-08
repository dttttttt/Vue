<template>
    <div class="shopcontainer">
        <div class="logowrapper">
           <img :src=" img" alt="">
        </div>
        <div class="shopwrapper">
            <div class="shop-basic-info-line">
               <span class="shop-basic-info-brand-tag"></span>
               <span class="name">搜索功能</span>
            </div>
            <div class="xx">
               <div class="rate-star-img"></div>
               <div class="shop-basic-info-rating">4.7</div>
               <div class="shop-month-sale">月售 506</div>
               <div class="shop-basic-info-fengniao-icon">蜂鸟专送</div>
            </div>
            <div class="x">
                <div>起送 ￥20 </div>
                <div>
                   <span style="margin-left:10px">券后免配送费</span> 
                   <span class="takeout-cost-line-through">￥3</span>
                </div>
                <div>
                   <span style="margin-left:25px">2.2km</span>
                   <span>48分钟</span>
                </div>
            </div>
            <div class="tag-wrapper">
                <span>29减3</span>
                <span>39减4</span>
                <span>49减5</span>
                <span>品质联盟</span>
                <span class="wu">无忧退款</span>
            </div>
            
        </div>
    </div>
</template>
  

<script>
export default {
    
}
</script>
 
<style scoped>

.shopcontainer {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding-left: 2.13vw;
    padding-top: 3.2vw;
    display: flex;
    margin-top: 5vw

}
img{
    width: 21.33vw;
    height: 21.33vw;
    display: block;
    border-radius:2.13vw;
}
.shopwrapper{
    font-size: 3.2vw;
    margin-left: 3.466vw;
    }
.shop-basic-info-line{
    overflow: hidden;
    font-size: 4.266vw;
    font-weight: 700;
    margin-bottom: 1.066vw;
    color: #333;
    display: inline-block;
}
.shop-basic-info-brand-tag{
    display: inline-block;
    width: 7.2vw;
    height: 4vw;
    background: url(https://img.alicdn.com/tfs/TB1QGxIauL2gK0jSZPhXXahvXXa-81-45.png) no-repeat 50% transparent;
    background-size: 100%;
     margin-right: 1.7777vw;

}
.name{
    display: inline-block;
    height: 5.333vw;
}
.rate-star-img{
    background: url(https://img.alicdn.com/tfs/TB1sMlFaqL7gK0jSZFBXXXZZpXa-33-33.png);
    background-size: 100% 100%;
    height: 2.93333vw;
    width: 2.9333vw;
    margin-right: 1.0666vw;
}
.shop-basic-info-rating{
    font-size: 3.2vw;
    font-weight: 700;
    color: #ff6300;
    margin-right: 1.7777vw;
}
.x{
    display: flex; 

   
}
.tag-wrapper{
    margin-top: 5.333vw;
    color: rgb(232, 89, 83);
}
.shop-month-sale{
        font-size: 3.2vw;
    color: #666;
}
.shop-basic-info-fengniao-icon{
    position: absolute;
    right:9.333vw;
    top: 38%;
    padding: 0 1.0666vw;
    color: #fff;
    background: #00a6ff;
    border-radius: 0.5333vw;

}
.xx{
    display: flex;
    margin-bottom:1.0666vw;
}
.takeout-cost-line-through{
    
    margin-left: 0.5333vw;
    color: rgb(168, 166, 166);
}
.wu{
color:rgb(35, 150, 255);
margin-left:8vw
}


</style>

