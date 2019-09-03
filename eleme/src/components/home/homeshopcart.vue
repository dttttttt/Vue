<template>
    <div class="shopcart">
        <div class="shopcart-img">
            <span class="iconfont"></span>
        </div>
        <div class="shopcart-price">
            <p class="p1">¥{{$store.state.price}}</p>
            <p class="p2">另需配送费3元</p>
        </div>
        <a class="shopcart-pay">
            <span>去结算</span>
        </a>
    </div>
</template>


<script>
export default {
    data(){
        return{
             
        }
    
    
    }
}
</script>

<style scoped>
.shopcart{
    box-sizing: border-box;
    width: 100%;
    height:13.333vw;
    background-color: rgba(61,61,63,.9);
    display: flex;
    font-size:2.666vw;
    color: #fff;
    position: fixed;
    bottom: 11.2vw
}
.shopcart-img{
    width: 25vw;
}
.shopcart-price{
   width: 45vw;
}
.p1{
    font-size: 5vw;
    margin-top: 2.5vw;
}
.shopcart-pay{
    flex-grow: 1;
    background-color: #38ca73;
    text-align: center;
    line-height: 13.33vw;
}
.shop-cart span{
    font-size: 5vw;
    font-weight: 700;
}
    </style>