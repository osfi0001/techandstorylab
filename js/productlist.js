// TO KNOW THAT THE SITE LOADS IT SHOULD SHOW "sidenVises" IN THE CONSOLE OTHERWISE NOTHING WILL WORK (THIS CAN BE DELETED LATER)
window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
}

// MOTOR FETCH
const url = "https://vutyazyqgdnzvjqyebuo.supabase.co/rest/v1/TSL";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dHlhenlxZ2RuenZqcXllYnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMjUwNzIsImV4cCI6MjA0MTcwMTA3Mn0.pAvWKCspPRTv9gk0lUIgk_vkYL_pPLV-wofqAW8NmUU";
const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(showData)
  .catch((error) => console.error("Error fetching data:", error));

function showData(data) {
  console.log(data);
  showProducts(data);
}

function showProducts(products) {
  products.forEach(showProduct); // Changed "product" to "products"
}

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content; // Access the content of the template
  const copy = template.cloneNode(true);

  // Update content

  copy.querySelector("h2").textContent = product.productName;
  copy.querySelector("h3").textContent = product.category;
  copy.querySelector(".brandName").textContent = product.brand;
  copy.querySelector(".subCategory").textContent = product.subCategory;

  // Append
  document.querySelector("section").appendChild(copy);
}

// CONTINUE JS UNDER HERE

//BUTTON JS
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// HAMBURGER MENU
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
