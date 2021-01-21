<template>
<div>
<input type="text">
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
@Component({
    name:"inputText"
})
export default class InputText extends Vue{
    value1:string = "";
    message: string = "123123";
    changeMessage() {
        this.message = "3333333333"
    }
    get value(){
        return this.value1;
    }
    set value(val){
        if(typeof val !=="string"){
            return;
        }
        this.value1 = val;
    }
    created(){
        
        (window as any).inputText1 = this;
        console.log("inputtext 1 created")
    }
    mounted(){
       console.log("inputtext 1 mounted")
    }
}    
</script>
<style lang="less" scoped>
input{
    width:100%;
    height:40px;
    border: 1px solid #ccc;
}

</style>
