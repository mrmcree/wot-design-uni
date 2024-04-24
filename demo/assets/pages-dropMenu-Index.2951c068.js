import{d as e,N as o,r as l,q as a,Q as t,Y as n,v as u,h as s,j as d,o as i,c as p,w as r,a as c,e as m,F as v,f,n as _,b as w,t as b,p as g,z as h,x as y,u as V,y as k,g as x,i as C,G as $,R as K}from"./index-ab53eb14.js";import{g as I,i as S,m as U,h as j,K as z,p as N,c as P,r as M,o as O,b as Q,j as B,k as E,_ as F,a as T}from"./page-wraper.af77e98b.js";import{p as q,r as G,q as H,c as A,u as L}from"./clickoutside.bc487544.js";import{u as D}from"./useChildren.70643e57.js";import{_ as R}from"./demo-block.86d2326b.js";import{_ as Y}from"./wd-button.5dedbf50.js";import{_ as J}from"./wd-sort-button.93d75b06.js";const W=Symbol("wd-drop-menu"),X={...I,zIndex:S(12),direction:U("down"),modal:j(!0),closeOnClickModal:j(!0),duration:S(200)},Z=Q(e({name:"wd-drop-menu-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...I,customTitle:U(""),customIcon:U(""),modelValue:[String,Number],options:z(),disabled:j(!1),iconName:U("check"),title:String,valueKey:U("value"),labelKey:U("label"),tipKey:U("tip")},emits:["change","update:modelValue","open","opened","closed","close"],setup(e,{expose:$,emit:K}){const I=e,S=o(H,null),U=l(!1),j=l(!1),z=l(),Q=l(12),B=l(!0),E=l(!0),F=l(0),{parent:T}=N(W),{proxy:A}=k();function L(){j.value&&(j.value=!1,T&&T.fold())}a((()=>I.modelValue),(e=>{O(e)&&"number"!=typeof e&&"string"!=typeof e&&console.error("[wot-design] warning(wd-drop-menu-item): the type of value should be a number or a string.")}),{deep:!0,immediate:!0}),t((()=>{S&&S.pushToQueue?S.pushToQueue(A):q(A)})),n((()=>{S&&S.removeFromQueue?S.removeFromQueue(A):G(A)}));const D=u((()=>{let e="";return e=U.value&&T?"down"===T.props.direction?`top: calc(var(--window-top) + ${T.offset.value}px); bottom: 0;`:`top: 0; bottom: calc(var(--window-bottom) + ${T.offset.value}px)`:"",e}));function R(){U.value=!1,K("closed")}function Y(){K("open")}function J(){K("opened")}function X(){K("close")}return $({setShowPop:function(e){j.value=e},getShowPop:function(){return j.value},open:function(){U.value=!0,j.value=!0,T&&(B.value=Boolean(T.props.modal),F.value=Number(T.props.duration),E.value=Boolean(T.props.closeOnClickModal),z.value="down"===T.props.direction?"top":"bottom"),K("open")},close:L}),(e,o)=>{const l=x,a=C,t=s(d("wd-icon"),P),n=s(d("wd-popup"),M);return U.value?(i(),p(a,{key:0,class:_(`wd-drop-item  ${e.customClass}`),style:y(`z-index: ${Q.value}; ${V(D)};${e.customStyle}`)},{default:r((()=>[c(n,{modelValue:j.value,"onUpdate:modelValue":o[0]||(o[0]=e=>j.value=e),"z-index":Q.value,duration:F.value,position:z.value,"custom-style":"position: absolute; max-height: 80%;","modal-style":"position: absolute;",modal:B.value,"close-on-click-modal":E.value,onClickModal:L,onBeforeEnter:Y,onAfterEnter:J,onBeforeLeave:X,onAfterLeave:R},{default:r((()=>[e.options.length?(i(),p(a,{key:0},{default:r((()=>[(i(!0),m(v,null,f(e.options,((o,n)=>(i(),p(a,{key:n,onClick:e=>function(e){if(I.disabled)return;const{valueKey:o}=I,l=I.options[e];K("update:modelValue",""!==l[o]&&void 0!==l[o]?l[o]:l),L(),K("change",{value:""!==l[o]&&void 0!==l[o]?l[o]:l,selectedItem:l})}(n),class:_("wd-drop-item__option "+((""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?"is-active":""))},{default:r((()=>[c(a,{class:_(`wd-drop-item__title ${e.customTitle}`)},{default:r((()=>[c(l,null,{default:r((()=>[w(b(o[e.labelKey]?o[e.labelKey]:o),1)])),_:2},1024),o[e.tipKey]?(i(),p(l,{key:0,class:"wd-drop-item__tip"},{default:r((()=>[w(b(o[e.tipKey]),1)])),_:2},1024)):g("",!0)])),_:2},1032,["class"]),(""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?(i(),p(t,{key:0,name:e.iconName,size:"20px",class:_(`wd-drop-item__icon ${e.customIcon}`)},null,8,["name","class"])):g("",!0)])),_:2},1032,["onClick","class"])))),128))])),_:1})):h(e.$slots,"default",{key:1},void 0,!0)])),_:3},8,["modelValue","z-index","duration","position","modal","close-on-click-modal"])])),_:3},8,["class","style"])):g("",!0)}}}),[["__scopeId","data-v-68b30522"]]),ee=Q(e({name:"wd-drop-menu",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:X,setup(e){const n=e,u=o(H,null),g=l(`dropMenuId${B()}`),x=l(null),I=l(0),S=l(0),{proxy:U}=k(),{linkChildren:j,children:z}=D(W);function N(e){e.preventDefault(),e.stopPropagation()}function M(e){const{title:o,modelValue:l,options:a,valueKey:t,labelKey:n}=e;if(o)return o;for(let u=0,s=a.length;u<s;u++)if(l===a[u][t])return a[u][n];console.error("[wot-design] warning(wd-drop-menu-item): no value is matched in the options option.")}function O(e){x.value=e?e.$.uid:null,e?E(`#${g.value}`,!1,U).then((o=>{if(!o)return;const{top:l,bottom:a}=o;"down"===n.direction?I.value=Number(a):I.value=S.value-Number(l);e.$.exposed.getShowPop()?(e.$.exposed.setShowPop(!1),x.value=null):z.forEach((o=>{e.$.uid===o.$.uid?o.$.exposed.open():o.$.exposed.setShowPop(!1)}))})):z.forEach((e=>{e.$.exposed.setShowPop(!1)}))}return j({props:n,fold:O,offset:I}),a((()=>n.direction),(e=>{"up"!==e&&"down"!==e&&console.error("[wot design] warning(wd-drop-menu): direction must be 'up' or 'down'")}),{deep:!0,immediate:!0}),t((()=>{S.value=$().windowHeight})),(e,o)=>{const l=C,a=s(d("wd-icon"),P);return i(),p(l,{style:y(e.customStyle),class:_(`wd-drop-menu ${e.customClass}`),onClick:K(N,["stop"]),id:g.value},{default:r((()=>[c(l,{class:"wd-drop-menu__list"},{default:r((()=>[(i(!0),m(v,null,f(V(z),((e,o)=>(i(),p(l,{key:o,onClick:o=>function(e){e&&!e.disabled&&(u&&u.closeOther?u.closeOther(e):A(e),O(e))}(e),class:_(`wd-drop-menu__item ${e.disabled?"is-disabled":""} ${x.value===e.$.uid?"is-active":""}`)},{default:r((()=>[c(l,{class:"wd-drop-menu__item-title"},{default:r((()=>[c(l,{class:"wd-drop-menu__item-title-text"},{default:r((()=>[w(b(M(e)),1)])),_:2},1024),c(a,{name:"arrow-down",size:"14px","custom-class":"wd-drop-menu__arrow"})])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1}),h(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick","id"])}}}),[["__scopeId","data-v-bedc2f2d"]]),oe=Q(e({__name:"Index",setup(e){const{closeOutside:o}=L(),a=l();l(!1);const t=l(1),n=l(0),u=l(0),m=l(0),v=l(0),f=l(0),_=l(0),b=l(0),g=l(0),h=l([{label:"全部商品",value:0},{label:"新款商品",value:1,tip:"这是补充信息"},{label:"这是比较长的筛选条件这是比较长的筛选条件",value:2}]),y=l([{label:"综合",value:0},{label:"销量",value:1},{label:"上架时间",value:2}]);function k({value:e}){console.log(e)}function x({value:e}){console.log(e)}function $({value:e}){console.log(e)}function K({value:e}){console.log(e)}function I({value:e}){console.log(e)}function S({value:e}){console.log(e)}function U({value:e}){console.log(e)}function j({value:e}){console.log(e)}function z({value:e}){console.log(e)}function N(){a.value.close()}return(e,l)=>{const P=s(d("wd-drop-menu-item"),Z),M=s(d("wd-drop-menu"),ee),O=s(d("demo-block"),R),Q=s(d("wd-cell"),F),B=s(d("wd-button"),Y),E=C,q=s(d("wd-sort-button"),J),G=s(d("page-wraper"),T);return i(),p(G,null,{default:r((()=>[c(E,{class:"demo-body",onClick:V(o)},{default:r((()=>[c(O,{title:"基本用法",transparent:""},{default:r((()=>[c(M,null,{default:r((()=>[c(P,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),options:h.value,onChange:k},null,8,["modelValue","options"]),c(P,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),options:y.value,onChange:x},null,8,["modelValue","options"])])),_:1})])),_:1}),c(O,{title:"自定义菜单内容",transparent:""},{default:r((()=>[c(M,null,{default:r((()=>[c(P,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e),options:h.value,onChange:$},null,8,["modelValue","options"]),c(P,{ref_key:"dropMenu",ref:a,title:"筛选"},{default:r((()=>[c(E,null,{default:r((()=>[c(Q,{title:"标题文字",value:"内容"}),c(Q,{title:"标题文字",label:"描述信息",value:"内容"}),c(E,{style:{padding:"0 10px 20px","box-sizing":"border-box"}},{default:r((()=>[c(B,{block:"",size:"large",onClick:N},{default:r((()=>[w("主要按钮")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1}),c(O,{title:"自定义菜单选项",transparent:""},{default:r((()=>[c(E,{class:"custom-menu"},{default:r((()=>[c(M,{"custom-style":"flex: 1; min-width: 0"},{default:r((()=>[c(P,{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=e=>m.value=e),options:h.value,onChange:K},null,8,["modelValue","options"])])),_:1}),c(E,{style:{flex:"1"}},{default:r((()=>[c(q,{modelValue:v.value,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value=e),title:"上架时间",onChange:I},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(O,{title:"向上弹出",transparent:""},{default:r((()=>[c(M,{direction:"up"},{default:r((()=>[c(P,{modelValue:f.value,"onUpdate:modelValue":l[5]||(l[5]=e=>f.value=e),options:h.value,onChange:S},null,8,["modelValue","options"]),c(P,{modelValue:_.value,"onUpdate:modelValue":l[6]||(l[6]=e=>_.value=e),options:y.value,onChange:U},null,8,["modelValue","options"])])),_:1})])),_:1}),c(O,{title:"禁用",transparent:""},{default:r((()=>[c(M,{direction:"up"},{default:r((()=>[c(P,{modelValue:b.value,"onUpdate:modelValue":l[7]||(l[7]=e=>b.value=e),disabled:"",options:h.value,onChange:j},null,8,["modelValue","options"]),c(P,{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e),options:y.value,onChange:z},null,8,["modelValue","options"])])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-89849b77"]]);export{oe as default};
