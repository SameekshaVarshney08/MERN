console.log(".....API STARTED....");
function callAPI(){
   fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=2f73c6837603419cadc422c6e43c3db1")
//    .then((res )=>res.json())
   .then((res)=> res.json())
   .then((data) => renderUI(data))
}

//  callAPI();
function renderUI(data){
    //got the articles from data
    const articles=data.articles;
    for(let i=0;i<10;i++){
    // single article from the articles array
    console.log(data);
    const root=document.getElementById("root");
    const ar=articles[10];
    console.log(ar);
    //created parent div
    const div=document.createElement("div");
    div.setAttribute("class","news-card");
    const h3=document.createElement("h3");
    h3.innerText = ar.title;
    const p=document.createElement("p");
    p.innerText = ar.description;
    const img=document.createElement("img");
    img.src =ar.urlToImage;
    div.appendChild(h3);  
    div.appendChild(img); 
    div.appendChild(p);
    // div.appendChild(img);
    root.appendChild(div);
}
}
//  renderUI();
    callAPI();
