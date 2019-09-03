<template>
  <div class="swiper">
  <mt-swipe :auto="0">
  <mt-swipe-item>
    <div  class="z" > 
      <a href=""  v-for="item in items" :key="item.id" class="img" >
        <img :src="item.imgurl"  class="x" >
        <p class="text">{{item.title}}</p>
      </a></div>
  </mt-swipe-item>
   <mt-swipe-item>
    <div  class="z" > 
      <a href=""  v-for="item in lists" :key="item.id" class="img" >
        <img :src="item.imgurl"  class="x" >
        <p class="text">{{item.title}}</p>
      </a></div>
  </mt-swipe-item>
</mt-swipe>
</div>
</template>

<script>

export default {
  data(){
    return{
      items:[{
              id:"01",
              imgurl:"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "美食"
             },
             {
              id:"02",
              imgurl:"https://fuss10.elemecdn.com/1/48/bf1a859bf81553bbcfd6cf4ac42cbjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "早餐"
             },
              {
              id:"03",
              imgurl:"https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "商场便利"
             },
              {
              id:"04",
              imgurl:"https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "水果"
             },
              {
              id:"05",
              imgurl:"https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "医药健康"
             },
              {
              id:"06",
              imgurl:"https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "浪漫鲜花"
             },
              {
              id:"07",
              imgurl:"https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "跑腿代购"
             },
              {
              id:"08",
              imgurl:"https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "汉堡披萨"
             },
              {
              id:"09",
              imgurl:"https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "厨房生鲜"
             },
              {
              id:"10",
              imgurl:"https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "甜品饮品"
             },
             ],
      lists:[{
              id:"11",
              imgurl:"https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "速食简餐"
             },
             {
              id:"12",
              imgurl:"https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "地方小吃"
             },
              {
              id:"13",
              imgurl:"https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "大牌惠吃"
             },
              {
              id:"14",
              imgurl:"https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" ,
              title: "速食简餐"
             }]
           
    }

        }
    }
  

</script>
<style scoped>
  .swiper{
    height:47.2vw;
    width: 100%;
    }
  .z{
    display: flex;
    font-size: 3.7333vw;
    flex-wrap: wrap;
    width: 100%;  
    height: 47.2vw;
    text-align: center;
  
  }
  .img{
    width: 20%;
  
  }
  .x{
    max-width: 12vw;
    max-height: 12vw
  }
  .text{
    color: #666;
    font-size: 2.666vw;
    font-weight: blod;
    margin-top: 1.333vw; 
  }

 
</style>