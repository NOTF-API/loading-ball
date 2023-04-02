import { LoadingBall } from "./LoadingBall.js";

const ball = new LoadingBall({
  // target:document.querySelector("#app"),
  width:400,
  fontSize:80,
});

[10,25,30,50,75,78,80,95,100].forEach((progress)=>{
  setTimeout(() => {
    ball.to(progress)
  }, progress*100);
})
