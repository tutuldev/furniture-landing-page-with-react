import React, { useState } from 'react';
import { products } from '../../utils/products';
import ProductCard from './ProductCard';
import btnIcon from '../../assets/button-icon.png'


const Product = ({headline}) => {

    const categories = ["Chair","Beds","Sofa","Lamp"]
    const [selectedCategory, SetSelectedCategory]= useState("Chair")
    const filteredProduct = products.filter((product)=>product.category === selectedCategory)
    const [visiableProduct,setVisibleProducts] = useState(4)

    const loadMoreProducts = ()=>{
        setVisibleProducts((prev)=> prev + 4)
    }

    return (
        <div>
            <div className='section-container'>
                <h2 className='text-4xl font-bold text-center my-8 '>{headline}</h2>

                {/* category tabs */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5
                mb-16 '>
                    <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                        {
                            categories.map((category)=>(
                                <button 
                                onClick={()=>{
                                    SetSelectedCategory(category);
                                    setVisibleProducts(4)
                                }}
                                 key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white
                                    transition-colors ${selectedCategory === category ? "bg-white text-primary": "text-secondary"}`}>{category}</button>
                            ))
                        }
                    </div>
                </div>

                {/* product grid */}
                <div className='grid grid-cols-1 sm:grid-cols2 md:grid-cols-4 gap-6'>
                    {
                        filteredProduct.slice(0,visiableProduct).map((product,index) =>(
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                </div>

                {/* loadmore button */}
                {
                    visiableProduct <filteredProduct.length && (
                        <div className='flex justify-center items-center mt-8'>
                            <button
                            onClick={loadMoreProducts}
                            className='text-base font-semibold text-primary flex items-center gap-1'>
                                      View All
                                    <img src={btnIcon} alt="arrow " />
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Product;