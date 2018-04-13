<template>
  <div class="imgupload" @change ='uploadFun($event)'>
    
    <div class="newinput">
      <input type="file" multiple="multiple">
      <span class="text-left">上传图片</span>
    </div>
    <div v-for="(item,index) in obj" :key="'obj'+index" v-if="obj && obj.length && item.progress">
      <img :src="item.dataURL" alt="">
      <p v-if='item.progress' class="progress">已完成{{item.progress}}</p>
      <p v-if="(item.name!='' || item.size)" class="progress">图片名称：<span class="name">{{item.name}}</span>大小：{{item.size}}kb</p>
      <p v-if="item.time" class="progress">上次修改时间：{{item.time}}</p>
    </div>
    
  </div>
 
</template>
<script>
export default {
  
  data(){
    return {
      pros:0,
      obj:[
        { 
          progress:0,
          name:'',
          size:0,
          time:'',
          dataURL:''
        }
      ]
     
    }
  },
  mounted() {
      let  imgupload = document.querySelector('.imgupload');
  },
  methods:{
     uploadFun (e) {
        let that = this;
        if(e.target.files && e.target.files.length >1){
          let imgfiles = e.target.files;
          let imgARR = [];
          for(let i=0;i<imgfiles.length;i++){
            imgARR.push(imgfiles[i]);
          }
          console.log(e.target.files);
          for(let i=0;i<imgARR.length;i++){
            let file = imgARR[i];
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
              that.pros = Math.round(e.loaded/e.total*100)+'%';
              console.log(that.pros);
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
              let imgobj = {
                progress:that.pros,
                dataURL:reader.result,
                name : file.name,
                size : Math.round(file.size/1024),
                time : new Date(file.lastModified)
              }
              that.obj.push(imgobj)
              console.log(imgobj.name);
              console.log(imgobj.size);
            }
            
          }; 
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
                that.pros = Math.round(e.loaded/e.total*100)+'%';
                console.log(that.pros);
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
               let imgobj = {
                progress:that.pros,
                dataURL:reader.result,
                name : file.name,
                size : Math.round(file.size/1024),
                time : new Date(file.lastModified)
              }
                that.obj.push(imgobj)
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
<style lang='less' scoped>
@import './uploadfile.less';
</style>
