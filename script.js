const logInBtn = document.getElementById("logInBtn")
const newUserBtn = document.getElementById("newUserBtn")
const inputPassWord = document.getElementById("inputPassWord")
const inputUserName = document.getElementById("inputUserName")
const showUserMessage = document.getElementById("showUserMessage")
const labelPassWord = document.getElementById("labelPassWord")
const labelUserName = document.getElementById("labelUserName")

let users = [
    {userName: "janne", passWord: "test"},
    {userName: "zarina", passWord: "lösen1"},
    {userName: "moLLan", passWord: "lösen.2"},
    {userName: "Offie", passWord: "123Gurka"},
]  

if (localStorage.getItem("userName")) { 
    printMemberPage();
} else {
    printHomePage();
}

logInBtn.addEventListener("click", () =>  {
    //If user = true, spara i ls     
    let user = users.find(user => user.userName === inputUserName.value && user.passWord === inputPassWord.value );
    console.log("user", user); 

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
    let userName = localStorage.getItem("userName");
    showUserMessage.innerText = "Welcome" + " " + userName + " " + "to your member page! ";
    logInBtn.style.display = "none";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    newUserBtn.style.display = "none";

    // log out knapp = raderar värdet ur LS
    let logOutButton = document.createElement("button");
    logOutButton.innerText = "Log out"
    logOutButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        printHomePage();
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
    showUserMessage.innerHTML = "Sorry, ivalid user- and or password! ";
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
    showUserMessage.innerHTML = "Please create a username and password. ";
    inputPassWord.style.display ="none";
    inputUserName.style.display ="none";
    labelPassWord.style.display ="none";
    labelUserName.style.display ="none";
    logInBtn.style.display = "none";
    newUserBtn.style.display = "none";
    //skapa och skriv ut nya input formulär
    let newlabelUserNameLabel = document.createElement("label"); //Labels visas inte?
    showUserMessage.appendChild(newlabelUserNameLabel);
    let newinputPassWordInput = document.createElement("input");
    showUserMessage.appendChild(newinputPassWordInput);
    let newlabepassWordLabel = document.createElement("label"); //Labels visas inte?
    showUserMessage.appendChild(newlabepassWordLabel);
    let newlabelUserNameInput = document.createElement("input");
    showUserMessage.appendChild(newlabelUserNameInput);
    
    //skapa och skriv ut en spara ny användare- knapp
    let saveNewUserButton = document.createElement("button");
    saveNewUserButton.innerText = "Save"
    saveNewUserButton.addEventListener("click", () => {
        //localStorage.removeItem("userName"); ska sparas till ls
        //printMemberPage(); //homepage..
    });
    showUserMessage.appendChild(saveNewUserButton);

    let cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel"
    cancelButton.addEventListener("click", () => {
        printHomePage(); 
    });
    showUserMessage.appendChild(cancelButton);
});
