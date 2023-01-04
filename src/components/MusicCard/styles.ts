import styled from "styled-components";

export const ContainerButtonCloseModal = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: end;
  button{
    border: 0;
    color: ${(props => props.theme['gray-100'])};
    background: #191919;
    &:hover{
      color: ${(props => props.theme['red-500'])};
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
    width: 25rem;
    height: 1.8rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid ${(props => props.theme['gray-100'])};

    color: white;
    outline: none;
    background: transparent;


    &:hover{
      border: 1px solid ${(props => props.theme['green-300'])};
    }
    &::placeholder{
      color: ${(props => props.theme['gray-500'])};
    }
  }
`
export const ContainerPlaylistCard = styled.div`
  width: 25rem;
  height: 10rem;
  margin-top: 1rem;
  border-radius: 8px;
  background: ${(props => props.theme['gray-800'])};
`
export const ContainerPlaylistTitle = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:8px;
  background: ${(props) => props.theme['green-500']};

  font-size: 1.6rem;

`
export const ContainerDetails = styled.div`
    margin-top: 1rem;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap:1rem;
    img{
    width: 6rem;
    height: 5rem;
  }
`
export const ContainerButtonSubmit = styled.div`
  button{
     width: 25rem;
      height: 1.8rem;
      margin-top: 1rem;

      border: 0;
      border-radius: 4px;

      color: ${(props) => props.theme['white']}; 
      background: ${(props) => props.theme['green-300']};

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
      }

  }
`