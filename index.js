var arr=[
    {  id:1,
         productName: "Regular White T-Shirt",
         category: "Topwear",
         price: "30",
         image: "white-tshirt.jpg",
       },
       {id:2,
         productName: "Beige Short Skirt",
         category: "Bottomwear",
         price: "49",
         image: "short-skirt.jpg",
       },
       { id:3,
         productName: "Sporty SmartWatch",
         category: "Watch",
         price: "99",
         image: "sporty-smartwatch.jpg",
       },
       { 
         id:4,
         productName: "Basic Knitted Top",
         category: "Topwear",
         price: "29",
         image: "knitted-top.jpg",
       },
       {
         id:5,
         productName: "Black Leather Jacket",
         category: "Jacket",
         price: "129",
         image: "black-leather-jacket.jpg",
       },
       {
         id:6,
         productName: "Stylish Pink Trousers",
         category: "Bottomwear",
         price: "89",
         image: "pink-trousers.jpg",
       },
       {
         id:7,
         productName: "Brown Men's Jacket",
         category: "Jacket",
         price: "189",
         image: "brown-jacket.jpg",
       },
       {
         id:8,
         productName: "Comfy Gray Pants",
         category: "Bottomwear",
         price: "49",
         image: "comfy-gray-pants.jpg",
       },
    ]

    
// Search button click
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-card");
    // Loop through all elements
    elements.forEach((element) => {
        const productName = element.querySelector(".product-name").innerText.toUpperCase();
        if (productName.includes(searchInput)) {      
            element.style.display = "inline-block";
        } else { 
            element.style.display = "none";
        }
    });
});



let h1get=document.getElementsByTagName("h1")
let divgetting = document.getElementById("products");

let btn = document.getElementById("btnmen");
let btn1 = document.getElementById("btnwomen");
let btn2 = document.getElementById("btnjew");
let btn3 = document.getElementById("btnele");

arr.filter((val, ind, array) => {
    let divcreating = document.createElement("div");
    divcreating.className = "product-card";

    let productImg = document.createElement("img");
    productImg.setAttribute("src", val.image);
    productImg.style.width = "190px";
    productImg.style.height="150px"
    productImg.style.objectFit="cover"
    divcreating.appendChild(productImg);

  

    let productTitle = document.createElement("h3");
    productTitle.innerText = `${val.productName}`.toUpperCase();
    productTitle.style.color = "black";
    productTitle.className="product-name"
    divcreating.appendChild(productTitle);

    let clothprice=document.createElement("p");
    clothprice.innerText=`Price: $${val.price}`;
    divcreating.appendChild(clothprice)

    let productBrand = document.createElement("p");
    productBrand.innerText = `Category : ${val.category}`;
    divcreating.appendChild(productBrand);

    let buttonsettings=document.createElement("div");
    buttonsettings.className="button-setting"
    divcreating.appendChild(buttonsettings) 

    let productAddCart = document.createElement("button");
    productAddCart.innerText = "Add to Cart";
    productAddCart.className = "product-addCart";

    productAddCart.addEventListener("click", () => {
        // alert("Added to Cart")
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show(arr);
        let cartgetting = localStorage.getItem("cart");
        let cart12 = cartgetting != null ? JSON.parse(cartgetting) : [];
        cart12.push(arr[ind]);
        console.log(JSON.parse(cartgetting));
        localStorage.setItem("cart", JSON.stringify(cart12));
    });

    let productBuy = document.createElement("button");
    productBuy.innerText = "Buy Now";
    productBuy.className="product-buy"
    buttonsettings.appendChild(productBuy);

    productBuy.addEventListener("click", () => {
        window.location.assign("./buyy.html");
    });
    buttonsettings.appendChild(productAddCart);

   
    console.log(divcreating)
    divgetting.appendChild(divcreating);
});

btn.addEventListener("click", () => {
    displayProducts("Topwear");
});

btn1.addEventListener("click", () => {
    displayProducts("Bottomwear");
});

btn2.addEventListener("click", () => {
    displayProducts("Jacket");
});
btn3.addEventListener("click", () => {
    displayProducts("Watch");
});

function displayProducts(category) {
    clear();
    let a = arr.filter((val, ind, array) => {
        return val.category == category;
    });

    a.filter((val, ind, array) => {
        let divcreating = document.createElement("div");
        divcreating.className = "product-card";
        divcreating.setAttribute("id","card");

        let productImg = document.createElement("img");
        productImg.setAttribute("src", val.image);
        productImg.style.width = "200px";
        productImg.style.height="150px"
        divcreating.appendChild(productImg);

      

        let productTitle = document.createElement("h3");
        productTitle.innerText = `${val.productName}`.toUpperCase();
        productTitle.style.color = "black";
        divcreating.appendChild(productTitle);


        let productPrice = document.createElement("p");
        productPrice.innerText = `Price : $${val.price}`;
        divcreating.appendChild(productPrice);

        let productBrand = document.createElement("p");
        productBrand.innerText = `Category : ${val.category}`;
        divcreating.appendChild(productBrand);

        let buttonsettings=document.createElement("div");
        buttonsettings.className="button-setting"
        divcreating.appendChild(buttonsettings) 

        let productBuy = document.createElement("button");
        productBuy.innerText = "Buy Now";
        productBuy.className="product-buy"

        productBuy.addEventListener("click", () => {
            window.location.assign("./buyy.html");
            localStorage.setItem("buy", val);
        });
        buttonsettings.appendChild(productBuy);

        let productAddCart = document.createElement("button");
        productAddCart.innerText = "Add to cart";
        productAddCart.className = "product-addCart";
        buttonsettings.appendChild(productAddCart);
        
        productAddCart.addEventListener("click", () => {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show(arr);
        
            let cartgetting = localStorage.getItem("cart");
            let cart12 = cartgetting != null ? JSON.parse(cartgetting) : [];
            cart12.push(a[ind]);
            console.log(JSON.parse(cartgetting));
            localStorage.setItem("cart", JSON.stringify(cart12));
        });
        divgetting.appendChild(divcreating);
        
    });
}

let logout=document.getElementById("logout")
logout.addEventListener("click",()=>{
    window.location.assign("index.html")
});

document.getElementById("cart").addEventListener("click", () => {
    window.location.assign("cart1.html")
  });
   

function clear() {
    divgetting.innerHTML = "";
}
