(function(t){function n(n){for(var o,s,i=n[0],r=n[1],u=n[2],m=0,f=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,i=1;i<e.length;i++){var r=e[i];0!==c[r]&&(o=!1)}o&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},c={app:0},a=[];function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/vue-vending-machine/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=r;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0c8a":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"vm"},[e("div",[e("user")],1),e("vending-machine")],1)])},a=[],s=e("5530"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"user"},[e("div",{staticClass:"user_coins"},[e("h1",[t._v("Покупатель")]),e("p",[t._v("Всего денег:"+t._s(t.userTotal)+" ₽")]),e("ul",t._l(t.userCoins,(function(n,o){return e("li",{key:o,staticClass:"user-coin-li"},[e("div",{staticClass:"user-coin-cost",on:{click:function(e){return t.insertCoin(n.cost)}}},[t._v(t._s(n.cost)+" ₽")]),e("button",{staticClass:"insert_coin",on:{click:function(e){return t.insertCoin(n.cost)}}},[t._v("Insert Coin")]),e("div",{staticClass:"user_coin_amount"},[t._v(t._s(n.amount)+" шт.")])])})),0),e("div",[e("h3",[t._v("Приобретенные товары")]),e("ul",t._l(t.userGoods,(function(n,o){return e("li",{key:o},[e("div",[t._v(t._s(n.name))]),e("div",{class:"user-goods--"+n.name},[t._v(t._s(n.amount)+" шт.")])])})),0),t._v(" Потрачено: "+t._s(t.userTotalSpent)+" ")])]),e("div")])},r=[],u=e("2f62"),l={name:"user",computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["d"])(["user"])),Object(u["c"])(["userTotal"])),Object(u["c"])(["userCoins"])),Object(u["c"])(["userGoods"])),Object(u["c"])(["userTotalSpent"])),methods:Object(s["a"])({},Object(u["b"])(["insertCoin"]))},m=l,f=(e("9e3c"),e("2877")),d=Object(f["a"])(m,i,r,!1,null,null,null),v=d.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vmachine"},[e("h1",{staticClass:"vmachine-h1"},[t._v("Вендинговая машина")]),e("div",[t._v("vmachinecoins "+t._s(t.vmachineCoins))]),e("ul",{staticClass:"cashier-goods"},t._l(t.cashier.goods,(function(n){return e("li",{key:n.name},[e("div",{class:"cashier-goods--"+n.name}),e("div",[t._v(t._s(n.cost)+" ₽")]),e("div",[t._v(t._s(n.amount)+" шт.")]),e("button",{on:{click:function(e){return t.buyProduct({price:n.cost,name:n.name})}}},[t._v(t._s(n.name))])])})),0),e("span",[t._v("Монеты аппарата:")]),e("div",{staticClass:"payment"},[e("h3",[t._v("внесенная сумма")]),t._v(" "+t._s(t.payment)+" ")]),e("button",{attrs:{type:"button"},on:{click:t.getPayback}},[t._v("GetPayback")]),e("ul",{staticClass:"cashier-coins"},[t._l(t.cashierCoins,(function(n,o){return e("li",{key:o},[e("div",{staticClass:"coin_round"},[t._v(t._s(n.cost)+" ₽")]),e("div",{staticClass:"coin_amount"},[t._v(t._s(n.amount)+" шт.")])])})),e("li",[e("span",[t._v("Баланс в аппарате: ")]),t._v(t._s(this.cashierTotal))])],2)])},p=[],_={name:"vending-machine",computed:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["c"])(["cashierTotal"])),Object(u["d"])(["cashier"])),Object(u["d"])(["payback"])),Object(u["d"])(["payment"])),Object(u["c"])(["cashierCoins"])),Object(u["c"])(["vmachineCoins"])),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["acceptPayment"])),Object(u["b"])(["buyProduct"])),Object(u["b"])(["getPayback"]))},h=_,O=(e("59d4"),Object(f["a"])(h,b,p,!1,null,null,null)),j=O.exports,y={name:"App",components:{vendingMachine:j,user:v},computed:Object(s["a"])({},Object(u["c"])(["userTotal"])),created:function(){this.$store.dispatch("initState"),console.log(this.userTotal)}},C=y,g=(e("5c0b"),Object(f["a"])(C,c,a,!1,null,null,null)),T=g.exports;e("4de4"),e("7db0"),e("d81d"),e("13d5"),e("b0c0");o["a"].use(u["a"]);var k={user:{goods:{tea:null,coffee:null,juice:null},coins:[{cost:1,amount:10},{cost:2,amount:30},{cost:5,amount:20},{cost:10,amount:15}]}},P=new u["a"].Store({state:{user:{goods:[{name:"tea",cost:13,amount:0},{name:"coffee",cost:18,amount:0},{name:"coffeemilk",cost:21,amount:0},{name:"juice",cost:35,amount:0}],coins:[{cost:1,amount:10},{cost:2,amount:30},{cost:5,amount:20},{cost:10,amount:15}]},payment:0,cashier:{goods:[{name:"tea",cost:13,amount:10},{name:"coffee",cost:18,amount:20},{name:"coffeemilk",cost:21,amount:20},{name:"juice",cost:35,amount:15}],coins:[{cost:1,amount:100},{cost:2,amount:100},{cost:5,amount:100},{cost:10,amount:100}]}},getters:{userTotal:function(t){return t.user.coins.reduce((function(t,n){return t+n.amount*n.cost}),0)},cashierTotal:function(t){return t.cashier.coins.reduce((function(t,n){return t+n.amount*n.cost}),0)},userCoins:function(t){return t.user.coins.sort((function(t,n){return n.cost-t.cost}))},cashierCoins:function(t){return t.cashier.coins.sort((function(t,n){return n.cost-t.cost}))},userGoods:function(t){return t.user.goods.filter((function(t){return t.amount>0}))},userTotalSpent:function(t){return t.user.goods.reduce((function(t,n){return t+n.amount*n.cost}),0)}},mutations:{INIT_STATE:function(t){t.isInitialised=!0,t=k},INSERT_COIN:function(t,n){var e=t.user.coins.find((function(t){return t.cost===n}));if(e.amount>0){var o=t.cashier.coins.find((function(t){return t.cost===n}));e.amount=e.amount-1,t.payment=t.payment+n,o.amount=o.amount+1}},BUY_PRODUCT:function(t,n){if(t.payment<n.price)console.log("недостаточно денег");else if(t.payment>=n.price){t.payment=t.payment-n.price;var e=t.cashier.goods.find((function(t){return t.name===n.name}));e.amount=e.amount-1;var o=t.user.goods.find((function(t){return t.name===n.name}));o.amount=o.amount+1}},GET_PAYBACK:function(t,n){t.payment=n.paybackLocal,t.cashier.coins=n.cashierCoins,t.user.coins=n.userCoins}},actions:{initState:function(t){var n=t.commit,e=t.state;e.isInitialised||n("INIT_STATE")},insertCoin:function(t,n){var e=t.commit;e("INSERT_COIN",n)},buyProduct:function(t,n){var e=t.commit;e("BUY_PRODUCT",n)},getPayback:function(t){var n=t.commit,e=t.getters,o=t.state,c=o.payment,a=e.userCoins,s=e.cashierCoins.map((function(t){var n=t.amount*t.cost,e=a.find((function(n){return n.cost===t.cost}));return n>=c?(t.amount=t.amount-Math.floor(c/t.cost),e.amount=e.amount+Math.floor(c/t.cost),c-=Math.floor(c/t.cost)*t.cost,t):n<o.payment?(e.amount=e.amount+t.amount,t.amount=0,t):void 0}));n("GET_PAYBACK",{cashierCoins:s,userCoins:a,paybackLocal:c})}}});o["a"].config.productionTip=!1,new o["a"]({store:P,render:function(t){return t(T)}}).$mount("#app")},"59d4":function(t,n,e){"use strict";var o=e("0c8a"),c=e.n(o);c.a},"5c0b":function(t,n,e){"use strict";var o=e("9c0c"),c=e.n(o);c.a},"9c0c":function(t,n,e){},"9e3c":function(t,n,e){"use strict";var o=e("bbb9"),c=e.n(o);c.a},bbb9:function(t,n,e){}});
//# sourceMappingURL=app.7d9e9cb6.js.map