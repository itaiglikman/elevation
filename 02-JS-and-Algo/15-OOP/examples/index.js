class Person {

    #job = '';
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (age >= 10)
            return this._age;
    }

}

const p1 = new Person("itai", 10);


class MyMath {

    constructor(name) {
        this.name = name
    }

    // static method - the this is the class itself
    // possible to access this method only with the class name
    static add(a, b) {
        // not possible to access class props in static method
        // console.log(this.name);
        return a + b;
    }
}


const m1 = new MyMath();
// add is static and possible to  access only directly from the class
// console.log(m1.add(1,2)); //error
console.log(MyMath.add(1, 2)); //3


class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

class ClassRoom{
    constructor(teacher) {
        this.teacher = teacher;
    }

    teach(){
        console.log('teaching...');
    }
}

const t1 = new Teacher('itai',27,'english');
const class1 = new ClassRoom(t1);
console.log(class1);

