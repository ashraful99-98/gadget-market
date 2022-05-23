import React from 'react';
import './Header.css';
import headerLogo from '../../images/logoo.png';

const Header = () => {


    return (
        <div>
            <header class="header">
                <div class="container">
                    <nav class="navbar navbar-expand-lg header-nav">
                        <div>
                            <a href="home.html" class="logo-text"><img class="logo" src={headerLogo} alt="" width="60px" height="60px" />GadGet <span>Market</span></a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav navbar-ul">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="home.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="shop.html">Shop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="shop.html">Order Review</a>
                                </li>
                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Review
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><a class="dropdown-item dropdown" href="orderReview.html">Order Review</a><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item dropdown" href="orderReview.html">Cart</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item dropdown" href="clientReview.html">Client Review</a></li>
                                    </ul>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>


                        </div>
                        < div class="icons">

                            <a class="fas fa-shopping-cart icon" href="orderReview.html">
                            </a>
                            <a class="fas fa-heart icon" href="wishList.html">
                            </a>
                            <a class="fas fa-user icon" href="login.html"></a>

                        </div>
                    </nav>
                </div>

            </header>

        </div >
    );
};

export default Header;