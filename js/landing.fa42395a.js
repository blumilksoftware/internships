(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["landing"],{"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):r(i(t))}},"0b42":function(t,e,n){var i=n("861d"),r=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?i(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"33fe":function(t,e,n){t.exports=n.p+"img/landing_right.4f2ae367.jpg"},"428f":function(t,e,n){var i=n("da84");t.exports=i},"5ccf":function(t,e,n){},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"746f":function(t,e,n){var i=n("428f"),r=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||o(e,t,{value:a.f(t)})}},"89e3":function(t,e,n){t.exports=n.p+"img/landing_left.01834206.jpg"},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("d066"),o=n("c430"),c=n("83ab"),s=n("4930"),l=n("d039"),f=n("5135"),d=n("e8b5"),u=n("861d"),b=n("d9b5"),m=n("825a"),p=n("7b0b"),g=n("fc6a"),j=n("a04b"),y=n("577e"),x=n("5c6c"),w=n("7c73"),v=n("df75"),k=n("241c"),h=n("057f"),O=n("7418"),z=n("06cf"),S=n("9bf2"),D=n("d1e7"),P=n("9112"),A=n("6eeb"),W=n("5692"),B=n("f772"),G=n("d012"),F=n("90e3"),H=n("b622"),M=n("e538"),_=n("746f"),I=n("d44e"),J=n("69f3"),Z=n("b727").forEach,N=B("hidden"),U="Symbol",E="prototype",C=H("toPrimitive"),R=J.set,T=J.getterFor(U),q=Object[E],L=r.Symbol,V=a("JSON","stringify"),Y=z.f,K=S.f,$=h.f,Q=D.f,X=W("symbols"),tt=W("op-symbols"),et=W("string-to-symbol-registry"),nt=W("symbol-to-string-registry"),it=W("wks"),rt=r.QObject,at=!rt||!rt[E]||!rt[E].findChild,ot=c&&l((function(){return 7!=w(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=Y(q,e);i&&delete q[e],K(t,e,n),i&&t!==q&&K(q,e,i)}:K,ct=function(t,e){var n=X[t]=w(L[E]);return R(n,{type:U,tag:t,description:e}),c||(n.description=e),n},st=function(t,e,n){t===q&&st(tt,e,n),m(t);var i=j(e);return m(n),f(X,i)?(n.enumerable?(f(t,N)&&t[N][i]&&(t[N][i]=!1),n=w(n,{enumerable:x(0,!1)})):(f(t,N)||K(t,N,x(1,{})),t[N][i]=!0),ot(t,i,n)):K(t,i,n)},lt=function(t,e){m(t);var n=g(e),i=v(n).concat(mt(n));return Z(i,(function(e){c&&!dt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?w(t):lt(w(t),e)},dt=function(t){var e=j(t),n=Q.call(this,e);return!(this===q&&f(X,e)&&!f(tt,e))&&(!(n||!f(this,e)||!f(X,e)||f(this,N)&&this[N][e])||n)},ut=function(t,e){var n=g(t),i=j(e);if(n!==q||!f(X,i)||f(tt,i)){var r=Y(n,i);return!r||!f(X,i)||f(n,N)&&n[N][i]||(r.enumerable=!0),r}},bt=function(t){var e=$(g(t)),n=[];return Z(e,(function(t){f(X,t)||f(G,t)||n.push(t)})),n},mt=function(t){var e=t===q,n=$(e?tt:g(t)),i=[];return Z(n,(function(t){!f(X,t)||e&&!f(q,t)||i.push(X[t])})),i};if(s||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=F(t),n=function(t){this===q&&n.call(tt,t),f(this,N)&&f(this[N],e)&&(this[N][e]=!1),ot(this,e,x(1,t))};return c&&at&&ot(q,e,{configurable:!0,set:n}),ct(e,t)},A(L[E],"toString",(function(){return T(this).tag})),A(L,"withoutSetter",(function(t){return ct(F(t),t)})),D.f=dt,S.f=st,z.f=ut,k.f=h.f=bt,O.f=mt,M.f=function(t){return ct(H(t),t)},c&&(K(L[E],"description",{configurable:!0,get:function(){return T(this).description}}),o||A(q,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:L}),Z(v(it),(function(t){_(t)})),i({target:U,stat:!0,forced:!s},{for:function(t){var e=y(t);if(f(et,e))return et[e];var n=L(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!b(t))throw TypeError(t+" is not a symbol");if(f(nt,t))return nt[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:ut}),i({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(p(t))}}),V){var pt=!s||l((function(){var t=L();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));i({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var i,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(i=e,(u(e)||void 0!==t)&&!b(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!b(e))return e}),r[1]=e,V.apply(null,r)}})}L[E][C]||P(L[E],C,L[E].valueOf),I(L,U),G[N]=!0},a55e:function(t,e,n){},b0c0:function(t,e,n){var i=n("83ab"),r=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";i&&!(s in a)&&r(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,n){var i=n("0366"),r=n("44ad"),a=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,f=4==t,d=6==t,u=7==t,b=5==t||d;return function(m,p,g,j){for(var y,x,w=a(m),v=r(w),k=i(p,g,3),h=o(v.length),O=0,z=j||c,S=e?z(m,h):n||u?z(m,0):void 0;h>O;O++)if((b||O in v)&&(y=v[O],x=k(y,O,w),t))if(e)S[O]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:s.call(S,y)}else switch(t){case 4:return!1;case 7:s.call(S,y)}return d?-1:l||f?f:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b7b4:function(t,e,n){"use strict";n("a55e")},cc86:function(t,e,n){"use strict";n("5ccf")},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),a=n("da84"),o=n("5135"),c=n("861d"),s=n("9bf2").f,l=n("e893"),f=a.Symbol;if(r&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof u?new f(t):void 0===t?f():f(t);return""===t&&(d[e]=!0),e};l(u,f);var b=u.prototype=f.prototype;b.constructor=u;var m=b.toString,p="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(o(d,t))return"";var n=p?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:u})}},e538:function(t,e,n){var i=n("b622");e.f=i},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},f27e:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),r=Object(i["L"])("data-v-636fbfc3");Object(i["y"])("data-v-636fbfc3");var a={class:"wrapper"};Object(i["w"])();var o=r((function(t,e,n,r,o,c){var s=Object(i["D"])("SelectFaculty"),l=Object(i["D"])("JoinUs"),f=Object(i["D"])("StoriesSection");return Object(i["v"])(),Object(i["g"])("div",a,[Object(i["k"])(s),Object(i["k"])(l),Object(i["k"])(f)])})),c=n("33fe"),s=n.n(c),l=Object(i["L"])("data-v-1da092de");Object(i["y"])("data-v-1da092de");var f={class:"relative bg-white overflow-hidden sections"},d={class:"max-w-7xl mx-auto"},u={class:"\n          relative\n          z-10\n          pb-8\n          bg-white\n          sm:pb-16\n          md:pb-20\n          lg:max-w-2xl lg:w-full lg:pb-28\n          xl:pb-32\n        "},b=Object(i["k"])("svg",{class:"\n            hidden\n            lg:block\n            absolute\n            right-0\n            inset-y-0\n            h-full\n            w-48\n            text-white\n            transform\n            translate-x-1/2\n          ",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},[Object(i["k"])("polygon",{points:"50,0 100,0 50,100 0,100"})],-1),m=Object(i["i"])('<div class="relative pt-6 px-4 sm:px-6 lg:px-8" data-v-1da092de><nav class="\n              relative\n              flex\n              items-center\n              justify-between\n              sm:h-10\n              lg:justify-start\n            " aria-label="Global" data-v-1da092de><div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0" data-v-1da092de><div class="flex items-center justify-between w-full md:w-auto" data-v-1da092de><a href="#" data-v-1da092de><p class="logo" title="Project logo" data-v-1da092de>Znajdź Praktyki</p></a></div></div></nav></div>',1),p={class:"\n            mt-10\n            mx-auto\n            max-w-7xl\n            px-4\n            sm:mt-12 sm:px-6\n            md:mt-16\n            lg:mt-20 lg:px-8\n            xl:mt-28\n          "},g={class:"sm:text-center lg:text-left"},j=Object(i["k"])("h1",{class:"\n                text-4xl\n                tracking-tight\n                font-extrabold\n                text-gray-900\n                sm:text-5xl\n                md:text-6xl\n              "},[Object(i["k"])("span",{class:"block xl:inline"},"Zdobądź doświadczenie z"),Object(i["j"])(" "+Object(i["F"])(" ")+" "),Object(i["k"])("span",{class:"block text-indigo-500 m:inline"},"PWSZ Legnica")],-1),y=Object(i["k"])("p",{class:"\n                mt-3\n                text-base text-gray-500\n                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto\n                md:mt-5 md:text-xl\n                lg:mx-0\n              "}," Wybierz wydział na którym studiujesz i znajdź wymarzonych praktykodawców. ",-1),x={class:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},w=Object(i["k"])("div",{class:"rounded-md shadow"},[Object(i["k"])("div",null,[Object(i["k"])("select",{id:"department",name:"Wydział",class:"\n                      mt-1\n                      block\n                      w-full\n                      pl-3\n                      pr-10\n                      py-2\n                      text-base\n                      border-gray-300\n                      focus:outline-none\n                      focus:ring-indigo-500\n                      focus:border-indigo-500\n                      sm:text-sm\n                      rounded-md\n                    "},[Object(i["k"])("option",{selected:""},"Wydział Informatyki"),Object(i["k"])("option",null,"Wydział Grafiki"),Object(i["k"])("option",null,"Wydział Gier Komputerowych")])])],-1),v={class:"mt-3 sm:mt-0 sm:ml-3"},k=Object(i["j"])(" Szukaj "),h=Object(i["k"])("div",{class:"hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},[Object(i["k"])("img",{class:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:s.a,alt:"Developer workstation with laptop desktop computer monitor connected"})],-1);Object(i["w"])();var O=l((function(t,e){var n=Object(i["D"])("router-link");return Object(i["v"])(),Object(i["g"])("div",f,[Object(i["k"])("div",d,[Object(i["k"])("div",u,[b,m,Object(i["k"])("main",p,[Object(i["k"])("div",g,[j,y,Object(i["k"])("div",x,[w,Object(i["k"])("div",v,[Object(i["k"])(n,{to:"/home",tag:"button",title:"home",class:"\n                    inline-flex\n                    items-center\n                    px-4\n                    py-2\n                    border border-transparent\n                    text-base\n                    font-medium\n                    rounded-md\n                    shadow-sm\n                    text-white\n                    bg-indigo-500\n                    hover:bg-indigo-500\n                    focus:outline-none\n                    focus:ring-2\n                    focus:ring-offset-2\n                    focus:ring-indigo-500\n                  "},{default:l((function(){return[k]})),_:1})])])])])])]),h])}));n("b7b4");const z={};z.render=O,z.__scopeId="data-v-1da092de";var S=z,D=n("89e3"),P=n.n(D),A={class:"relative bg-white sections"},W=Object(i["k"])("div",{class:"\n        h-56\n        bg-indigo-500\n        sm:h-72\n        lg:absolute lg:left-0 lg:h-full lg:w-1/2\n      "},[Object(i["k"])("svg",{class:"\n          hidden\n          lg:block\n          absolute\n          right-0\n          inset-y-0\n          h-full\n          w-48\n          text-white\n          transform\n          translate-x-1/2\n        ",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},[Object(i["k"])("polygon",{points:"50,0 100,0 50,100 0,100"})]),Object(i["k"])("img",{class:"w-full h-full object-cover",src:P.a,alt:"Software Developers at work"})],-1),B={class:"relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16"},G={class:"\n          max-w-2xl\n          mx-auto\n          lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10\n          mb-8\n        "},F=Object(i["k"])("h2",{class:"\n            mt-6\n            text-3xl\n            font-extrabold\n            text-left text-gray-900\n            sm:text-4xl\n          "},[Object(i["j"])(" Reprezentujesz szkołę? "),Object(i["k"])("br"),Object(i["k"])("span",{class:"block text-indigo-500 m:inline"},"Dołącz do nas!")],-1),H=Object(i["k"])("p",{class:"mt-6 text-lg text-left text-gray-500"}," Dzięki Znajdź Praktyki Twoja uczelnia uzyska dostęp do przyjaznego studentom interfejsu z wieloma funkcjami ułatiwającymi znalezienie odpowiedniego praktykodawcy. Jest to projekt open source - każdy może skorzystać w pełni za darmo. ",-1),M=Object(i["j"])(" Sprawdź jak! ");function _(t,e){var n=Object(i["D"])("router-link");return Object(i["v"])(),Object(i["g"])("div",A,[W,Object(i["k"])("div",B,[Object(i["k"])("div",G,[F,H,Object(i["k"])(n,{to:"/home",tag:"button",title:"Cooperation",class:"\n            inline-flex\n            items-center\n            px-4\n            py-2\n            border border-transparent\n            text-base\n            font-medium\n            rounded-md\n            shadow-sm\n            text-white\n            bg-indigo-500\n            hover:bg-indigo-500\n            focus:outline-none\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-indigo-500\n            mt-8\n          "},{default:Object(i["K"])((function(){return[M]})),_:1})])])])}const I={};I.render=_;var J=I,Z=(n("b0c0"),n("a4d3"),n("e01a"),{class:"\n      relative\n      bg-gray-50\n      pt-16\n      pb-20\n      px-4\n      sm:px-6\n      lg:pt-24 lg:pb-28 lg:px-8\n    "}),N=Object(i["k"])("div",{class:"absolute inset-0"},[Object(i["k"])("div",{class:"bg-white h-1/3 sm:h-2/3"})],-1),U={class:"relative max-w-7xl mx-auto"},E=Object(i["k"])("div",{class:"text-center"},[Object(i["k"])("h2",{class:"\n            text-3xl\n            tracking-tight\n            font-extrabold\n            text-indigo-500\n            sm:text-4xl\n          "}," Oni znaleźli swoje praktyki "),Object(i["k"])("p",{class:"mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"}," Dzięki naszej wyszukiwarce studenci znajdują dopasowane praktyki o wiele szybciej i skuteczniej. Przeczytaj historie tych, którzy już znaleźli. ")],-1),C={class:"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"},R={class:"flex-shrink-0"},T={class:"flex-1 bg-white p-6 flex flex-col justify-between"},q={class:"flex-1"},L={class:"text-sm font-medium text-indigo-600"},V={class:"hover:underline"},Y={class:"text-xl font-semibold text-gray-900"},K={class:"mt-3 text-base text-gray-500"};function $(t,e,n,r,a,o){return Object(i["v"])(),Object(i["g"])("div",Z,[N,Object(i["k"])("div",U,[E,Object(i["k"])("div",C,[(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["B"])(r.posts,(function(t){return Object(i["v"])(),Object(i["g"])("div",{key:t.title,class:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[Object(i["k"])("div",R,[Object(i["k"])("img",{class:"h-48 w-full object-cover",src:t.imageUrl,alt:"Internship participant"},null,8,["src"])]),Object(i["k"])("div",T,[Object(i["k"])("div",q,[Object(i["k"])("p",L,[Object(i["k"])("a",V,Object(i["F"])(t.category.name),1)]),Object(i["k"])("a",{href:t.href,class:"block mt-2"},[Object(i["k"])("p",Y,Object(i["F"])(t.title),1),Object(i["k"])("p",K,Object(i["F"])(t.description),1)],8,["href"])])])])})),128))])])])}var Q=[{title:"Zdobyłem masę doświadczenia",href:"#",category:{name:"Informatyka"},description:"Znalazłem praktykodawce, w świetnym software house i muszę przyznać, że nigdy w tak krótkim czasie nie nauczyłem się tak wielu rzeczy. W dodatku dzięki filtrom i tagom mogłem idealnie dopasować swoje umiejętności - które mocno rozwinąłem.",imageUrl:"https://images.unsplash.com/photo-1563986768817-257bf91c5753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80"},{title:"Nauczyłam się pracy w drużynie",href:"#",category:{name:"Grafika"},description:"Dużo wiedzy, praca w zespole, nowe spojrzenie na to jak wygląda praca komercyjna to tylko niektóre z plusów moich praktyk. Dzięki mapce znalazłam praktykodawce po sąsiedzku i jestem bardzo zadowolona.",imageUrl:"https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"},{title:"Próbna wersja przyszłej pracy",href:"#",category:{name:"Administracja"},description:"Studiuję administrację i chciałbym w przyszłości pracować w urzędzie. Dzięki Znajdź Praktyki okazało się, że nie muszę jeździć do miasta, tylko mogę odbywać praktyki w okolicznym urzędzie gminy. Było to dla mnie doświadczenie przyszłej pracy w skali makro, z którego mnóstwo wyniosłem.",imageUrl:"https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}],X={setup:function(){return{posts:Q}}};X.render=$;var tt=X,et={components:{SelectFaculty:S,JoinUs:J,StoriesSection:tt},mounted:function(){window.scrollTo(0,0)}};n("cc86");et.render=o,et.__scopeId="data-v-636fbfc3";e["default"]=et}}]);
//# sourceMappingURL=landing.fa42395a.js.map