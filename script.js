let input=document.querySelector(".calculator-screen input");
input.onclick=function (e) {
    e.preventDefault();
};
input.onkeypress=function(){
    e.preventDefault();
};
const add= (value)=>{
    input.value+=value;
};
const allClear = ()=>{
    input.value=""
};
const removeChar = ()=>{
input.value=input.value.slice(0,-1);
};
const calculate = ()=>{
    if(!input.value) return ;
    //evaluate expressions using eval() functon
    input.value=eval(input.value);
};