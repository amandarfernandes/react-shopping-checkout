(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,r){e.exports={Cart:"CartItems_Cart__34GhA",CartItem:"CartItems_CartItem__4ENlg",Detail:"CartItems_Detail__1-0JA",Price:"CartItems_Price__2S-fZ"}},13:function(e,t,r){e.exports={BillItem:"BillItem_BillItem__2Z6Q-",Label:"BillItem_Label__W1raO",Amount:"BillItem_Amount__2H0SA",Red:"BillItem_Red__3RolG",Total:"BillItem_Total__3gznu"}},15:function(e,t,r){e.exports={PromoMessage:"Promo_PromoMessage__GrPjY",Promo:"Promo_Promo__oMBj0"}},32:function(e,t,r){e.exports={CheckoutWrapper:"App_CheckoutWrapper__1QoFL"}},34:function(e,t,r){e.exports=r(69)},63:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(26),c=r.n(o),l=r(4),i=r(5),s=r(30),u=r(3),m=r(6),p=r.n(m),b=r(14),f=r(31),d=r.n(f).a.create({baseURL:"https://react-shoppingcart-af.firebaseio.com/"}),h=function(e){var t=Object.keys(e).map(function(t){return Object(u.a)({id:t},e[t])}),r=t.reduce(function(e,t){return e+t.price},0).toFixed(2),a=.045*r;return{type:"SET_CART_ITEMS",billItems:{cartItems:t,subTotal:r,taxes:a,estimatedTotal:r+a}}},_=function(e){return{type:"SET_PROMOTIONS",promotions:Object.keys(e).map(function(t){return Object(u.a)({id:t},e[t])})}},E={cartItems:[],subTotal:0,savings:0,taxes:0,estimatedTotal:0,error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CART_ITEMS":return console.log(t.cartItems),Object(u.a)({},e,t.billItems,{error:null});case"FETCH_CART_FAILED":return Object(u.a)({},e,{error:t.error});case"UPDATE_PRICES":return Object(u.a)({},e,{error:null},t.billItems);default:return e}},O=r(33),I={promotions:null,promo:"",error:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROMOTIONS":return Object(u.a)({},e,{promotions:Object(O.a)(t.promotions),error:!1});case"SET_PROMOTION":return Object(u.a)({},e,{promo:t.promo,error:!1});default:return e}},j=Object(i.c)({cart:v,promo:T}),y=(r(63),r(7)),P=r(8),C=r(10),g=r(9),S=r(11),A=r(32),k=r.n(A),w=r(13),x=r.n(w),N=function(e){var t=e.label,r=e.amount,a=[x.a.Amount,"Savings"===t?x.a.Red:null],o=[x.a.BillItem,t.includes("Total")?x.a.Total:null];return n.a.createElement("div",{className:o.join(" ")},n.a.createElement("p",{className:x.a.Label},t),n.a.createElement("p",{className:a.join(" ")},"$",parseFloat(r).toFixed(2)))},R=function(e){return e.children},D=function(e){var t=e.billItems.map(function(e){return n.a.createElement(N,{key:e.label,label:e.label,amount:e.amount})});return n.a.createElement(R,null,t)},F=r(12),M=r.n(F),L=function(e){var t=e.name,r=e.image,a=e.price,o=e.description;return n.a.createElement("div",{className:M.a.CartItem},n.a.createElement("img",{src:r,alt:t}),n.a.createElement("div",{className:M.a.Detail},n.a.createElement("h4",null,t),n.a.createElement("p",null,o)),n.a.createElement("p",{className:M.a.Price},"$",parseFloat(a).toFixed(2)))},B=function(e){var t=e.items.map(function(e){return n.a.createElement(L,Object.assign({key:e.id},e))});return n.a.createElement("div",{className:M.a.Cart},t)},H=r(15),U=r.n(H),W=function(e){function t(){var e,r;Object(y.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(C.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={promocode:""},r.componentDidMount=function(){r.props.onFetchPromos()},r.handleSubmit=function(e){e.preventDefault();var t=r.state.promocode,a=r.props.promos.filter(function(e){return e.id.toLowerCase()===t.toLowerCase()});if(a.length>0){var n=a[0];console.log(n);var o=n.percentage;r.props.onSetPromotion(n.id),r.props.applyPromo(o/100)}r.setState({promocode:""})},r}return Object(S.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this,t=this.props.promos?n.a.createElement("input",{type:"text",value:this.state.promocode,placeholder:"Enter your promocode",onChange:function(t){e.setState({promocode:t.target.value})}}):null;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:U.a.Promo},t,n.a.createElement("button",{disabled:!this.state.promocode.trim(),type:"submit"},"Apply")))}}]),t}(a.Component),G=Object(l.b)(function(e){return{promos:e.promo.promotions}},function(e){return{onFetchPromos:function(){return e(function(){var e=Object(b.a)(p.a.mark(function e(t){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("promotions.json");case 3:r=e.sent,t(_(r.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FETCH_PROMOS_FAILED",error:e.t0});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},onSetPromotion:function(t){return e({type:"SET_PROMOTION",promo:t})}}})(W),J=function(e){function t(){var e,r;Object(y.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(C.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={open:!1},r.handleClick=function(){r.setState(function(e){return{open:!e.open}})},r}return Object(S.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.state.open,t=e?"Hide Promo Code -":"Apply promo code +";return n.a.createElement(R,null,n.a.createElement("p",{className:U.a.PromoMessage,onClick:this.handleClick},t),e?n.a.createElement(G,{applyPromo:this.props.applyPromo}):null,this.props.promotion?n.a.createElement("p",null,this.props.promotion," APPLIED"):null)}}]),t}(a.Component),Q=Object(l.b)(function(e){return{promotion:e.promo.promo}})(J),X=function(e){function t(){var e,r;Object(y.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(C.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).componentDidMount=Object(b.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.props.onfetchCartItems();case 1:case"end":return e.stop()}},e,this)})),r.calculateTotal=function(){var e=r.state.billItems.reduce(function(e,t){return"Savings"===t.label?e-t.amount:e+t.amount},0);r.setState({estimatedTotal:e})},r.applyPromo=function(e){var t=r.props.billItems;console.log("billItems",t);var a=t.filter(function(e){return"SubTotal"===e.label})[0].amount,n=a*e,o=a-n.toPrecision(4);r.props.onApplyPromo(n,o)},r}return Object(S.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cartItems,r=e.billItems,a=e.estimatedTotal,o=t.length>0?n.a.createElement(B,{items:t}):null;return n.a.createElement("div",{className:k.a.CheckoutWrapper},o,n.a.createElement("hr",null),n.a.createElement(D,{billItems:r}),n.a.createElement("hr",null),n.a.createElement(N,{key:"Total",label:"Est. Total",amount:a}),n.a.createElement(Q,{applyPromo:this.applyPromo}))}}]),t}(a.Component),Z=Object(l.b)(function(e){return{cartItems:e.cart.cartItems,billItems:[{label:"SubTotal",amount:e.cart.subTotal},{label:"Savings",amount:e.cart.savings},{label:"Taxes",amount:e.cart.taxes}],estimatedTotal:e.cart.estimatedTotal}},function(e){return{onfetchCartItems:function(){return e(function(){var e=Object(b.a)(p.a.mark(function e(t){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/cart.json");case 3:r=e.sent,t(h(r.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FETCH_CART_FAILED",error:e.t0});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},onApplyPromo:function(t,r){return e(function(e,t){return{type:"UPDATE_PRICES",billItems:{savings:e,estimatedTotal:t}}}(t,r))}}})(X),$=[s.a],z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,V=Object(i.e)(j,z(i.a.apply(void 0,$)));c.a.render(n.a.createElement(l.a,{store:V},n.a.createElement(Z,null)),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.9c053cea.chunk.js.map