import{r as t,c as i,h as s,g as o}from"./p-3c1deafe.js";const r=class{constructor(s){t(this,s),this.showIcon=!0,this.color="default",this.disabled=!1,this.direction="vertical",this.onDragOver=t=>{t.preventDefault(),this.isOver=!0,this.applyEvent(t,"over","itemOver")},this.onDragStart=t=>{console.log("dragstart"),t.dataTransfer.dropEffect="copy",this.applyEvent(t,"start","itemStart")},this.onDragEnter=t=>{console.log("dragenter"),this.applyEvent(t,"enter","itemEnter")},this.onDragLeave=t=>{this.applyEvent(t,"leave","itemLeave"),this.isOver=!1},this.onDragEnd=t=>{this.applyEvent(t,"end","itemEnd")},this.onDragExit=t=>{this.applyEvent(t,"exit","itemExit")},this.onDrag=t=>{console.log("drag"),this.applyEvent(t,"drag","itemDrag")},this.onDrop=t=>{console.log("draggable",t),t.preventDefault();const i=t.dataTransfer.getData("Text");this.applyEvent(t,"drop","itemDrop",{target:i})},this.onDragTop=()=>{if(this.isTopOver)return!1;this.isTopOver=!0},this.onDragLeaveTop=()=>{this.isTopOver=!1},this.onDropTop=t=>{t.preventDefault(),this.isTopOver=!1;const i=t.dataTransfer.getData("Text");this.applyEvent(t,"dropTop","itemDropTop",{target:i}),this.applyEvent(t,"dropLeft","itemDropLeft",{target:i})},this.onDragBottom=()=>{if(this.isBottomOver)return!1;this.isBottomOver=!0},this.onDragLeaveBottom=()=>{this.isBottomOver=!1},this.onDropBottom=t=>{t.preventDefault(),this.isBottomOver=!1;const i=t.dataTransfer.getData("Text");this.applyEvent(t,"dropBottom","itemDropBottom",{target:i}),this.applyEvent(t,"dropRight","itemDropRight",{target:i})},this.itemDrag=i(this,"itemDrag",7),this.itemDrop=i(this,"itemDrop",7),this.itemStart=i(this,"itemStart",7),this.itemOver=i(this,"itemOver",7),this.itemEnter=i(this,"itemEnter",7),this.itemEnd=i(this,"itemEnd",7),this.itemExit=i(this,"itemExit",7),this.itemLeave=i(this,"itemLeave",7),this.itemDropTop=i(this,"itemDropTop",7),this.itemDropBottom=i(this,"itemDropBottom",7),this.itemDropLeft=i(this,"itemDropLeft",7),this.itemDropRight=i(this,"itemDropRight",7)}applyEvent(t,i,s,o={}){t.dataTransfer.setData("text/plain",this.hashKey),this[i]&&this[i](t,this.hashKey,o),this[s].emit(Object.assign(Object.assign({},{dragEvent:t,key:this.hashKey}),o))}render(){const t="vertical"===this.direction,i={bottom:!0,isBottomOver:this.isBottomOver,horizontalLine:!t};return s("div",{class:{draggable:!0,isOver:this.isOver,primary:"primary"===this.color,secondary:"secondary"===this.color,disabled:this.disabled,horizontal:!t},onDragEnd:this.onDragEnd,onDragExit:this.onDragExit,onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave,onDragOver:this.onDragOver,onDragStart:this.onDragStart,onDrop:this.onDrop,onDrag:this.onDrag,draggable:!this.disabled},s("div",{class:{top:!0,isTopOver:this.isTopOver,horizontalLine:!t},onDragEnter:this.onDragTop,onDragLeave:this.onDragLeaveTop,onDrop:this.onDropTop}),s("arv-flex",{class:"slotWrapper",items:"center"},this.showIcon&&s("arv-icon",{icon:"drag_indicator",noMargin:!0}),s("slot",null)),s("slot",null),this.isLast&&s("div",{class:i,onDragEnter:this.onDragBottom,onDragLeave:this.onDragLeaveBottom,onDrop:this.onDropBottom}))}get el(){return o(this)}};r.style=".top,.bottom{min-height:2px;height:4px}.topContent{-webkit-animation:show;animation:show}.isTopOver,.isBottomOver,.isTopOver.horizontalLine,.isBottomOver.horizontalLine{background-color:var(--primary-color)}arv-icon{--default-icon-color:#565656;cursor:move}.disabled arv-icon{cursor:not-allowed}.primary arv-icon{--default-icon-color:var(--primary-color)}.secondary arv-icon{--default-icon-color:var(--secondary-color)}.slotWrapper{position:relative;z-index:1;display:block}.horizontal{display:-ms-flexbox;display:flex;position:relative;padding:0 2px;-webkit-box-sizing:border-box;box-sizing:border-box}.horizontalLine{width:2px;position:absolute;height:100%}.isBottomOver.horizontalLine{right:0}";export{r as arv_draggable}