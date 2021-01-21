<template>
  <div id="app">
      <designer :max-clo="3"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import designer from '@/components/designer.vue';
@Component({
  components: {
      designer
  }


  
})
export default class App extends Vue {

}
</script>

<style lang="less">


</style>
