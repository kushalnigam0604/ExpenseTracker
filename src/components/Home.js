import React from 'react';
import styled from 'styled-components';

export default function Home(props) {
  return (
    <>
    <Container>
      <span>Bank Balance</span>
      <p>{props.amount}</p>
    </Container>
    <p>storeAmount - {props.storeAmount}</p>
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
