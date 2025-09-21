import { NavLink } from "react-router-dom";

export const Categories = () => {
    const categories = [
        { imgURL: "/images/women-section25.jpg" },
        { imgURL: "/images/women-section26.jpg" },
        { imgURL: "/images/women-section27.jpg" },
        { imgURL: "/images/women-section28.jpg" },
        { imgURL: "/images/women-section30.jpg" },
        { imgURL: "/images/women-section31.jpg" },
        { imgURL: "/images/men-section16.jpg" },
        { imgURL: "/images/men-section17.jpg" },
        { imgURL: "/images/men-section18.jpg" },
        { imgURL: "/images/men-section19.jpg" },
        { imgURL: "/images/men-section20.jpg" },
        { imgURL: "/images/men-section21.jpg" },
        { imgURL: "/images/women-section29.jpg" },
        { imgURL: "/images/women-section34.jpg" },
        { imgURL: "/images/women-section35.jpg" },
        { imgURL: "/images/men-section25.jpg" }
        
    ];

    return (
        <>
            
            <section className="margin-top">
                <div className="container1 ">

                    <h2>SHOP BY CATEGORY</h2>
                    <div className="grid grid-six-cols ">
                        {categories.map((curElem, index) => (
                            <NavLink to="/men">
                            <div className="categories" key={index}>
                               <img src= {curElem.imgURL} alt="" />
                            </div>
                            </NavLink>
                        ))}
                    </div>

                    {/*  */}
                

                </div>
            </section>
        </>

    );
};
