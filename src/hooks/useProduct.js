import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, useProduct];
}
export default useProduct;