generateRandom = () => {
    let c = Math.floor(Math.random() * (122 - 63) + 63);
    if (c === 63) c = 32;
    if (c === 64) c = 46;
  
    return String.fromCharCode(c);
  }
module.exports = class DNA {
    constructor(num, sentence){
        this.target = sentence;
        this.genes = [];
        this.sentence;
        this.fitness = 0;
        for(let i = 0; i < num; i++){
            this.genes[i] = generateRandom();
        }
        this.generateSentence();
        this.calculateFitness();
    }
    generateSentence(){
        this.sentence = this.genes.join("");
        console.log(this.genes);

    }
    calculateFitness(){
        this.fitness = 0;

        //Make sentence into array
        for(let i = 0; i < this.target.length; i++){
            for(let x = 0; x < this.genes.length; x++){
                if(this.target[i] == this.genes[x]){
                    this.fitness += 1;
                }
                
            }
        }
    }
    crossOver(partner, sentenceArray){
        let child = new DNA(this.genes.length, sentenceArray);
        let midPoint = 3;

        for(let i = 0; i < this.genes.length; i++){
            if(i > midPoint) child.genes[i] = this.genes[i];
            else{
                child.genes[i] = partner.genes[i];
            }
            
        }
        child.generateSentence();
        child.calculateFitness();
        console.log(child.fitness);
        return child;
    }
    mutate(){
        for(let i = 0; i < child.genes.length; i++){
            if(Math.random() < 0.01){
                this.genes[i] = generateRandom();
            }
        }
    }

}