"use strict";
const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;
const f = Symbol.for('abc');
const g = 1000000n;
// 화살표 함수 타입지정 방법. 타입을 지워도 js 문법이 말이 되어야 한다. 
const add = (x, y) => { return x + y; };
// 타입추론을 활용하자
// const a: string = '5'는 나쁜 코드. 왜냐?? string을 쓰지 않았을떄는 타입추론을 통해서 '5'라는 원시타입을 지정해줌. 오히려 타입의 범위를 넓히는 꼴.
const A = '5';
function test(x, y) {
    return x + y;
}
const cc = 'hello hell'; // 여기서 자동 추천을 해준다.
// 여러개의 변수들을 하나의 변수들을 묶어줄때 쓰임.
// 컴파일시 js에서 사라짐
// EDirection.Up 이런식으로 접근 가능
// const enum EDirection {
//   Up = 1,
//   Down = 3,
//   Left =56,
//   Right = '234'.length,
// }
var FileAccess;
(function (FileAccess) {
    // 상수 멤버
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // 계산된 멤버
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
// as const를 쓰면 해당 속성을 변환없이 그대로 쓰겠다는 뜻. readonly 추가됨.
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
};
// typeof는 값을 타입속성으로 바꿔준다. keyof는 키값을 타입속성으로 변환시켜줌.
const obj = { a: '123', b: 'hello', c: 'world' };
//////////여기 안되는 부분 궁금 ////////////
// declare function tt<T>(arr: T[], callback: (el: T) => any): void;
// // declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
// let target: number[] = [];
// tt([1, 2, 3], el => target.push(el));
// interface A {
//     talk: () => void;
// }
// const aaa: A = {
//     talk() { return 3; }
// }
