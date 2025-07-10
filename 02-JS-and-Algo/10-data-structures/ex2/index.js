/**
 *Exercise 2
Currently your UniqueArray only knows to handle primitive types.

Modify it so that it can work with any type of data.

How you do it depends on how you built UniqueArray in the first place, but likely you will have to:
 */

class UniqueArray {
    constructor() {
        this.uniqueStuff = [];
        this.uniqueLength = 0;
        this.itemsMap = new Map;
    }

    add(item) {
        if (!this.exists(item)) {
            this.uniqueStuff[this.uniqueLength] = item;
            this.itemsMap.set(item,1);
            this.uniqueLength++;
        }
    }

    showAll() {
        console.log(this.uniqueStuff);
    }

    exists(item) { //O(1)
        return this.itemsMap.has(item);
    }

    get(index) {
        return this.uniqueLength >= index ? this.uniqueStuff[index] : -1;
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
let me = {name:"itai",address:"haifa"}
uniqueStuff.add(me)
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists(me)); //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
