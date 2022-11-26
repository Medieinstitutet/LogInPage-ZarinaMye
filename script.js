const logInBtn = document.getElementById("logInBtn")
const newUserBtn = document.getElementById("newUserBtn")
const inputPassWord = document.getElementById("inputPassWord")
const inputUserName = document.getElementById("inputUserName")
const labelPassWord = document.getElementById("labelPassWord")
const labelUserName = document.getElementById("labelUserName")
const loginContanier = document.getElementById("loginContanier")
const showUserMessage = document.getElementById("showUserMessage")
const changeDogPic = document.getElementById("changeDogPic");

let users = [
    {userName: "janne", passWord: "test"},
    {userName: "Scooby-Doo", passWord: "snacks"},
    {userName: "Offie", passWord: "cucumber4Ever"},
    {userName: "MollanThePinscher", passWord: "1234"},
    {userName: "Pluto", passWord: "H8piff&puff"},
    {userName: "Lajka", passWord: "Sputnik2"},
]  // id om sparas i ls för att veta vem o kunna lägga till ny
   //localStorage.setItem("nyckel:(userName/id)", JSON.stringify(nyckel)); 

if (localStorage.getItem("userName")) { 
    printMemberPage();
} else {
    printHomePage();
}

logInBtn.addEventListener("click", () =>  {
    //If user = true, spara i ls     
    let user = users.find(user => user.userName === inputUserName.value && user.passWord === inputPassWord.value );
    console.log("user", user);                ///user.userId om id

    if (user) {
        let userName = inputUserName.value; 
        localStorage.setItem("userName", userName);
        printMemberPage();
    } else  {
        printWrongPage ();
    }  
});

function printMemberPage () { 
    //hämta namn från ls o skriv ut homepage om inloggad finns
    //(loginContanier.innerHTML = ""; för att tömma sidan)
    let userName = localStorage.getItem("userName");
    showUserMessage.innerText = "Voff and welcome" + " " + userName + " " + "to your member page! ";
    logInBtn.style.display = "none";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    newUserBtn.style.display = "none";
    let image = document.getElementById("changeDogPic");
    if (image.src.match("dogMember")) {
        image.src = "./img/dogHome.png";
    }
    else {
        image.src = "./img/dogMember.png";
    }
    // log out knapp = raderar värdet ur LS
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        printHomePage();
        let image = document.getElementById("changeDogPic");
        if (image.src.match("dogMember")) {
          image.src = "./img/dogHome.png";
        }
        else {
          image.src = "./img/dogMember.png";
        }
    });
    showUserMessage.appendChild(logOutButton);
}

function printHomePage () {
    showUserMessage.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";  
    logInBtn.style.display = "block";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
    newUserBtn.style.display = "block";
}

function printWrongPage () {
    showUserMessage.innerHTML = "Sorry, invalid username and/or password! ";
    logInBtn.style.display = "block";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
    newUserBtn.style.display = "none";
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
}

newUserBtn.addEventListener("click", () =>  {
    //KVAR!!? function newUserBtn () lägg till i ls och kör ()print memberpage
    //Tips kolla på övn webbshop + behandla ls som databas
    //object arrow stringify till LS, parsel tillbaka + pusha upp ny användare till object arrow
    showUserMessage.innerHTML = "Please create a ";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    logInBtn.style.display = "none";
    newUserBtn.style.display = "none";
    //skapa och skriv ut nya input formulär
    let newlabelUserNameLabel = document.createElement("label"); 
    newlabelUserNameLabel.innerHTML = "username: "
    showUserMessage.appendChild(newlabelUserNameLabel);
    let newinputPassWordInput = document.createElement("input");
    showUserMessage.appendChild(newinputPassWordInput);
    let newlabepassWordLabel = document.createElement("label"); 
    newlabepassWordLabel.innerHTML = " and pasword: "
    showUserMessage.appendChild(newlabepassWordLabel);
    let newlabelUserNameInput = document.createElement("input");
    showUserMessage.appendChild(newlabelUserNameInput);
    
    //skapa och skriv ut en spara ny användare- knapp
    let saveNewUserButton = document.createElement("button");
    saveNewUserButton.innerHTML = "Save"
    saveNewUserButton.addEventListener("click", () => {
      //KVAR!! att spara ny användare
      //localStorage.setItem("userName", JSON.stringify(getuserName)); sparas till ls
      //getuserName.push("newUserName")
      //printMemberPage(); 
    });
    showUserMessage.appendChild(saveNewUserButton);

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        //let getuserName = JSON.parse(localStorage.getItem("userName"));
        //localStorage.removeItem("userName"); tas ur ls
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
});