const month = Number(prompt("몇월입니까"));
if (month >= 9 && month <= 11) {
  alert("가을");
} else if (month >= 6 && month <= 8) {
  alert("여름");
} else if (month >= 3 && month <= 5) {
  alert("봄");
} else {
  alert("겨울");
}

//마지막 else은 조건문 필요없음
