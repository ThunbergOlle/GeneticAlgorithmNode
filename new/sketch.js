const DNA = require('./DNA.js');
let mutationRisk = 0.01;
let totalPopulation = 100;
let population;

let matingPool;
let targetPhrase = "Tjena";
let finished = false;

setup = () => {
    population = [];
    //GENERATE NEW POPULATION

    for(let i = 0; i < totalPopulation; i++){
        population[i] = new DNA(targetPhrase.length);

    }

}
draw = () => {
    console.log("DRAW");
    for(let i = 0; i < population.length; i++){
        population[i].calcFitness(targetPhrase);
        console.log(population[i]);
    }
    
    
    let matingPool = []; //CREATE A MATING POOL FOR GENERATING THE NEXT GENERATION.

    for(let i = 0; i < population.length; i++){
        let element = Math.floor(population[i].fitness * 100);
        for(let x = 0; x < element; x++){
            matingPool.push(population[i]);
        }
    }

    //PRE CROSSING THE NEXT GENERATIOn
    for(let i = 0; i < population.length; i++){
        let pA = Math.floor(Math.random() * matingPool.length);
        let pB = Math.floor(Math.random() * matingPool.length);
        parentA = matingPool[pA];
        parentB = matingPool[pB];

        let child = parentA.crossOver(parentB);
        child.mutate(mutationRisk);
        population[i] = child;

        if(child.getSentence() === targetPhrase){
            console.log(population[i]);
            console.log("FINISHED!")
            return;
        }
        
    }

    draw();
}

setup();
draw();