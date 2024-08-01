// id pw 검증
const id = "ezen";
const pw = 1234;

//사용자에게 순차적으로 값을 받는다
//사요자 입력값이 저장된 id와 일치 ==> pw 값입력 받가
//일치하지 않으면 ==>v페이지 처음으로
//pw값을 입력하는 단계도착 ==> pw 일치 ==> 환영문구
//pw값 틀림 ==> 처음으로
//if문 사용 (반복문)
const userid = prompt("아이디입력");

if (id === userid) {
  const userpw = Number(prompt("비밀번호 입력"));
  if (pw === userpw) {
    alert(`${id}님 환영합니다`);
  } else {
    alert("비밀번호가 일치하지 않습니다");
    window.location.reload();
  }
} else {
  alert("회원을 찾을 수 없습니다");
  window.location.reload();
}
