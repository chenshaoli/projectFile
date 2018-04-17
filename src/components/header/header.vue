<template>
    <div class="title">
        <span v-for='(item,index) in titleList' :key="index" @click="gotopage(item)" >{{item}}<span v-if="dynamicSegment">{{dynamicSegment}}</span></span>
    </div>
</template>
<script>
import content from "../content/content"
import uploadfile from "../uploadfile/uploadfile"//引入需要配置路由的组件
import transition from "../transition/transition"

export default {
  data() {
      return {
          titleList:[
                'content123',
                'upload',
                'content456',
                'transition'
          ],
          dynamicSegment:''
      }
  },
  methods:{
      gotopage(item) {
          switch (item) {
                case "content123":
                 this.$router.push({
                    path:'/content/123',
                    component:content
                });
                break;
                case "content456":
                 this.$router.push({
                    path:'/content/456',
                    component:content
                });
                break;
                case "upload":
                 this.$router.push({
                    path:'/upload',
                    component:uploadfile
                });
                break;
                case "transition":
                this.$router.push({
                    path:'/transition',
                    component:transition
                });
                break;

          }
         
      }
    
  },
  computed: {
        // dynamicSegment() {
        //         return this.$route.params.id;
        // }
  },
  watch: {
      $route(to,from) {
          console.log(to);
          console.log(from);
          this.dynamicSegment = this.$route.params.id;

      }
  }
}
</script>
<style lang='less' scoped>
@import "./header.less";
</style>


