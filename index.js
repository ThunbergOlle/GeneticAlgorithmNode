const DNA = require("./DNA.js");

console.log("Genetic Algorithm");

let sentence = "Tjena";
let sentenceArray = [];
let num = 200;
const population = 200;

let generation = [];
for (let i = 0; i < sentence.length; i++) {
  sentenceArray.push(sentence.charAt(i));
}
initialization = (sentence, population) => {
  for (let i = 0; i < population; i++) {
    generation.push(new DNA(5, sentenceArray));
  }
};

selection = () => {
  let matingPool = [];

  // CALCULATE MAX FITNESS
  let max_Fitness = 0;
  let totalFitness = 0;

  for (let i = 0; i < generation.length; i++) {
    if (generation[i].fitness > max_Fitness) {
      max_Fitness = generation[i].fitness;
    }

    totalFitness += generation[i].fitness;
  }
  // PUT EVERYONE INTO AN MATING POOL
  for (let i = 0; i < generation.length; i++) {
    //FITNESS / MAXFITNESS / NUMBER OF POPULATION
    if (generation[i] !== undefined) {
      let probability = (generation[i].fitness / totalFitness) * 100;
      for (let i = 0; i < probability; i++) {
        if (generation[i] !== undefined) {
          matingPool.push(generation[i]);
        }
      }
    }
  }
  for (let i = 0; i < generation.length; i++) {
    parentA = matingPool[Math.floor(Math.random() * matingPool.length)];
    parentB = matingPool[Math.floor(Math.random() * matingPool.length)];

    // CrossOver
    let child = parentA.crossOver(parentB, sentenceArray);
  }
};
draw = () => {
  initialization("Tjena", population);
  selection();
    for(let i = 0; i < generation.length; i++){
        if(generation[i].sentence === sentence){
            console.log(generation[i].sentence);
            return;   
        }

    }
    draw();
};
draw();
