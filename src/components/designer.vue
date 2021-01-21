<template>
<div class="desiginer-wrap">
    <div class="designier-left">
       
            <div v-for="control in controls" :key="control.key" class="control-item" @dragstart="drag($event,control)"  @dragend="dragEnd" draggable="true">
                {{control.name}}
            </div>
        
    </div>
    <div class="designier-right">
        
        <div class="designer-panel">
            <div ref="dropPanel" class="doppanel"  @dragover="dragover" @drop="drop">
                <transition-group>
                    <div v-for="(row, index) in layout" :key="index" class="row" :style="{'height':rowHeight+'px'}" >
                        <div v-for = "col in row" :key="col.id" class="col">
                            <component :is="col.componentName" />
                        </div>
                    </div>
                </transition-group>
            </div>    

        </div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
import inputText from "@/components/control/inputText.vue";
import bpmButton from "@/components/control/bpmButton.vue";
import virtualControl from "@/components/control/virtualControl.vue";
import draggable from "vuedraggable";
@Component({
    name:"designer",
    components:{
        bpmButton,
        inputText,
        draggable,
        virtualControl
    }
})
export default class InputText extends Vue{
    @Prop() maxCol:any;
    
    controls:any = [{
        name:"按钮",
        id:1,
        componentName:"bpmButton"
    },{
        name:"输入框",
        id:2,
        componentName:"inputText"
    }];
    ctrlKey: boolean = false;
    lastX: any = 0;
    lastY: any = 0;
    rowHeight: number = 60;
    lastNotMoveX: any = 0;
    lastNotMoveY: any = 0;
    virtualItemIndex: any = -1;
    virtualItemCol: any = -1;
    canDrag: any = true;
    rowStyle: any = "";
    layout: Array<Array<any>> = [];
    virtualItem: any = {
        name:"",
        id:999,
        componentName:"virtualControl"
    }
    created () {
        this.rowStyle = '{"height":50}';
    }
    drop(event: any)
    {
        event.preventDefault();
        
        let control = JSON.parse(event.dataTransfer.getData("dragData"));
        if(this.virtualItemIndex != -1)
        {
            if(this.virtualItemCol == -1)
            {
                this.layout.splice(this.virtualItemIndex, 1,[control]);
                
            }
            else
            {
                let rowData = this.layout[this.virtualItemIndex];
                rowData.splice(this.virtualItemCol, 1, control);
            }

        }
        this.virtualItemIndex = -1;
        this.virtualItemCol = -1;
    }
    dragover(event:any){
        event.preventDefault();
        if(!this.canDrag)
        {
            return;
        }
        this.canDrag = false;
        setTimeout(() => {
            this.canDrag = true;
            let x = event.pageX;
            let y = event.pageY;
            if(x == this.lastX && y == this.lastY)
            {
              if(this.lastNotMoveX != x || this.lastNotMoveY != y)
              {
                this.dragNotMove(event);
                this.lastNotMoveX = x; 
                this.lastNotMoveY = y; 
                
              }
              

            }
            else
            {
                this.lastX = x;
                this.lastY = y;

               
            }
            
        },16)
    }
    insertVirtualRow(row: any)
    {
        if(row == this.virtualItemIndex)
        {
            return;
        }
        let position = this.removeVirtualItem(row);
        row = position.row;
        this.layout.splice(row, 0, [this.virtualItem]);
        this.virtualItemIndex = row;
        this.virtualItemCol = -1;
    }
    removeVirtualItem(row: any, col?:any){

        if(this.virtualItemIndex != -1)
        {
            if(this.virtualItemCol == -1)
            {
                this.layout.splice(this.virtualItemIndex, 1);
                if(row > this.virtualItemIndex)
                {
                    row --;
                }
            }
            else 
            {
                let virtualRowData = this.layout[this.virtualItemIndex];
                virtualRowData.splice(col, 1);
                if(col && col > this.virtualItemCol && row == this.virtualItemIndex)
                {
                    col --;
                }
            }

            
        }
        return {
            row:row,
            col:col
        }
    }
    insertVirtualCel(row: any, col: any)
    {
        if(this.virtualItemIndex == row && this.virtualItemCol == col)
        {
            return;
        }
        let position = this.removeVirtualItem(row, col);
        row = position.row;
        col = position.col;
        let rowData = this.layout[row];    
        rowData.splice(col, 0, this.virtualItem);
        this.virtualItemIndex = row;
        this.virtualItemCol = col;
    }

