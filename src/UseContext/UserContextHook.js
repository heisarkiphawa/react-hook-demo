import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function UseContextHook() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <h1>Use Context</h1>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default UseContextHook;
