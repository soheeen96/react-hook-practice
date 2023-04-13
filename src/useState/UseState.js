import { useState } from "react";

function UseState() {
  const [item, setItem] = useState(1);
  const increaseItem = () => setItem(item + 1);
  const decreaseItem = () => setItem(item - 1);

  return (
    <>
      <p>
        <b>useState </b>: 항상 2개의 value를 리턴
      </p>
      <ul>
        <li>
          <h4>const [item, setItem] = useState();</h4>
        </li>
        <li>[item, setItem] 이름 설정은 알아서</li>
        <li>useState(초기값을 세팅할 수 있는 옵션)</li>
        <li>
          setItem 말고 item만 사용하고 싶을 때는 : const item = useState(1)[0]
        </li>
        <li>useState를 부른 곳에 값을 리턴해줄 수 있음</li>
        <li>useState 리턴 결과 : {item}</li>
        <li>
          setItem 함수를 이용해서 클릭이벤트 설정도 가능 <br />
          const increaseItem = () =&gt; setItem(item + 1); <br />
          const decreaseItem = () =&gt; setItem(item - 1);
        </li>
        <li>
          <button onClick={increaseItem}>increase</button>
          <button onClick={decreaseItem}>decrease</button>
        </li>
      </ul>
    </>
  );
}

export default UseState;
