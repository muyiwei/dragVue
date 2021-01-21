<template>
<div>
    <div ref="f" v-html="data1">

    </div>
            <div v-once @click="changeMessage()">
        {{message}}
    </div>
    <div v-pre>{{message}} 999</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
import InputText from './inputText.vue';
@Component({
    name:"inputText2"
})
export default class InputText2 extends InputText{
    data:any=[1,2,3];
    data1:string="";
        message: string = "123123";
    changeMessage() {
        this.message = "3333333333"
    }
    created(){
        console.log("inputext2 created");
    }
    mounted(){
        console.log("inputext2 computed4");
        this.data1 = `<div v-for="(item,index) in data">{{item}}</div>`
    }
}    
</script>
