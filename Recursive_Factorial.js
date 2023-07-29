function rSigma(value) {
    value = Math.floor(value)
    if (value == 1) return 1;
    if (value <= 0) return 0;
    return (value + rSigma(value - 1));
}

console.log(rSigma(4.9));

function rFact(value) {
    value = Math.trunc(value)
    if (value <= 1) return 1;

    return (value * rFact(value - 1));
}

console.log(rFact(7));

//------------------------------------

function rGCF(number1, number2, counter1 = 2, counter2 = 2, o1 = number1, o2 = number2) {
    console.log(`given values = ${number1},${number2},${counter1},${counter2}`)
    if (number1 >= number2 && (number1 % number2 == 0)) return number2;
    if (number1 <= number2 && (number2 % number1 == 0)) return number1;
    if (number1 == 0 || number2 == 0) return 0;

    if (number1 > number2) {
        while (counter1) {
            if (o1 % counter1 == 0) {


                number1 = o1 / counter1;
                console.log(`The value of o1 % counter1 = ${o1 % counter1}`);
                counter1 = counter1 + 1;
                break;
            }
            else {
                counter1 = counter1 + 1;
            }
        }

        console.log(`number after while = ${number1} counter1 after the while = ${counter1}`)
        return rGCF(number1, number2, counter1, counter2, o1 = o1, o2 = o2);
    }
    else {
        while (counter2) {
            if (o2 % counter2 == 0) {
                let val = o2 % counter2;
                console.log(`The value of counter: ${counter2} / o2 : ${o2} o2 % counter2 = ${val}`);
                number2 = o2 / counter2;
                counter2 = counter2 + 1;
                break;
            }
            else {
                counter2 = counter2 + 1;
            }
        }

        console.log(`number2 after while = ${number2} counter2 after the while = ${counter2}`)
        return rGCF(number1, number2, counter1, counter2, o1 = o1, o2 = o2);
    }


}

console.log(`The Greatest Common Factor = ${rGCF(20, 8)}`);