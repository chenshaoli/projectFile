<template>
  <div id="app">
    <!-- router-link只是为了在页面中可以点击该项按钮而已 -->
    <!-- <router-link  to="/content">content</router-link>
    <router-link  to="/upload">upload</router-link> -->
   
    <router-view></router-view>
    <v-header></v-header>
  </div>
</template>
<script>
import header from "./components/header/header"
export default {
  components:{
    'v-header':header
  }
}
</script>


