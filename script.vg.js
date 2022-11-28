const logInBtn = document.getElementById("logInBtn")
const newUserBtn = document.getElementById("newUserBtn")
const inputPassWord = document.getElementById("inputPassWord")
const inputUserName = document.getElementById("inputUserName")
const labelPassWord = document.getElementById("labelPassWord")
const labelUserName = document.getElementById("labelUserName")
const loginContanier = document.getElementById("loginContanier")
const showUserMessage = document.getElementById("showUserMessage")
const changeDogPic = document.getElementById("changeDogPic")
const newUserNameInput = document.getElementById("newUserNameInput")
const newPassWordInput = document.getElementById("newPassWordInput")
const newUserInput = document.getElementById("newUserInput") 
const newUserBtns = document.getElementById("newUserBtns") 
const newUserLabels = document.getElementById("newUserLabels")
const newUserPassWordLabel = document.getElementById("newUserPassWordLabel")
const newUserNameLabel = document.getElementById("newUserNameLabel")
const showNewUserMessage = document.getElementById("showNewUserMessage")

let newMember;

//kolla om nån är inloggad
if (localStorage.getItem("userIsLoggedIn")) { 
    printMemberPage();
} else {
    printHomePage();
}

let users = [
    {userId:1, userName: "janne", passWord: "test",},
    {userId:2, userName: "Scooby-Doo", passWord: "snacks",},
    {userId:3, userName: "Offie", passWord: "cucumber4Ever",},
    {userId:4, userName: "MollanThePinscher", passWord: "1234",},
    {userId:5, userName: "Pluto", passWord: "H8piff&puff",},
    {userId:6, userName: "Lajka", passWord: "Sputnik2",},
];
localStorage.setItem("users", JSON.stringify(users)); //spar object arrow till ls

logInBtn.addEventListener("click", () =>  {   

    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find(user => user.userName === inputUserName.value || newUserNameInput.value);// && user.passWord === inputPassWord.value || newPassWordInput.value);
     //kolla password också..!!då göra input password till global variabel också..
    
    if (user) { 
        
        let userIsLoggedIn = inputUserName.value; // || newUserNameInput.value;
        localStorage.setItem("userIsLoggedIn", JSON.stringify(userIsLoggedIn)); 
        printMemberPage(); 
    }
    else  {
        printWrongPage (); 
    }  
});

//vy för in-loggad
function printMemberPage () { 
    //KVAR! att lösa: koppla rätt namn-(userName) vid inlogg

    //let userName = document.getElementById(users[userId].userName);
    //let users = JSON.parse(localStorage.getItem("users")); 
    //let userName = users.memberId.userName.value;
    //let userName = localStorage.getItem("userName");
    
    let users = JSON.parse(localStorage.getItem("users"));
    let userName = users.find(user => user.userName == inputUserName.value || newUserNameInput.value);
    //let name = JSON.parse(localStorage.getItem("userName"));
    //let name = users.userName.value
    //let name = users[memberId];
    //let name = users.find(userId = inputUserName.value); 
    showUserMessage.innerText = "Voff and welcome" + " " + userName + " " + "to your member page! ";
    
    logInBtn.style.display = "none";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    newUserBtn.style.display = "none";
    newUserNameInput.style.display = "none";
    newUserBtns.style.display = "none";
    newPassWordInput.style.display = "none";
    newUserNameLabel.style.display = "none";
    newUserPassWordLabel.style.display = "none";
    showNewUserMessage.style.display = "none";

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
    newUserNameInput.style.display = "none";
    newUserBtns.style.display = "none";
    newUserNameInput.style.display = "none";
    newPassWordInput.style.display = "none";
    newUserNameLabel.style.display = "none";
    newUserPassWordLabel.style.display = "none";
    showNewUserMessage.style.display = "none";
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
    newUserNameInput.style.display = "none";
    newUserBtns.style.display = "none";
    newUserNameInput.style.display = "none";
    newPassWordInput.style.display = "none";
    newUserNameLabel.style.display = "none";
    newUserPassWordLabel.style.display = "none";
    showNewUserMessage.style.display = "none";

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
}

//vy för att skapa ny användare
newUserBtn.addEventListener("click", () =>  { 

    showUserMessage.innerHTML = "Sign up! ";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    logInBtn.style.display = "none";
    newUserBtn.style.display = "none";
    newUserNameInput.style.display = "block";
    newPassWordInput.style.display = "block";
    newUserNameLabel.style.display = "block";
    newUserPassWordLabel.style.display = "block";

    let saveNewUserButton = document.createElement("button");
    saveNewUserButton.innerHTML = "Save"
    //skapa ny användare spars i ls   
    saveNewUserButton.addEventListener("click", () => { 
        //hämta
        let users = JSON.parse(localStorage.getItem("users")); 
        let validNewInput = newUserNameInput //=! users.userName
        if (validNewInput) {
            
            //ändra 
            let newMember = {    
              userId: users.length ++,
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