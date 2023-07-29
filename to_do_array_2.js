// Reverse

function reverse_array(array) {
    let temp = 0;
    // iterate through the array using two pointers:
    // i : iterate from the begging to center of the array
    // j : iterate from the end to the center
    // then switch the values of the elements utilizing the temp variable
    for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;

}
array = reverse_array([1, 2, 3, 4, 5,])
console.log(`Reverse Question : ${array}`);

//-----------------------------------------------------------------------------------------
// Rotate
function rotateArr(arr, shiftBy) {
    // Check the direction of the rotation if its left-right
    if (shiftBy > 0) {
        // Number of times rotation is required
        for (let counter = 0; counter < shiftBy; counter++) {
            // save the value of the last element
            temp = arr[arr.length - 1];
            // Iterate (left to right) through the array to shift the elements
            for (let i = arr.length - 1; i >= 0; i--) {
                // when reach the first element at the array
                if (i == 0) {
                    arr[i] = temp;
                    break;
                }
                // shift process
                arr[i] = arr[i - 1]
            }
        }
        return arr
    }
    else if (shiftBy == 0) {
        return arr;

    }
    // The direction of the rotation if its left-right
    else {
        // get the absolute value of shiftBy
        shiftBy = shiftBy * -1
        // Number of times rotation is required
        for (let counter = 0; counter < shiftBy; counter++) {
            // save the value of the first element
            temp = arr[0];
            // Iterate (right to left) through the array to shift the elements
            for (let i = 0; i < arr.length; i++) {
                // when reach the last element at the array
                if (i == arr.length - 1) {
                    arr[i] = temp;
                    break;
                }
                arr[i] = arr[i + 1];
            }
        }
        return arr;
    }
}
array = [1, 2, 3, 4, 5];
console.log("Rotate Question:")
console.log(rotateArr(array, 3));

//-----------------------------------------------------------------------------------------

function push_back(array,index){
    //shift the elements to the left one step starting from the given index.
    for(let i = index; i < array.length; i++){
        array[i] = array[i+1];
    }
    // remove the last element.
    array.pop()
}

function filter_range(array,min,max){
    //iterate through the array
    for (let i = 0 ; i < array.length ; i++){
        // if the value of the element is outside of the range
        if (array[i]<min || array[i] > max){
            // shift the element to the end of the array then pop it.
            push_back(array,i);
            // create recursive function  after the push to re-iterate on the new array 
            filter_range(array,min,max);
        } 
    }
    return array
}
array = [0,1,2,3,4,5,6,7,8,9,10]
console.log(filter_range(array,5,7));

// Other Solution

//-----------------------------------------------------------------------------------------
function arr_concat(first_array, second_array){
    new_array=[];
    for (let i = 0; i < first_array.length; i++){
        new_array.push(first_array[i]);
    }
    for (let i = 0; i < second_array.length; i++){
        new_array.push(second_array[i]);
    }
    return new_array;
}

array1 = ['a','b'];
array2 = [1,2];
console.log(arr_concat(array1,array2));