    dragNotMove(event: any){
        let x = event.pageX;
        let y = event.pageY;
        let dropPanelRect = this.$refs.dropPanel.getBoundingClientRect();
        let width = dropPanelRect.width;
        let left = dropPanelRect.left;
        let top = dropPanelRect.top;
        let offsetX:number = x - left;
        let offsetY:number = y - top;
        let thirdOffsetY = this.rowHeight / 3;
        let rowIndex = Math.floor(offsetY / this.rowHeight);
        let rowIndexOffset = offsetY % this.rowHeight;
        console.log(rowIndex," ", this.layout);
        if(this.layout.length > 0 && this.layout[rowIndex]&&this.layout[rowIndex].length==1 && this.layout[rowIndex][0].componentName == 'virtualControl')
        {
            return;
        }
        if(rowIndex >= this.layout.length || this.layout.length == 0)
        {
        
 
           this.insertVirtualRow(this.layout.length);
           
           return;
        }
        if(rowIndexOffset <= thirdOffsetY )
        {
            this.insertVirtualRow(rowIndex);


        }
        else if(rowIndexOffset > thirdOffsetY && rowIndexOffset <= 2*thirdOffsetY)
        {
            let rowData = this.layout[rowIndex];
            let count = 0;
            rowData.forEach(function(value){
                if(value.componentName != 'virtualControl')
                {
                    count ++;
                }
            });

            
            if(count >= this.maxCol)
            {
                return;
            }
            let oneWidth = Math.floor(width/rowData.length);
            let leftOffsetX =  Math.floor(oneWidth/2);
            let col = Math.floor(offsetX/oneWidth);
            let colIndexOffset = offsetX % oneWidth;
            if(rowData[col].componentName == 'virtualControl')
            {
                return;
            }
            if(colIndexOffset > leftOffsetX)
            {
                col ++;
            }
           
            this.insertVirtualCel(rowIndex, col);
            console.log("插入中间")
            console.log("插入");
        }
        else
        {
            rowIndex++;
            this.insertVirtualRow(rowIndex);
            console.log("放底部");
        }
        
        
    }
    drag(event:any, control: any){
        event.dataTransfer.setData("dragData", JSON.stringify(control));
    }
    dragEnd(){
       
    }
    end(event:any){
        let item:any = this.controls[event.newIndex];
        debugger;
        if(event.originalEvent.pageX){
        console.log(event)
        }
        if(!this.isInBoundingClientRect(event.originalEvent.pageX, event.originalEvent.pageY, this.$refs.dropPanel.$el)){
            console.log("不在范围内")
            return;
        }
        let component:any = {
            name:item.componentName
        }
        this.layout.push(component);
    }
    start(event:any){
    
        this.ctrlKey = event.originalEvent.ctrlKey;
        console.log(event.originalEvent.ctrlKey)
    }
    pullFunction(){
        return this.ctrlKey ? "clone" : true;
    }
    mounted(){
        
    }
    isInBoundingClientRect(x:any, y:any, $el:any){
        let rec:any = $el.getBoundingClientRect();
        return x >= rec.x && x <= rec.x + rec.width && y >= rec.y && y <= rec.y + rec.height
   
    
    }
}    
</script>
<style lang="less">
.row{
    display: flex;
    align-items: center;
    box-sizing:border-box;
    padding:8px 0px;
    border-bottom:1px dashed #aaa;
    .col{
        flex:1;
        height:100%;
    }
}
.desiginer-wrap{
    display:flex;

}
.designier-right{
    flex:1;
}
.designier-left{
    display:flex;
    flex-wrap: wrap;
    width:200px;
    padding:20px;
    border-right:1px solid #aaa;

.control-item{
    height:32px;
    width:64px;
    border:1px solid #ccc;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:8px;
    cursor: move;
    }
}
.doppanel{
    min-height:600px;
}
</style>