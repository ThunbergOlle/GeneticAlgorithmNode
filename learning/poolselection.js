let population = [];


// STATS
let numberOfA = 0;
let numberOfB = 0;
let numberOfC = 0;

population.push({ letter: "A", fitness: 5 });

population.push({ letter: "B", fitness: 3 });

population.push({ letter: "C", fitness: 2 });

let matingPool = [];
pool = () => {
    let populationSelector = Math.floor(Math.random() * Math.floor(population.length));

    let selectedDNA = population[populationSelector];
    let randomSelector = Math.floor(Math.random() * 10);

    if(selectedDNA.fitness > randomSelector){
        matingPool.push(selectedDNA);
        if(selectedDNA.letter == "A") numberOfA++;
        if(selectedDNA.letter == "B") numberOfB++;
        if(selectedDNA.letter == "C") numberOfC++;

    }else {
        pool();
    }
    // Accept or reject
}
for(let i = 0; i < 1000; i++){
    pool();
}

console.log("Total number of A: " + numberOfA + " ("+numberOfA/10 +"%)");
console.log("Total number of B: " + numberOfB + " ("+numberOfB/10 +"%)");
console.log("Total number of C: " + numberOfC + " ("+numberOfC/10 +"%)");
