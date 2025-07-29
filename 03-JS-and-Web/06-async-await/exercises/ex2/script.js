/**
 *Exercise 2
Create a function that fetches a user and then fetches all posts by that user.
Return an object containing both user info and their posts.
Handle errors at each step with meaningful messages.
If user doesn't exist, don't attempt to fetch posts.
 */

async function getUserWithPosts(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) throw new Error('user not found');
        const user = await userResponse.json();
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!postsResponse.ok) throw new Error("posts not found");
        const posts = await postsResponse.json();
        const mappedPosts = posts.map(post => ({ title: post.title, body: post.body }))
        const userInfo = { name: user.name, mappedPosts };
        return userInfo;
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

getUserWithPosts(1);
