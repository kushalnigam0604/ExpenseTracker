import React from "react";
import styled from "styled-components";

export default function History(props) {
  
  return (
    <>
      <Container>
        <h3>Transaction History</h3>
        <ul>
          {props.listOfTransaction.map((item , key) => (
            <li key={key}>
            <span>{item.typeOfTransaction}</span>
            <span>{item.balance}</span>
            <span>{item.amount}</span>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: center;
  width: 50%;
  margin :auto;
ul{
  list-style: none;
}
li{
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
}
`
;
