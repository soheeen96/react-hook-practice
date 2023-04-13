import { useEffect, useRef } from "react";

//DOM 요소에 대한 참조 및 클릭이벤트 감지
const useClick = (onClick) => {
  const ref = useRef();

  //if문을 사용하여 요소의 참조가 존재할 경우, 요소에 클릭 이벤트 핸들러를 등록
  useEffect(() => {
    const clicElement = ref.current;
    if (clicElement) {
      clicElement.addEventListener("click", onClick);
    }

    return () => {
      if (clicElement) {
        clicElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return ref;
};

function UseClick() {
  const handleClick = () => {
    alert("Element is clicked / useClick 훅 사용");
  };

  const clickRef = useClick(handleClick);
  return (
    <>
      <p>
        <b>useClick </b>: 클릭 이벤트를 감지하고 해당 요소를 클릭할 때마다
        특정한 동작을 수행할 수 있도록 하는 사용자 정의 훅
      </p>
      <ul>
        <li>
          <h4>
            const ref = useRef(); <br /> useEffect(()=&gt; &#123; &#125; )
          </h4>
        </li>
        <li>
          useRef 를 사용해서 DOM 요소에 대한 참조를 만들고, useEffect 훅을
          사용하여 클릭 이벤트를 감지 <br />
          if문을 사용하여 요소의 참조가 존재할 경우, 요소에 클릭 이벤트 핸들러를
          등록
        </li>
        <li>
          <button ref={clickRef}>click</button>
        </li>
      </ul>
    </>
  );
}

export default UseClick;
