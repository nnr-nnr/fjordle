(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){e.exports=a(56)},39:function(e,t,a){},40:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),c=(a(39),a(7)),i=(a(40),a(10)),s=(a(21),[{lat:38.98695,lng:-94.61968,city:"Overland Park",prov:"Kansas",state:"United States",name:"Meadow Lake Country Club",strCoords:""},{lat:-43.89834,lng:171.70011,city:"Ashburton",prov:"Canterbury",state:"New Zealand",name:"Leafield",strCoords:""},{lat:64.87137,lng:26.72718,city:"Juntunen",prov:"Northern Ostrobothnia",state:"Finland",name:"Musta",strCoords:""},{lat:46.98999,lng:-107.83178,city:"Mosby",prov:"Montana",state:"United States",name:"North Fork Sage Hen Creek",strCoords:""},{lat:42.21667,lng:102.06667,city:"Elst H\xf6t\xf6liyn Ovoo",prov:"\xd6mn\xf6gov\u012d",state:"Mongolia",name:"",strCoords:""},{lat:-22.95,lng:115.883333,city:"Mount Florry",prov:"",state:"Australia",name:"",strCoords:""},{lat:34.2,lng:37.36667,city:"Jabal Ru\u2019\u016bs",prov:"Homs",state:"Syria",name:"\u0646\u0627\u062d\u064a\u0629 \u0627\u0644\u0642\u0631\u064a\u062a\u064a\u0646 (Al-Qaryatayn Subdistrict)",strCoords:""},{lat:31.48038,lng:-112.84932,city:"Jabal Ru\u2019\u016bs",prov:"Sonora",state:"Mexico",name:"Cerro El Tullido",strCoords:""},{lat:12.72261,lng:106.00555,city:"Char Tnaol",prov:"Kratie",state:"Cambodia",name:"Char Tnaol",strCoords:""},{lat:16.72226,lng:76.11456,city:"Bhairvadgi",prov:"Karnataka",state:"India",name:"Bhairvadgi",strCoords:""},{lat:-32.88786,lng:134.06667,city:"Westall",prov:"South Australia",state:"Australia",name:"Point Westall",strCoords:""},{lat:-1.90898,lng:-60.06045,city:"S\xedtio Selva de Pedra",prov:"Amazonas",state:"Brazil",name:"Fazenda C\xedrculo Ga\xfacho",strCoords:""},{lat:-16.65,lng:-58.483333,city:"El Vi",prov:"Santa Cruz",state:"Bolivia",name:"C\xf3rrego Morro Branco",strCoords:""},{lat:-12.33333,lng:-38.55,city:"Sangradouro",prov:"Bahia",state:"Brazil",name:"Sangradouro",strCoords:""},{lat:55.14191,lng:-110.74348,city:"Lakeland County",prov:"Alberta",state:"Canada",name:"",strCoords:""},{lat:66.51091,lng:4.714,city:"Akaitcho Lake",prov:"Nunavut",state:"Canada",name:"",strCoords:""},{lat:34.80387,lng:-118.12702,city:"Rosamond",prov:"California",state:"United States",name:"Rainbow Farms (historical)",strCoords:""},{lat:17.9521,lng:37.598,city:"Jib\u0101l Wershiqan\u012b",prov:"Red Sea",state:"Sudan",name:"",strCoords:""},{lat:5.16667,lng:37.9,city:"Luk\u2019aluk\u2019\u0113 Bota",prov:"Oromiya",state:"Ethiopia",name:"",strCoords:""},{lat:12.68,lng:54.12197,city:"",prov:"Soqatra",state:"Yemen",name:"",strCoords:""},{lat:42.18333,lng:53.66667,city:"Chagali",prov:"",state:"Turkmenistan",name:"Chagali",strCoords:""},{lat:68.5,lng:-132.666667,city:"Sitidgi Lake",prov:"Inuvik",state:"Canada",name:"",strCoords:""},{lat:54.68841,lng:110.81929,city:"Alla",prov:"Buryatiya Republic",state:"Russia",name:"Alla",strCoords:""},{lat:49.78934,lng:73.13738,city:"Karagandy",prov:"Karaganda",state:"Kazakhstan",name:"Malaya Bukpa",strCoords:""},{lat:32.85816,lng:-109.45361,city:"Topaz Tank",prov:"Arizona",state:"United States",name:"",strCoords:""},{lat:-52.82152,lng:-72.90381,city:"Isla Chandler",prov:"Region of Magallanes",state:"Chile",name:"",strCoords:""},{lat:-22.196389,lng:35.251667,city:"Cabo Murriane",prov:"Inhambane",state:"Mozambique",name:"Lago Nhachinhate",strCoords:""},{lat:50.66667,lng:6.03333,city:"Lontzen",prov:"",state:"Belgium",name:"",strCoords:""},{lat:-19.0317,lng:28.78076,city:"",prov:"Matabeleland North",state:"Zimbabwe",name:"",strCoords:""}]),u=r.a.createContext(),m=r.a.createContext();function d(){return Object(n.useContext)(u)}var v=r.a.createContext(),g=r.a.createContext();var p=r.a.createContext();function b(){return Object(n.useContext)(p)}var E=function(e,t){var a=Math.abs(e),n=e>0?"+":"-",r=t?5:4;for(n=a<1?n.concat(t?"000":"00",Math.round(10*a)/10).replace(".",""):a<10?n.concat(t?"00":"0",Math.round(10*a)/10).replace(".",""):t&&a<100?n.concat(t?"0":"",Math.round(10*a)/10).replace(".",""):n.concat(Math.round(10*a)/10).replace(".","");n.length<r;)n=n.concat("0");return n},f=function(){var e=new Date("October 10, 2022 00:00:00").getTime(),t=Date.now(),a=Math.floor((t-e)/864e5),n=s[a%s.length];return n.strCoords=function(e,t){var a=E(e,!1),n=E(t,!0),r=a.concat(n);return console.log(r),r}(n.lat,n.lng),n};function y(e){var t=e.children,a=Object(n.useState)({green:[],yellow:[],grey:[]}),l=Object(c.a)(a,2),o=l[0],i=l[1],s=Object(n.useState)(0),d=Object(c.a)(s,2),b=d[0],E=d[1],y=f();return r.a.createElement(u.Provider,{value:b},r.a.createElement(m.Provider,{value:E},r.a.createElement(p.Provider,{value:y},r.a.createElement(v.Provider,{value:o},r.a.createElement(g.Provider,{value:function(e,t,a){var n=y.strCoords;n[t]===e?i(function(t){return{green:t.green.indexOf(e)<0?t.green.concat(e):t.green,yellow:t.yellow,grey:t.grey}}):n.includes(e)?i(function(t){return{green:t.green,yellow:t.yellow.indexOf(e)<0?t.yellow.concat(e):t.yellow,grey:t.grey}}):i(function(t){return{green:t.green,yellow:t.yellow,grey:t.grey.indexOf(e)<0?t.grey.concat(e):t.grey}})}},t)))))}function h(e){var t=e.id,a=e.decimalIndex,l=e.invalidGuess,o=e.toggleInvalidGuess,s=e.rowNum,u=e.addAttempt,v=d(),p=Object(n.useContext)(m),E=Object(n.useContext)(C),f=Object(n.useContext)(w),y=Object(n.useContext)(g),h=Object(n.useContext)(x),O=Object(n.useContext)(N),j=b().strCoords,A=S(),F=Object(n.useContext)(k),L=function(){return(t%12===0||t%12===6)&&s===A&&(""===z||"+/-"===z)},M=function(){return t%12===5},R=function(){return t%12===3||t%12===10},B=function(){return t%12===4||t%12===2||t%12===9},I=Object(n.useState)(R()?".":M()?",":L()?"+/-":""),T=Object(c.a)(I,2),z=T[0],P=T[1],J=Object(n.useState)(""),G=Object(c.a)(J,2),K=G[0],H=G[1];Object(n.useEffect)(function(){s===A-1&&H(D())},[A]);var D=function(){var e="Ind"+(t%12).toString();if(!R()&&!M())return""===z?e:e+" "+function(){var e=j.split(""),t=Array(9).fill(null);return E.split("").forEach(function(a,n){e[n]===a?(e[n]="_",t[n]="green"):e.indexOf(a)<0&&(t[n]="grey")}),E.split("").forEach(function(a,n){t[n]||(e.indexOf(a)<0?t[n]="grey":(e[e.indexOf(a)]="_",t[n]="yellow"))}),t[a]}()};return Object(n.useEffect)(function(){var e=function(e){var n=e.key;"Backspace"===n?t%12===0?(P("+/-"),f(E.substring(0,E.length-1))):""===z||"+/"===z?(f(E.substring(0,E.length-1)+"R"),O(t%12===4||t%12===6||t%12===11?h-2:h-1)):(P(L()?"+/-":""),f(E.substring(0,E.length-1))):L()?n.match(/\+|-/)&&1===n.length&&(P(n),f(E+n),B()?O(h+2):O(h+1)):n.match(/[0-9]/)&&1===n.length?t%12===11&&""===z?(P(n),f(E+n)):t%12<11&&(P(n),f(E+n),B()?O(h+2):O(h+1)):"Enter"===n&&t%12===11&&""!==z&&(!function(){var e=parseFloat(E.substring(0,4))/10,t=parseFloat(E.substring(4,12))/10;return-90<=e&&e<=90&&-180<=t&&t<=180}()?o(!l):(F(A+1),O(h+1),Object(i.a)(E).forEach(function(e,t){y(e,t,a)}),u(E),E===j?p(1):t>=59&&p(2)))};if(h===t&&v<1)return E.indexOf("R")>-1&&(f(E.substring(0,E.length-1)),P("")),document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),r.a.createElement("div",{className:"cell ".concat(h===t&&s===A?"curr":""," ").concat(""!==z&&"+/-"!==z?"guessed":""," ").concat(K," ").concat(L()?"signedCell":""," ").concat(R()?"decimalCell":""," ").concat(M()?"commaCell":""," ")},r.a.createElement("span",null,L()?"+/-":z))}var C=r.a.createContext(),w=r.a.createContext();var O=r.a.memo(function(e){var t=e.rowNum,a=e.addAttempt,l=d(),o=S(),s=Object(n.useState)(!1),u=Object(c.a)(s,2),m=u[0],v=u[1],g=Object(n.useState)(""),p=Object(c.a)(g,2),b=p[0],E=p[1];function f(e){E(e)}var y=Object(i.a)(Array(12).keys()).map(function(e){return r.a.createElement(h,{id:e+12*t,decimalIndex:e>10?e-3:e>5?e-2:e>3?e-1:e,key:e,rowNum:t,invalidGuess:m,toggleInvalidGuess:v,addAttempt:a,currGuess:b,updateCurrGuess:f})});return r.a.createElement(C.Provider,{value:b},r.a.createElement(w.Provider,{value:f},r.a.createElement("div",null,r.a.createElement("div",{className:"row ".concat(m?" invalid ":""," ").concat(1===l&&o===t+1?"solved-row":""," ")},y))))}),x=r.a.createContext(),N=r.a.createContext();var j=r.a.createContext(),k=r.a.createContext();function S(){return Object(n.useContext)(j)}function A(e){var t=e.addAttempt,a=e.numRows,l=void 0===a?5:a,o=(e.attempts,Object(n.useState)(0)),s=Object(c.a)(o,2),u=s[0],m=s[1];var d=Object(n.useState)(0),v=Object(c.a)(d,2),g=v[0],p=v[1];var b=Object(i.a)(Array(l).keys()).map(function(e){return r.a.createElement(O,{rowNum:e,key:e,addAttempt:t})});return r.a.createElement(x.Provider,{value:u},r.a.createElement(N.Provider,{value:function(e){m(e)}},r.a.createElement(j.Provider,{value:g},r.a.createElement(k.Provider,{value:function(e){p(e)}},r.a.createElement("div",null,r.a.createElement("div",{className:"gridHolder"},b))))))}a(23);function F(e){var t=e.letter,a=e.id,l=Object(n.useContext)(v);return r.a.createElement("button",{className:"kybrdKey ".concat(l.green.includes(t)?"green":l.yellow.includes(t)?"yellow":l.grey.includes(t)?"grey":""," ").concat("Enter"===a||"Backspace"===a?"value-key":"big-key"),type:"button",key:t,onClick:function(e){var t=new KeyboardEvent("keydown",{key:a});document.dispatchEvent(t)}},t)}function L(){var e=Object(n.useState)(window.innerWidth<900),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){function e(){r(window.innerWidth<900)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),a}function M(){var e=L(),t=(e?["1","2","3","4","5","6","7","8","9","-","0","+","ENTER"]:["ENTER","0","1","2","3","4","5","6","7","8","9","-","+"]).map(function(e,t){return r.a.createElement(F,{letter:e,id:"ENTER"===e?"Enter":e,key:t})}),a=r.a.createElement(F,{id:"Backspace",key:13,letter:r.a.createElement("i",{className:"fa fa-angle-double-left icon","aria-hidden":"true"})});return r.a.createElement("div",{className:"board"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"kybrdRow"},t.slice(0,-1)),r.a.createElement("div",{className:"kybrdRowMobile"},t[t.length-1]," ",a)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"kybrdRow"},t," ",a)))}var R=a(18);a(24);var B=r.a.memo(function(){var e=b(),t=d(),a=L(),n={width:a?"70vw":"450px",height:a?"20vh":"250px"},l=Object(R.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyBCdB5K2GNehJwSf20KZLCA0Jw1eJwz-ds"}).isLoaded,o=r.a.useState(null),i=Object(c.a)(o,2),s=(i[0],i[1]),u={lat:e?e.lat:null,lng:e?e.lng:null},m=r.a.useCallback(function(e){var t=new window.google.maps.LatLngBounds(u);e.fitBounds(t),s(e)},[]),v=r.a.useCallback(function(e){s(null)},[]);return console.log("map"),l?r.a.createElement("div",{className:"mapHolder"},r.a.createElement(R.a,{mapContainerStyle:n,options:{center:u,zoom:18,mapTypeId:"satellite",streetViewControl:!1,mapTypeControl:t,scaleControl:!0,restriction:t?null:{latLngBounds:{north:u.lat+.03,south:u.lat-.03,east:u.lng+.03,west:u.lng-.03}},fullscreenControl:!0},onLoad:m,onUnmount:v},r.a.createElement(R.b,{position:u}))):r.a.createElement("div",{className:"mapHolder"})}),I=a(28),T=function(e,t,a){return{lat:parseFloat(e.substring(0,4))/10,lng:parseFloat(e.substring(4,9))/10,size:.3,color:a===e?"rgb(121, 167, 107)":"rgb(198, 179, 102)",index:t}};function z(e){var t=e.attempts,a=Object(n.useState)([]),l=Object(c.a)(a,2),o=l[0],i=l[1],s=b().strCoords,u=t[t.length-1],m=L();return Object(n.useEffect)(function(){if(t.length>0){var e=T(u,t.length,s);if(5===t.length&&s!==u){var a=T(s,-1,s);i(o.concat(e,a))}else i(o.concat(e))}},[t]),r.a.createElement("div",{className:"globeHolder ".concat(m?"mobile":"")},r.a.createElement(I.a,{globeImageUrl:"./earth-blue-marble.jpeg",backgroundColor:"#FFFFFF",pointsData:o,pointAltitude:"size",pointColor:"color",height:200,width:200,pointLabel:function(e){return" <b>".concat(e.index<0?"Answer":"Attempt ".concat(e.index),":</b> <br>(").concat(e.lat,", ").concat(e.lng,")")}}))}a(25);var P=function(e){return(e.name?" near "+e.name+" in ":e.city?" near ":" in ")+(e.city?e.city+", ":"")+(e.prov?e.prov+", ":"")+(e.state?e.state+".":".")},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return 2===e?"Nice try!":1===e?"Great job! You solved the FJORDLE in ".concat(t," attempt").concat(t>1?"s":"","."):"Great effort!"};function G(e){var t=e.handleClose,a=e.numAttempts,n=b(),l=d(),o=P(n);return r.a.createElement("div",{className:"popup-box"},r.a.createElement("div",{className:"content-box solve"},r.a.createElement("button",{type:"button",onClick:t},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),r.a.createElement("div",{className:"subtitle-holder"},r.a.createElement("span",{className:"subtitle"},"SUMMARY")),r.a.createElement("div",{className:"stats"},r.a.createElement("p",null,J(l,a))),r.a.createElement("div",{className:"location"},r.a.createElement("p",null,"(",Math.round(10*n.lat)/10,","," ",Math.round(10*n.lng)/10,") is ",o)),r.a.createElement("h4",{className:"endtext"},"Come back again tomorrow!"," ",["\ud83c\udf0e","\ud83c\udf0d","\ud83c\udf0f","\ud83d\uddfa"][Math.floor(4*Math.random())])))}var K=function(e){var t=e.example,a=e.exInd,n=e.color,l=Object(i.a)(Array(12).keys()).map(function(e){return r.a.createElement("div",{className:"example-grid-cell ".concat(3===e||10===e?"decimal":""," ").concat(5===e?"comma":""," ").concat(e===a?n:""),key:e},r.a.createElement("span",null,t[e]))});return r.a.createElement("div",{className:"example-grid-holder"},r.a.createElement("div",{className:"example-grid-row"},l))};function H(e){var t=e.handleClose,a=L();return r.a.createElement("div",{className:"popup-box"},r.a.createElement("div",{className:"content-box"},r.a.createElement("button",{type:"button",onClick:t},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),r.a.createElement("div",{className:"subtitle-holder"},r.a.createElement("span",{className:"subtitle"},"HOW TO PLAY")),r.a.createElement("div",{className:"instructions"},r.a.createElement("p",null,"Guess the ",r.a.createElement("b",null,"FJORDLE")," in 5 tries."),r.a.createElement("p",null,"Each guess must be a valid latitude-longitude coordinate in decimal degree notation. Hit the enter button to submit."),r.a.createElement("p",null,"After each guess, the color of the tiles will change to indicate how close your guess was to the coordinate."," ",a?"":"Your guess will also be\n            displayed on the globe on the right.")),r.a.createElement("div",{className:"examples"},r.a.createElement("h4",null,"Examples"),r.a.createElement(K,{example:"+36.9,+007.7",exInd:4,color:"green"}),r.a.createElement("p",null,"The number ",r.a.createElement("b",null,"9")," is in the coordinate pair and in the correct spot."),a?"":r.a.createElement("br",null),r.a.createElement(K,{example:"-19.2,-061.1",exInd:8,color:"yellow"}),r.a.createElement("p",null,"The number ",r.a.createElement("b",null,"6")," is in the coordinate pair but in the wrong spot."),a?"":r.a.createElement("br",null),r.a.createElement(K,{example:"+52.1,+130.8",exInd:1,color:"grey"}),r.a.createElement("p",null,"The number ",r.a.createElement("b",null,"5")," is not in the coordinate pair in any spot."),a?"":r.a.createElement("br",null)),r.a.createElement("div",{className:"contact"},r.a.createElement("p",null,"Found a \ud83e\udeb3? Reach out:"," ",r.a.createElement("a",{href:"mailto:contact.fjordle@gmail.com"},"contact.fjordle@gmail.com")," ")),r.a.createElement("h4",{className:"endtext"},"A new FJORDLE will be available each day!")))}function D(e){var t=e.attemptsLen,a=d(),l=Object(n.useState)(!1),o=Object(c.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),m=Object(c.a)(u,2),v=m[0],g=m[1],p=function(){s(!i)},b=function(){g(!v)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"icons"},r.a.createElement("button",{type:"button",title:"Info",onClick:p},r.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})),r.a.createElement("button",{type:"button",title:"Revealed on game end",onClick:a?b:null},r.a.createElement("i",{className:"fa fa-check-circle ".concat(a?"revealed":""),"aria-hidden":"true"}))),r.a.createElement("div",null,r.a.createElement("span",{className:"title"},"Fjordle"))),r.a.createElement("div",{className:"popups"},a>0&&v&&r.a.createElement(G,{className:"solve-popup",handleClose:b,numAttempts:t}),i&&r.a.createElement(H,{handleClose:p})))}a(51).config();var U=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{attemptsLen:a.length}),r.a.createElement(z,{attempts:a}),r.a.createElement(B,null),r.a.createElement(A,{addAttempt:function(e){l(a.concat(e))},attempts:a}),r.a.createElement(M,null))))},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null))),W()}},[[32,1,2]]]);
//# sourceMappingURL=main.2e0328ff.chunk.js.map