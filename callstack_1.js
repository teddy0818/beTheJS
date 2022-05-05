// 함수와 함수 호출은 다르다!!

const add = (a, b) => a + b;

function calc(func, a, b) {
    return func(a, b);
}

let num = add(3, 5);
console.log(num); // 8

let num2 = calc(add, 3, 5);
console.log(num2); // 8

// 틀린 예제
// let num2 = calc(add(), 3, 5);
// -> let num2 = calc(undefined, 3, 5);
// 헷갈리지 않을려면 함수 호출 시 return 값을 그대로 넣어봐라

// 다른 예
const onClick = () => () => {
    console.log("hello");
}
// onClick 함수의 리턴값이 함수이기 때문에 틀리지 않음
document.querySelector('#header').addEventListener('click', onClick())




