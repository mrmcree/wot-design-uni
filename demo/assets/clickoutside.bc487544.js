import{r as e,S as u}from"./index-ab53eb14.js";const o="__QUEUE_KEY__";function s(){const s=e([]);function i(e){s.value.forEach((u=>{u.$.uid!==e.$.uid&&u.$.exposed.close()}))}function c(){s.value.forEach((e=>{e.$.exposed.close()}))}return u(o,{queue:s,pushToQueue:function(e){s.value.push(e)},removeFromQueue:function(e){s.value=s.value.filter((u=>u.$.uid!==e.$.uid))},closeOther:i,closeOutside:c}),{closeOther:i,closeOutside:c}}let i=[];function c(e){i.push(e)}function n(e){i=i.filter((u=>u.$.uid!==e.$.uid))}function t(e){i.forEach((u=>{u.$.uid!==e.$.uid&&u.$.exposed.close()}))}export{t as c,c as p,o as q,n as r,s as u};
