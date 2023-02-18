import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 50rem;
  height: 42rem;
  margin: 2rem auto;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme['gray-800']};
`
export const InformationUser = styled.div`
  width: 32.375rem;
  height: 25.125rem;

  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    top: 0%;
    object-fit: cover;
    border-radius: 50%;
  }
  span {
    gap: 0.2rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const UserNumbers = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    gap: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const UserPlaylist = styled.div`
  width: 100%;
  height: 20rem;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-800']};
`
export const Playlist = styled.div`
  width: 21rem;
  height: 15rem;
  padding: 1rem;
  margin: 0 1rem 0 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;

  cursor: pointer;
  border-radius: 6px;

  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['gray-700']};

  div {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: start;
    img {
      margin-bottom: 1rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &:hover {
    background: ${(props) => props.theme['gray-600']};
  }
`
