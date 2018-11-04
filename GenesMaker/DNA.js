generateRandom = () => {
    let index = Math.floor(Math.random() * 2);
    return index;
}

module.exports = class DNA {
    constructor(num){
        this.genes = [];
        this.fitness = 0;

        for(let i = 0; i < num; i++){
            this.genes[i] = generateRandom();
        }
    }

    calcFitness(target){
        let score = 0;
        for(let i = 0; i < target.length; i++){
            if(this.genes[i] === target[i]){
                score++;
            }
        }

        this.fitness = score / target.length;
    }
    crossOver(partner){
        let Child = new DNA(this.genes.length);

        let midPoint = this.genes.length / 2;
        for(let i = 0; i < this.genes.length; i++){
            if(i < midPoint) Child.genes[i] = this.genes[i];
            else Child.genes[i] = partner.genes[i];
        }
        return Child;   
    }

    mutate(rate){
        for(let i = 0; i < this.genes.length; i++){
            if(Math.random() < rate){
                this.genes[i] = generateRandom();
            }
        }
    }
}