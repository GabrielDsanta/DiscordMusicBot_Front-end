import styled from 'styled-components'

export const CreatePlaylistButton = styled.button`
  background: ${(props) => props.theme['gray-800']};
  width: 9rem;
  border: none;
  outline: none;
  height: 2.5rem;
  margin-bottom: 0.7rem;
  border-radius: 4px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin-right: -13.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    color: ${(props) => props.theme['green-300']};
  }
`
