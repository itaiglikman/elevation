/**
 * 

Exercise 7
You are given the following spreadsheet data about your employees:

_id     |name   |age    |salary
--------------------------------
ax01    |Ray    |28     |1300
    qs84    |Lucius |31     |840
    bg33    |Taylor |18     |2700
    Copy to clipboardErrorCopied
    In reality, you have 320,000 employees, and you need to be able to find the salary of any employee very fast.
    
    You need to decide how you're going to store this data, such that the function findEmployeeSalary(employeeID) runs in O( 1 ) - constant time.
    
    Then, of course, write the findEmployeeSalary(employeeID) function.
*/
const employees = {
    ax01: { name: "Ray", age: 28, salary: 1300 },
    qs84: { name: "Lucius", age: 31, salary: 840 },
    bg33: { name: "Taylor", age: 18, salary: 2700 }
};


function getSalaryById(id) {
    return employees[id].salary;
}

console.log(getSalaryById('ax01'));