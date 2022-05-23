import React from 'react';
import Rating from 'react-rating';
import './Product.css';
const Product = (props) => {
    const { name, img, star, wight, price, wholePrice, stock, starCount } = props.product;
    return (
        <div>
            <div class="box">
                <div class="image">
                    <img src={img} class="img" alt="" />

                    <div class="icons">
                        <a onClick={() => props.handleAddToCart(props.product)} class="fas fa-shopping-cart"></a>

                        <a href="wishlist.html" class="fas fa-heart"></a>

                        <a href="#" class="fas fa-search-plus"></a>
                        <a href="#" class="fas fa-share"></a>
                    </div>
                </div>
                <div class="content">
                    <h3></h3>
                    <div class="price">${price} <span>${wholePrice}</span></div>
                    <div class="stars">
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star icon"
                            fullSymbol="fas fa-star icon"
                            readonly
                        >
                        </Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;