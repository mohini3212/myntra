import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {  CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import women from "../Api/women.json";

export const Navbar = () => {
    const [search, setSearch] = useState("");

    const links = [
        {
            "name": "MEN",
            path: "/MenFrontPg"

        },
        {
            "name": "WOMEN",
            path: "/WomenFrontpg",
        },
        {
            "name": "KIDS",
            path: "/kidspage",
        },
        {
            "name": "HOME",
            path: "/homepage",
        },
        {
            "name": "BEAUTY",
            path: "/frontpage",
        },
        {
            "name": "GENZ",
            path: "/genzpage",
        },
        {
            "name": "STUDIO",
            path: "/frontpage",
        },
    ]

    // filter clothes instead of links
    const filteredProducts = women.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="shadow-custom">
            <div className="container">
                <div className="nav-section grid grid-two-cols">
                  
                    <div className="d-flex align-items-center nav-link">
                        <div className="logo">
                            <NavLink to="/frontpage">
                                <img src="images/logo.jpeg" alt="logo-img" />
                            </NavLink>
                        </div>
                        <nav>
                            <ul className="d-flex">
                                {links.map((curElem, index) => (
                                    <li key={index}>
                                        <NavLink to={curElem.path}>
                                            <h5>{curElem.name}</h5>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right side: Search + Icons */}
                    <div className="input-field" style={{ position: "relative" }}>
                        <div className="input-box">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search for clothes"
                            />
                            <IoIosSearch style={{ color: "#000" }} />
                        </div>

                        {/* Search results dropdown */}
                        {search && (
                            <div className="search-results">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((item) => (
                                        <NavLink
                                            key={item.id}
                                            to="/women"
                                            className="result-item"
                                            onClick={() => setSearch("")}
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))
                                ) : (
                                    <p className="no-result">No products found</p>
                                )}
                            </div>
                        )}


                        {/* Icons */}
                        <div className="header-icon ">
                            <div className="icon">
                                <h5 style={{textAlign:"center",marginRight:"2rem"}}><FaRegHeart /></h5>
                                {/* <p className="profile">Profile</p> */}
                                {/*  */}
                                <div className="dropdown">
                                    <p className="profile">Profile</p>
                                    <div className="dropdown-content">
                                        <div>
                                            <span>Welcome</span>
                                            <p>To access account and manage order</p>
                                            <button className="btn5">LOGIN/SIGNUP</button>
                                        </div>
                                        
                                        <h6 style={{borderTop:"1px solid rgba(181, 181, 181, 0.67)",paddingTop:"2rem",marginTop:"1rem"}}>Orders</h6>
                                        <h6>Wishlist</h6>
                                        <h6>Gift Cards</h6>
                                        <h6>Contact Us</h6>
                                        <h6>Myntra Credit</h6>
                                        <h6>Myntra Credit <span class="badge text-bg-secondary">New</span></h6>
                                        <h6>Coupons</h6>
                                        <h6>saved Cards</h6>
                                        <h6>Saved VPA</h6>
                                        <h6>Saved addresses</h6>

                                    </div>
                                </div>

                                {/*  */}
                            </div>
                            <div className="icon">
                                <h5> <HiOutlineShoppingBag /></h5>
                                <NavLink to="/wishlist">
                                <p>WishList</p>
                                </NavLink>
                            </div>
                            <div className="icon">
                                <h5> <CgProfile /></h5>
                                <p>Bag</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
