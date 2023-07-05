//  Push Front

// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(array,number){
    for(let i =array.length; i > 0 ; i--){
        array[i] = array[i-1];
    }
    array[0] = number;
    return array;
}
console.log(pushFront([1,2,3,4],8));

//-------------------------------------------------------------------------------------
// Pop Front

// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(array){
    // save the first value
    first_value = array[0];
    // shift the elements to the left one step
    for(let i =0; i < array.length-1; i++){
        array[i] = array[i+1];
    }
    // delete the last element 
    array.pop();
    return {
        'value' : first_value,
        'array' : array
    };
}
pop_val=popFront([1,2,3,4,5,6])
console.log(`The deleted value = ${pop_val.value} and the array = ${pop_val.array}`);

//-------------------------------------------------------------------------------------

// Insert At

// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(array,index,number){
    // any index value bigger than the array index will be added at the end
    if (index > array.length-1){
        array[array.length] = number
        return array;
    }
    // shift the numbers till reach the index ( iterate from the end of the array)
    for(let i =array.length; i > index ; i--){
        array[i] = array[i-1];
    }
    // add the number at the specified index
    array[index] = number;
    return array;
}
console.log(insertAt([1,2,3,4],1,111));