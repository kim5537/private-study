//사용자로 부터 나이를 받고
//콜백함수를 사용하여 사용자의 값을 홀용해 알림창으로 "안녕하세요 ㅇㅇ님 나이가 ㅇㅇ이시네요 "
//콜백함수란 함수안에 함수를 넣어 안의 함수의 시작 권한을 밖 부모에게 양도한 형태를 말한다. 즉 부모함수를 호출하면 안의 함수가 같이 시작되는 형태

// function alarm(name, Age) {
//   alert(`안녕하세요 ${name} (${Age}세) 고객님`);
// }

// function get(user) {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이을 입력하세요");
//   user(userName, userAge);
// }

// get(alarm);

//내가 한 실수 get에 매개변수 두개를 적었고 그 값을 함수 안에서 얻으려 했다. 안에서 넣는 것은 좋으나 얻은 값과 매개변수의 연결고리가 없었다.
// 여기서 alarm은 인자값이다. 즉 alarm = user || user == userName, userAge / alarm == name, Age
//==> userName, userAge = name, Age

// function get(a, b) {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이을 입력하세요");
//   a = userName;
//   b = userAge;
// }

// ?????????이게 불가한 이유는 get의 매개변수는 두개이고 alarm은 하나의 그룹, 즉 하나인 것으로 보이기 때문이다. 따라서 get( 두개의 인자값)이 들어가야하는 걸까?

//우리가 지향하는 목표ㅛ
//배열을 정확히 이해하고 사용
//반복문 적재적소
//내가 원하는 기능 구현 함수

//========콜백함수 1 ==============
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (count++ > 4) clearInterval(timer);
// };
// const timer = setInterval(cbFunc, 300);

//카운터를 0(초기값)을 준 변수선언
// 변수에 자료형 함수를 넣어 함수를 선언
//함수 안에 콘솔에 외부에있는 conut를 띄움
//if 조건문을 사용해서 count를 증가시키고 이게 4를 넘으면 멈추게 clearUnterval(timer)
//타이머릴 함수 밖에서 선언 후 시간증가함수 setInterval(선언한 함수 , 시간)

//숫자를 3초마다 5까지 세는 함수만들기
//카운트할 변수 선언
//함수제작를 제작해서 콘솔에 찍음. 중요한 건 수를 증가 시키나 조건이 되면 시간을 멈추는 함수 제작해야함
//필요한 것.
// 카운터를 끌고올 함수. 콘솔에 출력 .  clear를 사용하여 카운터의 수가 특정수를 넘으면 멈추는 조건문
//set interver실행함수. 제작

//함수안에서 숫자를 세면(count를 함수 안에 넣음) 하나로 합쳐진당. 나열되지 않음

// ??????????????? 그런데 왜 카운터를 함수 않에 넣으면 clearInterval이 실행되지 않을까.
//안에 넣으면 count가 계속 0으로 초기화되나?

//=======콜백함수 2 ================
//map함수는 배열 안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산작업을 한 이휴 다시 해당 아이템을 모아서 새로운 배열로 생성!!
// const arr = [10, 20, 30];
// const newArr = arr.map((a, index) => (a + 5) * index);
// console.log(newArr);

// //=========콜백함수3 ===============
// setTimeout(function () {
//   console.log(this);
// });
//윈도우가 뜬다. 윈도우에 탐재된 시간 내장함수이기 때문

//일반적인 콜백함수 내에서 주체가 되고 있는 아이쳄을 찾아오고 싶을 때에는 직접 해당 인자를 언급하거나 경우에 따라 this 객체를 사용

//============예제 4
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach(function (item) {
//   console.log(this);
// });
//읜도우가 뜸

//=============예제 5
document.body.innerHTML += `<button id="a">click</button>`;
document.querySelector("#a").addEventListener("click", () => {
  console.log(this);
});
//또 윈도우임

//============예제 6
//객체안 매서드 함수일 때. this는 funcion일 경우. 해당 메서드 함수의 부모격인 객체를 찾아오지만 화살표는 윈도우를 찾아옴
const obj = {
  vals: [1, 2, 3],
  logValues: function () {
    console.log(this);
  },
};

obj.logValues();
