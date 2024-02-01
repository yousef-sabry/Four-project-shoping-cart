
let products = [
    {
        id:1,
        title: "Nike Shoes-1",
        price:"30$",
        imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
    },
    {
        id:2,
        title: "Nike Shoes-2",
        price: "50$",
        imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
    },
    {
        id:3,
        title: "Nike Shoes-3",
        price: "100$",
        imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
    },
    {
        id:4,
        title: "Nike Shoes-4",
        price: "200$",
        imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
    },
    {
    id:5,
        title: "Nike Shoes-5",
        price: "250$",
        imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
    },
    {
    id:6,
    title: "Nike Shoes-6",
    price: "60$",
    imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
        },
        {
    id:7,
    title: "Nike Shoes-7",
    price: "90$",
    imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
    },
    {
     id:8,
     title: "Nike Shoes-8",
     price: "80$",
    imageUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
    },         
]

let allProducts = document.querySelector(".products")

function drawItems (){
    let y = products.map((item) => {
        console.log("eee",item)
        return `
        <div class="card col-lg-4">
            <div class="imgBx">
                <img src="${item.imageUrl}">
            </div>
            <div class="contentBx">
                <h2>${item.title}</h2>
                <div class="size">
                    <h3>Product :</h3>
                    <h3>Nike shoes</h3>
                </div>
                <div class="color">
                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="color">
                  <h3>price :</h3>
                <h3>${item.price}</h3>
              </div>
              <div class="color">
                <h3>Category :</h3>
                <h3>Sports-Shoes</h3>
            </div>
                <a href="#" onClick="addToCart(${item.id})" class="hover1" >Add Cart</a>
                <a href="#" onClick="addToFav(${item.id})" class="hover1" ><i class="fas fa-heart"></i></a>
            </div>
        </div>
        `
       
    })
    allProducts.innerHTML = y.join("");
}
drawItems ()
//////////////
let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")



let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];


if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

function addToCart(id){

    if(localStorage.getItem=("username")){
        let choosenItem = products.find((item) => item.id === id );
        cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`

        addedItem = [...addedItem , choosenItem]
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        
        let cartProductsLength = document.querySelectorAll(".carts_products div p")
        badge.style.display ="block";
        badge.innerHTML = cartProductsLength.length;

    }else {
        window.location="login.html"
    }

}




/////////////////////////////////

let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block"
         }
     } 
}
////////////////////////////////

let input = document.getElementById("search")
input.addEventListener("keyup",function(e){
    if(e.keyCode===13){
        search(e.target.value, JSON.parse(localStorage.getItem("products")))
    }

})


////////////////////


function addToFav(id){
    let favitem = localStorage.getItem("ProductsFav") ? JSON.parse(localStorage.getItem("ProductsFav")) : [];
    if(localStorage.getItem=("username")){
    let choosenItem1 = products.find((item) => item.id === id );

    choosenItem1.liked=true;

    favitem = [...favitem , choosenItem1]

    
    localStorage.setItem("ProductsFav" , JSON.stringify(favitem) )
        products.map(item => {
            if(item.id===choosenItem1.id){
                item.liked=true;
            }
        } )
        localStorage.setItem("product",JSON.stringify(products))
    drawItems(products );

    }else {
        window.location="login.html"
    }

}





