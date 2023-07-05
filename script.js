const categorySelect = document.getElementById('category');
const sections = document.querySelectorAll('section');

categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  sections.forEach(section => {
    if (selectedCategory === 'all') {
      section.style.display = 'flex';
    } else if (section.classList.contains(selectedCategory)) {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
});



// click on buy now button then redirect to order page
const buyNowButton = document.getElementById('buy-now');
buyNowButton.addEventListener('click', redirectToOrderPage);
function redirectToOrderPage() {
  window.location.href = "order.html";
}
// display product name, image and price on order page
function redirectToOrderPage(productName, productImage, productPrice) {
    const url = `order.html?&name=${productName}&image=${productImage}&price=${productPrice}`;
    window.location.href = url;
  }

  


