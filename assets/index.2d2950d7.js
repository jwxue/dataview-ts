import{a as $,_ as b,u as z}from"./AppRoot.9161bc33.js";import{a6 as C,aa as B,ad as i,a4 as D,a8 as k,a9 as u,b9 as I,b8 as R,aB as S,a5 as s,aX as n,a$ as a,ak as A,b0 as K,ag as F}from"./vendor.1c7e0fbb.js";const U={},T={t:"1628693323349",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3897","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"},P=i("path",{d:"M934.4 818.7123808a455.92380907 455.92380907 0 0 0-98.2552384-145.67618987 457.9108576 457.9108576 0 0 0-145.67618987-98.2552384c-0.4876192-0.24380907-0.9752384-0.36571413-1.4628576-0.60952426C764.9523808 519.31428587 814.32380907 429.95809493 814.32380907 329.1428576c0-167.00952427-135.31428587-302.32380907-302.32380907-302.32381013S209.67619093 162.13333333 209.67619093 329.1428576c0 100.8152384 49.37142827 190.17142827 125.31809494 245.15047573-0.4876192 0.24380907-0.9752384 0.36571413-1.4628576 0.60952427-54.61333333 23.04-103.61904747 56.07619093-145.67618987 98.25523733a457.9108576 457.9108576 0 0 0-98.2552384 145.67619094A453.12 453.12 0 0 0 53.63809493 987.1847616a9.7523808 9.7523808 0 0 0 9.7523808 9.99619093h73.1428576c5.36380907 0 9.63047573-4.26666667 9.7523808-9.50857173 2.43809493-94.11047573 40.22857173-182.2476192 107.0323808-249.05142827 69.12-69.12 160.91428587-107.15428587 258.68190507-107.15428586s189.56190507 38.03428587 258.68190507 107.15428586C837.48571413 805.4247616 875.27619093 893.56190507 877.71428587 987.6723808c0.12190507 5.36380907 4.38857173 9.50857173 9.7523808 9.50857173h73.1428576a9.7523808 9.7523808 0 0 0 9.7523808-9.99619093c-1.21904747-58.27047573-13.2876192-114.95619093-35.96190507-168.4723808zM512 538.81904747c-55.95428587 0-108.6171424-21.82095253-148.23619093-61.44S302.32380907 385.0971424 302.32380907 329.1428576c0-55.95428587 21.82095253-108.6171424 61.44-148.23619093S456.04571413 119.46666667 512 119.46666667s108.6171424 21.82095253 148.23619093 61.44S721.67619093 273.18857173 721.67619093 329.1428576c0 55.95428587-21.82095253 108.6171424-61.44 148.23618987S567.95428587 538.81904747 512 538.81904747z","p-id":"3898"},null,-1),V=[P];function O(e,o){return C(),B("svg",T,V)}var M=$(U,[["render",O]]);const N={},Q={t:"1628693945974",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4043","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"},j=i("path",{d:"M754.72592555 754.72592555a243.06574222 243.06574222 0 0 0-194.18073998-237.77431666L560.54518557 414.90963001l97.09036998 0 0-97.09037113-97.09036998 0 0-97.09036999 145.63555555 0 0-97.09036999-145.63555554 0-1e-8-97.09037113-97.09037114 0L463.45481443 516.95160889A243.06574222 243.06574222 0 0 0 269.27407445 754.72592555c0 133.83907554 108.88684999 242.72592555 242.72592555 242.72592668s242.72592555-108.88684999 242.72592555-242.72592668z m-388.3614811 0c0-80.29373667 65.34181888-145.63555555 145.63555555-145.63555554s145.63555555 65.34181888 145.63555555 145.63555554-65.34181888 145.63555555-145.63555555 145.63555555-145.63555555-65.34181888-145.63555555-145.63555555z","p-id":"4044"},null,-1),W=[j];function X(e,o){return C(),B("svg",Q,W)}var Z=$(N,[["render",X]]);const q=(e,o,t)=>{["admin","editor"].includes(o)?t():t(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7528\u6237\u540D"))},G=(e,o,t)=>{o.length<6?t(new Error("\u5BC6\u7801\u4E0D\u80FD\u5C11\u4E8E6\u4F4D")):t()},H=e=>Object.keys(e).reduce((o,t)=>(t!=="redirect"&&(o[t]=e[t]),o),{}),J=D({name:"Login",components:{BackgroundParticles:k(()=>b(()=>import("./background-particles.3aa8ba34.js"),["assets/background-particles.3aa8ba34.js","assets/background-particles.bee6b7d6.css","assets/vendor.1c7e0fbb.js","assets/AppRoot.9161bc33.js","assets/AppRoot.6c3f2524.css"])),live2d:k(()=>b(()=>import("./live2d.526cdd03.js"),["assets/live2d.526cdd03.js","assets/live2d.011f9faa.css","assets/AppRoot.9161bc33.js","assets/AppRoot.6c3f2524.css","assets/vendor.1c7e0fbb.js"])),IconUser:M,IconKey:Z},setup(){const e=z(),o=u({username:"admin",password:"123123"}),t=u({username:[{required:!0,trigger:"blur",validator:q}],password:[{required:!0,trigger:"blur",validator:G}]}),g=u(null),c=u(!1),d=u(!1),p=u(""),_=u({}),f=I(),v=R();return S(f,({query:r})=>{r&&(p.value=r.redirect,_.value=H(r))},{immediate:!0}),{loginForm:o,loginRules:t,loginFormRef:g,capsTooltip:c,loading:d,checkCapslock:({shiftKey:r,key:l})=>{l&&l.length===1&&(r&&l>="a"&&l<="z"||!r&&l>="A"&&l<="Z"?c.value=!0:c.value=!1),l==="CapsLock"&&c.value===!0&&(c.value=!1)},handleLogin:()=>{g.value.validate(r=>{r||(d.value=!0,e.login(o.value.username,o.value.password).then(()=>{v.push({path:p.value||"/",query:_.value})}).finally(()=>{d.value=!1}))})}}}}),Y={class:"login-container"},e5={class:"lang-select"},o5=i("span",null," \u5927\u5199\u9501\u5B9A\u5DF2\u6253\u5F00 ",-1),n5={style:{position:"relative"}},t5={class:"tips"};function s5(e,o,t,g,c,d){const p=s("background-particles"),_=s("live2d"),f=s("g-lang-select"),v=s("IconUser"),h=s("n-icon"),w=s("n-input"),r=s("n-form-item"),l=s("IconKey"),y=s("n-tooltip"),E=s("n-button"),x=s("n-form"),L=s("n-config-provider");return C(),B("div",Y,[n(p),n(L,{"theme-overrides":{Input:{color:"#0000",colorFocus:"#0000",colorFocusError:"#0000",colorFocusWarning:"#0000",textColor:"#fff",caretColor:"#fff",border:"1px solid rgba(255, 255, 255, 0.3)"}},abstract:""},{default:a(()=>[n(x,{ref:"loginFormRef",model:e.loginForm,rules:e.loginRules,"label-placement":"left",size:"small",class:"login-form"},{default:a(()=>[n(_),i("div",e5,[n(f)]),n(r,{path:"username"},{default:a(()=>[n(w,{value:e.loginForm.username,"onUpdate:value":o[0]||(o[0]=m=>e.loginForm.username=m),placeholder:"\u7528\u6237\u540D",type:"text",size:"large"},{prefix:a(()=>[n(h,null,{default:a(()=>[n(v)]),_:1})]),_:1},8,["value"])]),_:1}),n(r,{path:"password"},{default:a(()=>[n(y,{show:e.capsTooltip,placement:"top-start"},{trigger:a(()=>[n(w,{value:e.loginForm.password,"onUpdate:value":o[1]||(o[1]=m=>e.loginForm.password=m),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password",size:"large","show-password-on":"click",onKeydown:e.checkCapslock,onBlur:o[2]||(o[2]=m=>e.capsTooltip=!1),onKeyup:A(e.handleLogin,["enter"])},{prefix:a(()=>[n(h,null,{default:a(()=>[n(l)]),_:1})]),_:1},8,["value","onKeydown","onKeyup"])]),default:a(()=>[o5]),_:1},8,["show"])]),_:1}),n(E,{loading:e.loading,type:"primary",size:"large",style:{width:"100%","margin-bottom":"20px"},onClick:e.handleLogin},{default:a(()=>[K(F(e.$t("login.login")),1)]),_:1},8,["loading","onClick"]),i("div",n5,[i("div",t5,[i("span",null,F(e.$t("login.username"))+": admin",1),i("span",null,F(e.$t("login.password"))+": 123123",1)])])]),_:1},8,["model","rules"])]),_:1},8,["theme-overrides"])])}var l5=$(J,[["render",s5]]);export{l5 as default};
