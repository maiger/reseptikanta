import{_ as S,b as x,o as u,c as p,F as y,r as I,t as v,d as B,e as o,u as l,p as w,f as R,g as D,h as M,i as k,j as f,I as m,w as b,v as E,k as A,l as P,m as V,n as C,B as O}from"./index-md-a2Lll.js";function q(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L=function(e){let n;if(e<0?(e=Math.abs(e),n="-"):n="",e===void 0)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(e==1e16)return`${n}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${n}${e}`;if(e<1e-6)return"0";const i=e.toString(),r=i.split(".");let t=r[0],s;if(s=="0"&&t!=="0")return t;if(s=="0"&&t=="0")return"0";if(i.length>=17?s=r[1].slice(0,r[1].length-1):s=r[1],s=="99"&&t!=="0")return`${t} 99/100`;if(s=="99"&&t=="0")return"99/100";if(1-parseFloat(`.${s}`)<.0011&&(s="999"),s==null)return t;const d=s.split("").reverse().join(""),g=/^(\d+)\1{1,2}/;let a=d.match(g);if(a&&s.length>2){let _=a[0].split("").reverse().join(""),c=a[1].split("").reverse().join("");if(c.length>1){let h=c.split(""),$=1;for(let N=0;N<h.length;N++)$/=h[0]/h[N];$===1&&(c=h[0])}return c.length>1&&c.length%2===0&&(c=parseInt(c.slice(0,c.length/2),10)-parseInt(c.slice(c.length/2,c.length),10)===0?c.slice(0,c.length/2):c),T(s,c,_,t,n)}else return U(s,t,n)};function T(e,n,i,r,t){const d=e.length-i.length>=1?e.length-i.length:1,g=Math.pow(10,d),a=parseFloat(`0.${e}`),_=Math.pow(10,n.length),c=Math.round((a*_-a)*Math.pow(10,d)),h=(_-1)*g;return j(c,h,r,t,!0)}function U(e,n,i){const t=parseInt(e,10),s=Math.pow(10,e.length);return j(t,s,n,i,!1)}function j(e,n,i,r,t){const s=[2,3,5];if(t===!0)for(let c=3;c*c<=e;c+=2)e%c===0&&s.push(c);let d=0,g=1,a=e,_=n;for(;d<=s.length;)a%s[d]===0&&_%s[d]===0?(g=g*s[d],a=a/s[d],_=_/s[d]):d++;return G(_,a,i,r)}function G(e,n,i,r){return e===1&&n===1?(i=`${r}${(parseInt(i)+1).toString()}`,`${i}`):n===0?`${r}${i}`:i=="0"?`${r}${n}/${e}`:`${r}${i} ${n}/${e}`}const H=q(L),F=e=>(w("data-v-5d5aa332"),e=e(),R(),e),K={class:"ingredients"},Y=F(()=>o("h2",null,"Ainesosat",-1)),z={class:"ingredient-section"},J={key:0,class:"collection"},Q={class:"name"},W=F(()=>o("div",null," | ",-1)),X={class:"amount"},Z={__name:"RecipeIngredients",props:{recipe:{type:Object,required:!0},servings:{type:Number,required:!0}},setup(e){const n=e,i=x(()=>n.servings<1?1/n.recipe.servings:n.servings/n.recipe.servings),r=t=>{t.target.closest(".ingredient").classList.toggle("step-complete")};return(t,s)=>(u(),p("div",K,[Y,(u(!0),p(y,null,I(e.recipe.ingredients,d=>(u(),p("ul",z,[e.recipe.ingredients.length>1?(u(),p("p",J,v(d.collectionName),1)):B("",!0),(u(!0),p(y,null,I(d.collectionIngredients,(g,a)=>(u(),p("li",{onClick:r,class:"ingredient"},[o("div",Q,v(g.name),1),W,o("div",X,v(l(H)(g.amount*i.value))+" "+v(g.unit),1)]))),256))]))),256))]))}},ee=S(Z,[["__scopeId","data-v-5d5aa332"]]),te=e=>(w("data-v-8e88a9a6"),e=e(),R(),e),se={class:"instructions"},ie=te(()=>o("h2",null,"Ohjeet",-1)),ne={class:"step-counter"},oe={class:"step-text"},re={__name:"RecipeInstructions",props:{recipe:{type:Object,required:!0}},setup(e){const n=i=>{i.target.closest(".instruction-step").classList.toggle("step-complete")};return(i,r)=>(u(),p("div",se,[ie,o("ul",null,[(u(!0),p(y,null,I(e.recipe.instructions,(t,s)=>(u(),p("li",{onClick:n,class:"instruction-step"},[o("div",ne,v(s+1),1),o("p",oe,v(t),1)]))),256))])]))}},ce=S(re,[["__scopeId","data-v-8e88a9a6"]]),le=e=>(w("data-v-ee5503d4"),e=e(),R(),e),ae={class:"recipe-note-container"},de={class:"edit"},ue={class:"note"},pe=le(()=>o("h2",{class:"title"},"Kommentti",-1)),_e={key:0,class:"text"},ge=D({__name:"RecipeNote",props:{id:{type:Number,required:!0}},setup(e){const n=M(),i=e,r=n.getNoteById(i.id);let t="";r&&(t=r.note);let s=k(!1);const d=()=>{s.value=!s.value,s.value||(t.trim()!==""?n.addNote(i.id,t):n.removeNote(i.id))};return(g,a)=>(u(),p("div",ae,[o("div",de,[o("button",{onClick:d,class:"add-servings","aria-label":"add servings"},[f(l(m),{class:"icon",icon:"material-symbols:stylus-note-outline"})])]),b(o("div",ue,[pe,l(s)?b((u(),p("textarea",{key:1,"onUpdate:modelValue":a[0]||(a[0]=_=>A(t)?t.value=_:t=_)},null,512)),[[P,l(t)]]):(u(),p("div",_e,v(l(t)),1))],512),[[E,l(t).length>0||l(s)]])]))}}),ve=S(ge,[["__scopeId","data-v-ee5503d4"]]),he={class:"recipe-details-section"},fe={class:"recipe-card"},me={class:"recipe-thumbnail"},$e=["src","alt"],ye={class:"recipe-stats"},Ie={class:"prep-time"},Se={class:"servings-container"},Ne={class:"servings"},ke={class:"favorite-container"},we={class:"recipe-info"},Re={class:"recipe-text"},be={class:"tags"},Ce={class:"tag"},Me={__name:"RecipeDetailsView",setup(e){const i=V().params.id,r=M(),t=r.getRecipeById(+i);let s=k(t.servings);const d=()=>{s.value++},g=()=>{s.value<=1||s.value--};let a=k(!1);a.value=r.getFavoriteById(+i);const _=()=>{a.value=!a.value,a.value?r.addFavorite(+i):r.removeFavorite(+i)};return(c,h)=>(u(),p("section",he,[o("div",fe,[o("div",me,[o("img",{src:`${l(O)+l(t).img}`,alt:l(t).title},null,8,$e),o("h1",null,v(l(t).title),1)]),o("div",ye,[o("div",Ie,[f(l(m),{class:"icon",icon:"mdi:clockwise"}),o("p",null,v(l(t).prepTime),1)]),o("div",Se,[o("button",{onClick:g,class:"remove-servings","aria-label":"remove servings"},[f(l(m),{class:"icon",icon:"mdi:minus"})]),o("p",Ne,v(l(s)),1),o("button",{onClick:d,class:"add-servings","aria-label":"add servings"},[f(l(m),{class:"icon",icon:"mdi:plus"})])]),o("div",ke,[o("button",{onClick:_,class:"toggle-favorite","aria-label":"toggle favorite"},[l(a)?(u(),C(l(m),{key:0,class:"icon",icon:"material-symbols:favorite",style:{color:"rgb(200, 50, 50)"}})):(u(),C(l(m),{key:1,class:"icon",icon:"material-symbols:favorite-outline"}))])])]),o("div",we,[f(ee,{class:"ingredients",recipe:l(t),servings:l(s)},null,8,["recipe","servings"]),o("div",Re,[f(ce,{class:"instructions",recipe:l(t)},null,8,["recipe"]),f(ve,{id:l(t).id},null,8,["id"])])]),o("ul",be,[(u(!0),p(y,null,I(l(t).tags,$=>(u(),p("li",null,[o("span",Ce,v($.toUpperCase()),1)]))),256))])])]))}},Fe=S(Me,[["__scopeId","data-v-88e66cb7"]]);export{Fe as default};
