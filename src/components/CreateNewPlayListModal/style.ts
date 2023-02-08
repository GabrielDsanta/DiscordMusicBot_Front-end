import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled.div`
  padding: 2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 6px;

  color: white;
  background: ${(props) => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 25rem;
    height: 1.8rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['gray-100']};

    color: white;
    outline: none;
    background: transparent;

    &:hover {
      border: 1px solid ${(props) => props.theme['green-300']};
    }
    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
export const ButtonClose = styled(Dialog.Close)`
  position: absolute;
  background: transparent;

  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;

  border: 0;
  color: ${(props) => props.theme['gray-100']};
  &:hover {
    color: ${(props) => props.theme['red-500']};
  }
`
export const PlaylistCard = styled.div`
  width: 25rem;
  height: 10rem;
  margin-top: 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-700']};
`
export const PlaylistTitle = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) => props.theme['green-500']};

  font-size: 1.6rem;
`
export const Details = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  img {
    width: 6rem;
    height: 5rem;
  }
`
export const ButtonSubmit = styled.div`
  button {
    width: 25rem;
    height: 1.8rem;
    margin-top: 1rem;

    border: 0;
    border-radius: 4px;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['green-300']};

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      cursor: pointer;
      background: ${(props) => props.theme['green-700']};
    }
  }
`
