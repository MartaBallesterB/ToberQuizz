(function(e){function t(t){for(var n,o,u=t[0],s=t[1],b=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);i&&i(t);while(f.length)f.shift()();return r.push.apply(r,b||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,o=1;o<c.length;o++){var s=c[o];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=u(u.s=c[0]))}return e}var n={},a={app:0},r=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d20f517":"1af5a35c"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.e=function(e){var t=[],c=a[e];if(0!==c)if(c)t.push(c[2]);else{var n=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=o(e);var b=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(d);var c=a[e];if(0!==c){if(c){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",b.name="ChunkLoadError",b.type=n,b.request=r,c[1](b)}a[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,c){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(c,n,function(t){return e[t]}.bind(null,n));return c},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],b=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var i=b;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"032f":function(e,t,c){},"42f7":function(e,t,c){},"43b3":function(e,t,c){},4460:function(e,t,c){"use strict";c("42f7")},5302:function(e,t,c){},"66e3":function(e,t,c){},7983:function(e,t,c){"use strict";c("7f48")},"7e56":function(e,t,c){"use strict";c("c0e4")},"7e79":function(e,t,c){},"7f48":function(e,t,c){},"9f80":function(e,t,c){"use strict";c("f352")},bb69:function(e){e.exports=JSON.parse('{"COUNTRY_LIST":{"ES":"Spain (Spanish)","WW":"International (English)"}}')},bf60:function(e){e.exports=JSON.parse('{"COUNTRY_LIST":{"ES":"España (español)","WW":"Internacional (inglés)"}}')},c0e4:function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function a(e,t){var c=Object(n["D"])("router-view");return Object(n["w"])(),Object(n["e"])(c)}var r=c("6b0d"),o=c.n(r);const u={},s=o()(u,[["render",a]]);var b=s,d=c("6c02"),i=(c("b64b"),function(e){return Object(n["z"])("data-v-f31f0efe"),e=e(),Object(n["x"])(),e}),f={id:"view-container"},l=i((function(){return Object(n["h"])("div",{id:"logo-container"},[Object(n["h"])("img",{alt:"ToberQuizz logo",src:"/logo256x256.png"}),Object(n["h"])("div",null,[Object(n["h"])("p",null,[Object(n["i"])("Desafíos "),Object(n["h"])("span",{class:"regular"},"gratuitos")]),Object(n["h"])("p",null,[Object(n["i"])("Tecnología "),Object(n["h"])("span",{class:"regular"},"ética")])])],-1)})),p=i((function(){return Object(n["h"])("p",{class:"regular list-heading"},"Selecciona un país",-1)})),j=["onClick"];function h(e,t,c,a,r,o){var u=Object(n["D"])("ArrowRight");return Object(n["w"])(),Object(n["g"])("div",f,[l,Object(n["h"])("div",null,[p,(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(Object.keys(e.quizzData),(function(t){return Object(n["w"])(),Object(n["g"])("div",{class:"list-item",key:t,onClick:function(c){return e.goToChallengeListView(t)}},[Object(n["h"])("p",null,Object(n["F"])(e.t("COUNTRY_LIST.".concat(t))),1),Object(n["j"])(u)],8,j)})),128))])])}var O={description:"Este primer desafío contiene imágenes que representan de alguna forma grupos o artistas de la música española desde los 60 hasta los 2000.",startingDate:"",questions:[{solutions:["7ac19dda99d2f454aafffb458d5cc412e8902dd5b39015b52efa8093b2646d44"]},{solutions:["dee54f209c657d1f874e4bf29b82d589542b98113f7cf5cbd4607ae0ff686228"]},{solutions:["2610dd028f52507ee5357869a540d484b186f64f662f559cf1581b1e44b482d7","ce340dcbb00898f1764a866106a8e9be7118b1661c74de1bf62658ce0ab6eba3"]},{solutions:["68ed58f0042443e9aabb3f336ffe63569ed9b81ef77b61377066236f3dc07d1d"]},{solutions:["5ecc2ace44a39f0188d0d5e57eea205124428cf78e9afae1166d21edf266fe03"]},{solutions:["9818771863f22121236addd861d39cab7fdbd199c4f5a6edaeda99809acf4056"]},{solutions:["da74548ee60c42e42105032d8ccc3f9dd52896f1f4f006e1ffc3138f63c0fa7d","5c10fea874d2dcb094fdaf4a632faaea3624197fb4254c08d98e30d0e1cea5f9"]},{solutions:["96c911183b5b670b96b453217a7bcee98186b6c41c82df0011b313c47ac08459","14c0c0c146f76e8d9eb50dcd3e435d52164967fed0d12faaaa6ec37bf92de18d"]},{solutions:["cfd240757b89d5d6ac9e539971d32b0d5d5e8741a3a53ab7147be310ec4ff500"]},{solutions:["0172352b965bca78d619568b6dcd7e1e56fe184358d46fe996c3c0722fe40e86"]},{solutions:["c4f359a4c7fc0318e0261416282e8ccbf8b0a105692de7dadc132c15e531c069"]},{solutions:["a9bc4ce36bdc01c474d06b11791cd84b3c14aaadf28e71e7e2dac63d9fec7baa"]},{solutions:["77080fc35e91572187e7195783e40d1e0fc34ff03580a11aae67ed6d0cc1860f","42a3c8bb0007f77d848722224b1d2452ec110e01df84f9998c8de6133d4eee85"]},{solutions:["13d3c032b66ac99f94fc38b45e8150be12024ef7bcdc8ffe4a8e3a10122d273e"]},{solutions:["f86dc97a9922c4531e3de5f31a6ec4a7692c176d7d0eb2c54c2e88b83999b812"]},{solutions:["550e5d15286408f7bd4b85d0d184ff8b5d866b06615dd7d12e69c7d683fc2ebe"]},{solutions:["b52e682e251b46458254bbbbe005cc2028196d30c2e9d3d1d9b310787e2fcf08"]},{solutions:["992e9f3f1973a3e3586acebf0bd6e5cdad922d245ac663f5b2e4908b1c30f91a","f50539d64274e5a4876932f84647f28690c0d2ac5fea19f7938fbb73cc3a4517"]},{solutions:["cac2402d8f959de3ba52f8d81dd3595ef5f84eaa7efafe38c87bcf6cfdc91426","ad1a2a84ed45e9989746a036e99e562142fbad8af1a5df12e99dfadccc74be71","ca2469be3d61b49cfb8d56ab1f3863fe90f7e97331691232ced94d2ee14ecc3c"]},{solutions:["9013af3af1b0d724329329895e783c330bc089c3a3dd4e2781fb8036ac79f1a9","ba28034c678ce25cd6c552f2b2ad815c8c38bfc87045672f831e0b4d9c7550e1"]},{solutions:["fdc7284f317fc7f2417c7ca8127fc14018c0b49af6da910d737a79b97fbccd12","049d3d32f553d9cb102ee5f0cecd0d09e2b31b4e4da945b78e37d53958de31ea"]},{solutions:["b81771e85603beec269f34fda553f9d5929751b891e7cdfb3480a3db6e98d3d7"]},{solutions:["1fc3b9a4ce67f69dff33558de9241dddf9fa98e5f1a39a9dec88ca20e90df4ac"]},{solutions:["253d4392c0b256759a14df7f42e483a2045855d170b32ebda1ad7fc8ca504583"]},{solutions:["c6b5fae1d46bc6f209a02b8b98bb61b1501e2ba7f3713f2e4d4aca0dda35629b"]},{solutions:["a963df3c3811e02b1acf9c1bfa2913713581d2d2dbd7a4333964031edf5c868e"]},{solutions:["de3e529ed48da3279809e009e2e8201ee86711827f5c500c0dd9df9da104e2fe"]},{solutions:["a768e38ab5ce976469a75497fe37c0830628bae3a620ad21af770ee1f0fb576e"]},{solutions:["c650d8538516250c593786e17fc230c1c4b3ab19b77f160f0b0db2db66b6d7fc"]},{solutions:["1cbec57fd8a449659907fc06995dec7631814cbcaa44fd9433bb9975818dc008"]}]},g={description:"Tras el éxito del primer desafío, vamos a continuar con la misma temática antes de dar paso a cosas más complicadas 😈... \n  \nDe nuevo, las imágenes imágenes que se muestran representan de alguna forma grupos o artistas de la música española desde los 60 hasta los 2000. En esta ocasión, los que aparecieron en el Desafío 1 están excluidos.",startingDate:"",questions:[{solutions:["d5e09714585a5466510079c95630f032a950fcf41fe8adfc47abc3511b707c69","d17eb95e106d6e78f20b12c45f739a40f8870aa3484fc14c8be42f80ca564cb1","94579d51273c6d751578afd7985f81fea41c7d9ac7a74bacfa1a682ff55aa6e7"]},{solutions:["52bec120710e6d6938c788204af711e96b4e16ac9c39ed288472e919e626d60d"]},{solutions:["e2a31602df92927a762d0ff8cfdf09116feb5bb6a13bb747c2f86b312e3ab829","c6042e7d72c223b01415b9fe1a001698c26bce1ef08a11abed5733d462e06117"]},{solutions:["ba87e6a0d41bbd7b9998c35fb9a12705f8d6b215d0f3aaebec15200a8c348ad3","3814bff3e2edecd3e533c84bbcefcdba2aad69d98ae3c24a6530ac84378242c3","c1667263fa4fe5ebdc3c661be4aa3cfcd828dc1137e53a1114d1c7de86a5161e"]},{solutions:["525ce041276235a1a6df375f4fb5e05fb38c434f924a52b76a720b12049f5f38"]},{solutions:["ba501faa41890c3cbc7dc94421e40e050fd851b1f5bd528718c6cf8a7d9653ae","5d1b6b0493f98566b1e830fd47007959d7d1c48f9d8cd116d09ad0a676355f1f"]},{solutions:["4ec35858c46355101ff6131b4af93a0f4c9043a1f8a75c9ca547c94da736b22e"]},{solutions:["9a73dee23325fe01415913b747d106e9000d51b40fac03d62ebb4c49a87eabf7"]},{solutions:["b1d0c3b239261811e1d00f96459f74b381f3fa0bebc13eecbcac8fd5283cf310"]},{solutions:["a23aef82574f9a5a680f088a04ca2deb05a0b6859564f10b59eeb9e08e028611","9de25d95d50f9e4f55460f967e8fe53a5a79d53a3088f83c554a0cde69f610d3"]},{solutions:["96f8ff6d750d6a1f766a671f3130d0fc43ca52e6ffdd89c28068d3472c43b401"]},{solutions:["0a1cc68245d948f64a53331bd92c09f30bd80cbb4488329be6ea43a014817764"]},{solutions:["000e677adf5f18cc4b0773a29ef263db90c3201736096a6639c4d8c877a3d96b","5d82c0fb85b58326d97ff56434b7c8cb2cf7adb91c99c667b37cddada2db3218"]},{solutions:["ccce19aaaff75d89f7d9c2dac5f1894631d95a6f3779a01f74aab6d16f4ca1f6","6a6de22d312e848e65c32f250d53d0dc83ab415ca8eb031340c916971e942da2"]},{solutions:["2341afc5853a6b4d74f32e92434ee1b6011ab7782d910bb2ca8b3ea7dece9de4","9d81c948a822e24e290383478396d233eee0f350341fdb48c7b0862ba47f1288"]},{solutions:["2d3c22a0f1c0213b8de330aeda9979f08c8ae4792257fd5fccd710741e3f2c04","d5a9102ca3760880aa3e4bb544d2d8e20ec432f1a947b637bc9a2dce4135d8a0"]},{solutions:["ec8e6a99e3efcf3f90b9852a3569e9173164f5c32ce1dd93cfd05aa388b6d972","781c20fe704115ce7ef32d3990e395896afc57321b333da9a36b7fd003eda0fd"]},{solutions:["4b9abd08965d18dc5f39593f81828edaa08229525d0f0704d4572e531a37e540"]},{solutions:["d18014927732111bf0a64697ea8bb94c8dd232e8e3924d2ba57f141f762d86c9"]},{solutions:["36c465eafd9b34033396f09bc0a1bfba267fcb8cf9f12df287e2c6d899615a1a"]},{solutions:["430f4d58f2292a3c32b9cd5cfc8d00022462912b8f4c65a305728ba2d0d8814b"]},{solutions:["56f521af7590fa081c6d78158dd55ca9e0f51afcc65f7ee54524ec7888822063"]},{solutions:["b4cdbd84e738054a24a5ce6a644e02e130e8fe849cb6befa22a3daa6d7e37251"]},{solutions:["3b86c0865cbc48e88aa8bbfd08f214d70482548ddba673afcfc37a46898e926a"]},{solutions:["c0e2e3dd8bac70ebf63f1e50c3fb6dcca498c7c35bf1f0edb5ae42c42119b949"]}]},v=[O,g],m=v,w={ES:m},y=c("47e2"),C={width:"12",height:"27",viewBox:"0 0 10 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k=["fill"];function A(e,t,c,a,r,o){return Object(n["w"])(),Object(n["g"])("svg",C,[Object(n["h"])("path",{d:"M1.3641 0.657318C1.17484 0.456231 0.858405 0.446642 0.657318\n    0.6359C0.456231 0.825158 0.446642 1.1416 0.6359 1.34268L1.3641 0.657318ZM9\n    9.5L9.3641 9.84268C9.5453 9.65016 9.5453 9.34984 9.3641 9.15732L9\n    9.5ZM0.6359 17.6573C0.446642 17.8584 0.456231 18.1748 0.657318\n    18.3641C0.858405 18.5534 1.17484 18.5438 1.3641 18.3427L0.6359\n    17.6573ZM0.6359 1.34268L8.6359 9.84268L9.3641 9.15732L1.3641 0.657318L0.6359\n    1.34268ZM8.6359 9.15732L0.6359 17.6573L1.3641 18.3427L9.3641 9.84268L8.6359\n    9.15732Z",fill:e.color},null,8,k)])}var x=Object(n["k"])({props:{color:{type:String,required:!1,default:"#170A09"}}});const q=o()(x,[["render",A]]);var N=q,T=Object(n["k"])({components:{ArrowRight:N},setup:function(){var e=w,t=Object(y["b"])(),c=t.t,n=Object(d["d"])(),a=function(e){n.push({path:"/".concat(e)})};return{quizzData:e,t:c,goToChallengeListView:a}}});c("d857");const S=o()(T,[["render",h],["__scopeId","data-v-f31f0efe"]]);var L=S,_={id:"view-container"};function R(e,t,c,a,r,o){var u=Object(n["D"])("AppBar"),s=Object(n["D"])("Challenge"),b=Object(n["D"])("Footer");return Object(n["w"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(u),Object(n["h"])("div",_,[e.challengeAvailable?(Object(n["w"])(),Object(n["e"])(s,{key:0,countryCode:e.countryCode,challengeNumber:e.challengeNumber},null,8,["countryCode","challengeNumber"])):Object(n["f"])("",!0),Object(n["j"])(b)])],64)}var z;c("caad"),c("2532"),c("07ac"),c("ac1f"),c("5319");(function(e){e["Spain"]="ES"})(z||(z={}));c("a4d3"),c("e01a");var E=function(e){return Object(n["z"])("data-v-0c122a52"),e=e(),Object(n["x"])(),e},D={class:"regular"},V={class:"description"},I=E((function(){return Object(n["h"])("p",null,"¿Eres capaz de adivinar todos?",-1)})),P=E((function(){return Object(n["h"])("hr",null,null,-1)})),B={id:"sticky-bar"};function F(e,t,c,a,r,o){var u=Object(n["D"])("QuestionsTable");return Object(n["w"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("h2",D,"Desafío nº "+Object(n["F"])(e.challengeNumber),1),Object(n["h"])("p",V,Object(n["F"])(e.challenge.description),1),I,P,Object(n["j"])(u,{challengeNumber:e.challengeNumber,countryCode:e.countryCode,challenge:e.challenge,checkedAnswers:e.checkedAnswers,onAnswer:e.onAnswer},null,8,["challengeNumber","countryCode","challenge","checkedAnswers","onAnswer"]),Object(n["h"])("div",B,[Object(n["h"])("div",null," Aciertos: "+Object(n["F"])(e.countOfValidAnswers)+" / "+Object(n["F"])(e.challenge.questions.length),1)])],64)}var H=c("2909"),M=(c("a9e3"),c("4de4"),c("d3b7"),c("1da1")),Q=(c("99af"),c("e9c4"),c("96cf"),c("6300"));function U(e,t){var c=Object(n["B"])(new Array);Object(n["u"])(Object(M["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(t.value!==z.Spain||1!==e.value){c.next=3;break}return c.next=3,a();case 3:r();case 4:case"end":return c.stop()}}),c)})))),Object(n["K"])([e,t],function(){var c=Object(M["a"])(regeneratorRuntime.mark((function c(n,o){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(t.value!==z.Spain||1!==e.value){c.next=3;break}return c.next=3,a();case 3:r();case 4:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}());var a=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q["a"].get({key:"ESP_001"});case 2:if(t=e.sent.value,t){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,Q["a"].set({key:"ES_1",value:t});case 7:return e.abrupt("return",Q["a"].remove({key:"ESP_001"}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var n=Object(M["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Q["a"].get({key:"".concat(t.value,"_").concat(e.value)});case 2:if(a=n.sent.value,a){n.next=5;break}return n.abrupt("return");case 5:c.value=JSON.parse(a);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(n){c.value=n,Q["a"].set({key:"".concat(t.value,"_").concat(e.value),value:JSON.stringify(n)})};return{answers:c,updateAnswers:o}}const J=U;var W=J,Y=c("bee2"),Z=c("d4ec"),G=(c("7db0"),c("3ca3"),c("ddb0"),c("3c74")),K=c.n(G),$=Object(Y["a"])((function e(){Object(Z["a"])(this,e)}));function X(e,t){var c=Object(n["B"])([]);return Object(n["u"])(Object(M["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,$.checkAnswers(e.value,t.value.questions);case 2:c.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),Object(n["K"])([e,t],Object(M["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,$.checkAnswers(e.value,t.value.questions);case 2:c.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),{checkedAnswers:c}}$.SALT="Tobertet",$.HASH_LENGTH=32,$.TYPE=K.a.ArgonType.Argon2id,$.isAnswerValid=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,c){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K.a.hash({pass:t.toLocaleLowerCase(),salt:$.SALT,hashLen:$.HASH_LENGTH,type:$.TYPE});case 2:return n=e.sent,e.abrupt("return",!!c.solutions.find((function(e){return e===n.hashHex})));case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),$.checkAnswer=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,$.isAnswerValid(t,c);case 3:return e.t1=e.sent,e.abrupt("return",{text:e.t0,isValid:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),$.checkAnswers=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,c){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=[],a=0;a<t.length;a++)t[a]&&(n[a]=$.checkAnswer(t[a],c[a]));return e.next=4,Promise.all(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();const ee=X;var te=ee;function ce(e,t){var c=Object(n["B"])({description:"",questions:[],startingDate:""});Object(n["u"])((function(){a()})),Object(n["K"])([e,t],(function(){a()}));var a=function(){c.value=w[t.value][e.value-1]};return{challenge:c}}const ne=ce;var ae=ne,re={class:"columns-select"},oe=Object(n["h"])("label",{for:"numColumns"},"Imágenes por fila: ",-1),ue=["value"],se={class:"columns-select"},be=Object(n["h"])("label",{for:"numColumns"},"Imágenes por fila: ",-1),de=["value"];function ie(e,t,c,a,r,o){var u=Object(n["D"])("Question");return Object(n["w"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",re,[oe,Object(n["L"])(Object(n["h"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.tableColumns=t}),name:"numColumns",id:"numColumns"},[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(e.availableColumns,(function(e){return Object(n["w"])(),Object(n["g"])("option",{key:e,value:e},Object(n["F"])(e),9,ue)})),128))],512),[[n["I"],e.tableColumns]])]),Object(n["h"])("div",{id:"questions-table","data-testid":"questions-table",style:Object(n["r"])({"grid-template-columns":"repeat(".concat(e.tableColumns,", 1fr)")})},[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(e.challenge.questions,(function(t,c){return Object(n["w"])(),Object(n["e"])(u,{key:c,question:t,questionNumber:c+1,checkedAnswer:e.checkedAnswers[c],challengeNumber:e.challengeNumber,countryCode:e.countryCode,onAnswer:e.emitAnswer},null,8,["question","questionNumber","checkedAnswer","challengeNumber","countryCode","onAnswer"])})),128))],4),Object(n["h"])("div",se,[be,Object(n["L"])(Object(n["h"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.tableColumns=t}),name:"numColumns",id:"numColumns"},[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(e.availableColumns,(function(e){return Object(n["w"])(),Object(n["g"])("option",{key:e,value:e},Object(n["F"])(e),9,de)})),128))],512),[[n["I"],e.tableColumns]])])],64)}var fe,le={class:"question"},pe=["alt","src"],je={class:"input-container"},he=["disabled"],Oe=["disabled"];function ge(e,t,c,a,r,o){return Object(n["w"])(),Object(n["g"])("div",le,[Object(n["h"])("div",{class:Object(n["q"])(["image-container",e.status]),"data-testid":"image-container"},[Object(n["h"])("img",{alt:e.question.altText,src:"/resources/".concat(e.countryCode,"/").concat(e.challengeNumber,"/").concat(e.questionNumber,".png")},null,8,pe)],2),Object(n["h"])("div",je,[Object(n["h"])("label",null,Object(n["F"])(e.questionNumber)+" - ",1),Object(n["L"])(Object(n["h"])("input",{disabled:"valid"===e.status,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputText=t})},null,8,he),[[n["J"],e.inputText]]),Object(n["h"])("button",{disabled:"valid"===e.status,onClick:t[1]||(t[1]=function(){return e.emitAnswer&&e.emitAnswer.apply(e,arguments)})},"✔️",8,Oe)])])}(function(e){e["Error"]="error",e["Clean"]="clean",e["Valid"]="valid"})(fe||(fe={}));var ve=Object(n["k"])({emits:["answer"],props:{question:{type:Object,required:!0},checkedAnswer:{type:Object},questionNumber:{type:Number,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,t){var c=Object(n["G"])(e),a=c.checkedAnswer,r=c.questionNumber,o=Object(n["B"])(""),u=Object(n["B"])(fe.Clean),s=function(){t.emit("answer",o.value,r.value)},b=function(e){o.value=(null===e||void 0===e?void 0:e.text)||"",u.value=e?e.isValid?fe.Valid:fe.Error:fe.Clean};return Object(n["u"])((function(){return b(a.value)})),Object(n["K"])(a,(function(){return b(a.value)})),{inputText:o,status:u,emitAnswer:s}}});c("7983");const me=o()(ve,[["render",ge],["__scopeId","data-v-474d2ef6"]]);var we=me,ye=Object(n["k"])({components:{Question:we},emits:["answer"],props:{checkedAnswers:{type:Object,required:!0},challenge:{type:Object,required:!0},challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},setup:function(e,t){var c=Object(n["B"])(window.innerWidth>992?[3,4,5,6]:[1,2]),a=Object(n["B"])(window.innerWidth>992?4:1),r=function(e,c){t.emit("answer",e,c)};return{tableColumns:a,availableColumns:c,emitAnswer:r}}});c("d8f5");const Ce=o()(ye,[["render",ie]]);var ke=Ce,Ae=Object(n["k"])({props:{challengeNumber:{type:Number,required:!0},countryCode:{type:String,required:!0}},components:{QuestionsTable:ke},setup:function(e){var t=Object(n["G"])(e),c=t.challengeNumber,a=t.countryCode,r=W(c,a),o=r.answers,u=r.updateAnswers,s=ae(c,a),b=s.challenge,d=te(o,b),i=d.checkedAnswers,f=Object(n["c"])((function(){return i.value.filter((function(e){return e&&e.isValid})).length})),l=function(e,t){var c=Object(H["a"])(o.value);c[t-1]=e,u(c)};return{challenge:b,checkedAnswers:i,countOfValidAnswers:f,onAnswer:l}}});c("9f80");const xe=o()(Ae,[["render",F],["__scopeId","data-v-0c122a52"]]);var qe=xe,Ne=Object(n["h"])("hr",null,null,-1),Te=Object(n["h"])("p",null,[Object(n["i"])(" ToberQuizz es totalmente gratuito y su misión es puramente solidaria. "),Object(n["h"])("a",{class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},"¿Quieres saber por qué y cómo contribuir?")],-1),Se=Object(n["h"])("p",null,[Object(n["i"])(" Hecho para ti con mucho ❤️ por "),Object(n["h"])("span",{class:"regular"},"Robert Mengual"),Object(n["i"])(". ")],-1),Le=[Ne,Te,Se];function _e(e,t){return Object(n["w"])(),Object(n["g"])("footer",null,Le)}c("f78f");const Re={},ze=o()(Re,[["render",_e]]);var Ee=ze,De={id:"app-bar"};function Ve(e,t,c,a,r,o){return Object(n["w"])(),Object(n["g"])("div",De,[Object(n["h"])("img",{class:"pointer",alt:"ToberQuizz logo",onClick:t[0]||(t[0]=function(){return e.goToHomeView&&e.goToHomeView.apply(e,arguments)}),src:"/secondary-logo.png"})])}var Ie=Object(n["k"])({setup:function(){var e=Object(d["d"])(),t=function(){e.push({path:"/"})};return{goToHomeView:t}}});c("7e56");const Pe=o()(Ie,[["render",Ve],["__scopeId","data-v-18b4048e"]]);var Be=Pe,Fe=Object(n["k"])({components:{Challenge:qe,Footer:Ee,AppBar:Be},data:function(){return{countryCode:z.Spain,challengeNumber:1,challengeAvailable:!1}},mounted:function(){this.getUrlParams(),Object.values(z).includes(this.countryCode)&&w[this.countryCode][this.challengeNumber-1]?this.challengeAvailable=!0:this.$router.replace("/")},methods:{getUrlParams:function(){this.countryCode=this.$route.params.countryCode.toUpperCase(),this.challengeNumber=parseInt(this.$route.params.challengeNumber)}},watch:{$route:function(){}}});c("fe84");const He=o()(Fe,[["render",R]]);var Me=He,Qe=function(e){return Object(n["z"])("data-v-404c46f8"),e=e(),Object(n["x"])(),e},Ue={id:"view-container"},Je=Qe((function(){return Object(n["h"])("h2",null,[Object(n["i"])("Desafíos en "),Object(n["h"])("span",{class:"regular"},"España")],-1)})),We=Qe((function(){return Object(n["h"])("p",{id:"why-toberquizz"},[Object(n["h"])("a",{class:"regular",rel:"noopener noreferrer",target:"_blank",href:"https://robertmengual.com/projects;project=toberquizz"},"¿Por qué ToberQuizz?")],-1)})),Ye=Qe((function(){return Object(n["h"])("p",{class:"regular list-heading"},"Selecciona un desafío",-1)})),Ze={class:"list-item not-allowed"},Ge={class:"gray"},Ke=Qe((function(){return Object(n["h"])("span",{class:"danger"},"(Marzo)",-1)})),$e=["onClick"];function Xe(e,t,c,a,r,o){var u=Object(n["D"])("AppBar"),s=Object(n["D"])("ArrowRight");return Object(n["w"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(u),Object(n["h"])("div",Ue,[Je,We,Object(n["h"])("div",null,[Ye,Object(n["h"])("div",Ze,[Object(n["h"])("p",Ge,[Object(n["i"])(" Desafío "+Object(n["F"])(e.challenges.length+1)+" ",1),Ke]),Object(n["j"])(s,{color:"#a0a0a0"})]),(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(Object.keys(e.challenges).reverse(),(function(t){return Object(n["w"])(),Object(n["g"])("div",{class:"list-item pointer",key:t,onClick:function(c){return e.goToChallengeView(parseInt(t)+1)}},[Object(n["h"])("p",null,"Desafío "+Object(n["F"])(parseInt(t)+1),1),Object(n["j"])(s)],8,$e)})),128))])])],64)}var et=Object(n["k"])({components:{ArrowRight:N,AppBar:Be},setup:function(){var e=w,t=Object(d["d"])(),c=Object(d["c"])(),a=Object(n["B"])(new Array),r=function(e){t.push({path:"/".concat(c.params.countryCode,"/").concat(e)})};return Object(n["u"])((function(){var n=c.params.countryCode;Object.values(z).includes(n)?a.value=e[n]:t.replace("/")})),{goToChallengeView:r,challenges:a}}});c("4460");const tt=o()(et,[["render",Xe],["__scopeId","data-v-404c46f8"]]);var ct=tt,nt=[{path:"/",component:L},{path:"/:countryCode",component:ct},{path:"/:countryCode/:challengeNumber",component:Me}],at=Object(d["a"])({history:Object(d["b"])("/"),routes:nt}),rt=at,ot=c("bb69"),ut=c("bf60"),st=Object(y["a"])({messages:{en:ot,es:ut},locale:"es",fallbackLocale:"en"});c("7e79");Object(n["d"])(b).use(st).use(rt).mount("#app")},d857:function(e,t,c){"use strict";c("032f")},d8f5:function(e,t,c){"use strict";c("66e3")},f352:function(e,t,c){},f78f:function(e,t,c){"use strict";c("43b3")},fe84:function(e,t,c){"use strict";c("5302")}});
//# sourceMappingURL=app.32e0b98e.js.map