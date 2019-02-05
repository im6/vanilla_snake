import {
  SNAKE_INIT_LENGTH,
 } from '../constant';
 
export const initSnake = () => {
  let snake = [];
  for (let i = SNAKE_INIT_LENGTH; i > 0; i--) {
    // box on index == 0 will be the head
    snake.push({ x: i, y: 0 });
  }
  return snake;
}

export const move = (snake, [direction, len]) => {
  let nx = snake[0].x + direction.x;
  let ny = snake[0].y + direction.y;

  let nextHead = {
    x: nx,
    y: ny,
  };
  if(snake.length > len){
    snake.pop()
  }
  snake.unshift(nextHead);
  return snake;
}
