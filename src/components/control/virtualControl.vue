<template>
<div class='virtual-item'>

</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
@Component({
    name:"virtualControl"
})
export default class InputText extends Vue{
    @Prop()text:string = "button";
}    
</script>
<style lang="less">
.virtual-item{
    height: 100%;
    border:1px dashed #007dff;
    opacity: 0.7;
}
</style>