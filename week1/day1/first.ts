const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for('abc');
const g: bigint = 1000000n;

// null과 undefined는 다른 모든 타입에 서브 타입으로 존재한다.

// function add(x: number, y: number): number { return x + y }
type Add = (x:number, y:number) => number
// 화살표 함수 타입지정 방법. 타입을 지워도 js 문법이 말이 되어야 한다. 
const add: (x:number, y:number) => number = (x,y) => { return x + y}

// 타입추론을 활용하자
// const a: string = '5'는 나쁜 코드. 왜냐?? string을 쓰지 않았을떄는 타입추론을 통해서 '5'라는 원시타입을 지정해줌. 오히려 타입의 범위를 넓히는 꼴.
const A = '5'
// 함수에서 매개변수만 타입을 지정해주면 리턴값은 타입추론을 해준다.

//함수 오버로드에서 마지막 함수는 위의 타입을 포함 해야한다.
function test(x: number, y:number) : number;
function test(x:any , y:any) {
  return x + y
}

// as(Assertion) 타입 단언 : 컴파일 단계에서 타입스크립트가 감지하지 못하는 애매한 타입요소들을 직접 명시해주는 키워드
// 하지만 실무에서 잘 쓰이지 않는다. 이미 선언된 타입을 다른 타입으로 바꿔주는 일이 없기 때문.


// 느낌표의 뜻은 null이나 undefined가 아님을 보증한다는 의미. 컴파일시 ! 사라짐. 하지만 이것도 가능성을 열어두지 않기 때문에 비추천한다.
const head = document.querySelector('#head')!;
console.log(head);

// string과 String은 다름. 소문자로 하는 것 기억하기.
// const a: string = 'hello';
// const b: String = 'hell'; // 대문자 String은 new String()할때 쓰이는 것. 다만 대문자 써도 작동은 함

// 템플릿 리터럴 타입
type World = 'world' | 'hell';
// const aa: World = 'world'
type bb = `hello ${World}`
const cc: bb = 'hello hell' // 여기서 자동 추천을 해준다.

// 여러개의 변수들을 하나의 변수들을 묶어줄때 쓰임.
// 컴파일시 js에서 사라짐
const enum EDirection {
  Up = 1,
  Down = 're',
  Left ='3',
  Right = false
}
// as const를 쓰면 해당 속성을 변환없이 그대로 쓰겠다는 뜻. readonly 추가됨.
const ODirection = {
  Up : 0,
  Down : 1,
  Left: 2,
  Right: 3
} as const

// typeof는 값을 타입속성으로 바꿔준다. keyof는 키값을 타입속성으로 변환시켜줌.
const obj = {a: '123', b: 'hello', c: 'world' };
type Key = keyof typeof obj;