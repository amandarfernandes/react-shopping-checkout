(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={BillItem:"BillItem_BillItem__dRHHj",Label:"BillItem_Label__tqPD9",Amount:"BillItem_Amount__2yjpK",Red:"BillItem_Red__3ZCAo",Total:"BillItem_Total__2GsBV"}},28:function(e,t,a){e.exports={CheckoutWrapper:"App_CheckoutWrapper__1Arzq"}},29:function(e,t,a){e.exports={PromoMessage:"Promo_PromoMessage__2oRzA",Cart:"Promo_Cart__2Fzwh",CartItem:"Promo_CartItem__2wnqs",Detail:"Promo_Detail__1CH7r"}},34:function(e,t,a){e.exports=a(69)},42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),c=a(31),i=a(8),s=a(26),m={},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;arguments.length>1&&arguments[1];return e},p=Object(i.c)({checkout:u}),d=(a(42),a(14)),h=a.n(d),b=a(32),f=a(33),_=a(27),g=a(3),C=a(4),v=a(6),E=a(5),j=a(7),I=a(28),O=a.n(I),y=a(10),k=a.n(y),S=function(e){var t=e.label,a=e.amount,n=[k.a.Amount,"Savings"===t?k.a.Red:null],l=[k.a.BillItem,t.includes("Total")?k.a.Total:null];return r.a.createElement("div",{className:l.join(" ")},r.a.createElement("p",{className:k.a.Label},t),r.a.createElement("p",{className:n.join(" ")},"$",parseFloat(a).toFixed(2)))},w=function(e){return e.children},x=function(e){var t=e.billItems.map(function(e){return r.a.createElement(S,{key:e.label,label:e.label,amount:e.amount})});return r.a.createElement(w,null,t)},A=a(9),N=a.n(A),T=function(e){var t=e.name,a=e.image,n=e.price,l=e.description;return r.a.createElement("div",{className:N.a.CartItem},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("div",{className:N.a.Detail},r.a.createElement("h4",null,t),r.a.createElement("p",null,l),r.a.createElement("p",{className:N.a.Highlight},"$",parseFloat(n).toFixed(2))))},D=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClick=function(){a.setState(function(e){return{open:!e.open}},function(){console.log(a.state)})},a}return Object(j.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.state.open,t=this.props.items,a=e?"Hide Item Details -":"See Item Details +",n=e?t.map(function(e){return r.a.createElement(T,Object.assign({key:e.id},e))}):null;return r.a.createElement(w,null,r.a.createElement("p",{className:N.a.CartMessage,onClick:this.handleClick},a),e?r.a.createElement("div",{className:N.a.Cart},n):null)}}]),t}(n.Component),M=a(29),P=a.n(M),B=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={promocode:""},a}return Object(j.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:this.state.promocode,onChange:function(t){e.setState({promocode:t.target.value})}}),r.a.createElement("input",{type:"submit",value:"Apply"}))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClick=function(){a.setState(function(e){return{open:!e.open}},function(){console.log(a.state)})},a}return Object(j.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.state.open,t=e?"Hide Promo Code -":"Apply promo code +";return r.a.createElement(w,null,r.a.createElement("p",{className:P.a.PromoMessage,onClick:this.handleClick},t),e?r.a.createElement(B,null):null)}}]),t}(n.Component),R=a(30),F=a.n(R).a.create({baseURL:"https://react-shoppingcart-af.firebaseio.com/"}),L=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={cartItems:[{id:"MAC001",name:"Modern Arm Anywhere Chair",description:"The perfect blend of modern design and functional style",image:"https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg",price:102.5},{id:"MSC001",name:"Comfortable Fabric Sofa Chair",description:"The perfect seat to read on a rainy day",image:"https://cdn.pixabay.com/photo/2015/12/05/23/45/sofa-1078931_960_720.jpg",price:92.75},{id:"HWG001",name:"Mikasa Wine Glasses - Set of 6 ",description:"",image:"https://cdn.pixabay.com/photo/2017/09/26/16/44/wine-2789265_960_720.jpg",price:12}],billItems:[{label:"Subtotal",amount:102.5},{label:"Savings",amount:5.3},{label:"Est. taxes & fees",amount:6.45}],estimatedTotal:0},a.componentDidMount=Object(_.a)(h.a.mark(function e(){var t,n,r,l,o,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/cart.json");case 2:t=e.sent,n=t.data,console.log(n),r=Object.keys(n).map(function(e){return Object(f.a)({id:e},n[e])}),console.log(r),l=a.state.billItems,o=r.reduce(function(e,t){return e+t.price},0).toFixed(2),c=l.filter(function(e){return"Subtotal"!==e.label}),l=[{label:"Subtotal",amount:+o}].concat(Object(b.a)(c)),a.setState({cartItems:r,billItems:l},function(){var e=l.reduce(function(e,t){return"Savings"===t.label?e-t.amount:e+t.amount},0);a.setState({estimatedTotal:e},function(){})});case 12:case"end":return e.stop()}},e,this)})),a}return Object(j.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.state,t=e.billItems,a=e.estimatedTotal,n=e.cartItems;return r.a.createElement("div",{className:O.a.CheckoutWrapper},r.a.createElement(x,{billItems:t}),r.a.createElement("hr",null),r.a.createElement(S,{key:"Total",label:"Est. Total",amount:a}),n.length>0?r.a.createElement(D,{items:n}):null,r.a.createElement("hr",null),r.a.createElement(H,null))}}]),t}(n.Component),W=[s.a],q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,z=Object(i.e)(p,q(i.a.apply(void 0,W)));o.a.render(r.a.createElement(c.a,{store:z},r.a.createElement(L,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={CartMessage:"CartItems_CartMessage__3Ig6p",Cart:"CartItems_Cart__2QtxD",CartItem:"CartItems_CartItem__1RPN6",Detail:"CartItems_Detail__3ufI_",Highlight:"CartItems_Highlight__2SIJu"}}},[[34,2,1]]]);
//# sourceMappingURL=main.e42967f4.chunk.js.map