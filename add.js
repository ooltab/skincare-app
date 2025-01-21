
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const bagItems = document.getElementById('bag-items');
const totalElement = document.getElementById('total');


let cart = [];
let total = 0;


addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const productPrice = parseFloat(button.getAttribute('data-price'));

   
    cart.push({ name: productName, price: productPrice });

   
    total += productPrice;

    
    renderCart();
  });
});


function renderCart() {
 
  bagItems.innerHTML = '';

 
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    bagItems.appendChild(li);
  });

  
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
