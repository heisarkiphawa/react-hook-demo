import React, { useContext } from "react";
import { AppContext } from "./UserContextHook";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
