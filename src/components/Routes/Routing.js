import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './../Pages/Blogs/page';
import Post from './../Pages/Blogs/post';
import Empty from './../Common/Empty';
import Products from './../Pages/Home/Products/products';
import Error from './../Common/Empty';
import Aboutus from '../Pages/Informations/aboutus';
import Preguntasfreq from '../Pages/Informations/preguntasfreq';
import Login from '../Pages/Login/Login'
import Carrito from '../Pages/Carrito/Carrito'
import Search from './../Pages/Home/Search/Searched';
import Checkout from '../Pages/Carrito/Checkout';

import React, { Component } from 'react'
import Paysuccess from '../Pages/paymentfinish/PaymentFinish';
import Paycomponent from '../Pages/paymentfinish/Paycomponent';


class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/posts" element={<Page />} />
                    <Route path="/posts/:postId" element={<Post />} />
                    <Route path="/prods" element={<Products />} />
                    <Route path="/" element={<Empty />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/preguntas" element={<Preguntasfreq />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Carrito />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/redsys" element={<Paycomponent />} />
                    <Route path="/payment-done" element={<Paysuccess />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Routing
