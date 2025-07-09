/**
 * Given this array: */

const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

/**
 * Write some code that removes the post with an id of 2 from the posts array. Can't have any negative reviews of our product!

Obviously, do not do posts.splice(1, 1) - you have to find the post to remove! (Of course, you will use splice - just not hard coded!)
 */

for (const item of posts) {
  if (item.id === 2) posts.splice(posts.indexOf(item), 1);
}