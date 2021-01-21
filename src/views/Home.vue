<template>
  <div class="home">
    <section class="header">    <header-top :list="loginResult.Functions" :currentIndex="pageIndex" @menuChange="menuchange">
    



    </header-top></section>
        <section class="main">
     <section class="aside-left">
    <aside-left :currentIndex="menuIndex" :list="asideMenus">

    </aside-left>
     </section>
    <div class="content">
      <router-view>
        
      </router-view>
    </div>
        </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AsideLeft from '@/components/AsideLeft'
import HeaderTop from '@/components/HeaderTop'
import {mapState} from "vuex"
import "./../css/reset.css"
export default {
  name: 'home',
  computed:{
    ...mapState(["loginResult","menuIndex","pageIndex"]),
    asideMenus:function(){
      return this.loginResult.Functions[this.pageIndex].Children;
    }
  },
  created(){

  }
  ,
  components: {
    AsideLeft,
    HeaderTop
  },
  methods:{
    menuchange(index){
     this.pageIndex = index;
    }
  }
}
</script>
<style lang="less" scoped>
@leftWidth:200px;
.main{
  margin-top:60px;
}
.header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:60px;

}
.aside-left{
  float:left;
  width:@leftWidth;
  
}
.content{
  overflow:hidden;
  margin-left:@leftWidth;
}

</style>