import { useEffect } from "react";

function UseEffect() {
  return (
    <>
      <p>
        <b>useEffect</b> : componentDidMount(), componentDidUpdate(),
        componentWillUnmount() 의 역할 <br />
        훅은 컴포넌트가 렌더링 될 때마다 특정한 동작을 실행하게 할 수 있는 훅{" "}
        <br />이 훅을 사용하면 컴포넌트가 화면에 나타날 때마다 특정한 동작을
        실행하거나, 또는 컴포넌트가 화면에서 사라질 때 특정한 동작을 실행하는
        등의 작업을 수행할 수 있음
      </p>
      <ul>
        <li>
          <h4></h4>
        </li>
        <li>
          1번째 인자-function으로서의 effct = componentDidMount()와 기능이
          비슷함
          <br />
          2번쨰 인자-deps (dependency) = componentDidUpdate()와 기능이 비슷함
        </li>
      </ul>
    </>
  );
}

export default UseEffect;
