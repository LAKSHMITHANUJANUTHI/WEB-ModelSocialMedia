const logints=document.getElementById("login-form");
const regis=document.getElementById("register-form");
const txt=document.getElementById("post-form");
if(logints) logints.addEventListener('submit',loginform1)
if(regis) regis.addEventListener('submit',registerform1)
if(txt) txt.addEventListener('submit',postform1)
function registerform1(e){
    e.preventDefault();
    let username1=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let passwrd=document.getElementById('pswd').value;

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
let regi= new User(username1,email,passwrd);
     console.log(regi);
}  
function loginform1(e)
{
    e.preventDefault()

    let user_name=document.getElementById("username").value;
    let pswd=document.getElementById("pswd").value;
   
    class User{
        constructor(user1,password1)
        {
           
            this.username=user1;
            this.password=password1;
        }

        getusername(){
            return this.username;
          }
       getpassword()
    {
        return this.password;
    }
    setusername(user1)
    {
     this.username=user1;
    }
    setpassword(password1)
    {
        this.password=password1;
    }
       }
   
    const user1=new User(user_name,pswd);
    console.log(user1);
}

function postform1(e)
{
    e.preventDefault()
   
    let post1=document.getElementById('post').value;
   
   
    class User{
        constructor(postcontent)
        {
           
            this.postcontent=postcontent;
           
        }
        getpostcontent(){
            return this.postcontent;
        }
        setpostcontent(postcontent){
            this.postcontent = postcontent;
        }
    }

    const user1=new User(post1);
    console.log(user1);
}
