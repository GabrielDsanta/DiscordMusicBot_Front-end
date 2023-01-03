import styled from 'styled-components'

export const ContainerPlaylistsCards = styled.div`
    background-color: ${props => props.theme['background']};
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
export const ContainerCreatePlaylist = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 41rem;
`
export const CreatePlaylistButton = styled.button`
    background-color: #191919;
    width: 9rem;
    border: none;
    outline: none;
    height: 2.5rem;
    margin-bottom: .7rem;
    border-radius: 4px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-size: .9rem;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
`