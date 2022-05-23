// import React from 'react';
// import './OrderReview.css';
// import useProducts from '../../hooks/useProduct';
// import useCart from '../../hooks/useCart';
// import ReviewItem from '../ReviewItem/ReviewItem';
// import { removeFromDb } from '../../utilities/fakedb';
// import OrderCart from '../OrderCart/OrderCart';

// const OrderReview = () => {
//     const [products] = useProducts();
//     const [cart, setCart] = useCart(products);
//     const handleRemove = key => {
//         console.log(key);
//         const newCart = cart.filter(product => product.key !== key);
//         setCart(newCart);
//         removeFromDb(key);

//     }
//     return (
//         <div>

//             {/* <div class="heading-section">
//                 <div className="heading-div">
//                     <h1 class="head">Order review</h1>
//                     <p class="heading-p"> <a href="shop.html">Shop <span>>></span></a>Order review </p>
//                 </div>
//             </div> */}
//             <section class="review">
//                 <h3>Review Your Order</h3>
//                 <div class="review-container">
//                     <div class="product-review">
//                         {
//                             cart.map(product => <ReviewItem
//                                 key={product.key}
//                                 product={product}
//                                 handleRemove={handleRemove}>

//                             </ReviewItem>)

//                         }



//                     </div>
//                     <div>
//                         <div class="cart-review">

//                             <OrderCart cart={cart}></OrderCart>

//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* <section class="info-container container">

//                 <div class="info">
//                     <div>
//                         <img src={reviewIcon1} alt="" />
//                     </div>
//                     <div class="content">
//                         <h3>fast delivery</h3>
//                         <span>within 30 minutes</span>
//                     </div>
//                 </div>

//                 <div class="info">
//                     <div>
//                         <img src={reviewIcon2} alt="" />
//                     </div>
//                     <div class="content">
//                         <h3>24 / 7 available</h3>
//                         <span>call us anytime</span>
//                     </div>
//                 </div>

//                 <div class="info">
//                     <div>
//                         <img src={reviewIcon3} alt="" />
//                     </div>
//                     <div class="content">
//                         <h3>easy payments</h3>
//                         <span>cash or credits</span>
//                     </div>
//                 </div>

//             </section> */}


//         </div>
//     );
// };

// export default OrderReview;