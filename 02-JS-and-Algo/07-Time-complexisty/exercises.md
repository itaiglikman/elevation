# Exercise 1

**What is the complexity of the following code?**

```js
const getBalance = function (bankOperations) {
  let balance = 0
  for (let op of bankOperations) {
    balance += op
   }
   return balance
}

getBalance([-27, -43, -2400, -700, 15000, 58])
```
Answer:O(n)


# Exercise 2

**What is the time complexity of the following code?**
```js
const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2)
    console.log(complaints[i].text);
}
```
Answer:O(log(n))

# Exercise 3
**What is the complexity of the getHyp function?**

```js
const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 }
]
    
const relevantSides = allSides.filter(s => s.a % 3 == 0)
for (let sides of relevantSides) {
  console.log(getHype(sides))
}
    
const getHype = function (sides) {
  let a = sides.a
  let b = sides.b
  let sumOfSquares = a * a + b * b
  return Math.sqrt(sumOfSquares)
}
```

Answer: O(1)


# Exercise 4
**Take this one slowly. What is the complexity of the getDistributions function?**

```js
const studentAnswers = {
  brBlds: {
    1: "a",
    2: "a",
    3: "c"
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c"
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a"
  }
}
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]
    
const distributions = {
  1: {},
  2: {},
  3: {}
}
    
const getDistributions = function (studentAnswers) {
  studentGithubs.forEach(sg => {
    let answers = studentAnswers[sg]
    
    Object.keys(answers).forEach(questionNumber => {
      let letterAnswer = answers[questionNumber]
    
      distributions[questionNumber][letterAnswer] ?
        distributions[questionNumber][letterAnswer]++ :
        distributions[questionNumber][letterAnswer] = 1
    })
  })
    
  return distributions
}
    
getDistributions(studentAnswers)
```

Answer: O(nm)


# Exercise 5
**What is the complexity of the emailManager function?**

```js
const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))
    
const emailManager = function () {
  let email = generateEmail()
    
  $.get('/recepients', function (recepients) {
      sendEmails(email, recepients)
  })
}
```

Answer: O(n)
    


