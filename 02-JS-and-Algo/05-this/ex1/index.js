/**
 * Exercise 1
Copy/paste the following code into some .js file. Fix the errors to make it work:

const person = {
  hungry: true,

  feed: function () {
    if (hungry) {
      hungry = false;
      console.log('Im no longer hungry!')
    }
  }
}  

person.feed() //should log "I'm no longer hungry"
*/

const person = {
    hungry: true,

    feed: function () {
        if (this.hungry) {
            this.hungry = false;
            console.log('Im no longer hungry!')
        }
    }
}

person.feed() //should log "I'm no longer hungry"