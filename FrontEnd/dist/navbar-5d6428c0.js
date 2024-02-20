import{R as t,i as e}from"./router-97df8b65.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const a=window,d=a.trustedTypes,c=d?d.emptyScript:"",p=a.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v},$="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=s.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=g){var i;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:u).toAttribute(e,s.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:u;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;_[$]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:_}),(null!==(h=a.reactiveElementVersions)&&void 0!==h?h:a.reactiveElementVersions=[]).push("1.6.3");const m=window,y=m.trustedTypes,A=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,w="?"+S,x=`<${w}>`,E=document,C=()=>E.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,k="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,M=/>/g,N=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,O=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),j=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),D=new WeakMap,z=E.createTreeWalker(E,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const F=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=P;for(let e=0;e<s;e++){const s=t[e];let l,h,a=-1,d=0;for(;d<s.length&&(n.lastIndex=d,h=n.exec(s),null!==h);)d=n.lastIndex,n===P?"!--"===h[1]?n=H:void 0!==h[1]?n=M:void 0!==h[2]?(O.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=N):void 0!==h[3]&&(n=N):n===N?">"===h[0]?(n=null!=r?r:P,a=-1):void 0===h[1]?a=-2:(a=n.lastIndex-h[2].length,l=h[1],n=void 0===h[3]?N:'"'===h[3]?I:R):n===I||n===R?n=N:n===H||n===M?n=P:(n=N,r=void 0);const c=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===P?s+x:a>=0?(i.push(l),s.slice(0,a)+b+s.slice(a)+S+c):s+S+(-2===a?(i.push(void 0),e):c)}return[V(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class W{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,l=this.parts,[h,a]=F(t,e);if(this.el=W.createElement(h,s),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=z.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(b)||e.startsWith(S)){const s=a[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+b).split(S),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?X:"@"===e[1]?Y:K})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(O.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],C()),z.nextNode(),l.push({type:2,index:++r});i.append(t[e],C())}}}else if(8===i.nodeType)if(i.data===w)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)l.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const s=E.createElement("template");return s.innerHTML=t,s}}function q(t,e,s=t,i){var r,o,n,l;if(e===j)return e;let h=void 0!==i?null===(r=s._$Co)||void 0===r?void 0:r[i]:s._$Cl;const a=U(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,i)),void 0!==i?(null!==(n=(l=s)._$Co)&&void 0!==n?n:l._$Co=[])[i]=h:s._$Cl=h),void 0!==h&&(e=q(t,h._$AS(t,e.values),h,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(s,!0);z.currentNode=r;let o=z.nextNode(),n=0,l=0,h=i[0];for(;void 0!==h;){if(n===h.index){let e;2===h.type?e=new G(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new tt(o,this,t)),this._$AV.push(e),h=i[++l]}n!==(null==h?void 0:h.index)&&(o=z.nextNode(),n++)}return z.currentNode=E,r}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class G{constructor(t,e,s,i){var r;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),U(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(V(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(s);else{const t=new J(r,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new W(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new G(this.k(C()),this.k(C()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,s,i,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=q(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const i=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=q(this,i[s+n],e,n),l===j&&(l=this._$AH[n]),o||(o=!U(l)||l!==this._$AH[n]),l===B?t=B:t!==B&&(t+=(null!=l?l:"")+r[n+1]),this._$AH[n]=l}o&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const Q=y?y.emptyScript:"";class X extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends K{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=q(this,t,e,0))&&void 0!==s?s:B)===j)return;const i=this._$AH,r=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==B&&(i===B||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const et=m.litHtmlPolyfillSupport;null==et||et(W,G),(null!==(f=m.litHtmlVersions)&&void 0!==f?f:m.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,it;class rt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,r;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new G(e.insertBefore(C(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}rt.finalized=!0,rt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:rt});const ot=globalThis.litElementPolyfillSupport;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt;null==ot||ot({LitElement:rt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3"),null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");customElements.define("search-bar",class extends rt{render(){return L`
    <style>
    .inputText {
        flex: 1;
        border-radius: 5px;
        width: ${(t=this).width}px;
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        text-indent: 30px;
       
    }
    .searchbar:hover {
        background-color: #d3d3d3;
    }
    .container{
        width: ${t.width}px;
        margin-right:20px;
        text-indent: 30px;
        position: relative;
        top: 28px
    }
    .searchbar{
        width: ${t.width}px;
        height: 25px;
        text-indent: 12px;
        background-color: #faf7f7;
        color: black;
        border-style: solid;
        border-top: none;
        border-color: lightgray;
        cursor: pointer;
    }
    </style>
    <div class="container">
    <svg fill="gray" height="20px" width="20px" style="position: relative;
    left: -22px;
    top: 32px;"
  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
    <input 
    type="text" 
    value=${t.value}
    class="inputText" 
    placeholder="Search Users" 
    @click=${e=>t.fetchUsers(e)}
    @input=${e=>t.searchUsers(e)}
    >
    </div>
    <div class="searchContainer" style="height:79px;position: relative;
    top: 28px;left: 3px;">
    ${t.usersInSearch?L` 
    ${t.usersInSearch[0]?L`<div class="searchbar" @click=${e=>t.routeToSearchedUser(e,t.usersInSearch[0].email)}>${t.usersInSearch[0].Name}</div>`:L``}
    ${t.usersInSearch[1]?L`<div class="searchbar" @click=${e=>t.routeToSearchedUser(e,t.usersInSearch[1].email)}>${t.usersInSearch[1].Name}</div>`:L``}
    ${t.usersInSearch[2]?L`<div class="searchbar" @click=${e=>t.routeToSearchedUser(e,t.usersInSearch[2].email)}>${t.usersInSearch[2].Name}</div>`:L``}
    ${t.usersInSearch&&0===t.usersInSearch.length?L`<div class="searchbar">No Users Found</div>`:L``}`:L``}
    </div>
     `;var t}static get properties(){return{value:{type:String},width:{type:String},placeholder:{type:String},type:{type:String},users:{type:Object},usersInSearch:{type:Object}}}constructor(){super(),this.value="",this.width="",this.placeholder="",this.type="",this.users="",this.usersInSearch=null,this.usersFetchedSuccesfully=!1}fetchUsers(t){this.usersFetchedSuccesfully||fetch("http://localhost:5001/api/searchBar").then((t=>t.json())).then((t=>{this.users=t,this.usersFetchedSuccesfully=!0})).catch((t=>{this.error="User Not Found"}))}searchUsers(t){if("deleteContentBackward"===t.inputType)return this.usersInSearch=null,void(this.shadowRoot.querySelector(".inputText").value="");this.usersInSearch||(this.usersInSearch=this.users);var e=[];for(let s=0;s<=this.usersInSearch.length-1;s++)void 0!==this.usersInSearch[s].Name&&this.usersInSearch[s].Name.trim().toLowerCase().includes(t.target.value.trim().toLowerCase())&&e.push(this.usersInSearch[s]);this.usersInSearch=e}routeToSearchedUser(e,s){this.shadowRoot.querySelector(".inputText").value="";const i=s.trim();sessionStorage.setItem("searchedUser",i),this.usersInSearch=null,t.go("/profile")}});customElements.define("nav-bar",class extends rt{render(){return L`
    <style>
    body {
      margin: 0;
      padding: 0;
      /* Add any other body styles you need */
    }

    /* Assuming .navbar is the outermost container of your navbar */
    .navbar {
      width: 100vw; /* Viewport width, ensures it stretches to the full width of the viewport */
      height: 70px; /* Adjust the height as needed */
      background-color: rgb(6, 28, 113);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute; /* Position it absolutely relative to the viewport */
      top: 0; /* Align to the top */
      left: 0; /* Align to the left */
    }


    .navbar-title {
      font-size: 24px;
      margin: 0;
      margin-left: 10px;
    }

    .profile-button {
      background-color: #555;
      color: #fff;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
    }
    .button {
      background-color: #fff;
      color: rgb(6, 28, 113);
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      margin-left: 5px;
  }

    .dropdown {
      display: ${(t=this).isDropdownOpen?"block":"none"};
      position: absolute;
      background-color: #555;
      min-width: 160px;
      z-index: 1;
    }

    .dropdown-button {
      background-color: #555;
      color: #fff;
      border: none;
      width: 100%;
      text-align: left;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }
    .logo {
       height:150px;
      }
    </style> 
      
      <div class="navbar">
      <img src="/Assets/logo.png" class="logo" alt="Logo">
      
      ${t.inMainApplication?L` 
        
        ${t.entrepriseMode?L`
        <button class="button" @click=${e=>t.routeToEnterpriseHome(e)}>Home</button>
        <button class="button" @click=${e=>t.routeToJobPosting(e)}>Create Posting</button>
        `:L` 
        <button class="button" @click=${e=>t.routeToHome(e)}>Home</button>
        <button class="button" @click=${e=>t.routeToMyEvents(e)}>My Events</button>`}
        <button class="button" @click=${e=>t.routeToProfile(e)}>Profile</button>
        <div style="flex-grow: 1;"></div>
        <search-bar width=250></search-bar>`:L``}
      </div>
      
    `;var t}static get properties(){return{isDropdownOpen:{type:Boolean},inMainApplication:{type:Boolean},entrepriseMode:{type:Boolean},triggerRerender:{type:Number}}}constructor(){super(),this.isDropdownOpen=!1,this.triggerRerender=0,this.addEventListener("custom-string-event",this.handleChangedValue),this.inMainApplication=!1,this.entrepriseMode=!1,this.currentUser="",this.role=""}connectedCallback(){super.connectedCallback(),this.triggerReload(),window.addEventListener("popstate",(()=>{this.triggerReload()})),window.addEventListener("beforeunload",(()=>{this.triggerReload()}))}triggerReload(){this.triggerRerender+=1;var t=window.location.href;"http://localhost:8000/"===t||"http://localhost:8000/enterpriseLoginPage"==t?this.inMainApplication=!1:(this.inMainApplication=!0,this.currentUser=sessionStorage.getItem("email"),this.role=sessionStorage.getItem("role"),"enterprise"===this.role?this.entrepriseMode=!0:this.entrepriseMode=!1)}handleChangedValue(t){console.log("here")}toggleDropdown(t){this.isDropdownOpen=!this.isDropdownOpen}routeToFirst(){e(),t.go("/")}routeToHome(){t.go("/home")}routeToEnterpriseHome(){t.go("/enterpriseHome")}routeToProfile(){sessionStorage.setItem("searchedUser",this.currentUser),t.go("/profile")}routeToMyEvents(e){t.go("/myEvents")}routeToJobPosting(e){t.go("/createjobposting")}routeToAbout(e){t.go("/about")}routeToAppli(e){t.go("/applicantsPage")}});export{rt as s,L as x};
