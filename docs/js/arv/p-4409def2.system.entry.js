System.register(["./p-5d12baf9.system.js"],(function(e){"use strict";var t,i,o,a;return{setters:[function(e){t=e.r;i=e.c;o=e.h;a=e.g}],execute:function(){var r="@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.root{position:relative;height:120px;width:120px;border-radius:var(--radius);overflow:hidden;-webkit-box-shadow:0 2px 2px rgba(3,3,3,0.3);box-shadow:0 2px 2px rgba(3,3,3,0.3);background-color:#dfdfdf}.img{background-size:cover;background-position:center center;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.small{height:80px;width:80px}.xsmall{height:40px;width:40px}.large{height:150px;width:150px}.input{position:absolute;opacity:0;height:100%;width:100%;top:0;left:0;cursor:pointer}.remove-button{--icon-color:#fff;--default-light-color:rgba(3, 3, 3, 0.3);display:none;position:absolute;z-index:9;right:0;width:33px;-ms-flex-pack:end;justify-content:flex-end}.hover{-webkit-animation:fadeIn 0.3s;animation:fadeIn 0.3s;display:none;background-color:rgba(3,3,3,0.5);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;top:0;left:0;width:100%;height:100%;position:absolute}.hoverText{color:#fff;text-shadow:1px 1px 1px rgba(3,3,3,0.3)}.small .hoverText{font-size:0.8rem}.xsmall .hoverText{display:none}.root:hover .hover{display:-ms-flexbox;display:flex}.root:hover .remove-button{display:-ms-flexbox;display:flex}.disabled,.disabled .input{cursor:not-allowed}";var s=e("arv_image_upload",function(){function e(e){t(this,e);this.arvUploadImage=i(this,"arvUploadImage",7);this.arvRemoveImage=i(this,"arvRemoveImage",7)}e.prototype.change=function(e){this.arvUploadImage.emit({target:e.target,files:e.target.files});if(this.uploadImage){this.uploadImage(e.target)}};e.prototype.removeItem=function(){var e=this.el.shadowRoot.querySelector("input");e.value=null;this.arvRemoveImage.emit();if(this.removeImage){this.removeImage()}};e.prototype.render=function(){var e=this;var t={root:true,xsmall:this.size==="xsmall",small:this.size==="small",large:this.size==="large",disabled:this.disabled};var i={img:true};var a={};if(this.imgSrc){a["background-image"]="url("+this.imgSrc+")"}var r=function(){if(e.imgSrc){return"Change Image"}return"Upload Image"}();return o("div",{class:t},this.imgSrc&&o("div",{class:"remove-button"},o("arv-button",{disabled:this.disabled,buttonClick:this.removeItem.bind(this),icon:"close",variant:"raised-icon"})),o("div",{class:i,style:a},!this.imgSrc&&o("arv-icon",{size:"xlarge",icon:"photo"})),o("div",{class:"hover"},o("span",{class:"hoverText"},r)),o("input",{disabled:this.disabled,class:"input",type:"file",onChange:this.change.bind(this)}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});return e}());s.style=r}}}));