// console.log('start')
// setTimeout(()=>{console.log('timeout....')},0)
// console.log('end')
// setTimeout(()=>{
//     console.log('timeout 1....')},1000)
// console.log('start')
// setTimeout(()=>{
//     console.log('timeout 2....')},1000)
// console.log('intermediate')
// console.log('end')
//  function createorder(x,fn){
//     console.log(x);
//     //why promises?
//     setTimeout(()=>fn('lik123'),3000);
//     setTimeout(()=>fn('lik123'),3000);
//  }
//  function makepayment(orderID){
//     console.log(orderID);
//  }
//  createorder('soap',makepayment);
// setTimeout(()=>{
//     console.log('firsttimeout...')},0);
//   const pr=new Promise((resolve,reject)=>{
// //   if(true){
//    setTimeout(()=>{
//     reject("sameeksha");},7000);
//   }
//   else{
//     reject();
//   }

//   });
//   console.log(pr);

//   setTimeout(()=>{
//     console.log(pr);
//     ;},10000);
    pr.then((res)=>{
        console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
setTimeout(function abc(){
    console.log('i am one');
},0);
const pr=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('done')
    },0);
})
  pr.then(function b(res){
    console.log("promise completed:",res);
  });
  setTimeout(function xyz(){
    console.log('i am two');
  },0);



