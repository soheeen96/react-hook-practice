import { useState } from "react";
import UseState from "./useState/UseState";
import UseInput from "./useState/UseInput";
import UseTabs from "./useState/UseTabs";
import UseEffect from "./useEffect/UseEffect";
import UseTitle from "./useEffect/UseTitle";
import UseClick from "./useEffect/UseClick";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const content = [
  { tab: "section1", content: "section1 contents!" },
  { tab: "section2", content: "section2 contents!" },
  { tab: "section3", content: "section3 contents!" },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  const [item, setItem] = useState(1);
  const increaseItem = () => setItem(item + 1);
  const decreaseItem = () => setItem(item - 1);
  //
  const name = useInput("Ms.");

  return (
    <div>
      <h1>React Hook 정리</h1>
      <hr />
      <UseState />
      <UseInput />
      <UseTabs />
      <UseEffect />
      <UseTitle />
      <UseClick />
    </div>
  );
}

export default App;

{
  /* 
&#123  

  <li>
<div>
<h3>useInput</h3>
<p>: 설명</p>
</div>
<ul>
<li>
  <h4></h4>
</li>
<li></li>
</ul>
</li> */
}
