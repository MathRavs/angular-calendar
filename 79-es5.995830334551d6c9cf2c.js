(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{BLi7:function(t,e,n){"use strict";n.r(e);var r=n("CcnG"),a=n("j1vE").a,o=function(){},i=n("5VhP"),c=n("pMnS"),u=n("3hes"),s=n("1xDM"),l=n("J5kl"),b=n("/om3"),h=n("cbJd"),p=n("K9Ia"),d=n("ny24"),f=function(){function t(t,e){this.breakpointObserver=t,this.cd=e,this.view=h.a.Week,this.viewDate=new Date,this.daysInWeek=7,this.destroy$=new p.a}return t.prototype.ngOnInit=function(){var t=this,e={small:{breakpoint:"(max-width: 576px)",daysInWeek:2},medium:{breakpoint:"(max-width: 768px)",daysInWeek:3},large:{breakpoint:"(max-width: 960px)",daysInWeek:5}};this.breakpointObserver.observe(Object.values(e).map(function(t){return t.breakpoint})).pipe(Object(d.a)(this.destroy$)).subscribe(function(n){var r=Object.values(e).find(function(t){var e=t.breakpoint;return!!n.breakpoints[e]});t.daysInWeek=r?r.daysInWeek:7,t.cd.markForCheck()})},t.prototype.ngOnDestroy=function(){this.destroy$.next()},t}(),m=n("dWZg"),y=n("dzgT"),w=n("dEwP"),v=n("6blF"),j=n("t9fZ"),k=n("mrSG"),O=n("FFOo");var _,I=function(){function t(t){this.total=t}return t.prototype.call=function(t,e){return e.subscribe(new X(t,this.total))},t}(),X=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return k.c(e,t),e.prototype._next=function(t){++this.count>this.total&&this.destination.next(t)},e}(O.a),g=n("Gi3i"),M=n("67Y/"),x=n("p0Sj"),W=n("n6gG"),D=(function(){function t(){}t.decorators=[{type:r.F,args:[{}]}]}(),new Set),q=function(){function t(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):S}return t.prototype.matchMedia=function(t){return this._platform.WEBKIT&&function(t){if(D.has(t))return;try{_||((_=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(_)),_.sheet&&(_.sheet.insertRule("@media "+t+" {.fx-query-test{ }}",0),D.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)},t.decorators=[{type:r.y,args:[{providedIn:"root"}]}],t.ctorParameters=function(){return[{type:m.a}]},t.ngInjectableDef=Object(r.nc)({factory:function(){return new t(Object(r.oc)(m.a))},token:t,providedIn:"root"}),t}();function S(t){return{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}var N=function(){function t(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new p.a}return t.prototype.ngOnDestroy=function(){this._destroySubject.next(),this._destroySubject.complete()},t.prototype.isMatched=function(t){var e=this;return E(Object(W.a)(t)).some(function(t){return e._registerQuery(t).mql.matches})},t.prototype.observe=function(t){var e,n=this,r=E(Object(W.a)(t)).map(function(t){return n._registerQuery(t).observable}),a=Object(y.a)(r);return(a=Object(w.a)(a.pipe(Object(j.a)(1)),a.pipe((e=1,function(t){return t.lift(new I(e))}),Object(g.a)(0)))).pipe(Object(M.a)(function(t){var e={matches:!1,breakpoints:{}};return t.forEach(function(t){e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches}),e}))},t.prototype._registerQuery=function(t){var e=this;if(this._queries.has(t))return this._queries.get(t);var n=this._mediaMatcher.matchMedia(t),r={observable:new v.a(function(t){var r=function(n){return e._zone.run(function(){return t.next(n)})};return n.addListener(r),function(){n.removeListener(r)}}).pipe(Object(x.a)(n),Object(M.a)(function(e){return{query:t,matches:e.matches}}),Object(d.a)(this._destroySubject)),mql:n};return this._queries.set(t,r),r},t.decorators=[{type:r.y,args:[{providedIn:"root"}]}],t.ctorParameters=function(){return[{type:q},{type:r.K}]},t.ngInjectableDef=Object(r.nc)({factory:function(){return new t(Object(r.oc)(q),Object(r.oc)(r.K))},token:t,providedIn:"root"}),t}();function E(t){return t.map(function(t){return t.split(",")}).reduce(function(t,e){return t.concat(e)}).map(function(t){return t.trim()})}var L=r.Lb({encapsulation:2,styles:[],data:{}});function F(t){return r.jc(2,[(t()(),r.Nb(0,0,null,null,1,"div",[["class","alert alert-info"]],null,null,null,null,null)),(t()(),r.hc(-1,null,["\n  Shrink the browser window size to reduce the number of days in the week.\n"])),(t()(),r.hc(-1,null,["\n\n"])),(t()(),r.Nb(3,0,null,null,2,"mwl-calendar-week-view",[],null,null,null,u.b,u.a)),r.Mb(4,770048,null,0,s.a,[r.j,l.a,r.E,b.a],{viewDate:[0,"viewDate"],daysInWeek:[1,"daysInWeek"]},null),(t()(),r.hc(-1,null,["\n"])),(t()(),r.hc(-1,null,["\n"]))],function(t,e){var n=e.component;t(e,4,0,n.viewDate,n.daysInWeek)},null)}var C=r.Jb("mwl-demo-component",f,function(t){return r.jc(0,[(t()(),r.Nb(0,0,null,null,1,"mwl-demo-component",[],null,null,null,F,L)),r.Mb(1,245760,null,0,f,[N,r.j],null,null)],function(t,e){t(e,1,0)},null)},{},{},[]),J=n("Ip0R"),K=n("LjNj"),z=n("9thp"),G=n("hYcs"),P=n("YXNw"),Y=n("4uqC"),B=n("lf6A"),Q=n("cyy6"),Z=n("SNsX"),$=n("Nrjh"),A=n("ZYCi");n.d(e,"DemoModuleNgFactory",function(){return R});var R=r.Kb(o,[],function(t){return r.Wb([r.Xb(512,r.m,r.ub,[[8,[i.a,c.a,C]],[3,r.m],r.I]),r.Xb(4608,J.p,J.o,[r.E,[2,J.M]]),r.Xb(5120,b.a,a,[]),r.Xb(4608,K.a,K.a,[]),r.Xb(4608,z.a,z.a,[b.a]),r.Xb(4608,l.a,l.a,[b.a]),r.Xb(1073742336,J.c,J.c,[]),r.Xb(1073742336,G.a,G.a,[]),r.Xb(1073742336,P.a,P.a,[]),r.Xb(1073742336,Y.a,Y.a,[]),r.Xb(1073742336,B.b,B.b,[]),r.Xb(1073742336,Q.a,Q.a,[]),r.Xb(1073742336,Z.a,Z.a,[]),r.Xb(1073742336,$.a,$.a,[]),r.Xb(1073742336,A.o,A.o,[[2,A.t],[2,A.m]]),r.Xb(1073742336,o,o,[]),r.Xb(1024,A.k,function(){return[[{path:"",component:f}]]},[])])})}}]);