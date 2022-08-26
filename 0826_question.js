// const printArticles = (str, callback) => {
//   setTimeout(()=>{
//     console.log(str);
//     callback();
//   }, 1000)
// }

// const printAll = () =>{
//   printArticles('*', () =>{
//     printArticles('*', ()=>{
//       printArticles('*', ()=>{

//       })
//     })
//   })
// }

// printAll();

// const promise = new Promise((resolve, reject)=>{
//   console.log(1);
//   console.log(2);
//   resolve()
//   console.log(3);
//   console.log(4);
// })
// promise.then(()=>{
//   console.log(5);
// })
// console.log(6);

//1, 2, 3, 4, 6, 5
// promise.then 은 비동기로 실행되어서

// const first = () => (new Promise ((resolve, reject)=>{
//   console.log(1);
//   let test = new Promise((resolve, reject)=>{
//     console.log(3);
//     setTimeout(()=>{
//       console.log(5);
//       resolve(6)
//     },0)
//     resolve(4);
//   })
//   resolve(2);
//   test.then((_)=>{
//     console.log(_);
//   })
// }))

// first().then((_)=>{
//   console.log(_);
// });

// console.log("test");

// first 함수 실행 -> 1출력
// test.then때문에 console.log(3)을 만나고 출력,
// test가 먼저 출력되는이유는 콜백 백그라운드를 거쳐 마이크로 태스크큐로 옮겨지는 작업이 있기 때문이다.
// setTimeout은 (매크로 테스크 큐에 담긴다) 만나고 다음 resolve부터 실행 ( 마이크로 태스크 큐)
// 매크로테스크 큐 보다 마이크로 태스크큐가 먼저 실행된다.

// const fetch = require('node-fetch');

// const test = async () =>{
//   try{
//     const wrongUrl = 'https://wrong.url';
//     const connect = await fetch(wrongUrl);

//   }catch(err){
//     console.error(err)
//   }
// }
// test();

// const APIKEY = 'vShxWUp7CoaBCrPHDrROH4wxeGZjOtJ7'
// const query = 'sdfasg'

// const doFetch = async () => {
//   try{
//     const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${APIKEY}`
//     const response = await fetch(url);
//     const data = await response.json();
//     const articles = data.response.docs;

//     articles.map((item) => {
//       const title = item.headline.main
//       console.log(title)
//     });
//   } catch (err) {
//     console.log("딥다이브 끄읕~~~");
//   }
// }

// doFetch()

const APIKEY = "vShxWUp7CoaBCrPHDrROH4wxeGZjOtJ7";
const query = "BTS";

const doFetch = async () => {
  try {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${APIKEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const articles = data.response.docs;
    
    articles.map((item) => {
      const title = item.headline.main;
      // console.log(title.length);
      if (title.length === 0) {
        throw new Error("없어요");
      } else {
        console.log("끝~~");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

doFetch();
