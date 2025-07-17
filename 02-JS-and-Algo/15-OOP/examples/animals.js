class Animal{
    constructor(name,numLegs) {
        this.name = name;
        this.numLegs = numLegs;
        this.children = []
    }

    giveBirth(name){
        this.children.push(name);
    }
}

const cat = new Animal('red',4);
cat.giveBirth('too young');
console.log(cat.children);
