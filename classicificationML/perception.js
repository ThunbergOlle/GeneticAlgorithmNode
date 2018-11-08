// ACTIVEATION FUNCTION
sign = n => {
  if (n >= 0) {
    return 1;
  } else {
    return -1;
  }
};

generateRandomWeight = () => {
  let calc = random(-1, 1);
  return calc;
};
class Perception {
  constructor() {
    this.weights = [];
    for (let i = 0; i < 2; i++) {
      this.weights[i] = generateRandomWeight();
      console.log(this.weights[i]);
    }
  }
  guess(inputs) {
    let sum = 0;

    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    let output = sign(sum);
    return output;
  }
  train() {
    let x;
    let y;
    let label;
    x = random(0, 600);
    y = random(0, 600);

    if (x > y) label = 1;
    else label = -1;
  }
  show() {
    stroke(0);
    if (label === 1) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(x, y, 8, 8);
  }
}
