import { Brands } from "./Brands"
import { Categories } from "./Categories"
import {  Deal } from "./Deal"
import { HeroSection } from "./HeroSection"

export const FrontPg=()=>{
    return(
        <>
        <HeroSection/>
        <Deal/>
        <Brands/>
        <Categories/>
        </>
    )
}