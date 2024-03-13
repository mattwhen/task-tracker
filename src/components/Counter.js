import React from 'react';
// Side Effect: unintended consequence
// Reacts rendering process must ALWAYS be pure. Components should return their JSX and
// not change any objects or variables that existed before rendering. That would make them impure!

// Here we are declaring a variable outside the component. This means calling this component multiple times will produce diff JSX!
let count = 0;

// Instead, we can pass count as a prop into the App component. Then read the data in Counter.js
function Counter({ count }) {
  // BAD: This is not good. We are saying to change a pre-existing variable
  // count += 1;

  return (
    <div>
      {count * 3}
    </div>
  );
}

export default Counter;
