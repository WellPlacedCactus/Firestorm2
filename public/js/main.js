
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
const fillAlpha = 1 / 10;
let color = 0;

let x = 0;
let y = 0;
let speed = 15;
let vx = speed;
let vy = 0;

/////////////////////////////////////////////////////// FUNCTIONS

const init = () => {
  handlers.push(new ParticleHandler(handler => {
    x += vx;
    y += vy;
    if (vx > 0) {
      if (x > canvas.width) {
        vx = 0;
        vy = speed;
        x = canvas.width;
      }
    }
    if (vx < 0) {
      if (x < 0) {
        vx = 0;
        vy = -speed;
        x = 0;
      }
    }
    if (vy > 0) {
      if (y > canvas.height) {
        vy = 0;
        vx = -speed;
        y = canvas.height;
      }
    }
    if (vy < 0) {
      if (y < 0) {
        vy = 0;
        vx = speed;
        y = 0;
      }
    }
    for (let i = 0; i < 10; i++) {
      handler.add(new Particle(
        x,
        y,
        randint(25, 50),
        randint(25, 50),
        Math.random() * Math.PI,
        color + 180,
        1,
        Math.random() * rands(),
        Math.random() * rands(),
        0,
        Math.random() * 0.1,
        0,
        -0.01
      ));
    }
  }));
  handlers.push(new ParticleHandler(handler => {
    if (mouse.down) {
      for (let i = 0; i < 10; i++) {
        handler.add(new Particle(
          mouse.x,
          mouse.y,
          randint(25, 50),
          randint(25, 50),
          Math.random() * Math.PI,
          color,
          1,
          Math.random() * rands(),
          Math.random() * rands(),
          0,
          Math.random() * 0.1,
          0,
          -0.01
        ));
      }
    }
  }));
  requestAnimationFrame(loop);
};

const tick = () => {
  color += 1;
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