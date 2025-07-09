/**
 * Exercise 1
Create a StringFormatter module. It should have two functions:

capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
toSkewerCase - receives a string and replaces any spaces with a dash
 */

function StringFormatter() {
    function capitalizeFirst(str) {
        return str[0].toUpperCase()+str.slice(1).toLowerCase();
    }

    function toSkewerCase(str) {
    //  return str.split(" ").join("-");
     return str.replaceAll(" ","-");
    }

    return{
        capitalizeFirst,
        toSkewerCase
    }
    
}

// const formatter = StringFormatter()

// const cap = formatter.capitalizeFirst("doroThy") //should return Dorothy
// console.log(cap);
// const spaceToDash = formatter.toSkewerCase(" blue box") //should return blue-box
// console.log(spaceToDash);