const CartService = {};

CartService.init = () => {
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
};

CartService.getCart = () => {
  const CartArrayString = localStorage.getItem('cart');
  const CartArray = JSON.parse(CartArrayString);

  return CartArray;
};

CartService.saveCart = (cartItems, user, timestamp) => {
  const newCart = { cartItems, timestamp };
  const oldCarts = CartService.getItems();

  // oldCarts.unshift(newCart);

  localStorage.setItem('cart', JSON.stringify(oldCarts));

  return oldCarts;
};
