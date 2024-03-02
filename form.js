

let b1 =document.getElementById("b");

b1.addEventListener("click", function(e){
e.preventDefault();

    let username = document.getElementById("username").value;
    let password =document.getElementById("Password").value;
     let errorMsg = document.getElementById('error-msg');
     if(username=="" ||password== ""){
        errorMsg.innerHTML ="please enter the values";
     }
     else if(username!="" ||password!=""){
        errorMsg.innerHTML= "";
     }
     else{
        alert("done")}
    
})


