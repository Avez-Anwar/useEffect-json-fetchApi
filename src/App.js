import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);

  const handleUsers = () => {
    setResourceType("Users");
  };
  const handleComments = () => {
    setResourceType("Comments");
  };

  console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("Posts")}>Posts</button>
      <button onClick={handleUsers}>Users</button>
      <button onClick={handleComments}>Comments</button>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default App;
