// console.log('hello');
// function FetchAPI(){
//     const url=("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=MVEQTUC4VEGZQ3NRLKZG6PEPR")
//     fetch(url)
//     .then((res)=>res.json())
//     .then(renderUI);

// }
//  fetchAPI(){
    const root=document.getElementById("root");

    function renderUI(data){
        const cell=document.getElementById("tr");
        // const data=data.days;
        //   console.log(days);
          const row=document.createElement("tr");
          const cell1=document.createElement("th");
          cell1.innerText='date';
          rows.appendChild(cell1);
          const cell2=document.getElementById("th")
          cell2.innerText="maximumtemperature";
          row.appendChild(cell2);
        //   const cell3=document.getElementById("th")
        //   cell3.innerText="minimumtemperature";
        //   row.appendChild(cell3);
          rows.append(row);
          const childrows=document.createElement("row");
          const c1=document.createElement("td");


    }
    renderUI();


