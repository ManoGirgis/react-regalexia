import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";

const Header2 = () => {
    const [carrito, setCarrito] = useState(0)
    const [price, setPrice] = useState(0.00.toFixed(2))
    let count = 0;
    let isLocalStorage = false;

    try {
        count = JSON.parse(localStorage.getItem('Product')).length;
        isLocalStorage = true;
    } catch (error) {
        count = 0;
    }


    useEffect(() => {
        if (isLocalStorage) {
            setCarrito(count)
            let total = 0
            let cart = JSON.parse(localStorage.getItem('Product'))
            cart.forEach(product => {
                total += product.price * product.quantity
            });
            setPrice(total.toFixed(2))
        }
    }, [count])


    return (
        <header>
            <nav className='App-header2'>
                <ul className='header-navigators'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/posts">Entradas</a></li>
                    <li><a href="/prods">Productos</a></li>
                    {/* <li><a href="/users">Users</a></li> */}
                </ul>
                <ul></ul>
                <ul className='header-navigators'>
                    <li>{price} €</li>
                    <div className='cart-buttom'>
                        <li className='circle-button-Container'><a href="/cart" className="button-with-circle"><MdOutlineShoppingBag /></a></li><span className="small-circle">{carrito}</span>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header2;
