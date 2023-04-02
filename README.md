# loading-ball
Using html, css, and js to implement an animation in load (the flowing water continues to flow and rise)

[中文文档](doc/README.zh-CN.md)

effect:

![](doc/loading.gif)

+ Manually controllable progress
+ Animation effect and smooth switching between animations
+ Text is displayed in another color after being covered by the foreground
+ Minimize the use of js

## How to use
```javascript
import { LoadingBall } from "./LoadingBall.js";

// ball will default mount to body
const ball1 = new LoadingBall();

// mount to #app
const ball2 = new LoadingBall({
    target:document.querySelector("#app")
});

// other config
const ball3 = new LoadingBall({
    target:document.querySelector(".target")
    width: 100, // 1-100 integer number
    fontSize: 20, // number
    // #FFFEEE or rgb(...) or rgba(...)
    backgroundColor: "#eaf7ff", 
    backgroundTextColor: "#1f232c",
    foregroundTextColor: "#ffffff",
});
// if you want to cofig more,just edit LoadingBall.css yourself

ball1.to(5); // goto 5%
ball2.to(50); // goto 50%
ball3.to(100); // goto 100%
```

add LoadingBall.css in HTML file
```html
<link rel="stylesheet" href="LoadingBall.css">
```