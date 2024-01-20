const getcolor =()=>{
    const randonmunber =Math.floor(Math.random()*1677215);
    const randomcode ="#"+ randonmunber.toString(16);
    document.body.style.backgroundColor =randomcode;
    document.getElementById("color-code").innerText = randomcode;
    navigator.clipboard.writeText(randomcode);
}
document.getElementById("btn").addEventListener("click",getcolor)
getcolor();
