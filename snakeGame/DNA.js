generateRandom = () => {

    let value1 = Math.random();
    let value2 = Math.random()
    if (value1 < 0.5) value1 = -1; else value1 = 1;
    // if(value2 < 0.5) value2 = -1; else value2 = 1;
    return value1;

}
class DNA {
    constructor(num) {
        this.genes = [];
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.fitness = 0;
        for (let i = 0; i < num; i++) {
            this.genes[i] = generateRandom();
        }
    }
    show() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
    update() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    dir() {
        for (let i = 0; i < this.genes.length; i++) {
            setTimeout((i) => {
                if (generateRandom() < 1) {
                    this.xspeed = this.genes[i];
                } else {
                    this.yspeed = this.genes[i];
                }
            }, 1000);

        }
    }
    calcFitness(targetPhrase) { // CALCULATE THE FITNESS
        let score = 0; //SETS UP SCORE VARIABLE
        for (let i = 0; i < this.genes.length; i++) { //FOR EACH ELEMENT INSIDE THE GENES(FOR EACH CHARACTER)
            if (this.genes[i] == targetPhrase.charAt(i)) {
                score++; //ADD TO THE SCORE.
            }
        }
        this.fitness = score / targetPhrase.length; // GET IT TO A PERCENT VALUE

    }
    crossOver(partner) {
        let Child = new DNA(this.genes.length);

        let midPoint = this.genes.length / 2;
        for (let i = 0; i < this.genes.length; i++) {
            if (i < midPoint) Child.genes[i] = this.genes[i];
            else Child.genes[i] = partner.genes[i];
        }
        return Child;
    }

    mutate(rate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (Math.random() < rate) {
                this.genes[i] = generateRandom();
            }
        }
    }
}