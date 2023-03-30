class HamSlice {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.scale = s;
  }

  draw() {
    imageMode(CENTER);
    image(img2, this.x, this.y, img2.width * this.scale, img2.height * this.scale);
  }
}