<template>
    <div class="goods">
        <img src="https://cube.elemecdn.com/c/17/d152471cb0dc2f3638d9476c9b564jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/quality,q_90/format,webp" alt="">
        <div class="goods-right">
            <p class="p1">vuex</p>
            <p class="p2">本店的经典饮品</p>

            <div class="goods-price">
                <span class="span1">¥20</span>
                <span class="goods-count">
                <span class="span2" @click="minus">--</span>
                <span class="span3">{{$store.state.count}}</span>
                <span class="span4" @click="add">+</span>
                </span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        
        }
    },
    methods:{
        add(){
            this.$store.dispatch('add')
        },
        minus(){
            var count = this.count;
            this.$store.dispatch('minus')
        }
    },
    
}
</script>

<style scoped>
.des{
    font-size: 16px;
}
.goods{
    width: 100%;
    height:32vw ;
    display: flex;
    box-sizing: border-box;
    font-size: 4vw;
    margin-top: 5vw
    
}
   img{
      width:21.28vw ;
      height:21.28vw;
      margin-left: 2.5vw
}
.goods-right{
    height: 32vw;
    width: 100%;
    margin-left: 3vw
}
.p1{
    font-size:5vw;
    font-weight: 900;
}
.p2{
    font-size: 2.666vw;
    color: #6e6e6e;
}
.goods-price{
    margin-top: 9vw;
    display: flex;
    justify-content:space-between;
}
.span1{
    font-size: 4vw;
    color: green;
    }
    .span2{
        font-size: 5vw;
        margin-right: 1vw;
        background-color:burlywood;
    }

.span4{
    font-size: 5vw;
    background-color: burlywood
}

  

   </style>