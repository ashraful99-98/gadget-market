import React from 'react';
import './Home.css';
import slider1 from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import item1 from '../../images/item1.png';
import item2 from '../../images/item.png';
import item3 from '../../images/item3.png';
import item4 from '../../images/item4.png';
import item5 from '../../images/item5.png';
import item6 from '../../images/item6.png';
import item7 from '../../images/item7.png';
import item8 from '../../images/item8.png';
import item9 from '../../images/item9.png';
import banner1 from '../../images/camera-banner.png';
import banner2 from '../../images/trimmer-banner.png';
const Home = () => {
    return (
        <div>
            <section class="home">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slider1} class=" d-block w-100 slider-img" alt="..." />
                            <div class="carousel-caption slider-text">
                                <span class="span">
                                    <small>NEW ARRIVALS</small>
                                </span>
                                <br />
                                <h1>SPORT EDITION</h1>
                                <h3>BEST CHOICE OF THE YEAR</h3>
                                <p>Discount 20% On Products & Free Shipping</p>
                                <div>
                                    <a href="#" class="slider-btn">DISCOVER NOW</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={slider2} class="d-block w-100 slider-img" alt="..." />
                            <div class="carousel-caption slider-text">
                                <span class="span">
                                    <small>HOT DEAL</small>
                                </span>
                                <br />
                                <h1>SALE 20% OFF</h1>
                                <h3>SAMSUNG GALAXY BUDS</h3>
                                <p>Top Quality Earbuds & Accessories</p>
                                <div>
                                    <a href="#" class="slider-btn">DISCOVER NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section class="item">
                <div class="container">
                    <div class="row row-cols-9 row-cols-sm-9 row-cols-md-9">
                        <div class="col">
                            <img src={item1} alt="" class="item-img" />
                            <p>Mobiles</p>
                        </div>
                        <div class="col">
                            <img src={item2} alt="" class="item-img" />
                            <p>Smart TV</p>
                        </div>
                        <div class="col">
                            <img src={item3} alt="" class="item-img" />
                            <p>Leptops</p>
                        </div>
                        <div class="col">
                            <img src={item4} alt="" class="item-img" />
                            <p>Radio</p>
                        </div>
                        <div class="col">
                            <img src={item5} alt="" class="item-img" />
                            <p>Computer</p>
                        </div>
                        <div class="col">
                            <img src={item6} alt="" class="item-img" />
                            <p>Keyboard</p>
                        </div>
                        <div class="col">
                            <img src={item7} alt="" class="item-img" />
                            <p>Mouse</p>
                        </div>
                        <div class="col">
                            <img src={item8} alt="" class="item-img" />
                            <p>USB Drives</p>
                        </div>
                        <div class="col">
                            <img src={item9} alt="" class="item-img" />
                            <p>Trimmer</p>
                        </div>

                    </div>
                </div>
            </section>

            <section class="banner-section container">

                <div class="banner">
                    <img src={banner1} alt="" />
                    <div class="banner-content">
                        <h2>Wedcam</h2>
                        <h2>PhotoGenic</h2>
                        <h4>100% <span>Organic Products</span></h4>
                        <a href="shop.html" class="banner-btn1">shop now</a>
                    </div>
                </div>

                <div class="banner">
                    <img src={banner2} alt="" />
                    <div class="banner-content">
                        <h2>Bearded</h2>
                        <h2>Shaver</h2>
                        <h4>100% <span>Organic Products</span></h4>
                        <a href="shop.html" class="banner-btn2">shop now</a>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;