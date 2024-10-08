// function (매개변수) {실행문}
//매개변수는 함수를 호출할시 해당 함수에 넣을 값을 말한다.그리고 그 매개변수에 인자값을 넣을 수 있다.
//인자값 = 매개변수
//함수에 들어갈 미정의 값의 틀 = 매개변수
//실제 함수에 들어가는 값 = 매개변수안에 들어갈 값 = 인자

// function calcSum(a) {
//   prompt(`%{a}`);
// }

// calcSum("매게변수를 밖으로 가져올 수 있다.")

//-----------------

// const calcSum = function(){}
// //자료형에 함수 넣기 가능

///숫자를 10까지 더하는 함수 만들기
// function calcSum() {
//   let sum = 0; //값을 넣을 바구니 제작
//   for (let i = 1; 1 <= 10; i++) {
//     sum += i;
//   }
//   console.log(`${sum}`);
// }

// calcSum();
//함수는 꼭 실행문이 있어야 실행된다. 함수자체는 선언문과 같다. 한 공식의 명을 정해서 저정해두는 것에 가까움

//익명함수
// const calcSum = function () {
//   let sum = 0;
//   for (let i = 1; 1 <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10가지 더하면 ${sum}`);
// };

// calcSum();

//=>함수의 명을 정하지 않고 함수자체를 변수로 선언한 형태.

//화살표함수
// const calcSum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`값이 ${sum}이 나왔어요`);
// };

// calcSum();

// function sum(a, b) {
//   const result = a + b;
//   alert(`값은 ${result}`);
// }

// sum(1, 2);
//해당 함수는 바로 인자인 1과 2를 sun의 매개변수로 주어진 상황이다.

//여기서 우리는 인자값의 갯수와 매개변수의 갯수 차이가 생길 때 어떻게 될 지 확인해보자
function multiple(a, b, c = 10) {
  console.log(a + b + c);
}
multiple(1, 2);

//이처럼 매개변수의 갯수가 더 큰 상황에는 기본값을 할당한다. 이렇게 되면 C의 값이 없을 때는 기본값인 10을 C의 자리에 대신 넣어 값을 만든다.
//반대로 인자값의 수가 많으면 마지막 숫자는 포함되지 않고 왼쪽ㅇ에서 부터 값이 ㅎ할당왼다.
