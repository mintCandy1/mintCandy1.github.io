import{C as Y}from"./Common.aeefdae8.js";import{P as q,n as G}from"./pageInfo.bd307cd0.js";import{_ as J,e as R,m as M,C as K,H as Q,r as X,o as i,c as u,b as e,E as F,I as x,J as S,t as _,g as I,w as z,h as N,S as Z,v as D,d as ee,x as L,A as w,B as A,a6 as H,a7 as j,k as te,f as ae,y as ne}from"./app.9eb88680.js";import"./Sidebar.07865d1f.js";const se=t=>parseInt(t.slice(t.indexOf("-")+1,t.indexOf("-")+3)),le=t=>{var c,v;let y=[],n=[];for(let l=0;l<t.length;l++){l==0&&n.push({year:t[0].year,data:new Map}),l!=t.length-1&&t[l].year!=t[l+1].year&&(y.push(t[l+1].year),n.push({year:y[y.length-1],data:new Map}));let s=se(t[l].date);t[l].year==n[n.length-1].year?n[n.length-1].data.get(s)?(c=n[n.length-1].data.get(s))==null||c.push(t[l]):n[n.length-1].data.set(s,[t[l]]):n[n.length-2].data.get(s)?(v=n[n.length-2].data.get(s))==null||v.push(t[l]):n[n.length-2].data.set(s,[t[l]])}return n};const T=t=>(H("data-v-6a0e391b"),t=t(),j(),t),oe={class:"article-box"},re={class:"year"},ce={class:"month-icon"},ie=T(()=>e("div",{class:"item-icon"},null,-1)),ue={class:"note-items"},de={class:"note-date"},pe=["src"],he={class:"note-content"},ge={class:"title"},ve={key:0,class:"subtitle"},_e={key:0,class:"pagelist"},fe=["onClick"],ye={key:1,class:"pagelist"},ke=T(()=>e("span",null,"...",-1)),me=["onClick"],Ce=T(()=>e("span",null,"...",-1)),we=R({__name:"ArticleList",props:{data:null,scrollTopDistance:null},setup(t){const y=t,n=M(null),c=M(2),v=M(0),l=11,s=K([]),E=o=>{var r;let d=0,a=[];for(let p=0;p<o.length;p++){d<l&&a.push({year:o[p].year,data:new Map});const m=Array.from(o[p].data.keys());let b=0;for(let h of o[p].data.values()){let C=m[b];for(let B=0;B<h.length;B++){if(d<l)if(d++,a[a.length-1].data.has(C)){const V=(r=a[a.length-1].data.get(C))!=null?r:[];V.push(h[B]),a[a.length-1].data.set(C,V)}else a[a.length-1].data.set(C,[h[B]]);d==l&&(s.push(a),a=[],a.push({year:o[p].year,data:new Map}),d=0)}b++}a.length>0&&a[a.length-1].data.size==0&&a.splice(-1),p==o.length-1&&a.length>0&&a[a.length-1].data.size!=0&&s.push(a)}};let k=y.data;Q(()=>y.data,o=>{k!==o&&(k=o,s.length=0,E(o),v.value=0)},{immediate:!0});const P=o=>{const d=s.length-1;let a=[...Array(5).keys()].map(r=>r+o);return o<=2&&(c.value=2),a[a.length-1]>=d&&(c.value=d-4),o=c.value,a=[...Array(5).keys()].map(r=>r+o),a},f=()=>{c.value-=5},O=()=>{c.value+=5},$=o=>{v.value=o-1,n.value&&n.value.scrollIntoView({behavior:"smooth"})},U=o=>" \u{1F4DA} "+decodeURIComponent(o.slice(1,o.lastIndexOf("/")).replace(new RegExp("/","gm")," \u{1F51C} ")),W=o=>{let d=new Map;return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].forEach((r,p)=>{d.set(p+1,r)}),d.get(o)};return E(y.data),(o,d)=>{const a=X("RouterLink");return i(),u("div",oe,[e("div",{class:"scroll-ele",style:F({top:t.scrollTopDistance+"px"}),ref_key:"targetElement",ref:n},null,4),(i(!0),u(x,null,S(Object.values(s)[v.value],(r,p)=>(i(),u("section",{key:p},[e("span",re,_(r.year),1),(i(!0),u(x,null,S(r.data,(m,b)=>(i(),u("div",{key:b,class:"notelist"},[e("div",ce,_(W(m[0])),1),(i(!0),u(x,null,S(m[1],(h,C)=>(i(),u("div",{key:C,class:"notelist-month"},[ie,I(a,{to:h.path},{default:z(()=>[e("div",ue,[e("div",de,[h.frontmatter.headerImage?(i(),u("img",{key:0,src:N(Z)(h.frontmatter.headerImage),alt:""},null,8,pe)):D("",!0),e("p",null,[e("span",null,_(h.date.slice(h.date.indexOf("-")+1,h.date.lastIndexOf("-"))),1),ee(" / "+_(h.date.slice(h.date.lastIndexOf("-")+1)),1)])]),e("div",he,[e("p",ge,_(h.title),1),h.date?(i(),u("span",ve,_(U(h.path)),1)):D("",!0)])])]),_:2},1032,["to"])]))),128))]))),128))]))),128)),s.length<=7?(i(),u("ul",_e,[(i(!0),u(x,null,S(s.length,(r,p)=>(i(),u("li",{key:p,onClick:m=>$(r)},[e("span",{class:L(r-1===v.value?"item-hover":"")},_(r),3)],8,fe))),128))])):D("",!0),s.length>7?(i(),u("ul",ye,[w(e("button",{onClick:f},"<",512),[[A,c.value!==2]]),e("li",{onClick:d[0]||(d[0]=r=>$(1))},[e("span",{class:L(v.value===0?"item-hover":"")},"1",2)]),w(e("div",null,[ke,w(e("span",null,"......",512),[[A,c.value===s.length-5]])],512),[[A,c.value!==2]]),(i(!0),u(x,null,S(P(c.value),(r,p)=>(i(),u("li",{key:p,onClick:m=>$(r)},[e("span",{class:L(r-1===v.value?"item-hover":"")},_(r),3)],8,me))),128)),w(e("div",null,[Ce,w(e("span",null,"......",512),[[A,c.value===2]])],512),[[A,c.value!==s.length-5]]),e("li",{onClick:d[1]||(d[1]=r=>$(s.length))},[e("span",{class:L(v.value===s.length-1?"item-hover":"")},_(s.length),3)]),w(e("button",{onClick:O},">",512),[[A,c.value!==s.length-5]])])):D("",!0)])}}});var Ae=J(we,[["__scopeId","data-v-6a0e391b"],["__file","ArticleList.vue"]]);const g=new Map;g.set("all","#7f7f7f");g.set("HTML","#fc490b");g.set("CSS","#f2a633");g.set("JS","#f5dd1e");g.set("TS","#0288d1");g.set("network","#008f9f");g.set("vue","#41b883");g.set("react","#61dafb");g.set("blogs","#ede6d3");g.set("DataStructure","#f29790");g.set("Algorithm","#c8c5b2");g.set("EnglishWord","#fce09f");const xe=t=>(H("data-v-f6d09d62"),t=t(),j(),t),Se={class:"notes-cate"},Le=xe(()=>e("p",null,"all",-1)),Me=["onClick"],Pe={class:"notes-wrapper"},$e=R({__name:"Notes",setup(t){const y=te(()=>G),n=ne(),c=M(n.value.notes||[]),v=M(n.value.cateMap||[]),l=M(""),s=(k="")=>{l.value=k},E=k=>l.value?k.filter(f=>f.category==l.value):k;return(k,P)=>(i(),ae(Y,null,{page:z(()=>[I(q,{"page-info":N(y)},null,8,["page-info"]),e("ul",Se,[e("li",{class:L(l.value==""?"active":"none"),style:F({background:N(g).get("all")}),onClick:P[0]||(P[0]=f=>s())},[e("div",null,[e("span",null,_(c.value.length),1),Le])],6),(i(!0),u(x,null,S(v.value,(f,O)=>(i(),u("li",{class:L(l.value==f[0]?"active":"none"),key:O,style:F([{background:N(g).get(f[0])}]),onClick:$=>s(f[0])},[e("div",null,[e("span",null,_(f[1]),1),e("p",null,_(f[0]),1)])],14,Me))),128))]),e("div",Pe,[I(Ae,{data:N(le)(E(c.value)),scrollTopDistance:-218},null,8,["data"])])]),_:1}))}});var De=J($e,[["__scopeId","data-v-f6d09d62"],["__file","Notes.vue"]]);export{De as default};
