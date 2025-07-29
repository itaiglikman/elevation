/**
 *Exercise 3
Create a dashboard function that fetches multiple types of data simultaneously and aggregates them.

Fetch these data sources in parallel:

All users: https://jsonplaceholder.typicode.com/users
All posts: https://jsonplaceholder.typicode.com/posts
All comments: https://jsonplaceholder.typicode.com/comments
Then process the data to create a summary dashboard.
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
