import men from "../Api/men.json";
import { IoIosSearch } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { WomenCard } from "../womensection/WomenCard";
import { NavLink } from "react-router-dom";


export const MenPg = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        setCardData(men);
    }, []);

    // gender
    const gender = [
        { select: "Men" },
        { select: "Women" },
        { select: "Boys" },
        { select: "Girls" },
    ]
    // categories
    const variety = [
        { item: "Kurta Sets", rating: "(2299)" },
        { item: "Kurtas", rating: "(9)" },
        { item: "Trousers ", rating: "(1199)" },
        { item: "Palazzos", rating: "(71)" },
        { item: "Dresses ", rating: "(69)" },
        { item: "Kurtis ", rating: "(99)" },
    ]
    // brand
    const brands = [
        { item: "The Furnishing Tree", rating: "88765" },
        { item: "ArtzFolio", rating: "1765" },
        { item: "Stylista", rating: "765" },
        { item: "KALINI", rating: "3987" },
        { item: "DressBerry", rating: "2233" },
        { item: "Anouk", rating: "7099" },
        { item: "Kuber Industries", rating: "8866" },
    ];
    // discount
    const range = [
        { discount: "10% and above" },
        { discount: "20% and above" },
        { discount: "30% and above" },
        { discount: "40% and above" },
        { discount: "50% and above" },

    ];
    return (

        <>
            <main className="">
                <div className="container1 ">

                    {/*  */}
                    <div className="d-flex align-items-center justify-content-between" style={{ padding: "3rem 0rem" }}>
                        <div className="home-header">
                            <h6>Home / <span>Myntra Fashion Store</span></h6>
                            <h5><span> Myntra Fashion Store - </span>  2861 items</h5>
                        </div>

                        {/*bundle dropdown */}
                        <div className="d-flex1" >
                            <div className="d-flex  align-items-center">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Bundles
                                    </button>

                                    <div className="dropdown-menu p-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox1"
                                                defaultValue="option1"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                                Bundles
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                Single Styles
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                {/*country dropdown */}
                                <div className="dropdown1">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Country Of Orgin
                                    </button>

                                    <div className="dropdown-menu p-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox1"
                                                defaultValue="option1"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                                All Countries
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                China
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                Goa
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                India
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* size  */}
                                <div className="dropdown1">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Country Of Orgin
                                    </button>

                                    <div className="dropdown-menu p-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox1"
                                                defaultValue="option1"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                                3XL
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                L
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                XL
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                M
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox2"
                                                defaultValue="option2"
                                            />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                S
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*sort by  */}
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sort by: Recommended
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            What's New
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Popularity
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Better Discount
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Customer rating
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-six--cols">
                        {/* filter */}

                        <div>
                            <div className="filter p-0">
                                <h4>FILTERS</h4>
                                <button className="btn1">CLEAR ALL</button>

                            </div>


                            {/* gender */}
                            {gender.map((curElem, index) => (
                                <div className="form-check" key={index}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioDefault"
                                        id="radioDefault1"
                                    />
                                    <label className="form-check-label" htmlFor="radioDefault1">
                                        {curElem.select}
                                    </label>
                                </div>
                            ))}


                            {/* radio btn */}
                            < div >
                                <div className="">
                                    <div className="filter">
                                        <h4>CATEGORIES</h4>
                                        <IoIosSearch />
                                    </div>
                                    {variety.map((curElem, index) => (
                                        <div className="radio-btn" key={index}>

                                            <input type="checkbox" value="" id="checkChecked" />
                                            <label htmlFor="checkChecked">{curElem.item} <span>{curElem.rating}</span></label>
                                        </div>
                                    ))}
                                </div>

                                <button className="btn1 ms-4 m-3">+32 more</button>
                            </div>

                            {/* BRANDS range */}

                            <div className="">
                                <div className="filter">
                                    <h4>Brand</h4>
                                    <IoIosSearch />
                                </div>
                                {brands.map((curElem, index) => (
                                    <div className="radio-btn" key={index}>
                                        {/* {curElem.item} */}
                                        <input type="checkbox" value="" id="checkChecked" />
                                        <label htmlFor="checkChecked">{curElem.item} <span>{curElem.rating}</span></label>
                                    </div>
                                ))}
                            </div>

                            {/* price */}
                            <div>
                                <div className="filter">
                                    <h4>COLOR</h4>
                                    <IoIosSearch />
                                </div>

                                <div className="radio-btn">
                                    <input type="checkbox" value="" id="checkChecked" />
                                    <FaCircle />
                                    <label htmlFor="checkChecked">Blue<span>(2299)</span></label>
                                </div>
                                <div className="radio-btn">
                                    <input type="checkbox" value="" id="checkChecked" />
                                    <FaCircle />
                                    <label htmlFor="checkChecked">Pink<span>(9)</span></label>
                                </div>
                                <div className="radio-btn">
                                    <input type="checkbox" value="" id="checkChecked" />
                                    <FaCircle />
                                    <label htmlFor="checkChecked">Black <span>(1199)</span></label>
                                </div>
                                <div className="radio-btn">
                                    <input type="checkbox" value="" id="checkChecked" />
                                    <FaCircle />
                                    <label htmlFor="checkChecked">Red<span>(71)</span></label>
                                </div>
                                <div className="radio-btn">
                                    <input type="checkbox" value="" id="checkChecked" />
                                    <FaCircle />
                                    <label htmlFor="checkChecked">Yellow <span>(39)</span></label>
                                </div>
                                <div className="radio-btn">
                                    <input type="checkbox" value="" id="checkChecked" />

                                    <h6  >< FaCircle /></h6>
                                    <label htmlFor="checkChecked">Green <span>(69)</span></label>
                                </div>

                                <button className="btn1 ms-4 m-3">+36 more</button>
                            </div>

                            {/* discount range */}

                            <div className="">
                                <div className="filter">
                                    <h4>Discount</h4>
                                    <IoIosSearch />
                                </div>
                                {range.map((curElem, index) => (
                                    <div className="radio-btn" key={index}>
                                        {/* {curElem.item} */}
                                        <input type="checkbox" value="" id="checkChecked" />
                                        <label htmlFor="checkChecked">{curElem.discount} </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* images */}
                        <div className="products grid grid-five-cols">
                            {cardData.map((curElem, index) => (
                                <NavLink to="/detailmen" key={index}>
                                    <WomenCard key={index} curElem={curElem} />
                                </NavLink>
                            ))}

                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}