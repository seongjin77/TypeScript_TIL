// 제네릭
// extends는 제네릭의 타입을 좁힐 수 있다. 바로 타입 지정 가능
function add2<T extends number>(x: T , y: T ): T {
  return x + y
}

function add3<T extends {a: string, b: number}>(x: T , y: T ): T {
  return x + y
}