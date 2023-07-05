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
        // if the character is not NaN (Not a Number) "The character is a number"
        if (!(isNaN(Number(string[i])))) {
            new_string = new_string + string[i];
        }
    }
    return new_string
}

str2="123 Test 456"
console.log(keep_numbers(str2));