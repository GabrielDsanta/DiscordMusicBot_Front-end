import styled from "styled-components";

export const ContainerModal = styled.main`
  width: 30rem;
  height: 20rem;
  margin-top: -10rem;
  position: absolute;
  border-radius: 8px;
  background: #191919;

`
export const ContainerButtonCloseModal = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: end;
  button{
    border: 0;
    color: white;
    background: #191919;
    &:hover{
      color: ${(props => props.theme['red'])};
    }
  }
`
export const ContainerForm = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form{
    display: flex;
    justify-content: start;
    flex-direction: column;
  }
  input{
    width: 22rem;
    height: 1.8rem;
    font-size: 1rem;

    border-radius: 6px;
    border: 1px solid white;

    color: white;
    background: #191919;

    outline: none;
  }
`
export const ContainerMusic = styled.div`
  margin-top: 1rem;
`
export const ContainerButtonSubmit = styled.div`
  button{
      width: 22rem;
      height: 1.8rem;
      border: 0;
      color: white; 
      background: transparent;

      &:hover{
        background: ${(props) => props.theme['red']};
      }
  }
`