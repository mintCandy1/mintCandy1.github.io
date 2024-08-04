import{C as T}from"./Common.d0cb3e95.js";import{P as z}from"./Pager.bd53e0f3.js";import{_ as L,e as S,r as C,o as l,c as m,b as t,h as a,S as H,t as b,g as _,w as B,v as w,j as E,u as M,k as y,U as j,I as V,J as D,f as I,m as P,n as A,E as N}from"./app.9eb88680.js";import{f as F}from"./resolveTime.bbe121e0.js";import"./Sidebar.07865d1f.js";const q={class:"post-item"},O=["src"],U={class:"else"},G={class:"post-item__date"},J={key:0},K=["innerHTML"],Q=S({__name:"PostListItem",props:{item:{type:Object,required:!0}},setup(i){const u=e=>e.replace(/<RouterLink to/g,"<a href").replace(/<\/RouterLink>/g,"</a>");return(e,r)=>{const d=C("RouterLink");return l(),m("div",q,[t("div",{class:"post-item__img",onClick:r[0]||(r[0]=v=>e.$router.push(i.item.path))},[t("img",{src:a(H)(i.item.info.headerImage)},null,8,O)]),t("div",U,[t("p",G,b(i.item.info.date?a(F)(i.item.info.date):""),1),_(d,{to:i.item.path,class:"post-item__title"},{default:B(()=>[t("h2",null,b(i.item.info.title),1),i.item.info.subtitle?(l(),m("h3",J,b(i.item.info.subtitle),1)):w("",!0)]),_:1},8,["to"]),t("div",{class:"post-item__content",innerHTML:u(i.item.info.excerpt||"")},null,8,K)])])}}});var W=L(Q,[["__file","PostListItem.vue"]]);const X={class:"postlist-wrapper"},Y=S({__name:"PostList",setup(i){const u=E(),e=M(),r=y(()=>{const o=decodeURI(u.currentRoute.value.path.replace(/\/page/g,"").replace(/\//g,""));return o===""?1:Number(o)}),{slicedPosts:d,postListPager:v}=j(r),h=y(()=>{const o=v.value,n=o&&o.next?{text:e.value.homeNext,link:o.next}:null,c=o&&o.prev?{text:e.value.homePrev,link:o.prev}:null;return{next:n,prev:c}});return(o,n)=>(l(),m("div",X,[(l(!0),m(V,null,D(a(d),c=>(l(),I(W,{key:c.path,item:c},null,8,["item"]))),128)),a(h).next||a(h).prev?(l(),I(z,{key:0,data:a(h)},null,8,["data"])):w("",!0)]))}});var Z=L(Y,[["__file","PostList.vue"]]);const ee={class:"sns-wrapper"},te=["href"],oe=S({__name:"SNS",props:{large:{type:Boolean,default:!0}},setup(i){var o;const u={github:{icon:"fa-github-alt",preLink:"https://github.com/"},linkedin:{icon:"fa-linkedin-in",preLink:"https://www.linkedin.com/in/"},facebook:{icon:"fa-facebook-f",preLink:"https://www.facebook.com/"},twitter:{icon:"fa-twitter",preLink:"https://www.twitter.com/"},zhihu:{icon:"ri-zhihu-line",preLink:"https://www.zhihu.com/people/"},weibo:{icon:"ri-weibo-fill",preLink:"http://weibo.com/u/"},email:{icon:"fa-envelope",preLink:"mailto:"},rss:{icon:"ri-rss-fill",preLink:"",iconScale:.9}},r=(o=M().value.personalInfo)==null?void 0:o.sns,d=(n,c)=>typeof n=="string"?u[c].preLink+n:n.link,v=(n,c)=>typeof n=="string"?u[c].icon:n.icon,h=(n,c)=>(typeof n=="string"?u[c].iconScale:n.iconScale)||1;return(n,c)=>{const g=C("VIcon");return l(),m("div",ee,[(l(!0),m(V,null,D(a(r),(k,f)=>(l(),m("a",{key:`${f}-${k}`,href:d(k,f),target:"_blank",rel:"noopener noreferrer"},[_(g,{class:"icon-stack"},{default:B(()=>[i.large?(l(),I(g,{key:0,name:"fa-circle",scale:"2.3",class:"icon-circle"})):w("",!0),_(g,{name:v(k,f),scale:h(k,f),class:"icon-sns",inverse:""},null,8,["name","scale"])]),_:2},1024)],8,te))),128))])}}});var ne=L(oe,[["__file","SNS.vue"]]);const se={class:"home-blog"},ae=["src"],ie={key:0,class:"hero-bubble"},re={class:"hero-bubble__body"},le=t("div",{class:"hero-bubble__tile"},null,-1),ce={class:"hero-info"},ue={class:"description"},me=S({__name:"Home",setup(i){const u=M(),e=u.value.homeHeaderImages,r=P(-1),d=P(1),v=()=>{window.scrollTo({top:document.querySelector(".hero").clientHeight,behavior:"smooth"})},h=u.value.hitokoto,o=P("\u6B63\u5728\u52A0\u8F7D\u4E00\u8A00...");let n=!1;const c=()=>{if(!h||n)return;n=!0;let p=h;p=typeof p=="string"?p:"https://v1.hitokoto.cn",fetch(p).then(s=>s.json()).then(s=>o.value=s.hitokoto).catch(s=>{console.log(`Get ${p} error: `,s)})};A(()=>{e&&e.length>0&&(r.value=Math.floor(Math.random()*e.length))});const g=p=>{if(!(e&&e.length>0))return;const s=e.length;r.value=(r.value+p+s)%s},k=y(()=>e&&e.length>0&&r.value!==-1?`url(${H(e[r.value].path)})`:"none"),f=y(()=>e&&e.length>0&&r.value!==-1?e[r.value].mask:null),$=u.value.personalInfo;return(p,s)=>{const x=C("VIcon");return l(),m("main",se,[t("div",{class:"hero",style:N({"background-image":a(k)})},[a(f)?(l(),m("div",{key:0,class:"hero-mask",style:N({background:a(f)})},null,4)):w("",!0),t("div",{class:"hero-content",style:N({opacity:d.value})},[t("img",{class:"hero-avatar hide-on-mobile",src:a(H)(a($).avatar),alt:"hero",onMouseover:c},null,40,ae),a(h)?(l(),m("div",ie,[t("div",re,[t("p",null,b(o.value),1)]),le])):w("",!0),t("div",ce,[t("h1",null,b(a($).name),1),t("p",ue,b(a($).description),1)]),_(ne,{class:"hide-on-mobile",large:""}),t("button",{class:"hero-img-prev hide-on-mobile",onClick:s[0]||(s[0]=R=>g(-1))},[_(x,{name:"fa-chevron-left"})]),t("button",{class:"hero-img-next hide-on-mobile",onClick:s[1]||(s[1]=R=>g(1))},[_(x,{name:"fa-chevron-right"})]),t("span",{class:"hero-arrow-down hide-on-mobile",onClick:s[2]||(s[2]=R=>v())},[_(x,{name:"fa-chevron-down",animation:"float"})])],4)],4),_(Z)])}}});var he=L(me,[["__file","Home.vue"]]);const _e=S({__name:"HomePage",setup(i){return(u,e)=>(l(),I(T,null,{page:B(()=>[_(he)]),_:1}))}});var ke=L(_e,[["__file","HomePage.vue"]]);export{ke as default};
