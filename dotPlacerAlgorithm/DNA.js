generateRandom = () => {

    let random = Math.floor(Math.random() * 1200);

    return random;

}
class DNA {
    constructor(num) {
        this.genes = [];
        this.x = generateRandom();
        this.y = generateRandom();
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

    calcFitness(cords) { // CALCULATE THE FITNESS
        let score = 0; //SETS UP SCORE VARIABLE
        let d  = dist(cords[0], cords[1], this.x, this.y);


        for(let i = 0; i < d; i++){
            if(i < d) score++;
        }
        score = score / 100;
        score = score * score;
        this.fitness = Math.floor(score);

    }
    crossOver(partner) {
        let Child = new DNA(2);
        Child.genes[0] = partner.genes[Math.floor(Math.random())];
        Child.genes[1] = this.genes[Math.floor(Math.random())];
        console.log("Partner 1 genes" + partner.genes, "    Partner 2 genes "+ this.genes);
        console.log("Child genes: " + Child.genes);
        // let midPoint = this.genes.length / 2;
        // for (let i = 0; i < this.genes.length; i++) {
        //     if (i < midPoint) Child.genes[i] = this.genes[i];
        //     else Child.genes[i] = partner.genes[i];
        // }
        return Child;
    }

    mutate(rate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (Math.random() < rate) {
                console.log("A CELL WAS MUTATED");
                this.genes[i] = generateRandom();
            }
        }
    }
}