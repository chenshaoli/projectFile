<template>
  <div class="imgupload" @change ='uploadFun($event)'>
    <input type="file" >
    <img :src="dataURL" alt="">
    <p v-if='progress'>已完成{{progress}}</p>
    <p v-if="(name!='' || size)">图片名称：<span>{{name}}</span>大小：{{size}}kb</p>
    <p>上次修改时间：{{time}}</p>
  </div>
 
</template>
<script>
export default {
  
  data(){
    return {
      progress:0,
      name:'',
      size:0,
      time:'',
      dataURL:''
    }
  },
  mounted() {
      let  imgupload = document.querySelector('.imgupload');
     
  },
  methods:{
     uploadFun (e) {
        let that = this;
        if(e.target.files && e.target.files.length >1&& e.target.files.length<3){
          let imgfiles = e.target.files;
          imgfiles.forEach((item) => {
            let file = item;
            let type = file.type.split('/')[0];
            if(type!='image') {
              alert('请上传图片');
              return
            }
            let size = Math.round(file.size/1024/1024);
            if(size >3) {
              alert('图片大小不能超过3M!');
              return
            }

            let reader = new FileReader();//新建FileReader对象
            // reader.readAsDataURL(file);
            reader.readAsDataURL(item);//读取为base64;关键的一步，竟然给删了
            reader.onloadstart = function () {
              console.log('上传开始start');
            }
            reader.onprogress = function(e) {
              that.progress = Math.round(e.loaded/e.total*100)+'%';
              console.log(that.progress);
              console.log('正在上传ing');
            }
            reader.onabort = function() {
              console.log("abort");//取消上传功能；
            }
            reader.onerror=function () {
              console.log("error");//上传出错；
            }
            reader.onload = function (){
              console.log('上传完成');//上传完成；
            }
            reader.onloadend = function (e) {
              that.dataURL = reader.result;
              that.name = file.name;
              that.size = Math.round(file.size/1024);
              that.time = new Date(file.lastModified)
              console.log(that.name);
              console.log(that.size);
            }
          }); 
        } else if((e.target.files && e.target.files.length==1)) {
              let file = e.target.files[0];
              let type = file.type.split('/')[0];
              if(type!='image') {
                alert('请上传图片');
                return
              }
              let size = Math.round(file.size/1024/1024);
              if(size >3) {
                alert('图片大小不能超过3M!');
                return
              }
              let reader = new FileReader();//新建FileReader对象
              // reader.readAsDataURL(file);
              reader.readAsDataURL(file);//读取为base64;关键的一步，竟然给删了
              reader.onloadstart = function () {
                console.log('上传开始start');
              }
              reader.onprogress = function(e) {
                that.progress = Math.round(e.loaded/e.total*100)+'%';
                console.log(that.progress);
                console.log('正在上传ing');
              }
              reader.onabort = function() {
                console.log("abort");//取消上传功能；
              }
              reader.onerror=function () {
                console.log("error");//上传出错；
              }
              reader.onload = function (){
                console.log('上传完成');//上传完成；
              }
              reader.onloadend = function (e) {
                that.dataURL = reader.result;
                that.name = file.name;
                that.size = Math.round(file.size/1024);
                that.time = new Date(file.lastModified)
                console.log(that.name);
                console.log(that.size);
              }
        }else {
          alert('图片最多上传3张！');
        }


       
      }
  }
}
</script>
<style scoped>
@import './uploadfile.less';
</style>
