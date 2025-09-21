import { NavLink } from "react-router-dom"

export const BrandWomen = () => {
    return (
        <>
            <section className="container1">
                <div className="categories">
                    <h2 className="margin-top">GRANDS GLOBAL BRNDS</h2>
                    <div className="grid grid-six-cols ">
                        <NavLink to="/women">
                            <img src="images/women-section18.jpeg" alt="brands" />
                             </NavLink>
                              <NavLink to="/women">
                            <img src="images/women-section19.jpeg" alt="brands" />
                            </NavLink>
                            <NavLink to="/women">
                            <img src="images/women-section20.jpeg" alt="brands" />
                            </NavLink>
                            <NavLink to="/women">
                            <img src="images/women-section21.jpeg" alt="brands" />
                            </NavLink>
                            <NavLink to="/women">
                            <img src="images/women-section22.jpeg" alt="brands" />
                            </NavLink>
                            <NavLink to="/women">
                            <img src="images/women-section23.jpeg" alt="brands" />
                       </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}