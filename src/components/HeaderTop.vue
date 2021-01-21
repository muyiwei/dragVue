<template>
  <div class="header">
      <div class="header-left">
          <div class='log'></div>
      </div>
      <div class="header-right">
          <ul class="menu">
              <li class="item" v-for="(item,index) in list" :key="index" :class="{active:index==currentIndex}" @click="selectMenu(index)">
                <a href="javascript:void(0)">{{item.DisplayName}}  </a>
              </li>
          </ul>
      </div>       
  </div>
</template>

<script>
export default {
    props:["list","currentIndex"],
    data(){
        return {
           currendIndex:0
        }
    },
    methods:{
        selectMenu(index){
           this.$store.commit("pageIndex",index);
           // 左侧菜单置为0
          
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    display:flex;
    align-items: center;
}
.menu{
    display: flex;
    justify-content:flex-end;
    text-align: right;
    li{
        margin:0 12px;
        color:#666;
        .active{
            border-bottom:2px solid blue;
        }
    }
}
.header-right{
    flex:1;
}
.header-left{
    padding-left:20px;
}
.log{

    background:url(../css/img/H3-BPMLogo.png);
    width:126px;
    height:30px;
    background-size:cover;
}
ul ,li{
    text-decoration: none;
    list-style-type:none;
}



</style>