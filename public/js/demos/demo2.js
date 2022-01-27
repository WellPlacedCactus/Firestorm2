
let color = 0;
let a = 0;

const init = () => {
  handlers.push(new ParticleHandler(handler => {
    color += 1;
    a += 0.1;
    if (mouse.down) {
      for (let i = 0; i < 360; i += 45) {
        handler.add(new Particle(
          mouse.x,
          mouse.y,
          randint(25, 50),
          randint(25, 50),
          Math.random() * Math.PI,
          color + i,
          1,
          Math.cos(i * Math.PI / 180 + a) * 10,
          Math.sin(i * Math.PI / 180 + a) * 10,
          0,
          Math.random() * 0.1,
          0,
          -0.01
        ));
      }
    }
  }));
  loop();
};