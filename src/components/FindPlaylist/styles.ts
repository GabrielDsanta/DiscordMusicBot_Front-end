import styled from 'styled-components'

export const ContainerFindPLaylist = styled.div`
  width: 25rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-800']};
`
export const InputFindPlaylist = styled.input`
  width: 24rem;
  height: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
  border: none;
  outline: none;
  border-radius: 4px;

  background: transparent;
  color: ${(props) => props.theme['gray-100']};
`
export const ContainerButtonFindPlaylist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;

  color: #fff;
  background-color: transparent;

  outline: none;
  border: none;
  cursor: pointer;

  :hover {
    transition: all 0.3s;
    color: ${(props) => props.theme['green-300']};
  }
`
