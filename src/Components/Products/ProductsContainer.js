import React,{useEffect,useState} from 'react'
import Products from './Products'

function ProductsContainer() {

    const [checked, setChecked] = useState({});
    const [products, setproducts] = useState([]);

    const handleChange = (isChecked) => {
        setChecked(isChecked);
    };


    useEffect(() => {
            //filter products here by stored or archived
    }, [checked])

    return (
            <Products  handleChangeFilter={handleChange} products={products}/>
    )
}

export default ProductsContainer
