import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.isOn ? "white" : "black")};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isOn ? "yellow" : "white")};
  color: ${(props) => (props.isOn ? "black" : "black")};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;
`;
