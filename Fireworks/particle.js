class Particle {
  constructor(x, y, long, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 200;
    this.hu = hu;
    this.vel = this.firework ? createVector(0, long) : p5.Vector.random2D().mult(random(2, 15));
    this.acc = createVector();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  isDone() {
    return this.lifespan < 0;
  }

  show() {
    colorMode(HSB);
    strokeWeight(2);
    stroke(this.hu, 255, 255);
    point(this.pos.x, this.pos.y);
  }
}
