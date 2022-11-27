const logInBtn = document.getElementById("logInBtn");
const newUserBtn = document.getElementById("newUserBtn");
const inputPassWord = document.getElementById("inputPassWord");
const inputUserName = document.getElementById("inputUserName");
const labelPassWord = document.getElementById("labelPassWord");
const labelUserName = document.getElementById("labelUserName");
const loginContanier = document.getElementById("loginContanier");
const showUserMessage = document.getElementById("showUserMessage");
const changeDogPic = document.getElementById("changeDogPic");

let users = [
    {userId:1, userName: "janne", passWord: "test"},
    {userId:2, userName: "Scooby-Doo", passWord: "snacks"},
    {userId:3, userName: "Offie", passWord: "cucumber4Ever"},
    {userId:4, userName: "MollanThePinscher", passWord: "1234"},
    {userId:5, userName: "Pluto", passWord: "H8piff&puff"},
    {userId:6, userName: "Lajka", passWord: "Sputnik2"},
]

//kolla om nån är inloggad
if (localStorage.getItem("userName")) { 
    printMemberPage();
} else {
    printHomePage();
}

logInBtn.addEventListener("click", () =>  {
       
    let user = users.find(user => user.userName === inputUserName.value && user.passWord === inputPassWord.value );
    console.log("user", user);               

    if (user) {
        let userName = inputUserName.value; 
        localStorage.setItem("userName", userName);
        printMemberPage();
    }
    else  {
        printWrongPage ();
    }  
});

//vy in-loggad
function printMemberPage () { 
   
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
    // log out knapp o radera inlogg ur ls
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

//vy ut-loggad
function printHomePage () {
    showUserMessage.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";  
    logInBtn.style.display = "block";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
    newUserBtn.style.display = "block";
}

//vy felmeddelande
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
/////////////////////////////////////////////////////////////////////////////////////
//Koppla scriptfil: script.vg.js istället för denna fil till index.html
//där har jag försökt lösa att lägga till ny användare m ls som databas
// vy skap ny användare
newUserBtn.addEventListener("click", () =>  {
   
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
     //skapa o spar ny användare
 
    });
    showUserMessage.appendChild(saveNewUserButton);

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
});