

class ParticleHandler {

  constructor(emitFunction) {
    this.particles = [];
    this.emitFunction = emitFunction;
  }

  add(p) {
    if (p instanceof Particle) {
      this.particles.push(p);
    }
  }

  tick() {
    this.emitFunction(this);
    for (let i = this.particles.length - 1; i >= 0; --i) {
      const p = this.particles[i];
      p.tick();
      if (p.dead) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw() {
    for (let i = this.particles.length - 1; i >= 0; --i) {
      const p = this.particles[i];
      p.draw();
    }
  }
}