let totalPopulation = 20;
let generations = 0;
let mutationRisk = 0.01;
let population;
let matingPool;
let finished = false;
let cordsTarget = [200, 200];
let totaltFitness;
generateRandom = () => {
    let c = Math.floor(Math.random() * (122 - 63) + 63);
    if (c === 63) c = 32;
    if (c === 64) c = 46;

    return String.fromCharCode(c);
}
let everyoneWhoHasLived = 0;
let bestFitness = 0;

function setup() {
    display = createP("STARTING");
    display.class("results");
    display.position(10, 10)

    population = [];
    createCanvas(1200, 1200);

    for (let i = 0; i < totalPopulation; i++) {
        cell = [generateRandom(), generateRandom()];
        population.push(cell);
        everyoneWhoHasLived++;
    }
    console.log(population);


}

function draw() {
    background(51);

    fill(200);
    rect(cordsTarget[0], cordsTarget[1], 20, 20);
    for(let i = 0; i < population.length; i++){
        fill(255);
        rect(population[i][0], population[i][1], 10, 10);
        if(population[i][0] === 200 && population[i][1] === 200)console.log(population[i]);
        else population[i] = [generateRandom(), generateRandom()];
        everyoneWhoHasLived++;
 
    }
    generations++;
    textFont("Courier");
    display.html("Avg fitness: " + totaltFitness / population.length +  "   Everyone who has lived: " + everyoneWhoHasLived + "   Generation: " + generations);

   
}
