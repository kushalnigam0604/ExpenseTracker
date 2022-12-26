import React , { useRef } from 'react'
import styled from 'styled-components';
// import { bindActionCreators } from 'redux';
import { useDispatch } from "react-redux";
import { actionCreators } from '../state';




export default function Transaction(props) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function handleClickForAdd() {
    props.Add(inputRef.current.value)
    dispatch(actionCreators.addReduxMoney(Number(inputRef.current.value)))
  }
  function handleClickForWithdraw() {
    props.Withdraw(inputRef.current.value)
    dispatch(actionCreators.withdrawReduxMoney(Number(inputRef.current.value)))

  }

  return (
    <>
    <Container>
      <span>Bank Balance</span>
      <p>{props.amount}</p>
    </Container>

    <BtnContainer>
    <input
        ref={inputRef}
        type="number"
        id="myNumber"
        placeholder='0'
      />

      <button className='btn btn-primary' onClick={handleClickForAdd}>Add Money</button>
      <button className='btn btn-primary' onClick={handleClickForWithdraw}>Withdraw Money</button>
    </BtnContainer>
      

    
    </>
  )
}



const Container = styled.div`
color: #eae0e0;
background-color: #053c5e;
text-align: center;
font-size: 30px;
font-weight: bold;
border: 1px solid #249de6;
border-radius: 3px;
width: 300px;
height: 200px;
margin: auto;
p{
  font-size: 70px
}
`
const BtnContainer = styled.div`
display: flex;
width: 25%;
margin: auto;
margin-top:10px;
justify-content: space-between;

`
