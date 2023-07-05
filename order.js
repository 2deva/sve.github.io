// Get the form element
const form = document.querySelector('.order-form');

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Hide the form
  form.style.display = 'none';
});

// for sending name and price to the order.html page
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productImage = urlParams.get('image');
const productPrice = urlParams.get('price');


const productNameElement = document.getElementById('product-name');
const productImageElement = document.getElementById('product-image');
const productPriceElement = document.getElementById('product-price');

productNameElement.textContent = ` Your product :${productName}`;
productImageElement.src = productImage;    
productPriceElement.textContent = `Total cost is: ₹${productPrice}`;

 // thak you image for cod
const submitButton = document.querySelector('input[type="submit"]');
submitButton.value = `Pay - ₹${productPrice}`;
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const paymentMode = document.getElementById('payment_mode').value;
  if (paymentMode === 'cod') {
    const thanksImage = document.getElementById('thanks-image');
    thanksImage.style.display = 'block';
    thanksImage.style.position = 'fixed';
    thanksImage.style.top = '60%';
    thanksImage.style.left = '50%';
    thanksImage.style.transform = 'translate(-50%, -50%)';
    const thanksMessage = document.getElementById('thanks-message');
    thanksMessage.style.display = 'block';
    thanksMessage.style.textAlign = 'bottom';
    form.style.display = 'none';
    document.querySelector('form').style.display = 'none';
    document.addEventListener('keydown', (event) => {
      window.location.href = 'index.';
    });
} else if (paymentMode === 'online') {
    const qrCodeImage = document.getElementById('qr-code');
    qrCodeImage.style.display = 'block';
    qrCodeImage.style.position = 'fixed';
    qrCodeImage.style.top = '60%';
    qrCodeImage.style.left = '50%';
    qrCodeImage.style.transform = 'translate(-50%, -50%)';
    const thanksMessage = document.getElementById('thanks-message');
    thanksMessage.style.display = 'block';
    thanksMessage.style.textAlign = 'bottom';
    form.style.display = 'none';
    document.querySelector('form').style.display = 'none';
    const homeButton = document.getElementById('home-button');
    document.addEventListener('keydown', (event) => {
        window.location.href = 'index.html';
      });
  } else {
    document.querySelector('form').submit();
  }
});