<template>
    <div class="homesearch">
        <div class="search">
        <input type="text" placeholder="搜索请输入1,返回请删除1，（未做防抖）" v-model='message' >
        </div>
        <div class="tem">
            <div class="img"><img :src="img" alt=""></div>
            
                <p>{{content}}</p>
        </div>

    </div>


</template>
<script >
import {debounce} from '../../assets/basic.js'
export default {

    data(){
        return{
            message:'',
            img:[],
            content:''
        }
    },
    methods:{
        back(){
            this.$router.replace('/home')
        },
         cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        }
    },
    watch:{
       
        message(newval){
            var that = this;
             this.cancelRequest();
            this.$axios.get("/search"+newval, { cancelToken: new this.$axios.CancelToken(function executor(c) {
                    that.source = c;
                })}).then((res)=>{
                 this.img=res.data.img
                 this.content=res.data.content

            }

            
            ).catch((err) => {
                if (this.$axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })
            // ,
            // this.$axios.get('/search').then((res)=>{
            //     this.img=res.data.img
            //     this.content=res.data.content
            // })
        },
       

            
    
        }

        
       
    }
    



</script>
<style scoped>
.homesearch{
    width: 100%;
    /* height: 28vm; */
    height: 18vm;
    overflow: hidden;
}
 .search{
     box-sizing: border-box;
     width: 100%;
     height: 15vw;
     background-color:dodgerblue;
     /* margin: 0 auto; */
     /* position: relative; */


     display: flex;
     
justify-content: center;
     align-items: center
     
    
 }
 input{
    height: 30px;
    width: 90%;
    border-radius: 5%;
    /* position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%) */
    text-align: center;
  
    
 }
 img{
     width: 100px;
     height: 100px;
 }

 .tem{
     display: flex;
     font-size: 19px;
 }
 p{
     margin-left: 3vw
     
 }

</style>