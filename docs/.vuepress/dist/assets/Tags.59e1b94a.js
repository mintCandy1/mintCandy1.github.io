import{C as B}from"./Common.d0cb3e95.js";import{P as $}from"./PageHeader.72498bd6.js";import{_ as T,e as y,u as k,j as w,a3 as A,a5 as C,U as x,k as f,o as r,c,J as v,x as N,h as i,E as D,d as R,t as p,I as m,r as V,b as h,g as d,w as L,v as S,G as b,f as z}from"./app.9eb88680.js";import{r as E}from"./resolveTime.bbe121e0.js";import"./Sidebar.07865d1f.js";const M=l=>{const s={},t=[];for(const e of l){if(!e.info.date)continue;const o=E(e.info.date,"year");s[o]?s[o].push(e):s[o]=[e]}for(const e in s)t.unshift({year:e,data:s[e]});return t},Y=(l,s)=>s===""?l:l.filter(t=>t.info.tags?t.info.tags.includes(s):!1),j=["onClick"],F={key:0},G={key:1},H=y({__name:"TagList",props:{currentTag:{type:String,default:""}},setup(l){const s=k(),t=w(),e=A(),{tagsWithColor:o}=C(),{posts:g}=x(),u=f(()=>[{name:s.value.showAllTagsText,path:e.value.path,tagColor:null,pages:[]},...o.value]);return(_,n)=>(r(!0),c(m,null,v(i(u),(a,P)=>(r(),c("span",{key:P,class:N(["article-tag",[a.name===l.currentTag&&"active",a.path===i(e).path&&"tag-all"]]),style:D([a.tagColor?{backgroundColor:a.tagColor}:{}]),onClick:I=>i(t).push(a.path)},[R(p(a.name)+" ",1),a.path==i(e).path?(r(),c("sup",F,p(i(g).length),1)):(r(),c("sup",G,p(a.pages.length),1))],14,j))),128))}});var J=T(H,[["__file","TagList.vue"]]);const U={class:"year"},W={class:"title"},q={key:0,class:"subtitle"},K=h("hr",null,null,-1),O=y({__name:"TagPostList",props:{data:{type:Array,default:()=>[]}},setup(l){return(s,t)=>{const e=V("RouterLink");return r(!0),c(m,null,v(l.data,(o,g)=>(r(),c("section",{key:g},[h("span",U,p(o.year),1),(r(!0),c(m,null,v(o.data,(u,_)=>(r(),c("div",{key:_,class:"item"},[d(e,{to:u.path},{default:L(()=>[h("p",W,p(u.info.title),1),u.info.subtitle?(r(),c("p",q,p(u.info.subtitle),1)):S("",!0)]),_:2},1032,["to"]),K]))),128))]))),128)}}});var Q=T(O,[["__file","TagPostList.vue"]]);const X={class:"tags-wrapper"},Z=y({__name:"Tags",setup(l){const s=b(),t=k(),{posts:e}=x(),{tags:o}=C(),g=f(()=>{const n=o.value.find(a=>a.path===s.path);return n?n.name:t.value.showAllTagsText}),u=f(()=>{const n=g.value===t.value.showAllTagsText?"":g.value;return M(Y(e.value,n))}),_=f(()=>{var a;const n=t.value.pages&&t.value.pages.tags?t.value.pages.tags:{};return n.title===void 0&&(n.title=(a=t.value.pageText)==null?void 0:a.tags),n});return(n,a)=>(r(),z(B,null,{page:L(()=>[d($,{"page-info":i(_)},null,8,["page-info"]),h("div",X,[d(J,{"current-tag":i(g)},null,8,["current-tag"]),d(Q,{data:i(u)},null,8,["data"])])]),_:1}))}});var nt=T(Z,[["__file","Tags.vue"]]);export{nt as default};