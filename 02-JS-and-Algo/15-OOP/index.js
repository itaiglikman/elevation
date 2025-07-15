// const john = {
//     name: "john",
//     age: 30,
//     greet: function () {
//         return `Hello im ${this.name}`;
//     }
// }

// const jane = {
//     ...john,
//     name: "jane",
//     age: 35
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello im ${this.name}`;
    }
}

const john = new Person("john", 30);
const jane = new Person("jane", 35);

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    greet() {
        const baseGreeting = super.greet();
        return `${baseGreeting} and I teach ${this.subject}.`;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
}

const teacher = new Teacher("Mr. Smith", 40, "Math");
const student = new Student("Alice", 20, "S12345");

// console.log(student instanceof Person); // true

// polymorphism example
[teacher, student].forEach(person => {
    console.log(person.greet());
})