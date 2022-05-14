// 주의 : 콜백이라고 무조건 다 비동기가 아니다
// promise : 실행 됐는데 결과값이 나중에 실행된다

/*
const p = new Promise();
const c = p.then((결괏값) => {
    // 결괏값 사용

}).catch((에러)=>{})
*/

/*
콜백 지옥 문제점 - 함수의 결괏값을 바로 받아서 사용해야함

axios.get('서버주소1', function(데이터1) {
    axios.get('서버주소2', function(데이터2) {
        axios.get('서버주3', function(데이터3) {
        });
    });
});
*/

/*
- promise를 사용하면 결괏값을 받아서 나중에 원할때 사용이 가능하다
const p1 = axios.get('서버주소1');
const p2 = axios.get('서버주소2');
const p3 = axios.get('서버주소3');

- 하지만 하나라도 에러뜨면 다 에러가 뜬다. 실행 성공한 데이터들은 다 날라간다
Promise.all([p1, p2, p3, p4, p5, p6]).then((results) => {});
- allSettled : 어디서 에러가 떴는지 표시 해준다. 실패한 것만 필터링해서 다시 시도 가능 
Promise.allSettled([p1, p2, p3, p4, p5, p6])
.then((results) => {})
.catch((err) => {})
.finally(() => {})
*/