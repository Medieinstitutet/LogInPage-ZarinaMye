const logInBtn = document.getElementById("logInBtn")
const newUserBtn = document.getElementById("newUserBtn")
const inputPassWord = document.getElementById("inputPassWord")
const inputUserName = document.getElementById("inputUserName")
const labelPassWord = document.getElementById("labelPassWord")
const labelUserName = document.getElementById("labelUserName")
const loginContanier = document.getElementById("loginContanier")
const showUserMessage = document.getElementById("showUserMessage")
const changeDogPic = document.getElementById("changeDogPic");

let memberId;
let member;
let alreadyMember;
let newMember;

if (localStorage.getItem("userIsLoggedIn")) {
    //let name = JSON.parse(localStorage.getItem("userIsLoggedIn")); 
    printMemberPage();
} else {
    printHomePage(); // funkar
}

if (localStorage.getItem("users")) { 
} else { 
    let users = [
        {userId:1, userName: "janne", passWord: "test",},
        {userId:2, userName: "Scooby-Doo", passWord: "snacks",},
        {userId:3, userName: "Offie", passWord: "cucumber4Ever",},
        {userId:4, userName: "MollanThePinscher", passWord: "1234",},
        {userId:5, userName: "Pluto", passWord: "H8piff&puff",},
        {userId:6, userName: "Lajka", passWord: "Sputnik2",},
    ];
    localStorage.setItem("users", JSON.stringify(users));
}  

logInBtn.addEventListener("click", () =>  {
    //If user = true, spara i ls     
    
    if (checkLogIn()) { 
        let users = JSON.parse(localStorage.getItem("users"));
        let userIsLoggedIn = users[memberId];
        localStorage.setItem("userIsLoggedIn", JSON.stringify(userIsLoggedIn)); 
        printMemberPage();
    }  
    else  {
        printWrongPage ();
    }  
});

checkLogIn = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let member = users.find(userName => {return userName.userName === inputUserName.value});
    if (member.passWord === inputPassWord.value) {  
        memberId = member.userId --;
        return true;
    }          
}
/////////////////Kvar att lösa, kopplar inte namnen
function printMemberPage () { 
    //hämta namn från ls o skriv ut homepage om inloggad finns
    //let users = localStorage.getItem("users");
    //let name = document.getElementById(users[userId].userName);
    //let userName = JSON.parse(localStorage.getItem("userName"));
    let name = localStorage.getItem("userName");
    showUserMessage.innerText = "Voff and welcome" + " " + name + " " + "to your member page! ";
    logInBtn.style.display = "none";           //KVAR!! name koppla till userId.userName
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
    // log out knapp o radera värdet ur LS
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userIsLoggedIn");
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
    showUserMessage.innerHTML = "Please create a ";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    logInBtn.style.display = "none";
    newUserBtn.style.display = "none";

    //skapa och skriv ut nya input formulär
    let newUserNameLabel = document.createElement("label"); 
    newUserNameLabel.innerHTML = "username: "
    showUserMessage.appendChild(newUserNameLabel);
    let newUserNameInput = document.createElement("input");
    showUserMessage.appendChild(newUserNameInput);
    let newPassWordLabel = document.createElement("label"); 
    newPassWordLabel.innerHTML = " and pasword: "
    showUserMessage.appendChild(newPassWordLabel);
    let newPassWordInput = document.createElement("input");
    showUserMessage.appendChild(newPassWordInput);
     ///////////////////KVAR!! få ny användare att funka 
    //skapa och spara ny användare- knapp 
    let saveNewUserButton = document.createElement("button");
    saveNewUserButton.innerHTML = "Save"
    saveNewUserButton.addEventListener("click", () => {
        //skapa ny 
        let users = JSON.parse(localStorage.getItem("users")); 
        let alreadyMember = users.some(userName => userName.userName === newUserNameInput.value);
        if (alreadyMember == false) {  

            let newMember = {    //något här i if som är fel men vad?
              userId: users.length ++,
              userName: newUserNameInput.value,
              passWord: newPassWordInput.value,
            }
            //pusha 
            users.push(newMember);
            localStorage.setItem("users", JSON.stringify(users));
            ///kanske kontrollera nytt lösen, nu kopplar knapp direkt...
            {alert("Your username and password have been saved, please log in")};
            printHomePage(); 
            
        } else {
           {alert("ops something went wrong")}; //funkar
           printHomePage(); 
        }
    });
    showUserMessage.appendChild(saveNewUserButton);

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        //localStorage.removeItem("userName"); tas ur ls
        //localStorage.removeItem("userIsLoggedIn"); 
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
});

/* createNewUser = () => {
    //skapa ny 
    let users = JSON.parse(localStorage.getItem("users")); 
    let alreadyMember = users.some(userName => userName.userName === newUserNameInput.value);
    if (alreadyMember == false) {  //funkar

        let newMember = {
          userId: users.length ++,
          userName: newUserNameInput.value,
          passWord: newPassWordInput.value,
        }
        //pusha 
        users.push(newMember);
        localStorage.setItem("users", JSON.stringify(users));
        ///kanske kontrollera lösen, nu kopplar knapp direkt...
        {alert("Your username and password have been saved, please log in")};
        printHomePage(); 
        
    } else {
       {alert("ops something went wrong")}; 
    }
}  */