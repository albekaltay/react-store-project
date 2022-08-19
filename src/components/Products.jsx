import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductAsync } from '../redux/slices/productsSlice';
import ProductCard from '../components/ProductCard';
import Loading from './Loading';





const Products = () => {

    const products = useSelector(state => state.products.items)
    const getProductIsLoading = useSelector(state => state.products.getProductIsLoading)



    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getProductAsync());

    }, [])
    
 
  return (
 <> 
    


    {getProductIsLoading ? <Loading></Loading>:    
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
    { products.map(product => ( 

        
       <ProductCard product={product} key={product.id}> </ProductCard> 
        

       
         ))}
         </div>
       
         }


 

  </>


  )
}

export default Products