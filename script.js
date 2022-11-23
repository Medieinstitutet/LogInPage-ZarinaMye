const findUserName = document.getElementById("UserName");
const findPassWord = document.getElementById("PassWord");
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

// ta reda på o någon inloggad? från ls (if) alltid 

// true = visa välkomstsida för inloggad
// false = visa inloggningsf.


// 

const para = document.createElement("p");
para.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";
document.body.appendChild(para);

logInBtn.addEventListener("click", () => {

    let user = users.find(user => user.userName === findUserName.value && user.passWord === findPassWord.value );
    console.log("user", user);
 
    if (user) {
        printUserMessage.innerHTML = "Welcome" + " " + user.userName + " "+ "to your member page!";
       
        let btn = document.createElement("button");
        btn.innerHTML = "Log out";
        document.body.appendChild(btn);

        /* document.getElementById("logInBtn").onclick = function() {
        document.getElementById("logInBtn").style.display = "none"; */

    } else
    {
        printUserMessage.innerHTML = "Ivalid user- and or password!";
    }
});
// find för att leta i object arrow
   
/* //logInBtn.addEventListener("click", () => {

    if ( inputfält tomt){
        "Hello! <br> If you are a member you know what to do, if not...
        log in knapp o input formulär finns
    }
    else if (user login true ) {
        "Welcome" + " " + user.userName + " "+ "to your...
        log out knapp finns
        log in knapp och formulär borta
    }
    else (user log in false) {
        "Ivalid user- and or password!";
        log in knapp o input formulär finns
    }  */

