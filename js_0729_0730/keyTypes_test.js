// 사용자에게 화씨(fah)온도를 받아서 콘솔창에서 해당 온도를 섭씨온도로 변환했을 때의 값을 출력해주세요!!!!
// 섭씨(cel)온도 = (화씨온도 - 32) / 1.8

const fah = parseFloat(prompt("온도입력"));
const cel = ((fah - 32) / 1.8).toFixed(2);

alert(`${fah}도는 섭씨 온도로 ${cel}도 입니다`);

//======형변환===//
//--숫자 변환--//
// number() - 숫자로 바꿈. 글자의 경우 NaN으로 뜨고 넘버가 아니라는 뜻;값을 찾아온 상태 || 논리형 = true(1) . false(0)으로 입력
// parseint() - 정수값으로. 주로  nunber로 많이 대처된다.
// parseFloat() - 인자값 숫자를 실수(소수점을 가진 수)로 표현. 체온등에 많이 사용

//--문자 --//
//string() - 모든값을 문자로. number과 같은 개념
//tostring() - null , underfined는 제외하고 문자로 변환

//--논리--//
//boolean 대부분이 true로 나오나 논리값(null.undefinde)만 false로 나옴
