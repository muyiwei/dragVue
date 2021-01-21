<template>
  <div>
    <el-menu
       :default-active="activeIndex"
        class="el-menu-vertical"
        active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <template v-for="(item,index) in list">
        <el-submenu v-if="item.Children.length>0" :index="index+''" :key="item.Code">
          <template slot="title">{{item.DisplayName}}</template>
          <el-menu-item
            v-for="(subItem,subIndex) in item.Children"
            :key="subItem.Code"
            :index="index+'-'+subIndex"
          >{{subItem.DisplayName}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="index+''" :key="item.Code">
          {{item.DisplayName}}
          </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>




<script>
export default {
  props: ["list", "currentIndex"],
  created() {
    console.log("asideleft created");
  },
  data: function() {
    return {
      activeIndex: "0",
      activeColor: "#005abf"
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
     // console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {
      index = index.split("-");
      let item = this.list[index[0]];
      index.splice(0,1)
      index.forEach(function(value){
        item = item.Children[value]
      })
      var url = item.Url.split(".")[1].split("(")[0];
      debugger;
      this.$router.push("home/"+url)
      
    }
  }
};
</script>

<style lang="less" scope>
.el-menu-vertical{
    min-height:700px;
}
</style>





