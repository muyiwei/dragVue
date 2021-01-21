<template>
<div class='button'>
    
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
@Component({
    name:"bpmButton"
})
export default class InputText extends Vue{
    @Prop()text:string = "button";
}    
</script>
<style lang="less">
.button{
    border:1px solid #ccc;
    width:100%;
    height:40px;
    text-align: center;
    border-radius: 20px;
    display:block;
}
</style>