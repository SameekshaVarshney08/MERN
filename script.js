// const fs=require('node:fs');
// const data=fs.readFileSync('./myReadme.txt');
// console.log(data);
// console.log(data.toString());
// const fs=require('fs');
// const data=fs.readFileSync('./myReadme.txt',{encoding:'utf8'});
// console.log(data);
// console.log(data.toString());
// const fs=require('fs');
// fs.writeFileSync('./logs.txt',"10th April:DAY7");
// const fs=require('fs');
// console.log("start");
// const data=fs.readFileSync('./myReadme.txt',{encoding:'utf8'});
// console.log(data);
// console.log("end");
//promises in filesystem
// console.log('start');
//  const fsPromises=require('fs/promises')
//  const pr=fsPromises.readFile('./myReadme.txt',{encoding:'utf8'});
//  console.log(pr)
//  pr.then((res)=>{
//    console.log(res);
//  })
//  console.log('end');
 //callback in filesystem
//  const fs=require('fs')
//  const data=fs.readFile('./myReadme.txt',{encoding:'utf8'},(err,data)=>{
//   console.log(data);
//  });
// http://localhost:1500/

const http=require('http')
const fs=require('fs')
const data=fs.readFileSync('./data.json','utf8');
// console.log(typeof(data));
const dataObj=JSON.parse(data);
console.log(dataObj);
const products=dataObj.products;
console.log(products);

const htmlTemplate=`
<!DOCTYPE HTML>
<html lang="en-US>
   <head>
   <style>
   .product-card{
      max-width:500px;
      margin:20px auto;
      border:3px double brown;
      border-radius:8px;
      padding:16px;}
   </style>
   </head>

      <body>
       _PRODUCTS_CARDS_
      </body>
   
</html>
`
const cardTemplate=`
<div class='product-card'>
<h4>title</h4>
<p>INFO</p>
</div>
`
// const card1=cardTemplate
// .replace('title', products[0].title)
// .replace('INFO', products[0].description);
// const card2=cardTemplate
// .replace('title',products[1].title)
// .replace('INFO',products[1].description)
// const card3=cardTemplate
// .replace('title',products[2].title)
// .replace('INFO',products[2].description)

// const allcard=card1+card2+card3        
const allcards=products.map((elem)=>{
   let newCard=cardTemplate
   newCard=newCard.replace('title',elem.title)
   newCard=newCard.replace('INFO',elem.description)
   return newCard;

});        
const allcardsString=allcards.join('');             

const page=htmlTemplate.replace('_PRODUCT_CARD_',allcard)
.replace(' _PRODUCTS_CARDS_',card1);
const app=http.createServer((req,res)=>{
      console.log(' request received')
      console.log(req.url)
     res.writeHead(200,{
      'Content-type':'text/html'
     })
     res.end(allcard);
});
app.listen(1500,()=>{
      console.log('-------------------server started----------------')
})