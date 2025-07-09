/**
 * Given this array: */
const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]


/**
 * You are given 2 as the ID of a post. Write some code that finds the comment with an ID of 3 (inside of a post with an ID of 2), and remove just that one comment. */

for (const item of posts) {
  if (item.id === 2){
    const commentsArr = item.comments
    for (const comment of commentsArr) {
        let idxToDelete = commentsArr.indexOf(comment.id);
        if(comment.id===3) commentsArr.splice(idxToDelete,1);
    }
  }
}

console.log(posts);