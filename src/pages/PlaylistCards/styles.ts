import styled from 'styled-components'

export const ContainerPlaylistsCards = styled.div`
    background-color: ${props => props.theme['gray-900']};
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
    justify-content: space-between;
    width: 52rem;
    margin-right: 2rem;
`

export const CreatePlaylistButton = styled.button`
    background:${(props) => props.theme['gray-800']} ;
    width: 9rem;
    border: none;
    outline: none;
    height: 2.5rem;
    margin-bottom: .7rem;
    border-radius: 4px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-size: .9rem;
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

export const ContainerFilterButton = styled.button`
    background:${(props) => props.theme['gray-800']} ;
    width: 3rem;
    border: none;
    outline: none;
    height: 2.5rem;
    margin-bottom: .7rem;
    border-radius: 4px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover{
        transition: all .3s;
        color: ${(props) => props.theme['green-300']};
    }
`

export const ContainerFilterOptions = styled.div`
    position: absolute;
    width: 15rem;
    padding: 1rem;
    background:${(props) => props.theme['gray-800']} ;
    right: 300px;
    top: 98px;
    border-radius: 4px;

    input{
        background-color: transparent;
        border: none;
        outline: none;
        color: #FFF;
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
    color: #FFF;
    font-size: 1rem;
`

export const ContainerButtonHandleFilter = styled.button`
    background-color: transparent;
    outline: none;
    color: #FFF;
    border: none;
    padding-right: 1rem;
    cursor: pointer;

    :hover{
        transition: all .3s;
        color: ${(props) => props.theme['green-300']};
    }
`