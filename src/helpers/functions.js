// cart = {
//   products: [
//     {
//       productItem: product1(100),
//       count: 10,
//       totalProductCost: 1000,
//     },
//     {
//       productItem: product2(70),
//       count: 10,
//       totalProductCost: 1000,
//     },
//   ],
//   totalCost: 1560
// };

export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart ? cart.products.length : 0;
}

export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (products) => {
  return products.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};
