import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap';

const FreeCart = () => {
  return (
    <div style={{ marginRight: "15%", width:"300%", height:"305px"}}>
 

    <Card className="my-2"  style={{background:"white"}}>
     
    <CardBody style={{display:"flex", flexDirection:"row", padding:"5%  10%", justifyContent:"space-between"}}>
    

            
            <svg  xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
           <CardText style={{ display:"flex" ,height:"30px",marginTop:"60px", justifyContent:"center" }}>
           Product is not found, please add product to cart.       </CardText>
           
  
     
   </CardBody>
 
  </Card>

</div>
  )
}

export default FreeCart