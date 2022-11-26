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

if (localStorage.getItem("loggedIn")) {
    let userName = JSON.parse(localStorage.getItem("loggedIn"));
    printMemberPage();
} else {
    printHomePage(); // funkar
}

if (localStorage.getItem("users")) { 
} else { 
    let users = [
        {userId:1, userName: "janne", passWord: "test"},
        {userId:2, userName: "Scooby-Doo", passWord: "snacks"},
        {userId:3, userName: "Offie", passWord: "cucumber4Ever"},
        {userId:4, userName: "MollanThePinscher", passWord: "1234"},
        {userId:5, userName: "Pluto", passWord: "H8piff&puff"},
        {userId:6, userName: "Lajka", passWord: "Sputnik2"},
    ] 
    localStorage.setItem("users", JSON.stringify(users));
}  

logInBtn.addEventListener("click", () =>  {
    //If user = true, spara i ls     
    //let user = users.find(user => user.userName === inputUserName.value && user.passWord === inputPassWord.value );
    //console.log("user", user);   
    
    if (checkLogIn()) {
        //let userName = inputUserName.value; 
        //localStorage.setItem("userName", userName);
        const users = JSON.parse(localStorage.getItem("users"));
        const loggedIn = users[memberId];
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn)); 
        printMemberPage();
    }  
    else  {
        printWrongPage ();
    }  
});

checkLogIn = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const member = users.find(userName => {return userName.user === inputUserName.value});
    if (member.passWord === inputPassWord.value) {
        memberId = member.userId - 1;
        //console.log(userid);
        return true;
    }     ///själva inloggsverifieringen        
}


////////////////////////
function printMemberPage () { 
    //hämta namn från ls o skriv ut homepage om inloggad finns
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
        //localStorage.removeItem("userName");
        localStorage.removeItem("loggedIn");
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
    
    //skapa och skriv ut en spara ny användare- knapp
    let saveNewUserButton = document.createElement("button");
    saveNewUserButton.innerHTML = "Save"
    saveNewUserButton.addEventListener("click", () => {
      //KVAR!! att spara ny användare
      //localStorage.setItem("userName", JSON.stringify(getuserName)); sparas till ls
      //getuserName.push("newUserName")
      //printMemberPage(); 
       let users = JSON.parse(localStorage.getItem("users"));
       const alreadyMember = users.some(userName => userName.user === newUserNameInput.value);
       if (alreadyMember == false) {
            ///skapa ny användare 
            let newMember = {
            userId: users.length + 1,
            userName: newUserNameInput.value,
            passWord: newPassWordInput.value,
            };
            //pusha 
            users.push(newMember);
            localStorage.setItem("users", JSON.stringify(users));
            printMemberPage(); 
        }
    });
    showUserMessage.appendChild(saveNewUserButton);

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        //localStorage.removeItem("userName"); tas ur ls
        localStorage.removeItem("loggedIn"); 
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
});