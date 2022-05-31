import{f as A,a as w}from"./select-options.18b9e052.js";import{drawTypes as D,simpleShapes as T,WordCloudSeries as z}from"./word-cloud.8d115c2a.js";import{a as W}from"./AppRoot.9161bc33.js";import{a4 as $,aD as R,a5 as t,aa as s,aX as u,a$ as a,a6 as i,ae as C,af as v,a7 as d,b0 as B,ag as y,ah as U}from"./vendor.1c7e0fbb.js";import"./echarts-animation.c54de7ad.js";const I=$({name:"VWordCloudProp",props:{com:{type:Object,required:!0}},setup(l){const o=R(l.com,"config");return{config:o,fontFamilys:A,fontWeights:w,drawTypes:D,simpleShapes:T,handleAddSeriesItem:()=>new z(`\u7CFB\u5217${o.value.series.length+1}`,"#fff")}}}),N={class:"setting-panel-gui"};function c(l,o,S,j,q,L){const b=t("g-select"),n=t("g-field"),m=t("g-slider"),g=t("g-input-number"),V=t("n-radio-button"),F=t("n-radio-group"),E=t("g-upload-image"),r=t("g-field-collapse"),k=t("g-input"),p=t("g-color-picker");return i(),s("div",N,[u(r,{label:"\u5168\u5C40\u6837\u5F0F"},{default:a(()=>[u(n,{level:2,tooltip:"\u8BF7\u9009\u62E9\u60A8\u7CFB\u7EDF\u6709\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u60A8\u7CFB\u7EDF\u65E0\u6B64\u5B57\u4F53\uFF0C\u6807\u9898\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u5B57\u4F53",label:"\u5B57\u4F53"},{default:a(()=>[u(b,{modelValue:l.config.global.fontFamily,"onUpdate:modelValue":o[0]||(o[0]=e=>l.config.global.fontFamily=e),data:l.fontFamilys},null,8,["modelValue","data"])]),_:1}),u(n,{level:2,label:"\u6700\u5927\u5B57\u53F7"},{default:a(()=>[u(m,{modelValue:l.config.global.max,"onUpdate:modelValue":o[1]||(o[1]=e=>l.config.global.max=e),min:0,max:100,step:1},null,8,["modelValue"])]),_:1}),u(n,{level:2,label:"\u6700\u5C0F\u5B57\u53F7"},{default:a(()=>[u(m,{modelValue:l.config.global.min,"onUpdate:modelValue":o[2]||(o[2]=e=>l.config.global.min=e),min:0,max:100,step:1},null,8,["modelValue"])]),_:1}),u(n,{level:2,label:"\u65CB\u8F6C\u8303\u56F4","is-flat":!0},{default:a(()=>[u(g,{modelValue:l.config.global.rotationRange.min,"onUpdate:modelValue":o[3]||(o[3]=e=>l.config.global.rotationRange.min=e),min:-360,max:360,step:1,inline:"inline",label:"\u6700\u5C0F\u89D2\u5EA6"},null,8,["modelValue"]),u(g,{modelValue:l.config.global.rotationRange.max,"onUpdate:modelValue":o[4]||(o[4]=e=>l.config.global.rotationRange.max=e),min:-360,max:360,step:1,inline:"inline",label:"\u6700\u5C0F\u89D2\u5EA6"},null,8,["modelValue"])]),_:1}),u(n,{level:2,label:"\u65CB\u8F6C\u6B65\u957F"},{default:a(()=>[u(m,{modelValue:l.config.global.rotate,"onUpdate:modelValue":o[5]||(o[5]=e=>l.config.global.rotate=e),min:0,max:360,step:1},null,8,["modelValue"])]),_:1}),u(n,{level:2,label:"\u7ED8\u5236\u7C7B\u578B"},{default:a(()=>[u(F,{value:l.config.global.drawType,"onUpdate:value":o[6]||(o[6]=e=>l.config.global.drawType=e),size:"small"},{default:a(()=>[(i(!0),s(C,null,v(l.drawTypes,e=>(i(),d(V,{key:e.id,value:e.id},{default:a(()=>[B(y(e.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l.config.global.drawType==="preset"?(i(),d(n,{key:0,level:2,label:"\u56FE\u5F62"},{default:a(()=>[u(F,{value:l.config.global.shape,"onUpdate:value":o[7]||(o[7]=e=>l.config.global.shape=e),size:"small"},{default:a(()=>[(i(!0),s(C,null,v(l.simpleShapes,e=>(i(),d(V,{key:e.id,value:e.id},{default:a(()=>[B(y(e.value),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})):U("",!0),l.config.global.drawType==="image"?(i(),d(n,{key:1,level:2,label:"\u5F62\u72B6\u56FE\u7247"},{default:a(()=>[u(E,{modelValue:l.config.global.image,"onUpdate:modelValue":o[8]||(o[8]=e=>l.config.global.image=e)},null,8,["modelValue"])]),_:1})):U("",!0)]),_:1}),u(r,{label:"\u7CFB\u5217",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:l.config.series,min:0,max:100,tab:"\u7CFB\u5217","add-item":l.handleAddSeriesItem},{default:a(e=>[u(n,{level:2,label:"\u7CFB\u5217\u540D\u79F0"},{default:a(()=>[u(k,{modelValue:e.item.name,"onUpdate:modelValue":f=>e.item.name=f},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),u(n,{level:2,label:"\u989C\u8272"},{default:a(()=>[u(p,{modelValue:e.item.color,"onUpdate:modelValue":f=>e.item.color=f},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["list","add-item"]),u(r,{modelValue:l.config.tooltip.show,"onUpdate:modelValue":o[13]||(o[13]=e=>l.config.tooltip.show=e),toggle:!0,label:"\u63D0\u793A\u6846"},{default:a(()=>[u(n,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:a(()=>[u(g,{modelValue:l.config.tooltip.textStyle.fontSize,"onUpdate:modelValue":o[9]||(o[9]=e=>l.config.tooltip.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),u(p,{modelValue:l.config.tooltip.textStyle.color,"onUpdate:modelValue":o[10]||(o[10]=e=>l.config.tooltip.textStyle.color=e),inline:"inline",label:"\u989C\u8272"},null,8,["modelValue"]),u(b,{modelValue:l.config.tooltip.textStyle.fontWeight,"onUpdate:modelValue":o[11]||(o[11]=e=>l.config.tooltip.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline-single",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1}),u(n,{level:2,label:"\u80CC\u666F\u989C\u8272"},{default:a(()=>[u(p,{modelValue:l.config.tooltip.backgroundColor,"onUpdate:modelValue":o[12]||(o[12]=e=>l.config.tooltip.backgroundColor=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])])}var J=W(I,[["render",c]]);export{J as default};
