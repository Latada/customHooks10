import { useInput } from "./useInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mrs", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" placeholder="name" {...name} />
    </div>
  );
};

export default App;
