generateRandom = () => {
    let index = Math.floor(Math.random() * 12) + 1;
    let cost = 0;
    if(index === 12) cost = 13;
    if(index < 12) cost = 22;
    if(index === 8) cost = 29;
    if(index > 5 && index < 12) cost = 23;
    if(index === 4) cost = 25;
    if(index === 1) cost = 21;
    if(index === 2) cost = 14;
    if(index === 3) cost = 27;
    let returnObj = {kg: index, worth: cost}
    return returnObj;
}
module.exports = class DNA {
    constructor(num){
        this.genes = [];
        this.fitness = 0;
        this.totalMutations = 0;
        for(let i = 0; i < num; i++){
            this.genes[i] = generateRandom();
        }
    }

    calcFitness(targetKG){
        let score = 0;
        let totalKG = 0;
        let totalWorth = 0;
        for(let i = 0; i < this.genes.length; i++){
            totalWorth += this.genes[i].worth;
            totalKG += this.genes[i].kg
        }
        this.fitness = Math.floor((totalWorth - totalKG) / 10);

        for(let i = 0; i < totalKG; i++){
            if(i > targetKG && this.fitness > 2) this.fitness -= 4;
        }

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
                this.totalMutations += 1;
                this.genes[i] = generateRandom();
            }
        }
    }
}