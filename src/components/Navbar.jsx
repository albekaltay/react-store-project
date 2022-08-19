import React, {useEffect, useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  
  } from 'reactstrap';
  import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import { logOut } from '../redux/slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartSummary from './CartSummary';


const NavbarComponent = (props) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isSuccess = useSelector(state => state.users.isSuccess);
    const activeUser = useSelector(state => state.users.activeUser);
    const token = useSelector(state => state.users.token);
    const carts = useSelector(state => state.carts.items)



    useEffect(() => {
        if (isSuccess === false) {
            navigate('/')
        }
    }, [isSuccess])
    
    const handleLogOut = () => { 
        dispatch(logOut());
    }
    

  return (
    <div>
    <Navbar  style={{ backgroundColor:"#9fafca" }} light>
        <NavbarBrand style={{ color:"#0e387a" }} href="/" className="me-auto">
          React Store 
        </NavbarBrand>
       
        
        {
            token && carts.length > 0 ? 
            <> 
            <CartSummary></CartSummary>
            &nbsp; &nbsp;&nbsp; &nbsp;
             <th>
             { activeUser[0]?.name.firstname.toUpperCase() + " " + activeUser[0]?.name.lastname.toUpperCase()  }  
             </th>
             </>
             : null 
        }
        &nbsp; &nbsp;&nbsp; &nbsp;
        { token ? 
        <> 
        <NavbarToggler  style={{ color:"#0e387a" }} onClick={toggleNavbar} className="me-2" />
        <Collapse  isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <RouterLink style={{ color:"#0e387a"}} className="nav-link" to="/home">Home</RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink style={{ color:"#0e387a"}} className="nav-link" to="/cart">Cart</RouterLink>
            </NavItem>
           
            <NavItem>
              <RouterLink style={{ color:"#0e387a"}} className="nav-link" to="/"  onClick={() => handleLogOut()}>Logout</RouterLink>
            </NavItem>
   
          </Nav>
        </Collapse>
        </>
       : null }
      </Navbar>



  </div>
  )
}

export default NavbarComponent