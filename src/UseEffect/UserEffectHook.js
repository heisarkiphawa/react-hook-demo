import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectHook() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0]);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      <h1>Use Effect</h1>
      API call
      <p>{JSON.stringify(data)}</p>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UseEffectHook;
