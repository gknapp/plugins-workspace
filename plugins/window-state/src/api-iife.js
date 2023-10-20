if("__TAURI__"in window){var __TAURI_WINDOWSTATE__=function(e){"use strict";var t=Object.defineProperty,n=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},r=(e,t,r)=>(n(e,t,"read from private field"),r?r.call(e):t.get(e));function a(e,t=!1){return window.__TAURI_INTERNALS__.transformCallback(e,t)}((e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:!0})})({},{Channel:()=>s,PluginListener:()=>o,addPluginListener:()=>l,convertFileSrc:()=>u,invoke:()=>c,transformCallback:()=>a});var i,s=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,((e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)})(this,i,(()=>{})),this.id=a((e=>{r(this,i).call(this,e)}))}set onmessage(e){var t,r,a,s;a=e,n(t=this,r=i,"write to private field"),s?s.call(t,a):r.set(t,a)}get onmessage(){return r(this,i)}toJSON(){return`__CHANNEL__:${this.id}`}};i=new WeakMap;var _,o=class{constructor(e,t,n){this.plugin=e,this.event=t,this.channelId=n}async unregister(){return c(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}};async function l(e,t,n){let r=new s;return r.onmessage=n,c(`plugin:${e}|register_listener`,{event:t,handler:r}).then((()=>new o(e,t,r.id)))}async function c(e,t={},n){return window.__TAURI_INTERNALS__.invoke(e,t,n)}function u(e,t="asset"){return window.__TAURI_INTERNALS__.convertFileSrc(e,t)}async function I(e,t){return c("plugin:window-state|restore_state",{label:e,flags:t})}return e.StateFlags=void 0,(_=e.StateFlags||(e.StateFlags={}))[_.SIZE=1]="SIZE",_[_.POSITION=2]="POSITION",_[_.MAXIMIZED=4]="MAXIMIZED",_[_.VISIBLE=8]="VISIBLE",_[_.DECORATIONS=16]="DECORATIONS",_[_.FULLSCREEN=32]="FULLSCREEN",_[_.ALL=63]="ALL",e.restoreState=I,e.restoreStateCurrent=async function(e){return I(window.__TAURI_METADATA__.__currentWindow.label,e)},e.saveWindowState=async function(e){return c("plugin:window-state|save_window_state",{flags:e})},e}({});Object.defineProperty(window.__TAURI__,"windowState",{value:__TAURI_WINDOWSTATE__})}
