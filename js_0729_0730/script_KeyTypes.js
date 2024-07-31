//=====자료형=====//
//--1.숫자형 --//
const x = 10;
//사칙연선 가능
//number

//--2.문자열--//
const y = "무지개";
//"" '' `` 으로 표기됨. 숫자가 들어가있어도 문자열
//string

//--3.논리형--//
const z = true;
//boolean
// true , false 두가지가 있다.

//--4.기타형--//
const b = null;
console.log(typeof b);
//objest
//null 과 undefined 두가지
//null = 비어있는 값 , 후에 값이 들어갈수 있으며 boolean에서 false로 입력된다.
//undefined = '미정'이란 값. 이미 값이 할당 되어 있기에 어떠한 값도 못 들어간다.

//=======================================//
//////-기타형과 느슨한 일치. 엄격한 일치-//////
if (b === undefined) {
  console.log("b엄격 Yes");
} else {
  console.log("b엄격 no");
}
//no의 값을 반환
//-=====
//느슨일치
if (b == undefined) {
  console.log("b느슨 Yes");
} else {
  console.log("b느슨 no");
}
//yes값 반환
//=====
let c;
if (c === undefined) {
  console.log("c엄격 Yes");
} else {
  console.log("c엄격 no");
}
//yes값 반환
//?? = const  c;는 안되는데 let c;는 되는 이유.
//예상 = undefined는 미정의 값으로 후에 값이 입력된다는 의미라 재할당이 되지 않는 const은 불가한걸까?
//=======================================//

//--5.객체--//
const jsBook = {
  title: "복잡한 스크립트",
  page: 250,
};
//object
//복합적 데이터 저장
//배열과 함수를 객체로 포함하는 경우도 있다.
//반드시 property(속성) 필요
// 속성은 key: value, 형태를 가진다.
//값을 찾아올 때 온점 표기법 | 대괄호 표기법이 있다.
//---------- 온점
const jsBookTitle = jsBook.title;
//-----------대괄호
const jsBookPage = jsBook["page"];
console.log(jsBookTitle, jsBookPage);

//--6.배열--//
const RGB = ["red", "green", "blue"];
//자식요소에게 값 (index)을 부여하고 갯수를 센다(length).
console.log(RGB[0]);
//0번을 가진 첫번째 자식을 불러옴
console.log(RGB[RGB.length - 1]);
//마지막 자식은 blue를 불러옴

//--7.심벌--//
let test01 = Symbol();
let test02 = Symbol();
console.log(test01 === test02);
//false라고 뜬다. 같아보여도 고유한 값으로 인식. 아이디나 비밀번호를 저장할 때 자주 사용

//--8.함수--//
//익명 함수 선언 참조 방식//
//호이스팅 가능
testFnc();
function testFnc() {
  console.log("확인");
}

testFnc02();
const testFnc02 = function () {
  console.log("확인2");
};
//에러 발생
