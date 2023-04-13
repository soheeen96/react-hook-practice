import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

function UseInput() {
  const name = useInput("Ms.");

  return (
    <>
      <p>
        <b>useInput </b>: input을 업데이트함{" "}
      </p>
      <ul>
        <li>
          <h4>
            const useInput = (initialValue) =&gt; &#123; const [value, setValue]
            = useState(initialValue); &#125; <br />
            return &#123; value &#125; <br />
            const name = useInput("Ms.");
          </h4>
        </li>
        <li>
          useInput은 초기 값이 Ms. 인데, 그 값을 initialValue로 받아서
          useState의 initialValue로 전달되서 value로 감
        </li>
        <li>
          <input placeholder="Name" {...name} />
        </li>
        <li>name.value 대신 ...name 으로 대체 가능</li>
      </ul>
    </>
  );
}

export default UseInput;
