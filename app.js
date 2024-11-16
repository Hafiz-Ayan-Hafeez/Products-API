const div = document.querySelector ("#container");

fetch ("https://dummyjson.com/products")

.then (res => res.json())

.then ((res) => {

    res.products.map ((item) => {
        div.innerHTML += `
        <div class="cards">
            <img src="${item.thumbnail}" alt="images-cards">
            <h2>Name: ${item.title.slice (0 , 25)}</h2>
            <h3>Category: ${item.category}</h3>
            <h3>In Stock: ${item.stock}</h3>
            <p><b>Description</b>: ${item.description.slice (0 , 20)}...</p>
            <h3>Price: $${item.price}</h3>
            <button class="btn" onclick="seeMore(${item.id})">See More...</button>
        </div>`;
    })
})

.catch (() => {
    div.innerHTML = `<div class="error"> Items Not Responding </div>`
})


const seeMore = (id) => {
    localStorage.setItem ("id" , id);
    window.location = "./product.html";
}