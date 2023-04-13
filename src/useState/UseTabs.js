import { useState } from "react";

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

function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <>
      <p>
        <b>useTabs </b>
        : 인덱스가 있는 내용들을 버튼을 눌러서 각 내용을 불러오는 Hooks
        <br />
        1. 첫번째 인자는 초기 tab(0번째 인덱스), 두번째 인자는 총 tabs를 받음
        <br />
        2. 배열이 아니거나 비어있으면 함수 종료 <br />
        3. seState를 이용해서 currentIndex와 changeItem (Index를 바꾸는 함수)를
        리턴해줌 <br />
        4. 버튼에 onClick 이벤트로 버튼을 누르면 현재 인덱스를 가져와서
        content를 바꿔주기
      </p>

      <ul>
        <li>
          <h4>
            const content = [ <br />
            &#123; tab: "section1", content: "section1 contents!" &#125;,
            <br />
            &#123; tab: "section2", content: "section2 contents!" &#125;,
            <br />
            &#123; tab: "section3", content: "section3 contents!" &#125;,
            <br /> ];
          </h4>
        </li>
        <li>
          <div>
            tab : &nbsp;
            {content.map((section, index) => (
              <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <hr />
            {currentItem.content}
          </div>
        </li>
      </ul>
    </>
  );
}

export default UseTabs;
