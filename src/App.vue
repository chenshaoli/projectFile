<template>
  <div id="app">
    <v-uploadfile></v-uploadfile>
  </div>
</template>

<script>
import uploadfile from './components/uploadfile/uploadfile'
export default {
  name: 'App',
  components: {
    'v-uploadfile':uploadfile
  }
}
</script>

<style>
#app {}
</style>
