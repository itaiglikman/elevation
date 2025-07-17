class Exercise {

    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    /**
     * 
     * Write a method called validate
The method should receive an array of booleans
It should verify that there is at least one boolean in the array
If there isn't, it should return {error: "Need at least one boolean"}
If there are more trues than falses in the array, the method should return true
Otherwise, it should return false} arr 
     */
    validate(arr) {
        if (arr.length < 1) return { error: "Need at least one boolean" };
        let countT = 0;
        let countF = 0;
        for (const item of arr) {
            if (typeof item === "boolean")
                item ? countT++ : countF++;
        }
        if (countF === 0 && countT === 0) return { error: "Need at least one boolean" };
        return (countF === countT || countF < countT) ? true : false;
    }


}

const ex = new Exercise();
console.log(ex.isEven());
// console.log(ex.validate([true,false,false]));
// const arr1 = [];
// console.log(ex.removeAtLeastOne(arr1));

module.exports = Exercise