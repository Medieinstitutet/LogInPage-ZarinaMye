const findUserName = document.getElementById("UserName");
//const findPassWord = document.getElementById("PassWord");
const logInBtn = document.getElementById("logInBtn");
//const logOutBtn = document.getElementById("logOutBtn");
//const newUserBtn = document.getElementById("newUserBtn");
const printUserMessage = document.getElementById("userMessage");

let users = [
    {userName: "janne", passWord: "test"},
    {userName: "zarina", passWord: "lösen1"},
]  

logInBtn.addEventListener("click", () => {

    let user = users.find(user => user.userName === findUserName.value);
    console.log("user", user);
 
    if (user) {
        printUserMessage.innerHTML = "Welcome" + " " + user.userName +  "!";
    } else
    {
        printUserMessage.innerHTML = "Ivalid user- and or password!";
    }
});
   
