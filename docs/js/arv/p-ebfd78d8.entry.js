import{r,h as o}from"./p-3c1deafe.js";const i=class{constructor(o){r(this,o)}handleClick(r){this.containerClick&&this.containerClick(r)}render(){const r={container:!0,full:this.full,hidden:this.hidden,responsive:"responsive"===this.variant,max1080:this.max1080,primary:"primary"===this.color,secondary:"secondary"===this.color,warning:"warning"===this.color,light:"light"===this.color,dark:"dark"===this.color,scrollable:this.scrollable},i={height:this.height,width:this.width,padding:this.padding,margin:this.margin,position:this.position},t=Object.assign(Object.assign({},this.styles),i);return o("div",{style:t,class:r},o("slot",null))}};i.style=":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.container{-webkit-box-sizing:border-box;box-sizing:border-box}.full{height:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.hidden{display:none}.max1080{max-width:1080px}.responsive{padding-left:24px;padding-right:24px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.primary{background-color:var(--primary-color);--default-dark-text:var(--primary-text-color)}.secondary{background-color:var(--secondary-color);--default-dark-text:var(--secondary-text-color)}.warning{background-color:var(--warning-color);--default-dark-text:var(--warning-text-color)}.light{background-color:var(--light-color);--default-dark-text:var(--dark-text-color)}.dark{background-color:var(--dark-color);--default-dark-text:var(--light-text-color)}.scrollable{overflow-y:scroll}@media (min-width: 1128px){.responsive{padding-left:80px;padding-right:80px}}";export{i as arv_container}