import{_ as e}from"./wd-button.5dedbf50.js";import{d as t,r as a,o as l,c as o,w as n,a as s,b as u,h as i,j as c,i as d}from"./index-ab53eb14.js";import{_ as f}from"./demo-block.86d2326b.js";import{q as r,a as m,b as _}from"./page-wraper.af77e98b.js";const v=_(t({__name:"Index",setup(t){const _=a(!1),v=a(""),k=a(!1);function p(){q("fade")}function w(){q("fade-up")}function C(){q("fade-down")}function h(){q("fade-left")}function b(){q("fade-right")}function g(){q("slide-up")}function j(){q("slide-down")}function x(){q("slide-left")}function z(){q("slide-right")}function I(){q("zoom-in")}function T(){k.value=!0,setTimeout((()=>{k.value=!1}),1200)}function q(e){v.value=e,_.value=!0,setTimeout((()=>{_.value=!1}),500)}return(t,a)=>{const q=i(c("wd-button"),e),F=i(c("demo-block"),f),S=i(c("wd-transition"),r),Z=i(c("page-wraper"),m),y=d;return l(),o(y,null,{default:n((()=>[s(Z,null,{default:n((()=>[s(F,{title:"Fade 动画"},{default:n((()=>[s(q,{onClick:p},{default:n((()=>[u("fade")])),_:1}),s(q,{onClick:w},{default:n((()=>[u("fade-up")])),_:1}),s(q,{onClick:C},{default:n((()=>[u("fade-down")])),_:1}),s(q,{onClick:h},{default:n((()=>[u("fade-left")])),_:1}),s(q,{onClick:b},{default:n((()=>[u("fade-right")])),_:1})])),_:1}),s(F,{title:"Slide 动画"},{default:n((()=>[s(q,{onClick:g},{default:n((()=>[u("slide-up")])),_:1}),s(q,{onClick:j},{default:n((()=>[u("slide-down")])),_:1}),s(q,{onClick:x},{default:n((()=>[u("slide-left")])),_:1}),s(q,{onClick:z},{default:n((()=>[u("slide-right")])),_:1})])),_:1}),s(F,{title:"Zoom 动画"},{default:n((()=>[s(q,{onClick:I},{default:n((()=>[u("zoom-in")])),_:1})])),_:1}),s(F,{title:"自定义动画"},{default:n((()=>[s(q,{onClick:T},{default:n((()=>[u("custom")])),_:1})])),_:1}),s(S,{show:_.value,name:v.value,"custom-class":"block"},null,8,["show","name"]),s(S,{show:k.value,name:"",duration:{enter:700,leave:1e3},"enter-class":"custom-enter","enter-active-class":"custom-enter-active","enter-to-class":"custom-enter-to","leave-class":"custom-leave","leave-active-class":"custom-leave-active","leave-to-class":"custom-leave-to","custom-class":"block"},null,8,["show"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-4e0a6347"]]);export{v as default};
