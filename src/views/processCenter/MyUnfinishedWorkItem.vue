<template>
  <div>
    <el-table :data="rows" style="width: 100%">
      <el-table-column prop="InstanceName" label="流程名称" width="180"></el-table-column>
      <el-table-column prop="DisplayName" label="任务名称" width="180"></el-table-column>
      <el-table-column prop="ReceiveTime" label="接收时间" width="180"></el-table-column>
         <el-table-column prop="ParticipantName" label="发起人" width="180"></el-table-column>
      <el-table-column prop="OriginatorOUName" label="发起人所属组织" width="180"></el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getUnfinishWorkItems } from "../../api/index";
export default {
  data() {
    return {
      keyWord: "",
      iDisplayStart: 0,
      iDisplayLength: 10,
      rows:""
    };
  },
  created() {
      this.getUnfinishWorkItems();
  },
  computed: {
  },
  methods: {
     getUnfinishWorkItems: async function(){
       let data = {
        keyWord: this.keyWord,
        iDisplayStart: this.iDisplayStart,
        iDisplayLength: this.iDisplayLength
       };
         let res = await  getUnfinishWorkItems(data)
         this.rows = res.Rows;
      }
  }
};
</script>

<style>
</style>