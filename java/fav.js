// let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProducts = document.querySelector(".products")

let noproduct = document.querySelector(".no-product")

// if(ProductsInCart){
//     let item = JSON.parse(ProductsInCart) ;
//     drawCartProducts(item);
// }


function drawFavCartProducts (productsx = []){


    // if(JSON.parse(localStorage.getItem("ProductsInCart")).length===0)
    // noproduct.innerHTML="no product"

    
    let products =JSON.parse(localStorage.getItem("ProductsFav")) || productsx

    let y = products.map((item) => {
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
                <a href="#"  >Remove Fav</a>
                <a href="#"><i class="fas fa-heart"></i></a>
            </div>
        </div>
        `
    })
    allProducts.innerHTML = y.join("");
}
drawFavCartProducts()


// function removeItemFromCart(id){
//     let ProductsInCart= localStorage.getItem("ProductsInCart")
//     if(ProductsInCart){
//     let items= JSON.parse(ProductsInCart);

//     let filtereditems=  items.filter((item)=>item.id !==id)
    
//     localStorage.setItem("ProductsInCart",JSON.stringify(filtereditems))
//     drawCartProducts(filtereditems)

//     }

// }