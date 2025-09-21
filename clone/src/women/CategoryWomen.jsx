import { NavLink } from "react-router-dom";

export const CategoryWomen = () => {
    const categories = [
        { imgURL: "/images/women-section25.jpg" },
        { imgURL: "/images/women-section26.jpg" },
        { imgURL: "/images/women-section27.jpg" },
        { imgURL: "/images/women-section28.jpg" },
        { imgURL: "/images/women-section30.jpg" },
        { imgURL: "/images/women-section31.jpg" },
      { imgURL: "/images/women-section32.jpg" },
       { imgURL: "/images/women-section33.jpg" },
        { imgURL: "/images/women-section34.jpg" },
        { imgURL: "/images/women-section29.jpg" },
        { imgURL: "/images/women-section34.jpg" },
        { imgURL: "/images/women-section35.jpg" },
        
        
    ];

    return (
        <>
            
            <section className="margin-top">
                <div className="container1 ">
                    <h2 >SHOP BY CATEGORY</h2>
                    <div className="grid grid-six-cols ">
                        {categories.map((curElem, index) => (
                            <NavLink to="/women">
                            <div className="categories" key={index}>
                               <img src= {curElem.imgURL} alt="" />
                            </div>
                            </NavLink>
                        ))}
                    </div>

                </div>
            </section>
        </>

    );
};
