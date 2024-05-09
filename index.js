
let result = document.getElementById("result");


function display(Number){
    result.value = result.value+Number;
}

function calculate(){
    let final_res = result.value;
    let final = eval(final_res);
    result.value = final;    
}

function clearAll(){
    result.value="";
}

function del(){
    result.value= result.value.slice(0, -1);  
}