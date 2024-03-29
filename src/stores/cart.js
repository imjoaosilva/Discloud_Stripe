import { atom } from 'nanostores';

export const products = atom([
    {
        "product_name": "Pure set",
        "quantity": 1,
        "price": 65
    },
    {
        "product_name": "Pure glow cream",
        "quantity": 2,
        "price": 32
    }
]);

export const subtotal = atom(products.get().reduce((acc, product) => acc + product.price * product.quantity, 0));

export const tax = atom(subtotal.get() * 0.1);

export const total = atom(subtotal.get() + tax.get());