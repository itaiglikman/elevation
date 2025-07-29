/**
 *Exercise 3
Create a dashboard function that fetches multiple types of data simultaneously and aggregates them.

Fetch these data sources in parallel:

All users: https://jsonplaceholder.typicode.com/users
All posts: https://jsonplaceholder.typicode.com/posts
All comments: https://jsonplaceholder.typicode.com/comments
Then process the data to create a summary dashboard.

expected result:
{
  summary: {
    totalUsers: 10,
    totalPosts: 100,
    totalComments: 500,
    avgPostsPerUser: 10,
    avgCommentsPerPost: 5
  },
  topUsers: [
    {
      name: "Leanne Graham",
      postCount: 10,
      commentCount: 15  // comments on their posts
    }
    // ... top 3 users by post count
  ],
  recentPosts: [
    // Last 5 posts (highest IDs)
  ]
}
e
 */

async function dashboard() {
    const results = await Promise.allSettled([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/comments')
    ])

    const dataResults = []
    results.forEach((res, i) => {
        if (res.status !== 'fulfilled')
            throw new Error(`couldnt load ${i + 1}: `, res.reason.message);
        dataResults[i] = res.value.data;
    })

    const [users, posts, comments] = dataResults;

    let recentPosts = posts.slice(posts.length - 5);
    let avgPostsPerUser = posts.length / users.length;
    let avgCommentsPerPost = comments.length / posts.length;

    const usersStats = [];
    for (const user of users) {
        const userPosts = posts.filter(post => post.userId === user.id);
        usersStats.push({ name: user.name, posts: userPosts });
    }
    const topUsers = usersStats
        .sort((a, b) => b.posts.length - a.posts.length)
        .slice(0, 3);

    topUsers.forEach(user => {
        let commentsCounter = 0;
        user.posts.forEach(post => {
            const userComments = comments.filter(comment => comment.postId === post.id);
            commentsCounter += userComments.length;
        });
        user.commentsCount = commentsCounter;
    });

    return {
        summary: {
            totalUsers: users.length,
            totalPosts: posts.length,
            totalComments: comments.length,
            avgPostsPerUser,
            avgCommentsPerPost
        },
        topUsers: topUsers,
        recentPosts
    }
}

dashboard().then(dash => {
    console.log(dash);
}).catch(error => {
    console.error(error);
});

