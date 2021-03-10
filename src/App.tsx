import React, { useState, useEffect } from "react";

const App = () => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="p-16">
      <header>
        <h1 className="text-9xl">Big title</h1>
        <h1>Fonts selected, this is h1</h1>
        <h2>This, instead, is an h2</h2>
        <h3>than an h3</h3>
        <h4>than an h4</h4>
        <h5>than an h5</h5>
        <h6>and, in the end, an h6</h6>
        <p>This is Telex font used for body test</p>
      </header>
    </div>
  );
};

export default App;
