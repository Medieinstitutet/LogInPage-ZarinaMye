//1.
let logInBtn = document.getElementById("logInBtn")
let newUserBtn = document.getElementById("newUserBtn")
let inputPassWord = document.getElementById("inputPassWord")
let inputUserName = document.getElementById("inputUserName")
let showUserMessage = document.getElementById("showUserMessage")
let labelPassWord = document.getElementById("labelPassWord")
let labelUserName = document.getElementById("labelUserName")

let users = [
    {userName: "janne", passWord: "test"},
    {userName: "zarina", passWord: "lösen1"},
    {userName: "mollan", passWord: "lösen2"},
]  
//object arrow -HUR få med dom? Behöver de ha id? så kan skilja åt...


//5.Kolla om det finns ett sparat inlogg, från ls (if) true = visa inlogg, false = visa homepage.)
//dvs om true kalla på printmemberpage om false kalla på printHomepage
if (localStorage.getItem("userName")) { //för att det tas här..vill eg bara kolla om nån är inloggad..
    printMemberPage();
} else {
    printHomePage();
}

logInBtn.addEventListener("click", () =>  {
    //2.fånga inskrivet namn o spara i ls =
    //let passWord = inputPassWord.value; //KVAR!? koppla ihop password också..FUNKAR inte!!
    //localStorage.setItem("passWord", passWord);  
    //skriver namnet på sidan men ..
    let userName = inputUserName.value; 
    localStorage.setItem("userName", userName);
    
    let user = users.find(user => user.userName === findUserName.value && user.passWord === findPassWord.value );
    console.log("user", user); 

    /* if (user(finns användaren)) {
        printMemberPage();
    } else  () {
        printWrongPage ();
    }  */
});

function printMemberPage () { 
    //(render-funktion dvs skriver över gammalt) 
    //3.hämta namn från ls o skriv ut homepage om inloggad finns
    let userName = localStorage.getItem("userName");
    showUserMessage.innerText = "Welcome" + " " + userName + " " + "to your member page!";

    //7. Ta  bort log in knapp och inputfält
    logInBtn.style.display = "none";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    newUserBtn.style.display = "none";

    //6.skapa och skriv ut en log out knapp (raderar värdet ur LS)
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
    showUserMessage.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";  //=startsidan
    // visa sida med inlogg + 2st inputfält 
    logInBtn.style.display = "block";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
    newUserBtn.style.display = "block";
}

function printWrongPage () {
    //KVAR!? function om felaktigt lösen () print....
    showUserMessage.innerHTML = "Sorry, ivalid user- and or password!";
    logInBtn.style.display = "block";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
    newUserBtn.style.display = "block";
}

newUserBtn.addEventListener("click", () =>  {
    //KVAR!? function om sign up btn () lägg till i ls och kör ()print memberpage
 //Tips kolla på övn webbshop, + behandla ls som databas
    showUserMessage.innerHTML = "Please create a username and password.";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
    logInBtn.style.display = "none";
    newUserBtn.style.display = "none";
    //skapa och skriv ut en spara ny användare- knapp
    let saveNewUserButton = document.createElement("button");
    saveNewUserButton.innerText = "Save"
    saveNewUserButton.addEventListener("click", () => {
        //localStorage.removeItem("userName"); ska sparas till ls
        printMemberPage(); //homepage..
    });
    showUserMessage.appendChild(saveNewUserButton);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 


// find för att leta i object arrow (mina användare)
/* logInBtn.addEventListener("click", () => {

    let user = users.find(user => user.userName === findUserName.value && user.passWord === findPassWord.value );
    console.log("user", user);
 
    if (user) {
        printUserMessage.innertext = "Welcome" + " " + user.userName + " "+ "to your member page!";
    } else {
    printUserMessage.innerHTML = "Ivalid user- and or password!";
   }
}); */


///////////////////////////////////////////////////////////////////////


 