import Vue from 'vue';
import VueRouter from 'vue-router';//引入依赖的vue-router

import content from "../components/content/content"
import uploadfile from "../components/uploadfile/uploadfile"//引入需要配置路由的组件
import iphone from "../components/iphone/iphone"
import ipad from "../components/ipad/ipad"
import pc from "../components/pc/pc"
import transition from "../components/transition/transition"

Vue.use(VueRouter);

    const routes = [
    {
      path:'/content/:id',
      component:content,
      children:[
          {
              path:'/iphone',
              component:iphone
          },
          {
              path:'/ipad',
              component:ipad
          },
          {
              path:'/pc',
              component:pc
          },
          {
            path:'',
            component:iphone
        }

      ]
    },
    {
      path:'/upload',
      component:uploadfile
    },//重定向
    {
        path:'/',
        component:uploadfile
    },
    {
        path:'/transition',
        component:transition
    }
  ]
  const router = new VueRouter({
    routes
  })

export default router;