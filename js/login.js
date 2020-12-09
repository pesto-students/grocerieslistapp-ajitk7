function login(){
    console.log("in Login Function");
let username= document.getElementById('loginUserName').value;
let password= document.getElementById('loginUserPassword').value;
console.log(username);
console.log(password);
console.log(users.filter(user=> user.userName==username && user.password==password).length);

if(users.filter(user=> user.userName===username && user.password===password).length==1){
    document.getElementById('lblLoginUser').innerHTML='Logged In As :'+username;
    loggedInUser=users.filter(user=> user.userName===username && user.password===password)[0];
    disableLoginDiv();
    viewCart();
}else{
    alert('Invalid user name or password');
}

}

function disableLoginDiv(){
    document.getElementById('loginDiv').style.display='none';
    
    document.getElementById('cartDiv').style.display='block';


}

function logout(){
    document.getElementById('lblLoginUser').innerHTML='';
    document.getElementById('loginDiv').style.display='block';
    
    document.getElementById('cartDiv').style.display='none';

}

function registerUser(){
    let username= document.getElementById('regUserName').value;
    let password= document.getElementById('regUserPassWord').value;
    let rePassword= document.getElementById('regUserRePassWord').value;

    if(users.filter(user=> user.userName==username).length>0){
        alert("User already Exists");
    }else if(password!=rePassword) {
        alert("Password not matched");
    }else{
        
        let newUser = {
            "userName" : username,
            "password" : password,
            "cart" :{}
        }
        users.push(newUser);
        document.getElementById('lblLoginUser').innerHTML='Logged In As :'+username;
        disableLoginDiv();
    }


}