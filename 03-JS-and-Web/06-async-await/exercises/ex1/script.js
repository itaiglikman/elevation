/**
 * Exercise 1
Convert the function to use async/await syntax
Use try/catch for error handling
Maintain the same functionality (logging and return values)
Test with both valid (1-10) and invalid (999) user IDs
 */

// Given Promise-based code:
function getUserById(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(user => {
            console.log(`Found user: ${user.name} (${user.email})`);
            return user;
        })
        .catch(error => {
            console.error('Error fetching user:', error.message);
            return null;
        });
}


async function asyncGetUserId(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const user = await response.json();
        console.log(`Found user: ${user.name} (${user.email})`);
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }
}

asyncGetUserId(1)