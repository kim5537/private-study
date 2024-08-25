document.addEventListener("DOMContentLoaded", function () {
  // 요소 선택
  const userEmail = document.getElementById("userEmail");
  const emailselect = document.getElementById("email");
  const emailDirectInput = document.getElementById("emailDr");
  const directOptionValue = "direct"; // 직접입력 선택 옵션의 value

  // userEmail의 값이 변경될 때마다 실행
  userEmail.addEventListener("input", function () {
    const emailValue = userEmail.value.trim();
    //앞뒤 공백 삭제
    const atIndex = emailValue.indexOf("@");
    // @ 뒤의 글자부터 추출
    //(문자열,배열 함수: 해당 문자와 일치하는 값부터 값을 가져온다. 왼쪽부터 가져오며 만약 뒤번째 값을 가져오고 싶다면 두번째 인자값으로 1 을 적어주면 된다.==> 해당 곳의 인덱스 값을 제출한다)

    // '@'가 있는 경우 도메인 부분 추출
    if (atIndex !== -1) {
      //indexOf의 특징으로 해당 값과 일치하는 값이 없다면 -1의 값을 제출함
      //즉 @가 있다면 이란의미
      const domain = emailValue.substring(atIndex + 1);
      //입력값의 @ 다음 글자부터 가져온다는 의미
      //substring은 인덱스 값을 받고 해당 인덱스 위치 이상의 글자들 가져오는 문자열 함수이다.
      let optionFound = false;

      // 모든 옵션을 확인하여 일치하는 도메인 선택
      for (let option of emailselect.options) {
        //옵션의 내용 글자 하나하나 불러옴
        if (option.value === directOptionValue) {
          continue; // '직접입력' 옵션은 무시 ==> 건너뛰기
        }

        const optionText = option.textContent || option.innerText;
        //textContent ==> 해당 노드와 그 자식들의 text를 다 가지고 온다
        if (optionText === domain) {
          //입력된 @뒤에 글이 옵션글자와 같다면
          emailselect.value = option.value;
          //섹션밸류와 옵션 벨류는 같고
          optionFound = true;
          emailDirectInput.style.display = "none"; // '직접입력' 필드를 숨김
          break;
        }
      }

      // 도메인이 일치하는 옵션이 없으면 '직접입력' 옵션 선택
      if (!optionFound) {
        emailselect.value = directOptionValue;
        emailDirectInput.style.display = "block"; // '직접입력' 필드를 표시
        emailDirectInput.value = domain;
      }
    } else {
      emailselect.value = "none"; // 기본 선택 옵션
      emailDirectInput.style.display = "none"; // '직접입력' 필드를 숨김
    }
  });
});

const emailValue = userEmail.value.trim();
const atIndex = emailValue.indexOf("@");
const emailErr = /^[a-zA-Z0-9]+$/g;
const emailIn = document.querySelector(".emailerr");

if (emailValue === "") {
  emailIn.innerText = "";
} else if (!emailErr.test(emailValue)) {
  emailIn.innerText = "숫자 또는 영문만 입력 가능합니다.";
} else {
  emailIn.innerText = "";
}

if (emailValue !== "") {
  if (emailValue.includes("@")) {
    const userOtherId = emailValue.split("@");
    const onlyId = [...userOtherId].shift();
    emailValue = "";
    emailValue = `${onlyId}`;
  }
}
