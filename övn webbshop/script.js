const cart = document.getElementById("cart"); // vad göra om cart till??
const content = document.getElementById("content"); // vad göra om content till??
//const showUserMessage = document.getElementById("showUserMessage");

let users = [ //products
    {userId:1, userName: "janne", passWord: "test"},
    {userId:2, userName: "zarina", passWord: "password"},
    {userId:3, userName: "Offie", passWord: "cucumber4Ever"},
    {userId:4, userName: "MollanThePinscher", passWord: "passWord123"},
    {userId:5, userName: "Pluto", passWord: "H8.cats"},
    {userId:6, userName: "Lajka", passWord: "Sputnik2"},
]; 

let newUser = [];//usercart, lägga till fler


//cart = alla användare?

//kolla om längden är 0 då ingen inloggad 
function printnewUser (); { 
    if(newUser===0) {
        cart.innerHTML = "Ingen inloggad"
    } else {
        let cartSum = 0;
        //lopa igenom alla användare/cart och  räkna ihop pris/kolla vem som är inloggad?
    }
}

function printUsers (); { // products
    content.innerHTML = ""; //tömmer sidan

    let userList = document.createElement("div")  //products list  !!!!user ej users, skapar userList här
    users.map(user => {
        userList.insertAdjacentHTML("afterbegin", "<div class='user' id="+user.Id+">" + user.name + "</div>")// userName från users
             //skapa eventlistern till varje product/user sen.....
    });

    content.appendChild(userList);
} 

printUsers ();
