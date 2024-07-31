//교통 식대 음료비 를 받고 합이 10000원이 넘으면 예산관리실패 / 안 넘으면 예산관리 성공
//반복문을 사용하자.

let price = [];
//배열로 받기위해 배열 자료형으로 값 받기
for (i = 0; i < 3; i++) {
  const userPrice = Number(prompt("숫자만 입력"));
  price.push(userPrice);
}
//()안 해석 = 3번을 반복할 반복문이다. -> 0부터 2까지 증가하여 3번 반복
//{}안 해석 - userPrice는 입력받은 값인데. 이 입력 받은 값을 배열형 변수인 price안에 넣을 것(push)이다.

const [first, second, third] = price;
// 3개의 인자값에 각각 이름을 붙임

const sum = first + second + third;

if (isNaN(sum) || sum === 0) {
  alert("잘못된 값 입니다 ");
} else if (sum < 10000) {
  alert("예산관리 성공");
} else {
  alert("예산관리 실패");
}

//isNaN(sum) ==> Not a Number의 값! 숫자가 아니라면 이라는 의미
// || ==> 논리연산자의 하나로  둘 중 하나라도 참이면 값을 true값을 제출
