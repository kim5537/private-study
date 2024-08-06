const box = document.querySelector("#box");
box.addEventListener("click", (e) => {
  alert(`이벤트 발생 위치 = ${e.pageX} 그리고 ${e.pageY}`);
});

//다양한 곳을 기준으로 X와Y값을 알수있다
//clientX,Y = 사용자가 보고있는 매체(윈도우창)의 전체 너비 기준으로
//offsetX,Y = 이벤트가 발생된 해당영역 기준으로
//pageX,Y = 문서상(html)의 전체너비 기준으로 = 스크롤를 포함한 전체 넓이
//screenX,Y = 현재사용자가 사용중인 모니터를 기준
