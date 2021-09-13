let str = ""
console.log(str)

if(str) {
	console.log(str)
}else {
	console.log("없음")
}

let num = 0
console.log(num)
if(num){
	console.log(num)
}else {
	console.log("숫자 없음")
}

/**
 * JS 에서는 
 * null, "", 0, undefined, NaN 등등의 값들이
 * if()를 만나면 false가 된다.
 */

let bYes = true || true;
// 문자열 str에 담긴 값이 "" 이거나 Null 이면
// 뒤의 대한민국 문자열을 담아라 
// 만약 담겨있으면 그 값을 result에 담아라
let result = str || "대한민국";

if(str == "") {
	result = "대한민국"
}