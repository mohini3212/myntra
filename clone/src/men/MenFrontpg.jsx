import { HeroSection } from "../frontpages/HeroSection"
import { BrandMen } from "./BrandMen"
import { CategoryMen } from "./CategoryMen"
import { DealMen } from "./DealMen"

export const MenFrontPg=()=>{
    return(
        <>
        <HeroSection/>
        <DealMen/>
        <BrandMen/>
        <CategoryMen/>
        </>
    )
}