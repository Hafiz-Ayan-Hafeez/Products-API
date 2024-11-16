const div = document.querySelector ("#container");
const reviews = document.querySelector ("#reviews");


const data = localStorage.getItem ("id");

fetch (`https://dummyjson.com/products/${data}`)

.then (res => res.json())

.then ((res) => {

    div.innerHTML += `
    <div class="cards styling-card">
        <img src="${res.thumbnail}" alt="images-cards">
        <h2>Name: ${res.title}</h2>
        <h3>Category: ${res.category}</h3>
        <h3>Brand: ${res.brand}</h3>
        <h3>In Stock: ${res.stock}</h3>
        <p><b>Description</b>: ${res.description}</p>
        <h3>Ratings: ${res.rating}</h3>
        <h3>Discount Percent: ${res.discountPercentage}</h3>
        <h3>Price: $${res.price}</h3>
    </div>`;

    res.reviews.map ((item) => {
        reviews.innerHTML += `
        <h3>Ratings: ${item.rating}</h3>
        <h3>Reviewer Name: ${item.reviewerName}</h3>`;
    });
})

.catch (() => {
    div.innerHTML = `<div class="error"> No Details Found </div>`;
})