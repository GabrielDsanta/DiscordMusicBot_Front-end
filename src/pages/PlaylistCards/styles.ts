import styled from 'styled-components'

export const ContainerCreatePlaylist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 52rem;
  margin-right: 2rem;
`

export const ContainerPlaylistsCards = styled.div`
  background-color: ${(props) => props.theme['gray-900']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const ContainerCards = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
