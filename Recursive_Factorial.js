function rFact(value){
    value = Math.trunc(value)
    if (value <= 1)return 1;
    
    return (value * rFact(value-1));
}

console.log(rFact(7));