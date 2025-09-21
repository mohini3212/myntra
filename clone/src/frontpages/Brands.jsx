"use client";
import { NavLink } from "react-router-dom"
import gsap from "gsap"
import { useEffect, useRef } from "react";


export const Brands=()=>{
 
           const cardRef = useRef([]);
   

    useEffect(() => {
        const ctx = gsap.context(() => {
            const element = cardRef.current;

            if(!element) return
            // set
            gsap.set(element, {
                opacity: 0,
                y: 50,
                scale: 1,
              
            })

            // to
            gsap.set(element, {
                duration: 2,
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "power3.out",
            })
        })
        return () => ctx.revert();
    }, []) 
    return(
        <>
        <section className="container1">
            <div className="categories">
                <h2 className="margin-top">GRANDS GLOBAL BRNDS</h2>
               <div className="grid grid-six-cols">
                          <NavLink to="/men">    
                <img ref={cardRef} src="images/men-section10.jpeg" alt="brands" />
                </NavLink> 
                 <NavLink to="/men"> 
                <img src="images/men-section11.jpeg" alt="brands" />
                  </NavLink>
                 <NavLink to="/men"> 
                <img src="images/men-section12.jpeg" alt="brands" />
                  </NavLink>
                 <NavLink to="/men"> 
                <img src="images/women-section22.jpeg" alt="brands" />
                  </NavLink>
                 <NavLink to="/men"> 
                <img src="images/women-section23.jpeg" alt="brands" />
                  </NavLink>
                 <NavLink to="/men"> 
                <img src="images/women-section13.jpeg" alt="brands" />
                </NavLink>
                </div> 
            </div>
        </section>
        </>
    )
}

