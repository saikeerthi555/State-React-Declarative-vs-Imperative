import React from "react";

function App() {
  var isDone = true;
  const strikeThrough = { textDecoration: "line-through" };
  return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;
}

export default App;
