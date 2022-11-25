let header = document.getElementById("header");
let cart = document.getElementById("cart");
let container = document.getElementById("container");

let products = [
    {prodId: 1, name: "Bike", price: 1000, img: "bike.jpg"},
    {prodId: 2, name: "Car", price: 2000, img: "car.jpg"},
    {prodId: 3, name: "Boat", price: 3000, img: "boat.jpg"},
    {prodId: 4, name: "Plane", price: 4000, img: "plane.jpg"},
    {prodId: 5, name: "Train", price: 5000, img: "train.jpg"}
];

let userCart = [];

function printCart() {
    if(userCart.length === 0) {
        cart.innerHTML = "Inget i kundvagnen";
    } else { //z Gör detta 48 min in i film 1.1 från 14/11
       
        let cartSum = 0;

        userCart.map(cartProd => { //z loopar igen kundvagn 54min film 14/11 1.1
           // console.log("produkt i vagnen", cartProd);
            let getProd = products.find(product => product.prodId == cartProd);
           // console.log("pris för produkt", getProd.price);
            cartSum += getProd.price
        })
       
        cart.innerHTML = cartSum + " kr";

        let showCartBtn = document.createElement("button");
        showCartBtn.innerText = "Visa kundvagn";
        showCartBtn.addEventListener("click", () => {
            console.log("Visa vår kundvagn");
            showCart();
        });
        cart.appendChild(showCartBtn);

    }
}

function printProducts() {
    container.innerHTML = "";

    let productList = document.createElement("div");

    products.map(product => {
        productList.insertAdjacentHTML("afterbegin", "<div class='product' id="+product.prodId+">" + product.name + "</div>")
    })

    // EVENT LISTENER TILL VARJE PRODUKT

    productList.addEventListener("click", (e) => {
        console.log("click på produkt", e.target.id);
        addToCart(e.target.id)
    })

    container.appendChild(productList);

}

function addToCart(prod) { //z pushar de klickde produkterna till usercart
    userCart.push(prod) //z det i () som pushas 
    console.log("kundvagnen innehåller", userCart);
    printCart();
}

function showCart() {
    container.innerHTML = "";

    userCart.map(prod => {
        let showProd = products.find(product => product.prodId == prod);
        console.log("produkt i kundvagn", showProd);
        container.insertAdjacentHTML("afterbegin", "<div class='product'>" + showProd.name + "</div>");
    })

    let showProducts = document.createElement("button");
    showProducts.innerHTML = "Visa produkterna";
    showProducts.addEventListener("click", () => {
        printProducts();
    })
    container.appendChild(showProducts);

}


// INIT    //zdet första som ropas ut till sidan 
printCart();
printProducts();

