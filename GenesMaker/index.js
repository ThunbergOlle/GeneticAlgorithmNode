const DNA = require('./DNA.js');
let mutationRisk = 0.01;
let totalPopulation = 50;
let population;
let generations = 0;
let matingPool;
let target = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

setup = () => {
    population = [];
    //GENERATE NEW POPULATION

    for (let i = 0; i < totalPopulation; i++) {
        population[i] = new DNA(target.length);

    }

}
draw = () => {
    console.log("DRAW");
    for (let i = 0; i < population.length; i++) {
        population[i].calcFitness(target);

        if (population[i].fitness == 1) {
            console.log("The final result was: ", population[i], " in the generation ", generations);
            console.log("FINISHED!")
            return;
        }
        console.log("Progress: ", population[i].fitness * 100, "%");
    }


    let matingPool = []; //CREATE A MATING POOL FOR GENERATING THE NEXT GENERATION.

    for (let i = 0; i < population.length; i++) {
        let element = Math.floor(population[i].fitness * 100);
        for (let x = 0; x < element; x++) {
            matingPool.push(population[i]);
        }
    }

    //PRE CROSSING THE NEXT GENERATIOn
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
    console.log(population);
    draw();
}

setup();
draw();


