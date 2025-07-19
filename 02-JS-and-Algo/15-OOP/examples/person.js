class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary;
        this.courses = {};
    }

    giveGrade(student, courseName, grade) {
        student.receiveGrade(courseName, grade);
    }

    addCourse(course) {
        this.courses[course] = this.courses[course] ? ++this.courses[course] : 1;
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}

/**
 * Create a Principal class.
*/
class Principal extends Person {
    // It should inherit from Person, and have the following additional attributes and methods:
    // teachers - an array of Teacher objects
    // students an array of Student objects
    constructor(name, startYear, teachers, students) {
        super(name, startYear);
        this.teachers = new Set();
        this.students = new Set();
    }
    
    // hireTeacher - a method that receives a teacher and adds it to the teachers array
    // It should also console log "<principal name> just hired <teacher name>"
    hireTeacher(teacher) {
        this.teachers.add(teacher);
        console.log(`${this.name} just hired ${teacher.name}`);
    }
    
    // recruitStudent - a method that receives a student and adds it to the students array
    recruitStudent(student) {
        this.students.add(student);
        console.log(`${this.name} just recruited ${student.name}`);
    }
    
    // expelStudent - a method that receives a student and removes it from the students array (for now, you can just search by name)
    expelStudent(student) {
        this.#deleteStudent(student);
    }
    
    // transferStudent - a method that receives a student and a principal, removes the student from students and pushes it to the other principal's students array
    transferStudent(student, principal) {
        this.#deleteStudent(student);
        principal.recruitStudent(student);
    }

    #deleteStudent(student) {
        this.students.delete(student);
    }
}




// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// // console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"﻿

// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)


//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
