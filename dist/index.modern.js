import*as e from"react";function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(null,arguments)}const n=["children","options"],r={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};var i;!function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(i||(i={}));const l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),a={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},o=["style","script"],c=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,d=/\n{2,}$/,u=/^(\s*>[\s\S]*?)(?=\n{2,})/,p=/^ *> ?/gm,f=/^ {2,}\n/,h=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,m=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,g=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,x=/\r\n?/g,b=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,v=/^\[\^([^\]]+)]/,S=/\f/g,E=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,$=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,C=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,z=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,L=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,A=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,T=/^<!--[\s\S]*?(?:-->)/,B=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,M=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,O=/^\{.*\}$/,R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,D=/-([a-z])?/gi,N=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,H=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,P=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,j=/^\[([^\]]*)\] ?\[([^\]]*)\]/,F=/(\[|\])/g,_=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,W=/\t/g,G=/(^ *\||\| *$)/g,Z=/^ *:-+: *$/,q=/^ *:-+ *$/,Q=/^ *-+: *$/,V="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",X=new RegExp(`^([*_])\\1${V}\\1\\1(?!\\1)`),J=new RegExp(`^([*_])${V}\\1(?!\\1|\\w)`),K=new RegExp(`^==${V}==`),Y=new RegExp(`^~~${V}~~`),ee=/^\\([^0-9A-Za-z\s])/,te=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ne=/^\n+/,re=/^([ \t]*)/,ie=/\\([^\\])/g,le=1,ae=/ *\n+$/,oe=/(?:^|\n)( *)$/,ce="(?:\\d+\\.)",se="(?:[*+-])";function de(e){return"( *)("+(e===le?ce:se)+") +"}const ue=de(le),pe=de(2);function fe(e){return new RegExp("^"+(e===le?ue:pe))}const he=fe(le),me=fe(2);function ge(e){return new RegExp("^"+(e===le?ue:pe)+"[^\\n]*(?:\\n(?!\\1"+(e===le?ce:se)+" )[^\\n]*)*(\\n|$)","gm")}const ye=ge(le),ke=ge(2);function xe(e){const t=e===le?ce:se;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const be=xe(le),ve=xe(2);function Se(e,t){const n=t===le,i=n?be:ve,l=n?ye:ke,a=n?he:me;return{match(e,t,n){const r=oe.exec(n);return r&&(t.list||!t.inline&&!t.simple)?i.exec(e=r[1]+e):null},order:1,parse(e,t,r){const i=n?+e[2]:void 0,o=e[0].replace(d,"\n").match(l);let c=!1;return{items:o.map(function(e,n){const i=a.exec(e)[0].length,l=new RegExp("^ {1,"+i+"}","gm"),s=e.replace(l,"").replace(a,""),d=n===o.length-1,u=-1!==s.indexOf("\n\n")||d&&c;c=u;const p=r.inline,f=r.list;let h;r.list=!0,u?(r.inline=!1,h=s.replace(ae,"\n\n")):(r.inline=!0,h=s.replace(ae,""));const m=t(h,r);return r.inline=p,r.list=f,m}),ordered:n,start:i}},render:(t,n,i)=>e(t.ordered?"ol":"ul",{key:i.key,start:t.type===r.orderedList?t.start:void 0},t.items.map(function(t,r){return e("li",{key:r},n(t,i))}))}}const Ee=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),$e=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,we=[u,m,g,w,z,C,T,N,ye,be,ke,ve],Ce=[...we,/^[^\n]+(?:  \n|\n{2,})/,L,M];function ze(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Le(e){return Q.test(e)?"right":Z.test(e)?"center":q.test(e)?"left":null}function Ae(e,t,n,i){const l=n.inTable;n.inTable=!0;let a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((e,l)=>("|"===l.trim()?e.push(i?{type:r.tableSeparator}:{type:r.text,text:l}):""!==l&&e.push.apply(e,t(l,n)),e),[]);n.inTable=l;let o=[[]];return a.forEach(function(e,t){e.type===r.tableSeparator?0!==t&&t!==a.length-1&&o.push([]):(e.type!==r.text||null!=a[t+1]&&a[t+1].type!==r.tableSeparator||(e.text=e.text.trimEnd()),o[o.length-1].push(e))}),o}function Te(e,t,n){n.inline=!0;const i=e[2]?e[2].replace(G,"").split("|").map(Le):[],l=e[3]?function(e,t,n){return e.trim().split("\n").map(function(e){return Ae(e,t,n,!0)})}(e[3],t,n):[],a=Ae(e[1],t,n,!!l.length);return n.inline=!1,l.length?{align:i,cells:l,header:a,type:r.table}:{children:a,type:r.paragraph}}function Be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Me(e){return function(t,n){return n.inline?e.exec(t):null}}function Oe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Re(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ie(e){return function(t){return e.exec(t)}}function Ue(e,t,n){if(t.inline||t.simple)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every(e=>!we.some(t=>t.test(e))&&(r+=e+"\n",e.trim()));const i=r.trimEnd();return""==i?null:[r,i]}function De(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function Ne(e){return e.replace(ie,"$1")}function He(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;const l=e(t,n);return n.inline=r,n.simple=i,l}function Pe(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;const l=e(t,n);return n.inline=r,n.simple=i,l}function je(e,t,n){const r=n.inline||!1;n.inline=!1;const i=e(t,n);return n.inline=r,i}const Fe=(e,t,n)=>({children:He(t,e[1],n)});function _e(){return{}}function We(){return null}function Ge(...e){return e.filter(Boolean).join(" ")}function Ze(e,t,n){let r=e;const i=t.split(".");for(;i.length&&(r=r[i[0]],void 0!==r);)i.shift();return r||n}function qe(n="",i={}){function d(e,n,...r){const l=Ze(i.overrides,`${e}.props`,{});return i.createElement(function(e,t){const n=Ze(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Ze(t,`${e}.component`,e):e}(e,i.overrides),t({},n,l,{className:Ge(null==n?void 0:n.className,l.className)||void 0}),...r)}function G(t){t=t.replace(E,"");let n=!1;i.forceInline?n=!0:i.forceBlock||(n=!1===_.test(t));const r=ae(ie(n?t:`${t.trimEnd().replace(ne,"")}\n\n`,{inline:n}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===i.wrapper)return r;const l=i.wrapper||(n?"span":"div");let a;if(r.length>1||i.forceWrapper)a=r;else{if(1===r.length)return a=r[0],"string"==typeof a?d("span",{key:"outer"},a):a;a=null}return e.createElement(l,{key:"outer"},a)}function Z(t,n){const r=n.match(c);return r?r.reduce(function(n,r,a){const o=r.indexOf("=");if(-1!==o){const c=function(e){return-1!==e.indexOf("-")&&null===e.match(B)&&(e=e.replace(D,function(e,t){return t.toUpperCase()})),e}(r.slice(0,o)).trim(),s=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(r.slice(o+1).trim()),d=l[c]||c,u=n[d]=function(e,t,n,r){return"style"===t?n.split(/;\s?/).reduce(function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.trim().replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(n.length+1).trim(),e},{}):"href"===t||"src"===t?r(n,e,t):(n.match(O)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(t,c,s,i.sanitizer);"string"==typeof u&&(L.test(u)||M.test(u))&&(n[d]=e.cloneElement(G(u.trim()),{key:a}))}else"style"!==r&&(n[l[r]||r]=!0);return n},{}):null}i.overrides=i.overrides||{},i.sanitizer=i.sanitizer||De,i.slugify=i.slugify||ze,i.namedCodesToUnicode=i.namedCodesToUnicode?t({},a,i.namedCodesToUnicode):a,i.createElement=i.createElement||e.createElement;const q=[],Q={},V={[r.blockQuote]:{match:Re(u),order:1,parse:(e,t,n)=>({children:t(e[0].replace(p,""),n)}),render:(e,t,n)=>d("blockquote",{key:n.key},t(e.children,n))},[r.breakLine]:{match:Ie(f),order:1,parse:_e,render:(e,t,n)=>d("br",{key:n.key})},[r.breakThematic]:{match:Re(h),order:1,parse:_e,render:(e,t,n)=>d("hr",{key:n.key})},[r.codeBlock]:{match:Re(g),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,r)=>d("pre",{key:r.key},d("code",t({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[r.codeFenced]:{match:Re(m),order:0,parse:e=>({attrs:Z("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:r.codeBlock})},[r.codeInline]:{match:Oe(y),order:3,parse:e=>({text:e[2]}),render:(e,t,n)=>d("code",{key:n.key},e.text)},[r.footnote]:{match:Re(b),order:0,parse:e=>(q.push({footnote:e[2],identifier:e[1]}),{}),render:We},[r.footnoteReference]:{match:Me(v),order:1,parse:e=>({target:`#${i.slugify(e[1],ze)}`,text:e[1]}),render:(e,t,n)=>d("a",{key:n.key,href:i.sanitizer(e.target,"a","href")},d("sup",{key:n.key},e.text))},[r.gfmTask]:{match:Me($),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,n)=>d("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})},[r.heading]:{match:Re(i.enforceAtxHeadings?C:w),order:1,parse:(e,t,n)=>({children:He(t,e[2],n),id:i.slugify(e[2],ze),level:e[1].length}),render:(e,t,n)=>d(`h${e.level}`,{id:e.id,key:n.key},t(e.children,n))},[r.headingSetext]:{match:Re(z),order:0,parse:(e,t,n)=>({children:He(t,e[1],n),level:"="===e[2]?1:2,type:r.heading})},[r.htmlBlock]:{match:Ie(L),order:1,parse(e,t,n){const[,r]=e[3].match(re),i=new RegExp(`^${r}`,"gm"),l=e[3].replace(i,""),a=(c=l,Ce.some(e=>e.test(c))?je:He);var c;const s=e[1].toLowerCase(),d=-1!==o.indexOf(s),u=(d?s:e[1]).trim(),p={attrs:Z(u,e[2]),noInnerParse:d,tag:u};return n.inAnchor=n.inAnchor||"a"===s,d?p.text=e[3]:p.children=a(t,l,n),n.inAnchor=!1,p},render:(e,n,r)=>d(e.tag,t({key:r.key},e.attrs),e.text||n(e.children,r))},[r.htmlSelfClosing]:{match:Ie(M),order:1,parse(e){const t=e[1].trim();return{attrs:Z(t,e[2]||""),tag:t}},render:(e,n,r)=>d(e.tag,t({},e.attrs,{key:r.key}))},[r.htmlComment]:{match:Ie(T),order:1,parse:()=>({}),render:We},[r.image]:{match:Oe($e),order:1,parse:e=>({alt:e[1],target:Ne(e[2]),title:e[3]}),render:(e,t,n)=>d("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:i.sanitizer(e.target,"img","src")})},[r.link]:{match:Me(Ee),order:3,parse:(e,t,n)=>({children:Pe(t,e[1],n),target:Ne(e[2]),title:e[3]}),render:(e,t,n)=>d("a",{key:n.key,href:i.sanitizer(e.target,"a","href"),title:e.title},t(e.children,n))},[r.linkAngleBraceStyleDetector]:{match:Me(U),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],type:r.link})},[r.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:Me(R)(e,t),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],title:void 0,type:r.link})},[r.linkMailtoDetector]:{match:Me(I),order:0,parse(e){let t=e[1],n=e[1];return s.test(n)||(n="mailto:"+n),{children:[{text:t.replace("mailto:",""),type:r.text}],target:n,type:r.link}}},[r.orderedList]:Se(d,le),[r.unorderedList]:Se(d,2),[r.newlineCoalescer]:{match:Re(k),order:3,parse:_e,render:()=>"\n"},[r.paragraph]:{match:Ue,order:3,parse:Fe,render:(e,t,n)=>d("p",{key:n.key},t(e.children,n))},[r.ref]:{match:Me(H),order:0,parse:e=>(Q[e[1]]={target:e[2],title:e[4]},{}),render:We},[r.refImage]:{match:Oe(P),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,t,n)=>Q[e.ref]?d("img",{key:n.key,alt:e.alt,src:i.sanitizer(Q[e.ref].target,"img","src"),title:Q[e.ref].title}):null},[r.refLink]:{match:Me(j),order:0,parse:(e,t,n)=>({children:t(e[1],n),fallbackChildren:t(e[0].replace(F,"\\$1"),n),ref:e[2]}),render:(e,t,n)=>Q[e.ref]?d("a",{key:n.key,href:i.sanitizer(Q[e.ref].target,"a","href"),title:Q[e.ref].title},t(e.children,n)):d("span",{key:n.key},t(e.fallbackChildren,n))},[r.table]:{match:Re(N),order:1,parse:Te,render(e,t,n){const r=e;return d("table",{key:n.key},d("thead",null,d("tr",null,r.header.map(function(e,i){return d("th",{key:i,style:Be(r,i)},t(e,n))}))),d("tbody",null,r.cells.map(function(e,i){return d("tr",{key:i},e.map(function(e,i){return d("td",{key:i,style:Be(r,i)},t(e,n))}))})))}},[r.text]:{match:Ie(te),order:4,parse:e=>({text:e[0].replace(A,(e,t)=>i.namedCodesToUnicode[t]?i.namedCodesToUnicode[t]:e)}),render:e=>e.text},[r.textBolded]:{match:Oe(X),order:2,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>d("strong",{key:n.key},t(e.children,n))},[r.textEmphasized]:{match:Oe(J),order:3,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>d("em",{key:n.key},t(e.children,n))},[r.textEscaped]:{match:Oe(ee),order:1,parse:e=>({text:e[1],type:r.text})},[r.textMarked]:{match:Oe(K),order:3,parse:Fe,render:(e,t,n)=>d("mark",{key:n.key},t(e.children,n))},[r.textStrikethroughed]:{match:Oe(Y),order:3,parse:Fe,render:(e,t,n)=>d("del",{key:n.key},t(e.children,n))}};!0===i.disableParsingRawHTML&&(delete V[r.htmlBlock],delete V[r.htmlSelfClosing]);const ie=function(e){let t=Object.keys(e);function n(r,i){let l=[],a="";for(;r;){let o=0;for(;o<t.length;){const c=t[o],s=e[c],d=s.match(r,i,a);if(d){const e=d[0];r=r.substring(e.length);const t=s.parse(d,n,i);null==t.type&&(t.type=c),l.push(t),a=e;break}o++}}return l}return t.sort(function(t,n){let r=e[t].order,i=e[n].order;return r!==i?r-i:t<n?-1:1}),function(e,t){return n(function(e){return e.replace(x,"\n").replace(S,"").replace(W,"    ")}(e),t)}}(V),ae=(oe=function(e,t){return function(n,r,i){const l=e[n.type].render;return t?t(()=>l(n,r,i),n,r,i):l(n,r,i)}}(V,i.renderRule),function e(t,n={}){if(Array.isArray(t)){const r=n.key,i=[];let l=!1;for(let r=0;r<t.length;r++){n.key=r;const a=e(t[r],n),o="string"==typeof a;o&&l?i[i.length-1]+=a:null!==a&&i.push(a),l=o}return n.key=r,i}return oe(t,e,n)});var oe;const ce=G(n);return q.length?d("div",null,ce,d("footer",{key:"footer"},q.map(function(e){return d("div",{id:i.slugify(e.identifier,ze),key:e.identifier},e.identifier,ae(ie(e.footnote,{inline:!0})))}))):ce}const Qe=t=>{let{children:r="",options:i}=t,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(t,n);return e.cloneElement(qe(r,i),l)};export{r as RuleType,qe as compiler,Qe as default,De as sanitizer,ze as slugify};
//# sourceMappingURL=index.modern.js.map