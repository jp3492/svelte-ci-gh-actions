var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode.removeChild(t)}let s;function a(t){s=t}const f=[],l=[],i=[],d=[],p=Promise.resolve();let $=!1;function h(t){i.push(t)}let g=!1;const m=new Set;function y(){if(!g){g=!0;do{for(let t=0;t<f.length;t+=1){const n=f[t];a(n),_(n.$$)}for(a(null),f.length=0;l.length;)l.pop()();for(let t=0;t<i.length;t+=1){const n=i[t];m.has(n)||(m.add(n),n())}i.length=0}while(f.length);for(;d.length;)d.pop()();$=!1,g=!1,m.clear()}}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const b=new Set;function x(t,n){-1===t.$$.dirty[0]&&(f.push(t),$||($=!0,p.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,f,l,i,d,p,$=[-1]){const g=s;a(c);const m=f.props||{},_=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:e(),dirty:$,skip_bound:!1};let k=!1;if(_.ctx=l?l(c,m,((t,n,...e)=>{const o=e.length?e[0]:n;return _.ctx&&d(_.ctx[t],_.ctx[t]=o)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](o),k&&x(c,t)),n})):[],_.update(),k=!0,o(_.before_update),_.fragment=!!i&&i(_.ctx),f.target){if(f.hydrate){const t=function(t){return Array.from(t.childNodes)}(f.target);_.fragment&&_.fragment.l(t),t.forEach(u)}else _.fragment&&_.fragment.c();f.intro&&((v=c.$$.fragment)&&v.i&&(b.delete(v),v.i(w))),function(t,e,c){const{fragment:u,on_mount:s,on_destroy:a,after_update:f}=t.$$;u&&u.m(e,c),h((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(h)}(c,f.target,f.anchor),y()}var v,w;a(g)}function v(n){let e;return{c(){var t;t="header",e=document.createElement(t),e.textContent="Hallo there"},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),k(this,t,null,v,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
