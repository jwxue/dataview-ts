var Ge=Object.defineProperty,Ze=Object.defineProperties;var Qe=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var ye=(e,t,a)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,X=(e,t)=>{for(var a in t||(t={}))et.call(t,a)&&ye(e,a,t[a]);if(he)for(var a of he(t))tt.call(t,a)&&ye(e,a,t[a]);return e},Y=(e,t)=>Ze(e,Qe(t));import{a as at,C as nt,w as ot,x as st,y as rt,Y as lt,V as $e}from"./AppRoot.9161bc33.js";import{c as it}from"./index.2ec4af99.js";import{I as ct}from"./search.2fe14001.js";import{I as ut}from"./back.ed0e1f65.js";import{br as dt,aI as ft,aF as pt,bs as vt,bt,a9 as C,aB as I,aZ as z,a4 as L,a6 as w,aa as O,ad as $,bu as _t,b7 as we,ay as Pe,bv as mt,bw as ee,am as gt,bq as te,bd as ae,aC as V,ai as pe,b2 as ht,n as ve,bx as U,ab as Re,ac as le,aj as Ie,by as Ve,b6 as P,bg as yt,bz as $t,ae as H,bp as wt,bA as Pt,aK as Ct,aL as St,ah as ie,a_ as Ot,as as Et,a5 as j,ag as q,aX as R,a$ as x,af as G,a7 as se,b0 as be}from"./vendor.1c7e0fbb.js";import"./templates.c8d0560b.js";function Fe(e){return vt()?(bt(e),!0):!1}const _e=typeof window!="undefined",Tt=e=>typeof e=="number",Nt=e=>typeof e=="string",re=()=>{};var Bt=Object.defineProperty,xt=Object.defineProperties,kt=Object.getOwnPropertyDescriptors,Ce=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,Se=(e,t,a)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,At=(e,t)=>{for(var a in t||(t={}))Dt.call(t,a)&&Se(e,a,t[a]);if(Ce)for(var a of Ce(t))zt.call(t,a)&&Se(e,a,t[a]);return e},Lt=(e,t)=>xt(e,kt(t));function Oe(e,t){var a;const n=ft();return pt(()=>{n.value=e()},Lt(At({},t),{flush:(a=t==null?void 0:t.flush)!=null?a:"sync"})),dt(n)}function Rt(e){var t;const a=z(e);return(t=a==null?void 0:a.$el)!=null?t:a}const me=_e?window:void 0,It=_e?window.document:void 0;function ce(...e){let t,a,n,o;if(Nt(e[0])?([a,n,o]=e,t=me):[t,a,n,o]=e,!t)return re;let r=re;const i=I(()=>z(t),d=>{r(),d&&(d.addEventListener(a,n,o),r=()=>{d.removeEventListener(a,n,o),r=re})},{immediate:!0,flush:"post"}),u=()=>{i(),r()};return Fe(u),u}const ue=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},de="__vueuse_ssr_handlers__";ue[de]=ue[de]||{};ue[de];function Vt({document:e=It}={}){if(!e)return C("visible");const t=C(e.visibilityState);return ce(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var Ee=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,jt=(e,t)=>{var a={};for(var n in e)Ft.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&Ee)for(var n of Ee(e))t.indexOf(n)<0&&Mt.call(e,n)&&(a[n]=e[n]);return a};function Me(e,t,a={}){const n=a,{window:o=me}=n,r=jt(n,["window"]);let i;const u=o&&"ResizeObserver"in o,d=()=>{i&&(i.disconnect(),i=void 0)},p=I(()=>Rt(e),l=>{d(),u&&o&&l&&(i=new o.ResizeObserver(t),i.observe(l,r))},{immediate:!0,flush:"post"}),_=()=>{d(),p()};return Fe(_),{isSupported:u,stop:_}}var Te,Ne;_e&&(window==null?void 0:window.navigator)&&((Te=window==null?void 0:window.navigator)==null?void 0:Te.platform)&&/iP(ad|hone|od)/.test((Ne=window==null?void 0:window.navigator)==null?void 0:Ne.platform);var Kt=Object.defineProperty,Be=Object.getOwnPropertySymbols,Ut=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,xe=(e,t,a)=>t in e?Kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Ht=(e,t)=>{for(var a in t||(t={}))Ut.call(t,a)&&xe(e,a,t[a]);if(Be)for(var a of Be(t))qt.call(t,a)&&xe(e,a,t[a]);return e};const Wt={top:0,left:0,bottom:0,right:0,height:0,width:0};Ht({text:""},Wt);function Jt({window:e=me}={}){if(!e)return C(!1);const t=C(e.document.hasFocus());return ce(e,"blur",()=>{t.value=!1}),ce(e,"focus",()=>{t.value=!0}),t}const Xt=e=>e===void 0;class Yt extends Error{constructor(t){super(t);this.name="ElementPlusError"}}function ge(e,t){throw new Yt(`[${e}] ${t}`)}var ne=(e,t)=>{const a=e.__vccOpts||e;for(const[n,o]of t)a[n]=o;return a};const Gt=L({name:"ArrowLeft"}),Zt={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Qt=$("path",{fill:"currentColor",d:"M609.408 149.376L277.76 489.6a32 32 0 000 44.672l331.648 340.352a29.12 29.12 0 0041.728 0 30.592 30.592 0 000-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 000-42.688 29.12 29.12 0 00-41.728 0z"},null,-1),ea=[Qt];function ta(e,t,a,n,o,r){return w(),O("svg",Zt,ea)}var aa=ne(Gt,[["render",ta]]);const na=L({name:"ArrowRight"}),oa={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},sa=$("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"},null,-1),ra=[sa];function la(e,t,a,n,o,r){return w(),O("svg",oa,ra)}var ia=ne(na,[["render",la]]);const ca=L({name:"Close"}),ua={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},da=$("path",{fill:"currentColor",d:"M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"},null,-1),fa=[da];function pa(e,t,a,n,o,r){return w(),O("svg",ua,fa)}var va=ne(ca,[["render",pa]]);const ba=L({name:"Plus"}),_a={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ma=$("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0164 0v352h352a32 32 0 110 64H544v352a32 32 0 11-64 0V544H128a32 32 0 010-64h352z"},null,-1),ga=[ma];function ha(e,t,a,n,o,r){return w(),O("svg",_a,ga)}var ya=ne(ba,[["render",ha]]);const fe=Symbol(),ke="__elPropsReservedKey";function $a(e,t){if(!we(e)||!!e[ke])return e;const{values:a,required:n,default:o,type:r,validator:i}=e,u=a||i?p=>{let _=!1,l=[];if(a&&(l=Array.from(a),Pe(e,"default")&&l.push(o),_||(_=l.includes(p))),i&&(_||(_=i(p))),!_&&l.length>0){const f=[...new Set(l)].map(m=>JSON.stringify(m)).join(", ");mt(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${f}], got value ${JSON.stringify(p)}.`)}return _}:void 0,d={type:we(r)&&Object.getOwnPropertySymbols(r).includes(fe)?r[fe]:r,required:!!n,validator:u,[ke]:!0};return Pe(e,"default")&&(d.default=o),d}const J=e=>_t(Object.entries(e).map(([t,a])=>[t,$a(a,t)])),W=e=>({[fe]:e}),je=(e,t)=>{if(e.install=a=>{for(const n of[e,...Object.values(t!=null?t:{})])a.component(n.name,n)},t)for(const[a,n]of Object.entries(t))e[a]=n;return e},wa=e=>(e.install=ee,e);function Pa(e,t="px"){if(!e)return"";if(gt(e))return e;if(Tt(e))return`${e}${t}`}const Z={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Ke="update:modelValue",Ue="input",qe=e=>e,Ca=Symbol(),oe=Symbol("tabsRootContextKey"),De=C();function Sa(e,t=void 0){const a=te()?ae(Ca,De):De;return e?V(()=>{var n,o;return(o=(n=a.value)==null?void 0:n[e])!=null?o:t}):a}const Oa="el",Ea="is-",K=(e,t,a,n,o)=>{let r=`${e}-${t}`;return a&&(r+=`-${a}`),n&&(r+=`__${n}`),o&&(r+=`--${o}`),r},Ta=e=>{const t=Sa("namespace"),a=V(()=>t.value||Oa);return{namespace:a,b:(l="")=>K(z(a),e,l,"",""),e:l=>l?K(z(a),e,"",l,""):"",m:l=>l?K(z(a),e,"","",l):"",be:(l,f)=>l&&f?K(z(a),e,l,f,""):"",em:(l,f)=>l&&f?K(z(a),e,"",l,f):"",bm:(l,f)=>l&&f?K(z(a),e,l,"",f):"",bem:(l,f,m)=>l&&f&&m?K(z(a),e,l,f,m):"",is:(l,...f)=>{const m=f.length>=1?f[0]:!0;return l&&m?`${Ea}${l}`:""}}},Na=J({size:{type:W([Number,String])},color:{type:String}}),Ba={name:"ElIcon",inheritAttrs:!1},xa=L(Y(X({},Ba),{props:Na,setup(e){const t=e,a=Ta("icon"),n=V(()=>!t.size&&!t.color?{}:{fontSize:Xt(t.size)?void 0:Pa(t.size),"--color":t.color});return(o,r)=>(w(),O("i",ht({class:z(a).b(),style:z(n)},o.$attrs),[pe(o.$slots,"default")],16))}})),Q=je(xa);var He=(e,t)=>{const a=e.__vccOpts||e;for(const[n,o]of t)a[n]=o;return a};const ka=J({tabs:{type:W(Array),default:()=>qe([])}}),ze="ElTabBar",Da=L({name:ze,props:ka,setup(e){const t=te(),a=ae(oe);a||ge(ze,"must use with ElTabs");const n=C(),o=C(),r=()=>{let u=0,d=0;const p=["top","bottom"].includes(a.props.tabPosition)?"width":"height",_=p==="width"?"x":"y";return e.tabs.every(l=>{var f,m,y,s;const c=(m=(f=t.parent)==null?void 0:f.refs)==null?void 0:m[`tab-${l.paneName}`];if(!c)return!1;if(!l.active)return!0;d=c[`client${U(p)}`];const v=_==="x"?"left":"top";u=c.getBoundingClientRect()[v]-((s=(y=c.parentElement)==null?void 0:y.getBoundingClientRect()[v])!=null?s:0);const S=window.getComputedStyle(c);return p==="width"&&(e.tabs.length>1&&(d-=parseFloat(S.paddingLeft)+parseFloat(S.paddingRight)),u+=parseFloat(S.paddingLeft)),!1}),{[p]:`${d}px`,transform:`translate${U(_)}(${u}px)`}},i=()=>o.value=r();return I(()=>e.tabs,async()=>{await ve(),i()},{immediate:!0}),Me(n,()=>i()),{bar$:n,rootTabs:a,barStyle:o,update:i}}});function za(e,t,a,n,o,r){return w(),O("div",{ref:"bar$",class:Re(["el-tabs__active-bar",`is-${e.rootTabs.props.tabPosition}`]),style:le(e.barStyle)},null,6)}var Aa=He(Da,[["render",za]]);const La=J({panes:{type:W(Array),default:()=>qe([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:W(Function),default:ee},onTabRemove:{type:W(Function),default:ee},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ae="ElTabNav";var Ra=L({name:Ae,props:La,setup(e,{expose:t}){const a=Vt(),n=Jt(),o=ae(oe);o||ge(Ae,"ElTabNav must be nested inside ElTabs");const r=C(!1),i=C(0),u=C(!1),d=C(!0),p=C(),_=C(),l=C(),f=V(()=>["top","bottom"].includes(o.props.tabPosition)?"width":"height"),m=V(()=>({transform:`translate${f.value==="width"?"X":"Y"}(-${i.value}px)`})),y=()=>{if(!p.value)return;const b=p.value[`offset${U(f.value)}`],h=i.value;if(!h)return;const g=h>b?h-b:0;i.value=g},s=()=>{if(!p.value||!_.value)return;const b=_.value[`offset${U(f.value)}`],h=p.value[`offset${U(f.value)}`],g=i.value;if(b-g<=h)return;const k=b-g>h*2?g+h:b-h;i.value=k},c=()=>{const b=_.value;if(!r.value||!l.value||!p.value||!b)return;const h=l.value.querySelector(".is-active");if(!h)return;const g=p.value,k=["top","bottom"].includes(o.props.tabPosition),N=h.getBoundingClientRect(),T=g.getBoundingClientRect(),D=k?b.offsetWidth-T.width:b.offsetHeight-T.height,B=i.value;let E=B;k?(N.left<T.left&&(E=B-(T.left-N.left)),N.right>T.right&&(E=B+N.right-T.right)):(N.top<T.top&&(E=B-(T.top-N.top)),N.bottom>T.bottom&&(E=B+(N.bottom-T.bottom))),E=Math.max(E,0),i.value=Math.min(E,D)},v=()=>{if(!_.value||!p.value)return;const b=_.value[`offset${U(f.value)}`],h=p.value[`offset${U(f.value)}`],g=i.value;if(h<b){const k=i.value;r.value=r.value||{},r.value.prev=k,r.value.next=k+h<b,b-k<h&&(i.value=b-h)}else r.value=!1,g>0&&(i.value=0)},S=b=>{const h=b.code,{up:g,down:k,left:N,right:T}=Z;if(![g,k,N,T].includes(h))return;const D=Array.from(b.currentTarget.querySelectorAll("[role=tab]")),B=D.indexOf(b.target);let E;h===N||h===g?B===0?E=D.length-1:E=B-1:B<D.length-1?E=B+1:E=0,D[E].focus(),D[E].click(),F()},F=()=>{d.value&&(u.value=!0)},A=()=>u.value=!1;return I(a,b=>{b==="hidden"?d.value=!1:b==="visible"&&setTimeout(()=>d.value=!0,50)}),I(n,b=>{b?setTimeout(()=>d.value=!0,50):d.value=!1}),Me(l,v),Ie(()=>setTimeout(()=>c(),0)),Ve(()=>v()),t({scrollToActiveTab:c,removeFocus:A}),()=>{const b=r.value?[P("span",{class:["el-tabs__nav-prev",r.value.prev?"":"is-disabled"],onClick:y},[P(Q,{},{default:()=>P(aa)})]),P("span",{class:["el-tabs__nav-next",r.value.next?"":"is-disabled"],onClick:s},[P(Q,{},{default:()=>P(ia)})])]:null,h=e.panes.map((g,k)=>{var N,T;const D=g.props.name||g.index||`${k}`,B=g.isClosable||e.editable;g.index=`${k}`;const E=B?P(Q,{class:"is-icon-close",onClick:M=>e.onTabRemove(g,M)},{default:()=>P(va)}):null,Xe=((T=(N=g.instance.slots).label)==null?void 0:T.call(N))||g.props.label,Ye=g.active?0:-1;return P("div",{class:{"el-tabs__item":!0,[`is-${o.props.tabPosition}`]:!0,"is-active":g.active,"is-disabled":g.props.disabled,"is-closable":B,"is-focus":u},id:`tab-${D}`,key:`tab-${D}`,"aria-controls":`pane-${D}`,role:"tab","aria-selected":g.active,ref:`tab-${D}`,tabindex:Ye,onFocus:()=>F(),onBlur:()=>A(),onClick:M=>{A(),e.onTabClick(g,D,M)},onKeydown:M=>{B&&(M.code===Z.delete||M.code===Z.backspace)&&e.onTabRemove(g,M)}},[Xe,E])});return P("div",{ref:l,class:["el-tabs__nav-wrap",r.value?"is-scrollable":"",`is-${o.props.tabPosition}`]},[b,P("div",{class:"el-tabs__nav-scroll",ref:p},[P("div",{class:["el-tabs__nav",`is-${o.props.tabPosition}`,e.stretch&&["top","bottom"].includes(o.props.tabPosition)?"is-stretch":""],ref:_,style:m.value,role:"tablist",onKeydown:S},[e.type?null:P(Aa,{tabs:[...e.panes]}),h])])])}}});const Ia=J({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:String,default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number],default:""},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:W(Function),default:()=>!0},stretch:Boolean}),Va={[Ke]:e=>typeof e=="string"||typeof e=="number",[Ue]:e=>typeof e=="string"||typeof e=="number","tab-click":(e,t)=>t instanceof Event,edit:(e,t)=>t==="remove"||t==="add","tab-remove":e=>typeof e=="string"||typeof e=="number","tab-add":()=>!0},We=(e,t=[])=>{const a=e.children||[];return Array.from(a).forEach(n=>{let o=n.type;o=o.name||o,o==="ElTabPane"&&n.component?t.push(n.component):(o===H||o==="template")&&We(n,t)}),t};var Fa=L({name:"ElTabs",props:Ia,emits:Va,setup(e,{emit:t,slots:a,expose:n}){const o=te(),r=C(),i=C([]),u=C(e.modelValue||e.activeName||"0"),d={},p=(s=!1)=>{if(a.default){const c=o.subTree.children,v=Array.from(c).find(({props:A})=>(A==null?void 0:A.class)==="el-tabs__content");if(!v)return;const S=We(v).map(A=>d[A.uid]),F=!(S.length===i.value.length&&S.every((A,b)=>A.uid===i.value[b].uid));(s||F)&&(i.value=S)}else i.value.length!==0&&(i.value=[])},_=s=>{u.value=s,t(Ue,s),t(Ke,s)},l=s=>{var c;if(u.value===s)return;const v=(c=e.beforeLeave)==null?void 0:c.call(e,s,u.value);$t(v)?v.then(()=>{var S,F;_(s),(F=(S=r.value)==null?void 0:S.removeFocus)==null||F.call(S)},ee):v!==!1&&_(s)},f=(s,c,v)=>{s.props.disabled||(l(c),t("tab-click",s,v))},m=(s,c)=>{s.props.disabled||(c.stopPropagation(),t("edit",s.props.name,"remove"),t("tab-remove",s.props.name))},y=()=>{t("edit",null,"add"),t("tab-add")};return Ve(()=>p()),Ie(()=>p()),I(()=>e.activeName,s=>l(s)),I(()=>e.modelValue,s=>l(s)),I(u,async()=>{var s,c;p(!0),await ve(),await((s=r.value)==null?void 0:s.$nextTick()),(c=r.value)==null||c.scrollToActiveTab()}),yt(oe,{props:e,currentName:u,updatePaneState:s=>d[s.uid]=s}),n({currentName:u}),()=>{const s=e.editable||e.addable?P("span",{class:"el-tabs__new-tab",tabindex:"0",onClick:y,onKeydown:S=>{S.code===Z.enter&&y()}},[P(Q,{class:"is-icon-plus"},{default:()=>P(ya)})]):null,c=P("div",{class:["el-tabs__header",`is-${e.tabPosition}`]},[s,P(Ra,{currentName:u.value,editable:e.editable,type:e.type,panes:i.value,stretch:e.stretch,ref:r,onTabClick:f,onTabRemove:m})]),v=P("div",{class:"el-tabs__content"},[pe(a,"default")]);return P("div",{class:{"el-tabs":!0,"el-tabs--card":e.type==="card",[`el-tabs--${e.tabPosition}`]:!0,"el-tabs--border-card":e.type==="border-card"}},e.tabPosition!=="bottom"?[c,v]:[v,c])}}});const Ma=J({label:{type:String,default:""},name:{type:[String,Number],default:""},closable:Boolean,disabled:Boolean,lazy:Boolean}),Le="ElTabPane",ja=L({name:Le,props:Ma,setup(e){const t=te(),a=ae(oe);a||ge(Le,"must use with ElTabs");const n=C(),o=C(!1),r=V(()=>e.closable||a.props.closable),i=Oe(()=>a.currentName.value===(e.name||n.value)),u=V(()=>e.name||n.value),d=Oe(()=>!e.lazy||o.value||i.value);return I(i,p=>{p&&(o.value=!0)}),a.updatePaneState(wt({uid:t.uid,instance:Pt(t),props:e,paneName:u,active:i,index:n,isClosable:r})),{active:i,paneName:u,shouldBeRender:d}}}),Ka=["id","aria-hidden","aria-labelledby"];function Ua(e,t,a,n,o,r){return e.shouldBeRender?Ct((w(),O("div",{key:0,id:`pane-${e.paneName}`,class:"el-tab-pane",role:"tabpanel","aria-hidden":!e.active,"aria-labelledby":`tab-${e.paneName}`},[pe(e.$slots,"default")],8,Ka)),[[St,e.active]]):ie("v-if",!0)}var Je=He(ja,[["render",Ua]]);const qa=je(Fa,{TabPane:Je}),Ha=wa(Je);const Wa=L({name:"ComponentsPanel",components:{IconSearch:ct,IconBack:ut,ElTabs:qa,ElTabPane:Ha},setup(){const e=Ot(),t=nt(),a=ot(),n=st(),o=rt(),r=C([]),i=V(()=>t.components.show),u=Et(lt),d={type:"all",name:"\u5168\u90E8",icon:"v-icon-view-grid"},p=V(()=>{const s=u;return s.forEach(c=>{c.data.unshift(Y(X({},d),{data:c.data.flatMap(v=>v.data)}))}),s.push({type:"favorite",name:"\u6536\u85CF",icon:"v-icon-favorite",data:[Y(X({},d),{data:r.value})]}),s});return{visiblePanel:i,categories:p,changeVisible:()=>{t.setPanelState($e.components,!i.value)},handleTabClick:()=>{i.value||t.setPanelState($e.components,!0)},toAddCom:async(s,c)=>{if(c){t.addLoading();const v=await it(s);v.attr.x=Math.floor((n.pageConfig.width-v.attr.w)/2),v.attr.y=Math.floor((n.pageConfig.height-v.attr.h)/2),await a.addCom(v),a.selectCom(v.id),t.removeLoading(),v.apis.source&&(await v.loadData(),ve(()=>{var S;(S=o.events[v.id])==null||S.requestData()}))}else e.warning("\u6B63\u5728\u5F00\u53D1\u4E2D\u3002\u3002\u3002")},dragStart:(s,c)=>{s.dataTransfer.setData("text",c)},dragOver:s=>{s.preventDefault(),s.stopPropagation(),s.dataTransfer.dropEffect="none"}}}}),Ja={class:"components-panel"},Xa={class:"panel-title"},Ya={class:"panel-text"},Ga=be(" \u641C\u7D22 "),Za=be(" \u6536\u8D77 "),Qa={class:"com-tab-title"},en={class:"com-tab-title"},tn={class:"components-single-menu-wp"},an={class:"components-single-menu"},nn={class:"components-single-menu-list"},on=["title","draggable","onDragstart","onClick"],sn={class:"components-item-text"},rn={key:1,class:"components-multi-menu"},ln={class:"components-single-menu --wider"},cn={class:"components-single-menu-list"},un=["title","draggable","onDragstart","onClick"],dn={class:"components-item-text"},fn={key:0,class:"favorite-empty"};function pn(e,t,a,n,o,r){const i=j("IconSearch"),u=j("n-icon"),d=j("n-tooltip"),p=j("IconBack"),_=j("g-com-icon"),l=j("el-tab-pane"),f=j("el-tabs");return w(),O("div",{class:Re(["g-aside component-panel-wp",{"--hide":!e.visiblePanel}])},[$("div",Ja,[$("div",Xa,[$("span",Ya,q(e.visiblePanel?"\u5168\u90E8\u7EC4\u4EF6":"\u7EC4\u4EF6"),1),R(d,{delay:500},{trigger:x(()=>[R(u,{title:"\u641C\u7D22",class:"btn-icon"},{default:x(()=>[R(i)]),_:1})]),default:x(()=>[Ga]),_:1}),R(d,{delay:500},{trigger:x(()=>[R(u,{title:"\u6536\u8D77",class:"btn-icon",onClick:e.changeVisible},{default:x(()=>[R(p)]),_:1},8,["onClick"])]),default:x(()=>[Za]),_:1})]),$("div",{class:"components-panel-wrapper",onDragover:t[0]||(t[0]=(...m)=>e.dragOver&&e.dragOver(...m))},[R(f,{"tab-position":"left",onTabClick:e.handleTabClick},{default:x(()=>[(w(!0),O(H,null,G(e.categories,m=>(w(),se(l,{key:m.type},{label:x(()=>[R(d,{placement:"left",delay:500},{trigger:x(()=>[$("div",null,[R(_,{icon:m.icon,class:"com-tab-icon"},null,8,["icon"]),$("span",Qa,q(m.name),1)])]),default:x(()=>[be(" "+q(m.name),1)]),_:2},1024)]),default:x(()=>[m.data.length>2?(w(),se(f,{key:0,"tab-position":"left",class:"el-tabs-l2"},{default:x(()=>[(w(!0),O(H,null,G(m.data,y=>(w(),se(l,{key:y.type},{label:x(()=>[$("span",en,q(y.name),1)]),default:x(()=>[$("div",tn,[$("div",an,[$("ul",nn,[(w(!0),O(H,null,G(y.data,s=>(w(),O("li",{key:s.name,title:s.alias,draggable:s.used,class:"components-item double",onDragstart:c=>e.dragStart(c,s.name),onClick:c=>e.toAddCom(s.name,s.used)},[$("div",sn,q(s.alias),1),$("div",{class:"components-item-img",style:le(`background-image: url(${s.img});`)},null,4)],40,on))),128))])])])]),_:2},1024))),128))]),_:2},1024)):(w(),O("div",rn,[$("div",ln,[$("ul",cn,[(w(!0),O(H,null,G(m.data[0].data,y=>(w(),O("li",{key:y.name,title:y.alias,draggable:y.used,class:"components-item double",onDragstart:s=>e.dragStart(s,y.name),onClick:s=>e.toAddCom(y.name,y.used)},[$("div",dn,q(y.alias),1),$("div",{class:"components-item-img",style:le(`background-image: url(${y.img});`)},null,4)],40,un))),128))]),m.data[0].data.length===0?(w(),O(H,{key:0},[m.type==="favorite"?(w(),O("div",fn," \u6CA1\u6709\u6536\u85CF\u7EC4\u4EF6 ")):ie("",!0)],64)):ie("",!0)])]))]),_:2},1024))),128))]),_:1},8,["onTabClick"])],32)])],2)}var $n=at(Wa,[["render",pn]]);export{$n as default};