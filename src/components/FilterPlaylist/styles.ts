import styled from 'styled-components'

export const ContainerFilterButton = styled.button`
  background: ${(props) => props.theme['gray-800']};
  width: 3rem;
  border: none;
  outline: none;
  height: 2.5rem;
  margin-bottom: 0.7rem;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    transition: all 0.3s;
    color: ${(props) => props.theme['green-300']};
  }
`

export const ContainerFilterOptions = styled.div`
  position: absolute;
  width: 15rem;
  padding: 1rem;
  background: ${(props) => props.theme['gray-800']};
  right: 300px;
  top: 98px;
  border-radius: 4px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    padding-left: 1rem;
  }
`

export const ContainerInputFilterArtist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  height: 2rem;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-700']};
  color: #fff;
  font-size: 1rem;
`

export const ContainerButtonHandleFilter = styled.button`
  background-color: transparent;
  outline: none;
  color: #fff;
  border: none;
  padding-right: 1rem;
  cursor: pointer;

  :hover {
    transition: all 0.3s;
    color: ${(props) => props.theme['green-300']};
  }
`
