import{V as P,k as p,y as k,_ as d,e as y,u as C,i as $,z as L,r as c,o as m,c as D,s as n,b as N,g as u,h as i,f as T,v as b,j as B,Z as g}from"./app.9eb88680.js";import{P as G,a as V}from"./PageNav.a84dccc8.js";let r=null,s=null;const M={wait:()=>r,pending:()=>{r=new Promise(a=>s=a)},resolve:()=>{s==null||s(),r=null,s=null}},F=()=>M,O=()=>{const a=P(),e=k();return p(()=>(e.value.frontmatter.layout==="Post"||e.value.frontmatter.layout==="P"||e.value.frontmatter.layout==="Layout")&&e.value.frontmatter.catalog!==!1&&(a.value.catalog||e.value.frontmatter.catalog)&&e.value.headers.length>0)},S={class:"page"},j={class:"theme-gungnir-content"},w=y({__name:"Page",setup(a){const e=C(),o=$(),{isDarkMode:t}=L(),f=p(()=>t.value?e.value.giscusDarkTheme:e.value.giscusLightTheme);return(l,q)=>{const _=c("Content"),h=c("GungnirGiscus");return m(),D("main",S,[n(l.$slots,"top"),N("div",j,[n(l.$slots,"content-top"),u(_),n(l.$slots,"content-bottom")]),u(G),u(V),n(l.$slots,"bottom"),i(o).giscus!==!1?(m(),T(h,{key:0,theme:i(f)},null,8,["theme"])):b("",!0)])}}});var R=d(w,[["__file","Page.vue"]]);const v=({headers:a,activeLink:e})=>{const o=B();return g("ul",{class:{catalog:!0}},a.map(t=>g("li",{class:{active:e===t.slug,[`level-${t.level}`]:!0,[`toc-link-${t.slug}`]:!0},key:t.title,onClick:()=>{o.currentRoute.value.hash!==`#${t.slug}`&&o.push(`#${t.slug}`)}},t.title)))};v.displayName="Catalog";v.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};export{v as C,R as P,F as a,O as u};