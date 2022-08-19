import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Button
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllProductToCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router';


const CartSummary = () => {
 
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
  
    const carts = useSelector(state => state.carts.items)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleClearCart = () => {
      
      dispatch(deleteAllProductToCart())
    }

    

    return (
        <> 
      
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle caret size="lg">
         Cart List  &nbsp; &nbsp;
        </DropdownToggle>
        <DropdownMenu>
        {carts.map(cart => ( 
          <> 
          <DropdownItem header >{cart.title} &nbsp;  <Badge >   {cart.quantity} </Badge></DropdownItem>
          
         
  
         
          </>
          ))}
          <DropdownItem>
              <Button 
              onClick={() => handleClearCart()}
              color="danger">
              Clear Cart
              </Button>
              <Button
              style={{marginLeft: "10px"}}
              onClick={() => navigate("/cart")}
              >
              Go to Cart
              </Button>
        </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    
    </>
  )
}

export default CartSummary