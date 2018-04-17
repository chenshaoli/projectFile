<template>
  <div id='demo'>
      <div class='poplayer' v-if='show'></div>
      <div  class="btnbar">
        <div class="btn_word" @click='show=!show'>
             <p>应退金额：<span>￥348</span></p>
             <p class="money_detail"><i>*</i>退款后预计退还400里程+1000积分</p>
        </div>
         <div class='btn_confirm'>确认退款</div>
      </div>
      <transition name='fade'>
          <p class="pop" v-if='show'>hello</p>
      </transition>
  </div>
</template>

<script>
export default {
  data() {
      return{
          show:false
      }
  }
}
</script>
<style lang='less' scoped>
@import "./transition.less";
</style>

