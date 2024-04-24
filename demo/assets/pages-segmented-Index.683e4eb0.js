import{g as a,A as e,h as s,m as t,x as l,k as o,y as n,v as u,b as i,e as d,a as p}from"./page-wraper.af77e98b.js";import{d as v,T as r,r as c,v as m,q as b,m as h,o as _,c as g,w as f,e as w,F as y,f as k,n as x,u as j,a as z,z as $,b as C,t as U,x as I,ah as N,y as S,i as q,h as A,j as T,l as F}from"./index-ab53eb14.js";import{_ as G}from"./demo-block.86d2326b.js";const H=i(v({name:"wd-segmented",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...a,value:e([String,Number]),disabled:s(!1),size:t("middle"),options:{type:Array,required:!0,default:()=>[]},vibrateShort:s(!1)},emits:["update:value","change"],setup(a,{emit:e}){const s=a,t=".wd-segmented__item",i=r({width:0,height:0}),d=c(0),p=c(""),v=m((()=>s.disabled||!(!s.options[0]||!l(s.options[0]))&&s.options[0].disabled));b((()=>s.value),(()=>{F(),T(),s.vibrateShort&&N({})}),{immediate:!1});const{proxy:A}=S();function T(){o(t,!0,A).then((a=>{const e=a[d.value];let s=a.slice(0,d.value).reduce(((a,e)=>a+Number(e.width)),0);s+=(Number(e.width)-i.width)/2;const t={position:"absolute",width:n(i.width),transition:"all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",transform:`translateX(${s}px)`,"z-index":0};p.value!==u(t)&&(p.value=u(t))}))}function F(){const a=s.options.findIndex((a=>(l(a)?a.value:a)==s.value));if(a>=0)d.value=a;else{const a=l(s.options[0])?s.options[0].value:s.options[0];e("update:value",a),e("change",l(s.options[0])?s.options[0]:{value:a})}}return h((()=>{o(".wd-segmented__item",!1,A).then((a=>{a&&(i.height=Number(a.height),i.width=Number(a.width),F(),T())}))})),(a,t)=>{const o=q;return _(),g(o,{class:x(`wd-segmented ${a.customClass}`),style:I(a.customStyle)},{default:f((()=>[(_(!0),w(y,null,k(a.options,((t,n)=>(_(),g(o,{class:x(`wd-segmented__item is-${a.size} ${d.value===n?"is-active":""} ${a.disabled||j(l)(t)&&t.disabled?"is-disabled":""}`),onClick:a=>function(a,t){if(s.disabled||l(a)&&a.disabled)return;const o=l(a)?a.value:a;d.value=t,T(),e("update:value",o),e("change",l(a)?a:{value:o})}(t,n),key:n},{default:f((()=>[z(o,{class:"wd-segmented__item-label"},{default:f((()=>[a.$slots.label?$(a.$slots,"label",{key:0,option:j(l)(t)?t:{value:t}},void 0,!0):(_(),w(y,{key:1},[C(U(j(l)(t)?t.value:t),1)],64))])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),z(o,{class:x("wd-segmented__item--active "+(j(v)?"is-disabled":"")),style:I(p.value)},null,8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-db5e8b30"]]),X=i(v({__name:"Index",setup(a){const e=c(["评论","点赞","贡献","打赏"]),s=c([{value:"李雷",disabled:!1,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/redpanda.jpg"}},{value:"韩梅梅",disabled:!1,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/capybara.jpg"}},{value:"林涛",disabled:!0,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/panda.jpg"}},{value:"Tom",disabled:!1,payload:{avatar:"https://unpkg.com/wot-design-uni-assets/meng.jpg"}}]),t=c("简介"),l=c("详情"),o=c("评论"),n=c("打赏"),u=c("韩梅梅"),i=c("评论");function v(a){console.log(a)}return(a,r)=>{const c=A(T("wd-toast"),d),m=A(T("wd-segmented"),H),b=q,h=A(T("demo-block"),G),w=F,y=A(T("page-wraper"),p);return _(),g(b,null,{default:f((()=>[z(c),z(y,null,{default:f((()=>[z(h,{title:"大型分段器",transparent:""},{default:f((()=>[z(b,{class:"section"},{default:f((()=>[z(m,{options:e.value,value:t.value,"onUpdate:value":r[0]||(r[0]=a=>t.value=a),size:"large",onChange:v},null,8,["options","value"])])),_:1})])),_:1}),z(h,{title:"默认分段器",transparent:""},{default:f((()=>[z(b,{class:"section"},{default:f((()=>[z(m,{options:e.value,value:l.value,"onUpdate:value":r[1]||(r[1]=a=>l.value=a)},null,8,["options","value"])])),_:1})])),_:1}),z(h,{title:"小型分段器",transparent:""},{default:f((()=>[z(b,{class:"section"},{default:f((()=>[z(m,{options:e.value,value:o.value,"onUpdate:value":r[2]||(r[2]=a=>o.value=a),size:"small"},null,8,["options","value"])])),_:1})])),_:1}),z(h,{title:"带振动效果的分段器",transparent:""},{default:f((()=>[z(b,{class:"section"},{default:f((()=>[z(m,{options:e.value,value:n.value,"onUpdate:value":r[3]||(r[3]=a=>n.value=a),"vibrate-short":!0},null,8,["options","value"])])),_:1})])),_:1}),z(h,{title:"禁用分段器",transparent:""},{default:f((()=>[z(b,{class:"section"},{default:f((()=>[z(m,{options:e.value,value:i.value,"onUpdate:value":r[4]||(r[4]=a=>i.value=a),disabled:""},null,8,["options","value"])])),_:1})])),_:1}),z(h,{title:"自定义渲染分段器标签",transparent:""},{default:f((()=>[z(b,{class:"section"},{default:f((()=>[z(m,{options:s.value,value:u.value,"onUpdate:value":r[5]||(r[5]=a=>u.value=a),"vibrate-short":!0,onChange:v},{label:f((({option:a})=>[z(b,{class:"section-slot"},{default:f((()=>[z(w,{style:{"border-radius":"50%",width:"32px",height:"32px"},src:a.payload.avatar},null,8,["src"]),z(b,{class:"name"},{default:f((()=>[C(U(a.value),1)])),_:2},1024)])),_:2},1024)])),_:1},8,["options","value"])])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f298d7b0"]]);export{X as default};
