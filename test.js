// const b = 1
// const pure = (a,b)=>{
//   return a + b
// }

// const not_pure = (a)=>{
//   return a + b
// }

// console.log(pure(1,3))
// console.log(not_pure(1))

// let c = 0
// const bad_f = () => {
//   return c++;
// }
// bad_f()
// const f = c => c + 1

// const a = (a) =>{
//   return a + 10
// }

// const b = [1, 2, 3].map(a)
// console.log(b)

// const _call = (a,b) => a() + b()

const a = val => () => val

// function a(val){
//   return function() {
//     return val
//   }
// }

console.log(a_lazy())