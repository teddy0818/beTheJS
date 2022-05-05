// 함수 호출 시 stack생각
// 함수 선언 시 스코프 체인 생각

function c() {
    const y = 'y';
    console.log('c');
    debugger;
}

function a() {
    const x = 'x';
    console.log('a');
    function b() {
        const z = 'z';
        console.log('b');
        c();
    }
    b()
}

a(); // a, b, c
c(); // c