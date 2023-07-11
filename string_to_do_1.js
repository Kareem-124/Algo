// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function remove_blanks(string) {
    let new_string = ""
    // iterate through string characters
    for (let i = 0; i < string.length; i++) {
        // if the character is not blank (space) add it to new_string
        if (string[i] != " ") {
            new_string = new_string + string[i]
        }
    }
    return new_string
}

str = "     This is a string";
console.log(remove_blanks(str));

//---------------------------------------------------------------------
function keep_numbers(string) {
    let new_string = ""
    // remove blanks from string as it is seen as 0
    string = remove_blanks(string);
    // iterate through the filtered string.
    for (let i = 0; i < string.length; i++) {
        // if the first number is 0 neglect it.
        if(string[i] == 0 && new_string == ""){
            continue;
        }
        // if the character is not NaN (Not a Number) "The character is a number"
        if (!(isNaN(Number(string[i])))) {
            new_string = new_string + string[i];
        }
    }
    return new_string
}

str2="000s1a3y5w7h9a2t4?6!8?0"
console.log(keep_numbers(str2));

//---------------------------------------------------------------------
//Acronyms
function acronym(string){
    let new_string = "";
    string = string.split(' ');
    console.log(string);
    for (let i = 0 ; i < string.length ; i++){
        if (string[i] != ''){
            new_string = new_string + string[i][0].toUpperCase();
        }
    }
    return new_string
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));

//---------------------------------------------------------------------
//Count Non-Spaces
function countNonSpaces(string){
    return remove_blanks(string).length;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

//---------------------------------------------------------------------
//Remove Shorter Strings
function removeShorterStrings(array, min_val){
    let counter = 0;
    let new_array = [];
    // iterate through array
    for (let i = 0; i <array.length; i++){
        // check the length of the string in the first element if its equal or bigger save it in new_array
        if(array[i].length >= min_val){
            new_array[counter] = array[i];
            counter++;
            // I can use Push instead but built-in function is not allowed here
        }
    }
    return new_array
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'],3));