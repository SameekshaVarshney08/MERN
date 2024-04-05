// const firstnamechange=(e)=>{
//     console.log(e.target.value);
//     if(val.length>1){
//         console.log('correct');
//     }
// }
    function submitform(e){
    e.preventDefault();
    // const t=e.target;
    // console.dir(e.target);
    const t=e.target;
    const res={
     hobbies:[],
    };
    for(let i=0;i<t.length;i++){
        // const inp=t[i];
        const ty=t[i].type;
        if(ty!='submit'){
            const vl=t[i].value;;
            const nm=t[i].name;
        // console.log(nm,ty,vl);
        if(ty=='checkbox'&& t[i].checked){
            res.hobbies.push(vl);
        }
        if(ty!='checkbox'){
            res[nm]=vl;
        }
           
        }
    }
    console.log(res);
}