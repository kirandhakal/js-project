
const numberset="012346789";
const upperset ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset= "abcdefghijklmnopqrstuvwxyz"
const symbolset="~!@#$%^&*()_+-="

const passbox= document.getElementById("pass-box")
const totalchar=document.getElementById("totalchar")
const number=document.getElementById("number")
const uppercase =document.getElementById("uppercase")
const lowercase =document.getElementById("lowercase")
const symbol=document.getElementById("symbol")

// function call
const getrandomddata =(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]

}
const passwordgenerator =(password ="")=>{
    if(uppercase.checked){
        password+=getrandomddata(upperset)
    }
    if(lowercase.checked){
        password+=getrandomddata(lowerset)
    }
    if(symbol.checked){
        password+=getrandomddata(symbolset)
    }
    if(number.checked){
        password+=getrandomddata(numberset)
    }
    if(password.length<totalchar.value){
        return passwordgenerator(password)
    }
   passbox.innerText= truncateString(password,totalchar.value);
}
console.log("visit dhakalkiran.com.np for more " );
passwordgenerator();
document.getElementById("btn").addEventListener(
    "click",
    function(){
        passwordgenerator();
    }
    )
    function truncateString(str,num){
        if(str.lenght >num){
        let subStr =str.substring(0,num);
    return subStr;
    }else{
    return str;
    }
}

