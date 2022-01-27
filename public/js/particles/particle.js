
class Particle {

  constructor(x, y, w, h, r, c, a, dx, dy, ds, dr, dc, da) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.c = c;
    this.a = a;
    this.dx = dx;
    this.dy = dy;
    this.ds = ds;
    this.dr = dr;
    this.dc = dc;
    this.da = da;
    this.dead = false;
  }

  die() {
    this.dead = true;
  }

  tick() {
    
    //////////////////////////// MOVE
    
    this.x += this.dx;
    this.y += this.dy;

    //////////////////////////// SCALE AND DIE

    this.w += this.ds;
    this.h += this.ds;

    if (this.w < 0 || this.h < 0) this.die();

    //////////////////////////// ROTATE

    this.r += this.dr;

    //////////////////////////// CHANGE COLOR

    this.c += this.dc;

    //////////////////////////// CHANGE ALPHA AND DIE

    this.a += this.da;

    if (this.a < 0) this.die();
  }

  draw() {
    
    //////////////////////////// DRAW MODE CAN BE CHANGED HERE

    c.fillStyle = `hsla(${this.c}, 100%, 50%, ${this.a})`;
    c.save();
    c.translate(this.x, this.y);
    c.rotate(this.r);
    c.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    c.restore();
  }
}