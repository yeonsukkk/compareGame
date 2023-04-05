# 숫자 비교하기 게임
두개의 팀이 5번에 걸쳐서 랜덤으로 나오는 숫자의 합으로 승패를 결정하는 게임<br />
[사이트방문](https://ysoo-game-num.s3.ap-northeast-2.amazonaws.com/index.html)
## 목차
1. [언어&#x0026;툴](#언어&툴)
2. [스토리보드](#스토리보드)
3. [구조](#구조)
4. [페이지](#페이지)
5. [기능설명](#기능설명)

<br />

### 💡언어&#x0026;툴
<img src="https://img.shields.io/badge/HTML5-E34F26?style=E34F26&logo=HTML5&logoColor=fff"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=1572B6&logo=CSS3&logoColor=fff"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=F7DF1E&logo=JavaScript&logoColor=333"/> <img src="https://img.shields.io/badge/Node.js-339933?style=339933&logo=Node.js&logoColor=fff"/> <img src="https://img.shields.io/badge/npm-CB3837?style=CB3837&logo=npm&logoColor=fff"/> <img src="https://img.shields.io/badge/React-61DAFB?style=61DAFB&logo=React&logoColor=fff"/>
<br />
<br />

### 💡스토리보드
[스토리보드](http://ys-2023-portfolio.s3-website.ap-northeast-2.amazonaws.com/pdf/gameTest.pdf)
<br />
<br />

### 💡구조
```
react-portfolio4_gameTest
├─ public
│  ├─ favicon.ico
│  ├─ img
│  │  └─ bg
│  │     └─ bg.png
│  └─ index.html
└─ src
   ├─ App.js
   ├─ assets
   │  ├─ bg_modal.png
   │  ├─ bg_modal2.png
   │  ├─ green_1.png
   │  ├─ green_2.png
   │  ├─ green_3.png
   │  ├─ green_4.png
   │  ├─ green_5.png
   │  ├─ green_6.png
   │  ├─ green_7.png
   │  ├─ green_8.png
   │  ├─ green_9.png
   │  ├─ red_1.png
   │  ├─ red_2.png
   │  ├─ red_3.png
   │  ├─ red_4.png
   │  ├─ red_5.png
   │  ├─ red_6.png
   │  ├─ red_7.png
   │  ├─ red_8.png
   │  └─ red_9.png
   ├─ Border.js
   ├─ Button.js
   ├─ Dics.js
   ├─ Header.js
   ├─ index.css
   ├─ index.js
   └─ Modal.js

```

### 💡페이지
  1. [홈](#1-홈)
<br />

### 💡기능설명
  1. 홈<br />
    *src>App.js*<br />
    *component : src>Border.js, Button.js, Dics.js, Modal.js*
    <br />
    <img src="https://ysoo-game-num.s3.ap-northeast-2.amazonaws.com/git/main.png" alt="홈 이미지" width="400" />

      - 게임 순서
        - 리셋 버튼 클릭 시 처음부터 다시 진행
        1. 다섯 번의 숫자를 start 버튼 클릭 시 랜덤으로 뽑음
        2. 숫자를 다섯 번 다 뽑았으면 뽑은 합을 구함
        3. 뽑은 합을 다 구했으면 모달 창을 띄워서 승패 결정
        4. 모달창 닫기 버튼 누르면 게임 리셋
