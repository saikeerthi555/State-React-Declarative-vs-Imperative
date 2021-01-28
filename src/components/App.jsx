import React from "react";

//declarative programming
// function App() {
//   var isDone = true;
//   const strikeThrough = { textDecoration: "line-through" };
//   return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;
// }

//imperative programming
// function strike() {
//   document.getElementById("root").style.textDecoration = "line-through";
// }
// function unstrike() {
//   document.getElementById("root").style.textDecoration = null;
// }

//Hook
var isDone = false;

function strike() {
  isDone = true;
}

function unstrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unstrike}>Change to strike through</button>
    </div>
  );
}

export default App;
