import { NavLink } from "react-router-dom"

export const BrandMen = () => {
    return (
        <>
            <section className="container1">
                <div className="categories">
                    <h2 className="margin-top">GRANDS GLOBAL BRNDS</h2>
                    <div className="grid grid-six-cols ">
                        <NavLink to="/men">
                            <img src="images/men-section10.jpeg" alt="brands" />
                        </NavLink>
                        <NavLink to="/men">
                            <img src="images/men-section11.jpeg" alt="brands" />
                        </NavLink>
                        <NavLink to="/men">
                            <img src="images/men-section12.jpeg" alt="brands" />
                        </NavLink>
                        <NavLink to="/men">
                            <img src="images/men-section13.jpeg" alt="brands" />
                        </NavLink>
                        <NavLink to="/men">
                            <img src="images/men-section14.jpeg" alt="brands" />
                        </NavLink>
                        <NavLink to="/men">
                            <img src="images/men-section15.jpeg" alt="brands" />
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}