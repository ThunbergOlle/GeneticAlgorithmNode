let totalPopulation = 20;
let generations = 0;
let mutationRisk = 0.01;
let population;
let matingPool;
let finished = false;
let cordsTarget = [200, 200];
let totaltFitness;

let everyoneWhoHasLived = 0;
let bestFitness = 0;

function setup() {
    display = createP("STARTING");
    display.class("results");
    display.position(10, 10)

    population = [];
    createCanvas(1200, 1200);

    for (let i = 0; i < totalPopulation; i++) {
        cell = new DNA(2);
        population.push(cell);
        everyoneWhoHasLived++;
    }
    console.log(population);


}

function draw() {
    background(51);

    fill(200);
    rect(cordsTarget[0], cordsTarget[1], 20, 20);

    if (finished === false) {

        for (let i = 0; i < population.length; i++) {
            population[i].show();
            population[i].calcFitness(cordsTarget);
            totaltFitness =+ population[i].fitness;
            if(population[i].fitness > bestFitness) bestFitness = population[i].fitness;
        }
        textFont("Courier");
        display.html("Avg fitness: " + totaltFitness / population.length +  "   Best fitness: " + bestFitness + "   Generation: " + generations + " Everyone who has lived: " + everyoneWhoHasLived);
        matingPool = [];
        for (let i = 0; i < population.length; i++) {
            let element = Math.floor(population[i].fitness);
            for (let x = 0; x < element; x++) {
                matingPool.push(population[i]);
            }
        }
        console.log(matingPool);

        generations++;

        for (let i = 0; i < population.length; i++) {
            let pA = Math.floor(Math.random() * matingPool.length);
            let pB = Math.floor(Math.random() * matingPool.length);
            parentA = matingPool[pA];
            parentB = matingPool[pB];

            let child = parentA.crossOver(parentB);
            child.mutate(mutationRisk);
            population[i] = child;
            everyoneWhoHasLived++;
            if (dist(cordsTarget[0], cordsTarget[1], child.x, child.y) < 5) {
                console.log("Everyone who has lived: " + everyoneWhoHasLived);
                return finished = true;
            }
        }
    }
}















class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
    }

    update() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    dir(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    show() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}