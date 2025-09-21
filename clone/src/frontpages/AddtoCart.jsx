import { WomenCard } from "../womensection/WomenCard";

const [cart, setCart] = useState([]);

export const AddtoCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);

  return(
    <>
    <div className="products grid grid-five-cols">
  {cardData.map((curElem, index) => (
    <WomenCard 
      key={index} 
      curElem={curElem} 
      addToCart={addToCart} 
    />
  ))}
</div>
    </>
  )
};