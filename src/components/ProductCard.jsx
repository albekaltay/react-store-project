import React, {useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardImg,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    

    } from 'reactstrap';
import {  addProductToCart} from '../redux/slices/cartSlice';
import { getSingleProductAsync } from '../redux/slices/productsSlice';
;



const ProductCard = ({product}) => {

   const singleProduct=  useSelector(state => state.products.singleProduct)
   
  
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
   
    const dispatch = useDispatch();

   

    const handleSubmitButton = (id) =>  {
       

        dispatch(getSingleProductAsync(id));
        toggle();

    }
    


    const handleAddToCart = (product) => { 

        dispatch(addProductToCart(product));
        toggle === true && toggle();
    
        
    }

    


  return (

    

    <React.Fragment key={product.id}>
  <Card >
    <CardImg
    
      alt="Card image cap"
      src={product.image}
      top
   
      style={{ marginLeft:"100px", padding:"10%", width:"45%", height:"45%"}}

    />
    <CardBody style={{ display:"flex",flexDirection:"column"}}>
      <CardTitle tag="h6" style={{textOverflow:'ellipsis',overflow:"hidden", whiteSpace:"nowrap"}}>
        {product.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        style={{ fontSize:"12px",fontWeight:'bold' }} 
      >
        {product.price + " " + "₺"} 
      </CardSubtitle>
      
      <Button style={{width:"100%",marginTop:"5px"}} onClick={() => handleAddToCart(product)}>
            Add to Cart
      </Button>

      <Button style={{width:"100%",marginTop:"5px"}} onClick={() => handleSubmitButton(product.id)}>
            Product Details
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Product Details</ModalHeader>
        <ModalBody>
        <div style={{padding:"5%",width:"100%", height:"100%" }}> 
        <CardImg
    
      alt="Card image cap"
      src={singleProduct.image}
      top
      style={{ width:"30%", height:"30%"}}

        />

    <br/>  <br/> 

         <th>{"Tittle: " + singleProduct.title } </th>  <br/> 
         {singleProduct.description} <br/> <br/>
         <th>{singleProduct.price + " ₺" } </th>
         </div>
         
         {}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
   
    
    </CardBody>
  </Card>
  
  
  </React.Fragment>
  )
}

export default ProductCard