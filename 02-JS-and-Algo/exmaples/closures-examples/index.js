
// syntax option 1:
// function add(x) {
//     return function (y) {
//         return x+y;
//     }
// }

// syntax option 2:
const add = (x) => {
    return (y) => x + y;
};

// option:
// console.log(add(5)(2)); //7;


// option:
const add5 = add(5);
const add7 = add5(2)
// console.log(add7);

// ==================================================================
// ==================================================================
// ==================================================================

const setCounter = function (num) {
    let counter = 0

    const count = function () {
        counter += num;
        console.log(counter)
    }

    return count
}

// const increment = setCounter(2)
// increment()


// ==================================================================
// ==================================================================
// ==================================================================

const family = function () {
    const members = [];
    const birth = function (name) {
        members.push(name);
        console.log(members);
    }
    return birth;
}

// const gaveBirth = family();
// gaveBirth("itai");


// ==================================================================
// ==================================================================
// ==================================================================

const mathOperations = function () {
    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mul: multiply,
        div: divide
    }

}

// const math = mathOperations();
// console.log(math.add(13, 29));
// console.log(math.mul(1.75, 24));
// console.log(math.mul(7, math.div(36, 6)));

// ==================================================================
// ==================================================================
// ==================================================================

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

// const usersModule = UsersModule()
// usersModule.addUser('Narkis');
// usersModule.listUsers()
