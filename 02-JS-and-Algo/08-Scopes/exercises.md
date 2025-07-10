**Exercises**
# Short and sweet lesson about scope. To make sure you get it, check out the code below.
# 
# For each section, before testing the code, determine the following
# 
# What will console log?
# Will there be an error?
# Why?
# Will something be undefined?
# Why?
# To what scope does each variable belong?
# Global or local? If local, to which specifically?
# If anything is unclear, make sure to askץ


# Section 1
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 
# What will console log? 
    8 time "running"
    Finished running 8 miles
    error
# Will there be an error?
    yes
# Why?
    accessing distance out of the loop
# Will something be undefined?
no
# Why?
distance is not set at all out of the loop
# To what scope does each variable belong?
# Global or local? If local, to which specifically?
run-global
distance - local for the loop




# Section 2
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}



# What will console log?
no log
# Will there be an error?
yes reference error
# Why?
the variable is declared in the if scope and called out of it
# Will something be undefined?
no
# Why?
reference error
# To what scope does each variable belong?
cowSound- if
# Global or local? If local, to which specifically?
local




# Section 3
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)


# What will console log?
served a special fish
served a special lettuce plate
served a special curious cheese
Finished serving all the orders: fish,lettuce plate,curious cheese
# Will there be an error?
no
# Why?
all in place
# Will something be undefined?
no
# Why?
# To what scope does each variable belong?
# Global or local? If local, to which specifically?
allOrders- global
specialOrder - local for loop
# If anything is unclear, make sure to askץ


# Section 4
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()


# What will console log? 
error
# Will there be an error?
yes
# Why?
reference error seeds not defined
# Will something be undefined?
no
# Why?
# To what scope does each variable belong?
seed - local to getSeeds
pot-global
getSeeds global
plant - global
# Global or local? If local, to which specifically?



# Section 5
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

# What will console log?
# Will there be an error?

# Why?
cant use "found"  outside of the for loop
# Will something be undefined?
# Why?
# To what scope does each variable belong?
# Global or local? If local, to which specifically?
# If anything is unclear, make sure to askץ



# Section 6
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

# What will console log?
Finally, sheesh
# Will there be an error? 
no
# Why?
all in scope
# Will something be undefined?
# Why?
# To what scope does each variable belong?
# Global or local? If local, to which specifically?
# If anything is unclear, make sure to askץ