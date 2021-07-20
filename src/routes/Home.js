import React, { useState } from "react";

function Home() {
  const [toDoText, setToDoText] = useState("");
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setToDoText(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoText("");
  };
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={toDoText} onChange={handleChange} />
        <input type="submit" value="add" />
      </form>
    </div>
  );
}

export default Home;
