(this.webpackJsonpproject_bday=this.webpackJsonpproject_bday||[]).push([[0],[,,,,function(e,t,n){},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),a=n(5),i=n.n(a),r=(n(10),n(2)),c=n(0),l="NUM_SOLVED";var u=function(e){var t=e.started,n=e.go;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Welcome! Congrats! You solved the first clue",Object(c.jsx)("br",{}),"Continue on to see what awaits you",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Here you'll find a list of clues",Object(c.jsx)("br",{}),"And riddles, hints, and puzzles too",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Some hints will lead you to a code,",Object(c.jsx)("br",{}),"Some hints have answers you will know.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"And, with each code correct,",Object(c.jsx)("br",{}),"Closer and closer you will get,",Object(c.jsx)("br",{}),"To finding the destination I have set..."]}),Object(c.jsx)("div",{className:"start-container",children:Object(c.jsx)("button",{className:"start-button",onClick:n,children:t?"continue":"begin"})})]})},h=(n(4),Object(c.jsx)("span",{className:"error",children:"Try again"})),d=Object(c.jsx)("span",{className:"error",children:"\ud83c\udf89"}),b=function(e){var t=e.hint,n=e.answer,s=e.advance,a=e.unlock,i=e.showAnswer,l=Object(o.useState)(""),u=Object(r.a)(l,2),b=u[0],j=u[1],m=Object(o.useState)(!1),f=Object(r.a)(m,2),O=f[0],p=f[1],g=Object(o.useState)(!1),y=Object(r.a)(g,2),x=y[0],v=y[1],w=function(){!function(e){for(var t=e.setVisible,n=e.delay,o=void 0===n?400:n,s=e.numTimes,a=0;a<2*s;)setTimeout((function(){t(!0)}),o*a),a++,setTimeout((function(){t(!1)}),o*a),a++}({setVisible:v,delay:300,numTimes:2}),setTimeout((function(){j(""),a(),s()}),1200)},k=function(e){e.preventDefault(),w(),p(!1)};return Object(c.jsxs)("div",{className:"step-container",children:[Object(c.jsx)("span",{className:"hint",children:t}),Object(c.jsxs)("div",{className:"step-content-container",children:[Object(c.jsxs)("div",{className:"error-container",children:[Object(c.jsx)("div",{className:O?"error-shown":"error-hidden",children:h}),Object(c.jsx)("div",{className:x?"success-shown":"success-hidden",children:d})]}),Object(c.jsx)("form",{onSubmit:k,children:i?Object(c.jsx)("span",{className:"answer",children:n}):Object(c.jsx)("input",{className:"input",value:b,onInput:function(e){j(e.target.value)},type:"text"})}),Object(c.jsx)("div",{className:"submit-button-container",children:!i&&Object(c.jsx)("button",{className:"submit-button",onClick:k,children:"enter"})})]})]})},j=[["Early Saturday \n     Some caffeine would be the dream \n     Maybe check the fridge? \n","bergamot"],["John Bonham, Keith Moon, Buddy Rich \n     Would all be very drawn to this.","123456"],["we're live! \ud83d\udca1","peach"],["Behind this picture of Mihalis, \n     Standing next to the stairs to the roof, \n     You'll find -- \n     Actually it's not the outside stairs. \n     Might not even be Mihalis?","89137"],["where stray ping pong balls lie","901924"],["Periodic rotation, I yearn, \n     Dropping things off with each turn, \n     I like to feed, \n     I make life easy, \n     For more than one species on earth.","42 wallaby way"],["I know you're strong but DO NOT LIFT \n     Otherwise some things might shift","612899"],["Some doors open to new opportunities. \n     Some doors open to...carbs.","juniper"],["When you look hard enough, \n     there's always a message to be found. \n     But sometimes it's spelled out right in front of you \n     And you can read it on your way out.","this is it"],["99 bottles of beer on the wall, 99 bottles of beer... \n     but how many hats?","17"],["I spin around right round right round","jobs"],["Above the bed above the bed","021628"],["You can put things on me \n     And you can find games in me \n     Look inside for something else that you need","396435"],["This piece is an addition of your own, \n     It fits so nicely in this home. \n     Look behind it for a code","870022"],["A universal symbol for medical aid \n     In this case, it has something else that you need.","bandaid"],["A woman with red hair and smokey eyes \n     Mysterious, maybe dangerous, behind a fan she hides \n     What says her fan?","interclub"],["Look in the book where you would look \n     if you wanted a recipe for SOUPS","french onion"],["Mihalis and son having a blast \n     This moment captured is very fast","space mountain"],["They're typically 3 dimensional. \n     Look behind the knight that's only 2D","663880"],["There's more than just fish in the tank \n     Enter below the number of legs","10"],["Find me next to the boxing gloves \n     that are not meant for punching","922479"],["He gets you where you need to be \n     This is the name of your trusty old steed","linus"],["you'll need some fuel for the journey ahead \n     head to campbells for some coffee and bread \n     Your food and drink will be waiting for you \n     Along with the code that you will need too","pickle"],["When used as a common noun \n     It describes a grassland  \n     Otherwise it names a town \n     Where your friends live inland \n     \n     Call those friends up for the code.","golden gate park"],["The kindest person \n     The best vibes to have around \n     He brightens every mood. \n     \n     Contact the subject of this poem for the code.","thai rock"],["A mighty spirit \n     Majestic as ancient groves \n     Lover of carrots \n     \n     Contact the subject of this poem for the code.","pinecone"]],m=function(e){var t=e.currStep,n=e.totalSteps;return Object(c.jsxs)("div",{className:"step-number",children:[t,"/",n]})},f=function(e){var t=e.goBack,n=e.advance;e.nextDisabled;return Object(c.jsxs)("div",{className:"next-buttons",children:[Object(c.jsx)("button",{className:"next-button ".concat(t?"":"hidden"),onClick:t,children:"<"}),Object(c.jsx)("button",{className:"next-button ".concat(n?"":"hidden"),onClick:n,children:">"})]})},O=function(e){var t=e.startingStep,n=e.onComplete,s=Object(o.useState)(Math.min(t,j.length-1)),a=Object(r.a)(s,2),i=a[0],u=a[1],h=Object(o.useState)(t),d=Object(r.a)(h,2),O=d[0],p=d[1],g=function(){i===j.length-1&&n(),i>=O||u(i+1)},y=function(){0!==i&&u(i-1)},x=function(){p(O+1),function(e){try{localStorage.setItem(l,JSON.stringify(e))}catch(t){}}(O+1),O+1!==j.length?u(i+1):n()},v=j.map((function(e){return Object(c.jsx)(b,{hint:(t=e[0],t.split("\n").map((function(e){return Object(c.jsx)("p",{children:e})}))),answer:e[1],showAnswer:O>i,unlock:x,advance:g,goBack:y});var t}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{currStep:i+1,totalSteps:j.length}),v[i],Object(c.jsx)(f,{goBack:i>0?y:void 0,advance:i<O?g:void 0,nextDisabled:i>=O})]})},p=function(e){var t=e.goBack,n=Object(o.useState)(!0),s=Object(r.a)(n,2),a=s[0],i=s[1];return setTimeout((function(){return i(!1)}),1),Object(c.jsxs)("div",{className:"end-poem ".concat(a?"end-hidden":"end-shown"),children:[Object(c.jsxs)("p",{children:["You'll find me in a meadow where flowers don't grow,",Object(c.jsx)("br",{}),"But our love bloomed,",Object(c.jsx)("br",{}),"On warm summer nights under the stars",Object(c.jsx)("br",{}),"A special place in our hearts.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"PS text me when you're on your way pls :) ","<3"]}),Object(c.jsx)("div",{className:"start-container",children:Object(c.jsx)("button",{className:"start-button",onClick:t,children:"<"})})]})},g="home",y="solving",x=function(){var e=function(){var e;try{e=JSON.parse(localStorage.getItem(l)||"0")}catch(t){e=0}return e}(),t=Object(o.useState)(g),n=Object(r.a)(t,2),s=n[0],a=n[1];switch(s){case g:return Object(c.jsx)(u,{started:e>0,go:function(){return a(y)}});case y:return Object(c.jsx)(O,{startingStep:e,onComplete:function(){return a("solved")}});default:return Object(c.jsx)(p,{goBack:function(){return a(y)}})}};n(12);var v=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(x,{})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),w()}],[[13,1,2]]]);
//# sourceMappingURL=main.749ae728.chunk.js.map