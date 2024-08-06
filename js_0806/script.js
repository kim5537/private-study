document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector("#result");
  // console.log(result);
  result.innerText = `code:${e.key}`;

  if (e.key === "y") {
    console.log("y키입니다");
  }
});

//새로배운 키워드
//keydown - 키가 눌러졌을 동안!
//key - 키보드다운의 이벤트속성으로 사용. 해당 키의 입력버튼을 말한다.
