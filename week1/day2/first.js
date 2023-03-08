"use strict";
;
const a13 = {
    talk() { return 3; }
};
const TEESsf = a13.talk(); // 타입 강제 변환
TEESsf.toString();
;
;
function catOrdog(a) {
    if (a)
        false;
    return true;
}
// is 키워드 사용. 보통 is는 커스텀 함수로 쓰는데 if문 안에 참, 거짓을 나눌때 사용함.
function pet(a) {
    if (catOrdog(a)) {
        console.log(a.bow);
    }
    else {
        console.log(a.meow);
    }
}
