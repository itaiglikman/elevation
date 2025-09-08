// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("test");

// Find a document in a collection.
db.linkedon.find({});

/**ex1
 Find the count of people who make more than 25000.
You should find it to be 231.*/

db.linkedon.count({
    salary: { $gt: 25000 }
})

/**
 * Exercise 2
Find only the top 3 earning people, and return only their first name and salary.
 */

db.linkedon.find({}, { firstName: 1, salary: 1, _id: 0 })
    .sort({ salary: -1 })
    .limit(3)

/** Exercise 3
Find the total number of people currently working at Walmart that are earning at least 7000.
You should find it to be 24 people.
 */

db.linkedon.count({
    'currentCompany.name': 'Walmart',
    salary: { $gte: 7000 }
})

/**
 * Exercise 4
Find the current company name, full name, and salary of the highest earning person that currently works in either Sales or Retail.
Make sure you're returning only those fields (company name, first and last name, and salary.)
You should find it to be Holly Gonzales, working at Groupon for 20,000.
 */

db.linkedon.find({
    'currentCompany.industry': { $in: ['Sales', 'Retail'] }
    // $or: [
    //     { 'currentCompany.industry': 'Sales' },
    //     { 'currentCompany.industry': 'Retail' }
    // ]
}, {
    fullName: { $concat: ['$firstName', ' ', '$lastName'] },
    companyName: 'currentCompany.name',
    salary: 1,
    _id: 0
})
    .sort({ salary: -1 })
    .limit(1)

/**
 * Exercise 5
Find the number of people who have ever worked at Apple, past or present.
You should find it to be 325.
 */

db.linkedon.count({
    $or: [
        { 'currentCompany.name': 'Apple' },
        { 'previousCompanies.name': 'Apple' }
    ]
})

/**
 * Extension 1
Now find the count of people per industry that are currently working at Apple.
 */

db.linkedon.aggregate([
    { $match: { 'currentCompany.name': 'Apple' } },
    {
        $group: {
            _id: '$currentCompany.industry', count: { $sum: 1 }
        }
    },
    { $sort: { count: 1 } }
])

/**
 * [
  {"_id": "Tech",
    "count": 10},
  {"_id": "Manufacturing",
    "count": 26},
  {"_id": "Retail",
    "count": 28},
  {"_id": "Sales",
    "count": 51}
]
 */

/**
 * Extension 3
There is a superstition that says that your family name can affect your salary.
To test that, find the average salary for people that (work at either Google or Apple) and (are in the Tech industry).
Your result should be per last name and sorted from highest to lowest average.
 */

db.linkedon.aggregate([
    {
        $match: {
            $and: [
                { "currentCompany.industry": "Tech" },
                { "currentCompany.name": { $in: ["Google", "Apple"] } },
            ],
        },
    },
    {
        $group: {
            _id: "$lastName",
            avgSalary: { $avg: "$salary" },
        },
    },
    { $sort: { avgSalary: -1 } },
])

// { "_id" : "Ortiz", "average" : 39500 }
// { "_id" : "Russell", "average" : 38700 }
// { "_id" : "Morales", "average" : 38400 }
// { "_id" : "Reynolds", "average" : 38300 }
// { "_id" : "Gonzales", "average" : 38000 }
// { "_id" : "Bennett", "average" : 35100 }
// { "_id" : "Foster", "average" : 34850 }
// { "_id" : "Barnes", "average" : 33600 }
// { "_id" : "Sullivan", "average" : 32900 }
// { "_id" : "Chavez", "average" : 32000 }
// { "_id" : "Gutierre", "average" : 31500 }
// { "_id" : "Griffin", "average" : 30400 }
// { "_id" : "Hughes", "average" : 30200 }
// { "_id" : "Perry", "average" : 30100 }
// { "_id" : "Price", "average" : 28900 }
// { "_id" : "Ross", "average" : 28500 }
// { "_id" : "Myers", "average" : 27100 }
// { "_id" : "Jenkins", "average" : 23800 }
// { "_id" : "Wood", "average" : 23500 }
// { "_id" : "Fisher", "average" : 23400 }
