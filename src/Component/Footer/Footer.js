import React from 'react';
import './Footer.css';
import payment from '../../images/payment_325x29.png';
import app1 from '../../images/app1.png';
import app2 from '../../images/app2.png';
import download from '../../images/download.png';
const Footer = () => {
    return (
        <div>
            <section class="footer-1st">

                <div class="box-container container">

                    <div class="box">
                        <h5>Follow Us</h5>
                        <small>We make consolidating, marketing and tracking your social
                            media website easy.</small>
                        <div className="icons">
                            <a href="#" class="facebook-icon"> <i class="fab fa-facebook-f "></i>  </a>
                            <a href="#" class="twitter-icon"> <i class="fab fa-twitter"></i>  </a>
                            <a href="#" class="instagram-icon"> <i class="fab fa-instagram"></i> </a>
                            <a href="#" class="youtube-icon"> <i class="fab fa-youtube"></i>  </a>
                            <a href="#" class="pinterest-icon"> <i class="fab fa-pinterest"></i>  </a>
                        </div>

                    </div>


                    <div class="box">

                        <h5>Download App</h5>
                        <small>Gadget Market App is now available on App Store & Google Play. Get it now.</small>
                        <div class="app-img">
                            <img src={app1} alt="" />
                            <img src={app2} alt="" />

                        </div>
                    </div>

                    <div class="box">
                        <h5>About The Store</h5>
                        <small>Our mission statement is to provide the absolute best customer experience available in the Electronic industry without exception.
                        </small>
                        <div class="phone">
                            <img src={download} alt="" />
                            <div class="phone-text">
                                <small>Got Question? Call us 24/7!
                                </small>
                                <h4 class="text">+001 123 456 789</h4>
                            </div>
                        </div>
                        <div>
                            <small>
                                Address: Sylhet Street 68, Amoborkhana, Sylhet, BD</small>
                        </div>
                        <small>E-Mail: gadgetmarket@gmail.com</small>
                    </div>
                </div>
            </section>

            <section class="footer">

                <div class="box-container container">

                    <div class="box">
                        <h3>quick links</h3>
                        <a href="home.html"> <i class="fas fa-arrow-right"></i> home</a>
                        <a href="shop.html"> <i class="fas fa-arrow-right"></i> shop</a>
                        <a href="orderReview.html"> <i class="fas fa-arrow-right"></i>order review</a>

                        <a href="contact.html"> <i class="fas fa-arrow-right"></i> contact</a>
                    </div>

                    <div class="box">
                        <h3>extra links</h3>
                        <a href="orderReview.html"> <i class="fas fa-arrow-right"></i> my order </a>
                        <a href="wishlist.html"> <i class="fas fa-arrow-right"></i> my favorite </a>
                        <a href="wishlist.html"> <i class="fas fa-arrow-right"></i> my wishlist </a>
                        <a href="login.html"> <i class="fas fa-arrow-right"></i> my account </a>
                        <a href="help.html"> <i class="fas fa-arrow-right"></i> help </a>
                    </div>

                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                        <a href="#"> <i class="fab fa-pinterest"></i> pinterest </a>
                    </div>

                    <div class="box">

                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>

                        <div class="submit">
                            <input type="email" value="" placeholder="Your email address" name="contact[email]" class="submit-mail" aria-label="Your email address" required="required" />
                            <input type="hidden" name="contact[tags]" value="newsletter" />
                            <button type="submit" class="submit-btn" name="subscribe" value=""><small class="span" >Submit</small><i class=" fa fa-paper-plane" ></i></button>
                        </div>
                        <img src={payment} class="payment" alt="" />
                    </div>
                </div>
            </section>
            <section class="credit">Copyright © <span>GadGet Market</span>. all rights reserved. Powered by <span>alothemes</span>.</section>
        </div>
    );
};

export default Footer;