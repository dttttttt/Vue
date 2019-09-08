import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import order from '../views/order'
import find from '../views/find'
//import my from '../views/my'
const my = ()=> import ('../views/my')
import post from '../components/my/post'
import homesearch from '../components/home/homesearch'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home,
      meta:{
        showfooter:true,
        title:'主页'
      }
    },
    {
      path:'/find',
      component:find,
      meta:{
        showfooter:true,
        title:'发现'
      }
    },
    {
      path:'/order',
      component:order,
      meta:{
        showfooter:true,
        title:'订单'
      }
    },
    {
      path:'/my',
      component:my,
      meta:{
        showfooter:true,
        title:'我的'
      }
    },
    {
      path:'/post',
      component:post
    }
  ],
  mode:"history"
}
)



// router.beforeEach((to,from,next)=>{
//    document.title = to.matched[0].meta.title
//     next()
// })

export default router