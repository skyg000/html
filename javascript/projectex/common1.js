const elCon = document.querySelectorAll('.contents img');
let pageNum1 = localStorage.pageNum;
if(pageNum1)elCon[pageNum].style.color= 'yellow'
console.log(
    JSON.parse (localStorage.obj)
    /* JSON.stringify(objStr); 두가지는 같이 사용 | JSON은 ""를 무조건 사용 | 데이터를 작성하는 곳 |
        문자열,숫자,배열,블리언 등만 사용가능 */
);
    elNav.forEach(function(menu,key){
        menu.onclick = function(e){
            e.preventDefault();
            localStorage.pageNum = key;

            let objStr = {num:key, name:this.innerText}
            localStorage.obj = JSON.stringify(objStr);
            /* JSON.stringify(objStr) = 오브젝트 타입을 문자로 만들어줌 */

            location.href=this.href
        }
    })

switch(pageNum){
    case '0': main(); break; /* = switch를 빠져나옴 */
    case '1': about(); break;
    case '2': board(); break;
    default : /* 케이스에 해당되지않는다면 디폴트로 실행 */;
}
function main(){
    return 'main'
}
function about(){
    return 'about'
}
function board(){
    return 'board'
}
/* 
localStorage.키 = 값(문자,숫자,객체,배열);ㄹㅇ
localStorage.키 => 요청하는 방법 */

/* 
JSON.parse (객체형식의 문자) 문자 -> 객체로 변형
JSON.stringify(객체);        객체 -> 문자로 변형 
두가지는 같이 사용 | JSON은 ""를 무조건 사용 | 데이터를 작성하는 곳 |
문자열,숫자,배열,블리언 등만 사용가능 */

/* 
switch(){
    case: 값 : 실행문; break; 
    default: 값이 없을 경우 실행문;
} */
const elNav = document.querySelectorAll('nav a');
let pageNum = localStorage.pageNum;
if(pageNum)elNav[pageNum].style.color= 'yellow'
console.log(
    JSON.parse (localStorage.obj)
    /* JSON.stringify(objStr); 두가지는 같이 사용 | JSON은 ""를 무조건 사용 | 데이터를 작성하는 곳 |
        문자열,숫자,배열,블리언 등만 사용가능 */
);
    elNav.forEach(function(menu,key){
        menu.onclick = function(e){
            e.preventDefault();
            localStorage.pageNum = key;

            let objStr = {num:key, name:this.innerText}
            localStorage.obj = JSON.stringify(objStr);
            /* JSON.stringify(objStr) = 오브젝트 타입을 문자로 만들어줌 */

            location.href=this.href
        }
    })

switch(pageNum){
    case '0': main(); break; /* = switch를 빠져나옴 */
    case '1': about(); break;
    case '2': board(); break;
    default : /* 케이스에 해당되지않는다면 디폴트로 실행 */;
}
function main(){
    return 'main'
}
function about(){
    return 'about'
}
function board(){
    return 'board'
}
/* 
localStorage.키 = 값(문자,숫자,객체,배열);ㄹㅇ
localStorage.키 => 요청하는 방법 */

/* 
JSON.parse (객체형식의 문자) 문자 -> 객체로 변형
JSON.stringify(객체);        객체 -> 문자로 변형 
두가지는 같이 사용 | JSON은 ""를 무조건 사용 | 데이터를 작성하는 곳 |
문자열,숫자,배열,블리언 등만 사용가능 */

/* 
switch(){
    case: 값 : 실행문; break; 
    default: 값이 없을 경우 실행문;
} */