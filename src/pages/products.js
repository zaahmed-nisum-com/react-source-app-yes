import React, { useEffect, useState } from 'react';

function Products(props) {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/');
            const res = await response.json()
            setProducts(res)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            {products.length > 0 &&
                <div className='flex flex-row flex-wrap'>
                    {products.map((item, index) => {
                        return (
                            <div>
                                <img src={item.image} alt={item.image} />
                            </div>
                        )
                    })}
                </div>}
        </div>
    );
}

export default Products;