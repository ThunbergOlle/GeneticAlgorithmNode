const DNA = require('./DNA.js');

let maxGeneration = 2000;
let mutationRisk = 0.01;
let totalPopulation = 100;
let targetKG = 12;
let amountOfGenes = 5;


// YOU CAN CHANGE THE VARIABELS ABOVE.

// BUT NOT BELOW


targetKG -= 1;
let population;
let generations = 0;
let matingPool;
let finished = false;
let totalMutations = 0;
let everyOneWhoHasLived = 0;
let highestFitness = 0;
let strongestDNA;
// VÄGER 35 KOSTAR 17
// VÄGER 25 KOSTAR 24
setup = () => {
    population = [];

    for (let i = 0; i < totalPopulation; i++) {
        population[i] = new DNA(amountOfGenes);
    }
}

draw = () => {

    if (!finished) {
        for (let i = 0; i < population.length; i++) {
            population[i].calcFitness(targetKG);
            totalMutations += population[i].totalMutations;
            if (population[i].fitness > highestFitness) {
                highestFitness = population[i].fitness;
                strongestDNA = population[i];
                console.log("Better fitness (",highestFitness,") was found in generation: ", generations);
            }
            if (population[i].fitness === 50 || generations > maxGeneration) {
                console.log("Finished algorithm with this DNA: ", population[i]);
                console.log("Total population: " + totalPopulation + "\nTotal Generations: " + generations + "\nTotal Mutations: " + totalMutations + "\nEveryone who has lived: " + everyOneWhoHasLived);
                console.log("Strongest DNA: ", strongestDNA);
                return finished = true;
            }

        }
        let matingPool = [];
        for (let i = 0; i < population.length; i++) {
            let element = Math.floor(population[i].fitness * 100);
            for (let x = 0; x < element; x++) {
                matingPool.push(population[i]);
            }
        }
        generations++;
        for (let i = 0; i < population.length; i++) {
            let pA = Math.floor(Math.random() * matingPool.length);
            let pB = Math.floor(Math.random() * matingPool.length);
            parentA = matingPool[pA];
            parentB = matingPool[pB];

            let child = parentA.crossOver(parentB);
            child.mutate(mutationRisk);
            population[i] = child;
            everyOneWhoHasLived += 1;

        }
        draw();
    }

}

setup();
draw();