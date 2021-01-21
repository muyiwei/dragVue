<template>
  <div id="app">
    <vueDragable v-model="list" class="wrap" v-bind="dragOptions">
      
      <div v-for="item in list" class="list" :key="item.id">{{item.text}}</div>
      
    </vueDragable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import inputText2 from './components/control/inputText2.vue';
import vueDragable from 'vuedraggable';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
@Component({
  components: {
    HelloWorld,
    inputText2,
    vueDragable,
  }


  
})
export default class App extends Vue {
  dragOptions:any ={
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost" 
  }
  list:any = [{
    text:"1",
    id:1
  },{
    text:"2",
    id:2
  },{
    text:"3",
    id:3
  },{
    text:"4",
    id:4
  },{
    text:"5",
    id:1
  },{
    text:"6",
    id:2
  },{
    text:"7",
    id:3
  },{
    text:"8",
    id:4
  },{
    text:"9",
    id:1
  },{
    text:"10",
    id:2
  },{
    text:"11",
    id:3
  },{
    text:"12",
    id:4
  }]
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrap{
  display:flex;
  width:800px;
  margin:0 auto;
  flex-wrap: wrap;
}
.list{
  height:100px;
  width:100px;
  border:1px solid #ccc;
  cursor: pointer;
  margin:20px;
}
.ghost{
  background:#aaa;
}

</style>
