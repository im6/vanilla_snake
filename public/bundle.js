!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/build",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var i={65:{x:-1,y:0},68:{x:1,y:0},87:{x:0,y:-1},83:{x:0,y:1}},r=i[68];function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.direction=r,this.previousDirection=null,this._score=3,this.location=[];for(var e=3;e>0;e-=1)this.location.push({x:0,y:e})}var e,n,i;return e=t,(n=[{key:"changeDirection",value:function(t){this.previousDirection.x!==-1*t.x&&this.previousDirection.y!==-1*t.y&&(this.direction=t)}},{key:"move",value:function(){this._score===this.location.length&&this.location.pop(),this.previousDirection=this.direction,this.location.unshift(this.nextHead)}},{key:"eat",value:function(){this._score+=1}},{key:"nextHead",get:function(){var t=this.location[0];return{x:t.x+this.direction.x,y:t.y+this.direction.y}}},{key:"score",get:function(){return this._score-3}}])&&o(e.prototype,n),i&&o(e,i),t}(),c=function(t,e,n){t.fillStyle=n,t.fillRect(20*e.x,20*e.y,20,20)},s=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},u=function(t,e){return t.x===e.x&&t.y===e.y},l=function t(e){var n={x:s(0,19),y:s(0,19)};return function(t,e){return!e.some((function(e){return u(e,t)}))}(n,e)?n:t(e)};function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var h=document.getElementById("gameStartBtn"),d=document.getElementById("scoreText"),y=Symbol("singleton"),v={},x=new(function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),y in v)return v[y];this.initCanvas(),this.addAppListener(),this.snake=null,this.food=null,this.gameOver=!0,v[y]=this}var e,n,r;return e=t,(n=[{key:"initCanvas",value:function(){var t=document.getElementById("appCan");t&&(t.width=400,t.height=400,this.ctx=t.getContext("2d"),this.ctx.fillStyle="#f5f5f5",this.ctx.fillRect(0,0,400,400))}},{key:"addAppListener",value:function(){var t=this;document.addEventListener("keydown",(function(e){var n=e.keyCode;n in i&&!t.gameOver&&t.snake.changeDirection(i[n])})),h&&h.addEventListener("click",(function(){t.resetGame()}))}},{key:"showGameOver",value:function(t){this.ctx.font="30px Play",this.ctx.fillStyle="#3f72af",this.ctx.fillText("You hit ".concat(t,", game over."),10,50)}},{key:"detectNext",value:function(){var t,e=null;return u(this.snake.nextHead,this.food)?(this.snake.eat(),this.food=l(this.snake.location),d.innerText=this.snake.score):(t=this.snake.nextHead).x>=20||t.x<0||t.y>=20||t.y<0?e="wall":function(t,e){for(var n=!1,i=3;i<e.length;i+=1)u(t,e[i])&&(n=!0);return n}(this.snake.nextHead,this.snake.location)&&(e="body"),e}},{key:"render",value:function(){if(!this.gameOver){var t,e=this.detectNext();if(e)return this.gameOver=!0,void this.showGameOver(e);this.ctx.clearRect(0,0,400,400),this.snake.move(),t=this.ctx,this.snake.location.forEach((function(e,n){c(t,e,0===n?"#3f72af":"#c7d0d5")})),function(t,e){c(t,e,"#ff7148")}(this.ctx,this.food)}}},{key:"resetGame",value:function(){this.snake=new a,d.innerText=0,this.food=l(this.snake.location),this.gameOver=!1}}])&&f(e.prototype,n),r&&f(e,r),t}());setInterval(x.render.bind(x),400)}]);