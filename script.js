const findUserName = document.getElementById("UserName");
//const findPassWord = document.getElementById("PassWord");
const logInBtn = document.getElementById("logInBtn");
//const logOutBtn = document.getElementById("logOutBtn");
const printUserMessage = document.getElementById("userMessage");

let users = [
    {userName: "janne", passWord: "test"},
    {userName: "zarina", passWord: "lösen1"},
]  
// object arrow

logInBtn.addEventListener("click", () => {

    let user = users.find(user => user.userName === printUserMessage.value);
    console.log("user", user);
 //varför hittas inte if...?
    if (user) {
        printUserMessage.innerHTML = "Welcome" + " " + user.userName +  "!";
    } else
    {
        printUserMessage.innerHTML = "Ivalid user- and or password!";
    }
});
   
//användt find för att söka i object arrow:en