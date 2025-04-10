import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { categories } from '../assets/assets'
import ProductCard from '../component/ProductCard'
const ProductCategory = () => {
    const {products}=useAppContext()
    const {category}=useParams()

    const searchCategory=categories.find((item)=>item.path.toLowerCase()===category)
    // const filteredProducts=products.filter((product)=>product.category===category)
    const filteredProducts = products.filter(
        (product) => product.category?.toLowerCase() === category.toLowerCase()
      );
      
  return (
    <div className='mt-16'>
      {searchCategory && (
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
      )}
      {filteredProducts.length > 0 ? (
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
{filteredProducts.map((product)=>(
    <ProductCard key={product.id} product={product}/>
))}
</div>
      ): (
<div className='flex items-center justify-center h-[60vh]'>
    <p className='text-2xl font-medium text-primary'>No products available in this category</p>

</div>
      )}
    </div>
  )
}

export default ProductCategory
