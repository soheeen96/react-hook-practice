import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
function UseTitle() {
  useTitle("useTitle 사용");
  return (
    <>
      <p>
        <b>useTitle </b> : 페이지 제목을 업데이트하는 사용자 정의 훅 <br />
        useEffect의 두 번째 매개변수로 전달된 배열의 변경을 감지하고, 이 배열이
        변경될 때마다 페이지의 제목을 업데이트함
      </p>
      <ul>
        <li>
          <h4>useTitle("타이틀 제목");</h4>
        </li>
        <li>
          보통 페이지에서 사용되는 변수나 상태값이 들어가며, 이 값이 변경될
          때마다 제목을 업데이트함
        </li>
      </ul>
    </>
  );
}

export default UseTitle;
