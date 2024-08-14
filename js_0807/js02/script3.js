const title = document.querySelector("#title");
//인풋텍스트 - 타이틀 항목
const author = document.querySelector("#author");
//인풋 텍스트 = 작가 항복
const bookList = document.querySelector("#bookList");
//ul태그. 안의 요소는 버튼과 이어 추가 삭제 가능하게 구현할 예정

const form = document.querySelector("from");
//폼 전체 선언

form.addEventListener("submit", (e) => {
  //폼에 submit 버튼이 있고 이 버튼을 이용하여 내용을 추가 할 예정
  e.preventDefault();
  //이벤트 실행했을 때 주소로 보내길 막는 용도
  const liItem = document.createElement("li");
  //li태그를 생성할 변수 선언
  liItem.innerHTML = `${title.value}`;
});
