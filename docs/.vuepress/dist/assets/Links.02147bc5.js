import{C as f}from"./Common.d0cb3e95.js";import{P as g}from"./PageHeader.72498bd6.js";import{_ as h,e as v,u as L,i as B,k as w,o as t,f as x,w as C,g as y,h as c,b as e,c as o,J as _,I as u,t as i}from"./app.9eb88680.js";import"./Sidebar.07865d1f.js";const P={class:"links-wrapper"},$={class:"link-group"},b={class:"content"},D=["href"],F=["src"],I={class:"sitename"},N={class:"desc"},T=v({__name:"Links",setup(V){const a=L(),p=B(),d=w(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),x(f,null,{page:C(()=>[y(g,{"page-info":c(d)},null,8,["page-info"]),e("div",P,[(t(!0),o(u,null,_(c(p).links,(l,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",$,[(t(!0),o(u,null,_(l.items,(n,k)=>(t(),o("div",{key:`link-${k}`,class:"link-item"},[e("div",b,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,F),e("span",I,i(n.sitename),1),e("div",N,i(n.desc),1)],8,D)])]))),128))])]))),128))])]),_:1}))}});var j=h(T,[["__file","Links.vue"]]);export{j as default};