function e(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var t=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:function(){return e[n]}})}}),r.default=e,r}var r=/*#__PURE__*/e(require("react"));function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n.apply(null,arguments)}var t,i,a=["children","options"];!function(e){e.blockQuote="0",e.breakLine="1",e.breakThematic="2",e.codeBlock="3",e.codeFenced="4",e.codeInline="5",e.footnote="6",e.footnoteReference="7",e.gfmTask="8",e.heading="9",e.headingSetext="10",e.htmlBlock="11",e.htmlComment="12",e.htmlSelfClosing="13",e.image="14",e.link="15",e.linkAngleBraceStyleDetector="16",e.linkBareUrlDetector="17",e.linkMailtoDetector="18",e.newlineCoalescer="19",e.orderedList="20",e.paragraph="21",e.ref="22",e.refImage="23",e.refLink="24",e.table="25",e.tableSeparator="26",e.text="27",e.textBolded="28",e.textEmphasized="29",e.textEscaped="30",e.textMarked="31",e.textStrikethroughed="32",e.unorderedList="33"}(t||(t={})),function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(i||(i={}));var c=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(e,r){return e[r.toLowerCase()]=r,e},{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},l=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,f=/\n{2,}$/,d=/^(\s*>[\s\S]*?)(?=\n{2,})/,p=/^ *> ?/gm,h=/^ {2,}\n/,m=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,g=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,x=/\r\n?/g,b=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,w=/^\[\^([^\]]+)]/,E=/\f/g,S=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,O=/^\s*?\[(x|\s)\]/,C=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,$=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,T=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,L=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,M=/^<!--[\s\S]*?(?:-->)/,R=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,z=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,j=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,P=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,B=/-([a-z])?/gi,N=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,_=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,D=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,H=/^\[([^\]]*)\] ?\[([^\]]*)\]/,F=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,G=/\t/g,Z=/(^ *\||\| *$)/g,q=/^ *:-+: *$/,V=/^ *:-+ *$/,X=/^ *-+: *$/,Q="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",J=new RegExp("^([*_])\\1"+Q+"\\1\\1(?!\\1)"),K=new RegExp("^([*_])"+Q+"\\1(?!\\1|\\w)"),Y=new RegExp("^=="+Q+"=="),ee=new RegExp("^~~"+Q+"~~"),re=/^\\([^0-9A-Za-z\s])/,ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,te=/^\n+/,ie=/^([ \t]*)/,ae=/\\([^\\])/g,ce=1,oe=/ *\n+$/,le=/(?:^|\n)( *)$/,ue="(?:\\d+\\.)",se="(?:[*+-])";function fe(e){return"( *)("+(e===ce?ue:se)+") +"}var de=fe(ce),pe=fe(2);function he(e){return new RegExp("^"+(e===ce?de:pe))}var me=he(ce),ge=he(2);function ye(e){return new RegExp("^"+(e===ce?de:pe)+"[^\\n]*(?:\\n(?!\\1"+(e===ce?ue:se)+" )[^\\n]*)*(\\n|$)","gm")}var ve=ye(ce),ke=ye(2);function xe(e){var r=e===ce?ue:se;return new RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}var be=xe(ce),we=xe(2);function Ee(e,r){var n=r===ce,t=n?be:we,i=n?ve:ke,a=n?me:ge;return{match:function(e,r,n){var i=le.exec(n);return i&&(r.list||!r.inline&&!r.simple)?t.exec(e=i[1]+e):null},order:1,parse:function(e,r,t){var c=n?+e[2]:void 0,o=e[0].replace(f,"\n").match(i),l=!1;return{items:o.map(function(e,n){var i=a.exec(e)[0].length,c=new RegExp("^ {1,"+i+"}","gm"),u=e.replace(c,"").replace(a,""),s=n===o.length-1,f=-1!==u.indexOf("\n\n")||s&&l;l=f;var d,p=t.inline,h=t.list;t.list=!0,f?(t.inline=!1,d=u.replace(oe,"\n\n")):(t.inline=!0,d=u.replace(oe,""));var m=r(d,t);return t.inline=p,t.list=h,m}),ordered:n,start:c}},render:function(r,n,t){return e(r.ordered?"ol":"ul",{key:t.key,start:"20"===r.type?r.start:void 0},r.items.map(function(r,i){return e("li",{key:i},n(r,t))}))}}}var Se=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Oe=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Ce=[d,g,y,C,$,A,M,N,ve,be,ke,we],Ae=[].concat(Ce,[/^[^\n]+(?:  \n|\n{2,})/,T,z]);function $e(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Te(e){return X.test(e)?"right":q.test(e)?"center":V.test(e)?"left":null}function Le(e,r,n,t){var i=n.inTable;n.inTable=!0;var a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(function(e,i){return"|"===i.trim()?e.push(t?{type:"26"}:{type:"27",text:i}):""!==i&&e.push.apply(e,r(i,n)),e},[]);n.inTable=i;var c=[[]];return a.forEach(function(e,r){"26"===e.type?0!==r&&r!==a.length-1&&c.push([]):("27"!==e.type||null!=a[r+1]&&"26"!==a[r+1].type||(e.text=e.text.trimEnd()),c[c.length-1].push(e))}),c}function Me(e,r,n){n.inline=!0;var t=e[2]?e[2].replace(Z,"").split("|").map(Te):[],i=e[3]?function(e,r,n){return e.trim().split("\n").map(function(e){return Le(e,r,n,!0)})}(e[3],r,n):[],a=Le(e[1],r,n,!!i.length);return n.inline=!1,i.length?{align:t,cells:i,header:a,type:"25"}:{children:a,type:"21"}}function Re(e,r){return null==e.align[r]?{}:{textAlign:e.align[r]}}function ze(e){return function(r,n){return n.inline?e.exec(r):null}}function je(e){return function(r,n){return n.inline||n.simple?e.exec(r):null}}function Ie(e){return function(r,n){return n.inline||n.simple?null:e.exec(r)}}function Pe(e){return function(r){return e.exec(r)}}function Ue(e,r,n){if(r.inline||r.simple)return null;if(n&&!n.endsWith("\n"))return null;var t="";e.split("\n").every(function(e){return!Ce.some(function(r){return r.test(e)})&&(t+=e+"\n",e.trim())});var i=t.trimEnd();return""==i?null:[t,i]}function Be(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(e){return null}return e}function Ne(e){return e.replace(ae,"$1")}function _e(e,r,n){var t=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;var a=e(r,n);return n.inline=t,n.simple=i,a}function De(e,r,n){var t=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;var a=e(r,n);return n.inline=t,n.simple=i,a}function He(e,r,n){var t=n.inline||!1;n.inline=!1;var i=e(r,n);return n.inline=t,i}var Fe=function(e,r,n){return{children:_e(r,e[1],n)}};function We(){return{}}function Ge(){return null}function Ze(){return[].slice.call(arguments).filter(Boolean).join(" ")}function qe(e,r,n){for(var t=e,i=r.split(".");i.length&&void 0!==(t=t[i[0]]);)i.shift();return t||n}function Ve(e,r){var n=qe(r,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:qe(r,e+".component",e):e}function Xe(e,t){var i;void 0===e&&(e=""),void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||$e,t.namedCodesToUnicode=t.namedCodesToUnicode?n({},o,t.namedCodesToUnicode):o;var a=t.createElement||r.createElement;function f(e,r){var i=qe(t.overrides,e+".props",{});return a.apply(void 0,[Ve(e,t.overrides),n({},r,i,{className:Ze(null==r?void 0:r.className,i.className)||void 0})].concat([].slice.call(arguments,2)))}function Z(e){e=e.replace(S,"");var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===W.test(e));for(var i=le(oe(n?e:e.trimEnd().replace(te,"")+"\n\n",{inline:n}));"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;var a,c=t.wrapper||(n?"span":"div");if(i.length>1||t.forceWrapper)a=i;else{if(1===i.length)return"string"==typeof(a=i[0])?f("span",{key:"outer"},a):a;a=null}return r.createElement(c,{key:"outer"},a)}function q(e){var n=e.match(u);return n?n.reduce(function(e,n,t){var i=n.indexOf("=");if(-1!==i){var a=function(e){return-1!==e.indexOf("-")&&null===e.match(R)&&(e=e.replace(B,function(e,r){return r.toUpperCase()})),e}(n.slice(0,i)).trim(),o=function(e){var r=e[0];return('"'===r||"'"===r)&&e.length>=2&&e[e.length-1]===r?e.slice(1,-1):e}(n.slice(i+1).trim()),l=c[a]||a,u=e[l]=function(e,r){return"style"===e?r.split(/;\s?/).reduce(function(e,r){var n=r.slice(0,r.indexOf(":"));return e[n.trim().replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()})]=r.slice(n.length+1).trim(),e},{}):"href"===e||"src"===e?Be(r):(r.match(j)&&(r=r.slice(1,r.length-1)),"true"===r||"false"!==r&&r)}(a,o);"string"==typeof u&&(T.test(u)||z.test(u))&&(e[l]=r.cloneElement(Z(u.trim()),{key:t}))}else"style"!==n&&(e[c[n]||n]=!0);return e},{}):null}var V=[],X={},Q=((i={})[0]={match:Ie(d),order:1,parse:function(e,r,n){return{children:r(e[0].replace(p,""),n)}},render:function(e,r,n){return f("blockquote",{key:n.key},r(e.children,n))}},i[1]={match:Pe(h),order:1,parse:We,render:function(e,r,n){return f("br",{key:n.key})}},i[2]={match:Ie(m),order:1,parse:We,render:function(e,r,n){return f("hr",{key:n.key})}},i[3]={match:Ie(y),order:0,parse:function(e){return{lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}},render:function(e,r,t){return f("pre",{key:t.key},f("code",n({},e.attrs,{className:e.lang?"lang-"+e.lang:""}),e.text))}},i[4]={match:Ie(g),order:0,parse:function(e){return{attrs:q(e[3]||""),lang:e[2]||void 0,text:e[4],type:"3"}}},i[5]={match:je(v),order:3,parse:function(e){return{text:e[2]}},render:function(e,r,n){return f("code",{key:n.key},e.text)}},i[6]={match:Ie(b),order:0,parse:function(e){return V.push({footnote:e[2],identifier:e[1]}),{}},render:Ge},i[7]={match:ze(w),order:1,parse:function(e){return{target:"#"+t.slugify(e[1]),text:e[1]}},render:function(e,r,n){return f("a",{key:n.key,href:Be(e.target)},f("sup",{key:n.key},e.text))}},i[8]={match:ze(O),order:1,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},render:function(e,r,n){return f("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},i[9]={match:Ie(t.enforceAtxHeadings?A:C),order:1,parse:function(e,r,n){return{children:_e(r,e[2],n),id:t.slugify(e[2]),level:e[1].length}},render:function(e,r,n){return f("h"+e.level,{id:e.id,key:n.key},r(e.children,n))}},i[10]={match:Ie($),order:0,parse:function(e,r,n){return{children:_e(r,e[1],n),level:"="===e[2]?1:2,type:"9"}}},i[11]={match:Pe(T),order:1,parse:function(e,r,n){var t,i=e[3].match(ie),a=new RegExp("^"+i[1],"gm"),c=e[3].replace(a,""),o=(t=c,Ae.some(function(e){return e.test(t)})?He:_e),u=e[1].toLowerCase(),s=-1!==l.indexOf(u),f={attrs:q(e[2]),noInnerParse:s,tag:(s?u:e[1]).trim()};return n.inAnchor=n.inAnchor||"a"===u,s?f.text=e[3]:f.children=o(r,c,n),n.inAnchor=!1,f},render:function(e,r,t){return f(e.tag,n({key:t.key},e.attrs),e.text||r(e.children,t))}},i[13]={match:Pe(z),order:1,parse:function(e){return{attrs:q(e[2]||""),tag:e[1].trim()}},render:function(e,r,t){return f(e.tag,n({},e.attrs,{key:t.key}))}},i[12]={match:Pe(M),order:1,parse:function(){return{}},render:Ge},i[14]={match:je(Oe),order:1,parse:function(e){return{alt:e[1],target:Ne(e[2]),title:e[3]}},render:function(e,r,n){return f("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:Be(e.target)})}},i[15]={match:ze(Se),order:3,parse:function(e,r,n){return{children:De(r,e[1],n),target:Ne(e[2]),title:e[3]}},render:function(e,r,n){return f("a",{key:n.key,href:Be(e.target),title:e.title},r(e.children,n))}},i[16]={match:ze(U),order:0,parse:function(e){return{children:[{text:e[1],type:"27"}],target:e[1],type:"15"}}},i[17]={match:function(e,r){return r.inAnchor?null:ze(I)(e,r)},order:0,parse:function(e){return{children:[{text:e[1],type:"27"}],target:e[1],title:void 0,type:"15"}}},i[18]={match:ze(P),order:0,parse:function(e){var r=e[1],n=e[1];return s.test(n)||(n="mailto:"+n),{children:[{text:r.replace("mailto:",""),type:"27"}],target:n,type:"15"}}},i[20]=Ee(f,ce),i[33]=Ee(f,2),i[19]={match:Ie(k),order:3,parse:We,render:function(){return"\n"}},i[21]={match:Ue,order:3,parse:Fe,render:function(e,r,n){return f("p",{key:n.key},r(e.children,n))}},i[22]={match:ze(_),order:0,parse:function(e){return X[e[1]]={target:e[2],title:e[4]},{}},render:Ge},i[23]={match:je(D),order:0,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},render:function(e,r,n){return X[e.ref]?f("img",{key:n.key,alt:e.alt,src:Be(X[e.ref].target),title:X[e.ref].title}):null}},i[24]={match:ze(H),order:0,parse:function(e,r,n){return{children:r(e[1],n),fallbackChildren:r(e[0].replace(F,"\\$1"),n),ref:e[2]}},render:function(e,r,n){return X[e.ref]?f("a",{key:n.key,href:Be(X[e.ref].target),title:X[e.ref].title},r(e.children,n)):f("span",{key:n.key},r(e.fallbackChildren,n))}},i[25]={match:Ie(N),order:1,parse:Me,render:function(e,r,n){var t=e;return f("table",{key:n.key},f("thead",null,f("tr",null,t.header.map(function(e,i){return f("th",{key:i,style:Re(t,i)},r(e,n))}))),f("tbody",null,t.cells.map(function(e,i){return f("tr",{key:i},e.map(function(e,i){return f("td",{key:i,style:Re(t,i)},r(e,n))}))})))}},i[27]={match:Pe(ne),order:4,parse:function(e){return{text:e[0].replace(L,function(e,r){return t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e})}},render:function(e){return e.text}},i[28]={match:je(J),order:2,parse:function(e,r,n){return{children:r(e[2],n)}},render:function(e,r,n){return f("strong",{key:n.key},r(e.children,n))}},i[29]={match:je(K),order:3,parse:function(e,r,n){return{children:r(e[2],n)}},render:function(e,r,n){return f("em",{key:n.key},r(e.children,n))}},i[30]={match:je(re),order:1,parse:function(e){return{text:e[1],type:"27"}}},i[31]={match:je(Y),order:3,parse:Fe,render:function(e,r,n){return f("mark",{key:n.key},r(e.children,n))}},i[32]={match:je(ee),order:3,parse:Fe,render:function(e,r,n){return f("del",{key:n.key},r(e.children,n))}},i);!0===t.disableParsingRawHTML&&(delete Q[11],delete Q[13]);var ae,oe=function(e){var r=Object.keys(e);function n(t,i){for(var a=[],c="";t;)for(var o=0;o<r.length;){var l=r[o],u=e[l],s=u.match(t,i,c);if(s){var f=s[0];t=t.substring(f.length);var d=u.parse(s,n,i);null==d.type&&(d.type=l),a.push(d),c=f;break}o++}return a}return r.sort(function(r,n){var t=e[r].order,i=e[n].order;return t!==i?t-i:r<n?-1:1}),function(e,r){return n(function(e){return e.replace(x,"\n").replace(E,"").replace(G,"    ")}(e),r)}}(Q),le=(ae=function(e,r){return function(n,t,i){var a=e[n.type].render;return r?r(function(){return a(n,t,i)},n,t,i):a(n,t,i)}}(Q,t.renderRule),function e(r,n){if(void 0===n&&(n={}),Array.isArray(r)){for(var t=n.key,i=[],a=!1,c=0;c<r.length;c++){n.key=c;var o=e(r[c],n),l="string"==typeof o;l&&a?i[i.length-1]+=o:null!==o&&i.push(o),a=l}return n.key=t,i}return ae(r,e,n)}),ue=Z(e);return V.length?f("div",null,ue,f("footer",{key:"footer"},V.map(function(e){return f("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,le(oe(e.footnote,{inline:!0})))}))):ue}var Qe=function(e){var n=e.children,t=void 0===n?"":n,i=e.options,c=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.includes(t))continue;n[t]=e[t]}return n}(e,a);return r.cloneElement(Xe(t,i),c)};Object.assign(Qe,{compiler:Xe}),module.exports=Qe;
//# sourceMappingURL=index.cjs.map
