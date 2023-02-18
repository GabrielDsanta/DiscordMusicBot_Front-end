import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 40rem;
  height: 40rem;
  margin: 5rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme['gray-800']};
`
export const InformationUser = styled.div`
  width: 32.375rem;
  height: 25.125rem;
  margin-top: -5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 1rem;

    object-fit: cover;
    border-radius: 50%;
  }
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  span {
    margin-bottom: 1rem;
  }
`
export const UserNumbers = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;

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
  width: 38rem;
  height: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-500']};
`

export const Playlist = styled.div`
  width: 15rem;
  height: 10rem;
  margin: 0 1rem 0 1rem;

  background: ${(props) => props.theme['gray-100']};
`
