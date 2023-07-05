// Reverse

function reverse_array(array) {
    let temp = 0;
    for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // console.log(`The value of i = ${i} and the value of j = ${j}`);
    }
    return array;

}
array = reverse_array([1, 2, 3, 4, 5, 6])
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
console.log(rotateArr(array, -1));

//-----------------------------------------------------------------------------------------