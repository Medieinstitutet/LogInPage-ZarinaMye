const findUserName = document.getElementById("UserName");
//const findPassWord = document.getElementById("PassWord");
const logInBtn = document.getElementById("logInBtn");
//const logOutBtn = document.getElementById("logOutBtn");
//const newUserBtn = document.getElementById("newUserBtn");
const printUserMessage = document.getElementById("userMessage");

let users = [
    {userName: "janne", passWord: "test"},
    {userName: "zarina", passWord: "lösen1"},
    {userName: "mollan", passWord: "lösen2"},
]  
//object arrow

const para = document.createElement("p");
para.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";
document.body.appendChild(para);

logInBtn.addEventListener("click", () => {

    let user = users.find(user => user.userName === findUserName.value);
    console.log("user", user);
 
    if (user) {
        printUserMessage.innerHTML = "Welcome" + " " + user.userName + " "+ "to your member page!";
    } else
    {
        printUserMessage.innerHTML = "Ivalid user- and or password!";
    }
});
// find för att leta i object arrow
   
