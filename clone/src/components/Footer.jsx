export const Footer = () => {
    const online = [
        {
            "links": "Men"
        },
        {
            "links": "Women"
        },
        {
            "links": "Kids"
        },
        {
            "links": "Home"
        },
        {
            "links": "Beauty"
        },
        {
            "links": "Genz"
        },
        {
            "links": "Myntra Insider"
        },

    ]

    const customer = [
        {
            "links": "contact Us"
        },
        {
            "links": "FAQ"
        },
        {
            "links": "T&C"
        },
        {
            "links": "Terms of Use"
        },
        {
            "links": "Track Orders"
        },
        {
            "links": "Shipping"
        },
        {
            "links": "Cancellation"
        },


    ]

    const useful = [
        {
            "links": "Blog"
        },
        {
            "links": "Careers"
        },
        {
            "links": "Site Map"
        },
        {
            "links": "Corporate Information"
        },
        {
            "links": "WhiteHat"
        },
        {
            "links": "Cleartrip"
        },
    ]

    const life = [
        {
            "links": "Explore with Swiggy"
        },
        {
            "links": "Swiggy News"
        },
        {
            "links": "Snackables"
        },


    ]
    return (
        <>
            <footer className="margin-top">
                <div className="container-footer">
                    {/* better experience  */}
                    <div className="grid grid-four-cols">
                        <div className="footer-info">
                            <h6>ONLINE SHOPPING</h6>
                            <ul>
                                {online.map((curElem) => {
                                    const { links, index } = curElem;
                                    return <li key={index}>
                                        {links}
                                    </li>
                                })}
                            </ul>

                            <h6 className="mt-4 pt-4">USEFUL LINKS</h6>
                            <ul>
                                {useful.map((curElem) => {
                                    const { links, index } = curElem;
                                    return <li key={index}>
                                        {links}
                                    </li>
                                })}
                            </ul>
                        </div>

                        {/* 2 col */}
                        <div className="footer-info">
                            <h6>CUSTOMER POLICIES</h6>
                            <ul>
                                {customer.map((curElem) => {
                                    const { links, index } = curElem;
                                    return <li key={index}>
                                        {links}
                                    </li>
                                })}
                            </ul>
                        </div>


                        {/* 3 col */}
                        <div className="footer-info">
                            <h6 className="mb-4 ps-0">For better experience,download the Swiggy app now</h6>
                            <div className="d-flex  align-items-center ">
                                <img src="images/footer1.png" className="me-4" alt="app-store" />
                                <img src="images/footer2.png" alt="play-store" />
                            </div>
                            <h6 className="mt-4 pt-4 ps-0">KEEP IN TOUCH</h6>
                            <div className="footer-icon">
                                <img src="images/footer3.png" alt="" />
                                <img src="images/footer4.png" alt="" />
                                <img src="images/footer5.png" alt="" />
                                <img src="images/footer6.png" alt="" />
                            </div>
                            
                        </div>

                        {/* 4 col */}
                        <div className="footer-info">
                            <div className="footer-icon1">
                                <img src="images/footer7.png" alt="" />
                                <div>
                                    <p><span>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
                                </div>
                            </div>
                            <div className="footer-icon1">
                                <img src="images/footer8.png" alt="" />
                                <div>
                                    <p><span>Return within 14days</span> of receiving your order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    

                </div>
            </footer >
        </>
    )
} 