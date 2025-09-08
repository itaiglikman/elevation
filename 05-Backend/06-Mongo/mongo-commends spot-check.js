// The current database to use.
use("sample_mflix");

db.firstCollection.find({})

db.firstCollection.find({name:'Loreli'})

db.firstCollection.insert({ name: "Louise", salary: 1200 })
db.firstCollection.insert({ name: "Rayna", salary: 2300 })
db.firstCollection.insert({ name: "Soren", salary: 1500 })
db.firstCollection.insert({ name: "Loreli", salary: 800 })
db.firstCollection.insert({ name: "Milo", salary: 950 })
db.firstCollection.insert({ name: "Brendon", salary: 1100 })

// get nested field:
db.firstCollection.find({
    name: 'Razu'
},
    { 'hometown.city': 1, _id: 0 }
)

// set:
db.firstCollection.update({
    name:'Loreli'
},
{
    $set:{
        salary:1050
    }
}
)

// deleteMany:
db.firstCollection.deleteMany({ _id: {$in: [
    ObjectId('68bec28e5ff0cc20d2deeac5'),
    ObjectId('68bec2b05ff0cc20d2deeac6'),
    ObjectId('68bec2c15ff0cc20d2deeac7'),
]} })

// add new field with empty arr:
db.firstCollection.update(
    {name: 'Milo'},
    {$set: {'dreams':[]}}
)

// update field arr and push item
db.firstCollection.update(
    { name: 'Loreli' },
    { $push: { dreams: "Being like Razu" } }
)

// update field arr and push multiple items:
db.firstCollection.updateOne(
    { name: 'Milo' },
    { $push: { dreams: { $each: ["Being like Razu", 'hello'] } } }
)

// remove all docs from collection:
db.firstCollection.remove({})

db.firstCollection.insert({ name: "Louise", dept: "Finance", salary: 1200, currentEmployee: true })
db.firstCollection.insert({ name: "Rayna", dept: "R&D", salary: 2300, currentEmployee: true })
db.firstCollection.insert({ name: "Soren", dept: "Finance", salary: 1500, currentEmployee: false })
db.firstCollection.insert({ name: "Loreli", dept: "Sales", salary: 800, currentEmployee: false })
db.firstCollection.insert({ name: "Milo", dept: "Sales", salary: 950, currentEmployee: true })
db.firstCollection.insert({ name: "Brendon", dept: "Finance", salary: 1100, currentEmployee: false })

// aggregate -
db.firstCollection.aggregate([
    {$group: {
      _id: '$dept', // select the groups
      totalSalaries: { // give the name of the of the field
        $sum: '$salary' // give the action and the field to take the data from
      }
    }}
])

// [
//   {
//     "_id": "Sales",
//     "totalSaleries": 1750
//   },
//   {
//     "_id": "Finance",
//     "totalSaleries": 3800
//   },
//   {
//     "_id": "R&D",
//     "totalSaleries": 2300
//   }
// ]

/**
 * Find the sum of salaries of all the departments only for those are are currently employed
You will need to use the $match operator
Sort the results from the highest to the lowest sum (look at the $sort in the aggregate docs)
You should receive 2300 for R&D, 1200 for Finance, and 950 for Sales
 */
db.firstCollection.aggregate([
    { $match: { currentEmployee: true } },
    {
        $group: {
            _id: '$dept',
            total: { $sum: '$salary' }
        }
    },
    { $sort: { total: -1 } }
])

/**
 * [
  {
    "_id": "R&D",
    "total": 2300
  },
  {
    "_id": "Finance",
    "total": 1200
  },
  {
    "_id": "Sales",
    "total": 950
  }
]
 */