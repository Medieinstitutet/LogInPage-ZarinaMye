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

///////////////////////////////////////////////////////////////////////



    //1.
let saveNameBtn = document.getElementById("saveNameBtn")
let inputName = document.getElementById("inputName")
let showName = document.getElementById("showName")

//5.Kolla om det finns ett sparat inlogg, 
//om true kalla på printname om false kalla på printUnknown
if (localStorage.getItem("userName")) {
    printMemberPage();
} else {
    printHomePage();
}


saveNameBtn.addEventListener("click", () =>  {
    //2.fånga inskrivet namn o spara i ls =(ny användare )
    //(måste också gå att kolla om nått finns sparat i ls, typ mina användare)
    let userName = inputName.value;
    localStorage.setItem("userName", userName);
    printMemberPage();

});

function printMemberPage () { 
    //(render fumktion dvs skriver över gammalt) 
    //3.hämta namn från ls o skriv ut (=välkomst sidan om inlogg finns)
    let userName = localStorage.getItem("userName");
    showName.innerText = "Welcome" + " " + userName + " " + "to your member page!";

    //6.skapa och skriv ut en glömknapp(log out)
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        printHomePage();
    });
    showName.appendChild(logOutButton);


    //(ingen! inlogg o inputfält!)

}

function printHomePage () {
    //4.skriv ut att det inte finns ett namn sparat (sida med inlogg 2x inputfält och start)
    showName.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";;  //=startsidan
    // (inloggbtn+inputfält x2+ sign inbtn)
    /* let logInButton = document.createElement("button");
    logInButton.innerText = "Log in"
    logInButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        printName();
    });
    showName.appendChild(logInButton); */

}

//function om felaktigt lösen () print....