import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Card, CardBody, CardTitle, CardText,CardImg , Button ,CloseButton,Alert} from 'reactstrap'
import { addProductToCart, decrementQuantity,deleteAllProductToCart,deleteProductToCart } from '../redux/slices/cartSlice'



const Carts = () => {
    
    const dispatch = useDispatch()


    const carts = useSelector(state => state.carts.items)
    
  
    const handleDecrementQuantity = (data) => {
      

  
      data.quantity === 1 ? alert("You can not decrease more than 1 quantity!") 
     
     : dispatch(decrementQuantity(data))
      
    }

     const handleAddProductToCart = (id) => {
       
    
        dispatch(addProductToCart(id))
      
    
    }
    const handleClearCart = () => {
      
      dispatch(deleteAllProductToCart())
    }
   
     

    
  return (
    <>
    <div style={{display:"flex", flexDirection:"column", width:"80%"}}>
     {carts?.map(cart => ( 

     <Card className="my-2"  key={cart.id} style={{height:"100%", width:"100%",paddingLeft:"5%"}}>
      
     <CardBody style={{display:"flex", flexDirection:"row", width:"128%"}}>
     <CardImg
    
     alt="Card image cap"
     src={cart.image}
     top
     style={{ width:"70px", height:"70px"}} 

     />
       <div style={{ display:"flex", flexDirection:"column", paddingLeft:"8%", width:"70%"}} > 
            <CardTitle tag="h5" style={{width:"50%"}}>
              {cart.title}
            </CardTitle>
      

            <CardText>
            </CardText>
            <div style={{ display:"flex", flexDirection:"row"}}>
                <Button
                  onClick={() => handleAddProductToCart({id:cart.id})} 
                  color="success"
                  outline
                  >
                  
                  +
                  
                  </Button>
                
                  

              <Button
             onClick={() => handleDecrementQuantity({id:cart.id,quantity:cart.quantity})}
              style={{ marginLeft:"2%", marginRight:"7%"}}
                  color="danger"
                  outline
                >
                  -
                </Button>
           
    
              <tex> 
                Quantity: {cart.quantity}
              </tex>
              <text  style={{ marginLeft:"100px", fontWeight:"bold"}}> 
        
                 {cart.quantity * Math.round(cart.price) + " " + "₺"}
              </text>
              
            </div>
      </div>      
      <CloseButton onClick={() => dispatch(deleteProductToCart({id:cart.id}))}/>
    </CardBody>
  
   </Card>
))} 
<Button 
              onClick={() => handleClearCart()}
              color="danger">
              Clear Cart
              </Button>
 </div>
</>
  )
}

export default Carts