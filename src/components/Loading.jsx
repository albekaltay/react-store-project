import React from 'react'
import {
  Card,
  CardBody,
  CardText,
  Spinner

} from 'reactstrap';

const Loading = () => {
  return (
    <div style={{  width:"300%", height:"305px"}}>
 

    <Card className="my-2"  style={{background:"white"}}>
     
    <CardBody style={{marginleft: "50%" ,display:"flex", flexDirection:"row", padding:"5% %20 5% 20%", justifyContent:"space-between"}}>
    

            
           
           <CardText style={{ margin:"0% 40% 0% 40%" ,  display:"flex" ,height:"30px", padding:"10%"}}>
           <Spinner 
       
           color="primary">
            Loading...
            </Spinner>       
            </CardText>
           
  
     
   </CardBody>
 
  </Card>
  </div>
  )
}

export default Loading