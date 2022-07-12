(()=>{var Et=Object.defineProperty,yt=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var xt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable;var N=(t,e,r)=>e in t?Et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,q=(t,e)=>{for(var r in e||(e={}))xt.call(e,r)&&N(t,r,e[r]);if(H)for(var r of H(e))Ct.call(e,r)&&N(t,r,e[r]);return t},W=(t,e)=>yt(t,gt(e));var G=(t,e,r)=>(N(t,typeof e!="symbol"?e+"":e,r),r);var X="@finsweet/attributes-cmscore";var u=class{static activateAlerts(){this.alertsActivated=!0}static alert(e,r){if(this.alertsActivated&&window.alert(e),r==="error")throw new Error(e)}};G(u,"alertsActivated",!1);var O="w--current";var I={dropdown:"w-dropdown",dropdownToggle:"w-dropdown-toggle",dropdownList:"w-dropdown-list"};var P=(t,e)=>(Array.isArray(e)||(e=[e]),e.map(o=>t.dispatchEvent(new Event(o,{bubbles:!0}))).every(o=>o));var V=(t,e)=>!!t&&e.includes(t);var z=(t,e=!0)=>{e&&t.focus(),P(t,["click","mouseup"])};function A(t){return t==null?void 0:t.trim().toLowerCase()}var Tt=`https://cdn.jsdelivr.net/npm/${X}@1/cmscore.js`,C=async()=>{let{fsAttributes:t}=window;t.cms||(t.cms={});let{cms:e}=t;if(e.coreImport)return e.coreImport;try{let r=import(Tt);return e.coreImport=r,r.then(o=>{o&&(e.coreVersion||(e.coreVersion=o.version))}),r}catch(r){u.alert(`${r}`,"error");return}};var _t="https://cdn.jsdelivr.net/npm/@finsweet/attributes-animation@1/functions.js",D=async()=>{let{fsAttributes:t}=window;if(t.animationImport)return t.animationImport;try{let e=import(_t);return t.animationImport=e,e}catch(e){u.alert(`${e}`,"error");return}};var w="fs-attributes";var It=`${w}-support`,Dt="https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",J=async()=>{let{fsAttributes:t,location:e}=window,{host:r,searchParams:o}=new URL(e.href);if(!r.includes("webflow.io")||!o.has(It))return!1;if(t.supportImport)return t.supportImport;try{t.supportImport=new Promise((n,s)=>{let i=document.createElement("script");i.src=Dt,i.onload=()=>n(!0),i.onerror=s,document.head.append(i)})}catch(n){return!1}return t.supportImport};var U=async(t,{durationKey:e,easingKey:r})=>{let o=await D();if(!o)return;let{animations:{fade:n},easings:s}=o,{listAnimation:i}=t,a=t.getAttribute(e),p=t.getAttribute(r);if(i&&!a&&!p)return;let c=V(p,s)?p:void 0,l=a?parseFloat(a)/2e3:.1;if(!i){t.listAnimation=W(q({},n),{options:{easing:c,duration:l}});return}let{options:m}=i;if(!m){i.options={easing:c,duration:l};return}m.easing||(m.easing=c),a&&(m.duration=l)};var L=t=>e=>`${t}${e?`-${e}`:""}`,h=t=>{let e=(o,n,s)=>{let i=t[o],{key:a,values:p}=i,c;if(!n)return`[${a}]`;let l=p==null?void 0:p[n];if(typeof l=="string"?c=l:c=l(s&&"instanceIndex"in s?s.instanceIndex:void 0),!(s!=null&&s.operator))return`[${a}="${c}"]`;switch(s.operator){case"prefixed":return`[${a}^="${c}"]`;case"suffixed":return`[${a}$="${c}"]`;case"contains":return`[${a}*="${c}"]`}};function r(o,n){let s=e("element",o,n),i=(n==null?void 0:n.scope)||document;return n!=null&&n.all?i.querySelectorAll(s):i.querySelector(s)}return[e,r]};var T={preventLoad:{key:`${w}-preventload`},debugMode:{key:`${w}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${w}-dev`}},[B,er]=h(T);var Q=()=>{let{currentScript:t}=document,{preventLoad:e,debugMode:r}=T,o=typeof(t==null?void 0:t.getAttribute(e.key))=="string";return typeof(t==null?void 0:t.getAttribute(r.key))=="string"&&u.activateAlerts(),{preventsLoad:o}};var Z=()=>{if(window.fsAttributes&&!Array.isArray(window.fsAttributes))return;let t={cms:{},push(...e){var r,o;for(let[n,s]of e)(o=(r=this[n])==null?void 0:r.loading)==null||o.then(s)}};ht(t),vt(t),window.fsAttributes=t,window.FsAttributes=window.fsAttributes,J()},ht=t=>{let e=B("src","finsweet",{operator:"contains"}),r=B("dev"),n=[...document.querySelectorAll(`script${e}, script${r}`)].reduce((s,i)=>{var p;let a=i.getAttribute(T.dev.key)||((p=i.src.match(/[\w-. ]+(?=(\.js)$)/))==null?void 0:p[0]);return a&&!s.includes(a)&&s.push(a),s},[]);for(let s of n){t[s]={};let i=t[s];i.loading=new Promise(a=>{i.resolve=p=>{a(p),delete i.resolve}})}},vt=t=>{let e=Array.isArray(window.fsAttributes)?window.fsAttributes:[];t.push(...e)};var tt="1.9.1";var E="cmssort",d=`fs-${E}`,Rt="list",kt="trigger",Mt="dropdown-label",Nt="scroll-anchor",Ot="field",Pt="type",Vt="easing",Ut="duration",Bt="asc",$t="desc",Ft="reverse",f={element:{key:`${d}-element`,values:{list:L(Rt),trigger:L(kt),dropdownLabel:L(Mt),scrollAnchor:L(Nt)}},field:{key:`${d}-${Ot}`},type:{key:`${d}-${Pt}`,values:{date:"date"}},easing:{key:`${d}-${Vt}`},duration:{key:`${d}-${Ut}`},ascClass:{key:`${d}-${Bt}`},descClass:{key:`${d}-${$t}`},reverse:{key:`${d}-${Ft}`,values:{true:"true"}}},[v,K]=h(f),et=`${d}_asc`,rt=`${d}_desc`;var{field:{key:Yt},type:{key:jt}}=f,ot=(t,e)=>{t.on("shouldcollectprops",async r=>{for(let o of r)o.collectProps({fieldKey:Yt,typeKey:jt})}),t.on("shouldsort",async()=>{await e(!0)})};var _="role",y={slider:"slider",listbox:"listbox",option:"option",columnheader:"columnheader",link:"link"},st="tabindex";var $="aria-selected",nt="aria-haspopup",it="aria-multiselectable";var at="aria-sort",F={ascending:"ascending",descending:"descending"};var g=async(t,{direction:e,sortKey:r,addingItems:o})=>{let{items:n}=t;e&&r&&n.some(({props:i})=>r in i)?n.sort((i,a)=>{let p=i.props[r],c=a.props[r],[l]=(p==null?void 0:p.values)||[],[m]=(c==null?void 0:c.values)||[];if(!l)return 1;if(!m)return-1;let{type:x}=p,S=x==="date";if(S||x==="number"){let[k,M]=[l,m].map(j=>S?new Date(j).getTime():parseFloat(j));return isNaN(k)?1:isNaN(M)?-1:e==="asc"?k-M:M-k}let b={numeric:!0,sensitivity:"base"};return e==="asc"?l.localeCompare(m,void 0,b):m.localeCompare(l,void 0,b)}):t.restoreItemsOrder(),o||(await t.switchPage(1,!1),t.scrollToAnchor(),await t.renderItems())};var{ascClass:{key:Ht},descClass:{key:qt},reverse:{key:Wt,values:Gt}}=f,pt=(t,e,r)=>{let o=new Map,n=!1,s,i,a,p=async c=>{await g(e,{sortKey:a,direction:i,addingItems:c})};for(let c of t)Xt(c,o,r),c.addEventListener("click",async l=>{if(l.preventDefault(),n)return;n=!0;let m=o.get(c);if(!m){n=!1;return}a=m.sortKey,i=zt(m.direction,m.reverse),s&&c!==s&&ct(s,void 0,o),s=c,ct(c,i,o),await p(),n=!1});return p},Xt=(t,e,r)=>{let o=t.getAttribute(f.field.key);if(!o)return;let n=A(o),s=t.getAttribute(Wt)===Gt.true,i=t.getAttribute(Ht),a=t.getAttribute(qt),p={sortKey:n,reverse:s,cssClasses:{asc:i||r.asc,desc:a||r.desc}};t.setAttribute(_,y.columnheader),t.setAttribute(st,"0"),mt(t),e.set(t,p),lt(t,p)},lt=(...[t,{cssClasses:e}])=>{for(let r of Object.values(e))t.classList.remove(r)},mt=(t,e)=>{t.setAttribute(at,e?e==="asc"?F.ascending:F.descending:"none")},ct=(t,e,r)=>{let o=r.get(t);if(!o)return;let{cssClasses:n}=o;lt(t,o),e&&t.classList.add(n[e]),mt(t,e),o.direction=e},zt=(t,e)=>t?t==="desc"?"asc":"desc":e?"desc":"asc";var{dropdownToggle:Jt,dropdownList:Qt}=I,ut=(t,e)=>{let r=t.querySelector(`.${Jt}`),o=t.querySelector(`.${Qt}`);if(!r||!o){u.alert("The cmssort Dropdown is missing a toggle or a list.","error");return}ee(r,o);let n=te(r),s=Zt(o);if(!s){u.alert("The cmssort Dropdown doesn't have any option.","error");return}let i=!1,a,p,c=async l=>{await g(e,{direction:p,sortKey:a,addingItems:l})};return o.addEventListener("click",async l=>{if(l.preventDefault(),i)return;i=!0;let{target:m}=l;if(!(m instanceof Element)){i=!1;return}let x=m.closest("a");if(!x){i=!1;return}let S=s.find(({element:b})=>b===x);if(!S||S.selected){i=!1;return}let R=s.find(({selected:b})=>b);R&&(R.selected=!1),S.selected=!0,{sortKey:a,direction:p}=S,re(s),n==null||n.updateContent(S),z(r),await c(),i=!1}),c},Zt=t=>{let e=[],r=t.querySelectorAll("a");if(!!r.length){for(let o of r){o.setAttribute(_,y.option);let n=o.getAttribute(f.field.key),s,i;n&&(n.endsWith("-asc")?(i="asc",s=n.slice(0,-4)):n.endsWith("-desc")?(i="desc",s=n.slice(0,-5)):(i="asc",s=n)),s&&(s=A(s)),e.push({element:o,sortKey:s,direction:i,selected:!1})}return e}},te=t=>{let e=K("dropdownLabel",{operator:"prefixed",scope:t});if(!e)return;let r=e.innerHTML;return{element:e,originalHTML:r,updateContent:({element:n,sortKey:s})=>{e.innerHTML=s?n.innerHTML:r}}},ee=(t,e)=>{t.setAttribute(nt,y.listbox),e.setAttribute(_,y.listbox),e.setAttribute(it,"false")},re=t=>{for(let{element:e,selected:r}of t){if(r){e.setAttribute($,"true"),e.classList.add(O);continue}e.removeAttribute($),e.classList.remove(O)}};var ft=async(t,e)=>{let r=t.closest("form");r==null||r.addEventListener("submit",oe);let[o,n]=dt(t.value),s=!1,i=async a=>{await g(e,{direction:n,sortKey:o,addingItems:a})};return t.addEventListener("change",async()=>{s||(s=!0,[o,n]=dt(t.value),await i(),s=!1)}),o&&await i(),i},oe=t=>(t.preventDefault(),t.stopImmediatePropagation(),!1),dt=t=>{let e,r;return t.endsWith("-asc")?(r="asc",e=t.slice(0,-4)):t.endsWith("-desc")?(r="desc",e=t.slice(0,-5)):(r="asc",e=t),e=A(e),[e,r]};var{element:{key:se},field:{key:ne},type:{key:ie},duration:{key:ae},easing:{key:ce},ascClass:{key:pe},descClass:{key:le}}=f,St=async t=>{let e=t.getInstanceIndex(se),r=document.querySelectorAll(v("element","trigger",{instanceIndex:e}));if(!r.length)return;let{items:o}=t;for(let c of o)c.collectProps({fieldKey:ne,typeKey:ie});if(U(t,{durationKey:ae,easingKey:ce}),!t.scrollAnchor){let c=K("scrollAnchor",{instanceIndex:e});c&&(t.scrollAnchor=c)}let n={asc:t.getAttribute(pe)||et,desc:t.getAttribute(le)||rt},[s]=r,i=s instanceof HTMLSelectElement,a=s.closest(`.${I.dropdown}`),p=i?await ft(s,t):a?ut(a,t):pt(r,t,n);!p||ot(t,p)};var Y=async()=>{var r,o;let t=await C();if(!t)return[];let e=t.createCMSListInstances([v("element","list",{operator:"prefixed"})]);return await Promise.all(e.map(St)),(o=(r=window.fsAttributes[E]).resolve)==null||o.call(r,e),e};Z();C();D();var At,bt;(At=window.fsAttributes)[bt=E]||(At[bt]={});var{preventsLoad:me}=Q(),wt=window.fsAttributes[E];wt.version=tt;me?wt.init=Y:(window.Webflow||(window.Webflow=[]),window.Webflow.push(Y));})();