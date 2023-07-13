function rBinarySearch(ary, target, min = 0, max = ary.length-1) {
    let length = max - min;
    let address = Math.trunc(length/2) + min;
    let pointer = ary[address];
    console.log(`min = ${min} / max = ${max} / address = ${address} / pointer = ${pointer} >> Target = ${target}`);
    if ( pointer == target) return true;

    if(target > pointer && !(min > max)){
        min = address + 1;
        max = max;
        return rBinarySearch(ary,target, min,max);
    }
    else if (target < pointer && !(min > max)){
        min = min;
        max = address-1;
        return rBinarySearch(ary,target,min,max);
    }
    else{
        // Edge Cases
        if(max == min) return false;
        if (min > max && (ary[min] == target || ary[max] ==target )) return true;
        else
        return false;
    }
    
}
array = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(rBinarySearch(array, 54654));