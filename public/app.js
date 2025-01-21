// Seleccionar elementos
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const notification = document.getElementById('notification');
const backgroundColorInput = document.getElementById('background-color');
const titulo = document.getElementsByTagName ('h1')[0];
console.log(titulo);

// Función para mostrar notificaciones
function showNotification(message, color = 'green') {
  notification.textContent = message;
  //notification.style.color = color;
  setTimeout(() => {
    notification.textContent = '';
  }, 2000);
}

// Agregar al carrito
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    titulo.style.color = "red";
    const product = event.target.parentElement;
    const productName = product.querySelector('h3').textContent;
    const cartItem = document.createElement('li');
    cartItem.textContent = productName;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.style.marginLeft = '10px';
    
    // Eliminar del carrito
    removeButton.addEventListener('click', () => {
      cartItem.remove();
      showNotification(`${productName} eliminado del carrito`, 'red');
    });
    
    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);
    showNotification(`${productName} agregado al carrito`);
  });
});

// Cambiar color de fondo
backgroundColorInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    document.body.style.backgroundColor = backgroundColorInput.value;
    showNotification(`Color de fondo cambiado a ${backgroundColorInput.value}`);
  }
});
