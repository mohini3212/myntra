import { useEffect, useState } from "react";
import detail from "../Api/detail.json";

export const SimilarProdm = () => {
    const [cardData, setCardData] = useState([])


    useEffect(() => {
        setCardData(detail)
    }, [])


    return (
        <>
            <main className="margin-top">
                <div className="container1">
                    <h2>SIMILAR PRODUCTS</h2>
                    <div className="grid grid-six-cols">
                        {
                            cardData.map((curElem) => {
                                const { imgUrl, name, info,ratingCount,rating,ratingImg, price, priceReduce, off, index } = curElem;
                                return (
                                    <div key={index} className="product-card">
                                        <img src={imgUrl} alt="" />
                                        <div className="rating-info">
                                            <h6>{rating}</h6>
                                            <img src={ratingImg} alt="" />
                                            <h6>{ratingCount}</h6>
                                        </div>
                                        <div className="card-content">
                                            <h6>{name}</h6>
                                            <p>{info}</p>
                                            <div className="card-price">
                                                <h6>{price}</h6>
                                                <p> <strike>{priceReduce}</strike> <span>{off}</span></p>
                                               
                                               
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}