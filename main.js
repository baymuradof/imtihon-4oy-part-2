let body =  document.body;
let container = document.createElement("div");
container.setAttribute("class", "container");
body.append(container);
let api = "https://fakestoreapi.com/products"

fetch(api)
.then((data) => {return data.json()})
.then((data) => data.forEach(element => {
    
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("order", element.id)
    let img = document.createElement("img");
    let price = document.createElement("p");
    price.setAttribute("class", "price");
    let discount = document.createElement("p");
    discount.setAttribute("class", "discount");
    let info = document.createElement("p");
    info.setAttribute("class", "info");
    let name = document.createElement("p");
    name.setAttribute("class", "name");
    let i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-trash-can");

    img.src = element.image
    price.textContent = "Price: " + element.price + "$"
    discount.textContent = "Discount: " + (element.price % 100 * .5).toFixed(1)
    info.textContent = "Desc: " + element.description
    name.textContent = "Name: " + element.title

    container.append(card);
    card.append(img)
    card.append(price)
    card.append(discount)
    card.append(info)
    card.append(name)
    card.append(i)

    i.addEventListener("click", function(a){

        let request = confirm(`Do you want to delete card no ${a.target.parentElement.getAttribute("order")}?`)

        if(request == true){
            fetch('https://fakestoreapi.com/products/' + a.target.parentElement.getAttribute("order"), {
                method: 'DELETE' ,
            })
            .then(res => res.json())
            .then(res => console.log(res))

            setTimeout(() => {
                alert("Deleted Succesfull")
            }, 1150);
        } 

    })

}))



   
