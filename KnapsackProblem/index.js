const DNA = require('./DNA.js');

let mutationRisk = 0.01;
let totalPopulation = 50;
let population;
let generations = 0;
let matingPool;
let targetKG = 15;
let finished = false;

// VÄGER 35 KOSTAR 17
// VÄGER 25 KOSTAR 24
setup = () => {
    population = [];

    for(let i = 0; i < totalPopulation; i++){
        population[i] = new DNA(5);
    }
}

draw = () => {
    for(let i = 0; i < population.length; i++){
        population[i].calcFitness(targetKG);
        console.log(population[i]);

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

    }
    draw();
}

setup();
draw();