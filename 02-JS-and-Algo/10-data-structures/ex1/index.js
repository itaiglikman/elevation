/**
 * Exercise 1
Create a data structure called UniqueArray

It should have four methods:

add(item)
Stores the item only if it hasn't been added already
showAll()
Shows all the added items
exists(item)
Returns true if the item has been added, false otherwise
This should run in O( 1 )
get(index)
Returns the item at index index, or -1 if it doesn't exit
Effectively, this data structure works like a normal array (for the most part), but:

It only works for primitive types
It only allows you to add unique items to it
To test your data structure, use the following code:

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
 */

class UniqueArray {
    constructor() {
        this.uniqueStuff = [];
        this.uniqueLength = 0;
        this.itemsSet = new Set; // complexity - save added items to check if has been added
    }

    add(item) {
        if (!this.exists(item)) {
            this.uniqueStuff[this.uniqueLength] = item;
            this.itemsSet.add(item);
            this.uniqueLength++;
        }
    }

    showAll() {
        console.log(this.uniqueStuff);
    }

    exists(item) { //O(1)
        return this.itemsSet.has(item);
    }

    get(index) {
        return this.uniqueLength >= index ? this.uniqueStuff[index] : -1;
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
