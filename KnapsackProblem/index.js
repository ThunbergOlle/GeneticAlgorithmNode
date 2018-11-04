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
}

setup();
draw();