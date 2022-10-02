let login=()=>{
let ip1=document.getElementById("ip1").value;
let ip2=document.getElementById("ip2").value;
let ip3=document.getElementById("ip3").value;
let ip4=document.getElementById("ip4").value;
 
let obj={ip1,ip2,ip3,ip4};
console.log(obj);
localStorage.setItem("otp_data",JSON.stringify(obj));
window.location.href="index.html"
};

let back=()=>{
    window.location.href="login.html"
};