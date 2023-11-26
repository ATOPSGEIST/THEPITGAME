"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10984],{81931:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(87462),u=n(84217);function r(e,t,n,l,u,r,i,a){var o;let h;let c=e.length-1,s=null==t?-1:e.findIndex(e=>a(e,t));if("reset"===n)return null;if("start"===n)h=0;else if("end"===n)h=c;else{let e=s+n;h=e<0?!i&&-1!==s||Math.abs(n)>1?0:c:e>c?!i||Math.abs(n)>1?c:0:e}let d=function(e,t,n,l,u,r){if(0===n.length||n.every((e,t)=>u(e,t)))return -1;let i=e;for(;;){if(!r&&"next"===t&&i===n.length||!r&&"previous"===t&&-1===i)return -1;let e=!l&&u(n[i],i);if(!e)return i;i+="next"===t?1:-1,r&&(i=(i+n.length)%n.length)}}(h,l,e,u,r,i);return null!=(o=e[d])?o:null}function i(e,t,n){let{multiple:l,optionComparer:u=(e,t)=>e===t,isOptionDisabled:r=()=>!1}=n,{selectedValue:i}=t,a=n.options.findIndex(t=>n.optionComparer(e,t));if(r(e,a))return t;if(l){let t=(null!=i?i:[]).some(t=>u(t,e))?i.filter(t=>!u(t,e)):[...null!=i?i:[],e];return{selectedValue:t,highlightedValue:e}}return null!=i&&u(e,i)?t:{selectedValue:e,highlightedValue:e}}let a=(e,t,n)=>{var l;let u=null==(l=n(e))?void 0:l.trim().toLowerCase();return!!u&&0!==u.length&&0===u.indexOf(t)};function o(e,t){let{type:n}=t;switch(n){case u.M.keyDown:return function(e,t,n){let{options:u,isOptionDisabled:a,disableListWrap:o,disabledItemsFocusable:h,optionComparer:c}=n,s=(e,n,l)=>r(u,t.highlightedValue,e,n,null!=h&&h,null!=a?a:()=>!1,l,c);switch(e.key){case"Home":return(0,l.Z)({},t,{highlightedValue:s("start","next",!1)});case"End":return(0,l.Z)({},t,{highlightedValue:s("end","previous",!1)});case"PageUp":return(0,l.Z)({},t,{highlightedValue:s(-5,"previous",!1)});case"PageDown":return(0,l.Z)({},t,{highlightedValue:s(5,"next",!1)});case"ArrowUp":return(0,l.Z)({},t,{highlightedValue:s(-1,"previous",!(null!=o&&o))});case"ArrowDown":return(0,l.Z)({},t,{highlightedValue:s(1,"next",!(null!=o&&o))});case"Enter":case" ":if(null===t.highlightedValue)break;return i(t.highlightedValue,t,n)}return t}(t.event,e,t.props);case u.M.optionClick:return i(t.option,e,t.props);case u.M.blur:return(0,l.Z)({},e,{highlightedValue:null});case u.M.setValue:return(0,l.Z)({},e,{selectedValue:t.value});case u.M.setHighlight:return(0,l.Z)({},e,{highlightedValue:t.highlight});case u.M.textNavigation:return function(e,t,n){let{options:u,isOptionDisabled:i,disableListWrap:o,disabledItemsFocusable:h,optionComparer:c,optionStringifier:s}=n,d=e=>r(u,e,1,"next",null!=h&&h,null!=i?i:()=>!1,!(null!=o&&o),c),g=t.length>1,f=g?e.highlightedValue:d(e.highlightedValue);for(let n=0;n<u.length&&f&&(g||e.highlightedValue!==f);n+=1){if(a(f,t,s)&&(!i(f,u.indexOf(f))||h))return(0,l.Z)({},e,{highlightedValue:f});f=d(f)}return e}(e,t.searchString,t.props);case u.M.optionsChange:return function(e,t,n,l){var u,r,i;let{multiple:a,optionComparer:o}=l,h=null==n.highlightedValue?null:null!=(u=e.find(e=>o(e,n.highlightedValue)))?u:null;if(a){let t=null!=(i=n.selectedValue)?i:[],l=t.filter(t=>e.some(e=>o(e,t)));return{highlightedValue:h,selectedValue:l}}let c=null!=(r=e.find(e=>o(e,n.selectedValue)))?r:null;return{highlightedValue:h,selectedValue:c}}(t.options,t.previousOptions,e,t.props);default:return e}}},27198:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(87462),u=n(67294),r=n(57579),i=n(30067),a=n(84217),o=n(81931);function h(e,t,n=(e,t)=>e===t){return e.length===t.length&&e.every((e,l)=>n(e,t[l]))}function c(e,t){return void 0!==t.value?(0,l.Z)({},e,{selectedValue:t.value}):e}function s(e,t,n){return e===t||null!==e&&null!==t&&n(e,t)}let d=(e,t)=>e===t,g=()=>!1,f=e=>"string"==typeof e?e:String(e);function p(e){var t,n;let{disabledItemsFocusable:p=!1,disableListWrap:v=!1,focusManagement:V="activeDescendant",id:M,isOptionDisabled:Z=g,listboxRef:b,multiple:k=!1,optionComparer:x=d,optionStringifier:y=f,options:C,stateReducer:w}=e,m=(0,r.Z)(M),D=null!=(t=e.optionIdGenerator)?t:function(e,t){return`${m}-option-${t}`},O=(0,l.Z)({},e,{disabledItemsFocusable:p,disableListWrap:v,focusManagement:V,isOptionDisabled:Z,multiple:k,optionComparer:x,optionStringifier:y}),S=u.useRef(null),E=(0,i.Z)(b,S),H=u.useRef({searchString:"",lastTime:null}),[{highlightedValue:I,selectedValue:P},R]=function(e,t,n){var l,r,i;let{value:a,defaultValue:o}=n,d=u.useRef(n);d.current=n;let g=u.useRef(null),f=null!=(l=void 0===a?o:a)?l:n.multiple?[]:null,p={highlightedValue:null,selectedValue:f},v=u.useCallback((n,l)=>(g.current=l,t)?t(c(n,d.current),l):e(c(n,d.current),l),[t,e,d]),[V,M]=u.useReducer(v,p),Z=u.useRef(p);return u.useEffect(()=>{Z.current=V},[Z,V]),r=Z.current,i=g,u.useEffect(()=>{var e,t,n;if(!d.current||null===i.current)return;let l=c(r,d.current),{multiple:u,optionComparer:a}=d.current;if(u){let t=null!=(e=null==l?void 0:l.selectedValue)?e:[],n=V.selectedValue,u=d.current.onChange;h(n,t,a)||null==u||u(i.current.event,n)}else{let e=null==l?void 0:l.selectedValue,t=V.selectedValue,n=d.current.onChange;s(t,e,a)||null==n||n(i.current.event,t)}s(r.highlightedValue,V.highlightedValue,d.current.optionComparer)||null==(t=d.current)||null==(n=t.onHighlightChange)||n.call(t,i.current.event,V.highlightedValue),i.current=null},[V.selectedValue,V.highlightedValue,r,d,i]),[c(V,d.current),M]}(o.Z,w,O),N=u.useMemo(()=>null==I?-1:C.findIndex(e=>x(e,I)),[I,C,x]),A=u.useRef([]);u.useEffect(()=>{h(A.current,C,x)||(R({type:a.M.optionsChange,event:null,options:C,previousOptions:A.current,props:O}),A.current=C)},[C,x,R]);let T=u.useCallback(e=>{R({type:a.M.setValue,event:null,value:e})},[R]),U=u.useCallback(e=>{R({type:a.M.setHighlight,event:null,highlight:e})},[R]),_=(e,t)=>n=>{var l;null==(l=t.onClick)||l.call(t,n),n.defaultPrevented||(n.preventDefault(),R({type:a.M.optionClick,option:e,event:n,props:O}))},B=(e,t)=>n=>{var l;null==(l=t.onMouseOver)||l.call(t,n),n.defaultPrevented||R({type:a.M.optionHover,option:e,event:n,props:O})},K=e=>t=>{var n;if(null==(n=e.onKeyDown)||n.call(e,t),t.defaultPrevented)return;let l=["ArrowUp","ArrowDown","Home","End","PageUp","PageDown"];if("activeDescendant"===V&&l.push(" ","Enter"),l.includes(t.key)&&t.preventDefault(),R({type:a.M.keyDown,event:t,props:O}),1===t.key.length&&" "!==t.key){let e=H.current,n=t.key.toLowerCase(),l=performance.now();e.searchString.length>0&&e.lastTime&&l-e.lastTime>500?e.searchString=n:(1!==e.searchString.length||n!==e.searchString)&&(e.searchString+=n),e.lastTime=l,R({type:a.M.textNavigation,event:t,searchString:e.searchString,props:O})}},L=e=>t=>{var n,l;null==(n=e.onBlur)||n.call(e,t),t.defaultPrevented||null!=(l=S.current)&&l.contains(document.activeElement)||R({type:a.M.blur,event:t,props:O})},$=(e={})=>(0,l.Z)({},e,{"aria-activedescendant":"activeDescendant"===V&&null!=I?D(I,N):void 0,id:m,onBlur:L(e),onKeyDown:K(e),role:"listbox",tabIndex:"DOM"===V?-1:0,ref:E}),G=e=>{let t;let n=C.findIndex(t=>x(t,e));t=k?(null!=P?P:[]).some(t=>null!=t&&x(e,t)):x(e,P);let l=Z(e,n);return{selected:t,disabled:l,highlighted:N===n}},j=e=>"activeDescendant"===V?void 0:e.highlighted&&(!e.disabled||p)?0:-1,q=(e,t={})=>{let n=G(e),u=C.findIndex(t=>x(t,e));return(0,l.Z)({},t,{"aria-disabled":n.disabled||void 0,"aria-selected":n.selected,id:D(e,u),onClick:_(e,t),onPointerOver:B(e,t),role:"option",tabIndex:j(n)})};return u.useDebugValue({highlightedOption:C[N],selectedOption:P}),{getRootProps:$,getOptionProps:q,getOptionState:G,highlightedOption:null!=(n=C[N])?n:null,selectedOption:P,setSelectedValue:T,setHighlightedValue:U}}},84217:function(e,t,n){var l,u;n.d(t,{M:function(){return l}}),(u=l||(l={})).blur="blur",u.focus="focus",u.keyDown="keyDown",u.optionClick="optionClick",u.optionHover="optionHover",u.optionsChange="optionsChange",u.setValue="setValue",u.setHighlight="setHighlight",u.textNavigation="textNagivation"},95032:function(e,t,n){n.d(t,{i:function(){return r}});var l=n(34867),u=n(1588);function r(e){return(0,l.Z)("MuiMenuItem",e)}let i=(0,u.Z)("MuiMenuItem",["root","disabled","focusVisible"]);t.Z=i},80085:function(e,t,n){n.d(t,{u:function(){return r}});var l=n(34867),u=n(1588);function r(e){return(0,l.Z)("MuiOption",e)}let i=(0,u.Z)("MuiOption",["root","disabled","selected","highlighted"]);t.Z=i},49349:function(e,t,n){n.d(t,{l:function(){return r}});var l=n(34867),u=n(1588);function r(e){return(0,l.Z)("MuiSelect",e)}let i=(0,u.Z)("MuiSelect",["root","button","listbox","popper","active","expanded","disabled","focusVisible"]);t.Z=i}}]);