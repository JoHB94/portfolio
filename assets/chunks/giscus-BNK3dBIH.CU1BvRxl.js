/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,G=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),V=new WeakMap;let ot=class{constructor(s,t,e){if(this._$cssResult$=!0,e!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=t}get styleSheet(){let s=this.o;const t=this.t;if(G&&s===void 0){const e=t!==void 0&&t.length===1;e&&(s=V.get(t)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),e&&V.set(t,s))}return s}toString(){return this.cssText}};const ft=s=>new ot(typeof s=="string"?s:s+"",void 0,B),pt=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((n,i,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new ot(e,s,B)},_t=(s,t)=>{if(G)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),i=x.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,s.appendChild(n)}},q=G?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return ft(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:gt,getOwnPropertyDescriptor:mt,getOwnPropertyNames:At,getOwnPropertySymbols:yt,getPrototypeOf:St}=Object,b=globalThis,K=b.trustedTypes,Et=K?K.emptyScript:"",J=b.reactiveElementPolyfillSupport,U=(s,t)=>s,H={toAttribute(s,t){switch(t){case Boolean:s=s?Et:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},W=(s,t)=>!$t(s,t),F={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=mt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const a=i==null?void 0:i.call(this);o.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,n=[...At(e),...yt(e)];for(const i of n)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(q(i))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:H).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:H;this._$Em=o,this[o]=a.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??W)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[U("elementProperties")]=new Map,E[U("finalized")]=new Map,J==null||J({ReactiveElement:E}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,k=L.trustedTypes,Q=k?k.createPolicy("lit-html",{createHTML:s=>s}):void 0,at="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+m,bt=`<${ht}>`,S=document,T=()=>S.createComment(""),M=s=>s===null||typeof s!="object"&&typeof s!="function",lt=Array.isArray,vt=s=>lt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",z=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,X=/>/g,A=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,dt=/^(?:script|style|textarea|title)$/i,Ct=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),wt=Ct(1),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,y=S.createTreeWalker(S,129);function ct(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const Ut=(s,t)=>{const e=s.length-1,n=[];let i,o=t===2?"<svg>":"",r=w;for(let a=0;a<e;a++){const h=s[a];let _,u,l=-1,$=0;for(;$<h.length&&(r.lastIndex=$,u=r.exec(h),u!==null);)$=r.lastIndex,r===w?u[1]==="!--"?r=Z:u[1]!==void 0?r=X:u[2]!==void 0?(dt.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=A):u[3]!==void 0&&(r=A):r===A?u[0]===">"?(r=i??w,l=-1):u[1]===void 0?l=-2:(l=r.lastIndex-u[2].length,_=u[1],r=u[3]===void 0?A:u[3]==='"'?et:tt):r===et||r===tt?r=A:r===Z||r===X?r=w:(r=A,i=void 0);const g=r===A&&s[a+1].startsWith("/>")?" ":"";o+=r===w?h+bt:l>=0?(n.push(_),h.slice(0,l)+at+h.slice(l)+m+g):h+m+(l===-2?a:g)}return[ct(s,o+(s[e]||"<?>")+(t===2?"</svg>":"")),n]};class R{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const a=t.length-1,h=this.parts,[_,u]=Ut(t,e);if(this.el=R.createElement(_,n),y.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(at)){const $=u[r++],g=i.getAttribute(l).split(m),I=/([.?@])?(.*)/.exec($);h.push({type:1,index:o,name:I[2],strings:g,ctor:I[1]==="."?Ot:I[1]==="?"?Tt:I[1]==="@"?Mt:j}),i.removeAttribute(l)}else l.startsWith(m)&&(h.push({type:6,index:o}),i.removeAttribute(l));if(dt.test(i.tagName)){const l=i.textContent.split(m),$=l.length-1;if($>0){i.textContent=k?k.emptyScript:"";for(let g=0;g<$;g++)i.append(l[g],T()),y.nextNode(),h.push({type:2,index:++o});i.append(l[$],T())}}}else if(i.nodeType===8)if(i.data===ht)h.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(m,l+1))!==-1;)h.push({type:7,index:o}),l+=m.length-1}o++}}static createElement(t,e){const n=S.createElement("template");return n.innerHTML=t,n}}function C(s,t,e=s,n){var i,o;if(t===v)return t;let r=n!==void 0?(i=e._$Co)==null?void 0:i[n]:e._$Cl;const a=M(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((o=r==null?void 0:r._$AO)==null||o.call(r,!1),a===void 0?r=void 0:(r=new a(s),r._$AT(s,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=r:e._$Cl=r),r!==void 0&&(t=C(s,r._$AS(s,t.values),r,n)),t}let Pt=class{constructor(s,t){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){const{el:{content:t},parts:e}=this._$AD,n=((s==null?void 0:s.creationScope)??S).importNode(t,!0);y.currentNode=n;let i=y.nextNode(),o=0,r=0,a=e[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new N(i,i.nextSibling,this,s):a.type===1?h=new a.ctor(i,a.name,a.strings,this,s):a.type===6&&(h=new Rt(i,this,s)),this._$AV.push(h),a=e[++r]}o!==(a==null?void 0:a.index)&&(i=y.nextNode(),o++)}return y.currentNode=S,n}p(s){let t=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(s,e,t),t+=e.strings.length-2):e._$AI(s[t])),t++}};class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),M(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=R.createElement(ct(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(n);else{const r=new Pt(o,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new R(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new N(this.S(T()),this.S(T()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(o===void 0)t=C(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==v,r&&(this._$AH=t);else{const a=t;let h,_;for(t=o[0],h=0;h<o.length-1;h++)_=C(this,a[n+h],e,h),_===v&&(_=this._$AH[h]),r||(r=!M(_)||_!==this._$AH[h]),_===d?t=d:t!==d&&(t+=(_??"")+o[h+1]),this._$AH[h]=_}r&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Tt extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Mt extends j{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??d)===v)return;const n=this._$AH,i=t===d&&n!==d||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==d&&(n===d||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const nt=L.litHtmlPolyfillSupport;nt==null||nt(R,N),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.1.2");const Nt=(s,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=i=new N(t.insertBefore(T(),o),o,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(s){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=Nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return v}};var it;P._$litElement$=!0,P.finalized=!0,(it=globalThis.litElementHydrateSupport)==null||it.call(globalThis,{LitElement:P});const rt=globalThis.litElementPolyfillSupport;rt==null||rt({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},Ht=(s=xt,t,e)=>{const{kind:n,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,s),n==="accessor"){const{name:r}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,h,s)},init(a){return a!==void 0&&this.P(r,void 0,s),a}}}if(n==="setter"){const{name:r}=e;return function(a){const h=this[r];t.call(this,a),this.requestUpdate(r,h,s)}}throw Error("Unsupported decorator location: "+n)};function p(s){return(t,e)=>typeof e=="object"?Ht(s,t,e):((n,i,o)=>{const r=i.hasOwnProperty(o);return i.constructor.createProperty(o,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={CHILD:2},Dt=s=>(...t)=>({_$litDirective$:s,values:t});let jt=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,t,e){this._$Ct=s,this._$AM=t,this._$Ci=e}_$AS(s,t){return this.update(s,t)}update(s,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=(s,t)=>{var e;const n=s._$AN;if(n===void 0)return!1;for(const i of n)(e=i._$AO)==null||e.call(i,t,!1),O(i,t);return!0},D=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},ut=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Gt(t)}};function zt(s){this._$AN!==void 0?(D(this),this._$AM=s,ut(this)):this._$AM=s}function Yt(s,t=!1,e=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)O(n[o],!1),D(n[o]);else n!=null&&(O(n,!1),D(n));else O(this,s)}const Gt=s=>{s.type==kt.CHILD&&(s._$AP??(s._$AP=Yt),s._$AQ??(s._$AQ=zt))};class Bt extends jt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),ut(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),e&&(O(this,t),D(this))}setValue(t){if(Lt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=()=>new Vt;class Vt{}const Y=new WeakMap,qt=Dt(class extends Bt{render(s){return d}update(s,[t]){var e;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=s.options)==null?void 0:e.host,this.rt(this.ct=s.element)),d}rt(s){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=Y.get(t);e===void 0&&(e=new WeakMap,Y.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){var s,t;return typeof this.Y=="function"?(s=Y.get(this.ht??globalThis))==null?void 0:s.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Kt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,f=(s,t,e,n)=>{for(var i=n>1?void 0:n?Jt(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Kt(t,e,i),i};function Ft(s){return customElements.get(s)?t=>t:It(s)}let c=class extends P{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=Wt(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var s;return(s=this._iframeRef)==null?void 0:s.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(s){return`[giscus] An error occurred. Error message: "${s}".`}setupSession(){const s=location.href,t=new URL(s),e=localStorage.getItem(this.GISCUS_SESSION_KEY),n=t.searchParams.get("giscus")??"";if(this.__session="",n){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(n)),this.__session=n,t.searchParams.delete("giscus"),t.hash="",history.replaceState(void 0,document.title,t.toString());return}if(e)try{this.__session=JSON.parse(e)}catch(i){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(i==null?void 0:i.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(s){if(s.origin!==this._host)return;const{data:t}=s;if(!(typeof t=="object"&&t.giscus))return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!t.giscus.error)return;const e=t.giscus.error;if(e.includes("Bad credentials")||e.includes("Invalid state value")||e.includes("State has expired")){if(localStorage.getItem(this.GISCUS_SESSION_KEY)!==null){console.warn(`${this._formatError(e)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(e)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(e.includes("Discussion not found")){console.warn(`[giscus] ${e}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(e)} ${this.ERROR_SUGGESTION}`)}sendMessage(s){var t;!((t=this.iframeRef)!=null&&t.contentWindow)||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:s},this._host)}updateConfig(){const s={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:this.strict==="1",reactionsEnabled:this.reactionsEnabled==="1",emitMetadata:this.emitMetadata==="1",inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(s)}firstUpdated(){var s;(s=this.iframeRef)==null||s.addEventListener("load",()=>{var t;(t=this.iframeRef)==null||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(s,t,e){if(!this.hasUpdated||s==="host"){super.requestUpdate(s,t,e);return}this.updateConfig()}getMetaContent(s,t=!1){const e=t?`meta[property='og:${s}'],`:"",n=document.querySelector(e+`meta[name='${s}']`);return n?n.content:""}_getCleanedUrl(){const s=new URL(location.href);return s.searchParams.delete("giscus"),s.hash="",s}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";case"pathname":default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return this.mapping==="number"?this.term??"":""}getIframeSrc(){const s=this._getCleanedUrl().toString(),t=`${s}${this.id?"#"+this.id:""}`,e=this.getMetaContent("description",!0),n=this.getMetaContent("giscus:backlink")||s,i={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:e,backLink:n},o=this._host,r=this.lang?`/${this.lang}`:"",a=new URLSearchParams(i);return`${o}${r}/widget?${a.toString()}`}render(){return wt`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${qt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};c.styles=pt`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;f([p({reflect:!0})],c.prototype,"host",2);f([p({reflect:!0})],c.prototype,"repo",2);f([p({reflect:!0})],c.prototype,"repoId",2);f([p({reflect:!0})],c.prototype,"category",2);f([p({reflect:!0})],c.prototype,"categoryId",2);f([p({reflect:!0})],c.prototype,"mapping",2);f([p({reflect:!0})],c.prototype,"term",2);f([p({reflect:!0})],c.prototype,"strict",2);f([p({reflect:!0})],c.prototype,"reactionsEnabled",2);f([p({reflect:!0})],c.prototype,"emitMetadata",2);f([p({reflect:!0})],c.prototype,"inputPosition",2);f([p({reflect:!0})],c.prototype,"theme",2);f([p({reflect:!0})],c.prototype,"lang",2);f([p({reflect:!0})],c.prototype,"loading",2);c=f([Ft("giscus-widget")],c);export{c as GiscusWidget};
