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
let newMember;

//kolla om nån är inloggad
if (localStorage.getItem("userIsLoggedIn")) { 
    printMemberPage();
} else {
    printHomePage();
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
    localStorage.setItem("users", JSON.stringify(users)); //spar object arrow till ls
}  

logInBtn.addEventListener("click", () =>  {
    //If user = true, spara i ls     
    
    if (checkLogIn()) { 
        let users = JSON.parse(localStorage.getItem("users")); //hämta o gör till sträng 
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
        memberId = member.userId - 1; 
        return true;
    }          
}

//vy för in-loggad
function printMemberPage () { 
    let userName = JSON.parse(localStorage.getItem("userName"));
    showUserMessage.innerText = "Voff and welcome" + " " + userName  + " " + "to your member page! ";
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
    // log out knapp o radera inlogg ur LS
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
//vy för ut-loggad
function printHomePage () { 
    showUserMessage.innerHTML = "Hello! <br> If you are a member you know what to do, if not please sign up.";  
    logInBtn.style.display = "block";
    inputPassWord.style.display ="block";
    inputUserName.style.display ="block";
    labelPassWord.style.display ="block";
    labelUserName.style.display ="block";
    newUserBtn.style.display = "block";
}
 //vy för felmeddelande
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
//vy för att skapa ny anvndare
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
           
    let saveNewUserButton = document.createElement("button");
    saveNewUserButton.innerHTML = "Save"
    //skapa ny användare spars i ls   
    saveNewUserButton.addEventListener("click", () => { 
        //hämta
        let users = JSON.parse(localStorage.getItem("users")); 
        let validNewInput = newUserNameInput =! users.userName
        if (validNewInput) {
            //ändra
            let newMember = {    
              userId: users.length + 1,
              userName: newUserNameInput.value,
              passWord: newPassWordInput.value,
            }
            //push o spara
            users.push(newMember); 
            localStorage.setItem("users", JSON.stringify(users)); 
            {alert("Your username and password have been saved, please log in")};
            printHomePage(); 

        } else {
           {alert("Ops something went wrong")}; 
           printHomePage(); 
        }
    });
    showUserMessage.appendChild(saveNewUserButton);

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
});