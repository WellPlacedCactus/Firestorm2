
// ENGINE SOURCE CODE HERE (EDIT AT YOUR OWN RISK) //

/////////////////////////////////////////////////////// REALLY REALLY GOOD UTILITY FUNCTIONS

const randint = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rands = () => {
  return Math.random() < 0.5 ? -1 : 1;
};

/////////////////////////////////////////////////////// GLOBALS

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const mouse = {
  x: 0,
  y: 0,
  down: false
};

/////////////////////////////////////////////////////// EVENT HANDLERS

addEventListener('load', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

addEventListener('mousemove', ({x, y}) => {
  mouse.x = x;
  mouse.y = y;
});

addEventListener('mousedown', () => {
  mouse.down = true;
});

addEventListener('mouseup', () => {
  mouse.down = false;
});

/////////////////////////////////////////////////////// LOCALS

const handlers = [];
const fillAlpha = 1 / 1;

/////////////////////////////////////////////////////// FUNCTIONS

const tick = () => {
  handlers.forEach(handler => {
    handler.tick();
  });
};

const clear = () => {
  c.fillStyle = `hsla(0, 100%, 0%, ${fillAlpha})`;
  c.fillRect(0, 0, canvas.width, canvas.height);
};

const draw = () => {
  handlers.forEach(handler => {
    handler.draw();
  });
};

/////////////////////////////////////////////////////// LOOPS

const loop = () => {
  tick();
  clear();
  draw();
  requestAnimationFrame(loop);
};