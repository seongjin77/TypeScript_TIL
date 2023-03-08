// 잉여 속성 검사.초과 프로퍼티 검사라고 한다.  변수에 값을 저장해서 쓸때는 에러가 나지 않음. 객체 리터럴을 바로 쓸때는 잉여속성 검사를 지원한다.
// as 키워드를 사용해서 해결 가능. 다만 좋은 방법은 아니다.
interface A { a : string };
// const obj1 = { a: 'hello', b:'world' };
// const obj2 : A =  { a: 'hello', b:'world' }

// void 타입은 크게 3가지. 함수 리턴값. 매개변수로 콜백함수가 쓰일때, 메서드에서.
// 매개변수와 메서드를 실제 사용할때 리턴값이 있어도 문제가 없다. 다만 메서드를 사용시 리턴값이 무시됨.
// function et (callback: ()=> void) : void {
// }

// et(()=>{return 3})

// interface FSF {
//   talk : () => void
// }
// 매개변수에서 쓰이는 void 예시, declare는 다른 파일에 이 변수나 함수가 선언되어있다는 것을 알리는 역할. 추가로 타입을 지정해준다.
//declare function forEach<T>(arr: T[], callback: (el: T) => undefined): void; 
// declare function forEach(arr: number[], callback: (el: number) => number): void;
// let target: number[] = [];
// forEach([1, 2, 3], el => target.push(el));

interface AA {
    talk: () => void;
}
const a13: AA = {

    talk() { return 3; }
}
const TEESsf = a13.talk() as unknown as number // 타입 강제 변환
TEESsf.toString()

//console.log('ㅇㅇ',TEESsf);
// any를 사용할 때는 차라리 unknown을 쓰자.

//객체간의 타입검사
// class 간의 타입가드는 instanceof를 통해서 한다. 
// in 연산자를 사용함.
// if문을 활용해 객체들을 활용하는 방법
  
interface Cat { meow : number};
interface Dog {bow : number};

function catOrdog (a: Cat | Dog) : a is Dog {
  if((a as Cat)) false
  return true
}
// is 키워드 사용. 보통 is는 커스텀 함수로 쓰는데 if문 안에 참, 거짓을 나눌때 사용함.
function pet ( a: Cat | Dog ){
  if(catOrdog(a)){
    console.log(a.bow);
  }
  else{
    console.log(a.meow);
  }
}
// is 키워드의 실무 예

const isRejected = (input: PromiseSettledResult<unknown>) : input is PromiseRejectedResult => {
  return input.status === 'rejected'
}
const isFulfilled = <T>(input: PromiseSettledResult<T> ): input is PromiseFulfilledResult<T> => {
  return input.status === 'fulfilled'
}

const promises = await Promise.allSettled([Promise.resolve('a'),Promise.resolve('b')]);
const errors = promises.filter(isRejected)