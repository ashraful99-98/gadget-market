import React, { useEffect, useState } from 'react';
import './Shop.css'
import useCart from '../hooks/useCart';
import { addToDb } from '../utilities/fakedb';
import Product from '../Component/Product/Product';
import Cart from '../Component/Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }
    return (
        <div>
            <div class="heading-section">
                <div className="heading-div">
                    <p class="heading-p container"> <a href="home.html">HOME<span> /</span></a>SHOP</p>
                </div>
            </div>

            {/* <section class="category container">


                <div class='category-title'>
                    <h1 class="title"> <span>our <span class="span-category">category</span></span>
                        <a href="#">view all >></a> </h1>
                </div>

                <div class="box-container">

                    <a href="#" class="box">
                        <img src={cart1} alt="" />
                        <h3>fresh fruits</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart2} alt="" />
                        <h3>vegetables</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart3} alt="" />
                        <h3>organic spices</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart4} alt="" />
                        <h3>fresh meat</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart5} alt="" />
                        <h3>organic wheat</h3>
                    </a>

                </div>

            </section> */}
            <section class="products container">
                <div class="category-title">

                    <small>Products</small>
                    <a href="#product">view all ></a>
                </div>

                <div class="box-container" id="product">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>
                        )

                    }

                </div>

            </section >
            <section class="container cart-item">
                <Cart cart={cart}></Cart>
            </section>
        </div >
    );
};

export default Shop;