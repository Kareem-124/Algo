function rSigma(value){
    value = Math.floor(value)
    if (value == 1)return 1;
    if (value <= 0)return 0;
    return (value + rSigma(value-1));
}

console.log(rSigma(4.9