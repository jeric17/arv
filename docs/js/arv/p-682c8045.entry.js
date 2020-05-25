import{r as o,c as r,h as e,H as a}from"./p-3c1deafe.js";import{g as c}from"./p-8da5cbdd.js";const t=class{constructor(e){o(this,e),this.change=()=>{if(this.disabled)return!1;this.checked=!this.checked,this.arvChange.emit(this.checked)},this.arvChange=r(this,"arvChange",7)}render(){const o=Object.assign(Object.assign(Object.assign({},c(this.size)),c(this.color)),{disabled:this.disabled,checked:this.checked});let r={};return this.flexDirection&&(r={flexDirection:this.flexDirection},o["flex-"+this.flexDirection]=!0),e(a,{class:o,style:r,onClick:this.change},e("label",{class:"label"},this.label),e("div",{class:"control"},e("div",{class:"value"},e("arv-icon",{icon:"check"}))),e("input",{disabled:this.disabled,type:"checkbox",value:this.value,checked:this.checked}))}};t.style="@-webkit-keyframes in{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes in{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}:host{cursor:pointer;display:-ms-flexbox;display:flex;margin:4px;-ms-flex-align:center;align-items:center}:host(.flex-column) label,:host(.flex-column-reverse) label{margin:1em 0}label{cursor:pointer;margin:0 1em}input{display:none}:host(.disabled){cursor:not-allowed}.control{border-width:2px;border-style:solid;border-color:var(--default-highlight);background-color:var(--default-bg);border-radius:var(--radius);height:20px;width:20px;min-height:20px;min-width:20px;-webkit-transition:all 0.3s;transition:all 0.3s}:host(.checked) .control,.control:hover{border-color:var(--default-shade)}:host(.disabled) .control:hover{border-color:var(--default-shade)}.value{-webkit-animation:in 0.3s;animation:in 0.3s;width:100%;height:100%;display:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--default-highlight)}:host(.checked) .value{display:-ms-flexbox;display:flex}:host(.primary) .value{background-color:var(--primary-color);--icon-color:var(--primary-text-color)}:host(.primary) .control{border-color:var(--primary-shade)}:host(.secondary) .value{background-color:var(--secondary-color);--icon-color:var(--secondary-text-color)}:host(.secondary.checked) .control{border-color:var(--secondary-shade)}:host(.success) .value{background-color:var(--success-color);--icon-color:var(--success-text-color)}:host(.success.checked) .control{border-color:var(--success-shade)}:host(.warning) .value{background-color:var(--warning-color);--icon-color:var(--warning-text-color)}:host(.warning.checked) .control{border-color:var(--warning-shade)}:host(.danger) .value{background-color:var(--danger-color);--icon-color:var(--danger-text-color)}:host(.danger.checked) .control{border-color:var(--danger-shade)}:host(.dark) .value{background-color:var(--dark-color);--icon-color:var(--dark-text-color)}:host(.dark.checked) .control{border-color:var(--dark-shade)}:host(.light) .value{background-color:var(--light-color);--icon-color:var(--light-text-color)}:host(.light.checked) .control{border-color:var(--light-shade)}:host(.disabled) .value{background-color:var(--disabled-color);--icon-color:var(--disabled-text-color)}:host(.disabled.checked) .control{border-color:var(--disabled-shade)}:host(.large) .control{min-height:30px;min-width:30px;height:30px;width:30px;--icon-size:1.5rem}:host(.small) .control{min-height:14px;min-width:14px;height:14px;width:14px;--icon-size:0.8rem}";export{t as arv_checkbox}