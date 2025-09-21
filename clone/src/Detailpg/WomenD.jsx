import { HiShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdStarBorder } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

export const WomenD = () => {
    return (
        <section >
            <div className="container1">
                <h6 className="heading">Home / Clothing / Women Clothing / Sarees / <span> KALINI Sarees  More by KALINI</span></h6>
                <div className="grid-three-cols">

                    <div className="overview">
                        <div className="grid-two-cols">
                            <img src="images/overview1.jpg" alt="overview1" />
                            <img src="images/overview2.jpg" alt="overview2" />
                            <img src="images/overview3.jpg" alt="overview3" />
                            <img src="images/saree1.jpg" alt="overview4" />
                        </div>
                    </div>

                    <div className="product-content">
                        <h5>KALINI</h5>
                        <p>Ethnic Motifs Printed Saree</p>
                        <div className="rating">
                            <h6>4.1 <img src="images/star.png" alt="" /></h6>
                            <p>981 Rating</p>
                        </div>

                        {/* price */}
                        <div>
                            <div className="price">
                                <h5 >₹388</h5>
                                <p>MRP <strike>₹1770</strike> <span>(78% OFF)</span></p>
                            </div>
                            <p style={{ color: "rgba(16, 121, 16, 1)", fontWeight: "600" }}>inclusive of all taxes</p>
                        </div>

                        {/* more colors */}
                        <div className="color" >
                            <h6 className="">MORE COLOR</h6>
                            <div className="more-color">
                                <img src="images/saree2.jpg" alt="" />
                                <img src="images/saree5.jpg" alt="" />
                            </div>
                            <h6>SELECT SIZE</h6>
                            <button className="btn4">Onesize</button>
                        </div>

                        <div className="button ">
                            <button className="btn2"><HiShoppingBag /> ADD TO CART</button>
                            <button className="btn2"><FaRegHeart /> WHISLIST</button>
                        </div>

                        {/* seller available */}
                        <div className="price-info">
                            <div className="price">
                                <h5 >₹388</h5>
                                <p>MRP <strike>₹1770</strike> <span>(78% OFF)</span></p>
                            </div>
                            <h6>Seller: <span>Supercom Net</span></h6>
                            <button className="btn1">1 more seller available</button>
                        </div>

                        {/* delivery option */}
                        <div className="delivery-info">
                            <div className="delivery">
                                <h6>DELIVERY OPTION</h6>
                                <FiTruck />
                            </div>

                            <div className="input-field">
                                <input type="number" name="number" placeholder="Enter Pincode" />
                                <button className="btn1">Check</button>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Pincode"
                                    aria-label="Enter Pincode"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text " id="basic-addon2">
                                    Check
                                </span>
                            </div>

                            <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                            <h5>100% Original Products</h5>
                            <h5>Pay on delivery might be available</h5>
                            <h5>Easy 7 days returns and exchanges</h5>

                        </div>

                        {/* best offer */}
                        <div className="best-offer mt-4">
                            <div>
                                <h6>BEST OFFERS </h6>
                                <h6>Best Price: <span>Rs. 291</span></h6>
                                <ul>
                                    <li>Coupon Discount: 25% off (Your total saving: Rs. 1479)</li>
                                    <li>Applicable on: Orders above Rs. 750 (only on first purchase)</li>
                                    <li>Coupon code: MYNTRASAVE</li>
                                </ul>
                                <button className="btn1">Terms & Condition</button>
                            </div>

                            <div>
                                <h6>10% Discount on IDFC FIRST SWYP Credit Card.</h6>
                                <ul>
                                    <li>Min Spend ₹850, Max Discount ₹350.</li>
                                </ul>
                                <button className="btn1">Terms & Condition</button>
                            </div>
                            {/*  */}
                            <div>
                                <h6>10% Discount on HSBC Credit Cards.</h6>
                                <ul>
                                    <li>Min Spend ₹5000, Max Discount ₹1500.</li>
                                </ul>
                                <button className="btn1">Terms & Condition</button>
                            </div>
                            {/*  */}
                            <div>
                                <h6>EMI option available</h6>
                                <ul>
                                    <li>EMI starting from Rs.19/month</li>
                                </ul>
                                <button className="btn1">View Plan</button>
                            </div>
                        </div>
                        {/*Product Details  */}
                        <div className="delivery-info">
                            <h6>PRODUCT DETAILS </h6>
                            <h6>Design Details</h6>
                            <p>Black and white saree</p>
                            <p>Ethnic motifs printed saree with no border</p>
                            <p>The saree comes with an unstitched blouse piece</p>
                            <p>The blouse worn by the model might be for modelling purpose only. Check the image of the blouse piece to understand how the actual blouse piece looks like.</p>
                            <div>
                                <h6>Size & Fit</h6>
                                <p>Length: 5.5 metres plus 0.8 metre blouse piece</p>
                                <p>Width: 1.06 metres (approx.)</p>
                            </div>
                            <div>
                                <h6>Material & Care</h6>
                                <p>Saree Fabric: Art Silk</p>
                                <p>Blouse Fabric: Silk Blend</p>
                                <p>Hand Wash</p>
                            </div>

                            {/* rating */}
                            <div className="grid grid-two-cols mb-4 pb-4 pt-4">
                                <div>
                                    <div className="rating-section">
                                        <h6>RATING</h6>
                                        <MdStarBorder />
                                    </div>

                                    <div className="rating-icon">
                                        <h1>4.1</h1>
                                        <img src="images/star.png" alt="" />
                                    </div>
                                    <p>986 Verified Buyers</p>
                                </div>

                                {/* progress */}
                                <div>
                                    <div className="progress-para">
                                        <p >5<  IoMdStar /></p>
                                        <div
                                            className="progress progress-input me-4 "
                                            role="progressbar"
                                            aria-label="Example 1px high"
                                            aria-valuenow={74}
                                            aria-valuemin={0}
                                            aria-valuemax={100}

                                        >
                                            <div className="progress-bar" style={{ width: "74%" }} />
                                        </div>
                                        <p className="m-0">500</p>
                                    </div>
                                    {/*  */}
                                    <div className="progress-para">
                                        <p >4<  IoMdStar /></p>
                                        <div
                                            className="progress progress-input me-4 "
                                            role="progressbar"
                                            aria-label="Example 1px high"
                                            aria-valuenow={54}
                                            aria-valuemin={0}
                                            aria-valuemax={100}

                                        >
                                            <div className="progress-bar" style={{ width: "54%" }} />
                                        </div>
                                        <p className="m-0">180</p>
                                    </div>
                                    {/*  */}
                                    <div className="progress-para">
                                        <p >3<  IoMdStar /></p>
                                        <div
                                            className="progress progress-input me-4 "
                                            role="progressbar"
                                            aria-label="Example 1px high"
                                            aria-valuenow={44}
                                            aria-valuemin={0}
                                            aria-valuemax={100}

                                        >
                                            <div className="progress-bar" style={{ width: "44%" }} />
                                        </div>
                                        <p className="m-0">80</p>
                                    </div>
                                    {/*  */}
                                    <div className="progress-para">
                                        <p >2<  IoMdStar /></p>
                                        <div
                                            className="progress progress-input me-4 "
                                            role="progressbar"
                                            aria-label="Example 1px high"
                                            aria-valuenow={20}
                                            aria-valuemin={0}
                                            aria-valuemax={100}

                                        >
                                            <div className="progress-bar" style={{ width: "20%" }} />
                                        </div>
                                        <p className="m-0">40</p>
                                    </div>
                                    {/*  */}
                                    <div className="progress-para">
                                        <p >1<  IoMdStar /></p>
                                        <div
                                            className="progress progress-input me-4 "
                                            role="progressbar"
                                            aria-label="Example 1px high"
                                            aria-valuenow={10}
                                            aria-valuemin={0}
                                            aria-valuemax={100}

                                        >
                                            <div className="progress-bar" style={{ width: "10%" }} />
                                        </div>
                                        <p className="m-0">100</p>
                                    </div>
                                </div>
                                {/* end progress */}
                            </div>
                            {/*  */}
                            <div >
                                <div className="rating-section">
                                    <h6 >WHAT CUSTOMERS SAID</h6>
                                    <MdStarBorder />
                                </div>


                                <p className="mb-0">Fabric Quality</p>
                                <div className="d-flex  align-items-center">

                                    <div
                                        className="progress me-4 "
                                        role="progressbar"
                                        aria-label="Example 1px high"
                                        aria-valuenow={44}
                                        aria-valuemin={0}
                                        aria-valuemax={100}

                                    >
                                        <div className="progress-bar " style={{ width: "44%" }} />
                                    </div>
                                    <h6>Very Good(44%)</h6>
                                </div>
                                {/*  */}
                                <p className="mb-0">Matches Product Photos</p>
                                <div className="d-flex  align-items-center">
                                    <div
                                        className="progress me-4"
                                        role="progressbar"
                                        aria-label="Example 1px high"
                                        aria-valuenow={83}
                                        aria-valuemin={0}
                                        aria-valuemax={100}

                                    >
                                        <div className="progress-bar" style={{ width: "83%" }} />
                                    </div>
                                    <h6>Exactly(83%)</h6>
                                </div>
                                {/*  */}
                                <p className="mb-0">Length</p>
                                <div className="d-flex  align-items-center">

                                    <div
                                        className="progress me-4"
                                        role="progressbar"
                                        aria-label="Example 1px high"
                                        aria-valuenow={44}
                                        aria-valuemin={0}
                                        aria-valuemax={100}

                                    >
                                        <div className="progress-bar" style={{ width: "44%" }} />
                                    </div>
                                    <h6>Very Good(44%)</h6>
                                </div>
                            </div>





                            {/* customer photo*/}
                            <div className="customer-info">
                                <h6>Customer Photos (656)</h6>

                                <div className="more-color">
                                    <img src="images/overview1.jpg" alt="" />
                                    <img src="images/overview2.jpg" alt="" />
                                    <img src="images/overview3.jpg" alt="" />
                                </div>
                                <h6>Customer Reviews (1108)</h6>
                                <p> <span>5 <FaStar /></span> Wrap yourself in elegance with kalini's kalamkari printed block print saree... The best part of this saree intricate print showcases Traditional crafts with modern twists I'm wearing with black crop top and silver jewellery perfect to add touch to any occasion.. #womenfashion #kaliniwomen #sareewomen #silksaree #printedsaree #beingwomen #blackwomen #blacklover #saree #tradiitional</p>
                                <div className="customer-review">
                                    <h6>Twinkle Maani16 | Jan 2025 </h6>
                                    <h5><p><AiOutlineLike /> 4</p> <p className="ms-2"><AiOutlineDislike /> 0</p></h5>
                                </div>
                            </div>
                            <div className="customer-info p-4 ps-0 pe-0">
                                <p> <span>5 <FaStar /></span> Wrap yourself in elegance with kalini's kalamkari printed block print saree... The best part of this saree intricate print showcases Traditional crafts with modern twists I'm wearing with black crop top and silver jewellery perfect to add touch to any occasion.. #womenfashion #kaliniwomen #sareewomen #silksaree #printedsaree #beingwomen #blackwomen #blacklover #saree #tradiitional</p>
                                <div className="more-color ms-4 ps-4 ">
                                    <img src="images/overview1.jpg" className="ms-4" alt="" />
                                </div>
                                <div className="customer-review">
                                    <h6>Twinkle Maani16 | Jan 2025 </h6>
                                    <h5><p><AiOutlineLike /> 4</p> <p className="ms-2"><AiOutlineDislike /> 0</p></h5>
                                </div>

                            </div>
                            <div className="delivery-info">
                                <button className="btn1">View all 200 reviews</button>
                                <h6>Product Code: 32456778</h6>
                                <h6>Seller: <span>Supercom Net</span></h6>
                                <button className="btn1">View Supplier informtion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
