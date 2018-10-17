!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t),n(0);var o="#3f72af",r={37:{x:-1,y:0},39:{x:1,y:0},38:{x:0,y:-1},40:{x:0,y:1}},i=r[40],a=function(e,t,n){e.fillStyle=n,e.fillRect(20*t.x,20*t.y,20,20)},c=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},u=function(e,t){return e.x===t.x&&e.y===t.y},l=u,f=function e(t){var n={x:c(0,19),y:c(0,19)};return function(e,t){return!t.some(function(t){return u(t,e)})}(n,t)?n:e(t)};function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.direction=i,this.location=[];for(var t=3;0<t;t--)this.location.push({x:0,y:t})}var t,n;return t=e,(n=[{key:"changeDirection",value:function(e){this.previousDirection.x!==-1*e.x&&this.previousDirection.y!==-1*e.y&&(this.direction=e)}},{key:"move",value:function(e){var t=this;e===t.location.length&&t.location.pop();var n={x:t.location[0].x+1*t.direction.x,y:t.location[0].y+1*t.direction.y};t.previousDirection=t.direction,t.location.unshift(n)}},{key:"isHitBody",value:function(){for(var e=!1,t=this.location[0],n=4;n<this.location.length;n++)l(t,this.location[n])&&(e=!0);return e}},{key:"detect",value:function(e,t){var n=this.location[0];l(n,e)?t("food"):function(e){return 20<=e.x||e.x<0||20<=e.y||e.y<0}(n)?t("wall"):this.isHitBody()&&t("body")}}])&&s(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=document.getElementById("scoreText"),h=document.getElementById("gameStartBtn"),p=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;t.initCanvas(),t.addKeyboardListener(),t.score=null,t.snake=null,t.food=null,t.gameOver=!0}var t,n;return t=e,(n=[{key:"initCanvas",value:function(){var e=document.getElementById("appCan");e.width=400,e.height=400,this.ctx=e.getContext("2d"),this.ctx.fillStyle="#f5f5f5",this.ctx.fillRect(0,0,400,400)}},{key:"addKeyboardListener",value:function(){var e=this;document.addEventListener("keydown",function(t){var n=t.keyCode;n in r&&!e.gameOver&&e.snake.changeDirection(r[n])})}},{key:"createNewFood",value:function(e){return f(e)}},{key:"updateScore",value:function(e){this.score=e,y.innerText=e-3}},{key:"showGameOver",value:function(e){this.ctx.clearRect(0,0,400,400),this.ctx.font="30px Play",this.ctx.fillStyle=o,this.ctx.fillText("You hit ".concat(e,", game over."),10,50)}},{key:"onSnakeDetectError",value:function(e){var t=this;"food"===e?(t.updateScore(t.score+1),t.food=t.createNewFood(t.snake.location)):"wall"===e?(t.gameOver=!0,t.showGameOver(e)):"body"===e&&(t.gameOver=!0,t.showGameOver(e))}},{key:"render",value:function(){var e=this;e.gameOver||(e.ctx.clearRect(0,0,400,400),e.snake.move(e.score),e.snake.detect(e.food,e.onSnakeDetectError.bind(e)),function(e,t){t.forEach(function(t,n){a(e,t,0===n?o:"#c7d0d5")})}(e.ctx,e.snake.location),function(e,t){a(e,t,"#ff7148")}(e.ctx,e.food))}},{key:"resetGame",value:function(){var e=this;e.updateScore(3),e.snake=new d,e.food=e.createNewFood(e.snake.location),e.gameOver=!1}}])&&v(t.prototype,n),e}());h.addEventListener("click",function(e){p.resetGame()}),setInterval(p.render.bind(p),400)}]);