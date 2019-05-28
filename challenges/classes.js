// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {

  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }

  volume() {
    return `The volume is ${this.length * this.width * this.height}`;
  }

  surfaceArea() {
    return `The surface area ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
  }
}

const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the
// formulas for volume and surface area for cubes and create those methods using the dimension properties
// from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {

  constructor(attrs) {
    super(attrs);
  }

  surfaceArea() {
    return `The surface ${6 * (this.length * this.length)}`;
  }
}

const cube = new CubeMaker({ length: 2, width: 2, height: 2 });
console.log(cube.volume()); // redundant test since volume is inherited
console.log(cube.surfaceArea()); // 24
