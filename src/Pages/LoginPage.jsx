import React, { useEffect, useState } from 'react'
import {Col, Card, Button,
    FormGroup, Label, Input} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginEmailPassword, getUsersAsync, userLoginAsync } from '../redux/slices/usersSlice'
import { useNavigate } from 'react-router'



const LoginPage = () => {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
 
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const isSuccess = useSelector(state => state.users.isSuccess)
 


  const handleSubmitButton = (data) =>  {
     

    
    dispatch(getLoginEmailPassword(data))
    dispatch(userLoginAsync(data));
  

  }

  useEffect(() => {
    dispatch(getUsersAsync())

    if (isSuccess) {
      navigate('/home')
    }
  


  }, [isSuccess])
  
  const errorMessage = useSelector(state => state.users.error)
  return (


 
    <Card className='input-group' style={{padding:"4%",width:"40%", display:"flex",margin:"6.31% 30% 6.31% 30%"}}>
    <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="username"
      placeholder="Please enter your email..."
      type="email"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
          />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Please enter your password..."
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
  </FormGroup>
  {isSuccess === false ? <div style={{fontWeight:"bold" , color: "#842029" , padding:"5%"}}>{errorMessage}</div> : null}
      <Button
      type='submit'
      onClick={() => handleSubmitButton({username,password})}
      >
        Login
      </Button>
    </Card>

 

  )
}

export default LoginPage