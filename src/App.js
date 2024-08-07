import "./App.css";
import UseContextHook from "./UseContext/UserContextHook";
import UseEffectHook from "./UseEffect/UserEffectHook";
import UseMemoHook from "./UseMemo/UseMemoHook";
import UseReducerHook from "./UseReducer/UseReducerHook";
import UseStateHook from "./UseState/UseStateHook";
 

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseReducerHook />
      <UseContextHook />
      <UseMemoHook />
    </div>
  );
}

export default App;
