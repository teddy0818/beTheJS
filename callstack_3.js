// this는 함수 호출을 할 때 결정된다 !!!
// this는 기본적으로 window이지만, 객체 메서드, bind call apply, new일 때 this가 바뀐다. 그리고 이벤트리스너나 기타 라이브러리처럼 this를 내부적으로 바꿀 수도 있으니

// 1. object - this 변경된다
const obj = {
    name : 'hbj',
    sayName() {
        console.log(this.name)
    }
};
obj.sayName(); // hbj

// 2. object - 화삶표 함수 일 경우 상위 함수의 this를 가져옴
const obj2 = {
    name : 'hbj',
    sayName : () => {
        console.log(this.name)
    }
};
obj2.sayName(); // undefined

// 3. bind call apply 일 경우 this가 바뀐다
var obj3 = { c: 'd' };
function b() {
  console.log(this);
}
b(); // Window
b.bind(obj3).call(); // obj3
b.call(obj3); // obj3 
b.apply(obj3); // obj3