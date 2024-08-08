function e(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(r){if("default"!==r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}}),n.default=e,n}var n=/*#__PURE__*/e(require("react"));function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},r.apply(null,arguments)}var t,i,a=["children","options"];!function(e){e.blockQuote="0",e.breakLine="1",e.breakThematic="2",e.codeBlock="3",e.codeFenced="4",e.codeInline="5",e.footnote="6",e.footnoteReference="7",e.gfmTask="8",e.heading="9",e.headingSetext="10",e.htmlBlock="11",e.htmlComment="12",e.htmlSelfClosing="13",e.image="14",e.link="15",e.linkAngleBraceStyleDetector="16",e.linkBareUrlDetector="17",e.linkMailtoDetector="18",e.newlineCoalescer="19",e.orderedList="20",e.paragraph="21",e.ref="22",e.refImage="23",e.refLink="24",e.table="25",e.tableSeparator="26",e.text="27",e.textBolded="28",e.textEmphasized="29",e.textEscaped="30",e.textMarked="31",e.textStrikethroughed="32",e.unorderedList="33"}(t||(t={})),function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(i||(i={}));var c=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(e,n){return e[n.toLowerCase()]=n,e},{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},l=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,f=/\n{2,}$/,d=/^(\s*>[\s\S]*?)(?=\n{2,})/,p=/^ *> ?/gm,h=/^ {2,}\n/,m=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,g=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,v=/^(?:\n *)*\n/,k=/\r\n?/g,x=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,b=/^\[\^([^\]]+)]/,w=/\f/g,E=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,S=/^\s*?\[(x|\s)\]/,O=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,C=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,T=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,$=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,L=/^<!--[\s\S]*?(?:-->)/,M=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,R=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,z=/^\{.*\}$/,j=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,P=/^<([^ >]+:\/[^ >]+)>/,U=/-([a-z])?/gi,B=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,_=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,H=/^\[([^\]]*)\] ?\[([^\]]*)\]/,N=/(\[|\])/g,F=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,W=/\t/g,G=/(^ *\||\| *$)/g,Z=/^ *:-+: *$/,q=/^ *:-+ *$/,V=/^ *-+: *$/,X="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",Q=new RegExp("^([*_])\\1"+X+"\\1\\1(?!\\1)"),J=new RegExp("^([*_])"+X+"\\1(?!\\1|\\w)"),K=new RegExp("^=="+X+"=="),Y=new RegExp("^~~"+X+"~~"),ee=/^\\([^0-9A-Za-z\s])/,ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,re=/^\n+/,te=/^([ \t]*)/,ie=/\\([^\\])/g,ae=1,ce=/ *\n+$/,oe=/(?:^|\n)( *)$/,le="(?:\\d+\\.)",ue="(?:[*+-])";function se(e){return"( *)("+(e===ae?le:ue)+") +"}var fe=se(ae),de=se(2);function pe(e){return new RegExp("^"+(e===ae?fe:de))}var he=pe(ae),me=pe(2);function ge(e){return new RegExp("^"+(e===ae?fe:de)+"[^\\n]*(?:\\n(?!\\1"+(e===ae?le:ue)+" )[^\\n]*)*(\\n|$)","gm")}var ye=ge(ae),ve=ge(2);function ke(e){var n=e===ae?le:ue;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}var xe=ke(ae),be=ke(2);function we(e,n){var r=n===ae,t=r?xe:be,i=r?ye:ve,a=r?he:me;return{match:function(e,n,r){var i=oe.exec(r);return i&&(n.list||!n.inline&&!n.simple)?t.exec(e=i[1]+e):null},order:1,parse:function(e,n,t){var c=r?+e[2]:void 0,o=e[0].replace(f,"\n").match(i),l=!1;return{items:o.map(function(e,r){var i=a.exec(e)[0].length,c=new RegExp("^ {1,"+i+"}","gm"),u=e.replace(c,"").replace(a,""),s=r===o.length-1,f=-1!==u.indexOf("\n\n")||s&&l;l=f;var d,p=t.inline,h=t.list;t.list=!0,f?(t.inline=!1,d=u.replace(ce,"\n\n")):(t.inline=!0,d=u.replace(ce,""));var m=n(d,t);return t.inline=p,t.list=h,m}),ordered:r,start:c}},render:function(n,r,t){return e(n.ordered?"ol":"ul",{key:t.key,start:"20"===n.type?n.start:void 0},n.items.map(function(n,i){return e("li",{key:i},r(n,t))}))}}}var Ee=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Se=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Oe=[d,g,/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,O,A,C,L,B,ye,xe,ve,be],Ce=[].concat(Oe,[/^[^\n]+(?:  \n|\n{2,})/,T,R]);function Ae(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Te(e){return V.test(e)?"right":Z.test(e)?"center":q.test(e)?"left":null}function $e(e,n,r,t){var i=r.inTable;r.inTable=!0;var a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(function(e,i){return"|"===i.trim()?e.push(t?{type:"26"}:{type:"27",text:i}):""!==i&&e.push.apply(e,n(i,r)),e},[]);r.inTable=i;var c=[[]];return a.forEach(function(e,n){"26"===e.type?0!==n&&n!==a.length-1&&c.push([]):("27"!==e.type||null!=a[n+1]&&"26"!==a[n+1].type||(e.text=e.text.trimEnd()),c[c.length-1].push(e))}),c}function Le(e,n,r){r.inline=!0;var t=e[2]?e[2].replace(G,"").split("|").map(Te):[],i=e[3]?function(e,n,r){return e.trim().split("\n").map(function(e){return $e(e,n,r,!0)})}(e[3],n,r):[],a=$e(e[1],n,r,!!i.length);return r.inline=!1,i.length?{align:t,cells:i,header:a,type:"25"}:{children:a,type:"21"}}function Me(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function Re(e){return function(n,r){return r.inline?e.exec(n):null}}function ze(e){return function(n,r){return r.inline||r.simple?e.exec(n):null}}function je(e){return function(n,r){return r.inline||r.simple?null:e.exec(n)}}function Ie(e){return function(n){return e.exec(n)}}function Pe(e,n,r){if(n.inline||n.simple)return null;if(r&&!r.endsWith("\n"))return null;var t="";e.split("\n").every(function(e){return!Oe.some(function(n){return n.test(e)})&&(t+=e+"\n",e.trim())});var i=t.trimEnd();return""==i?null:[t,i]}function Ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function Be(e){return e.replace(ie,"$1")}function _e(e,n,r){var t=r.inline||!1,i=r.simple||!1;r.inline=!0,r.simple=!0;var a=e(n,r);return r.inline=t,r.simple=i,a}function De(e,n,r){var t=r.inline||!1,i=r.simple||!1;r.inline=!1,r.simple=!0;var a=e(n,r);return r.inline=t,r.simple=i,a}function He(e,n,r){var t=r.inline||!1;r.inline=!1;var i=e(n,r);return r.inline=t,i}var Ne=function(e,n,r){return{children:_e(n,e[1],r)}};function Fe(){return{}}function We(){return null}function Ge(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Ze(e,n,r){for(var t=e,i=n.split(".");i.length&&void 0!==(t=t[i[0]]);)i.shift();return t||r}function qe(e,n){var r=Ze(n,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:Ze(n,e+".component",e):e}function Ve(e,t){var i;void 0===e&&(e=""),void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||Ae,t.namedCodesToUnicode=t.namedCodesToUnicode?r({},o,t.namedCodesToUnicode):o;var a=t.createElement||n.createElement;function f(e,n){var i=Ze(t.overrides,e+".props",{});return a.apply(void 0,[qe(e,t.overrides),r({},n,i,{className:Ge(null==n?void 0:n.className,i.className)||void 0})].concat([].slice.call(arguments,2)))}function G(e){e=e.replace(E,"");var r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===F.test(e));for(var i=oe(ce(r?e:e.trimEnd().replace(re,"")+"\n\n",{inline:r}));"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;var a,c=t.wrapper||(r?"span":"div");if(i.length>1||t.forceWrapper)a=i;else{if(1===i.length)return"string"==typeof(a=i[0])?f("span",{key:"outer"},a):a;a=null}return n.createElement(c,{key:"outer"},a)}function Z(e){var r=e.match(u);return r?r.reduce(function(e,r,t){var i=r.indexOf("=");if(-1!==i){var a=function(e){return-1!==e.indexOf("-")&&null===e.match(M)&&(e=e.replace(U,function(e,n){return n.toUpperCase()})),e}(r.slice(0,i)).trim(),o=function(e){var n=e[0];return('"'===n||"'"===n)&&e.length>=2&&e[e.length-1]===n?e.slice(1,-1):e}(r.slice(i+1).trim()),l=c[a]||a,u=e[l]=function(e,n){return"style"===e?n.split(/;\s?/).reduce(function(e,n){var r=n.slice(0,n.indexOf(":"));return e[r.trim().replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()})]=n.slice(r.length+1).trim(),e},{}):"href"===e||"src"===e?Ue(n):(n.match(z)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(a,o);"string"==typeof u&&(T.test(u)||R.test(u))&&(e[l]=n.cloneElement(G(u.trim()),{key:t}))}else"style"!==r&&(e[c[r]||r]=!0);return e},{}):null}var q=[],V={},X=((i={})[0]={match:je(d),order:1,parse:function(e,n,r){return{children:n(e[0].replace(p,""),r)}},render:function(e,n,r){return f("blockquote",{key:r.key},n(e.children,r))}},i[1]={match:Ie(h),order:1,parse:Fe,render:function(e,n,r){return f("br",{key:r.key})}},i[2]={match:je(m),order:1,parse:Fe,render:function(e,n,r){return f("hr",{key:r.key})}},i[4]={match:je(g),order:0,parse:function(e){return{attrs:Z(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"}}},i[5]={match:ze(y),order:3,parse:function(e){return{text:e[2]}},render:function(e,n,r){return f("code",{key:r.key},e.text)}},i[6]={match:je(x),order:0,parse:function(e){return q.push({footnote:e[2],identifier:e[1]}),{}},render:We},i[7]={match:Re(b),order:1,parse:function(e){return{target:"#"+t.slugify(e[1]),text:e[1]}},render:function(e,n,r){return f("a",{key:r.key,href:Ue(e.target)},f("sup",{key:r.key},e.text))}},i[8]={match:Re(S),order:1,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},render:function(e,n,r){return f("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},i[9]={match:je(t.enforceAtxHeadings?C:O),order:1,parse:function(e,n,r){return{children:_e(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},render:function(e,n,r){return f("h"+e.level,{id:e.id,key:r.key},n(e.children,r))}},i[10]={match:je(A),order:0,parse:function(e,n,r){return{children:_e(n,e[1],r),level:"="===e[2]?1:2,type:"9"}}},i[11]={match:Ie(T),order:1,parse:function(e,n,r){var t,i=e[3].match(te),a=new RegExp("^"+i[1],"gm"),c=e[3].replace(a,""),o=(t=c,Ce.some(function(e){return e.test(t)})?He:_e),u=e[1].toLowerCase(),s=-1!==l.indexOf(u),f={attrs:Z(e[2]),noInnerParse:s,tag:(s?u:e[1]).trim()};return r.inAnchor=r.inAnchor||"a"===u,s?f.text=e[3]:f.children=o(n,c,r),r.inAnchor=!1,f},render:function(e,n,t){return f(e.tag,r({key:t.key},e.attrs),e.text||n(e.children,t))}},i[13]={match:Ie(R),order:1,parse:function(e){return{attrs:Z(e[2]||""),tag:e[1].trim()}},render:function(e,n,t){return f(e.tag,r({},e.attrs,{key:t.key}))}},i[12]={match:Ie(L),order:1,parse:function(){return{}},render:We},i[14]={match:ze(Se),order:1,parse:function(e){return{alt:e[1],target:Be(e[2]),title:e[3]}},render:function(e,n,r){return f("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ue(e.target)})}},i[15]={match:Re(Ee),order:3,parse:function(e,n,r){return{children:De(n,e[1],r),target:Be(e[2]),title:e[3]}},render:function(e,n,r){return f("a",{key:r.key,href:Ue(e.target),title:e.title},n(e.children,r))}},i[16]={match:Re(P),order:0,parse:function(e){return{children:[{text:e[1],type:"27"}],target:e[1],type:"15"}}},i[17]={match:function(e,n){return n.inAnchor?null:Re(j)(e,n)},order:0,parse:function(e){return{children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"}}},i[18]={match:Re(I),order:0,parse:function(e){var n=e[1],r=e[1];return s.test(r)||(r="mailto:"+r),{children:[{text:n.replace("mailto:",""),type:"27"}],target:r,type:"15"}}},i[20]=we(f,ae),i[33]=we(f,2),i[19]={match:je(v),order:3,parse:Fe,render:function(){return"\n"}},i[21]={match:Pe,order:3,parse:Ne,render:function(e,n,r){return f("p",{key:r.key},n(e.children,r))}},i[22]={match:Re(_),order:0,parse:function(e){return V[e[1]]={target:e[2],title:e[4]},{}},render:We},i[23]={match:ze(D),order:0,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},render:function(e,n,r){return V[e.ref]?f("img",{key:r.key,alt:e.alt,src:Ue(V[e.ref].target),title:V[e.ref].title}):null}},i[24]={match:Re(H),order:0,parse:function(e,n,r){return{children:n(e[1],r),fallbackChildren:n(e[0].replace(N,"\\$1"),r),ref:e[2]}},render:function(e,n,r){return V[e.ref]?f("a",{key:r.key,href:Ue(V[e.ref].target),title:V[e.ref].title},n(e.children,r)):f("span",{key:r.key},n(e.fallbackChildren,r))}},i[25]={match:je(B),order:1,parse:Le,render:function(e,n,r){var t=e;return f("table",{key:r.key},f("thead",null,f("tr",null,t.header.map(function(e,i){return f("th",{key:i,style:Me(t,i)},n(e,r))}))),f("tbody",null,t.cells.map(function(e,i){return f("tr",{key:i},e.map(function(e,i){return f("td",{key:i,style:Me(t,i)},n(e,r))}))})))}},i[27]={match:Ie(ne),order:4,parse:function(e){return{text:e[0].replace($,function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e})}},render:function(e){return e.text}},i[28]={match:ze(Q),order:2,parse:function(e,n,r){return{children:n(e[2],r)}},render:function(e,n,r){return f("strong",{key:r.key},n(e.children,r))}},i[29]={match:ze(J),order:3,parse:function(e,n,r){return{children:n(e[2],r)}},render:function(e,n,r){return f("em",{key:r.key},n(e.children,r))}},i[30]={match:ze(ee),order:1,parse:function(e){return{text:e[1],type:"27"}}},i[31]={match:ze(K),order:3,parse:Ne,render:function(e,n,r){return f("mark",{key:r.key},n(e.children,r))}},i[32]={match:ze(Y),order:3,parse:Ne,render:function(e,n,r){return f("del",{key:r.key},n(e.children,r))}},i);!0===t.disableParsingRawHTML&&(delete X[11],delete X[13]);var ie,ce=function(e){var n=Object.keys(e);function r(t,i){for(var a=[],c="";t;)for(var o=0;o<n.length;){var l=n[o],u=e[l],s=u.match(t,i,c);if(s){var f=s[0];t=t.substring(f.length);var d=u.parse(s,r,i);null==d.type&&(d.type=l),a.push(d),c=f;break}o++}return a}return n.sort(function(n,r){var t=e[n].order,i=e[r].order;return t!==i?t-i:n<r?-1:1}),function(e,n){return r(function(e){return e.replace(k,"\n").replace(w,"").replace(W,"    ")}(e),n)}}(X),oe=(ie=function(e,n){return function(r,t,i){var a=e[r.type].render;return n?n(function(){return a(r,t,i)},r,t,i):a(r,t,i)}}(X,t.renderRule),function e(n,r){if(void 0===r&&(r={}),Array.isArray(n)){for(var t=r.key,i=[],a=!1,c=0;c<n.length;c++){r.key=c;var o=e(n[c],r),l="string"==typeof o;l&&a?i[i.length-1]+=o:null!==o&&i.push(o),a=l}return r.key=t,i}return ie(n,e,r)}),le=G(e);return q.length?f("div",null,le,f("footer",{key:"footer"},q.map(function(e){return f("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,oe(ce(e.footnote,{inline:!0})))}))):le}var Xe=function(e){var r=e.children,t=void 0===r?"":r,i=e.options,c=function(e,n){if(null==e)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.includes(t))continue;r[t]=e[t]}return r}(e,a);return n.cloneElement(Ve(t,i),c)};Object.assign(Xe,{compiler:Ve}),module.exports=Xe;
//# sourceMappingURL=index.cjs.map
