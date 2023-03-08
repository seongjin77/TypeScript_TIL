interface AAA {
  readonly a : string;
  b: string;
}
// implements는 class의 interface를 만족하는지 체크할때 사용한다. a
class BBB implements AAA {
  readonly a : string = '123';
  b: string = 'fsf'

}

// abstract는 상속받는 클래스에서 반드시 구현해주어야 한다. implements랑 비슷.
abstract class CCC {
  private readonly a : string = '123';
  b: string = 'world';
  c: string = 'wow';

  abstract method(): void;
}

class C extends CCC {
  method(){
    console.log('추상클래스에서 정해둔 틀 따르기');
  }
}