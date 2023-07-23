class Firework {
  constructor(width, height, lifespan) {
    this.hue = Math.floor(Math.random() * 256);
    this.firework = new Particle(width, height, lifespan, this.hue, true);
    this.exploded = false;
    this.particles = [];
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.applyForce(gravity);
      particle.update();

      if (particle.isDone()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    this.exploded = true;

    for (let i = 0; i < Math.floor(Math.random() * (300 - 50 + 1)) + 50; i++) {
      const particle = new Particle(
        this.firework.pos.x,
        this.firework.pos.y,
        15,
        this.hue,
        false
      );
      this.particles.push(particle);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    this.particles.forEach(particle => particle.show());
  }
}
