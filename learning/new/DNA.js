generateRandom = () => {
    let c = Math.floor(Math.random() * (122 - 63) + 63);
    if (c === 63) c = 32;
    if (c === 64) c = 46;

    return String.fromCharCode(c);
}
module.exports = class DNA {
    constructor(num) {
        this.genes = [];
        this.fitness = 0;
        for (let i = 0; i < num; i++) {
            this.genes[i] = generateRandom();
        }
    }

    getSentence() {
        return this.genes.join("");
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