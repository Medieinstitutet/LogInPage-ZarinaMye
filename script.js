

/* let users = [
    {userName: "janne", passWord: "test"},
    {userName: "zarina", passWord: "lösen1"},
    {userName: "mollan", passWord: "lösen2"},
]   */
//object arrow
////////////////////////////////////////////////////////////////////////////////////////
// ta reda på o någon inloggad? från ls (if) alltid 

// true = visa välkomstsida för inloggad
// false = visa inloggningsf.

//1.
let logInBtn = document.getElementById("logInBtn")
let inputPassWord = document.getElementById("inputPassWord")
let inputUserName = document.getElementById("inputUserName")
let showUserMessage = document.getElementById("showUserMessage")
let labelPassWord = document.getElementById("labelPassWord")
let labelUserName = document.getElementById("labelUserName")


//5.Kolla om det finns ett sparat inlogg, 
//om true kalla på printmemberpage om false kalla på printHomepage
if (localStorage.getItem("userName")) {
    printMemberPage();
} else {
    printHomePage();
}


logInBtn.addEventListener("click", () =>  {
    //2.fånga inskrivet namn o spara i ls =(ny användare )
    //KVAR!?(måste också gå att kolla om nått finns sparat i ls, typ mina användare)HUR?
    let userName = inputUserName.value; //KVAR!? koppla ihop password också..
    localStorage.setItem("userName", userName);
    printMemberPage();

});

function printMemberPage () { 
    //(render funktion dvs skriver över gammalt) 
    //3.hämta namn från ls o skriv ut homepage om inlogg finns
    let userName = localStorage.getItem("userName");
    showUserMessage.innerText = "Welcome" + " " + userName + " " + "to your member page!";

    //7. Ta  bort log in knapp och inputfält
    logInBtn.style.display = "none";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";

    //6.skapa och skriv ut en log out knapp
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        printHomePage();
    });
    showUserMessage.appendChild(logOutButton);
}

function printHomePage () {
    //4.skriv ut att det inte finns ett namn sparat i ls 
    showUserMessage.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";;  //=startsidan
    // visa sida med inlogg 2x inputfält och start
    logInBtn.style.display = "block";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
}

//KVAR!? function om felaktigt lösen () print....


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 

/* const para = document.createElement("p");
para.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";
document.body.appendChild(para);

logInBtn.addEventListener("click", () => {

    let user = users.find(user => user.userName === findUserName.value && user.passWord === findPassWord.value );
    console.log("user", user);
 
    if (user) {
        printUserMessage.innerHTML = "Welcome" + " " + user.userName + " "+ "to your member page!";
       
        let btn = document.createElement("button");
        btn.innerHTML = "Log out";
   /*      document.body.appendChild(btn);

        /* document.getElementById("logInBtn").onclick = function() {
        document.getElementById("logInBtn").style.display = "none"; */

   // } else
   // {
   //     printUserMessage.innerHTML = "Ivalid user- and or password!";
   // }
//});
// find för att leta i object arrow

///////////////////////////////////////////////////////////////////////


 