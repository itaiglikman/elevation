import { useState } from "react";
import "./Hudini.css";

/**
 * 
 Exercise 1
Create a component called Hudini in your components folder). Your App component should render this.

Inside of Hudini's state, define a single property: show, with an initial value of false

Inside of Hudini's render, you should display a single div with a message of either "Now you see me", or "Now you don't", depending on the state of show

Use the React Developer Extension to test your work - change show's value to true, and you should see "Now you see me".

Bonus: Hudini's render should be a single line (using a ternary statement).

Now add a button that will change the Hudini's state.
 */

export function Hudini() {
  const [show, setShow] = useState<Boolean>(true);

  return (
    <div className="Hudini" onMouseEnter={() => setShow(!show)}>
      {show ? "Now you see me" : "Now you don't"}
    </div>
  );
}
