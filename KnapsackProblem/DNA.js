generateRandom = () => {
    let index = Math.floor(Math.random() * 12) + 1;
    let cost = 0;
    if(index === 12) cost = 4;
    if(index < 12) cost = 2;
    if(index > 5 && index < 12) cost = 4;
    if(index === 4) cost = 10;
    if(index === 1) cost = 1;
    if(index === 2) cost = 6;

    let returnObj = {kg: index, cost: cost}
    return returnObj;
}
module.exports = class DNA {
    constructor(num){
        this.genes = [];
        this.fitness = 0;

        for(let i = 0; i < num; i++){
            this.genes[i] = generateRandom();
        }
    }

    calcFitness(targetKG){
        let score = 0;
        let totalKG = 0;
        let totalCost = 0;
        for(let i = 0; i < this.genes.length; i++){
            totalCost += this.genes[i].cost;
            totalKG += this.genes[i].kg
        }

        this.fitness = Math.floor(totalCost / totalKG * 10);
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