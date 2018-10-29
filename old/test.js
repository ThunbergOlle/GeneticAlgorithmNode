generateRandom = () => {
    let c = Math.floor(Math.random() * (122 - 63) + 63);
    console.log(c);
    if (c === 63) c = 32;
    if (c === 64) c = 46;
  
    console.log(String.fromCharCode(c));
}
generateRandom();