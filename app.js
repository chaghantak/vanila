
const title =document.querySelector(".hello button");
const title1=document.querySelector(".hello:first-child h1")//.hello클래스의 첫번째 element h1을가져오는것
console.dir(title);//title의 내부를 보는것

let count=0;
function handleTitleClick(){
  count++;
  title1.innerText=count;
  if(count==10){
      title1.innerText="good";
  }
}

function handleMouseEnter(){
    title1.innerText="Sign"
}

function handleMouseLeave(){
    title1.innerText="Leave"
}
console.dir(title1)
title.addEventListener("click",handleTitleClick)
//handleTitleClick()을 넣어주면 클릭하기도 전에 함수가 실행되버림

title1.addEventListener("mouseenter",handleMouseEnter)
title1.addEventListener("mouseleave",handleMouseLeave)
