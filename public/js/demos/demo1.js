
let color = 0;
let x = 0;
let y = 0;
let speed = 15;
let vx = speed;
let vy = 0;

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