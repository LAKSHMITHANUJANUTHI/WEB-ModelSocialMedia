const logints=document.getElementById("login-form");
const regis=document.getElementById("register-form");
const txt=document.getElementById("post-form");
if(logints) logints.addEventListener('submit',loginform1)
if(regis) regis.addEventListener('submit',registerform1)
if(txt) txt.addEventListener('submit',postform1)
class User{
    constructor(username,email,password)
   {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    
    getusername(){
      return this.username;
    }
    getemail()
    {
        return this.email;
    }
    getpassword()
    {
        return this.password;
    }
    setusername(username)
   {
    this.username=username;
   }
    setemail(email)
    {
        this.email=email;
    }
    setpassword(password)
    {
        this.password=password;
    }
}
function registerform1(e){
    e.preventDefault();
    let username1=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let passwrd=document.getElementById('pswd').value;
    
}  
function loginform1(e)
{
    e.preventDefault()

    let user_name=document.getElementById("username").value;
    let pswd=document.getElementById("pswd").value;
    const user1=new User(user_name,pswd);
    console.log(user1);
}

function postform1(e)
{
    e.preventDefault()
   
    let post1=document.getElementById('post').value;

    const user1=new User(post1);
    console.log(user1);
}
function getAllUsers()
    {
    fetch('http://localhost:3000/users/').
    then((res)=>res.json()).
    then((data)=>console.log(data))
    .catch(err => {
        console.log(err.message);
      })
    }