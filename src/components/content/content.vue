<template>
  <div >
        <div class="title">
            <span v-for='(item,index) in titleList' :key="index" @click="gotochildpage(item)" >{{item}}</span>
        </div>
        <router-view class="marTop"></router-view>
  </div>
</template>
<script>
import iphone from "../iphone/iphone"
import ipad from "../ipad/ipad"
import pc from "../pc/pc"

export default {
  data () {
      return {
          titleList:[
              'iphone',
              'ipad',
              'pc'
          ]
      }
  },
  components:{
      iphone,
      ipad,
      pc
  },
  methods:{
      gotochildpage(item) {
           switch (item) {
                case "iphone":
                 this.$router.push({
                    path:'/iphone',
                    component:iphone
                });
                break;
                case "ipad":
                 this.$router.push({
                    path:'/ipad',
                    component:ipad
                });
                break;
                case "pc":
                 this.$router.push({
                    path:'/pc',
                    component:pc
                });
                break;
          }
         
      }
  }
}
</script>
<style lang="less" scoped>
@import  "./content.less";
</style>

