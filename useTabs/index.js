import { useTab } from "./useTabs";

const content = [
  {
    tab: "section 01",
    content: "첫번째 내용입니다",
  },
  {
    tab: "section 02",
    content: "첫번째일까 마지막일까?",
  },
  {
    tab: "section 03",
    content: "마지막 내용이지롱",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTab(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
