function e(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var t=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:function(){return e[n]}})}}),r.default=e,r}var r=/*#__PURE__*/e(require("react"));function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n.apply(null,arguments)}var t,i=["children","options"],a={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};!function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(t||(t={}));var l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(e,r){return e[r.toLowerCase()]=r,e},{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],u=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,d=/\n{2,}$/,f=/^(\s*>[\s\S]*?)(?=\n{2,})/,p=/^ *> ?/gm,h=/^ {2,}\n/,m=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,g=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,v=/^(?:\n *)*\n/,x=/\r\n?/g,b=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,E=/^\[\^([^\]]+)]/,S=/\f/g,w=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,C=/^\s*?\[(x|\s)\]/,z=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,O=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,L=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,T=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,A=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,$=/^<!--[\s\S]*?(?:-->)/,M=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,R=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,B=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,j=/^<([^ >]+@[^ >]+)>/,D=/^<([^ >]+:\/[^ >]+)>/,U=/-([a-z])?/gi,P=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,N=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,_=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,H=/^\[([^\]]*)\] ?\[([^\]]*)\]/,F=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,G=/\t/g,Z=/(^ *\||\| *$)/g,q=/^ *:-+: *$/,Q=/^ *:-+ *$/,V=/^ *-+: *$/,X="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",J=new RegExp("^([*_])\\1"+X+"\\1\\1(?!\\1)"),K=new RegExp("^([*_])"+X+"\\1(?!\\1|\\w)"),Y=new RegExp("^=="+X+"=="),ee=new RegExp("^~~"+X+"~~"),re=/^\\([^0-9A-Za-z\s])/,ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,te=/^\n+/,ie=/^([ \t]*)/,ae=/\\([^\\])/g,le=1,oe=/ *\n+$/,ce=/(?:^|\n)( *)$/,ue="(?:\\d+\\.)",se="(?:[*+-])";function de(e){return"( *)("+(e===le?ue:se)+") +"}var fe=de(le),pe=de(2);function he(e){return new RegExp("^"+(e===le?fe:pe))}var me=he(le),ge=he(2);function ye(e){return new RegExp("^"+(e===le?fe:pe)+"[^\\n]*(?:\\n(?!\\1"+(e===le?ue:se)+" )[^\\n]*)*(\\n|$)","gm")}var ke=ye(le),ve=ye(2);function xe(e){var r=e===le?ue:se;return new RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}var be=xe(le),Ee=xe(2);function Se(e,r){var n=r===le,t=n?be:Ee,i=n?ke:ve,l=n?me:ge;return{match:function(e,r,n){var i=ce.exec(n);return i&&(r.list||!r.inline&&!r.simple)?t.exec(e=i[1]+e):null},order:1,parse:function(e,r,t){var a=n?+e[2]:void 0,o=e[0].replace(d,"\n").match(i),c=!1;return{items:o.map(function(e,n){var i=l.exec(e)[0].length,a=new RegExp("^ {1,"+i+"}","gm"),u=e.replace(a,"").replace(l,""),s=n===o.length-1,d=-1!==u.indexOf("\n\n")||s&&c;c=d;var f,p=t.inline,h=t.list;t.list=!0,d?(t.inline=!1,f=u.replace(oe,"\n\n")):(t.inline=!0,f=u.replace(oe,""));var m=r(f,t);return t.inline=p,t.list=h,m}),ordered:n,start:a}},render:function(r,n,t){return e(r.ordered?"ol":"ul",{key:t.key,start:r.type===a.orderedList?r.start:void 0},r.items.map(function(r,i){return e("li",{key:i},n(r,t))}))}}}var we=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Ce=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ze=[f,g,y,z,L,O,$,P,ke,be,ve,Ee],Oe=[].concat(ze,[/^[^\n]+(?:  \n|\n{2,})/,T,R]);function Le(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Te(e){return V.test(e)?"right":q.test(e)?"center":Q.test(e)?"left":null}function Ae(e,r,n,t){var i=n.inTable;n.inTable=!0;var l=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(function(e,i){return"|"===i.trim()?e.push(t?{type:a.tableSeparator}:{type:a.text,text:i}):""!==i&&e.push.apply(e,r(i,n)),e},[]);n.inTable=i;var o=[[]];return l.forEach(function(e,r){e.type===a.tableSeparator?0!==r&&r!==l.length-1&&o.push([]):(e.type!==a.text||null!=l[r+1]&&l[r+1].type!==a.tableSeparator||(e.text=e.text.trimEnd()),o[o.length-1].push(e))}),o}function $e(e,r,n){n.inline=!0;var t=e[2]?e[2].replace(Z,"").split("|").map(Te):[],i=e[3]?function(e,r,n){return e.trim().split("\n").map(function(e){return Ae(e,r,n,!0)})}(e[3],r,n):[],l=Ae(e[1],r,n,!!i.length);return n.inline=!1,i.length?{align:t,cells:i,header:l,type:a.table}:{children:l,type:a.paragraph}}function Me(e,r){return null==e.align[r]?{}:{textAlign:e.align[r]}}function Re(e){return function(r,n){return n.inline?e.exec(r):null}}function Be(e){return function(r,n){return n.inline||n.simple?e.exec(r):null}}function Ie(e){return function(r,n){return n.inline||n.simple?null:e.exec(r)}}function je(e){return function(r){return e.exec(r)}}function De(e,r,n){if(r.inline||r.simple)return null;if(n&&!n.endsWith("\n"))return null;var t="";e.split("\n").every(function(e){return!ze.some(function(r){return r.test(e)})&&(t+=e+"\n",e.trim())});var i=t.trimEnd();return""==i?null:[t,i]}function Ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function Pe(e){return e.replace(ae,"$1")}function Ne(e,r,n){var t=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;var a=e(r,n);return n.inline=t,n.simple=i,a}function _e(e,r,n){var t=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;var a=e(r,n);return n.inline=t,n.simple=i,a}function He(e,r,n){var t=n.inline||!1;n.inline=!1;var i=e(r,n);return n.inline=t,i}var Fe=function(e,r,n){return{children:Ne(r,e[1],n)}};function We(){return{}}function Ge(){return null}function Ze(){return[].slice.call(arguments).filter(Boolean).join(" ")}function qe(e,r,n){for(var t=e,i=r.split(".");i.length&&void 0!==(t=t[i[0]]);)i.shift();return t||n}function Qe(e,r){var n=qe(r,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:qe(r,e+".component",e):e}function Ve(e,t){var i;function d(e,r){var i,a=qe(t.overrides,e+".props",{});return(i=t).createElement.apply(i,[Qe(e,t.overrides),n({},r,a,{className:Ze(null==r?void 0:r.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function Z(e){e=e.replace(w,"");var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===W.test(e));for(var i=ce(oe(n?e:e.trimEnd().replace(te,"")+"\n\n",{inline:n}));"string"==typeof i[i.length-1]&&!i[i.length-1].trim();)i.pop();if(null===t.wrapper)return i;var a,l=t.wrapper||(n?"span":"div");if(i.length>1||t.forceWrapper)a=i;else{if(1===i.length)return"string"==typeof(a=i[0])?d("span",{key:"outer"},a):a;a=null}return r.createElement(l,{key:"outer"},a)}function q(e,n){var i=n.match(u);return i?i.reduce(function(n,i,a){var o=i.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(M)&&(e=e.replace(U,function(e,r){return r.toUpperCase()})),e}(i.slice(0,o)).trim(),u=function(e){var r=e[0];return('"'===r||"'"===r)&&e.length>=2&&e[e.length-1]===r?e.slice(1,-1):e}(i.slice(o+1).trim()),s=l[c]||c,d=n[s]=function(e,r,n,t){return"style"===r?n.split(/;\s?/).reduce(function(e,r){var n=r.slice(0,r.indexOf(":"));return e[n.trim().replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()})]=r.slice(n.length+1).trim(),e},{}):"href"===r||"src"===r?t(n,e,r):(n.match(B)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(e,c,u,t.sanitizer);"string"==typeof d&&(T.test(d)||R.test(d))&&(n[s]=r.cloneElement(Z(d.trim()),{key:a}))}else"style"!==i&&(n[l[i]||i]=!0);return n},{}):null}void 0===e&&(e=""),void 0===t&&(t={}),t.overrides=t.overrides||{},t.sanitizer=t.sanitizer||Ue,t.slugify=t.slugify||Le,t.namedCodesToUnicode=t.namedCodesToUnicode?n({},o,t.namedCodesToUnicode):o,t.createElement=t.createElement||r.createElement;var Q=[],V={},X=((i={})[a.blockQuote]={match:Ie(f),order:1,parse:function(e,r,n){return{children:r(e[0].replace(p,""),n)}},render:function(e,r,n){return d("blockquote",{key:n.key},r(e.children,n))}},i[a.breakLine]={match:je(h),order:1,parse:We,render:function(e,r,n){return d("br",{key:n.key})}},i[a.breakThematic]={match:Ie(m),order:1,parse:We,render:function(e,r,n){return d("hr",{key:n.key})}},i[a.codeBlock]={match:Ie(y),order:0,parse:function(e){return{lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}},render:function(e,r,t){return d("pre",{key:t.key},d("code",n({},e.attrs,{className:e.lang?"lang-"+e.lang:""}),e.text))}},i[a.codeFenced]={match:Ie(g),order:0,parse:function(e){return{attrs:q("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:a.codeBlock}}},i[a.codeInline]={match:Be(k),order:3,parse:function(e){return{text:e[2]}},render:function(e,r,n){return d("code",{key:n.key},e.text)}},i[a.footnote]={match:Ie(b),order:0,parse:function(e){return Q.push({footnote:e[2],identifier:e[1]}),{}},render:Ge},i[a.footnoteReference]={match:Re(E),order:1,parse:function(e){return{target:"#"+t.slugify(e[1],Le),text:e[1]}},render:function(e,r,n){return d("a",{key:n.key,href:t.sanitizer(e.target,"a","href")},d("sup",{key:n.key},e.text))}},i[a.gfmTask]={match:Re(C),order:1,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},render:function(e,r,n){return d("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},i[a.heading]={match:Ie(t.enforceAtxHeadings?O:z),order:1,parse:function(e,r,n){return{children:Ne(r,e[2],n),id:t.slugify(e[2],Le),level:e[1].length}},render:function(e,r,n){return d("h"+e.level,{id:e.id,key:n.key},r(e.children,n))}},i[a.headingSetext]={match:Ie(L),order:0,parse:function(e,r,n){return{children:Ne(r,e[1],n),level:"="===e[2]?1:2,type:a.heading}}},i[a.htmlBlock]={match:je(T),order:1,parse:function(e,r,n){var t,i=e[3].match(ie),a=new RegExp("^"+i[1],"gm"),l=e[3].replace(a,""),o=(t=l,Oe.some(function(e){return e.test(t)})?He:Ne),u=e[1].toLowerCase(),s=-1!==c.indexOf(u),d=(s?u:e[1]).trim(),f={attrs:q(d,e[2]),noInnerParse:s,tag:d};return n.inAnchor=n.inAnchor||"a"===u,s?f.text=e[3]:f.children=o(r,l,n),n.inAnchor=!1,f},render:function(e,r,t){return d(e.tag,n({key:t.key},e.attrs),e.text||r(e.children,t))}},i[a.htmlSelfClosing]={match:je(R),order:1,parse:function(e){var r=e[1].trim();return{attrs:q(r,e[2]||""),tag:r}},render:function(e,r,t){return d(e.tag,n({},e.attrs,{key:t.key}))}},i[a.htmlComment]={match:je($),order:1,parse:function(){return{}},render:Ge},i[a.image]={match:Be(Ce),order:1,parse:function(e){return{alt:e[1],target:Pe(e[2]),title:e[3]}},render:function(e,r,n){return d("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:t.sanitizer(e.target,"img","src")})}},i[a.link]={match:Re(we),order:3,parse:function(e,r,n){return{children:_e(r,e[1],n),target:Pe(e[2]),title:e[3]}},render:function(e,r,n){return d("a",{key:n.key,href:t.sanitizer(e.target,"a","href"),title:e.title},r(e.children,n))}},i[a.linkAngleBraceStyleDetector]={match:Re(D),order:0,parse:function(e){return{children:[{text:e[1],type:a.text}],target:e[1],type:a.link}}},i[a.linkBareUrlDetector]={match:function(e,r){return r.inAnchor?null:Re(I)(e,r)},order:0,parse:function(e){return{children:[{text:e[1],type:a.text}],target:e[1],title:void 0,type:a.link}}},i[a.linkMailtoDetector]={match:Re(j),order:0,parse:function(e){var r=e[1],n=e[1];return s.test(n)||(n="mailto:"+n),{children:[{text:r.replace("mailto:",""),type:a.text}],target:n,type:a.link}}},i[a.orderedList]=Se(d,le),i[a.unorderedList]=Se(d,2),i[a.newlineCoalescer]={match:Ie(v),order:3,parse:We,render:function(){return"\n"}},i[a.paragraph]={match:De,order:3,parse:Fe,render:function(e,r,n){return d("p",{key:n.key},r(e.children,n))}},i[a.ref]={match:Re(N),order:0,parse:function(e){return V[e[1]]={target:e[2],title:e[4]},{}},render:Ge},i[a.refImage]={match:Be(_),order:0,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},render:function(e,r,n){return V[e.ref]?d("img",{key:n.key,alt:e.alt,src:t.sanitizer(V[e.ref].target,"img","src"),title:V[e.ref].title}):null}},i[a.refLink]={match:Re(H),order:0,parse:function(e,r,n){return{children:r(e[1],n),fallbackChildren:r(e[0].replace(F,"\\$1"),n),ref:e[2]}},render:function(e,r,n){return V[e.ref]?d("a",{key:n.key,href:t.sanitizer(V[e.ref].target,"a","href"),title:V[e.ref].title},r(e.children,n)):d("span",{key:n.key},r(e.fallbackChildren,n))}},i[a.table]={match:Ie(P),order:1,parse:$e,render:function(e,r,n){var t=e;return d("table",{key:n.key},d("thead",null,d("tr",null,t.header.map(function(e,i){return d("th",{key:i,style:Me(t,i)},r(e,n))}))),d("tbody",null,t.cells.map(function(e,i){return d("tr",{key:i},e.map(function(e,i){return d("td",{key:i,style:Me(t,i)},r(e,n))}))})))}},i[a.text]={match:je(ne),order:4,parse:function(e){return{text:e[0].replace(A,function(e,r){return t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e})}},render:function(e){return e.text}},i[a.textBolded]={match:Be(J),order:2,parse:function(e,r,n){return{children:r(e[2],n)}},render:function(e,r,n){return d("strong",{key:n.key},r(e.children,n))}},i[a.textEmphasized]={match:Be(K),order:3,parse:function(e,r,n){return{children:r(e[2],n)}},render:function(e,r,n){return d("em",{key:n.key},r(e.children,n))}},i[a.textEscaped]={match:Be(re),order:1,parse:function(e){return{text:e[1],type:a.text}}},i[a.textMarked]={match:Be(Y),order:3,parse:Fe,render:function(e,r,n){return d("mark",{key:n.key},r(e.children,n))}},i[a.textStrikethroughed]={match:Be(ee),order:3,parse:Fe,render:function(e,r,n){return d("del",{key:n.key},r(e.children,n))}},i);!0===t.disableParsingRawHTML&&(delete X[a.htmlBlock],delete X[a.htmlSelfClosing]);var ae,oe=function(e){var r=Object.keys(e);function n(t,i){for(var a=[],l="";t;)for(var o=0;o<r.length;){var c=r[o],u=e[c],s=u.match(t,i,l);if(s){var d=s[0];t=t.substring(d.length);var f=u.parse(s,n,i);null==f.type&&(f.type=c),a.push(f),l=d;break}o++}return a}return r.sort(function(r,n){var t=e[r].order,i=e[n].order;return t!==i?t-i:r<n?-1:1}),function(e,r){return n(function(e){return e.replace(x,"\n").replace(S,"").replace(G,"    ")}(e),r)}}(X),ce=(ae=function(e,r){return function(n,t,i){var a=e[n.type].render;return r?r(function(){return a(n,t,i)},n,t,i):a(n,t,i)}}(X,t.renderRule),function e(r,n){if(void 0===n&&(n={}),Array.isArray(r)){for(var t=n.key,i=[],a=!1,l=0;l<r.length;l++){n.key=l;var o=e(r[l],n),c="string"==typeof o;c&&a?i[i.length-1]+=o:null!==o&&i.push(o),a=c}return n.key=t,i}return ae(r,e,n)}),ue=Z(e);return Q.length?d("div",null,ue,d("footer",{key:"footer"},Q.map(function(e){return d("div",{id:t.slugify(e.identifier,Le),key:e.identifier},e.identifier,ce(oe(e.footnote,{inline:!0})))}))):ue}var Xe=function(e){var n=e.children,t=void 0===n?"":n,a=e.options,l=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.includes(t))continue;n[t]=e[t]}return n}(e,i);return r.cloneElement(Ve(t,a),l)};Object.assign(Xe,{compiler:Ve,RuleType:a}),module.exports=Xe;
//# sourceMappingURL=index.cjs.map
